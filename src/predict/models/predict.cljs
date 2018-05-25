(ns predict.models.predict
  "A cljs version of the predict model, enhanced with radiotherapy and bisphosphonates, and extended to 15 years."
  (:require [cljs.pprint :refer [pprint pp]]
            [predict.models.data-frame :refer [cell-apply cell-update cell-binary cell-binary-seq cell-sums cell-diffs]]))


(defn map-of-vs->v-of-maps
      "Transpose a map of vectors to a vector of maps.
      Resulting vector will be truncated to the length of the shortest input vector.
      e.g. {:a [0 1 2] :b [10 11 12]} -> [{:a 0 :b 10} {:a 1 :b 11} {:a 2 :b 12}]"
      [k-vs]
      (mapv (fn [vs]
                (into {} (map-indexed (fn [k v] [(nth (keys k-vs) k) v]) vs)))
            (apply map vector (vals k-vs))))

(def exp js/Math.exp)
(def ln js/Math.log)
(def pow js/Math.pow)
(def abs js/Math.abs)

(defn deltas [start v]
  "Calculate deltas of a seq, inserting start as the first value to compare"
  (into [] (map (fn [[a b]] (- b a)) (partition 2 1 (cons start v)))))

(comment
  (deltas 0 [1 2 4 8])
  ;=> [1 1 2 4]

  (deltas 1 [1 2 4 8]))
;=> [0 1 2 4]


(defn rec-age-10-sq
  "1/(age/10)^2"
  [age]
  (pow (/ age 10) -2.0))

(defn log-age-10
  "log(age/10)"
  [age]
  (ln (/ age 10)))

(comment
  (rec-age-10-sq 25)
  ; => 0.16
  (log-age-10 25))
; => 0.9162907318741551


(defn r-base-br
  "R: r.base.br
  Base breast cancer mortality coefficient for radiotherapy enabled or disabled."
  [radio?]
  (if radio? 0.133 0))                                      ;

(defn r-base-oth
  "R: r.base.oth
  Base other cause mortality coefficient"
  [radio?]
  (if radio? -0.047 0))                                     ;

#_(def dfs 0.023)                                           ; not for this version

(defn r-br
  "R: r.br breast mortality coefficient for radiotherapy treatment if enabled"
  [radio?]
  (if radio? -0.198 0))

(defn r-oth
  [radio?]
  "R: r.oth other mortality coefficient for radiotherapy treatment if enabled"
  (if radio? 0.068 0))

(defn prognostic-index
  "Calculate the breast cancer mortality prognostic index (pi).
  Comments relate this code to the corresponding R variables."
  [{:keys [age size nodes grade erstat detection her2-rh ki67-rh grade-a radio? bis?]
    :or   {age 65 size 19 nodes 1 grade 1 erstat 1 detection 0 her2-rh -0.0762 ki67-rh -0.11333 grade-a 0 radio? true bis? true}}]


  (+
    her2-rh                                                 ; -0.0762 (ok)
    ki67-rh                                                 ; -0.11333 (ok)
    (r-base-br radio?)                                      ; adjust baseline for radiotherapy (r.base.br)
    (if (pos? erstat)
      (+
        (* 34.53642 (+ (rec-age-10-sq age) -0.0287449295))  ; age.beta.1 * age.mfp.1 (er==1) (ok)
        (* -34.20342                                        ; age.beta.2 (er==1) (ok)
           (+ (* (rec-age-10-sq age)                        ; * age.mfp.2 (er==1) (ok)
                 (log-age-10 age))
              -0.0510121013))
        (* 0.7530729                                        ; size.beta (er==1) (ok)
           (+ (ln (/ size 100))                             ; * size.mfp (er==1) (ok)
              1.545233938))
        (* 0.7060723                                        ; nodes.beta (er==1) (ok)
           (+ (ln (/ (inc nodes) 10))                       ; * nodes.mfp (er==1) (ok)
              1.387566896))
        (* 0.746655 grade)                                  ; grade.beta (er==1) (ok)
        (* -0.22763366 detection))                          ; screen.beta (er==1) (ok)

      (+
        (* 0.0089827 (- age 56.3254902))                    ; age.beta.1 * age.mfp.1 (er==0)
        (* 2.093446 (+ (pow (/ size 100) 0.5) -0.5090456276)) ; size.beta * size.mfp (er==0)
        (* 0.6260541 (+ (ln (/ (inc nodes) 10)) 1.086916249)) ; nodes.beta * nodes.mfp (er==0)
        (* 1.129091 grade-a)))))                            ; grade.beta * grade.val (er==0)

(comment
  (prognostic-index {})
  ; => 0.36767712302758926
  (prognostic-index {:age 25 :size 1 :nodes 1 :grade 1 :detection 0 :her2_rh 0 :ki67_rh 0 :erstat 1 :radio? true}))
; => -0.4509327543042764



(defn m-oth-prognostic-index [age radio?]
  "Calculate the other mortality prognostic index"
  (+ (* 0.0698252 (+ (pow (/ age 10) 2) -34.23391957)) (r-base-oth radio?)))

(comment
  (m-oth-prognostic-index 65 false)
  ;=> 0.5597244192408362
  (m-oth-prognostic-index 65 true))
;=> 0.5127244192408361


(defn base-m-cum-br
  "baseline survival. Actually baseline-mortality! R: base.m.cum.br"
  [erstat tm]
  (if (pos? tm)
    (exp
      (if (pos? erstat)
        (+ 0.7424402
           (* -7.527762
              (pow (/ 1.0 tm) 0.5))
           (* -1.812513
              (pow (/ 1.0 tm) 0.5)
              (ln tm)))
        (+ -1.156036
           (/ 0.4707332 (pow tm 2))
           (/ -3.51355 tm))))

    0))


(defn age [y] (if (< y 25) 25 y))

(defn detection [d] ([0, 1, 0.204] d))

(defn grade-a
  [grade]
  (if (#{2 3} grade) 1 0))

(defn her2-rh
  [her2]
  (condp = her2
    1 0.2413                                                ;her2.beta (er==1)
    0 -0.0762                                               ;her2.beta (er==0)
    0))

(defn ki67-rh
  [erstat ki67]
  (if (pos? erstat)
    (condp = ki67
      1 0.14904                                             ;ki67.beta (er==1 && ki67)
      0 -0.11333                                            ;ki67.beta (er==1 && not ki67)
      0)                                                    ;ki67.beta (all other cases)
    0))

(comment
  (grade-a 2)
  ; => 1

  (her2-rh 1)
  ; 0.2413

  (ki67-rh 1 1))
;0.14904



(defn types-rx
  "Calculate treatment coefficients
  radio indicates radiotherapy is available in the interface and selected
  bis indicates bisphosphonates is available in the interface and selected
  c = chemo, h = hormone therapy, t = trastuzumab, r = radiotherapy, b = bisphosphonates

  Note that we _always_ calculate the same columns, but if a treatment is _not_ selected, then
  its associated treatment coefficients will be zero.

  e.g. The treatment combination hcb will be calculated as hrctb, but with r and c coefficients zeroed.
  "
  [{:keys [erstat her2 horm chemoGen radio? radio bis? bis tra]}]

  (let [z-vec [0 0 0]

        c-vec (condp = chemoGen
                2 [-0.360 -0.248 -0.136]
                3 [-0.579 -0.446 -0.313]
                z-vec)
        [c-high c c-low] c-vec

        h-vec (if (and (pos? erstat) horm)
                [-0.502 -0.3857 -0.212]
                z-vec)
        [h-high h h-low] h-vec

        t-vec (if (and (= her2 1) tra)
                [-0.533 -0.3567 -0.239]
                z-vec)
        [t-high t t-low] t-vec

        r-vec (if (and radio? radio)
                [-0.288 -0.198 -0.105]
                z-vec)
        [r-high r r-low] r-vec

        b-vec (if (and bis? bis)
                [-0.32 -0.198 -0.07]
                z-vec)
        [b-high b b-low] b-vec

        hr-vec (mapv #(+ h %) r-vec)
        [hr-high hr hr-low] hr-vec

        hrc-vec (mapv #(+ h r %) c-vec)
        [hrc-high hrc hrc-low] hrc-vec

        hrct-vec (mapv #(+ h r c %) t-vec)
        [hrct-high hrct hrct-low] hrct-vec

        hrctb-vec (mapv #(+ h r c t %) b-vec)
        [hrctb-high hrctb hrctb-low] hrctb-vec]

    ; change this if the presentation of treatment order changes
    {:z     0                                               ; surgery only
     :h     h :h-low h-low :h-high h-high
     :r     r :r-low r-low :r-high r-high
     :c     c :c-low c-low :c-high c-high
     :t     t :t-low t-low :t-high t-high
     :b     b :b-low b-low :b-high b-high
     :hr    hr :hr-low hr-low :hr-high hr-high
     :hrc   hrc :hrc-low hrc-low :hrc-high hrc-high
     :hrct  hrct :hrct-low hrct-low :hrct-high hrct-high
     :hrctb hrctb :hrctb-low hrctb-low :hrctb-high hrctb-high}))


(defn cljs-predict
  "clojure/script implementation of predict-v2 model.

  Predicts survival based on patient input parameters.

  Arguments age, size and nodes are entered as values; the others as lookups
  # This is how the model assigns some input parameters (or ranges) into variables
  # i.e. parameter (or ranges) -> web form setting -> Predict model variable setting
  # Tumour Grade (1,2,3,unknown) -> (1,2,3,9) -> (1.0,2.0,3.0,2.13)
  # ER Status (-ve,+ve) -> (0,1) -> (0,1) n.b. unknown not allowed
  # Detection (Clinical,Screening,Other) -> (0,1,2) -> (0.0,1.0,0.204)
  # HER2 Status (-ve,+ve,unknown) -> (0,1,9)
  # KI67 Status (-ve,+ve,unknown) -> (0,1,9)

  We are now passing in the selected treatments so we don't have to calculate all possible
  treatment combinations on each call. Instead, we calculate the treatment combinations that
  could make up the current set in hrctb order

  This means that if we see non-null horm, chemoGen, bis values, we will calculate
  h, hc, hb, hcb only.

  Note:
  For uncertainties in the coefficients h,c,t etc, see docs/Predictv2-uncertainties.docx
  "

  [{:keys [age size nodes grade erstat detection her2 ki67 rtime radio? bis? chemoGen horm radio bis tra]
    :as   inputs}]

  (let [age (if (< age 25) 25 age)
        detection ([0, 1, 0.204] detection)
        grade ([1, 2, 3, 2.13] (if (= grade 9) 3 (dec grade)))
        grade-a (grade-a grade)
        her2-rh (her2-rh her2)
        ki67-rh (ki67-rh erstat ki67)
        chemo (pos? chemoGen)

        types-rx (types-rx inputs)
        types (map first types-rx)
        pi (prognostic-index {:age       age
                              :size      size
                              :nodes     nodes
                              :grade     grade
                              :grade-a   grade-a
                              :erstat    erstat
                              :detection detection
                              :her2-rh   her2-rh
                              :ki67-rh   ki67-rh
                              :radio?    radio?})
        mi (m-oth-prognostic-index age radio?)              ;ok
        times (range (inc (js/Math.round rtime)))


        ;------
        ; Generate cumulative baseline other mortality       base.m.cum.oth R 116
        base-m-cum-oth (map #(exp (+ -6.052919 (* 1.079863 (ln %)) (* 0.3255321 (pow % 0.5)))) times)

        ; Generate cumulative survival non-breast mortality  s.cum.oth R 119
        s-cum-oth (map #(exp (* (- (exp mi)) %)) base-m-cum-oth)

        base-m-oth (deltas 0 base-m-cum-oth)                ;base.m.oth (ok)       (was bs-deltas)

        m-cum-oth (mapv (fn [tm] (- 1 (nth s-cum-oth tm))) times) ; m.cum.oth (ok)

        m-oth (deltas 0 m-cum-oth)                          ;m.oth (ok)


        r-oth (r-oth radio?)

        rx-oth (->> types
                    (map (fn [type] [type (if (and radio? (some #{"r"} (name type))) r-oth 0)]))
                    (into {}))

        xf-m-oth-rx (fn [type]
                      [type (map (fn [tm]
                                   (* (base-m-oth tm) (exp (+ mi (type rx-oth)))))
                                 times)])

        s-cum-oth-rx (into {}
                           (comp
                             (map xf-m-oth-rx)              ; -> m-oth-rx               R 126
                             (map cell-sums)                ; -> m-cum-oth-rx (state 1) R 140
                             (map (cell-apply #(->> % (-) (exp))))) ; -> s-cum-oth-rx        R 143

                           types)


        #_#_m-oth-rx (into {}
                           (comp
                             (map (cell-apply #(- 1 %)))    ; -> m-cum-oth-rx (state 1) R 146
                             (map (cell-diffs 0)))          ; -> m-oth-rx               R 148
                           s-cum-oth-rx)

        ;------
        ; Generate annual baseline breast mortality
        ; R 161
        base-m-br (->> times                                ;base.m.br (ok)   R 164
                       (map (partial base-m-cum-br erstat))
                       (deltas 0))

        m-br-rx-xf-1 (fn [type] [type (map #(* (exp (+ (type types-rx) pi)) %) base-m-br)])

        s-cum-br-rx (into {}
                          (comp
                            (map m-br-rx-xf-1)              ; -> m-br-x       R 171
                            (map cell-sums)                 ; -> m-cum-br-rx  R 178
                            (map (cell-apply #(->> % (-) (exp))))) ; -> s-cum-br-rx R 181

                          types)

        m-br-rx (into {}
                      (comp
                        (map (cell-apply #(- 1 %)))         ; -> m-cum-br-rx  R 184
                        (map (cell-diffs 0)))               ; -> m-br-rx      R 187
                      s-cum-br-rx)

        #_(comment
            ; Generate the annual breast cancer specific mortality rate
            ; R 171
            m-br-rx (->> types-rx                           ;m.br.rx (ok - state 1)
                         (map (fn [[type rx]]
                                [type (map #(* (exp (+ rx pi)) %) base-m-br)]))
                         (into {}))

            ; Calculate the cumulative breast cancer mortality rate
            ; R 178
            m-cum-br-rx (->> types                          ;m.cum.br.x (ok - state 1!)
                             (map (fn [type]
                                    [type (reductions + (m-br-rx type))]))
                             (into {}))



            ; Calculate the cumulative breast cancer survival
            ; R 181
            s-cum-br-rx (->> types                          ;s.cum.br.rx (~ ok)
                             (map (fn [type]
                                    [type (map #(exp (- %)) (m-cum-br-rx type))]))
                             (into {}))

            ; Convert cumulative mortality rate into cumulative risk
            ; R 184
            m-cum-br-rx (->> types                          ;m.cum.br.rx (~ ok state 2)
                             (map (fn [type]
                                    [type (map #(- 1 %) (s-cum-br-rx type))]))
                             (into {}))

            ; R 187
            m-br-rx (->> types                              ;m.br.rx (~ ok state 2)
                         (map (fn [type] [type (deltas 0 (m-cum-br-rx type))]))
                         (into {})))


        ; Cumulative all cause mortality conditional on surviving breast and all cause mortality
        ; R 194
        m-all-rx (into {}
                       (comp
                         (map (cell-binary #(- 1 (* %1 %2)) s-cum-br-rx))
                         ;(map (cell-update (fn [type tm old] (- 1 (* old (nth (s-cum-br-rx type) tm))))))
                         (map (cell-diffs 0)))
                       s-cum-oth-rx)
        ;---------
        ; Proportion of all cause mortality that is breast cancer

        pred-m-br-rx (into {}
                           (comp
                             ; do not replace the following call with cell-binary without special casing tm == 0
                             (map (cell-update (fn [type tm old] (if (> tm 0) (/ old (+ old (nth m-oth tm))) 0)))) ; prop-br-rx R 200
                             (map (cell-binary * m-all-rx))
                             ;(map (cell-update (fn [type tm old] (* old (nth (type m-all-rx) tm)))))
                             )
                           m-br-rx)

        pred-cum-br-rx (into {}
                             (map cell-sums)                ; pred-cum-br-rx R 202
                             pred-m-br-rx)

        #_#_pred-cum-oth-rx (into {}
                                  (comp
                                    (map (cell-update (fn [type tm old] (- old (nth (type pred-m-br-rx) tm)))))
                                    (map cell-sums))
                                  m-all-rx)

        pred-cum-all-rx (into {}
                              (comp
                                (map (cell-binary #(- %2 %1) pred-m-br-rx)) ;pred-m-oth-rx R 203
                                ;(map (cell-update (fn [type tm old] (- old (nth (type pred-m-br-rx) tm))))) ;pred-m-oth-rx R 203
                                (map cell-sums)             ; pred-cum-oth-rx R204
                                (map (cell-binary + pred-cum-br-rx))
                                ;(map (cell-update (fn [type tm old] (+ old (nth (type pred-cum-br-rx) tm)))))
                                )                           ; pred-cum-all-rx R 205
                              m-all-rx)

        surg-only (map #(- 1 %) (:z pred-cum-all-rx))

        benefits2-1 (assoc (into {}
                                 (map (cell-binary-seq - (:z pred-cum-all-rx)))
                                 ;(map (cell-update (fn [type tm old] (- (nth (:z pred-cum-all-rx) tm) old))))
                                 pred-cum-all-rx)
                      :z surg-only
                      :oth (:z s-cum-oth-rx))
        ]

    ; return
    ;   benefits2-1 - a map of vectors of benefits by year
    ;   annual-benefits a vector by year of benefit maps

    {:benefits2-1     benefits2-1
     :annual-benefits (map-of-vs->v-of-maps benefits2-1)}))





(ns predict.results.util
  (:require [clojure.string :refer [index-of split join]]
            [goog.color :as col :refer [parse lighten rgbToHex hexToRgb rgbArrayToHex blend]]))

;;
;; Used in results processing, where the model returns a map of keys are treatment keys, and each treatment keys a
;; vector of results indexed by year
;;
(defn map-of-vs->v-of-maps
  "Transpose a map of vectors to a vector of maps.
  Resulting vector will be truncated to the length of the shortest input vector.
  e.g. {:a [0 1 2] :b [10 11 12]} -> [{:a 0 :b 10} {:a 1 :b 11} {:a 2 :b 12}]"
  [k-vs]
  (mapv (fn [vs]
          (into {} (map-indexed (fn [k v] [(nth (keys k-vs) k) v]) vs)))
        (apply map vector (vals k-vs))))
(comment
  (map-of-vs->v-of-maps {:a [0 1 2] :b [10 11 12]})
  ;=> [{:a 0 :b 10} {:a 1 :b 11} {:a 2 :b 12}]
  (map-of-vs->v-of-maps {:a [] :b []})
  ;=> []
  (map-of-vs->v-of-maps {:a [1 2 3] :b [4 5] :c [6 7 8]}))
;=> [{:a 1, :b 4, :c 6} {:a 2, :b 5, :c 7}]

(def treatment-keys
  "An ordered list of treatment keys. The order corresponds to the display order."
  [:surgery
   :horm :horm-low :horm-high
   :radio :radio-low :radio-high
   :chemo :chemo-low :chemo-high
   :tra :tra-low :tra-high
   :bis :bis-low :bis-high
   :br :oth])

(def treatment-keys*
  "An ordered list of treatment keys without uncertainty. The order corresponds to the display order."
  [:surgery
   :horm
   :radio
   :chemo
   :tra
   :bis
   :br :oth])


(defn make-precursors
  "Extract the treatment precursors and the treatment from a combination key which may have a '-high' or '-low' suffix.
  :hrct-high -> [:hrc-high :t-high]
  :hrc -> [:hr :c]"
  [key]
  (let [[tks suffix] (split (name key) #"-")]
    [key [(keyword (join (butlast tks))) (keyword (str (last tks) (when suffix (str "-" suffix))))]]))

(defn precursors*
  "Given a seq of treatment-keys - usually from a result calculation - return a map of key to its precursors"
  [result-keys]
  (into {} (map make-precursors result-keys)))

(def precursors (memoize precursors*))

(comment
  (precursors [:h :h-high :h-low :r :r-high :r-low :hr :hr-high :hr-low])
  ;=>
  #_([:h [nil :h]]
      [:h-high [nil :h-high]]
      [:h-low [nil :h-low]]
      [:r [nil :r]]
      [:r-high [nil :r-high]]
      [:r-low [nil :r-low]]
      [:hr [:h :r]]
      [:hr-high [:h-high :r-high]]
      [:hr-low [:h-low :r-low]]))

(defn lookup-delta
  [result key]
  (let [[pre-k final-k] (key (precursors (keys result)))]
    (if (and pre-k (> (js/Math.abs (pre-k result)) 0.005))
      (- (key result) (pre-k result))
      (final-k result))))

(defn lookup**
  [{:keys [result key]}]
  (* 100 (condp = key
           :surgery (lookup-delta result :z)

           :horm (lookup-delta result :h)
           :horm-low (lookup-delta result :h-low)
           :horm-high (lookup-delta result :h-high)

           :radio (lookup-delta result :hr)
           :radio-low (lookup-delta result :hr-low)
           :radio-high (lookup-delta result :hr-high)

           :chemo (lookup-delta result :hrc)
           :chemo-low (lookup-delta result :hrc-low)
           :chemo-high (lookup-delta result :hrc-high)

           :tra (lookup-delta result :hrct)
           :tra-low (lookup-delta result :hrct-low)
           :tra-high (lookup-delta result :hrct-high)

           :bis (lookup-delta result :hrctb)
           :bis-low (lookup-delta result :hrctb-low)
           :bis-high (lookup-delta result :hrctb-high)

           :oth (- 1 (:oth result))
           ; default
           0)))

;;;
;; Most browsers do not print background colours without the user setting a preference to do so.
;; We can paint divs with a background image, but we need to generate them algorithimcally.
;; Let's have a go at making dataURLs to paint backgrounds...
;;
;; See http://jsfiddle.net/LPxrT/
;;
(defn encode-triplet [e1 e2 e3]
  (let [keys (into [] "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=")
        enc1 (bit-shift-right e1 2)
        enc2 (bit-or (bit-shift-left (bit-and e1 3) 4) (bit-shift-right e2 4))
        enc3 (bit-or (bit-shift-left (bit-and e2 15) 2) (bit-shift-right e3 6))
        enc4 (bit-and e3 63)]
    (join [(keys enc1) (keys enc2) (keys enc3) (keys enc4)])))


(defn encode-rgb [r g b]
  (join [(encode-triplet 0 r g) (encode-triplet b 255 255)]))

(defn generate-pixel [encoded-color]
  (join ["data:image/gif;base64,R0lGODlhAQABAPAA" encoded-color "/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="]))

(defn fill-data-url [r g b]
  (generate-pixel (encode-rgb r g b)))

(def hex-palette
  {:surgery "#272a75"
   :horm "#2fa8f2"
   :radio "#238600"
   :chemo "#ef975b"
   :tra "#d838b9"
   :bis "#2254e0"
   :callout "#e29528"
   :dashed "#ffaa00"
   :invalid "#ff0000"
   :br "#fcc"
   :oth "#888"})

(defn rgb-rx [key] (js->clj (hexToRgb (key hex-palette))))

(def rgb-palette (into {} (map (fn [k] [k (rgb-rx k)]) (keys hex-palette))))

(comment
  (def rgb-palette
    {:surg  [39 42 17]
     :horm  [47 168 242]
     :radio [35 134 0]
     :chemo [239 151 91]
     :tra   [216 56 185]
     :bis   [34 84 224]}))

(defn data-palette [key]
  (apply fill-data-url (rgb-palette key)))

(def fills (into [] (vals hex-palette)))

(defn fill
  ([index] (fills index)))

(def data-fill data-palette)

(def callout-fill (:callout hex-palette))
(def callout-data-fill (:callout data-palette))



(defn stepsToRGBArray
  [index]
  (hexToRgb (fill index)))


(comment
  "these urls should display in browsers as the basic stepped colours"
  (data-fill 0)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAHG03P///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 1)
  ; => "data:image/gif;base64,R0lGODlhAQABAPAAAGaMwv///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="

  (data-fill 3))
; => "data:image/gif;base64,R0lGODlhAQABAPAAAFA8j////yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="


(def dashed-stroke (:dashed hex-palette))

(def without-stroke {:stroke dashed-stroke :strokeDasharray "8,8" :strokeWidth 5 :strokeLinecap "round"})

(def min-label-percent 3)

(defn treatment-fills [index]
  "survival colour bands by data-index"
  (cond
    (<= index 5)
    (fill (- 5 index))

    (= index 6)
    "#ffffff"

    (= index 7)
    "#000000"))



; use a line to indicate women's survival without breast cancer
(def use-line false)


;;
;; models may recalculate data based on what is required for the currently selected presentation
;;

(defn clip [{:keys [value min max]
             :or   {value 0 min 0 max 10}}]
  "clip a value to be between min and max inclusively"
  (if (> value max)
    max
    (if (< value min)
      min
      value)))

(defn toPrecision
  [f & [high]]
  (js/parseFloat (.toPrecision (js/Number. f) (if (>= f 10) 2 (if high 2 1)))))


(defn avoid-decimals [d & [high]]
  "return a string representation of a number such as a percentage."
  (let [p (if (< d 10) (if high 1 0) 0)
        ret (.toFixed (js/Number. d) p)]
    ; for negative low precision numbers close to 0, we don't want "-0".
    (if (= ret "-0") "0" ret)))

(comment
  (avoid-decimals 0.0032 true)
  (avoid-decimals 0.0032 false))


;todo: find-usages and delete
(defn to-percent
  "convert float fraction to a decimal percent value at full precision"
  [f & [high]]
  (* 100 f))


(defn benefit% [data key & [high]]
  "Returns a sensibly rounded percentage benefit for given treatment
  If high, allow just one decimal place"
  (str (avoid-decimals (key data) high) "%"))

(defn benefits% [data & keys]
  (str (avoid-decimals (apply + (map #(% data) keys))) "%"))

(comment
  (to-percent 0.0032 false)                                 ;=> 0.3
  (to-percent 0.0032 true)                                  ;=> 0.32
  (to-percent 0.0032)                                       ;=> 0.3
  (to-percent 0.2345 true)
  (to-percent 0.002345))



(defn strip-to
  "Treatment keys have a root and may have a treatment option suffix or a subtype suffix - which we don't always want
  when testing what is present on screen."
  [query key]
  (if key
    (let [s (name key)
          x (index-of s query)]
      (if (pos? x)
        (keyword (.substr s 0 x))
        key))
    nil))


(def strip-root (partial strip-to "-"))

;;;
;; Data items to plot, tabulate, whatever
;;;

; defines a data-item.
(defrecord Item [treatment-key value])

;;
;; Chart annotation texts for use in callouts, titles, sub-titles etc.
;;

;;
;; for v1.2 and v2
;;
(def treatment-callout-templates
  {"v1.2"     {:surgery "survival with no adjuvant treatment"
               :horm    "benefit of adjuvant hormone treatment"
               :chemo   "additional benefit of adjuvant chemotherapy"
               :tra     "additional benefit of trastuzumab"
               :no-bc   "survival with no breast cancer"}

   "v2.1"     {:surgery "survival with no adjuvant treatment"
               :horm    "benefit of adjuvant hormone treatment"
               :chemo   "additional benefit of adjuvant chemotherapy"
               :tra     "additional benefit of trastuzumab"
               ;:br      "women without breast cancer"
               :oth     "death from other causes"}

   "next-gen" {:surgery "survival with no adjuvant treatment"
               :horm    "benefit of adjuvant endocrine therapy"
               :chemo   "additional benefit of adjuvant chemotherapy"
               :tra     "additional benefit of trastuzumab"
               :radio   "additional benefit of radiotherapy"
               :bis     "additional benefit of bisphosphonates"
               :no-bc   "survival with no breast cancer"}
   "research" {:surgery "survival with no adjuvant treatment"
               :horm    "benefit of adjuvant endocrine therapy"
               :chemo   "additional benefit of adjuvant chemotherapy"
               :tra     "additional benefit of trastuzumab"
               :radio   "additional benefit of radiotherapy"
               :bis     "additional benefit of bisphosphonates"
               :no-bc   "survival with no breast cancer"}})


(defn treatment-callout-text
  [model treatment-key benefit]
  (str benefit "% " (get-in treatment-callout-templates [model treatment-key])))

(defn lookup
  "Derive a plausible value for each individual treatment from the combined benefit values that Predict
  v2.1 gives us."
  [{:keys [model treatments result key horm-yes tra-yes]}]

  ; todo: find usages and delete

  (let [treatments (into #{} treatments)]

    ;(println "looking up " key " (from " treatments ") in \n" result)
    (println "hrct" (:cumOverallSurCHT result) "hrc" (:cumOverallSurCandH result))
    (cond
      (= key :surgery) (to-percent (:cumOverallSurOL result))

      (= key :horm) (to-percent (if horm-yes (:cumOverallSurHormo result) 0))
      (= key :horm-low) (to-percent (if horm-yes ((:marginSurHormo result) 0) 0))
      (= key :horm-high) (to-percent (if horm-yes ((:marginSurHormo result) 1) 0))

      (= key :chemo) (to-percent (if (and (treatments :horm) horm-yes)
                                   (- (:cumOverallSurCandH result) (:cumOverallSurHormo result))
                                   (:cumOverallSurChemo result)))

      (= key :chemo-low) (to-percent (if (and (treatments :horm) horm-yes)
                                       (- ((:marginSurCandH result) 0) (:cumOverallSurHormo result))
                                       ((:marginSurChemo result) 0)))

      (= key :chemo-high) (to-percent (if (and (treatments :horm) horm-yes)
                                        (- ((:marginSurCandH result) 1) (:cumOverallSurHormo result))
                                        ((:marginSurChemo result) 1)))

      (= key :tra) (to-percent (if (and (treatments :tra)
                                        tra-yes
                                        (treatments :chemo))
                                 (- (:cumOverallSurCHT result) (:cumOverallSurCandH result))
                                 0))


      (= key :tra-low) (to-percent (if (and (treatments :tra)
                                            tra-yes
                                            (treatments :chemo))
                                     (- ((:marginSurCHT result) 0) (:cumOverallSurCandH result))
                                     0))


      (= key :tra-high) (to-percent (if (and (treatments :tra)
                                             tra-yes
                                             (treatments :chemo))
                                      (- ((:marginSurCHT result) 1) (:cumOverallSurCandH result))
                                      0))


      (= key :br) (to-percent (:br result))
      (= key :oth) (to-percent (:oth result))
      :else 0)))





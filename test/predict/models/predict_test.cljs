(ns predict.models.predict-test
  (:require [clojure.test :refer [deftest is testing]]
            [predict.models.predict :refer [exp ln pow abs
                                            deltas rec-age-10-sq log-age-10
                                            r-base-br r-br r-base-oth r-oth detection grade-a her2-rh ki67-rh
                                            prognostic-index m-oth-prognostic-index
                                            base-m-cum-br age
                                            types-rx
                                            cljs-predict
                                            ]]))

(def default-epsilon "default float tolerance" 1e-8)

(defn approx=
  ([a b epsilon]
   (< (abs (- a b)) epsilon))
  ([a b]
   (approx= a b default-epsilon)))

(deftest simple-functions
  (testing "deltas"
    (is (= [1 1 2 4] (deltas 0 [1 2 4 8])))
    (is (= [0 1 2 4] (deltas 1 [1 2 4 8])))
    ))

(deftest rec-age-10-sq-test
  (testing "rec-age-10-sq"
    (is (= 1 (rec-age-10-sq 10)))
    (is (= 0.25 (rec-age-10-sq 20)))
    (is (approx= 0.16 (rec-age-10-sq 25)))
    )
  )

(deftest log-age-10-test
  (testing "log-age-10"
    (is (= 1 (log-age-10 (* js.Math.E 10)))))
  )

(deftest base-constants-test
  (is (= [0.133 0] [(r-base-br true) (r-base-br false)]))
  (is (= [-0.047 0] [(r-base-oth true) (r-base-oth false)]))
  (is (= [-0.198 0] [(r-br true) (r-br false)]))
  (is (= [0.068 0] [(r-oth true) (r-oth false)]))
  (is (= [0, 1, 0.204] (mapv detection (range 3))))
  (is (= [0 1 1 0] (mapv grade-a (range 1 5))))
  (is (= [-0.0762 0.2413] (mapv her2-rh [0 1])))
  (is (= [-0.11333 0.14904 0 0] (mapv #(apply ki67-rh %1) [[1 0] [1 1] [0 0] [0 1]])))
  )

(deftest prognostic-index-test
  (is (approx= 0.5006471230275893 (prognostic-index {})))
  (is (= -0.5074627543042763 (prognostic-index {:age 25 :size 1 :nodes 1 :grade 1 :detection 0 :her2_rh 0 :ki67_rh 0 :erstat 1 :radio? true})))
  (is (approx= -0.36397949827304354 (prognostic-index {:age 90 :size 10 :nodes 2 :grade 2 :detection 0 :her2_rh 0 :ki67_rh 0 :erstat 0 :radio? false})))
  (is (approx= -0.8680964143042763 (prognostic-index {:age 25 :size 1 :nodes 1 :grade 1 :detection 1 :her2_rh 1 :ki67_rh 1 :erstat 1 :radio? false}))))

(deftest m-oth-prognostic-index-test
  (is (approx= 0.5597244192408362 (m-oth-prognostic-index 65 false)))
  (is (approx= 0.5127244192408361 (m-oth-prognostic-index 65 true)))
  )

(deftest base-m-cum-br-test
  (testing "base-m-cum-br"
    (is (approx= 0.015012789617578808 (base-m-cum-br 0 1)))
    (is (approx= 0.0011302439325964351 (base-m-cum-br 1 1)))
    (is (approx= 0.05193237928632519 (base-m-cum-br 1 10)))
    (is (approx= 0.22253215565946607 (base-m-cum-br 0 10)))
    ))

(deftest age-test
  (testing "age-clamp"
    (is (= 25 (age 16)))
    (is (= 30 (age 30))))
  )

(deftest types-rx-test
  (testing "types-rx"
    (is (= {:r-low      0,
            :h-high     0,
            :r          0,
            :hr         0,
            :b-high     0,
            :hrc-high   -0.579,
            :hrct       -0.446,
            :hrctb-high -0.446,
            :h-low      0,
            :hrc-low    -0.313,
            :c-low      -0.313,
            :hrct-low   -0.446,
            :hr-low     0,
            :hrc        -0.446,
            :hrctb-low  -0.446,
            :z          0,
            :c          -0.446,
            :hrct-high  -0.446,
            :hrctb      -0.446,
            :h          0,
            :t-high     0,
            :b          0,
            :c-high     -0.579,
            :t          0,
            :hr-high    0,
            :b-low      0,
            :t-low      0,
            :r-high     0}
           (types-rx {:erstat 0 :her2 0 :horm :h5 :chemoGen 3 :radio? false :bis? false :bis 1 :tra 1} 0)) "0 :h5 0")

    (is (= {:r-low 0, :h-high -0.502, :r 0, :hr -0.3857, :b-high -0.32, :hrc-high -0.9646999999999999, :hrct -1.1884000000000001, :hrctb-high -1.5084000000000002, :h-low -0.212, :hrc-low -0.6987, :c-low -0.313, :hrct-low -1.0707, :hr-low -0.3857, :hrc -0.8317, :hrctb-low -1.2584000000000002, :z 0, :c -0.446, :hrct-high -1.3647, :hrctb -1.3864, :h -0.3857, :t-high -0.533, :b -0.198, :c-high -0.579, :t -0.3567, :hr-high -0.3857, :b-low -0.07, :t-low -0.239, :r-high 0}
           (types-rx {:erstat 1 :her2 1 :horm :h5 :chemoGen 3 :radio? false :bis? true :bis 1 :tra 0}
                     0)) "1 :h5 0")

    (is (= {:r-low 0, :h-high -0.502, :r 0, :hr -0.3857, :b-high -0.32, :hrc-high -0.9646999999999999, :hrct -1.1884000000000001, :hrctb-high -1.5084000000000002, :h-low -0.212, :hrc-low -0.6987, :c-low -0.313, :hrct-low -1.0707, :hr-low -0.3857, :hrc -0.8317, :hrctb-low -1.2584000000000002, :z 0, :c -0.446, :hrct-high -1.3647, :hrctb -1.3864, :h -0.3857, :t-high -0.533, :b -0.198, :c-high -0.579, :t -0.3567, :hr-high -0.3857, :b-low -0.07, :t-low -0.239, :r-high 0}
           (types-rx {:erstat 1 :her2 1 :horm :h5 :chemoGen 3 :radio? false :bis? true :bis 1 :tra 0}
                     11)) "1 :h5 11")

    (is (= {:r-low 0, :h-high -0.702, :r 0, :hr -0.5857, :b-high -0.32, :hrc-high -1.1646999999999998, :hrct -1.3884, :hrctb-high -1.7084000000000001, :h-low -0.41200000000000003, :hrc-low -0.8987, :c-low -0.313, :hrct-low -1.2707000000000002, :hr-low -0.5857, :hrc -1.0317, :hrctb-low -1.4584000000000001, :z 0, :c -0.446, :hrct-high -1.5647000000000002, :hrctb -1.5864, :h -0.5857, :t-high -0.533, :b -0.198, :c-high -0.579, :t -0.3567, :hr-high -0.5857, :b-low -0.07, :t-low -0.239, :r-high 0}
           (types-rx {:erstat 1 :her2 1 :horm :h10 :chemoGen 3 :radio? false :bis? true :bis 1 :tra 0}
                     11)) "1 :h10 11")

    ))

#_(deftest cljs-predict-test
    (testing "v2.1 model"
      (is (= '(0
                0.0014235998353466783
                0.005289672012324664
                0.010759822493926374
                0.017200767587482346
                0.024213922849740006
                0.0315433093601687
                0.0390198769320368
                0.046529416795973236
                0.05399349285357215
                0.06135767218134225
                0.0685840054034158
                0.07564607730104955
                0.08252566579852982
                0.08921043783391924
                0.09569233116719345)

             (:hrctb (:benefits2-1 (cljs-predict
                                     {:age       25
                                      :size      2
                                      :nodes     2
                                      :grade     1
                                      :erstat    1
                                      :detection 1
                                      :her2      1
                                      :ki67      1
                                      :rtime     15
                                      :chemoGen  3
                                      :bis?      true
                                      :bis       1
                                      :radio?    false
                                      :radio     0
                                      :horm      :yes
                                      :tra       1
                                      }))))))
    )

#_(deftest cljs-predict-h5-test
    (testing "h10 model"
      (is (= '(0
                0.0014235998353466783
                0.005289672012324664
                0.010759822493926374
                0.017200767587482346
                0.024213922849740006
                0.0315433093601687
                0.0390198769320368
                0.046529416795973236
                0.05399349285357215
                0.06135767218134225
                0.0685840054034158
                0.07564607730104955
                0.08252566579852982
                0.08921043783391924
                0.09569233116719345)

             (:hrctb (:benefits2-1 (cljs-predict
                                     {:age       25
                                      :size      2
                                      :nodes     2
                                      :grade     1
                                      :erstat    1
                                      :detection 1
                                      :her2      1
                                      :ki67      1
                                      :rtime     15
                                      :chemoGen  3
                                      :bis?      true
                                      :bis       1
                                      :radio?    false
                                      :radio     0
                                      :horm      :h5
                                      :tra       1
                                      }))))))
    )


#_(deftest cljs-predict-h10-test
    (testing "h10 model"
      (is (= '(0
                0.0014235998353466783
                0.005289672012324664
                0.010759822493926374
                0.017200767587482346
                0.024213922849740006
                0.0315433093601687
                0.0390198769320368
                0.046529416795973236
                0.05399349285357215
                0.06135767218134225
                0.0685840054034158
                0.07564607730104955
                0.08252566579852982
                0.08921043783391924
                0.09569233116719345)

             (:hrctb (:benefits2-1 (cljs-predict
                                     {:age       25
                                      :size      2
                                      :nodes     2
                                      :grade     1
                                      :erstat    1
                                      :detection 1
                                      :her2      1
                                      :ki67      1
                                      :rtime     15
                                      :chemoGen  3
                                      :bis?      true
                                      :bis       1
                                      :radio?    false
                                      :radio     0
                                      :horm      true
                                      :tra       1
                                      }))))))
    )

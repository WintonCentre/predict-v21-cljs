(ns predict.models.predict-test
  (:require [clojure.test :refer [deftest is testing]]
            [predict.models.predict :refer [exp ln pow abs
                                            deltas rec-age-10-sq log-age-10
                                            r-base-br r-br r-base-oth r-oth detection grade-a her2-rh ki67-rh
                                            prognostic-index m-oth-prognostic-index
                                            base-m-cum-br age
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
  ()
  )

(deftest prognostic-index-test
  (is (approx= 0.5006471230275893 (prognostic-index {})))
  (is (=  -0.5074627543042763 (prognostic-index {:age 25 :size 1 :nodes 1 :grade 1 :detection 0 :her2_rh 0 :ki67_rh 0 :erstat 1 :radio? true})))
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
    (is (= 25 (age 16))))
  )

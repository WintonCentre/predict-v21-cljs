(defproject predict-model "2.1.3"
  :description "Predict model for breast cancer"
  :url "https://github.com/WintonCentre/predict-v21-cljs"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [winton-utils "0.2.1"]]
  :profiles {:dev    {:dependencies [[com.bhauman/figwheel-main "0.2.0"]
                                     [com.bhauman/rebel-readline-cljs "0.1.4"]]}
             :kaocha {:dependencies [[lambdaisland/kaocha "0.0-418"]
                                     [lambdaisland/kaocha-cljs "0.0-32"]
                                     ]
                      :source-paths ["src"]}}
  :resource-paths ["target" "resources"]
  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "build-dev" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "kaocha"    ["with-profile" "+kaocha" "run" "-m" "kaocha.runner"]}
  )

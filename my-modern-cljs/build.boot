(set-env!
 :source-paths #{"src/clj" "src/cljs" "src/cljc"}
 :resource-paths #{"html"}
 :dependencies '[ [org.clojure/clojure                 "1.7.0"]            ; add CLJ
                  [org.clojure/clojurescript           "1.7.170"]          ; add CLJS
                  [org.clojure/tools.nrepl             "0.2.12"]           ; needed by bREPL
                  [adzerk/boot-cljs                    "1.7.170-3"]
                  [adzerk/boot-test                    "1.0.7"]
                  [adzerk/boot-reload                  "0.4.2"]
                  [adzerk/boot-cljs-repl               "0.3.0"]            ; add bREPL
                  [com.cemerick/piggieback             "0.2.1"]            ; needed by bREPL
                  [compojure                           "1.4.0"]            ; for routing
                  [crisptrutski/boot-cljs-test         "0.2.1-SNAPSHOT"]
                  [enlive                              "1.1.6"]
                  [hiccups                             "0.3.0"]
                  [javax.servlet/servlet-api           "2.5"]
                  [pandeiro/boot-http                  "0.7.0"]
                  [weasel                              "0.7.0"]            ; needed by bREPL

                  [org.clojars.magomimmo/domina                     "2.0.0-SNAPSHOT"]
                  [org.clojars.magomimmo/shoreleave-remote          "0.3.1"] 
                  [org.clojars.magomimmo/valip                      "0.4.0-SNAPSHOT"]
                  [org.clojars.magomimmo/shoreleave-remote-ring     "0.3.1"]] )
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(require '[adzerk.boot-cljs               :refer [cljs]]
         '[adzerk.boot-reload             :refer [reload]]
         '[adzerk.boot-cljs-repl          :refer [cljs-repl start-repl]]
         '[adzerk.boot-test               :refer [test]]
         '[crisptrutski.boot-cljs-test    :refer [test-cljs]]
         '[pandeiro.boot-http             :refer [serve]] )
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def defaults {:test-dirs #{"test/cljc" "test/clj" "test/cljs"}
               :output-to "main.js"
               :testbed :phantom
               :namespaces '#{modern-cljs.shopping.validators-test
                              modern-cljs.login.validators-test}} )
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftask add-source-paths
 "Add paths to :source-paths environment variable"
 [t dirs PATH #{str} ":source-paths"]
 (merge-env! :source-paths dirs)
 identity)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftask tdd
  "Launch a customizable TDD Environment"
  [e testbed        ENGINE kw     "the JS testbed engine (default phantom)"
   k httpkit               bool   "Use http-kit web server (default jetty)"
   n namespaces     NS     #{sym} "the set of namespace symbols to run tests in"
   o output-to      NAME   str    "the JS output file name for test (default main.js)"
   O optimizations  LEVEL  kw     "the optimization level (default none)"
   p port           PORT   int    "the web server port to listen on (default 3000)"
   t dirs           PATH   #{str} "test paths (default test/clj test/cljs test/cljc)"
   v verbose               bool   "Print which files have changed (default false)"]
  (let [dirs        (or dirs (:test-dirs defaults))
        output-to   (or output-to (:output-to defaults))
        testbed     (or testbed (:testbed defaults))
        namespaces  (or namespaces (:namespaces defaults))]
    (comp
     (serve :handler 'modern-cljs.core/app
            :resource-root "target"
            :reload true
            :httpkit httpkit
            :port port)
     (add-source-paths :dirs dirs)
     (watch :verbose verbose)
     (reload)
     (cljs-repl)
     (test-cljs :out-file output-to
                :js-env testbed
                :namespaces namespaces
                :update-fs? true
                :optimizations optimizations)
     (test :namespaces namespaces)
     (target :dir #{"target"}))))

 ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftask dummy
"A dummy task"
[t dirs PATH #{str} ":source-paths"
 v verbose bool "print which files have changed"
 k httpkit bool "use httt-kit web server instead of jetty"]
*opts*)
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftask dev
  "Launch immediate feedback dev environment"
  []
  (comp
   (serve :handler 'modern-cljs.core/app            ;; ring hanlder
          :resource-root "target"                      ;; root classpath
          :reload true)                                ;; reload ns
   (watch)
   (reload)
   (cljs-repl) ;; before cljs
   (cljs)
   (target :dir #{"target"})))

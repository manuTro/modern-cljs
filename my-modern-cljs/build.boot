(set-env!
 :source-paths #{"src/clj" "src/cljs"}
 :resource-paths #{"html"}



 :dependencies '[
                  [proto-repl "0.3.1"]
                  [org.clojure/clojure "1.7.0"]         ;; add CLJ
                  [org.clojure/clojurescript "1.7.170"] ;; add CLJS
                  [adzerk/boot-cljs "1.7.170-3"]        ;; CLJS compiler
                  [pandeiro/boot-http "0.7.0"]          ;; web server
                  [adzerk/boot-reload "0.4.2"]          ;; live reload
                  [adzerk/boot-cljs-repl "0.3.0"]       ;; CLJS bREPL
                  [com.cemerick/piggieback "0.2.1"]     ;; needed by bREPL
                  [weasel "0.7.0"]                      ;; needed by bREPL
                  [org.clojure/tools.nrepl "0.2.12"]    ;; needed by bREPL
                  [org.clojars.magomimmo/domina "2.0.0-SNAPSHOT"] ;; DOM manip
                  [hiccups "0.3.0"]
                  [compojure "1.4.0"]                   ;; routing lib
                  [org.clojars.magomimmo/shoreleave-remote-ring "0.3.1"]
                  [org.clojars.magomimmo/shoreleave-remote "0.3.1"]
                  [javax.servlet/servlet-api "2.5"]
                  ])

                  (require '[adzerk.boot-cljs :refer [cljs]]
                           '[pandeiro.boot-http :refer [serve]]
                           '[adzerk.boot-reload :refer [reload]]
                           '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(deftask dev
  "Launch immediate feedback dev environment"
  []
  (comp
   (serve :handler 'modern-cljs.remotes/app            ;; ring hanlder
          :resource-root "target"                      ;; root classpath
          :reload true)                                ;; reload ns
   (watch)
   (reload)
   (cljs-repl) ;; before cljs
   (cljs)
   (target :dir #{"target"})))

(ns modern-cljs.remotes
  (:require [modern-cljs.core :refer [handler]]
            [compojure.handler :refer [site]]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]))

(defremote calculate [quantity price tax discount]
  (-> (* quantity price)
      (* (+ 1 (/ tax 100)))
      (- discount)))

      (def app (-> (var handler)
                    (wrap-rpc) ;wrap-rpc is the middleware
                   (site)))
                  ;  app is a new header that consists of the handler handler with
                  ;  tge wrap-rpc middleware applied.

                  ;  (defn site
                  ;    "Create a handler suitable for a standard website. This adds the
                  ;    following middleware to your routes:
                  ;    - wrap-session
                  ;    - wrap-flash
                  ;    - wrap-cookies
                  ;    - wrap-multipart-params
                  ;    - wrap-params
                  ;    - wrap-nested-params
                  ;    - wrap-keyword-params

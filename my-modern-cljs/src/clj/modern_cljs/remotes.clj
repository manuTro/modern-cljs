(ns modern-cljs.remotes
  (:require [modern-cljs.core :refer [handler]]
            [compojure.handler :refer [site]]
            [shoreleave.middleware.rpc :refer [defremote wrap-rpc]]
            [modern-cljs.login.validators :as v]))

(defremote calculate [quantity price tax discount]
  (-> (* quantity price)
      (* (+ 1 (/ tax 100)))
      (- discount)))

(defremote email-domain-errors [email]
  (v/email-domain-errors email))

(def app
  (-> (var handler)
      (wrap-rpc)
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

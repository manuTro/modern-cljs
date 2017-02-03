(ns modern-cljs.remotes
  (:require [modern-cljs.login.validators :as v]
            [shoreleave.middleware.rpc :refer [defremote]]))

(defremote calculate [quantity price tax discount]
  (-> (* (read-string quantity) (read-string price))
      (* (+ 1 (/ (read-string tax) 100)))
      (- (read-string discount))))

(defremote email-domain-errors [email]
  (v/email-domain-errors email))                  ;  app is a new header that consists of the handler handler with
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

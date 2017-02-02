(ns modern-cljs.shopping
  (:require [domina.core :refer [append!
                                 by-class
                                 by-id
                                 destroy!
                                 set-value!
                                 value]]
            [domina.events :refer [listen! prevent-default]]
            [hiccups.runtime]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [cljs.reader :refer [read-string]])
  (:require-macros [hiccups.core :refer [html]]
                   [shoreleave.remotes.macros :as macros]))
; (defn calculate []
;   (let
;     [quantity (value (by-id "quantity"))
;       price (value (by-id "price"))
;       tax (value (by-id "tax"))
;       discount (value (by-id "discount"))]
;       (set-value! (by-id "total")(-> (* quantity price)
;                                         (* (+ 1(/ tax 100)))
;                                         (- discount)(.toFixed 2)))
;       ))
; calculate function after creating server side
(defn calculate [evt]
  (let [quantity (read-string (value (by-id "quantity")))
        price (read-string (value (by-id "price")))
        tax (read-string (value (by-id "tax")))
        discount (read-string (value (by-id "discount")))]
    (remote-callback :calculate
                     [quantity price tax discount]
                     #(set-value! (by-id "total") (.toFixed % 2)))
    (prevent-default evt)))


(defn ^:export init []
   (when (and js/document
      (aget js/document "getElementById"))
       (listen! (by-id "calc")
        :click
        (fn [evt] (calculate evt)))
         (listen! (by-id "calc")
            :mouseover
            (fn []
              (append! (by-id "shoppingForm")
                (html [:div.help "Click to calculate"]))))
                  (listen! (by-id "calc")
                  :mouseout
                    (fn []
                      (destroy! (by-class "help"))))))

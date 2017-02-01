(ns modern-cljs.login
  (:require [domina.core :refer [append!
                                 by-class
                                 by-id
                                 destroy!
                                 prepend!
                                 value
                                 attr]]
            [domina.events :refer [listen! prevent-default]]
            [hiccups.runtime])
  (:require-macros [hiccups.core :refer [html]]))

; (defn validate-form[]
;   (let [email (.getElementById js/document "email")
;         password (.getElementById js/document "password")]
;         (if
;           (and (> (count (.-value email))0)
;               (> (count (.-value password))0)
;               )
;               true
;               (do (js/alert "Please complete the form!")false)
;           )
;             )
;         )


            ; define the function to attach validate-form to onsubmit event of
        ; the form
        ; (defn ^:export init []
        ;   ;; verify that js/document exists and that it has a getElementById
        ;   ;; property
        ;   (if (and js/document
        ;            (.-getElementById js/document));; get loginForm by element id and set its onsubmit property to
        ;            ;; our validate-form function
        ;            (let [login-form (.getElementById js/document "loginForm")]
        ;              (set! (.-onsubmit login-form) validate-form))))
        ;
        ;;; 4 to 8, at least one numeric digit.

(defn validate-email [email]
    (destroy! (by-class "email"))
      (if (not (re-matches (re-pattern (attr email :pattern)) (value email)))
        (do ;gli passo il title di email nell'index.html
        (prepend! (by-id "loginForm") (html [:div.help.email (attr email :title)]))
          false)
            true))

(defn validate-password [password]
  (destroy! (by-class "password"))
    (if (not (re-matches (re-pattern (attr password :pattern)) (value password)))
      (do ;gli passo il title della password nell'index.html
        (append! (by-id "loginForm") (html [:div.help.password (attr password :title)]))
          false)
            true))

(defn validate-form [evt]
    (let [email (by-id "email")
          password (by-id "password")
          email-val (value email)
          password-val (value password)]
              (if (or (empty? email-val) (empty? password-val))
                (do
                  (destroy! (by-class "help"))
                  (prevent-default evt)
                  (append! (by-id "loginForm") (html [:div.help "Please complete the form"])))
                (if (and (validate-email email)
                         (validate-password password))
                  true
                  (prevent-default evt)))))

  (defn ^:export init []
(if (and js/document
     (aget js/document "getElementById"))
(let [email (by-id "email")
    password (by-id "password")]
(listen! (by-id "submit") :click (fn [evt] (validate-form evt)))
(listen! email :blur (fn [evt] (validate-email email)))
(listen! password :blur (fn [evt] (validate-password password))))))

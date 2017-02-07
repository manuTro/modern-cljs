(ns modern-cljs.shopping.validators-test
  (:require [modern-cljs.shopping.validators :refer [validate-shopping-form validate-shopping-field]]
            #?(:clj [clojure.test :refer [deftest are testing]]
               :cljs [cljs.test :refer-macros [deftest are testing]])))

 (deftest validate-shopping-field-test
   (testing "Shopping Form Fields Validation"
     ;; happy path
     (testing "/ Happy Path"
       (are [expected actual] (= expected actual)
         nil (validate-shopping-field :quantity "1")
         nil (validate-shopping-field :price "1.0")
         nil (validate-shopping-field :tax "8.25")
         nil (validate-shopping-field :discount "0.0")))
     ;; presence
     (testing "/ Presence"
       (are [expected actual] (= expected actual)
         "Quantity can't be empty" (validate-shopping-field :quantity "")
         "Quantity can't be empty" (validate-shopping-field :quantity nil)
         "Price can't be empty" (validate-shopping-field :price "")
         "Price can't be empty" (validate-shopping-field :price nil)
         "Tax can't be empty" (validate-shopping-field :tax "")
         "Tax can't be empty" (validate-shopping-field :tax nil)
         "Discount can't be empty" (validate-shopping-field :discount "")
         "Discount can't be empty" (validate-shopping-field :discount nil)))
     ;; type
     (testing "/ Type"
       (are [expected actual] (= expected actual)
         "Quantity has to be an integer number" (validate-shopping-field :quantity "1.1")
         "Price has to be a number" (validate-shopping-field :price "foo")
         "Tax has to be a number" (validate-shopping-field :tax "foo")
         "Discount has to be a number" (validate-shopping-field :discount "foo")))
     ;; range
     (testing "/ Range"
       (are [expected actual] (= expected actual)
         "Quantity can't be negative" (validate-shopping-field :quantity "-1")))))

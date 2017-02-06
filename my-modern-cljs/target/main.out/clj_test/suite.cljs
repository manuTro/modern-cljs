(ns
 clj-test.suite
 (:require
  [doo.runner :refer-macros [doo-tests doo-all-tests]]
  [modern-cljs.login.validators-test]
  [modern-cljs.shopping.validators-test]))

(doo-tests
 'modern-cljs.login.validators-test
 'modern-cljs.shopping.validators-test)

// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.login.validators');
goog.require('cljs.core');
goog.require('valip.core');
goog.require('valip.predicates');
modern_cljs.login.validators._STAR_re_password_STAR_ = /^(?=.*\d).{4,8}$/;
modern_cljs.login.validators.user_credential_errors = (function modern_cljs$login$validators$user_credential_errors(email,password){
return valip.core.validate.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),valip.predicates.present_QMARK_,"Email can't be empty."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"email","email",1415816706),valip.predicates.email_address_QMARK_,"The provided email is invalid."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),valip.predicates.present_QMARK_,"Password can't be empty."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471),valip.predicates.matches.call(null,modern_cljs.login.validators._STAR_re_password_STAR_),"The provided password is invalid"], null));
});

//# sourceMappingURL=validators.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.shopping.validators');
goog.require('cljs.core');
goog.require('valip.core');
goog.require('valip.predicates');
modern_cljs.shopping.validators.validate_shopping_form = (function modern_cljs$shopping$validators$validate_shopping_form(quantity,price,tax,discount){
return valip.core.validate.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity,new cljs.core.Keyword(null,"price","price",22129180),price,new cljs.core.Keyword(null,"tax","tax",-226525810),tax,new cljs.core.Keyword(null,"discount","discount",1508820155),discount], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),valip.predicates.present_QMARK_,"Quantity can't be empty"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"price","price",22129180),valip.predicates.present_QMARK_,"Price can't be empty"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tax","tax",-226525810),valip.predicates.present_QMARK_,"Tax can't be empty"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discount","discount",1508820155),valip.predicates.present_QMARK_,"Discount can't be empty"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),valip.predicates.integer_string_QMARK_,"Quantity has to be an integer number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"price","price",22129180),valip.predicates.decimal_string_QMARK_,"Price has to be a number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tax","tax",-226525810),valip.predicates.decimal_string_QMARK_,"Tax has to be a number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"discount","discount",1508820155),valip.predicates.decimal_string_QMARK_,"Discount has to be a number"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),valip.predicates.gt.call(null,(0)),"Quantity can't be negative"], null));
});
modern_cljs.shopping.validators.validate_shopping_field = (function modern_cljs$shopping$validators$validate_shopping_field(field,value){
var G__8916 = (((field instanceof cljs.core.Keyword))?field.fqn:null);
switch (G__8916) {
case "quantity":
return cljs.core.first.call(null,new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(modern_cljs.shopping.validators.validate_shopping_form.call(null,value,"0","0","0")));

break;
case "price":
return cljs.core.first.call(null,new cljs.core.Keyword(null,"price","price",22129180).cljs$core$IFn$_invoke$arity$1(modern_cljs.shopping.validators.validate_shopping_form.call(null,"1",value,"0","0")));

break;
case "tax":
return cljs.core.first.call(null,new cljs.core.Keyword(null,"tax","tax",-226525810).cljs$core$IFn$_invoke$arity$1(modern_cljs.shopping.validators.validate_shopping_form.call(null,"1","0",value,"0")));

break;
case "discount":
return cljs.core.first.call(null,new cljs.core.Keyword(null,"discount","discount",1508820155).cljs$core$IFn$_invoke$arity$1(modern_cljs.shopping.validators.validate_shopping_form.call(null,"1","0","0",value)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(field)].join('')));

}
});

//# sourceMappingURL=validators.js.map
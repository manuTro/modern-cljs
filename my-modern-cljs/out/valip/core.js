// Compiled by ClojureScript 1.7.170 {}
goog.provide('valip.core');
goog.require('cljs.core');
/**
 * Performs a validation on a key in a map using the supplied predicate
 *   function. A {key [error]} map is returned if the predicate returns false;
 *   nil is returned if the predicate returns true.
 */
valip.core.validation_on = (function valip$core$validation_on(key,pred_QMARK_,error){
return (function (value_map){
var value = value_map.call(null,key);
if(cljs.core.not.call(null,pred_QMARK_.call(null,value))){
return cljs.core.PersistentArrayMap.fromArray([key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null)], true, false);
} else {
return null;
}
});
});
/**
 * Merge error maps returned by from the validation-on function.
 */
valip.core.merge_errors = (function valip$core$merge_errors(var_args){
var args__8467__auto__ = [];
var len__8460__auto___8588 = arguments.length;
var i__8461__auto___8589 = (0);
while(true){
if((i__8461__auto___8589 < len__8460__auto___8588)){
args__8467__auto__.push((arguments[i__8461__auto___8589]));

var G__8590 = (i__8461__auto___8589 + (1));
i__8461__auto___8589 = G__8590;
continue;
} else {
}
break;
}

var argseq__8468__auto__ = ((((0) < args__8467__auto__.length))?(new cljs.core.IndexedSeq(args__8467__auto__.slice((0)),(0))):null);
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(argseq__8468__auto__);
});

valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic = (function (error_maps){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.into,error_maps);
});

valip.core.merge_errors.cljs$lang$maxFixedArity = (0);

valip.core.merge_errors.cljs$lang$applyTo = (function (seq8587){
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8587));
});
/**
 * Validate a map of values using the supplied validations. Each validation
 *   is represented as a vector containing [key predicate? error] values. A map
 *   is returned for all the keys that failed their predicates, in the form:
 *   {key [errors]}. If no predicates return false, nil is returned.
 */
valip.core.validate = (function valip$core$validate(var_args){
var args__8467__auto__ = [];
var len__8460__auto___8593 = arguments.length;
var i__8461__auto___8594 = (0);
while(true){
if((i__8461__auto___8594 < len__8460__auto___8593)){
args__8467__auto__.push((arguments[i__8461__auto___8594]));

var G__8595 = (i__8461__auto___8594 + (1));
i__8461__auto___8594 = G__8595;
continue;
} else {
}
break;
}

var argseq__8468__auto__ = ((((1) < args__8467__auto__.length))?(new cljs.core.IndexedSeq(args__8467__auto__.slice((1)),(0))):null);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8468__auto__);
});

valip.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (value_map,validations){
return cljs.core.apply.call(null,valip.core.merge_errors,cljs.core.map.call(null,(function (f){
return f.call(null,value_map);
}),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,valip.core.validation_on),validations)));
});

valip.core.validate.cljs$lang$maxFixedArity = (1);

valip.core.validate.cljs$lang$applyTo = (function (seq8591){
var G__8592 = cljs.core.first.call(null,seq8591);
var seq8591__$1 = cljs.core.next.call(null,seq8591);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic(G__8592,seq8591__$1);
});

//# sourceMappingURL=core.js.map
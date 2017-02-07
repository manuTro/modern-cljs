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
var args__6053__auto__ = [];
var len__6046__auto___8710 = arguments.length;
var i__6047__auto___8711 = (0);
while(true){
if((i__6047__auto___8711 < len__6046__auto___8710)){
args__6053__auto__.push((arguments[i__6047__auto___8711]));

var G__8712 = (i__6047__auto___8711 + (1));
i__6047__auto___8711 = G__8712;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic = (function (error_maps){
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.into,error_maps);
});

valip.core.merge_errors.cljs$lang$maxFixedArity = (0);

valip.core.merge_errors.cljs$lang$applyTo = (function (seq8709){
return valip.core.merge_errors.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8709));
});
/**
 * Validate a map of values using the supplied validations. Each validation
 *   is represented as a vector containing [key predicate? error] values. A map
 *   is returned for all the keys that failed their predicates, in the form:
 *   {key [errors]}. If no predicates return false, nil is returned.
 */
valip.core.validate = (function valip$core$validate(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8715 = arguments.length;
var i__6047__auto___8716 = (0);
while(true){
if((i__6047__auto___8716 < len__6046__auto___8715)){
args__6053__auto__.push((arguments[i__6047__auto___8716]));

var G__8717 = (i__6047__auto___8716 + (1));
i__6047__auto___8716 = G__8717;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

valip.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (value_map,validations){
return cljs.core.apply.call(null,valip.core.merge_errors,cljs.core.map.call(null,(function (f){
return f.call(null,value_map);
}),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,valip.core.validation_on),validations)));
});

valip.core.validate.cljs$lang$maxFixedArity = (1);

valip.core.validate.cljs$lang$applyTo = (function (seq8713){
var G__8714 = cljs.core.first.call(null,seq8713);
var seq8713__$1 = cljs.core.next.call(null,seq8713);
return valip.core.validate.cljs$core$IFn$_invoke$arity$variadic(G__8714,seq8713__$1);
});

//# sourceMappingURL=core.js.map
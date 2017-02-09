// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__9410__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9411__i = 0, G__9411__a = new Array(arguments.length -  0);
while (G__9411__i < G__9411__a.length) {G__9411__a[G__9411__i] = arguments[G__9411__i + 0]; ++G__9411__i;}
  args = new cljs.core.IndexedSeq(G__9411__a,0);
} 
return G__9410__delegate.call(this,args);};
G__9410.cljs$lang$maxFixedArity = 0;
G__9410.cljs$lang$applyTo = (function (arglist__9412){
var args = cljs.core.seq(arglist__9412);
return G__9410__delegate(args);
});
G__9410.cljs$core$IFn$_invoke$arity$variadic = G__9410__delegate;
return G__9410;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9413__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9414__i = 0, G__9414__a = new Array(arguments.length -  0);
while (G__9414__i < G__9414__a.length) {G__9414__a[G__9414__i] = arguments[G__9414__i + 0]; ++G__9414__i;}
  args = new cljs.core.IndexedSeq(G__9414__a,0);
} 
return G__9413__delegate.call(this,args);};
G__9413.cljs$lang$maxFixedArity = 0;
G__9413.cljs$lang$applyTo = (function (arglist__9415){
var args = cljs.core.seq(arglist__9415);
return G__9413__delegate(args);
});
G__9413.cljs$core$IFn$_invoke$arity$variadic = G__9413__delegate;
return G__9413;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
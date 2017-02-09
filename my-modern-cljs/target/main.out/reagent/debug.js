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
var G__6289__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6290__i = 0, G__6290__a = new Array(arguments.length -  0);
while (G__6290__i < G__6290__a.length) {G__6290__a[G__6290__i] = arguments[G__6290__i + 0]; ++G__6290__i;}
  args = new cljs.core.IndexedSeq(G__6290__a,0);
} 
return G__6289__delegate.call(this,args);};
G__6289.cljs$lang$maxFixedArity = 0;
G__6289.cljs$lang$applyTo = (function (arglist__6291){
var args = cljs.core.seq(arglist__6291);
return G__6289__delegate(args);
});
G__6289.cljs$core$IFn$_invoke$arity$variadic = G__6289__delegate;
return G__6289;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6292__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__6292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6293__i = 0, G__6293__a = new Array(arguments.length -  0);
while (G__6293__i < G__6293__a.length) {G__6293__a[G__6293__i] = arguments[G__6293__i + 0]; ++G__6293__i;}
  args = new cljs.core.IndexedSeq(G__6293__a,0);
} 
return G__6292__delegate.call(this,args);};
G__6292.cljs$lang$maxFixedArity = 0;
G__6292.cljs$lang$applyTo = (function (arglist__6294){
var args = cljs.core.seq(arglist__6294);
return G__6292__delegate(args);
});
G__6292.cljs$core$IFn$_invoke$arity$variadic = G__6292__delegate;
return G__6292;
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
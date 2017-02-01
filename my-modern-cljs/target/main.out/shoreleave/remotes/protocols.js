// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.remotes.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
shoreleave.remotes.protocols.ITransportData = function(){};

shoreleave.remotes.protocols._data_str = (function shoreleave$remotes$protocols$_data_str(t){
if((!((t == null))) && (!((t.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1 == null)))){
return t.shoreleave$remotes$protocols$ITransportData$_data_str$arity$1(t);
} else {
var x__5644__auto__ = (((t == null))?null:t);
var m__5645__auto__ = (shoreleave.remotes.protocols._data_str[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,t);
} else {
var m__5645__auto____$1 = (shoreleave.remotes.protocols._data_str["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,t);
} else {
throw cljs.core.missing_protocol.call(null,"ITransportData.-data-str",t);
}
}
}
});


//# sourceMappingURL=protocols.js.map
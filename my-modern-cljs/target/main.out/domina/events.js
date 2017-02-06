// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.object');
goog.require('goog.events');

/**
 * @interface
 */
domina.events.Event = function(){};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.prevent_default[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.stop_propagation[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.target[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.target["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.current_target[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.current_target["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.event_type[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.event_type["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__5644__auto__ = (((evt == null))?null:evt);
var m__5645__auto__ = (domina.events.raw_event[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,evt);
} else {
var m__5645__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t_domina$events7077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events7077 = (function (create_listener_function,f,evt,meta7078){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta7078 = meta7078;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events7077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7079,meta7078__$1){
var self__ = this;
var _7079__$1 = this;
return (new domina.events.t_domina$events7077(self__.create_listener_function,self__.f,self__.evt,meta7078__$1));
});

domina.events.t_domina$events7077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7079){
var self__ = this;
var _7079__$1 = this;
return self__.meta7078;
});

domina.events.t_domina$events7077.prototype.domina$events$Event$ = true;

domina.events.t_domina$events7077.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events7077.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events7077.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events7077.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events7077.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events7077.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events7077.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4423__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t_domina$events7077.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4989__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events7077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta7078","meta7078",1279644312,null)], null);
});

domina.events.t_domina$events7077.cljs$lang$type = true;

domina.events.t_domina$events7077.cljs$lang$ctorStr = "domina.events/t_domina$events7077";

domina.events.t_domina$events7077.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"domina.events/t_domina$events7077");
});

domina.events.__GT_t_domina$events7077 = (function domina$events$create_listener_function_$___GT_t_domina$events7077(create_listener_function__$1,f__$1,evt__$1,meta7078){
return (new domina.events.t_domina$events7077(create_listener_function__$1,f__$1,evt__$1,meta7078));
});

}

return (new domina.events.t_domina$events7077(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__7084(s__7085){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__7085__$1 = s__7085;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7085__$1);
if(temp__4425__auto__){
var s__7085__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7085__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__7085__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__7087 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__7086 = (0);
while(true){
if((i__7086 < size__5760__auto__)){
var node = cljs.core._nth.call(null,c__5759__auto__,i__7086);
cljs.core.chunk_append.call(null,b__7087,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__7088 = (i__7086 + (1));
i__7086 = G__7088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7087),domina$events$listen_internal_BANG__$_iter__7084.call(null,cljs.core.chunk_rest.call(null,s__7085__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7087),null);
}
} else {
var node = cljs.core.first.call(null,s__7085__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__7084.call(null,cljs.core.rest.call(null,s__7085__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__5761__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args7089 = [];
var len__6047__auto___7092 = arguments.length;
var i__6048__auto___7093 = (0);
while(true){
if((i__6048__auto___7093 < len__6047__auto___7092)){
args7089.push((arguments[i__6048__auto___7093]));

var G__7094 = (i__6048__auto___7093 + (1));
i__6048__auto___7093 = G__7094;
continue;
} else {
}
break;
}

var G__7091 = args7089.length;
switch (G__7091) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7089.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var args7096 = [];
var len__6047__auto___7099 = arguments.length;
var i__6048__auto___7100 = (0);
while(true){
if((i__6048__auto___7100 < len__6047__auto___7099)){
args7096.push((arguments[i__6048__auto___7100]));

var G__7101 = (i__6048__auto___7100 + (1));
i__6048__auto___7100 = G__7101;
continue;
} else {
}
break;
}

var G__7098 = args7096.length;
switch (G__7098) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7096.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var args7103 = [];
var len__6047__auto___7106 = arguments.length;
var i__6048__auto___7107 = (0);
while(true){
if((i__6048__auto___7107 < len__6047__auto___7106)){
args7103.push((arguments[i__6048__auto___7107]));

var G__7108 = (i__6048__auto___7107 + (1));
i__6048__auto___7107 = G__7108;
continue;
} else {
}
break;
}

var G__7105 = args7103.length;
switch (G__7105) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7103.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var args7110 = [];
var len__6047__auto___7113 = arguments.length;
var i__6048__auto___7114 = (0);
while(true){
if((i__6048__auto___7114 < len__6047__auto___7113)){
args7110.push((arguments[i__6048__auto___7114]));

var G__7115 = (i__6048__auto___7114 + (1));
i__6048__auto___7114 = G__7115;
continue;
} else {
}
break;
}

var G__7112 = args7110.length;
switch (G__7112) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7110.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var args7117 = [];
var len__6047__auto___7128 = arguments.length;
var i__6048__auto___7129 = (0);
while(true){
if((i__6048__auto___7129 < len__6047__auto___7128)){
args7117.push((arguments[i__6048__auto___7129]));

var G__7130 = (i__6048__auto___7129 + (1));
i__6048__auto___7129 = G__7130;
continue;
} else {
}
break;
}

var G__7119 = args7117.length;
switch (G__7119) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7117.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__7120 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7121 = null;
var count__7122 = (0);
var i__7123 = (0);
while(true){
if((i__7123 < count__7122)){
var node = cljs.core._nth.call(null,chunk__7121,i__7123);
goog.events.removeAll(node);

var G__7132 = seq__7120;
var G__7133 = chunk__7121;
var G__7134 = count__7122;
var G__7135 = (i__7123 + (1));
seq__7120 = G__7132;
chunk__7121 = G__7133;
count__7122 = G__7134;
i__7123 = G__7135;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7120);
if(temp__4425__auto__){
var seq__7120__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7120__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7120__$1);
var G__7136 = cljs.core.chunk_rest.call(null,seq__7120__$1);
var G__7137 = c__5792__auto__;
var G__7138 = cljs.core.count.call(null,c__5792__auto__);
var G__7139 = (0);
seq__7120 = G__7136;
chunk__7121 = G__7137;
count__7122 = G__7138;
i__7123 = G__7139;
continue;
} else {
var node = cljs.core.first.call(null,seq__7120__$1);
goog.events.removeAll(node);

var G__7140 = cljs.core.next.call(null,seq__7120__$1);
var G__7141 = null;
var G__7142 = (0);
var G__7143 = (0);
seq__7120 = G__7140;
chunk__7121 = G__7141;
count__7122 = G__7142;
i__7123 = G__7143;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__7124 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7125 = null;
var count__7126 = (0);
var i__7127 = (0);
while(true){
if((i__7127 < count__7126)){
var node = cljs.core._nth.call(null,chunk__7125,i__7127);
goog.events.removeAll(node,type__$1);

var G__7144 = seq__7124;
var G__7145 = chunk__7125;
var G__7146 = count__7126;
var G__7147 = (i__7127 + (1));
seq__7124 = G__7144;
chunk__7125 = G__7145;
count__7126 = G__7146;
i__7127 = G__7147;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7124);
if(temp__4425__auto__){
var seq__7124__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7124__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7124__$1);
var G__7148 = cljs.core.chunk_rest.call(null,seq__7124__$1);
var G__7149 = c__5792__auto__;
var G__7150 = cljs.core.count.call(null,c__5792__auto__);
var G__7151 = (0);
seq__7124 = G__7148;
chunk__7125 = G__7149;
count__7126 = G__7150;
i__7127 = G__7151;
continue;
} else {
var node = cljs.core.first.call(null,seq__7124__$1);
goog.events.removeAll(node,type__$1);

var G__7152 = cljs.core.next.call(null,seq__7124__$1);
var G__7153 = null;
var G__7154 = (0);
var G__7155 = (0);
seq__7124 = G__7152;
chunk__7125 = G__7153;
count__7126 = G__7154;
i__7127 = G__7155;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var args7156 = [];
var len__6047__auto___7159 = arguments.length;
var i__6048__auto___7160 = (0);
while(true){
if((i__6048__auto___7160 < len__6047__auto___7159)){
args7156.push((arguments[i__6048__auto___7160]));

var G__7161 = (i__6048__auto___7160 + (1));
i__6048__auto___7160 = G__7161;
continue;
} else {
}
break;
}

var G__7158 = args7156.length;
switch (G__7158) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7156.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4423__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4423__auto__)){
var parent = temp__4423__auto__;
var G__7163 = parent;
var G__7164 = cljs.core.cons.call(null,parent,so_far);
n = G__7163;
so_far = G__7164;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.core.single_node.call(null,source));
var seq__7173_7181 = cljs.core.seq.call(null,ancestors);
var chunk__7174_7182 = null;
var count__7175_7183 = (0);
var i__7176_7184 = (0);
while(true){
if((i__7176_7184 < count__7175_7183)){
var n_7185 = cljs.core._nth.call(null,chunk__7174_7182,i__7176_7184);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7185;

goog.events.fireListeners(n_7185,evt.type,true,evt);
}

var G__7186 = seq__7173_7181;
var G__7187 = chunk__7174_7182;
var G__7188 = count__7175_7183;
var G__7189 = (i__7176_7184 + (1));
seq__7173_7181 = G__7186;
chunk__7174_7182 = G__7187;
count__7175_7183 = G__7188;
i__7176_7184 = G__7189;
continue;
} else {
var temp__4425__auto___7190 = cljs.core.seq.call(null,seq__7173_7181);
if(temp__4425__auto___7190){
var seq__7173_7191__$1 = temp__4425__auto___7190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7173_7191__$1)){
var c__5792__auto___7192 = cljs.core.chunk_first.call(null,seq__7173_7191__$1);
var G__7193 = cljs.core.chunk_rest.call(null,seq__7173_7191__$1);
var G__7194 = c__5792__auto___7192;
var G__7195 = cljs.core.count.call(null,c__5792__auto___7192);
var G__7196 = (0);
seq__7173_7181 = G__7193;
chunk__7174_7182 = G__7194;
count__7175_7183 = G__7195;
i__7176_7184 = G__7196;
continue;
} else {
var n_7197 = cljs.core.first.call(null,seq__7173_7191__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7197;

goog.events.fireListeners(n_7197,evt.type,true,evt);
}

var G__7198 = cljs.core.next.call(null,seq__7173_7191__$1);
var G__7199 = null;
var G__7200 = (0);
var G__7201 = (0);
seq__7173_7181 = G__7198;
chunk__7174_7182 = G__7199;
count__7175_7183 = G__7200;
i__7176_7184 = G__7201;
continue;
}
} else {
}
}
break;
}

var seq__7177_7202 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__7178_7203 = null;
var count__7179_7204 = (0);
var i__7180_7205 = (0);
while(true){
if((i__7180_7205 < count__7179_7204)){
var n_7206 = cljs.core._nth.call(null,chunk__7178_7203,i__7180_7205);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7206;

goog.events.fireListeners(n_7206,evt.type,false,evt);
}

var G__7207 = seq__7177_7202;
var G__7208 = chunk__7178_7203;
var G__7209 = count__7179_7204;
var G__7210 = (i__7180_7205 + (1));
seq__7177_7202 = G__7207;
chunk__7178_7203 = G__7208;
count__7179_7204 = G__7209;
i__7180_7205 = G__7210;
continue;
} else {
var temp__4425__auto___7211 = cljs.core.seq.call(null,seq__7177_7202);
if(temp__4425__auto___7211){
var seq__7177_7212__$1 = temp__4425__auto___7211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7177_7212__$1)){
var c__5792__auto___7213 = cljs.core.chunk_first.call(null,seq__7177_7212__$1);
var G__7214 = cljs.core.chunk_rest.call(null,seq__7177_7212__$1);
var G__7215 = c__5792__auto___7213;
var G__7216 = cljs.core.count.call(null,c__5792__auto___7213);
var G__7217 = (0);
seq__7177_7202 = G__7214;
chunk__7178_7203 = G__7215;
count__7179_7204 = G__7216;
i__7180_7205 = G__7217;
continue;
} else {
var n_7218 = cljs.core.first.call(null,seq__7177_7212__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7218;

goog.events.fireListeners(n_7218,evt.type,false,evt);
}

var G__7219 = cljs.core.next.call(null,seq__7177_7212__$1);
var G__7220 = null;
var G__7221 = (0);
var G__7222 = (0);
seq__7177_7202 = G__7219;
chunk__7178_7203 = G__7220;
count__7179_7204 = G__7221;
i__7180_7205 = G__7222;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__4977__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__4977__auto__)){
return o.dispatchEvent;
} else {
return and__4977__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args7223 = [];
var len__6047__auto___7232 = arguments.length;
var i__6048__auto___7233 = (0);
while(true){
if((i__6048__auto___7233 < len__6047__auto___7232)){
args7223.push((arguments[i__6048__auto___7233]));

var G__7234 = (i__6048__auto___7233 + (1));
i__6048__auto___7233 = G__7234;
continue;
} else {
}
break;
}

var G__7225 = args7223.length;
switch (G__7225) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7223.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__7226_7236 = cljs.core.seq.call(null,evt_map);
var chunk__7227_7237 = null;
var count__7228_7238 = (0);
var i__7229_7239 = (0);
while(true){
if((i__7229_7239 < count__7228_7238)){
var vec__7230_7240 = cljs.core._nth.call(null,chunk__7227_7237,i__7229_7239);
var k_7241 = cljs.core.nth.call(null,vec__7230_7240,(0),null);
var v_7242 = cljs.core.nth.call(null,vec__7230_7240,(1),null);
(evt[k_7241] = v_7242);

var G__7243 = seq__7226_7236;
var G__7244 = chunk__7227_7237;
var G__7245 = count__7228_7238;
var G__7246 = (i__7229_7239 + (1));
seq__7226_7236 = G__7243;
chunk__7227_7237 = G__7244;
count__7228_7238 = G__7245;
i__7229_7239 = G__7246;
continue;
} else {
var temp__4425__auto___7247 = cljs.core.seq.call(null,seq__7226_7236);
if(temp__4425__auto___7247){
var seq__7226_7248__$1 = temp__4425__auto___7247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7226_7248__$1)){
var c__5792__auto___7249 = cljs.core.chunk_first.call(null,seq__7226_7248__$1);
var G__7250 = cljs.core.chunk_rest.call(null,seq__7226_7248__$1);
var G__7251 = c__5792__auto___7249;
var G__7252 = cljs.core.count.call(null,c__5792__auto___7249);
var G__7253 = (0);
seq__7226_7236 = G__7250;
chunk__7227_7237 = G__7251;
count__7228_7238 = G__7252;
i__7229_7239 = G__7253;
continue;
} else {
var vec__7231_7254 = cljs.core.first.call(null,seq__7226_7248__$1);
var k_7255 = cljs.core.nth.call(null,vec__7231_7254,(0),null);
var v_7256 = cljs.core.nth.call(null,vec__7231_7254,(1),null);
(evt[k_7255] = v_7256);

var G__7257 = cljs.core.next.call(null,seq__7226_7248__$1);
var G__7258 = null;
var G__7259 = (0);
var G__7260 = (0);
seq__7226_7236 = G__7257;
chunk__7227_7237 = G__7258;
count__7228_7238 = G__7259;
i__7229_7239 = G__7260;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__7261_SHARP_){
return goog.events.getListeners(p1__7261_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
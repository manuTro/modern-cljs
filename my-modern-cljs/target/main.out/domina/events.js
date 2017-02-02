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
if(typeof domina.events.t_domina$events7088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events7088 = (function (create_listener_function,f,evt,meta7089){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta7089 = meta7089;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events7088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7090,meta7089__$1){
var self__ = this;
var _7090__$1 = this;
return (new domina.events.t_domina$events7088(self__.create_listener_function,self__.f,self__.evt,meta7089__$1));
});

domina.events.t_domina$events7088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7090){
var self__ = this;
var _7090__$1 = this;
return self__.meta7089;
});

domina.events.t_domina$events7088.prototype.domina$events$Event$ = true;

domina.events.t_domina$events7088.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events7088.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events7088.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events7088.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events7088.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events7088.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events7088.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events7088.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4989__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events7088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta7089","meta7089",-1476286933,null)], null);
});

domina.events.t_domina$events7088.cljs$lang$type = true;

domina.events.t_domina$events7088.cljs$lang$ctorStr = "domina.events/t_domina$events7088";

domina.events.t_domina$events7088.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"domina.events/t_domina$events7088");
});

domina.events.__GT_t_domina$events7088 = (function domina$events$create_listener_function_$___GT_t_domina$events7088(create_listener_function__$1,f__$1,evt__$1,meta7089){
return (new domina.events.t_domina$events7088(create_listener_function__$1,f__$1,evt__$1,meta7089));
});

}

return (new domina.events.t_domina$events7088(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__7095(s__7096){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__7096__$1 = s__7096;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7096__$1);
if(temp__4425__auto__){
var s__7096__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7096__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__7096__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__7098 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__7097 = (0);
while(true){
if((i__7097 < size__5760__auto__)){
var node = cljs.core._nth.call(null,c__5759__auto__,i__7097);
cljs.core.chunk_append.call(null,b__7098,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__7099 = (i__7097 + (1));
i__7097 = G__7099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7098),domina$events$listen_internal_BANG__$_iter__7095.call(null,cljs.core.chunk_rest.call(null,s__7096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7098),null);
}
} else {
var node = cljs.core.first.call(null,s__7096__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__7095.call(null,cljs.core.rest.call(null,s__7096__$2)));
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
var args7100 = [];
var len__6047__auto___7103 = arguments.length;
var i__6048__auto___7104 = (0);
while(true){
if((i__6048__auto___7104 < len__6047__auto___7103)){
args7100.push((arguments[i__6048__auto___7104]));

var G__7105 = (i__6048__auto___7104 + (1));
i__6048__auto___7104 = G__7105;
continue;
} else {
}
break;
}

var G__7102 = args7100.length;
switch (G__7102) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7100.length)].join('')));

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
var args7107 = [];
var len__6047__auto___7110 = arguments.length;
var i__6048__auto___7111 = (0);
while(true){
if((i__6048__auto___7111 < len__6047__auto___7110)){
args7107.push((arguments[i__6048__auto___7111]));

var G__7112 = (i__6048__auto___7111 + (1));
i__6048__auto___7111 = G__7112;
continue;
} else {
}
break;
}

var G__7109 = args7107.length;
switch (G__7109) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7107.length)].join('')));

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
var args7114 = [];
var len__6047__auto___7117 = arguments.length;
var i__6048__auto___7118 = (0);
while(true){
if((i__6048__auto___7118 < len__6047__auto___7117)){
args7114.push((arguments[i__6048__auto___7118]));

var G__7119 = (i__6048__auto___7118 + (1));
i__6048__auto___7118 = G__7119;
continue;
} else {
}
break;
}

var G__7116 = args7114.length;
switch (G__7116) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7114.length)].join('')));

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
var args7121 = [];
var len__6047__auto___7124 = arguments.length;
var i__6048__auto___7125 = (0);
while(true){
if((i__6048__auto___7125 < len__6047__auto___7124)){
args7121.push((arguments[i__6048__auto___7125]));

var G__7126 = (i__6048__auto___7125 + (1));
i__6048__auto___7125 = G__7126;
continue;
} else {
}
break;
}

var G__7123 = args7121.length;
switch (G__7123) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7121.length)].join('')));

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
var args7128 = [];
var len__6047__auto___7139 = arguments.length;
var i__6048__auto___7140 = (0);
while(true){
if((i__6048__auto___7140 < len__6047__auto___7139)){
args7128.push((arguments[i__6048__auto___7140]));

var G__7141 = (i__6048__auto___7140 + (1));
i__6048__auto___7140 = G__7141;
continue;
} else {
}
break;
}

var G__7130 = args7128.length;
switch (G__7130) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7128.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__7131 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7132 = null;
var count__7133 = (0);
var i__7134 = (0);
while(true){
if((i__7134 < count__7133)){
var node = cljs.core._nth.call(null,chunk__7132,i__7134);
goog.events.removeAll(node);

var G__7143 = seq__7131;
var G__7144 = chunk__7132;
var G__7145 = count__7133;
var G__7146 = (i__7134 + (1));
seq__7131 = G__7143;
chunk__7132 = G__7144;
count__7133 = G__7145;
i__7134 = G__7146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7131);
if(temp__4425__auto__){
var seq__7131__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7131__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7131__$1);
var G__7147 = cljs.core.chunk_rest.call(null,seq__7131__$1);
var G__7148 = c__5792__auto__;
var G__7149 = cljs.core.count.call(null,c__5792__auto__);
var G__7150 = (0);
seq__7131 = G__7147;
chunk__7132 = G__7148;
count__7133 = G__7149;
i__7134 = G__7150;
continue;
} else {
var node = cljs.core.first.call(null,seq__7131__$1);
goog.events.removeAll(node);

var G__7151 = cljs.core.next.call(null,seq__7131__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__7131 = G__7151;
chunk__7132 = G__7152;
count__7133 = G__7153;
i__7134 = G__7154;
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
var seq__7135 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7136 = null;
var count__7137 = (0);
var i__7138 = (0);
while(true){
if((i__7138 < count__7137)){
var node = cljs.core._nth.call(null,chunk__7136,i__7138);
goog.events.removeAll(node,type__$1);

var G__7155 = seq__7135;
var G__7156 = chunk__7136;
var G__7157 = count__7137;
var G__7158 = (i__7138 + (1));
seq__7135 = G__7155;
chunk__7136 = G__7156;
count__7137 = G__7157;
i__7138 = G__7158;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7135);
if(temp__4425__auto__){
var seq__7135__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7135__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7135__$1);
var G__7159 = cljs.core.chunk_rest.call(null,seq__7135__$1);
var G__7160 = c__5792__auto__;
var G__7161 = cljs.core.count.call(null,c__5792__auto__);
var G__7162 = (0);
seq__7135 = G__7159;
chunk__7136 = G__7160;
count__7137 = G__7161;
i__7138 = G__7162;
continue;
} else {
var node = cljs.core.first.call(null,seq__7135__$1);
goog.events.removeAll(node,type__$1);

var G__7163 = cljs.core.next.call(null,seq__7135__$1);
var G__7164 = null;
var G__7165 = (0);
var G__7166 = (0);
seq__7135 = G__7163;
chunk__7136 = G__7164;
count__7137 = G__7165;
i__7138 = G__7166;
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
var args7167 = [];
var len__6047__auto___7170 = arguments.length;
var i__6048__auto___7171 = (0);
while(true){
if((i__6048__auto___7171 < len__6047__auto___7170)){
args7167.push((arguments[i__6048__auto___7171]));

var G__7172 = (i__6048__auto___7171 + (1));
i__6048__auto___7171 = G__7172;
continue;
} else {
}
break;
}

var G__7169 = args7167.length;
switch (G__7169) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7167.length)].join('')));

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
var G__7174 = parent;
var G__7175 = cljs.core.cons.call(null,parent,so_far);
n = G__7174;
so_far = G__7175;
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
var seq__7184_7192 = cljs.core.seq.call(null,ancestors);
var chunk__7185_7193 = null;
var count__7186_7194 = (0);
var i__7187_7195 = (0);
while(true){
if((i__7187_7195 < count__7186_7194)){
var n_7196 = cljs.core._nth.call(null,chunk__7185_7193,i__7187_7195);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7196;

goog.events.fireListeners(n_7196,evt.type,true,evt);
}

var G__7197 = seq__7184_7192;
var G__7198 = chunk__7185_7193;
var G__7199 = count__7186_7194;
var G__7200 = (i__7187_7195 + (1));
seq__7184_7192 = G__7197;
chunk__7185_7193 = G__7198;
count__7186_7194 = G__7199;
i__7187_7195 = G__7200;
continue;
} else {
var temp__4425__auto___7201 = cljs.core.seq.call(null,seq__7184_7192);
if(temp__4425__auto___7201){
var seq__7184_7202__$1 = temp__4425__auto___7201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7184_7202__$1)){
var c__5792__auto___7203 = cljs.core.chunk_first.call(null,seq__7184_7202__$1);
var G__7204 = cljs.core.chunk_rest.call(null,seq__7184_7202__$1);
var G__7205 = c__5792__auto___7203;
var G__7206 = cljs.core.count.call(null,c__5792__auto___7203);
var G__7207 = (0);
seq__7184_7192 = G__7204;
chunk__7185_7193 = G__7205;
count__7186_7194 = G__7206;
i__7187_7195 = G__7207;
continue;
} else {
var n_7208 = cljs.core.first.call(null,seq__7184_7202__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7208;

goog.events.fireListeners(n_7208,evt.type,true,evt);
}

var G__7209 = cljs.core.next.call(null,seq__7184_7202__$1);
var G__7210 = null;
var G__7211 = (0);
var G__7212 = (0);
seq__7184_7192 = G__7209;
chunk__7185_7193 = G__7210;
count__7186_7194 = G__7211;
i__7187_7195 = G__7212;
continue;
}
} else {
}
}
break;
}

var seq__7188_7213 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__7189_7214 = null;
var count__7190_7215 = (0);
var i__7191_7216 = (0);
while(true){
if((i__7191_7216 < count__7190_7215)){
var n_7217 = cljs.core._nth.call(null,chunk__7189_7214,i__7191_7216);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7217;

goog.events.fireListeners(n_7217,evt.type,false,evt);
}

var G__7218 = seq__7188_7213;
var G__7219 = chunk__7189_7214;
var G__7220 = count__7190_7215;
var G__7221 = (i__7191_7216 + (1));
seq__7188_7213 = G__7218;
chunk__7189_7214 = G__7219;
count__7190_7215 = G__7220;
i__7191_7216 = G__7221;
continue;
} else {
var temp__4425__auto___7222 = cljs.core.seq.call(null,seq__7188_7213);
if(temp__4425__auto___7222){
var seq__7188_7223__$1 = temp__4425__auto___7222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7188_7223__$1)){
var c__5792__auto___7224 = cljs.core.chunk_first.call(null,seq__7188_7223__$1);
var G__7225 = cljs.core.chunk_rest.call(null,seq__7188_7223__$1);
var G__7226 = c__5792__auto___7224;
var G__7227 = cljs.core.count.call(null,c__5792__auto___7224);
var G__7228 = (0);
seq__7188_7213 = G__7225;
chunk__7189_7214 = G__7226;
count__7190_7215 = G__7227;
i__7191_7216 = G__7228;
continue;
} else {
var n_7229 = cljs.core.first.call(null,seq__7188_7223__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7229;

goog.events.fireListeners(n_7229,evt.type,false,evt);
}

var G__7230 = cljs.core.next.call(null,seq__7188_7223__$1);
var G__7231 = null;
var G__7232 = (0);
var G__7233 = (0);
seq__7188_7213 = G__7230;
chunk__7189_7214 = G__7231;
count__7190_7215 = G__7232;
i__7191_7216 = G__7233;
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
var args7234 = [];
var len__6047__auto___7243 = arguments.length;
var i__6048__auto___7244 = (0);
while(true){
if((i__6048__auto___7244 < len__6047__auto___7243)){
args7234.push((arguments[i__6048__auto___7244]));

var G__7245 = (i__6048__auto___7244 + (1));
i__6048__auto___7244 = G__7245;
continue;
} else {
}
break;
}

var G__7236 = args7234.length;
switch (G__7236) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7234.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__7237_7247 = cljs.core.seq.call(null,evt_map);
var chunk__7238_7248 = null;
var count__7239_7249 = (0);
var i__7240_7250 = (0);
while(true){
if((i__7240_7250 < count__7239_7249)){
var vec__7241_7251 = cljs.core._nth.call(null,chunk__7238_7248,i__7240_7250);
var k_7252 = cljs.core.nth.call(null,vec__7241_7251,(0),null);
var v_7253 = cljs.core.nth.call(null,vec__7241_7251,(1),null);
(evt[k_7252] = v_7253);

var G__7254 = seq__7237_7247;
var G__7255 = chunk__7238_7248;
var G__7256 = count__7239_7249;
var G__7257 = (i__7240_7250 + (1));
seq__7237_7247 = G__7254;
chunk__7238_7248 = G__7255;
count__7239_7249 = G__7256;
i__7240_7250 = G__7257;
continue;
} else {
var temp__4425__auto___7258 = cljs.core.seq.call(null,seq__7237_7247);
if(temp__4425__auto___7258){
var seq__7237_7259__$1 = temp__4425__auto___7258;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7237_7259__$1)){
var c__5792__auto___7260 = cljs.core.chunk_first.call(null,seq__7237_7259__$1);
var G__7261 = cljs.core.chunk_rest.call(null,seq__7237_7259__$1);
var G__7262 = c__5792__auto___7260;
var G__7263 = cljs.core.count.call(null,c__5792__auto___7260);
var G__7264 = (0);
seq__7237_7247 = G__7261;
chunk__7238_7248 = G__7262;
count__7239_7249 = G__7263;
i__7240_7250 = G__7264;
continue;
} else {
var vec__7242_7265 = cljs.core.first.call(null,seq__7237_7259__$1);
var k_7266 = cljs.core.nth.call(null,vec__7242_7265,(0),null);
var v_7267 = cljs.core.nth.call(null,vec__7242_7265,(1),null);
(evt[k_7266] = v_7267);

var G__7268 = cljs.core.next.call(null,seq__7237_7259__$1);
var G__7269 = null;
var G__7270 = (0);
var G__7271 = (0);
seq__7237_7247 = G__7268;
chunk__7238_7248 = G__7269;
count__7239_7249 = G__7270;
i__7240_7250 = G__7271;
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
return (function (p1__7272_SHARP_){
return goog.events.getListeners(p1__7272_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
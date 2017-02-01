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
if(typeof domina.events.t_domina$events7042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events7042 = (function (create_listener_function,f,evt,meta7043){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta7043 = meta7043;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events7042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7044,meta7043__$1){
var self__ = this;
var _7044__$1 = this;
return (new domina.events.t_domina$events7042(self__.create_listener_function,self__.f,self__.evt,meta7043__$1));
});

domina.events.t_domina$events7042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7044){
var self__ = this;
var _7044__$1 = this;
return self__.meta7043;
});

domina.events.t_domina$events7042.prototype.domina$events$Event$ = true;

domina.events.t_domina$events7042.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events7042.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events7042.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events7042.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events7042.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events7042.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events7042.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events7042.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4989__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events7042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta7043","meta7043",1535687468,null)], null);
});

domina.events.t_domina$events7042.cljs$lang$type = true;

domina.events.t_domina$events7042.cljs$lang$ctorStr = "domina.events/t_domina$events7042";

domina.events.t_domina$events7042.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"domina.events/t_domina$events7042");
});

domina.events.__GT_t_domina$events7042 = (function domina$events$create_listener_function_$___GT_t_domina$events7042(create_listener_function__$1,f__$1,evt__$1,meta7043){
return (new domina.events.t_domina$events7042(create_listener_function__$1,f__$1,evt__$1,meta7043));
});

}

return (new domina.events.t_domina$events7042(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__7049(s__7050){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__7050__$1 = s__7050;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7050__$1);
if(temp__4425__auto__){
var s__7050__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7050__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__7050__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__7052 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__7051 = (0);
while(true){
if((i__7051 < size__5760__auto__)){
var node = cljs.core._nth.call(null,c__5759__auto__,i__7051);
cljs.core.chunk_append.call(null,b__7052,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__7053 = (i__7051 + (1));
i__7051 = G__7053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7052),domina$events$listen_internal_BANG__$_iter__7049.call(null,cljs.core.chunk_rest.call(null,s__7050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7052),null);
}
} else {
var node = cljs.core.first.call(null,s__7050__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__7049.call(null,cljs.core.rest.call(null,s__7050__$2)));
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
var args7054 = [];
var len__6047__auto___7057 = arguments.length;
var i__6048__auto___7058 = (0);
while(true){
if((i__6048__auto___7058 < len__6047__auto___7057)){
args7054.push((arguments[i__6048__auto___7058]));

var G__7059 = (i__6048__auto___7058 + (1));
i__6048__auto___7058 = G__7059;
continue;
} else {
}
break;
}

var G__7056 = args7054.length;
switch (G__7056) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7054.length)].join('')));

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
var args7061 = [];
var len__6047__auto___7064 = arguments.length;
var i__6048__auto___7065 = (0);
while(true){
if((i__6048__auto___7065 < len__6047__auto___7064)){
args7061.push((arguments[i__6048__auto___7065]));

var G__7066 = (i__6048__auto___7065 + (1));
i__6048__auto___7065 = G__7066;
continue;
} else {
}
break;
}

var G__7063 = args7061.length;
switch (G__7063) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7061.length)].join('')));

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
var args7068 = [];
var len__6047__auto___7071 = arguments.length;
var i__6048__auto___7072 = (0);
while(true){
if((i__6048__auto___7072 < len__6047__auto___7071)){
args7068.push((arguments[i__6048__auto___7072]));

var G__7073 = (i__6048__auto___7072 + (1));
i__6048__auto___7072 = G__7073;
continue;
} else {
}
break;
}

var G__7070 = args7068.length;
switch (G__7070) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7068.length)].join('')));

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
var args7075 = [];
var len__6047__auto___7078 = arguments.length;
var i__6048__auto___7079 = (0);
while(true){
if((i__6048__auto___7079 < len__6047__auto___7078)){
args7075.push((arguments[i__6048__auto___7079]));

var G__7080 = (i__6048__auto___7079 + (1));
i__6048__auto___7079 = G__7080;
continue;
} else {
}
break;
}

var G__7077 = args7075.length;
switch (G__7077) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7075.length)].join('')));

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
var args7082 = [];
var len__6047__auto___7093 = arguments.length;
var i__6048__auto___7094 = (0);
while(true){
if((i__6048__auto___7094 < len__6047__auto___7093)){
args7082.push((arguments[i__6048__auto___7094]));

var G__7095 = (i__6048__auto___7094 + (1));
i__6048__auto___7094 = G__7095;
continue;
} else {
}
break;
}

var G__7084 = args7082.length;
switch (G__7084) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7082.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__7085 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7086 = null;
var count__7087 = (0);
var i__7088 = (0);
while(true){
if((i__7088 < count__7087)){
var node = cljs.core._nth.call(null,chunk__7086,i__7088);
goog.events.removeAll(node);

var G__7097 = seq__7085;
var G__7098 = chunk__7086;
var G__7099 = count__7087;
var G__7100 = (i__7088 + (1));
seq__7085 = G__7097;
chunk__7086 = G__7098;
count__7087 = G__7099;
i__7088 = G__7100;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7085);
if(temp__4425__auto__){
var seq__7085__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7085__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7085__$1);
var G__7101 = cljs.core.chunk_rest.call(null,seq__7085__$1);
var G__7102 = c__5792__auto__;
var G__7103 = cljs.core.count.call(null,c__5792__auto__);
var G__7104 = (0);
seq__7085 = G__7101;
chunk__7086 = G__7102;
count__7087 = G__7103;
i__7088 = G__7104;
continue;
} else {
var node = cljs.core.first.call(null,seq__7085__$1);
goog.events.removeAll(node);

var G__7105 = cljs.core.next.call(null,seq__7085__$1);
var G__7106 = null;
var G__7107 = (0);
var G__7108 = (0);
seq__7085 = G__7105;
chunk__7086 = G__7106;
count__7087 = G__7107;
i__7088 = G__7108;
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
var seq__7089 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7090 = null;
var count__7091 = (0);
var i__7092 = (0);
while(true){
if((i__7092 < count__7091)){
var node = cljs.core._nth.call(null,chunk__7090,i__7092);
goog.events.removeAll(node,type__$1);

var G__7109 = seq__7089;
var G__7110 = chunk__7090;
var G__7111 = count__7091;
var G__7112 = (i__7092 + (1));
seq__7089 = G__7109;
chunk__7090 = G__7110;
count__7091 = G__7111;
i__7092 = G__7112;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7089);
if(temp__4425__auto__){
var seq__7089__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7089__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7089__$1);
var G__7113 = cljs.core.chunk_rest.call(null,seq__7089__$1);
var G__7114 = c__5792__auto__;
var G__7115 = cljs.core.count.call(null,c__5792__auto__);
var G__7116 = (0);
seq__7089 = G__7113;
chunk__7090 = G__7114;
count__7091 = G__7115;
i__7092 = G__7116;
continue;
} else {
var node = cljs.core.first.call(null,seq__7089__$1);
goog.events.removeAll(node,type__$1);

var G__7117 = cljs.core.next.call(null,seq__7089__$1);
var G__7118 = null;
var G__7119 = (0);
var G__7120 = (0);
seq__7089 = G__7117;
chunk__7090 = G__7118;
count__7091 = G__7119;
i__7092 = G__7120;
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
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7121.length)].join('')));

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
var G__7128 = parent;
var G__7129 = cljs.core.cons.call(null,parent,so_far);
n = G__7128;
so_far = G__7129;
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
var seq__7138_7146 = cljs.core.seq.call(null,ancestors);
var chunk__7139_7147 = null;
var count__7140_7148 = (0);
var i__7141_7149 = (0);
while(true){
if((i__7141_7149 < count__7140_7148)){
var n_7150 = cljs.core._nth.call(null,chunk__7139_7147,i__7141_7149);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7150;

goog.events.fireListeners(n_7150,evt.type,true,evt);
}

var G__7151 = seq__7138_7146;
var G__7152 = chunk__7139_7147;
var G__7153 = count__7140_7148;
var G__7154 = (i__7141_7149 + (1));
seq__7138_7146 = G__7151;
chunk__7139_7147 = G__7152;
count__7140_7148 = G__7153;
i__7141_7149 = G__7154;
continue;
} else {
var temp__4425__auto___7155 = cljs.core.seq.call(null,seq__7138_7146);
if(temp__4425__auto___7155){
var seq__7138_7156__$1 = temp__4425__auto___7155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7138_7156__$1)){
var c__5792__auto___7157 = cljs.core.chunk_first.call(null,seq__7138_7156__$1);
var G__7158 = cljs.core.chunk_rest.call(null,seq__7138_7156__$1);
var G__7159 = c__5792__auto___7157;
var G__7160 = cljs.core.count.call(null,c__5792__auto___7157);
var G__7161 = (0);
seq__7138_7146 = G__7158;
chunk__7139_7147 = G__7159;
count__7140_7148 = G__7160;
i__7141_7149 = G__7161;
continue;
} else {
var n_7162 = cljs.core.first.call(null,seq__7138_7156__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7162;

goog.events.fireListeners(n_7162,evt.type,true,evt);
}

var G__7163 = cljs.core.next.call(null,seq__7138_7156__$1);
var G__7164 = null;
var G__7165 = (0);
var G__7166 = (0);
seq__7138_7146 = G__7163;
chunk__7139_7147 = G__7164;
count__7140_7148 = G__7165;
i__7141_7149 = G__7166;
continue;
}
} else {
}
}
break;
}

var seq__7142_7167 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__7143_7168 = null;
var count__7144_7169 = (0);
var i__7145_7170 = (0);
while(true){
if((i__7145_7170 < count__7144_7169)){
var n_7171 = cljs.core._nth.call(null,chunk__7143_7168,i__7145_7170);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7171;

goog.events.fireListeners(n_7171,evt.type,false,evt);
}

var G__7172 = seq__7142_7167;
var G__7173 = chunk__7143_7168;
var G__7174 = count__7144_7169;
var G__7175 = (i__7145_7170 + (1));
seq__7142_7167 = G__7172;
chunk__7143_7168 = G__7173;
count__7144_7169 = G__7174;
i__7145_7170 = G__7175;
continue;
} else {
var temp__4425__auto___7176 = cljs.core.seq.call(null,seq__7142_7167);
if(temp__4425__auto___7176){
var seq__7142_7177__$1 = temp__4425__auto___7176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7142_7177__$1)){
var c__5792__auto___7178 = cljs.core.chunk_first.call(null,seq__7142_7177__$1);
var G__7179 = cljs.core.chunk_rest.call(null,seq__7142_7177__$1);
var G__7180 = c__5792__auto___7178;
var G__7181 = cljs.core.count.call(null,c__5792__auto___7178);
var G__7182 = (0);
seq__7142_7167 = G__7179;
chunk__7143_7168 = G__7180;
count__7144_7169 = G__7181;
i__7145_7170 = G__7182;
continue;
} else {
var n_7183 = cljs.core.first.call(null,seq__7142_7177__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7183;

goog.events.fireListeners(n_7183,evt.type,false,evt);
}

var G__7184 = cljs.core.next.call(null,seq__7142_7177__$1);
var G__7185 = null;
var G__7186 = (0);
var G__7187 = (0);
seq__7142_7167 = G__7184;
chunk__7143_7168 = G__7185;
count__7144_7169 = G__7186;
i__7145_7170 = G__7187;
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
var args7188 = [];
var len__6047__auto___7197 = arguments.length;
var i__6048__auto___7198 = (0);
while(true){
if((i__6048__auto___7198 < len__6047__auto___7197)){
args7188.push((arguments[i__6048__auto___7198]));

var G__7199 = (i__6048__auto___7198 + (1));
i__6048__auto___7198 = G__7199;
continue;
} else {
}
break;
}

var G__7190 = args7188.length;
switch (G__7190) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7188.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__7191_7201 = cljs.core.seq.call(null,evt_map);
var chunk__7192_7202 = null;
var count__7193_7203 = (0);
var i__7194_7204 = (0);
while(true){
if((i__7194_7204 < count__7193_7203)){
var vec__7195_7205 = cljs.core._nth.call(null,chunk__7192_7202,i__7194_7204);
var k_7206 = cljs.core.nth.call(null,vec__7195_7205,(0),null);
var v_7207 = cljs.core.nth.call(null,vec__7195_7205,(1),null);
(evt[k_7206] = v_7207);

var G__7208 = seq__7191_7201;
var G__7209 = chunk__7192_7202;
var G__7210 = count__7193_7203;
var G__7211 = (i__7194_7204 + (1));
seq__7191_7201 = G__7208;
chunk__7192_7202 = G__7209;
count__7193_7203 = G__7210;
i__7194_7204 = G__7211;
continue;
} else {
var temp__4425__auto___7212 = cljs.core.seq.call(null,seq__7191_7201);
if(temp__4425__auto___7212){
var seq__7191_7213__$1 = temp__4425__auto___7212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7191_7213__$1)){
var c__5792__auto___7214 = cljs.core.chunk_first.call(null,seq__7191_7213__$1);
var G__7215 = cljs.core.chunk_rest.call(null,seq__7191_7213__$1);
var G__7216 = c__5792__auto___7214;
var G__7217 = cljs.core.count.call(null,c__5792__auto___7214);
var G__7218 = (0);
seq__7191_7201 = G__7215;
chunk__7192_7202 = G__7216;
count__7193_7203 = G__7217;
i__7194_7204 = G__7218;
continue;
} else {
var vec__7196_7219 = cljs.core.first.call(null,seq__7191_7213__$1);
var k_7220 = cljs.core.nth.call(null,vec__7196_7219,(0),null);
var v_7221 = cljs.core.nth.call(null,vec__7196_7219,(1),null);
(evt[k_7220] = v_7221);

var G__7222 = cljs.core.next.call(null,seq__7191_7213__$1);
var G__7223 = null;
var G__7224 = (0);
var G__7225 = (0);
seq__7191_7201 = G__7222;
chunk__7192_7202 = G__7223;
count__7193_7203 = G__7224;
i__7194_7204 = G__7225;
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
return (function (p1__7226_SHARP_){
return goog.events.getListeners(p1__7226_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
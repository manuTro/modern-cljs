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
if(typeof domina.events.t_domina$events8509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events8509 = (function (create_listener_function,f,evt,meta8510){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta8510 = meta8510;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events8509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8511,meta8510__$1){
var self__ = this;
var _8511__$1 = this;
return (new domina.events.t_domina$events8509(self__.create_listener_function,self__.f,self__.evt,meta8510__$1));
});

domina.events.t_domina$events8509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8511){
var self__ = this;
var _8511__$1 = this;
return self__.meta8510;
});

domina.events.t_domina$events8509.prototype.domina$events$Event$ = true;

domina.events.t_domina$events8509.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events8509.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events8509.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events8509.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events8509.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events8509.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events8509.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events8509.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4989__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events8509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta8510","meta8510",-1708556274,null)], null);
});

domina.events.t_domina$events8509.cljs$lang$type = true;

domina.events.t_domina$events8509.cljs$lang$ctorStr = "domina.events/t_domina$events8509";

domina.events.t_domina$events8509.cljs$lang$ctorPrWriter = (function (this__5587__auto__,writer__5588__auto__,opt__5589__auto__){
return cljs.core._write.call(null,writer__5588__auto__,"domina.events/t_domina$events8509");
});

domina.events.__GT_t_domina$events8509 = (function domina$events$create_listener_function_$___GT_t_domina$events8509(create_listener_function__$1,f__$1,evt__$1,meta8510){
return (new domina.events.t_domina$events8509(create_listener_function__$1,f__$1,evt__$1,meta8510));
});

}

return (new domina.events.t_domina$events8509(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5761__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__8516(s__8517){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__8517__$1 = s__8517;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8517__$1);
if(temp__4425__auto__){
var s__8517__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8517__$2)){
var c__5759__auto__ = cljs.core.chunk_first.call(null,s__8517__$2);
var size__5760__auto__ = cljs.core.count.call(null,c__5759__auto__);
var b__8519 = cljs.core.chunk_buffer.call(null,size__5760__auto__);
if((function (){var i__8518 = (0);
while(true){
if((i__8518 < size__5760__auto__)){
var node = cljs.core._nth.call(null,c__5759__auto__,i__8518);
cljs.core.chunk_append.call(null,b__8519,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__8520 = (i__8518 + (1));
i__8518 = G__8520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8519),domina$events$listen_internal_BANG__$_iter__8516.call(null,cljs.core.chunk_rest.call(null,s__8517__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8519),null);
}
} else {
var node = cljs.core.first.call(null,s__8517__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__8516.call(null,cljs.core.rest.call(null,s__8517__$2)));
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
var args8521 = [];
var len__6047__auto___8524 = arguments.length;
var i__6048__auto___8525 = (0);
while(true){
if((i__6048__auto___8525 < len__6047__auto___8524)){
args8521.push((arguments[i__6048__auto___8525]));

var G__8526 = (i__6048__auto___8525 + (1));
i__6048__auto___8525 = G__8526;
continue;
} else {
}
break;
}

var G__8523 = args8521.length;
switch (G__8523) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8521.length)].join('')));

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
var args8528 = [];
var len__6047__auto___8531 = arguments.length;
var i__6048__auto___8532 = (0);
while(true){
if((i__6048__auto___8532 < len__6047__auto___8531)){
args8528.push((arguments[i__6048__auto___8532]));

var G__8533 = (i__6048__auto___8532 + (1));
i__6048__auto___8532 = G__8533;
continue;
} else {
}
break;
}

var G__8530 = args8528.length;
switch (G__8530) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8528.length)].join('')));

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
var args8535 = [];
var len__6047__auto___8538 = arguments.length;
var i__6048__auto___8539 = (0);
while(true){
if((i__6048__auto___8539 < len__6047__auto___8538)){
args8535.push((arguments[i__6048__auto___8539]));

var G__8540 = (i__6048__auto___8539 + (1));
i__6048__auto___8539 = G__8540;
continue;
} else {
}
break;
}

var G__8537 = args8535.length;
switch (G__8537) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8535.length)].join('')));

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
var args8542 = [];
var len__6047__auto___8545 = arguments.length;
var i__6048__auto___8546 = (0);
while(true){
if((i__6048__auto___8546 < len__6047__auto___8545)){
args8542.push((arguments[i__6048__auto___8546]));

var G__8547 = (i__6048__auto___8546 + (1));
i__6048__auto___8546 = G__8547;
continue;
} else {
}
break;
}

var G__8544 = args8542.length;
switch (G__8544) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8542.length)].join('')));

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
var args8549 = [];
var len__6047__auto___8560 = arguments.length;
var i__6048__auto___8561 = (0);
while(true){
if((i__6048__auto___8561 < len__6047__auto___8560)){
args8549.push((arguments[i__6048__auto___8561]));

var G__8562 = (i__6048__auto___8561 + (1));
i__6048__auto___8561 = G__8562;
continue;
} else {
}
break;
}

var G__8551 = args8549.length;
switch (G__8551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8549.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__8552 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8553 = null;
var count__8554 = (0);
var i__8555 = (0);
while(true){
if((i__8555 < count__8554)){
var node = cljs.core._nth.call(null,chunk__8553,i__8555);
goog.events.removeAll(node);

var G__8564 = seq__8552;
var G__8565 = chunk__8553;
var G__8566 = count__8554;
var G__8567 = (i__8555 + (1));
seq__8552 = G__8564;
chunk__8553 = G__8565;
count__8554 = G__8566;
i__8555 = G__8567;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8552);
if(temp__4425__auto__){
var seq__8552__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8552__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__8552__$1);
var G__8568 = cljs.core.chunk_rest.call(null,seq__8552__$1);
var G__8569 = c__5792__auto__;
var G__8570 = cljs.core.count.call(null,c__5792__auto__);
var G__8571 = (0);
seq__8552 = G__8568;
chunk__8553 = G__8569;
count__8554 = G__8570;
i__8555 = G__8571;
continue;
} else {
var node = cljs.core.first.call(null,seq__8552__$1);
goog.events.removeAll(node);

var G__8572 = cljs.core.next.call(null,seq__8552__$1);
var G__8573 = null;
var G__8574 = (0);
var G__8575 = (0);
seq__8552 = G__8572;
chunk__8553 = G__8573;
count__8554 = G__8574;
i__8555 = G__8575;
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
var seq__8556 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8557 = null;
var count__8558 = (0);
var i__8559 = (0);
while(true){
if((i__8559 < count__8558)){
var node = cljs.core._nth.call(null,chunk__8557,i__8559);
goog.events.removeAll(node,type__$1);

var G__8576 = seq__8556;
var G__8577 = chunk__8557;
var G__8578 = count__8558;
var G__8579 = (i__8559 + (1));
seq__8556 = G__8576;
chunk__8557 = G__8577;
count__8558 = G__8578;
i__8559 = G__8579;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8556);
if(temp__4425__auto__){
var seq__8556__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8556__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__8556__$1);
var G__8580 = cljs.core.chunk_rest.call(null,seq__8556__$1);
var G__8581 = c__5792__auto__;
var G__8582 = cljs.core.count.call(null,c__5792__auto__);
var G__8583 = (0);
seq__8556 = G__8580;
chunk__8557 = G__8581;
count__8558 = G__8582;
i__8559 = G__8583;
continue;
} else {
var node = cljs.core.first.call(null,seq__8556__$1);
goog.events.removeAll(node,type__$1);

var G__8584 = cljs.core.next.call(null,seq__8556__$1);
var G__8585 = null;
var G__8586 = (0);
var G__8587 = (0);
seq__8556 = G__8584;
chunk__8557 = G__8585;
count__8558 = G__8586;
i__8559 = G__8587;
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
var args8588 = [];
var len__6047__auto___8591 = arguments.length;
var i__6048__auto___8592 = (0);
while(true){
if((i__6048__auto___8592 < len__6047__auto___8591)){
args8588.push((arguments[i__6048__auto___8592]));

var G__8593 = (i__6048__auto___8592 + (1));
i__6048__auto___8592 = G__8593;
continue;
} else {
}
break;
}

var G__8590 = args8588.length;
switch (G__8590) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8588.length)].join('')));

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
var G__8595 = parent;
var G__8596 = cljs.core.cons.call(null,parent,so_far);
n = G__8595;
so_far = G__8596;
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
var seq__8605_8613 = cljs.core.seq.call(null,ancestors);
var chunk__8606_8614 = null;
var count__8607_8615 = (0);
var i__8608_8616 = (0);
while(true){
if((i__8608_8616 < count__8607_8615)){
var n_8617 = cljs.core._nth.call(null,chunk__8606_8614,i__8608_8616);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8617;

goog.events.fireListeners(n_8617,evt.type,true,evt);
}

var G__8618 = seq__8605_8613;
var G__8619 = chunk__8606_8614;
var G__8620 = count__8607_8615;
var G__8621 = (i__8608_8616 + (1));
seq__8605_8613 = G__8618;
chunk__8606_8614 = G__8619;
count__8607_8615 = G__8620;
i__8608_8616 = G__8621;
continue;
} else {
var temp__4425__auto___8622 = cljs.core.seq.call(null,seq__8605_8613);
if(temp__4425__auto___8622){
var seq__8605_8623__$1 = temp__4425__auto___8622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8605_8623__$1)){
var c__5792__auto___8624 = cljs.core.chunk_first.call(null,seq__8605_8623__$1);
var G__8625 = cljs.core.chunk_rest.call(null,seq__8605_8623__$1);
var G__8626 = c__5792__auto___8624;
var G__8627 = cljs.core.count.call(null,c__5792__auto___8624);
var G__8628 = (0);
seq__8605_8613 = G__8625;
chunk__8606_8614 = G__8626;
count__8607_8615 = G__8627;
i__8608_8616 = G__8628;
continue;
} else {
var n_8629 = cljs.core.first.call(null,seq__8605_8623__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8629;

goog.events.fireListeners(n_8629,evt.type,true,evt);
}

var G__8630 = cljs.core.next.call(null,seq__8605_8623__$1);
var G__8631 = null;
var G__8632 = (0);
var G__8633 = (0);
seq__8605_8613 = G__8630;
chunk__8606_8614 = G__8631;
count__8607_8615 = G__8632;
i__8608_8616 = G__8633;
continue;
}
} else {
}
}
break;
}

var seq__8609_8634 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__8610_8635 = null;
var count__8611_8636 = (0);
var i__8612_8637 = (0);
while(true){
if((i__8612_8637 < count__8611_8636)){
var n_8638 = cljs.core._nth.call(null,chunk__8610_8635,i__8612_8637);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8638;

goog.events.fireListeners(n_8638,evt.type,false,evt);
}

var G__8639 = seq__8609_8634;
var G__8640 = chunk__8610_8635;
var G__8641 = count__8611_8636;
var G__8642 = (i__8612_8637 + (1));
seq__8609_8634 = G__8639;
chunk__8610_8635 = G__8640;
count__8611_8636 = G__8641;
i__8612_8637 = G__8642;
continue;
} else {
var temp__4425__auto___8643 = cljs.core.seq.call(null,seq__8609_8634);
if(temp__4425__auto___8643){
var seq__8609_8644__$1 = temp__4425__auto___8643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8609_8644__$1)){
var c__5792__auto___8645 = cljs.core.chunk_first.call(null,seq__8609_8644__$1);
var G__8646 = cljs.core.chunk_rest.call(null,seq__8609_8644__$1);
var G__8647 = c__5792__auto___8645;
var G__8648 = cljs.core.count.call(null,c__5792__auto___8645);
var G__8649 = (0);
seq__8609_8634 = G__8646;
chunk__8610_8635 = G__8647;
count__8611_8636 = G__8648;
i__8612_8637 = G__8649;
continue;
} else {
var n_8650 = cljs.core.first.call(null,seq__8609_8644__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8650;

goog.events.fireListeners(n_8650,evt.type,false,evt);
}

var G__8651 = cljs.core.next.call(null,seq__8609_8644__$1);
var G__8652 = null;
var G__8653 = (0);
var G__8654 = (0);
seq__8609_8634 = G__8651;
chunk__8610_8635 = G__8652;
count__8611_8636 = G__8653;
i__8612_8637 = G__8654;
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
var args8655 = [];
var len__6047__auto___8664 = arguments.length;
var i__6048__auto___8665 = (0);
while(true){
if((i__6048__auto___8665 < len__6047__auto___8664)){
args8655.push((arguments[i__6048__auto___8665]));

var G__8666 = (i__6048__auto___8665 + (1));
i__6048__auto___8665 = G__8666;
continue;
} else {
}
break;
}

var G__8657 = args8655.length;
switch (G__8657) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8655.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__8658_8668 = cljs.core.seq.call(null,evt_map);
var chunk__8659_8669 = null;
var count__8660_8670 = (0);
var i__8661_8671 = (0);
while(true){
if((i__8661_8671 < count__8660_8670)){
var vec__8662_8672 = cljs.core._nth.call(null,chunk__8659_8669,i__8661_8671);
var k_8673 = cljs.core.nth.call(null,vec__8662_8672,(0),null);
var v_8674 = cljs.core.nth.call(null,vec__8662_8672,(1),null);
(evt[k_8673] = v_8674);

var G__8675 = seq__8658_8668;
var G__8676 = chunk__8659_8669;
var G__8677 = count__8660_8670;
var G__8678 = (i__8661_8671 + (1));
seq__8658_8668 = G__8675;
chunk__8659_8669 = G__8676;
count__8660_8670 = G__8677;
i__8661_8671 = G__8678;
continue;
} else {
var temp__4425__auto___8679 = cljs.core.seq.call(null,seq__8658_8668);
if(temp__4425__auto___8679){
var seq__8658_8680__$1 = temp__4425__auto___8679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8658_8680__$1)){
var c__5792__auto___8681 = cljs.core.chunk_first.call(null,seq__8658_8680__$1);
var G__8682 = cljs.core.chunk_rest.call(null,seq__8658_8680__$1);
var G__8683 = c__5792__auto___8681;
var G__8684 = cljs.core.count.call(null,c__5792__auto___8681);
var G__8685 = (0);
seq__8658_8668 = G__8682;
chunk__8659_8669 = G__8683;
count__8660_8670 = G__8684;
i__8661_8671 = G__8685;
continue;
} else {
var vec__8663_8686 = cljs.core.first.call(null,seq__8658_8680__$1);
var k_8687 = cljs.core.nth.call(null,vec__8663_8686,(0),null);
var v_8688 = cljs.core.nth.call(null,vec__8663_8686,(1),null);
(evt[k_8687] = v_8688);

var G__8689 = cljs.core.next.call(null,seq__8658_8680__$1);
var G__8690 = null;
var G__8691 = (0);
var G__8692 = (0);
seq__8658_8668 = G__8689;
chunk__8659_8669 = G__8690;
count__8660_8670 = G__8691;
i__8661_8671 = G__8692;
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
return (function (p1__8693_SHARP_){
return goog.events.getListeners(p1__8693_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
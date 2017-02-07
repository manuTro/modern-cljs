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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.prevent_default[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.stop_propagation[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.target[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.target["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.current_target[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.current_target["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.event_type[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.event_type["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
var x__5643__auto__ = (((evt == null))?null:evt);
var m__5644__auto__ = (domina.events.raw_event[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,evt);
} else {
var m__5644__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,evt);
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
if(typeof domina.events.t_domina$events8522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events8522 = (function (create_listener_function,f,evt,meta8523){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta8523 = meta8523;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events8522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8524,meta8523__$1){
var self__ = this;
var _8524__$1 = this;
return (new domina.events.t_domina$events8522(self__.create_listener_function,self__.f,self__.evt,meta8523__$1));
});

domina.events.t_domina$events8522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8524){
var self__ = this;
var _8524__$1 = this;
return self__.meta8523;
});

domina.events.t_domina$events8522.prototype.domina$events$Event$ = true;

domina.events.t_domina$events8522.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events8522.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events8522.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events8522.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events8522.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events8522.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events8522.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events8522.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4988__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events8522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta8523","meta8523",-1539422698,null)], null);
});

domina.events.t_domina$events8522.cljs$lang$type = true;

domina.events.t_domina$events8522.cljs$lang$ctorStr = "domina.events/t_domina$events8522";

domina.events.t_domina$events8522.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"domina.events/t_domina$events8522");
});

domina.events.__GT_t_domina$events8522 = (function domina$events$create_listener_function_$___GT_t_domina$events8522(create_listener_function__$1,f__$1,evt__$1,meta8523){
return (new domina.events.t_domina$events8522(create_listener_function__$1,f__$1,evt__$1,meta8523));
});

}

return (new domina.events.t_domina$events8522(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5760__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__8529(s__8530){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__8530__$1 = s__8530;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8530__$1);
if(temp__4425__auto__){
var s__8530__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8530__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__8530__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__8532 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__8531 = (0);
while(true){
if((i__8531 < size__5759__auto__)){
var node = cljs.core._nth.call(null,c__5758__auto__,i__8531);
cljs.core.chunk_append.call(null,b__8532,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__8533 = (i__8531 + (1));
i__8531 = G__8533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8532),domina$events$listen_internal_BANG__$_iter__8529.call(null,cljs.core.chunk_rest.call(null,s__8530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8532),null);
}
} else {
var node = cljs.core.first.call(null,s__8530__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__8529.call(null,cljs.core.rest.call(null,s__8530__$2)));
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
return iter__5760__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args8534 = [];
var len__6046__auto___8537 = arguments.length;
var i__6047__auto___8538 = (0);
while(true){
if((i__6047__auto___8538 < len__6046__auto___8537)){
args8534.push((arguments[i__6047__auto___8538]));

var G__8539 = (i__6047__auto___8538 + (1));
i__6047__auto___8538 = G__8539;
continue;
} else {
}
break;
}

var G__8536 = args8534.length;
switch (G__8536) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8534.length)].join('')));

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
var args8541 = [];
var len__6046__auto___8544 = arguments.length;
var i__6047__auto___8545 = (0);
while(true){
if((i__6047__auto___8545 < len__6046__auto___8544)){
args8541.push((arguments[i__6047__auto___8545]));

var G__8546 = (i__6047__auto___8545 + (1));
i__6047__auto___8545 = G__8546;
continue;
} else {
}
break;
}

var G__8543 = args8541.length;
switch (G__8543) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8541.length)].join('')));

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
var args8548 = [];
var len__6046__auto___8551 = arguments.length;
var i__6047__auto___8552 = (0);
while(true){
if((i__6047__auto___8552 < len__6046__auto___8551)){
args8548.push((arguments[i__6047__auto___8552]));

var G__8553 = (i__6047__auto___8552 + (1));
i__6047__auto___8552 = G__8553;
continue;
} else {
}
break;
}

var G__8550 = args8548.length;
switch (G__8550) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8548.length)].join('')));

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
var args8555 = [];
var len__6046__auto___8558 = arguments.length;
var i__6047__auto___8559 = (0);
while(true){
if((i__6047__auto___8559 < len__6046__auto___8558)){
args8555.push((arguments[i__6047__auto___8559]));

var G__8560 = (i__6047__auto___8559 + (1));
i__6047__auto___8559 = G__8560;
continue;
} else {
}
break;
}

var G__8557 = args8555.length;
switch (G__8557) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8555.length)].join('')));

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
var args8562 = [];
var len__6046__auto___8573 = arguments.length;
var i__6047__auto___8574 = (0);
while(true){
if((i__6047__auto___8574 < len__6046__auto___8573)){
args8562.push((arguments[i__6047__auto___8574]));

var G__8575 = (i__6047__auto___8574 + (1));
i__6047__auto___8574 = G__8575;
continue;
} else {
}
break;
}

var G__8564 = args8562.length;
switch (G__8564) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8562.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__8565 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8566 = null;
var count__8567 = (0);
var i__8568 = (0);
while(true){
if((i__8568 < count__8567)){
var node = cljs.core._nth.call(null,chunk__8566,i__8568);
goog.events.removeAll(node);

var G__8577 = seq__8565;
var G__8578 = chunk__8566;
var G__8579 = count__8567;
var G__8580 = (i__8568 + (1));
seq__8565 = G__8577;
chunk__8566 = G__8578;
count__8567 = G__8579;
i__8568 = G__8580;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8565);
if(temp__4425__auto__){
var seq__8565__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8565__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__8565__$1);
var G__8581 = cljs.core.chunk_rest.call(null,seq__8565__$1);
var G__8582 = c__5791__auto__;
var G__8583 = cljs.core.count.call(null,c__5791__auto__);
var G__8584 = (0);
seq__8565 = G__8581;
chunk__8566 = G__8582;
count__8567 = G__8583;
i__8568 = G__8584;
continue;
} else {
var node = cljs.core.first.call(null,seq__8565__$1);
goog.events.removeAll(node);

var G__8585 = cljs.core.next.call(null,seq__8565__$1);
var G__8586 = null;
var G__8587 = (0);
var G__8588 = (0);
seq__8565 = G__8585;
chunk__8566 = G__8586;
count__8567 = G__8587;
i__8568 = G__8588;
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
var seq__8569 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8570 = null;
var count__8571 = (0);
var i__8572 = (0);
while(true){
if((i__8572 < count__8571)){
var node = cljs.core._nth.call(null,chunk__8570,i__8572);
goog.events.removeAll(node,type__$1);

var G__8589 = seq__8569;
var G__8590 = chunk__8570;
var G__8591 = count__8571;
var G__8592 = (i__8572 + (1));
seq__8569 = G__8589;
chunk__8570 = G__8590;
count__8571 = G__8591;
i__8572 = G__8592;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8569);
if(temp__4425__auto__){
var seq__8569__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8569__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__8569__$1);
var G__8593 = cljs.core.chunk_rest.call(null,seq__8569__$1);
var G__8594 = c__5791__auto__;
var G__8595 = cljs.core.count.call(null,c__5791__auto__);
var G__8596 = (0);
seq__8569 = G__8593;
chunk__8570 = G__8594;
count__8571 = G__8595;
i__8572 = G__8596;
continue;
} else {
var node = cljs.core.first.call(null,seq__8569__$1);
goog.events.removeAll(node,type__$1);

var G__8597 = cljs.core.next.call(null,seq__8569__$1);
var G__8598 = null;
var G__8599 = (0);
var G__8600 = (0);
seq__8569 = G__8597;
chunk__8570 = G__8598;
count__8571 = G__8599;
i__8572 = G__8600;
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
var args8601 = [];
var len__6046__auto___8604 = arguments.length;
var i__6047__auto___8605 = (0);
while(true){
if((i__6047__auto___8605 < len__6046__auto___8604)){
args8601.push((arguments[i__6047__auto___8605]));

var G__8606 = (i__6047__auto___8605 + (1));
i__6047__auto___8605 = G__8606;
continue;
} else {
}
break;
}

var G__8603 = args8601.length;
switch (G__8603) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8601.length)].join('')));

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
var G__8608 = parent;
var G__8609 = cljs.core.cons.call(null,parent,so_far);
n = G__8608;
so_far = G__8609;
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
var seq__8618_8626 = cljs.core.seq.call(null,ancestors);
var chunk__8619_8627 = null;
var count__8620_8628 = (0);
var i__8621_8629 = (0);
while(true){
if((i__8621_8629 < count__8620_8628)){
var n_8630 = cljs.core._nth.call(null,chunk__8619_8627,i__8621_8629);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8630;

goog.events.fireListeners(n_8630,evt.type,true,evt);
}

var G__8631 = seq__8618_8626;
var G__8632 = chunk__8619_8627;
var G__8633 = count__8620_8628;
var G__8634 = (i__8621_8629 + (1));
seq__8618_8626 = G__8631;
chunk__8619_8627 = G__8632;
count__8620_8628 = G__8633;
i__8621_8629 = G__8634;
continue;
} else {
var temp__4425__auto___8635 = cljs.core.seq.call(null,seq__8618_8626);
if(temp__4425__auto___8635){
var seq__8618_8636__$1 = temp__4425__auto___8635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8618_8636__$1)){
var c__5791__auto___8637 = cljs.core.chunk_first.call(null,seq__8618_8636__$1);
var G__8638 = cljs.core.chunk_rest.call(null,seq__8618_8636__$1);
var G__8639 = c__5791__auto___8637;
var G__8640 = cljs.core.count.call(null,c__5791__auto___8637);
var G__8641 = (0);
seq__8618_8626 = G__8638;
chunk__8619_8627 = G__8639;
count__8620_8628 = G__8640;
i__8621_8629 = G__8641;
continue;
} else {
var n_8642 = cljs.core.first.call(null,seq__8618_8636__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8642;

goog.events.fireListeners(n_8642,evt.type,true,evt);
}

var G__8643 = cljs.core.next.call(null,seq__8618_8636__$1);
var G__8644 = null;
var G__8645 = (0);
var G__8646 = (0);
seq__8618_8626 = G__8643;
chunk__8619_8627 = G__8644;
count__8620_8628 = G__8645;
i__8621_8629 = G__8646;
continue;
}
} else {
}
}
break;
}

var seq__8622_8647 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__8623_8648 = null;
var count__8624_8649 = (0);
var i__8625_8650 = (0);
while(true){
if((i__8625_8650 < count__8624_8649)){
var n_8651 = cljs.core._nth.call(null,chunk__8623_8648,i__8625_8650);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8651;

goog.events.fireListeners(n_8651,evt.type,false,evt);
}

var G__8652 = seq__8622_8647;
var G__8653 = chunk__8623_8648;
var G__8654 = count__8624_8649;
var G__8655 = (i__8625_8650 + (1));
seq__8622_8647 = G__8652;
chunk__8623_8648 = G__8653;
count__8624_8649 = G__8654;
i__8625_8650 = G__8655;
continue;
} else {
var temp__4425__auto___8656 = cljs.core.seq.call(null,seq__8622_8647);
if(temp__4425__auto___8656){
var seq__8622_8657__$1 = temp__4425__auto___8656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8622_8657__$1)){
var c__5791__auto___8658 = cljs.core.chunk_first.call(null,seq__8622_8657__$1);
var G__8659 = cljs.core.chunk_rest.call(null,seq__8622_8657__$1);
var G__8660 = c__5791__auto___8658;
var G__8661 = cljs.core.count.call(null,c__5791__auto___8658);
var G__8662 = (0);
seq__8622_8647 = G__8659;
chunk__8623_8648 = G__8660;
count__8624_8649 = G__8661;
i__8625_8650 = G__8662;
continue;
} else {
var n_8663 = cljs.core.first.call(null,seq__8622_8657__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8663;

goog.events.fireListeners(n_8663,evt.type,false,evt);
}

var G__8664 = cljs.core.next.call(null,seq__8622_8657__$1);
var G__8665 = null;
var G__8666 = (0);
var G__8667 = (0);
seq__8622_8647 = G__8664;
chunk__8623_8648 = G__8665;
count__8624_8649 = G__8666;
i__8625_8650 = G__8667;
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
var and__4976__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__4976__auto__)){
return o.dispatchEvent;
} else {
return and__4976__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args8668 = [];
var len__6046__auto___8677 = arguments.length;
var i__6047__auto___8678 = (0);
while(true){
if((i__6047__auto___8678 < len__6046__auto___8677)){
args8668.push((arguments[i__6047__auto___8678]));

var G__8679 = (i__6047__auto___8678 + (1));
i__6047__auto___8678 = G__8679;
continue;
} else {
}
break;
}

var G__8670 = args8668.length;
switch (G__8670) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8668.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__8671_8681 = cljs.core.seq.call(null,evt_map);
var chunk__8672_8682 = null;
var count__8673_8683 = (0);
var i__8674_8684 = (0);
while(true){
if((i__8674_8684 < count__8673_8683)){
var vec__8675_8685 = cljs.core._nth.call(null,chunk__8672_8682,i__8674_8684);
var k_8686 = cljs.core.nth.call(null,vec__8675_8685,(0),null);
var v_8687 = cljs.core.nth.call(null,vec__8675_8685,(1),null);
(evt[k_8686] = v_8687);

var G__8688 = seq__8671_8681;
var G__8689 = chunk__8672_8682;
var G__8690 = count__8673_8683;
var G__8691 = (i__8674_8684 + (1));
seq__8671_8681 = G__8688;
chunk__8672_8682 = G__8689;
count__8673_8683 = G__8690;
i__8674_8684 = G__8691;
continue;
} else {
var temp__4425__auto___8692 = cljs.core.seq.call(null,seq__8671_8681);
if(temp__4425__auto___8692){
var seq__8671_8693__$1 = temp__4425__auto___8692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8671_8693__$1)){
var c__5791__auto___8694 = cljs.core.chunk_first.call(null,seq__8671_8693__$1);
var G__8695 = cljs.core.chunk_rest.call(null,seq__8671_8693__$1);
var G__8696 = c__5791__auto___8694;
var G__8697 = cljs.core.count.call(null,c__5791__auto___8694);
var G__8698 = (0);
seq__8671_8681 = G__8695;
chunk__8672_8682 = G__8696;
count__8673_8683 = G__8697;
i__8674_8684 = G__8698;
continue;
} else {
var vec__8676_8699 = cljs.core.first.call(null,seq__8671_8693__$1);
var k_8700 = cljs.core.nth.call(null,vec__8676_8699,(0),null);
var v_8701 = cljs.core.nth.call(null,vec__8676_8699,(1),null);
(evt[k_8700] = v_8701);

var G__8702 = cljs.core.next.call(null,seq__8671_8693__$1);
var G__8703 = null;
var G__8704 = (0);
var G__8705 = (0);
seq__8671_8681 = G__8702;
chunk__8672_8682 = G__8703;
count__8673_8683 = G__8704;
i__8674_8684 = G__8705;
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
return (function (p1__8706_SHARP_){
return goog.events.getListeners(p1__8706_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
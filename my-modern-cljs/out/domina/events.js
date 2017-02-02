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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.prevent_default[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.stop_propagation[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.target[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.target["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.current_target[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.current_target["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.event_type[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.event_type["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
var x__8066__auto__ = (((evt == null))?null:evt);
var m__8067__auto__ = (domina.events.raw_event[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,evt);
} else {
var m__8067__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,evt);
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
if(typeof domina.events.t_domina$events8615 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events8615 = (function (create_listener_function,f,evt,meta8616){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta8616 = meta8616;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events8615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8617,meta8616__$1){
var self__ = this;
var _8617__$1 = this;
return (new domina.events.t_domina$events8615(self__.create_listener_function,self__.f,self__.evt,meta8616__$1));
});

domina.events.t_domina$events8615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8617){
var self__ = this;
var _8617__$1 = this;
return self__.meta8616;
});

domina.events.t_domina$events8615.prototype.domina$events$Event$ = true;

domina.events.t_domina$events8615.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events8615.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events8615.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events8615.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events8615.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events8615.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events8615.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events8615.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__7411__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__7411__auto__)){
return or__7411__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events8615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta8616","meta8616",826071297,null)], null);
});

domina.events.t_domina$events8615.cljs$lang$type = true;

domina.events.t_domina$events8615.cljs$lang$ctorStr = "domina.events/t_domina$events8615";

domina.events.t_domina$events8615.cljs$lang$ctorPrWriter = (function (this__8009__auto__,writer__8010__auto__,opt__8011__auto__){
return cljs.core._write.call(null,writer__8010__auto__,"domina.events/t_domina$events8615");
});

domina.events.__GT_t_domina$events8615 = (function domina$events$create_listener_function_$___GT_t_domina$events8615(create_listener_function__$1,f__$1,evt__$1,meta8616){
return (new domina.events.t_domina$events8615(create_listener_function__$1,f__$1,evt__$1,meta8616));
});

}

return (new domina.events.t_domina$events8615(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__8183__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__8622(s__8623){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__8623__$1 = s__8623;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8623__$1);
if(temp__4425__auto__){
var s__8623__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8623__$2)){
var c__8181__auto__ = cljs.core.chunk_first.call(null,s__8623__$2);
var size__8182__auto__ = cljs.core.count.call(null,c__8181__auto__);
var b__8625 = cljs.core.chunk_buffer.call(null,size__8182__auto__);
if((function (){var i__8624 = (0);
while(true){
if((i__8624 < size__8182__auto__)){
var node = cljs.core._nth.call(null,c__8181__auto__,i__8624);
cljs.core.chunk_append.call(null,b__8625,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__8626 = (i__8624 + (1));
i__8624 = G__8626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8625),domina$events$listen_internal_BANG__$_iter__8622.call(null,cljs.core.chunk_rest.call(null,s__8623__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8625),null);
}
} else {
var node = cljs.core.first.call(null,s__8623__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__8622.call(null,cljs.core.rest.call(null,s__8623__$2)));
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
return iter__8183__auto__.call(null,domina.core.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var args8627 = [];
var len__8469__auto___8630 = arguments.length;
var i__8470__auto___8631 = (0);
while(true){
if((i__8470__auto___8631 < len__8469__auto___8630)){
args8627.push((arguments[i__8470__auto___8631]));

var G__8632 = (i__8470__auto___8631 + (1));
i__8470__auto___8631 = G__8632;
continue;
} else {
}
break;
}

var G__8629 = args8627.length;
switch (G__8629) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8627.length)].join('')));

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
var args8634 = [];
var len__8469__auto___8637 = arguments.length;
var i__8470__auto___8638 = (0);
while(true){
if((i__8470__auto___8638 < len__8469__auto___8637)){
args8634.push((arguments[i__8470__auto___8638]));

var G__8639 = (i__8470__auto___8638 + (1));
i__8470__auto___8638 = G__8639;
continue;
} else {
}
break;
}

var G__8636 = args8634.length;
switch (G__8636) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8634.length)].join('')));

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
var args8641 = [];
var len__8469__auto___8644 = arguments.length;
var i__8470__auto___8645 = (0);
while(true){
if((i__8470__auto___8645 < len__8469__auto___8644)){
args8641.push((arguments[i__8470__auto___8645]));

var G__8646 = (i__8470__auto___8645 + (1));
i__8470__auto___8645 = G__8646;
continue;
} else {
}
break;
}

var G__8643 = args8641.length;
switch (G__8643) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8641.length)].join('')));

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
var args8648 = [];
var len__8469__auto___8651 = arguments.length;
var i__8470__auto___8652 = (0);
while(true){
if((i__8470__auto___8652 < len__8469__auto___8651)){
args8648.push((arguments[i__8470__auto___8652]));

var G__8653 = (i__8470__auto___8652 + (1));
i__8470__auto___8652 = G__8653;
continue;
} else {
}
break;
}

var G__8650 = args8648.length;
switch (G__8650) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8648.length)].join('')));

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
var args8655 = [];
var len__8469__auto___8666 = arguments.length;
var i__8470__auto___8667 = (0);
while(true){
if((i__8470__auto___8667 < len__8469__auto___8666)){
args8655.push((arguments[i__8470__auto___8667]));

var G__8668 = (i__8470__auto___8667 + (1));
i__8470__auto___8667 = G__8668;
continue;
} else {
}
break;
}

var G__8657 = args8655.length;
switch (G__8657) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8655.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__8658 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8659 = null;
var count__8660 = (0);
var i__8661 = (0);
while(true){
if((i__8661 < count__8660)){
var node = cljs.core._nth.call(null,chunk__8659,i__8661);
goog.events.removeAll(node);

var G__8670 = seq__8658;
var G__8671 = chunk__8659;
var G__8672 = count__8660;
var G__8673 = (i__8661 + (1));
seq__8658 = G__8670;
chunk__8659 = G__8671;
count__8660 = G__8672;
i__8661 = G__8673;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8658);
if(temp__4425__auto__){
var seq__8658__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8658__$1)){
var c__8214__auto__ = cljs.core.chunk_first.call(null,seq__8658__$1);
var G__8674 = cljs.core.chunk_rest.call(null,seq__8658__$1);
var G__8675 = c__8214__auto__;
var G__8676 = cljs.core.count.call(null,c__8214__auto__);
var G__8677 = (0);
seq__8658 = G__8674;
chunk__8659 = G__8675;
count__8660 = G__8676;
i__8661 = G__8677;
continue;
} else {
var node = cljs.core.first.call(null,seq__8658__$1);
goog.events.removeAll(node);

var G__8678 = cljs.core.next.call(null,seq__8658__$1);
var G__8679 = null;
var G__8680 = (0);
var G__8681 = (0);
seq__8658 = G__8678;
chunk__8659 = G__8679;
count__8660 = G__8680;
i__8661 = G__8681;
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
var seq__8662 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8663 = null;
var count__8664 = (0);
var i__8665 = (0);
while(true){
if((i__8665 < count__8664)){
var node = cljs.core._nth.call(null,chunk__8663,i__8665);
goog.events.removeAll(node,type__$1);

var G__8682 = seq__8662;
var G__8683 = chunk__8663;
var G__8684 = count__8664;
var G__8685 = (i__8665 + (1));
seq__8662 = G__8682;
chunk__8663 = G__8683;
count__8664 = G__8684;
i__8665 = G__8685;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8662);
if(temp__4425__auto__){
var seq__8662__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8662__$1)){
var c__8214__auto__ = cljs.core.chunk_first.call(null,seq__8662__$1);
var G__8686 = cljs.core.chunk_rest.call(null,seq__8662__$1);
var G__8687 = c__8214__auto__;
var G__8688 = cljs.core.count.call(null,c__8214__auto__);
var G__8689 = (0);
seq__8662 = G__8686;
chunk__8663 = G__8687;
count__8664 = G__8688;
i__8665 = G__8689;
continue;
} else {
var node = cljs.core.first.call(null,seq__8662__$1);
goog.events.removeAll(node,type__$1);

var G__8690 = cljs.core.next.call(null,seq__8662__$1);
var G__8691 = null;
var G__8692 = (0);
var G__8693 = (0);
seq__8662 = G__8690;
chunk__8663 = G__8691;
count__8664 = G__8692;
i__8665 = G__8693;
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
var args8694 = [];
var len__8469__auto___8697 = arguments.length;
var i__8470__auto___8698 = (0);
while(true){
if((i__8470__auto___8698 < len__8469__auto___8697)){
args8694.push((arguments[i__8470__auto___8698]));

var G__8699 = (i__8470__auto___8698 + (1));
i__8470__auto___8698 = G__8699;
continue;
} else {
}
break;
}

var G__8696 = args8694.length;
switch (G__8696) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8694.length)].join('')));

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
var G__8701 = parent;
var G__8702 = cljs.core.cons.call(null,parent,so_far);
n = G__8701;
so_far = G__8702;
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
var seq__8711_8719 = cljs.core.seq.call(null,ancestors);
var chunk__8712_8720 = null;
var count__8713_8721 = (0);
var i__8714_8722 = (0);
while(true){
if((i__8714_8722 < count__8713_8721)){
var n_8723 = cljs.core._nth.call(null,chunk__8712_8720,i__8714_8722);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8723;

goog.events.fireListeners(n_8723,evt.type,true,evt);
}

var G__8724 = seq__8711_8719;
var G__8725 = chunk__8712_8720;
var G__8726 = count__8713_8721;
var G__8727 = (i__8714_8722 + (1));
seq__8711_8719 = G__8724;
chunk__8712_8720 = G__8725;
count__8713_8721 = G__8726;
i__8714_8722 = G__8727;
continue;
} else {
var temp__4425__auto___8728 = cljs.core.seq.call(null,seq__8711_8719);
if(temp__4425__auto___8728){
var seq__8711_8729__$1 = temp__4425__auto___8728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8711_8729__$1)){
var c__8214__auto___8730 = cljs.core.chunk_first.call(null,seq__8711_8729__$1);
var G__8731 = cljs.core.chunk_rest.call(null,seq__8711_8729__$1);
var G__8732 = c__8214__auto___8730;
var G__8733 = cljs.core.count.call(null,c__8214__auto___8730);
var G__8734 = (0);
seq__8711_8719 = G__8731;
chunk__8712_8720 = G__8732;
count__8713_8721 = G__8733;
i__8714_8722 = G__8734;
continue;
} else {
var n_8735 = cljs.core.first.call(null,seq__8711_8729__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8735;

goog.events.fireListeners(n_8735,evt.type,true,evt);
}

var G__8736 = cljs.core.next.call(null,seq__8711_8729__$1);
var G__8737 = null;
var G__8738 = (0);
var G__8739 = (0);
seq__8711_8719 = G__8736;
chunk__8712_8720 = G__8737;
count__8713_8721 = G__8738;
i__8714_8722 = G__8739;
continue;
}
} else {
}
}
break;
}

var seq__8715_8740 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__8716_8741 = null;
var count__8717_8742 = (0);
var i__8718_8743 = (0);
while(true){
if((i__8718_8743 < count__8717_8742)){
var n_8744 = cljs.core._nth.call(null,chunk__8716_8741,i__8718_8743);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8744;

goog.events.fireListeners(n_8744,evt.type,false,evt);
}

var G__8745 = seq__8715_8740;
var G__8746 = chunk__8716_8741;
var G__8747 = count__8717_8742;
var G__8748 = (i__8718_8743 + (1));
seq__8715_8740 = G__8745;
chunk__8716_8741 = G__8746;
count__8717_8742 = G__8747;
i__8718_8743 = G__8748;
continue;
} else {
var temp__4425__auto___8749 = cljs.core.seq.call(null,seq__8715_8740);
if(temp__4425__auto___8749){
var seq__8715_8750__$1 = temp__4425__auto___8749;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8715_8750__$1)){
var c__8214__auto___8751 = cljs.core.chunk_first.call(null,seq__8715_8750__$1);
var G__8752 = cljs.core.chunk_rest.call(null,seq__8715_8750__$1);
var G__8753 = c__8214__auto___8751;
var G__8754 = cljs.core.count.call(null,c__8214__auto___8751);
var G__8755 = (0);
seq__8715_8740 = G__8752;
chunk__8716_8741 = G__8753;
count__8717_8742 = G__8754;
i__8718_8743 = G__8755;
continue;
} else {
var n_8756 = cljs.core.first.call(null,seq__8715_8750__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_8756;

goog.events.fireListeners(n_8756,evt.type,false,evt);
}

var G__8757 = cljs.core.next.call(null,seq__8715_8750__$1);
var G__8758 = null;
var G__8759 = (0);
var G__8760 = (0);
seq__8715_8740 = G__8757;
chunk__8716_8741 = G__8758;
count__8717_8742 = G__8759;
i__8718_8743 = G__8760;
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
var and__7399__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__7399__auto__)){
return o.dispatchEvent;
} else {
return and__7399__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var args8761 = [];
var len__8469__auto___8770 = arguments.length;
var i__8470__auto___8771 = (0);
while(true){
if((i__8470__auto___8771 < len__8469__auto___8770)){
args8761.push((arguments[i__8470__auto___8771]));

var G__8772 = (i__8470__auto___8771 + (1));
i__8470__auto___8771 = G__8772;
continue;
} else {
}
break;
}

var G__8763 = args8761.length;
switch (G__8763) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8761.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__8764_8774 = cljs.core.seq.call(null,evt_map);
var chunk__8765_8775 = null;
var count__8766_8776 = (0);
var i__8767_8777 = (0);
while(true){
if((i__8767_8777 < count__8766_8776)){
var vec__8768_8778 = cljs.core._nth.call(null,chunk__8765_8775,i__8767_8777);
var k_8779 = cljs.core.nth.call(null,vec__8768_8778,(0),null);
var v_8780 = cljs.core.nth.call(null,vec__8768_8778,(1),null);
(evt[k_8779] = v_8780);

var G__8781 = seq__8764_8774;
var G__8782 = chunk__8765_8775;
var G__8783 = count__8766_8776;
var G__8784 = (i__8767_8777 + (1));
seq__8764_8774 = G__8781;
chunk__8765_8775 = G__8782;
count__8766_8776 = G__8783;
i__8767_8777 = G__8784;
continue;
} else {
var temp__4425__auto___8785 = cljs.core.seq.call(null,seq__8764_8774);
if(temp__4425__auto___8785){
var seq__8764_8786__$1 = temp__4425__auto___8785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8764_8786__$1)){
var c__8214__auto___8787 = cljs.core.chunk_first.call(null,seq__8764_8786__$1);
var G__8788 = cljs.core.chunk_rest.call(null,seq__8764_8786__$1);
var G__8789 = c__8214__auto___8787;
var G__8790 = cljs.core.count.call(null,c__8214__auto___8787);
var G__8791 = (0);
seq__8764_8774 = G__8788;
chunk__8765_8775 = G__8789;
count__8766_8776 = G__8790;
i__8767_8777 = G__8791;
continue;
} else {
var vec__8769_8792 = cljs.core.first.call(null,seq__8764_8786__$1);
var k_8793 = cljs.core.nth.call(null,vec__8769_8792,(0),null);
var v_8794 = cljs.core.nth.call(null,vec__8769_8792,(1),null);
(evt[k_8793] = v_8794);

var G__8795 = cljs.core.next.call(null,seq__8764_8786__$1);
var G__8796 = null;
var G__8797 = (0);
var G__8798 = (0);
seq__8764_8774 = G__8795;
chunk__8765_8775 = G__8796;
count__8766_8776 = G__8797;
i__8767_8777 = G__8798;
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
return (function (p1__8799_SHARP_){
return goog.events.getListeners(p1__8799_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
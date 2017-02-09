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
if(typeof domina.events.t_domina$events7585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events7585 = (function (create_listener_function,f,evt,meta7586){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta7586 = meta7586;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t_domina$events7585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7587,meta7586__$1){
var self__ = this;
var _7587__$1 = this;
return (new domina.events.t_domina$events7585(self__.create_listener_function,self__.f,self__.evt,meta7586__$1));
});

domina.events.t_domina$events7585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7587){
var self__ = this;
var _7587__$1 = this;
return self__.meta7586;
});

domina.events.t_domina$events7585.prototype.domina$events$Event$ = true;

domina.events.t_domina$events7585.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t_domina$events7585.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t_domina$events7585.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t_domina$events7585.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t_domina$events7585.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t_domina$events7585.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t_domina$events7585.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
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

domina.events.t_domina$events7585.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4988__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return not_found;
}
});

domina.events.t_domina$events7585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta7586","meta7586",-461155906,null)], null);
});

domina.events.t_domina$events7585.cljs$lang$type = true;

domina.events.t_domina$events7585.cljs$lang$ctorStr = "domina.events/t_domina$events7585";

domina.events.t_domina$events7585.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"domina.events/t_domina$events7585");
});

domina.events.__GT_t_domina$events7585 = (function domina$events$create_listener_function_$___GT_t_domina$events7585(create_listener_function__$1,f__$1,evt__$1,meta7586){
return (new domina.events.t_domina$events7585(create_listener_function__$1,f__$1,evt__$1,meta7586));
});

}

return (new domina.events.t_domina$events7585(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5760__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__7592(s__7593){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__7593__$1 = s__7593;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7593__$1);
if(temp__4425__auto__){
var s__7593__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7593__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__7593__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__7595 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__7594 = (0);
while(true){
if((i__7594 < size__5759__auto__)){
var node = cljs.core._nth.call(null,c__5758__auto__,i__7594);
cljs.core.chunk_append.call(null,b__7595,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__7596 = (i__7594 + (1));
i__7594 = G__7596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7595),domina$events$listen_internal_BANG__$_iter__7592.call(null,cljs.core.chunk_rest.call(null,s__7593__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7595),null);
}
} else {
var node = cljs.core.first.call(null,s__7593__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__7592.call(null,cljs.core.rest.call(null,s__7593__$2)));
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
var args7597 = [];
var len__6046__auto___7600 = arguments.length;
var i__6047__auto___7601 = (0);
while(true){
if((i__6047__auto___7601 < len__6046__auto___7600)){
args7597.push((arguments[i__6047__auto___7601]));

var G__7602 = (i__6047__auto___7601 + (1));
i__6047__auto___7601 = G__7602;
continue;
} else {
}
break;
}

var G__7599 = args7597.length;
switch (G__7599) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7597.length)].join('')));

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
var args7604 = [];
var len__6046__auto___7607 = arguments.length;
var i__6047__auto___7608 = (0);
while(true){
if((i__6047__auto___7608 < len__6046__auto___7607)){
args7604.push((arguments[i__6047__auto___7608]));

var G__7609 = (i__6047__auto___7608 + (1));
i__6047__auto___7608 = G__7609;
continue;
} else {
}
break;
}

var G__7606 = args7604.length;
switch (G__7606) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7604.length)].join('')));

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
var args7611 = [];
var len__6046__auto___7614 = arguments.length;
var i__6047__auto___7615 = (0);
while(true){
if((i__6047__auto___7615 < len__6046__auto___7614)){
args7611.push((arguments[i__6047__auto___7615]));

var G__7616 = (i__6047__auto___7615 + (1));
i__6047__auto___7615 = G__7616;
continue;
} else {
}
break;
}

var G__7613 = args7611.length;
switch (G__7613) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7611.length)].join('')));

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
var args7618 = [];
var len__6046__auto___7621 = arguments.length;
var i__6047__auto___7622 = (0);
while(true){
if((i__6047__auto___7622 < len__6046__auto___7621)){
args7618.push((arguments[i__6047__auto___7622]));

var G__7623 = (i__6047__auto___7622 + (1));
i__6047__auto___7622 = G__7623;
continue;
} else {
}
break;
}

var G__7620 = args7618.length;
switch (G__7620) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7618.length)].join('')));

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
var args7625 = [];
var len__6046__auto___7636 = arguments.length;
var i__6047__auto___7637 = (0);
while(true){
if((i__6047__auto___7637 < len__6046__auto___7636)){
args7625.push((arguments[i__6047__auto___7637]));

var G__7638 = (i__6047__auto___7637 + (1));
i__6047__auto___7637 = G__7638;
continue;
} else {
}
break;
}

var G__7627 = args7625.length;
switch (G__7627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7625.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__7628 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7629 = null;
var count__7630 = (0);
var i__7631 = (0);
while(true){
if((i__7631 < count__7630)){
var node = cljs.core._nth.call(null,chunk__7629,i__7631);
goog.events.removeAll(node);

var G__7640 = seq__7628;
var G__7641 = chunk__7629;
var G__7642 = count__7630;
var G__7643 = (i__7631 + (1));
seq__7628 = G__7640;
chunk__7629 = G__7641;
count__7630 = G__7642;
i__7631 = G__7643;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7628);
if(temp__4425__auto__){
var seq__7628__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7628__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7628__$1);
var G__7644 = cljs.core.chunk_rest.call(null,seq__7628__$1);
var G__7645 = c__5791__auto__;
var G__7646 = cljs.core.count.call(null,c__5791__auto__);
var G__7647 = (0);
seq__7628 = G__7644;
chunk__7629 = G__7645;
count__7630 = G__7646;
i__7631 = G__7647;
continue;
} else {
var node = cljs.core.first.call(null,seq__7628__$1);
goog.events.removeAll(node);

var G__7648 = cljs.core.next.call(null,seq__7628__$1);
var G__7649 = null;
var G__7650 = (0);
var G__7651 = (0);
seq__7628 = G__7648;
chunk__7629 = G__7649;
count__7630 = G__7650;
i__7631 = G__7651;
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
var seq__7632 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7633 = null;
var count__7634 = (0);
var i__7635 = (0);
while(true){
if((i__7635 < count__7634)){
var node = cljs.core._nth.call(null,chunk__7633,i__7635);
goog.events.removeAll(node,type__$1);

var G__7652 = seq__7632;
var G__7653 = chunk__7633;
var G__7654 = count__7634;
var G__7655 = (i__7635 + (1));
seq__7632 = G__7652;
chunk__7633 = G__7653;
count__7634 = G__7654;
i__7635 = G__7655;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7632);
if(temp__4425__auto__){
var seq__7632__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7632__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7632__$1);
var G__7656 = cljs.core.chunk_rest.call(null,seq__7632__$1);
var G__7657 = c__5791__auto__;
var G__7658 = cljs.core.count.call(null,c__5791__auto__);
var G__7659 = (0);
seq__7632 = G__7656;
chunk__7633 = G__7657;
count__7634 = G__7658;
i__7635 = G__7659;
continue;
} else {
var node = cljs.core.first.call(null,seq__7632__$1);
goog.events.removeAll(node,type__$1);

var G__7660 = cljs.core.next.call(null,seq__7632__$1);
var G__7661 = null;
var G__7662 = (0);
var G__7663 = (0);
seq__7632 = G__7660;
chunk__7633 = G__7661;
count__7634 = G__7662;
i__7635 = G__7663;
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
var args7664 = [];
var len__6046__auto___7667 = arguments.length;
var i__6047__auto___7668 = (0);
while(true){
if((i__6047__auto___7668 < len__6046__auto___7667)){
args7664.push((arguments[i__6047__auto___7668]));

var G__7669 = (i__6047__auto___7668 + (1));
i__6047__auto___7668 = G__7669;
continue;
} else {
}
break;
}

var G__7666 = args7664.length;
switch (G__7666) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7664.length)].join('')));

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
var G__7671 = parent;
var G__7672 = cljs.core.cons.call(null,parent,so_far);
n = G__7671;
so_far = G__7672;
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
var seq__7681_7689 = cljs.core.seq.call(null,ancestors);
var chunk__7682_7690 = null;
var count__7683_7691 = (0);
var i__7684_7692 = (0);
while(true){
if((i__7684_7692 < count__7683_7691)){
var n_7693 = cljs.core._nth.call(null,chunk__7682_7690,i__7684_7692);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7693;

goog.events.fireListeners(n_7693,evt.type,true,evt);
}

var G__7694 = seq__7681_7689;
var G__7695 = chunk__7682_7690;
var G__7696 = count__7683_7691;
var G__7697 = (i__7684_7692 + (1));
seq__7681_7689 = G__7694;
chunk__7682_7690 = G__7695;
count__7683_7691 = G__7696;
i__7684_7692 = G__7697;
continue;
} else {
var temp__4425__auto___7698 = cljs.core.seq.call(null,seq__7681_7689);
if(temp__4425__auto___7698){
var seq__7681_7699__$1 = temp__4425__auto___7698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7681_7699__$1)){
var c__5791__auto___7700 = cljs.core.chunk_first.call(null,seq__7681_7699__$1);
var G__7701 = cljs.core.chunk_rest.call(null,seq__7681_7699__$1);
var G__7702 = c__5791__auto___7700;
var G__7703 = cljs.core.count.call(null,c__5791__auto___7700);
var G__7704 = (0);
seq__7681_7689 = G__7701;
chunk__7682_7690 = G__7702;
count__7683_7691 = G__7703;
i__7684_7692 = G__7704;
continue;
} else {
var n_7705 = cljs.core.first.call(null,seq__7681_7699__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7705;

goog.events.fireListeners(n_7705,evt.type,true,evt);
}

var G__7706 = cljs.core.next.call(null,seq__7681_7699__$1);
var G__7707 = null;
var G__7708 = (0);
var G__7709 = (0);
seq__7681_7689 = G__7706;
chunk__7682_7690 = G__7707;
count__7683_7691 = G__7708;
i__7684_7692 = G__7709;
continue;
}
} else {
}
}
break;
}

var seq__7685_7710 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__7686_7711 = null;
var count__7687_7712 = (0);
var i__7688_7713 = (0);
while(true){
if((i__7688_7713 < count__7687_7712)){
var n_7714 = cljs.core._nth.call(null,chunk__7686_7711,i__7688_7713);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7714;

goog.events.fireListeners(n_7714,evt.type,false,evt);
}

var G__7715 = seq__7685_7710;
var G__7716 = chunk__7686_7711;
var G__7717 = count__7687_7712;
var G__7718 = (i__7688_7713 + (1));
seq__7685_7710 = G__7715;
chunk__7686_7711 = G__7716;
count__7687_7712 = G__7717;
i__7688_7713 = G__7718;
continue;
} else {
var temp__4425__auto___7719 = cljs.core.seq.call(null,seq__7685_7710);
if(temp__4425__auto___7719){
var seq__7685_7720__$1 = temp__4425__auto___7719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7685_7720__$1)){
var c__5791__auto___7721 = cljs.core.chunk_first.call(null,seq__7685_7720__$1);
var G__7722 = cljs.core.chunk_rest.call(null,seq__7685_7720__$1);
var G__7723 = c__5791__auto___7721;
var G__7724 = cljs.core.count.call(null,c__5791__auto___7721);
var G__7725 = (0);
seq__7685_7710 = G__7722;
chunk__7686_7711 = G__7723;
count__7687_7712 = G__7724;
i__7688_7713 = G__7725;
continue;
} else {
var n_7726 = cljs.core.first.call(null,seq__7685_7720__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7726;

goog.events.fireListeners(n_7726,evt.type,false,evt);
}

var G__7727 = cljs.core.next.call(null,seq__7685_7720__$1);
var G__7728 = null;
var G__7729 = (0);
var G__7730 = (0);
seq__7685_7710 = G__7727;
chunk__7686_7711 = G__7728;
count__7687_7712 = G__7729;
i__7688_7713 = G__7730;
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
var args7731 = [];
var len__6046__auto___7740 = arguments.length;
var i__6047__auto___7741 = (0);
while(true){
if((i__6047__auto___7741 < len__6046__auto___7740)){
args7731.push((arguments[i__6047__auto___7741]));

var G__7742 = (i__6047__auto___7741 + (1));
i__6047__auto___7741 = G__7742;
continue;
} else {
}
break;
}

var G__7733 = args7731.length;
switch (G__7733) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7731.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__7734_7744 = cljs.core.seq.call(null,evt_map);
var chunk__7735_7745 = null;
var count__7736_7746 = (0);
var i__7737_7747 = (0);
while(true){
if((i__7737_7747 < count__7736_7746)){
var vec__7738_7748 = cljs.core._nth.call(null,chunk__7735_7745,i__7737_7747);
var k_7749 = cljs.core.nth.call(null,vec__7738_7748,(0),null);
var v_7750 = cljs.core.nth.call(null,vec__7738_7748,(1),null);
(evt[k_7749] = v_7750);

var G__7751 = seq__7734_7744;
var G__7752 = chunk__7735_7745;
var G__7753 = count__7736_7746;
var G__7754 = (i__7737_7747 + (1));
seq__7734_7744 = G__7751;
chunk__7735_7745 = G__7752;
count__7736_7746 = G__7753;
i__7737_7747 = G__7754;
continue;
} else {
var temp__4425__auto___7755 = cljs.core.seq.call(null,seq__7734_7744);
if(temp__4425__auto___7755){
var seq__7734_7756__$1 = temp__4425__auto___7755;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7734_7756__$1)){
var c__5791__auto___7757 = cljs.core.chunk_first.call(null,seq__7734_7756__$1);
var G__7758 = cljs.core.chunk_rest.call(null,seq__7734_7756__$1);
var G__7759 = c__5791__auto___7757;
var G__7760 = cljs.core.count.call(null,c__5791__auto___7757);
var G__7761 = (0);
seq__7734_7744 = G__7758;
chunk__7735_7745 = G__7759;
count__7736_7746 = G__7760;
i__7737_7747 = G__7761;
continue;
} else {
var vec__7739_7762 = cljs.core.first.call(null,seq__7734_7756__$1);
var k_7763 = cljs.core.nth.call(null,vec__7739_7762,(0),null);
var v_7764 = cljs.core.nth.call(null,vec__7739_7762,(1),null);
(evt[k_7763] = v_7764);

var G__7765 = cljs.core.next.call(null,seq__7734_7756__$1);
var G__7766 = null;
var G__7767 = (0);
var G__7768 = (0);
seq__7734_7744 = G__7765;
chunk__7735_7745 = G__7766;
count__7736_7746 = G__7767;
i__7737_7747 = G__7768;
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
return (function (p1__7769_SHARP_){
return goog.events.getListeners(p1__7769_SHARP_,type__$1,false);
});})(type__$1))
,domina.core.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map
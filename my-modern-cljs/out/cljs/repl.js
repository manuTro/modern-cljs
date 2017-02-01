// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8538_8552 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8539_8553 = null;
var count__8540_8554 = (0);
var i__8541_8555 = (0);
while(true){
if((i__8541_8555 < count__8540_8554)){
var f_8556 = cljs.core._nth.call(null,chunk__8539_8553,i__8541_8555);
cljs.core.println.call(null,"  ",f_8556);

var G__8557 = seq__8538_8552;
var G__8558 = chunk__8539_8553;
var G__8559 = count__8540_8554;
var G__8560 = (i__8541_8555 + (1));
seq__8538_8552 = G__8557;
chunk__8539_8553 = G__8558;
count__8540_8554 = G__8559;
i__8541_8555 = G__8560;
continue;
} else {
var temp__4425__auto___8561 = cljs.core.seq.call(null,seq__8538_8552);
if(temp__4425__auto___8561){
var seq__8538_8562__$1 = temp__4425__auto___8561;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8538_8562__$1)){
var c__8185__auto___8563 = cljs.core.chunk_first.call(null,seq__8538_8562__$1);
var G__8564 = cljs.core.chunk_rest.call(null,seq__8538_8562__$1);
var G__8565 = c__8185__auto___8563;
var G__8566 = cljs.core.count.call(null,c__8185__auto___8563);
var G__8567 = (0);
seq__8538_8552 = G__8564;
chunk__8539_8553 = G__8565;
count__8540_8554 = G__8566;
i__8541_8555 = G__8567;
continue;
} else {
var f_8568 = cljs.core.first.call(null,seq__8538_8562__$1);
cljs.core.println.call(null,"  ",f_8568);

var G__8569 = cljs.core.next.call(null,seq__8538_8562__$1);
var G__8570 = null;
var G__8571 = (0);
var G__8572 = (0);
seq__8538_8552 = G__8569;
chunk__8539_8553 = G__8570;
count__8540_8554 = G__8571;
i__8541_8555 = G__8572;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8573 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7382__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7382__auto__)){
return or__7382__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8573);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8573)))?cljs.core.second.call(null,arglists_8573):arglists_8573));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8542 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8543 = null;
var count__8544 = (0);
var i__8545 = (0);
while(true){
if((i__8545 < count__8544)){
var vec__8546 = cljs.core._nth.call(null,chunk__8543,i__8545);
var name = cljs.core.nth.call(null,vec__8546,(0),null);
var map__8547 = cljs.core.nth.call(null,vec__8546,(1),null);
var map__8547__$1 = ((((!((map__8547 == null)))?((((map__8547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8547):map__8547);
var doc = cljs.core.get.call(null,map__8547__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8547__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8574 = seq__8542;
var G__8575 = chunk__8543;
var G__8576 = count__8544;
var G__8577 = (i__8545 + (1));
seq__8542 = G__8574;
chunk__8543 = G__8575;
count__8544 = G__8576;
i__8545 = G__8577;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8542);
if(temp__4425__auto__){
var seq__8542__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8542__$1)){
var c__8185__auto__ = cljs.core.chunk_first.call(null,seq__8542__$1);
var G__8578 = cljs.core.chunk_rest.call(null,seq__8542__$1);
var G__8579 = c__8185__auto__;
var G__8580 = cljs.core.count.call(null,c__8185__auto__);
var G__8581 = (0);
seq__8542 = G__8578;
chunk__8543 = G__8579;
count__8544 = G__8580;
i__8545 = G__8581;
continue;
} else {
var vec__8549 = cljs.core.first.call(null,seq__8542__$1);
var name = cljs.core.nth.call(null,vec__8549,(0),null);
var map__8550 = cljs.core.nth.call(null,vec__8549,(1),null);
var map__8550__$1 = ((((!((map__8550 == null)))?((((map__8550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8550):map__8550);
var doc = cljs.core.get.call(null,map__8550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8582 = cljs.core.next.call(null,seq__8542__$1);
var G__8583 = null;
var G__8584 = (0);
var G__8585 = (0);
seq__8542 = G__8582;
chunk__8543 = G__8583;
count__8544 = G__8584;
i__8545 = G__8585;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
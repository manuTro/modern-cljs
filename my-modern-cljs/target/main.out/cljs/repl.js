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
var seq__9674_9688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9675_9689 = null;
var count__9676_9690 = (0);
var i__9677_9691 = (0);
while(true){
if((i__9677_9691 < count__9676_9690)){
var f_9692 = cljs.core._nth.call(null,chunk__9675_9689,i__9677_9691);
cljs.core.println.call(null,"  ",f_9692);

var G__9693 = seq__9674_9688;
var G__9694 = chunk__9675_9689;
var G__9695 = count__9676_9690;
var G__9696 = (i__9677_9691 + (1));
seq__9674_9688 = G__9693;
chunk__9675_9689 = G__9694;
count__9676_9690 = G__9695;
i__9677_9691 = G__9696;
continue;
} else {
var temp__4425__auto___9697 = cljs.core.seq.call(null,seq__9674_9688);
if(temp__4425__auto___9697){
var seq__9674_9698__$1 = temp__4425__auto___9697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9674_9698__$1)){
var c__5792__auto___9699 = cljs.core.chunk_first.call(null,seq__9674_9698__$1);
var G__9700 = cljs.core.chunk_rest.call(null,seq__9674_9698__$1);
var G__9701 = c__5792__auto___9699;
var G__9702 = cljs.core.count.call(null,c__5792__auto___9699);
var G__9703 = (0);
seq__9674_9688 = G__9700;
chunk__9675_9689 = G__9701;
count__9676_9690 = G__9702;
i__9677_9691 = G__9703;
continue;
} else {
var f_9704 = cljs.core.first.call(null,seq__9674_9698__$1);
cljs.core.println.call(null,"  ",f_9704);

var G__9705 = cljs.core.next.call(null,seq__9674_9698__$1);
var G__9706 = null;
var G__9707 = (0);
var G__9708 = (0);
seq__9674_9688 = G__9705;
chunk__9675_9689 = G__9706;
count__9676_9690 = G__9707;
i__9677_9691 = G__9708;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9709 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9709);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9709)))?cljs.core.second.call(null,arglists_9709):arglists_9709));
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
var seq__9678 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9679 = null;
var count__9680 = (0);
var i__9681 = (0);
while(true){
if((i__9681 < count__9680)){
var vec__9682 = cljs.core._nth.call(null,chunk__9679,i__9681);
var name = cljs.core.nth.call(null,vec__9682,(0),null);
var map__9683 = cljs.core.nth.call(null,vec__9682,(1),null);
var map__9683__$1 = ((((!((map__9683 == null)))?((((map__9683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9683):map__9683);
var doc = cljs.core.get.call(null,map__9683__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9683__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9710 = seq__9678;
var G__9711 = chunk__9679;
var G__9712 = count__9680;
var G__9713 = (i__9681 + (1));
seq__9678 = G__9710;
chunk__9679 = G__9711;
count__9680 = G__9712;
i__9681 = G__9713;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9678);
if(temp__4425__auto__){
var seq__9678__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9678__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__9678__$1);
var G__9714 = cljs.core.chunk_rest.call(null,seq__9678__$1);
var G__9715 = c__5792__auto__;
var G__9716 = cljs.core.count.call(null,c__5792__auto__);
var G__9717 = (0);
seq__9678 = G__9714;
chunk__9679 = G__9715;
count__9680 = G__9716;
i__9681 = G__9717;
continue;
} else {
var vec__9685 = cljs.core.first.call(null,seq__9678__$1);
var name = cljs.core.nth.call(null,vec__9685,(0),null);
var map__9686 = cljs.core.nth.call(null,vec__9685,(1),null);
var map__9686__$1 = ((((!((map__9686 == null)))?((((map__9686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9686):map__9686);
var doc = cljs.core.get.call(null,map__9686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9718 = cljs.core.next.call(null,seq__9678__$1);
var G__9719 = null;
var G__9720 = (0);
var G__9721 = (0);
seq__9678 = G__9718;
chunk__9679 = G__9719;
count__9680 = G__9720;
i__9681 = G__9721;
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
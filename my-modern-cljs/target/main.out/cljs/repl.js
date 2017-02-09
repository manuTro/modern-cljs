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
var seq__8668_8682 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8669_8683 = null;
var count__8670_8684 = (0);
var i__8671_8685 = (0);
while(true){
if((i__8671_8685 < count__8670_8684)){
var f_8686 = cljs.core._nth.call(null,chunk__8669_8683,i__8671_8685);
cljs.core.println.call(null,"  ",f_8686);

var G__8687 = seq__8668_8682;
var G__8688 = chunk__8669_8683;
var G__8689 = count__8670_8684;
var G__8690 = (i__8671_8685 + (1));
seq__8668_8682 = G__8687;
chunk__8669_8683 = G__8688;
count__8670_8684 = G__8689;
i__8671_8685 = G__8690;
continue;
} else {
var temp__4425__auto___8691 = cljs.core.seq.call(null,seq__8668_8682);
if(temp__4425__auto___8691){
var seq__8668_8692__$1 = temp__4425__auto___8691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8668_8692__$1)){
var c__5791__auto___8693 = cljs.core.chunk_first.call(null,seq__8668_8692__$1);
var G__8694 = cljs.core.chunk_rest.call(null,seq__8668_8692__$1);
var G__8695 = c__5791__auto___8693;
var G__8696 = cljs.core.count.call(null,c__5791__auto___8693);
var G__8697 = (0);
seq__8668_8682 = G__8694;
chunk__8669_8683 = G__8695;
count__8670_8684 = G__8696;
i__8671_8685 = G__8697;
continue;
} else {
var f_8698 = cljs.core.first.call(null,seq__8668_8692__$1);
cljs.core.println.call(null,"  ",f_8698);

var G__8699 = cljs.core.next.call(null,seq__8668_8692__$1);
var G__8700 = null;
var G__8701 = (0);
var G__8702 = (0);
seq__8668_8682 = G__8699;
chunk__8669_8683 = G__8700;
count__8670_8684 = G__8701;
i__8671_8685 = G__8702;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8703 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8703);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8703)))?cljs.core.second.call(null,arglists_8703):arglists_8703));
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
var seq__8672 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8673 = null;
var count__8674 = (0);
var i__8675 = (0);
while(true){
if((i__8675 < count__8674)){
var vec__8676 = cljs.core._nth.call(null,chunk__8673,i__8675);
var name = cljs.core.nth.call(null,vec__8676,(0),null);
var map__8677 = cljs.core.nth.call(null,vec__8676,(1),null);
var map__8677__$1 = ((((!((map__8677 == null)))?((((map__8677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8677):map__8677);
var doc = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8677__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8704 = seq__8672;
var G__8705 = chunk__8673;
var G__8706 = count__8674;
var G__8707 = (i__8675 + (1));
seq__8672 = G__8704;
chunk__8673 = G__8705;
count__8674 = G__8706;
i__8675 = G__8707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8672);
if(temp__4425__auto__){
var seq__8672__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8672__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__8672__$1);
var G__8708 = cljs.core.chunk_rest.call(null,seq__8672__$1);
var G__8709 = c__5791__auto__;
var G__8710 = cljs.core.count.call(null,c__5791__auto__);
var G__8711 = (0);
seq__8672 = G__8708;
chunk__8673 = G__8709;
count__8674 = G__8710;
i__8675 = G__8711;
continue;
} else {
var vec__8679 = cljs.core.first.call(null,seq__8672__$1);
var name = cljs.core.nth.call(null,vec__8679,(0),null);
var map__8680 = cljs.core.nth.call(null,vec__8679,(1),null);
var map__8680__$1 = ((((!((map__8680 == null)))?((((map__8680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8680):map__8680);
var doc = cljs.core.get.call(null,map__8680__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8680__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8712 = cljs.core.next.call(null,seq__8672__$1);
var G__8713 = null;
var G__8714 = (0);
var G__8715 = (0);
seq__8672 = G__8712;
chunk__8673 = G__8713;
count__8674 = G__8714;
i__8675 = G__8715;
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
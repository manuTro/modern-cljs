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
var seq__9797_9811 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9798_9812 = null;
var count__9799_9813 = (0);
var i__9800_9814 = (0);
while(true){
if((i__9800_9814 < count__9799_9813)){
var f_9815 = cljs.core._nth.call(null,chunk__9798_9812,i__9800_9814);
cljs.core.println.call(null,"  ",f_9815);

var G__9816 = seq__9797_9811;
var G__9817 = chunk__9798_9812;
var G__9818 = count__9799_9813;
var G__9819 = (i__9800_9814 + (1));
seq__9797_9811 = G__9816;
chunk__9798_9812 = G__9817;
count__9799_9813 = G__9818;
i__9800_9814 = G__9819;
continue;
} else {
var temp__4425__auto___9820 = cljs.core.seq.call(null,seq__9797_9811);
if(temp__4425__auto___9820){
var seq__9797_9821__$1 = temp__4425__auto___9820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9797_9821__$1)){
var c__5791__auto___9822 = cljs.core.chunk_first.call(null,seq__9797_9821__$1);
var G__9823 = cljs.core.chunk_rest.call(null,seq__9797_9821__$1);
var G__9824 = c__5791__auto___9822;
var G__9825 = cljs.core.count.call(null,c__5791__auto___9822);
var G__9826 = (0);
seq__9797_9811 = G__9823;
chunk__9798_9812 = G__9824;
count__9799_9813 = G__9825;
i__9800_9814 = G__9826;
continue;
} else {
var f_9827 = cljs.core.first.call(null,seq__9797_9821__$1);
cljs.core.println.call(null,"  ",f_9827);

var G__9828 = cljs.core.next.call(null,seq__9797_9821__$1);
var G__9829 = null;
var G__9830 = (0);
var G__9831 = (0);
seq__9797_9811 = G__9828;
chunk__9798_9812 = G__9829;
count__9799_9813 = G__9830;
i__9800_9814 = G__9831;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9832 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4988__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9832);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9832)))?cljs.core.second.call(null,arglists_9832):arglists_9832));
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
var seq__9801 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9802 = null;
var count__9803 = (0);
var i__9804 = (0);
while(true){
if((i__9804 < count__9803)){
var vec__9805 = cljs.core._nth.call(null,chunk__9802,i__9804);
var name = cljs.core.nth.call(null,vec__9805,(0),null);
var map__9806 = cljs.core.nth.call(null,vec__9805,(1),null);
var map__9806__$1 = ((((!((map__9806 == null)))?((((map__9806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9806):map__9806);
var doc = cljs.core.get.call(null,map__9806__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9806__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9833 = seq__9801;
var G__9834 = chunk__9802;
var G__9835 = count__9803;
var G__9836 = (i__9804 + (1));
seq__9801 = G__9833;
chunk__9802 = G__9834;
count__9803 = G__9835;
i__9804 = G__9836;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9801);
if(temp__4425__auto__){
var seq__9801__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9801__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__9801__$1);
var G__9837 = cljs.core.chunk_rest.call(null,seq__9801__$1);
var G__9838 = c__5791__auto__;
var G__9839 = cljs.core.count.call(null,c__5791__auto__);
var G__9840 = (0);
seq__9801 = G__9837;
chunk__9802 = G__9838;
count__9803 = G__9839;
i__9804 = G__9840;
continue;
} else {
var vec__9808 = cljs.core.first.call(null,seq__9801__$1);
var name = cljs.core.nth.call(null,vec__9808,(0),null);
var map__9809 = cljs.core.nth.call(null,vec__9808,(1),null);
var map__9809__$1 = ((((!((map__9809 == null)))?((((map__9809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9809):map__9809);
var doc = cljs.core.get.call(null,map__9809__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9809__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9841 = cljs.core.next.call(null,seq__9801__$1);
var G__9842 = null;
var G__9843 = (0);
var G__9844 = (0);
seq__9801 = G__9841;
chunk__9802 = G__9842;
count__9803 = G__9843;
i__9804 = G__9844;
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
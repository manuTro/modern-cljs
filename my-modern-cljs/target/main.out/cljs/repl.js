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
var seq__9761_9775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9762_9776 = null;
var count__9763_9777 = (0);
var i__9764_9778 = (0);
while(true){
if((i__9764_9778 < count__9763_9777)){
var f_9779 = cljs.core._nth.call(null,chunk__9762_9776,i__9764_9778);
cljs.core.println.call(null,"  ",f_9779);

var G__9780 = seq__9761_9775;
var G__9781 = chunk__9762_9776;
var G__9782 = count__9763_9777;
var G__9783 = (i__9764_9778 + (1));
seq__9761_9775 = G__9780;
chunk__9762_9776 = G__9781;
count__9763_9777 = G__9782;
i__9764_9778 = G__9783;
continue;
} else {
var temp__4425__auto___9784 = cljs.core.seq.call(null,seq__9761_9775);
if(temp__4425__auto___9784){
var seq__9761_9785__$1 = temp__4425__auto___9784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9761_9785__$1)){
var c__5792__auto___9786 = cljs.core.chunk_first.call(null,seq__9761_9785__$1);
var G__9787 = cljs.core.chunk_rest.call(null,seq__9761_9785__$1);
var G__9788 = c__5792__auto___9786;
var G__9789 = cljs.core.count.call(null,c__5792__auto___9786);
var G__9790 = (0);
seq__9761_9775 = G__9787;
chunk__9762_9776 = G__9788;
count__9763_9777 = G__9789;
i__9764_9778 = G__9790;
continue;
} else {
var f_9791 = cljs.core.first.call(null,seq__9761_9785__$1);
cljs.core.println.call(null,"  ",f_9791);

var G__9792 = cljs.core.next.call(null,seq__9761_9785__$1);
var G__9793 = null;
var G__9794 = (0);
var G__9795 = (0);
seq__9761_9775 = G__9792;
chunk__9762_9776 = G__9793;
count__9763_9777 = G__9794;
i__9764_9778 = G__9795;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9796 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9796);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9796)))?cljs.core.second.call(null,arglists_9796):arglists_9796));
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
var seq__9765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9766 = null;
var count__9767 = (0);
var i__9768 = (0);
while(true){
if((i__9768 < count__9767)){
var vec__9769 = cljs.core._nth.call(null,chunk__9766,i__9768);
var name = cljs.core.nth.call(null,vec__9769,(0),null);
var map__9770 = cljs.core.nth.call(null,vec__9769,(1),null);
var map__9770__$1 = ((((!((map__9770 == null)))?((((map__9770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9770):map__9770);
var doc = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9797 = seq__9765;
var G__9798 = chunk__9766;
var G__9799 = count__9767;
var G__9800 = (i__9768 + (1));
seq__9765 = G__9797;
chunk__9766 = G__9798;
count__9767 = G__9799;
i__9768 = G__9800;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9765);
if(temp__4425__auto__){
var seq__9765__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9765__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__9765__$1);
var G__9801 = cljs.core.chunk_rest.call(null,seq__9765__$1);
var G__9802 = c__5792__auto__;
var G__9803 = cljs.core.count.call(null,c__5792__auto__);
var G__9804 = (0);
seq__9765 = G__9801;
chunk__9766 = G__9802;
count__9767 = G__9803;
i__9768 = G__9804;
continue;
} else {
var vec__9772 = cljs.core.first.call(null,seq__9765__$1);
var name = cljs.core.nth.call(null,vec__9772,(0),null);
var map__9773 = cljs.core.nth.call(null,vec__9772,(1),null);
var map__9773__$1 = ((((!((map__9773 == null)))?((((map__9773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9773):map__9773);
var doc = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9773__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9805 = cljs.core.next.call(null,seq__9765__$1);
var G__9806 = null;
var G__9807 = (0);
var G__9808 = (0);
seq__9765 = G__9805;
chunk__9766 = G__9806;
count__9767 = G__9807;
i__9768 = G__9808;
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
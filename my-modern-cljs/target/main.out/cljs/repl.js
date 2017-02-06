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
var seq__9765_9779 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9766_9780 = null;
var count__9767_9781 = (0);
var i__9768_9782 = (0);
while(true){
if((i__9768_9782 < count__9767_9781)){
var f_9783 = cljs.core._nth.call(null,chunk__9766_9780,i__9768_9782);
cljs.core.println.call(null,"  ",f_9783);

var G__9784 = seq__9765_9779;
var G__9785 = chunk__9766_9780;
var G__9786 = count__9767_9781;
var G__9787 = (i__9768_9782 + (1));
seq__9765_9779 = G__9784;
chunk__9766_9780 = G__9785;
count__9767_9781 = G__9786;
i__9768_9782 = G__9787;
continue;
} else {
var temp__4425__auto___9788 = cljs.core.seq.call(null,seq__9765_9779);
if(temp__4425__auto___9788){
var seq__9765_9789__$1 = temp__4425__auto___9788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9765_9789__$1)){
var c__5792__auto___9790 = cljs.core.chunk_first.call(null,seq__9765_9789__$1);
var G__9791 = cljs.core.chunk_rest.call(null,seq__9765_9789__$1);
var G__9792 = c__5792__auto___9790;
var G__9793 = cljs.core.count.call(null,c__5792__auto___9790);
var G__9794 = (0);
seq__9765_9779 = G__9791;
chunk__9766_9780 = G__9792;
count__9767_9781 = G__9793;
i__9768_9782 = G__9794;
continue;
} else {
var f_9795 = cljs.core.first.call(null,seq__9765_9789__$1);
cljs.core.println.call(null,"  ",f_9795);

var G__9796 = cljs.core.next.call(null,seq__9765_9789__$1);
var G__9797 = null;
var G__9798 = (0);
var G__9799 = (0);
seq__9765_9779 = G__9796;
chunk__9766_9780 = G__9797;
count__9767_9781 = G__9798;
i__9768_9782 = G__9799;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9800 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9800);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9800)))?cljs.core.second.call(null,arglists_9800):arglists_9800));
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
var seq__9769 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9770 = null;
var count__9771 = (0);
var i__9772 = (0);
while(true){
if((i__9772 < count__9771)){
var vec__9773 = cljs.core._nth.call(null,chunk__9770,i__9772);
var name = cljs.core.nth.call(null,vec__9773,(0),null);
var map__9774 = cljs.core.nth.call(null,vec__9773,(1),null);
var map__9774__$1 = ((((!((map__9774 == null)))?((((map__9774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9774):map__9774);
var doc = cljs.core.get.call(null,map__9774__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9774__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9801 = seq__9769;
var G__9802 = chunk__9770;
var G__9803 = count__9771;
var G__9804 = (i__9772 + (1));
seq__9769 = G__9801;
chunk__9770 = G__9802;
count__9771 = G__9803;
i__9772 = G__9804;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9769);
if(temp__4425__auto__){
var seq__9769__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9769__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__9769__$1);
var G__9805 = cljs.core.chunk_rest.call(null,seq__9769__$1);
var G__9806 = c__5792__auto__;
var G__9807 = cljs.core.count.call(null,c__5792__auto__);
var G__9808 = (0);
seq__9769 = G__9805;
chunk__9770 = G__9806;
count__9771 = G__9807;
i__9772 = G__9808;
continue;
} else {
var vec__9776 = cljs.core.first.call(null,seq__9769__$1);
var name = cljs.core.nth.call(null,vec__9776,(0),null);
var map__9777 = cljs.core.nth.call(null,vec__9776,(1),null);
var map__9777__$1 = ((((!((map__9777 == null)))?((((map__9777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9777):map__9777);
var doc = cljs.core.get.call(null,map__9777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9777__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9809 = cljs.core.next.call(null,seq__9769__$1);
var G__9810 = null;
var G__9811 = (0);
var G__9812 = (0);
seq__9769 = G__9809;
chunk__9770 = G__9810;
count__9771 = G__9811;
i__9772 = G__9812;
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
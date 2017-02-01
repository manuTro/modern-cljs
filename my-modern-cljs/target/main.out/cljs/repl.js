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
var seq__8041_8055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8042_8056 = null;
var count__8043_8057 = (0);
var i__8044_8058 = (0);
while(true){
if((i__8044_8058 < count__8043_8057)){
var f_8059 = cljs.core._nth.call(null,chunk__8042_8056,i__8044_8058);
cljs.core.println.call(null,"  ",f_8059);

var G__8060 = seq__8041_8055;
var G__8061 = chunk__8042_8056;
var G__8062 = count__8043_8057;
var G__8063 = (i__8044_8058 + (1));
seq__8041_8055 = G__8060;
chunk__8042_8056 = G__8061;
count__8043_8057 = G__8062;
i__8044_8058 = G__8063;
continue;
} else {
var temp__4425__auto___8064 = cljs.core.seq.call(null,seq__8041_8055);
if(temp__4425__auto___8064){
var seq__8041_8065__$1 = temp__4425__auto___8064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8041_8065__$1)){
var c__5792__auto___8066 = cljs.core.chunk_first.call(null,seq__8041_8065__$1);
var G__8067 = cljs.core.chunk_rest.call(null,seq__8041_8065__$1);
var G__8068 = c__5792__auto___8066;
var G__8069 = cljs.core.count.call(null,c__5792__auto___8066);
var G__8070 = (0);
seq__8041_8055 = G__8067;
chunk__8042_8056 = G__8068;
count__8043_8057 = G__8069;
i__8044_8058 = G__8070;
continue;
} else {
var f_8071 = cljs.core.first.call(null,seq__8041_8065__$1);
cljs.core.println.call(null,"  ",f_8071);

var G__8072 = cljs.core.next.call(null,seq__8041_8065__$1);
var G__8073 = null;
var G__8074 = (0);
var G__8075 = (0);
seq__8041_8055 = G__8072;
chunk__8042_8056 = G__8073;
count__8043_8057 = G__8074;
i__8044_8058 = G__8075;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8076 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8076);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8076)))?cljs.core.second.call(null,arglists_8076):arglists_8076));
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
var seq__8045 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8046 = null;
var count__8047 = (0);
var i__8048 = (0);
while(true){
if((i__8048 < count__8047)){
var vec__8049 = cljs.core._nth.call(null,chunk__8046,i__8048);
var name = cljs.core.nth.call(null,vec__8049,(0),null);
var map__8050 = cljs.core.nth.call(null,vec__8049,(1),null);
var map__8050__$1 = ((((!((map__8050 == null)))?((((map__8050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8050):map__8050);
var doc = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8050__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8077 = seq__8045;
var G__8078 = chunk__8046;
var G__8079 = count__8047;
var G__8080 = (i__8048 + (1));
seq__8045 = G__8077;
chunk__8046 = G__8078;
count__8047 = G__8079;
i__8048 = G__8080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8045);
if(temp__4425__auto__){
var seq__8045__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8045__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__8045__$1);
var G__8081 = cljs.core.chunk_rest.call(null,seq__8045__$1);
var G__8082 = c__5792__auto__;
var G__8083 = cljs.core.count.call(null,c__5792__auto__);
var G__8084 = (0);
seq__8045 = G__8081;
chunk__8046 = G__8082;
count__8047 = G__8083;
i__8048 = G__8084;
continue;
} else {
var vec__8052 = cljs.core.first.call(null,seq__8045__$1);
var name = cljs.core.nth.call(null,vec__8052,(0),null);
var map__8053 = cljs.core.nth.call(null,vec__8052,(1),null);
var map__8053__$1 = ((((!((map__8053 == null)))?((((map__8053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8053):map__8053);
var doc = cljs.core.get.call(null,map__8053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8085 = cljs.core.next.call(null,seq__8045__$1);
var G__8086 = null;
var G__8087 = (0);
var G__8088 = (0);
seq__8045 = G__8085;
chunk__8046 = G__8086;
count__8047 = G__8087;
i__8048 = G__8088;
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
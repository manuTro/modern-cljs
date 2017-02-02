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
var seq__8171_8185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8172_8186 = null;
var count__8173_8187 = (0);
var i__8174_8188 = (0);
while(true){
if((i__8174_8188 < count__8173_8187)){
var f_8189 = cljs.core._nth.call(null,chunk__8172_8186,i__8174_8188);
cljs.core.println.call(null,"  ",f_8189);

var G__8190 = seq__8171_8185;
var G__8191 = chunk__8172_8186;
var G__8192 = count__8173_8187;
var G__8193 = (i__8174_8188 + (1));
seq__8171_8185 = G__8190;
chunk__8172_8186 = G__8191;
count__8173_8187 = G__8192;
i__8174_8188 = G__8193;
continue;
} else {
var temp__4425__auto___8194 = cljs.core.seq.call(null,seq__8171_8185);
if(temp__4425__auto___8194){
var seq__8171_8195__$1 = temp__4425__auto___8194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8171_8195__$1)){
var c__5792__auto___8196 = cljs.core.chunk_first.call(null,seq__8171_8195__$1);
var G__8197 = cljs.core.chunk_rest.call(null,seq__8171_8195__$1);
var G__8198 = c__5792__auto___8196;
var G__8199 = cljs.core.count.call(null,c__5792__auto___8196);
var G__8200 = (0);
seq__8171_8185 = G__8197;
chunk__8172_8186 = G__8198;
count__8173_8187 = G__8199;
i__8174_8188 = G__8200;
continue;
} else {
var f_8201 = cljs.core.first.call(null,seq__8171_8195__$1);
cljs.core.println.call(null,"  ",f_8201);

var G__8202 = cljs.core.next.call(null,seq__8171_8195__$1);
var G__8203 = null;
var G__8204 = (0);
var G__8205 = (0);
seq__8171_8185 = G__8202;
chunk__8172_8186 = G__8203;
count__8173_8187 = G__8204;
i__8174_8188 = G__8205;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8206 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8206);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8206)))?cljs.core.second.call(null,arglists_8206):arglists_8206));
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
var seq__8175 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8176 = null;
var count__8177 = (0);
var i__8178 = (0);
while(true){
if((i__8178 < count__8177)){
var vec__8179 = cljs.core._nth.call(null,chunk__8176,i__8178);
var name = cljs.core.nth.call(null,vec__8179,(0),null);
var map__8180 = cljs.core.nth.call(null,vec__8179,(1),null);
var map__8180__$1 = ((((!((map__8180 == null)))?((((map__8180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8180):map__8180);
var doc = cljs.core.get.call(null,map__8180__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8180__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8207 = seq__8175;
var G__8208 = chunk__8176;
var G__8209 = count__8177;
var G__8210 = (i__8178 + (1));
seq__8175 = G__8207;
chunk__8176 = G__8208;
count__8177 = G__8209;
i__8178 = G__8210;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8175);
if(temp__4425__auto__){
var seq__8175__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8175__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__8175__$1);
var G__8211 = cljs.core.chunk_rest.call(null,seq__8175__$1);
var G__8212 = c__5792__auto__;
var G__8213 = cljs.core.count.call(null,c__5792__auto__);
var G__8214 = (0);
seq__8175 = G__8211;
chunk__8176 = G__8212;
count__8177 = G__8213;
i__8178 = G__8214;
continue;
} else {
var vec__8182 = cljs.core.first.call(null,seq__8175__$1);
var name = cljs.core.nth.call(null,vec__8182,(0),null);
var map__8183 = cljs.core.nth.call(null,vec__8182,(1),null);
var map__8183__$1 = ((((!((map__8183 == null)))?((((map__8183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8183):map__8183);
var doc = cljs.core.get.call(null,map__8183__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8183__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8215 = cljs.core.next.call(null,seq__8175__$1);
var G__8216 = null;
var G__8217 = (0);
var G__8218 = (0);
seq__8175 = G__8215;
chunk__8176 = G__8216;
count__8177 = G__8217;
i__8178 = G__8218;
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
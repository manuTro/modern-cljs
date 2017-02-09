// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.remotes.xhr');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('shoreleave.remotes.common');
shoreleave.remotes.xhr.xhr = (function shoreleave$remotes$xhr$xhr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___7566 = arguments.length;
var i__6047__auto___7567 = (0);
while(true){
if((i__6047__auto___7567 < len__6046__auto___7566)){
args__6053__auto__.push((arguments[i__6047__auto___7567]));

var G__7568 = (i__6047__auto___7567 + (1));
i__6047__auto___7567 = G__7568;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic = (function (route,opts){
var req = (new goog.net.XhrIo());
var vec__7563 = shoreleave.remotes.common.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__7563,(0),null);
var uri = cljs.core.nth.call(null,vec__7563,(1),null);
var map__7564 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__7564__$1 = ((((!((map__7564 == null)))?((((map__7564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7564):map__7564);
var on_success = cljs.core.get.call(null,map__7564__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__7564__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var content = cljs.core.get.call(null,map__7564__$1,new cljs.core.Keyword(null,"content","content",15833224));
var headers = cljs.core.get.call(null,map__7564__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var content__$1 = shoreleave.remotes.common.csrf_protected.call(null,content,method);
var data = shoreleave.remotes.common.__GT_data_str.call(null,content__$1);
var suc_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,on_success);
var err_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,(function (){var or__4988__auto__ = on_error;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return ((function (or__4988__auto__,req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback){
return (function (p1__7560_SHARP_){
return console.log([cljs.core.str("XHR ERROR: "),cljs.core.str(p1__7560_SHARP_)].join(''));
});
;})(or__4988__auto__,req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback))
}
})());
if(cljs.core.truth_(suc_callback)){
goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-success","on-success",1786904109)),((function (req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return suc_callback.call(null,req);
});})(req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);

goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530)),((function (req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return err_callback.call(null,req);
});})(req,vec__7563,method,uri,map__7564,map__7564__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);
} else {
}

return req.send(uri,method,data,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null));
});

shoreleave.remotes.xhr.xhr.cljs$lang$maxFixedArity = (1);

shoreleave.remotes.xhr.xhr.cljs$lang$applyTo = (function (seq7561){
var G__7562 = cljs.core.first.call(null,seq7561);
var seq7561__$1 = cljs.core.next.call(null,seq7561);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic(G__7562,seq7561__$1);
});

//# sourceMappingURL=xhr.js.map
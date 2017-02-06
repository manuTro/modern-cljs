// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.remotes.xhr');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('shoreleave.remotes.common');
shoreleave.remotes.xhr.xhr = (function shoreleave$remotes$xhr$xhr(var_args){
var args__6054__auto__ = [];
var len__6047__auto___8490 = arguments.length;
var i__6048__auto___8491 = (0);
while(true){
if((i__6048__auto___8491 < len__6047__auto___8490)){
args__6054__auto__.push((arguments[i__6048__auto___8491]));

var G__8492 = (i__6048__auto___8491 + (1));
i__6048__auto___8491 = G__8492;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((1) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((1)),(0))):null);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6055__auto__);
});

shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic = (function (route,opts){
var req = (new goog.net.XhrIo());
var vec__8487 = shoreleave.remotes.common.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__8487,(0),null);
var uri = cljs.core.nth.call(null,vec__8487,(1),null);
var map__8488 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__8488__$1 = ((((!((map__8488 == null)))?((((map__8488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8488):map__8488);
var on_success = cljs.core.get.call(null,map__8488__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__8488__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var content = cljs.core.get.call(null,map__8488__$1,new cljs.core.Keyword(null,"content","content",15833224));
var headers = cljs.core.get.call(null,map__8488__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var content__$1 = shoreleave.remotes.common.csrf_protected.call(null,content,method);
var data = shoreleave.remotes.common.__GT_data_str.call(null,content__$1);
var suc_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,on_success);
var err_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,(function (){var or__4989__auto__ = on_error;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return ((function (or__4989__auto__,req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback){
return (function (p1__8484_SHARP_){
return console.log([cljs.core.str("XHR ERROR: "),cljs.core.str(p1__8484_SHARP_)].join(''));
});
;})(or__4989__auto__,req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback))
}
})());
if(cljs.core.truth_(suc_callback)){
goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-success","on-success",1786904109)),((function (req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return suc_callback.call(null,req);
});})(req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);

goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530)),((function (req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return err_callback.call(null,req);
});})(req,vec__8487,method,uri,map__8488,map__8488__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);
} else {
}

return req.send(uri,method,data,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null));
});

shoreleave.remotes.xhr.xhr.cljs$lang$maxFixedArity = (1);

shoreleave.remotes.xhr.xhr.cljs$lang$applyTo = (function (seq8485){
var G__8486 = cljs.core.first.call(null,seq8485);
var seq8485__$1 = cljs.core.next.call(null,seq8485);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic(G__8486,seq8485__$1);
});

//# sourceMappingURL=xhr.js.map
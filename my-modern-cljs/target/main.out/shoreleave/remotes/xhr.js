// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.remotes.xhr');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('shoreleave.remotes.common');
shoreleave.remotes.xhr.xhr = (function shoreleave$remotes$xhr$xhr(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8503 = arguments.length;
var i__6047__auto___8504 = (0);
while(true){
if((i__6047__auto___8504 < len__6046__auto___8503)){
args__6053__auto__.push((arguments[i__6047__auto___8504]));

var G__8505 = (i__6047__auto___8504 + (1));
i__6047__auto___8504 = G__8505;
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
var vec__8500 = shoreleave.remotes.common.parse_route.call(null,route);
var method = cljs.core.nth.call(null,vec__8500,(0),null);
var uri = cljs.core.nth.call(null,vec__8500,(1),null);
var map__8501 = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var map__8501__$1 = ((((!((map__8501 == null)))?((((map__8501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8501):map__8501);
var on_success = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_error = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var content = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"content","content",15833224));
var headers = cljs.core.get.call(null,map__8501__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var content__$1 = shoreleave.remotes.common.csrf_protected.call(null,content,method);
var data = shoreleave.remotes.common.__GT_data_str.call(null,content__$1);
var suc_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,on_success);
var err_callback = shoreleave.remotes.common.__GT_simple_callback.call(null,(function (){var or__4988__auto__ = on_error;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return ((function (or__4988__auto__,req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback){
return (function (p1__8497_SHARP_){
return console.log([cljs.core.str("XHR ERROR: "),cljs.core.str(p1__8497_SHARP_)].join(''));
});
;})(or__4988__auto__,req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback))
}
})());
if(cljs.core.truth_(suc_callback)){
goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-success","on-success",1786904109)),((function (req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return suc_callback.call(null,req);
});})(req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);

goog.events.listen(req,shoreleave.remotes.common.event_types.call(null,new cljs.core.Keyword(null,"on-error","on-error",1728533530)),((function (req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback){
return (function (){
return err_callback.call(null,req);
});})(req,vec__8500,method,uri,map__8501,map__8501__$1,on_success,on_error,content,headers,content__$1,data,suc_callback,err_callback))
);
} else {
}

return req.send(uri,method,data,(cljs.core.truth_(headers)?cljs.core.clj__GT_js.call(null,headers):null));
});

shoreleave.remotes.xhr.xhr.cljs$lang$maxFixedArity = (1);

shoreleave.remotes.xhr.xhr.cljs$lang$applyTo = (function (seq8498){
var G__8499 = cljs.core.first.call(null,seq8498);
var seq8498__$1 = cljs.core.next.call(null,seq8498);
return shoreleave.remotes.xhr.xhr.cljs$core$IFn$_invoke$arity$variadic(G__8499,seq8498__$1);
});

//# sourceMappingURL=xhr.js.map
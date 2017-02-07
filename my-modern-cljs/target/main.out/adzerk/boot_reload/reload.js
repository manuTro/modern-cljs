// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__6237_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6237_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__6242 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6243 = null;
var count__6244 = (0);
var i__6245 = (0);
while(true){
if((i__6245 < count__6244)){
var s = cljs.core._nth.call(null,chunk__6243,i__6245);
var temp__4425__auto___6246 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6246)){
var sheet_6247 = temp__4425__auto___6246;
var temp__4425__auto___6248__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6247.href,changed);
if(cljs.core.truth_(temp__4425__auto___6248__$1)){
var href_uri_6249 = temp__4425__auto___6248__$1;
sheet_6247.ownerNode.href = href_uri_6249.makeUnique().toString();
} else {
}
} else {
}

var G__6250 = seq__6242;
var G__6251 = chunk__6243;
var G__6252 = count__6244;
var G__6253 = (i__6245 + (1));
seq__6242 = G__6250;
chunk__6243 = G__6251;
count__6244 = G__6252;
i__6245 = G__6253;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6242);
if(temp__4425__auto__){
var seq__6242__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6242__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6242__$1);
var G__6254 = cljs.core.chunk_rest.call(null,seq__6242__$1);
var G__6255 = c__5791__auto__;
var G__6256 = cljs.core.count.call(null,c__5791__auto__);
var G__6257 = (0);
seq__6242 = G__6254;
chunk__6243 = G__6255;
count__6244 = G__6256;
i__6245 = G__6257;
continue;
} else {
var s = cljs.core.first.call(null,seq__6242__$1);
var temp__4425__auto___6258__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6258__$1)){
var sheet_6259 = temp__4425__auto___6258__$1;
var temp__4425__auto___6260__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6259.href,changed);
if(cljs.core.truth_(temp__4425__auto___6260__$2)){
var href_uri_6261 = temp__4425__auto___6260__$2;
sheet_6259.ownerNode.href = href_uri_6261.makeUnique().toString();
} else {
}
} else {
}

var G__6262 = cljs.core.next.call(null,seq__6242__$1);
var G__6263 = null;
var G__6264 = (0);
var G__6265 = (0);
seq__6242 = G__6262;
chunk__6243 = G__6263;
count__6244 = G__6264;
i__6245 = G__6265;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__6270 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6271 = null;
var count__6272 = (0);
var i__6273 = (0);
while(true){
if((i__6273 < count__6272)){
var s = cljs.core._nth.call(null,chunk__6271,i__6273);
var temp__4425__auto___6274 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6274)){
var image_6275 = temp__4425__auto___6274;
var temp__4425__auto___6276__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6275.src,changed);
if(cljs.core.truth_(temp__4425__auto___6276__$1)){
var href_uri_6277 = temp__4425__auto___6276__$1;
image_6275.src = href_uri_6277.makeUnique().toString();
} else {
}
} else {
}

var G__6278 = seq__6270;
var G__6279 = chunk__6271;
var G__6280 = count__6272;
var G__6281 = (i__6273 + (1));
seq__6270 = G__6278;
chunk__6271 = G__6279;
count__6272 = G__6280;
i__6273 = G__6281;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6270);
if(temp__4425__auto__){
var seq__6270__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6270__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6270__$1);
var G__6282 = cljs.core.chunk_rest.call(null,seq__6270__$1);
var G__6283 = c__5791__auto__;
var G__6284 = cljs.core.count.call(null,c__5791__auto__);
var G__6285 = (0);
seq__6270 = G__6282;
chunk__6271 = G__6283;
count__6272 = G__6284;
i__6273 = G__6285;
continue;
} else {
var s = cljs.core.first.call(null,seq__6270__$1);
var temp__4425__auto___6286__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6286__$1)){
var image_6287 = temp__4425__auto___6286__$1;
var temp__4425__auto___6288__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6287.src,changed);
if(cljs.core.truth_(temp__4425__auto___6288__$2)){
var href_uri_6289 = temp__4425__auto___6288__$2;
image_6287.src = href_uri_6289.makeUnique().toString();
} else {
}
} else {
}

var G__6290 = cljs.core.next.call(null,seq__6270__$1);
var G__6291 = null;
var G__6292 = (0);
var G__6293 = (0);
seq__6270 = G__6290;
chunk__6271 = G__6291;
count__6272 = G__6292;
i__6273 = G__6293;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6296){
var map__6299 = p__6296;
var map__6299__$1 = ((((!((map__6299 == null)))?((((map__6299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6299):map__6299);
var on_jsload = cljs.core.get.call(null,map__6299__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6299,map__6299__$1,on_jsload){
return (function (p1__6294_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6294_SHARP_,".js");
});})(map__6299,map__6299__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6299,map__6299__$1,on_jsload){
return (function (p1__6295_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6295_SHARP_).makeUnique());
});})(js_files,map__6299,map__6299__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6299,map__6299__$1,on_jsload){
return (function() { 
var G__6301__delegate = function (_){
return on_jsload.call(null);
};
var G__6301 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6302__i = 0, G__6302__a = new Array(arguments.length -  0);
while (G__6302__i < G__6302__a.length) {G__6302__a[G__6302__i] = arguments[G__6302__i + 0]; ++G__6302__i;}
  _ = new cljs.core.IndexedSeq(G__6302__a,0);
} 
return G__6301__delegate.call(this,_);};
G__6301.cljs$lang$maxFixedArity = 0;
G__6301.cljs$lang$applyTo = (function (arglist__6303){
var _ = cljs.core.seq(arglist__6303);
return G__6301__delegate(_);
});
G__6301.cljs$core$IFn$_invoke$arity$variadic = G__6301__delegate;
return G__6301;
})()
;})(js_files,map__6299,map__6299__$1,on_jsload))
,((function (js_files,map__6299,map__6299__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6299,map__6299__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__6308_6312 = cljs.core.seq.call(null,things_to_log);
var chunk__6309_6313 = null;
var count__6310_6314 = (0);
var i__6311_6315 = (0);
while(true){
if((i__6311_6315 < count__6310_6314)){
var t_6316 = cljs.core._nth.call(null,chunk__6309_6313,i__6311_6315);
console.log(t_6316);

var G__6317 = seq__6308_6312;
var G__6318 = chunk__6309_6313;
var G__6319 = count__6310_6314;
var G__6320 = (i__6311_6315 + (1));
seq__6308_6312 = G__6317;
chunk__6309_6313 = G__6318;
count__6310_6314 = G__6319;
i__6311_6315 = G__6320;
continue;
} else {
var temp__4425__auto___6321 = cljs.core.seq.call(null,seq__6308_6312);
if(temp__4425__auto___6321){
var seq__6308_6322__$1 = temp__4425__auto___6321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6308_6322__$1)){
var c__5791__auto___6323 = cljs.core.chunk_first.call(null,seq__6308_6322__$1);
var G__6324 = cljs.core.chunk_rest.call(null,seq__6308_6322__$1);
var G__6325 = c__5791__auto___6323;
var G__6326 = cljs.core.count.call(null,c__5791__auto___6323);
var G__6327 = (0);
seq__6308_6312 = G__6324;
chunk__6309_6313 = G__6325;
count__6310_6314 = G__6326;
i__6311_6315 = G__6327;
continue;
} else {
var t_6328 = cljs.core.first.call(null,seq__6308_6322__$1);
console.log(t_6328);

var G__6329 = cljs.core.next.call(null,seq__6308_6322__$1);
var G__6330 = null;
var G__6331 = (0);
var G__6332 = (0);
seq__6308_6312 = G__6329;
chunk__6309_6313 = G__6330;
count__6310_6314 = G__6331;
i__6311_6315 = G__6332;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__6334 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6334,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6334);

adzerk.boot_reload.reload.reload_css.call(null,G__6334);

adzerk.boot_reload.reload.reload_img.call(null,G__6334);

return G__6334;
});

//# sourceMappingURL=reload.js.map
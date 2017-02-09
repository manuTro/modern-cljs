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
return (function (p1__6369_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6369_SHARP_),path);
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
var seq__6374 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6375 = null;
var count__6376 = (0);
var i__6377 = (0);
while(true){
if((i__6377 < count__6376)){
var s = cljs.core._nth.call(null,chunk__6375,i__6377);
var temp__4425__auto___6378 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6378)){
var sheet_6379 = temp__4425__auto___6378;
var temp__4425__auto___6380__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6379.href,changed);
if(cljs.core.truth_(temp__4425__auto___6380__$1)){
var href_uri_6381 = temp__4425__auto___6380__$1;
sheet_6379.ownerNode.href = href_uri_6381.makeUnique().toString();
} else {
}
} else {
}

var G__6382 = seq__6374;
var G__6383 = chunk__6375;
var G__6384 = count__6376;
var G__6385 = (i__6377 + (1));
seq__6374 = G__6382;
chunk__6375 = G__6383;
count__6376 = G__6384;
i__6377 = G__6385;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6374);
if(temp__4425__auto__){
var seq__6374__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6374__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6374__$1);
var G__6386 = cljs.core.chunk_rest.call(null,seq__6374__$1);
var G__6387 = c__5791__auto__;
var G__6388 = cljs.core.count.call(null,c__5791__auto__);
var G__6389 = (0);
seq__6374 = G__6386;
chunk__6375 = G__6387;
count__6376 = G__6388;
i__6377 = G__6389;
continue;
} else {
var s = cljs.core.first.call(null,seq__6374__$1);
var temp__4425__auto___6390__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6390__$1)){
var sheet_6391 = temp__4425__auto___6390__$1;
var temp__4425__auto___6392__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6391.href,changed);
if(cljs.core.truth_(temp__4425__auto___6392__$2)){
var href_uri_6393 = temp__4425__auto___6392__$2;
sheet_6391.ownerNode.href = href_uri_6393.makeUnique().toString();
} else {
}
} else {
}

var G__6394 = cljs.core.next.call(null,seq__6374__$1);
var G__6395 = null;
var G__6396 = (0);
var G__6397 = (0);
seq__6374 = G__6394;
chunk__6375 = G__6395;
count__6376 = G__6396;
i__6377 = G__6397;
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
var seq__6402 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6403 = null;
var count__6404 = (0);
var i__6405 = (0);
while(true){
if((i__6405 < count__6404)){
var s = cljs.core._nth.call(null,chunk__6403,i__6405);
var temp__4425__auto___6406 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6406)){
var image_6407 = temp__4425__auto___6406;
var temp__4425__auto___6408__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6407.src,changed);
if(cljs.core.truth_(temp__4425__auto___6408__$1)){
var href_uri_6409 = temp__4425__auto___6408__$1;
image_6407.src = href_uri_6409.makeUnique().toString();
} else {
}
} else {
}

var G__6410 = seq__6402;
var G__6411 = chunk__6403;
var G__6412 = count__6404;
var G__6413 = (i__6405 + (1));
seq__6402 = G__6410;
chunk__6403 = G__6411;
count__6404 = G__6412;
i__6405 = G__6413;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6402);
if(temp__4425__auto__){
var seq__6402__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6402__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6402__$1);
var G__6414 = cljs.core.chunk_rest.call(null,seq__6402__$1);
var G__6415 = c__5791__auto__;
var G__6416 = cljs.core.count.call(null,c__5791__auto__);
var G__6417 = (0);
seq__6402 = G__6414;
chunk__6403 = G__6415;
count__6404 = G__6416;
i__6405 = G__6417;
continue;
} else {
var s = cljs.core.first.call(null,seq__6402__$1);
var temp__4425__auto___6418__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6418__$1)){
var image_6419 = temp__4425__auto___6418__$1;
var temp__4425__auto___6420__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6419.src,changed);
if(cljs.core.truth_(temp__4425__auto___6420__$2)){
var href_uri_6421 = temp__4425__auto___6420__$2;
image_6419.src = href_uri_6421.makeUnique().toString();
} else {
}
} else {
}

var G__6422 = cljs.core.next.call(null,seq__6402__$1);
var G__6423 = null;
var G__6424 = (0);
var G__6425 = (0);
seq__6402 = G__6422;
chunk__6403 = G__6423;
count__6404 = G__6424;
i__6405 = G__6425;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6428){
var map__6431 = p__6428;
var map__6431__$1 = ((((!((map__6431 == null)))?((((map__6431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6431):map__6431);
var on_jsload = cljs.core.get.call(null,map__6431__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6431,map__6431__$1,on_jsload){
return (function (p1__6426_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6426_SHARP_,".js");
});})(map__6431,map__6431__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6431,map__6431__$1,on_jsload){
return (function (p1__6427_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6427_SHARP_).makeUnique());
});})(js_files,map__6431,map__6431__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6431,map__6431__$1,on_jsload){
return (function() { 
var G__6433__delegate = function (_){
return on_jsload.call(null);
};
var G__6433 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6434__i = 0, G__6434__a = new Array(arguments.length -  0);
while (G__6434__i < G__6434__a.length) {G__6434__a[G__6434__i] = arguments[G__6434__i + 0]; ++G__6434__i;}
  _ = new cljs.core.IndexedSeq(G__6434__a,0);
} 
return G__6433__delegate.call(this,_);};
G__6433.cljs$lang$maxFixedArity = 0;
G__6433.cljs$lang$applyTo = (function (arglist__6435){
var _ = cljs.core.seq(arglist__6435);
return G__6433__delegate(_);
});
G__6433.cljs$core$IFn$_invoke$arity$variadic = G__6433__delegate;
return G__6433;
})()
;})(js_files,map__6431,map__6431__$1,on_jsload))
,((function (js_files,map__6431,map__6431__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6431,map__6431__$1,on_jsload))
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

var seq__6440_6444 = cljs.core.seq.call(null,things_to_log);
var chunk__6441_6445 = null;
var count__6442_6446 = (0);
var i__6443_6447 = (0);
while(true){
if((i__6443_6447 < count__6442_6446)){
var t_6448 = cljs.core._nth.call(null,chunk__6441_6445,i__6443_6447);
console.log(t_6448);

var G__6449 = seq__6440_6444;
var G__6450 = chunk__6441_6445;
var G__6451 = count__6442_6446;
var G__6452 = (i__6443_6447 + (1));
seq__6440_6444 = G__6449;
chunk__6441_6445 = G__6450;
count__6442_6446 = G__6451;
i__6443_6447 = G__6452;
continue;
} else {
var temp__4425__auto___6453 = cljs.core.seq.call(null,seq__6440_6444);
if(temp__4425__auto___6453){
var seq__6440_6454__$1 = temp__4425__auto___6453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6440_6454__$1)){
var c__5791__auto___6455 = cljs.core.chunk_first.call(null,seq__6440_6454__$1);
var G__6456 = cljs.core.chunk_rest.call(null,seq__6440_6454__$1);
var G__6457 = c__5791__auto___6455;
var G__6458 = cljs.core.count.call(null,c__5791__auto___6455);
var G__6459 = (0);
seq__6440_6444 = G__6456;
chunk__6441_6445 = G__6457;
count__6442_6446 = G__6458;
i__6443_6447 = G__6459;
continue;
} else {
var t_6460 = cljs.core.first.call(null,seq__6440_6454__$1);
console.log(t_6460);

var G__6461 = cljs.core.next.call(null,seq__6440_6454__$1);
var G__6462 = null;
var G__6463 = (0);
var G__6464 = (0);
seq__6440_6444 = G__6461;
chunk__6441_6445 = G__6462;
count__6442_6446 = G__6463;
i__6443_6447 = G__6464;
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

var G__6466 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6466,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6466);

adzerk.boot_reload.reload.reload_css.call(null,G__6466);

adzerk.boot_reload.reload.reload_img.call(null,G__6466);

return G__6466;
});

//# sourceMappingURL=reload.js.map
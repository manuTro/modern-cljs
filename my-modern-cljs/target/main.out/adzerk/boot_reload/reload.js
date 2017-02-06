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
return (function (p1__6227_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6227_SHARP_),path);
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
var seq__6232 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6233 = null;
var count__6234 = (0);
var i__6235 = (0);
while(true){
if((i__6235 < count__6234)){
var s = cljs.core._nth.call(null,chunk__6233,i__6235);
var temp__4425__auto___6236 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6236)){
var sheet_6237 = temp__4425__auto___6236;
var temp__4425__auto___6238__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6237.href,changed);
if(cljs.core.truth_(temp__4425__auto___6238__$1)){
var href_uri_6239 = temp__4425__auto___6238__$1;
sheet_6237.ownerNode.href = href_uri_6239.makeUnique().toString();
} else {
}
} else {
}

var G__6240 = seq__6232;
var G__6241 = chunk__6233;
var G__6242 = count__6234;
var G__6243 = (i__6235 + (1));
seq__6232 = G__6240;
chunk__6233 = G__6241;
count__6234 = G__6242;
i__6235 = G__6243;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6232);
if(temp__4425__auto__){
var seq__6232__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6232__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6232__$1);
var G__6244 = cljs.core.chunk_rest.call(null,seq__6232__$1);
var G__6245 = c__5792__auto__;
var G__6246 = cljs.core.count.call(null,c__5792__auto__);
var G__6247 = (0);
seq__6232 = G__6244;
chunk__6233 = G__6245;
count__6234 = G__6246;
i__6235 = G__6247;
continue;
} else {
var s = cljs.core.first.call(null,seq__6232__$1);
var temp__4425__auto___6248__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6248__$1)){
var sheet_6249 = temp__4425__auto___6248__$1;
var temp__4425__auto___6250__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6249.href,changed);
if(cljs.core.truth_(temp__4425__auto___6250__$2)){
var href_uri_6251 = temp__4425__auto___6250__$2;
sheet_6249.ownerNode.href = href_uri_6251.makeUnique().toString();
} else {
}
} else {
}

var G__6252 = cljs.core.next.call(null,seq__6232__$1);
var G__6253 = null;
var G__6254 = (0);
var G__6255 = (0);
seq__6232 = G__6252;
chunk__6233 = G__6253;
count__6234 = G__6254;
i__6235 = G__6255;
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
var seq__6260 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6261 = null;
var count__6262 = (0);
var i__6263 = (0);
while(true){
if((i__6263 < count__6262)){
var s = cljs.core._nth.call(null,chunk__6261,i__6263);
var temp__4425__auto___6264 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6264)){
var image_6265 = temp__4425__auto___6264;
var temp__4425__auto___6266__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6265.src,changed);
if(cljs.core.truth_(temp__4425__auto___6266__$1)){
var href_uri_6267 = temp__4425__auto___6266__$1;
image_6265.src = href_uri_6267.makeUnique().toString();
} else {
}
} else {
}

var G__6268 = seq__6260;
var G__6269 = chunk__6261;
var G__6270 = count__6262;
var G__6271 = (i__6263 + (1));
seq__6260 = G__6268;
chunk__6261 = G__6269;
count__6262 = G__6270;
i__6263 = G__6271;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6260);
if(temp__4425__auto__){
var seq__6260__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6260__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6260__$1);
var G__6272 = cljs.core.chunk_rest.call(null,seq__6260__$1);
var G__6273 = c__5792__auto__;
var G__6274 = cljs.core.count.call(null,c__5792__auto__);
var G__6275 = (0);
seq__6260 = G__6272;
chunk__6261 = G__6273;
count__6262 = G__6274;
i__6263 = G__6275;
continue;
} else {
var s = cljs.core.first.call(null,seq__6260__$1);
var temp__4425__auto___6276__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6276__$1)){
var image_6277 = temp__4425__auto___6276__$1;
var temp__4425__auto___6278__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6277.src,changed);
if(cljs.core.truth_(temp__4425__auto___6278__$2)){
var href_uri_6279 = temp__4425__auto___6278__$2;
image_6277.src = href_uri_6279.makeUnique().toString();
} else {
}
} else {
}

var G__6280 = cljs.core.next.call(null,seq__6260__$1);
var G__6281 = null;
var G__6282 = (0);
var G__6283 = (0);
seq__6260 = G__6280;
chunk__6261 = G__6281;
count__6262 = G__6282;
i__6263 = G__6283;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6286){
var map__6289 = p__6286;
var map__6289__$1 = ((((!((map__6289 == null)))?((((map__6289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6289):map__6289);
var on_jsload = cljs.core.get.call(null,map__6289__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6289,map__6289__$1,on_jsload){
return (function (p1__6284_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6284_SHARP_,".js");
});})(map__6289,map__6289__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6289,map__6289__$1,on_jsload){
return (function (p1__6285_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6285_SHARP_).makeUnique());
});})(js_files,map__6289,map__6289__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6289,map__6289__$1,on_jsload){
return (function() { 
var G__6291__delegate = function (_){
return on_jsload.call(null);
};
var G__6291 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6292__i = 0, G__6292__a = new Array(arguments.length -  0);
while (G__6292__i < G__6292__a.length) {G__6292__a[G__6292__i] = arguments[G__6292__i + 0]; ++G__6292__i;}
  _ = new cljs.core.IndexedSeq(G__6292__a,0);
} 
return G__6291__delegate.call(this,_);};
G__6291.cljs$lang$maxFixedArity = 0;
G__6291.cljs$lang$applyTo = (function (arglist__6293){
var _ = cljs.core.seq(arglist__6293);
return G__6291__delegate(_);
});
G__6291.cljs$core$IFn$_invoke$arity$variadic = G__6291__delegate;
return G__6291;
})()
;})(js_files,map__6289,map__6289__$1,on_jsload))
,((function (js_files,map__6289,map__6289__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6289,map__6289__$1,on_jsload))
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

var seq__6298_6302 = cljs.core.seq.call(null,things_to_log);
var chunk__6299_6303 = null;
var count__6300_6304 = (0);
var i__6301_6305 = (0);
while(true){
if((i__6301_6305 < count__6300_6304)){
var t_6306 = cljs.core._nth.call(null,chunk__6299_6303,i__6301_6305);
console.log(t_6306);

var G__6307 = seq__6298_6302;
var G__6308 = chunk__6299_6303;
var G__6309 = count__6300_6304;
var G__6310 = (i__6301_6305 + (1));
seq__6298_6302 = G__6307;
chunk__6299_6303 = G__6308;
count__6300_6304 = G__6309;
i__6301_6305 = G__6310;
continue;
} else {
var temp__4425__auto___6311 = cljs.core.seq.call(null,seq__6298_6302);
if(temp__4425__auto___6311){
var seq__6298_6312__$1 = temp__4425__auto___6311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6298_6312__$1)){
var c__5792__auto___6313 = cljs.core.chunk_first.call(null,seq__6298_6312__$1);
var G__6314 = cljs.core.chunk_rest.call(null,seq__6298_6312__$1);
var G__6315 = c__5792__auto___6313;
var G__6316 = cljs.core.count.call(null,c__5792__auto___6313);
var G__6317 = (0);
seq__6298_6302 = G__6314;
chunk__6299_6303 = G__6315;
count__6300_6304 = G__6316;
i__6301_6305 = G__6317;
continue;
} else {
var t_6318 = cljs.core.first.call(null,seq__6298_6312__$1);
console.log(t_6318);

var G__6319 = cljs.core.next.call(null,seq__6298_6312__$1);
var G__6320 = null;
var G__6321 = (0);
var G__6322 = (0);
seq__6298_6302 = G__6319;
chunk__6299_6303 = G__6320;
count__6300_6304 = G__6321;
i__6301_6305 = G__6322;
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

var G__6324 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6324,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6324);

adzerk.boot_reload.reload.reload_css.call(null,G__6324);

adzerk.boot_reload.reload.reload_img.call(null,G__6324);

return G__6324;
});

//# sourceMappingURL=reload.js.map
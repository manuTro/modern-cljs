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
return (function (p1__6238_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__6238_SHARP_),path);
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
var seq__6243 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__6244 = null;
var count__6245 = (0);
var i__6246 = (0);
while(true){
if((i__6246 < count__6245)){
var s = cljs.core._nth.call(null,chunk__6244,i__6246);
var temp__4425__auto___6247 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6247)){
var sheet_6248 = temp__4425__auto___6247;
var temp__4425__auto___6249__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6248.href,changed);
if(cljs.core.truth_(temp__4425__auto___6249__$1)){
var href_uri_6250 = temp__4425__auto___6249__$1;
sheet_6248.ownerNode.href = href_uri_6250.makeUnique().toString();
} else {
}
} else {
}

var G__6251 = seq__6243;
var G__6252 = chunk__6244;
var G__6253 = count__6245;
var G__6254 = (i__6246 + (1));
seq__6243 = G__6251;
chunk__6244 = G__6252;
count__6245 = G__6253;
i__6246 = G__6254;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6243);
if(temp__4425__auto__){
var seq__6243__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6243__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6243__$1);
var G__6255 = cljs.core.chunk_rest.call(null,seq__6243__$1);
var G__6256 = c__5792__auto__;
var G__6257 = cljs.core.count.call(null,c__5792__auto__);
var G__6258 = (0);
seq__6243 = G__6255;
chunk__6244 = G__6256;
count__6245 = G__6257;
i__6246 = G__6258;
continue;
} else {
var s = cljs.core.first.call(null,seq__6243__$1);
var temp__4425__auto___6259__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___6259__$1)){
var sheet_6260 = temp__4425__auto___6259__$1;
var temp__4425__auto___6261__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_6260.href,changed);
if(cljs.core.truth_(temp__4425__auto___6261__$2)){
var href_uri_6262 = temp__4425__auto___6261__$2;
sheet_6260.ownerNode.href = href_uri_6262.makeUnique().toString();
} else {
}
} else {
}

var G__6263 = cljs.core.next.call(null,seq__6243__$1);
var G__6264 = null;
var G__6265 = (0);
var G__6266 = (0);
seq__6243 = G__6263;
chunk__6244 = G__6264;
count__6245 = G__6265;
i__6246 = G__6266;
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
var seq__6271 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__6272 = null;
var count__6273 = (0);
var i__6274 = (0);
while(true){
if((i__6274 < count__6273)){
var s = cljs.core._nth.call(null,chunk__6272,i__6274);
var temp__4425__auto___6275 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6275)){
var image_6276 = temp__4425__auto___6275;
var temp__4425__auto___6277__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6276.src,changed);
if(cljs.core.truth_(temp__4425__auto___6277__$1)){
var href_uri_6278 = temp__4425__auto___6277__$1;
image_6276.src = href_uri_6278.makeUnique().toString();
} else {
}
} else {
}

var G__6279 = seq__6271;
var G__6280 = chunk__6272;
var G__6281 = count__6273;
var G__6282 = (i__6274 + (1));
seq__6271 = G__6279;
chunk__6272 = G__6280;
count__6273 = G__6281;
i__6274 = G__6282;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6271);
if(temp__4425__auto__){
var seq__6271__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6271__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6271__$1);
var G__6283 = cljs.core.chunk_rest.call(null,seq__6271__$1);
var G__6284 = c__5792__auto__;
var G__6285 = cljs.core.count.call(null,c__5792__auto__);
var G__6286 = (0);
seq__6271 = G__6283;
chunk__6272 = G__6284;
count__6273 = G__6285;
i__6274 = G__6286;
continue;
} else {
var s = cljs.core.first.call(null,seq__6271__$1);
var temp__4425__auto___6287__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___6287__$1)){
var image_6288 = temp__4425__auto___6287__$1;
var temp__4425__auto___6289__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_6288.src,changed);
if(cljs.core.truth_(temp__4425__auto___6289__$2)){
var href_uri_6290 = temp__4425__auto___6289__$2;
image_6288.src = href_uri_6290.makeUnique().toString();
} else {
}
} else {
}

var G__6291 = cljs.core.next.call(null,seq__6271__$1);
var G__6292 = null;
var G__6293 = (0);
var G__6294 = (0);
seq__6271 = G__6291;
chunk__6272 = G__6292;
count__6273 = G__6293;
i__6274 = G__6294;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__6297){
var map__6300 = p__6297;
var map__6300__$1 = ((((!((map__6300 == null)))?((((map__6300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6300):map__6300);
var on_jsload = cljs.core.get.call(null,map__6300__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__6300,map__6300__$1,on_jsload){
return (function (p1__6295_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__6295_SHARP_,".js");
});})(map__6300,map__6300__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__6300,map__6300__$1,on_jsload){
return (function (p1__6296_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__6296_SHARP_).makeUnique());
});})(js_files,map__6300,map__6300__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__6300,map__6300__$1,on_jsload){
return (function() { 
var G__6302__delegate = function (_){
return on_jsload.call(null);
};
var G__6302 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__6303__i = 0, G__6303__a = new Array(arguments.length -  0);
while (G__6303__i < G__6303__a.length) {G__6303__a[G__6303__i] = arguments[G__6303__i + 0]; ++G__6303__i;}
  _ = new cljs.core.IndexedSeq(G__6303__a,0);
} 
return G__6302__delegate.call(this,_);};
G__6302.cljs$lang$maxFixedArity = 0;
G__6302.cljs$lang$applyTo = (function (arglist__6304){
var _ = cljs.core.seq(arglist__6304);
return G__6302__delegate(_);
});
G__6302.cljs$core$IFn$_invoke$arity$variadic = G__6302__delegate;
return G__6302;
})()
;})(js_files,map__6300,map__6300__$1,on_jsload))
,((function (js_files,map__6300,map__6300__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__6300,map__6300__$1,on_jsload))
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

var seq__6309_6313 = cljs.core.seq.call(null,things_to_log);
var chunk__6310_6314 = null;
var count__6311_6315 = (0);
var i__6312_6316 = (0);
while(true){
if((i__6312_6316 < count__6311_6315)){
var t_6317 = cljs.core._nth.call(null,chunk__6310_6314,i__6312_6316);
console.log(t_6317);

var G__6318 = seq__6309_6313;
var G__6319 = chunk__6310_6314;
var G__6320 = count__6311_6315;
var G__6321 = (i__6312_6316 + (1));
seq__6309_6313 = G__6318;
chunk__6310_6314 = G__6319;
count__6311_6315 = G__6320;
i__6312_6316 = G__6321;
continue;
} else {
var temp__4425__auto___6322 = cljs.core.seq.call(null,seq__6309_6313);
if(temp__4425__auto___6322){
var seq__6309_6323__$1 = temp__4425__auto___6322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6309_6323__$1)){
var c__5792__auto___6324 = cljs.core.chunk_first.call(null,seq__6309_6323__$1);
var G__6325 = cljs.core.chunk_rest.call(null,seq__6309_6323__$1);
var G__6326 = c__5792__auto___6324;
var G__6327 = cljs.core.count.call(null,c__5792__auto___6324);
var G__6328 = (0);
seq__6309_6313 = G__6325;
chunk__6310_6314 = G__6326;
count__6311_6315 = G__6327;
i__6312_6316 = G__6328;
continue;
} else {
var t_6329 = cljs.core.first.call(null,seq__6309_6323__$1);
console.log(t_6329);

var G__6330 = cljs.core.next.call(null,seq__6309_6323__$1);
var G__6331 = null;
var G__6332 = (0);
var G__6333 = (0);
seq__6309_6313 = G__6330;
chunk__6310_6314 = G__6331;
count__6311_6315 = G__6332;
i__6312_6316 = G__6333;
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

var G__6335 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__6335,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__6335);

adzerk.boot_reload.reload.reload_css.call(null,G__6335);

adzerk.boot_reload.reload.reload_img.call(null,G__6335);

return G__6335;
});

//# sourceMappingURL=reload.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('shoreleave.browser.cookies');
goog.require('cljs.core');
goog.require('goog.net.Cookies');
goog.require('goog.string');
shoreleave.browser.cookies.as_hash_map;
goog.net.Cookies.prototype.cljs$core$ITransientAssociative$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (c,k,v){
var c__$1 = this;
var temp__4425__auto__ = (function (){var and__4977__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__4977__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__4977__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var k__$1 = temp__4425__auto__;
return c__$1.set(k__$1,v);
} else {
return null;
}
});

goog.net.Cookies.prototype.cljs$core$ILookup$ = true;

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (c,k){
var c__$1 = this;
return cljs.core._lookup.call(null,c__$1,k,null);
});

goog.net.Cookies.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (c,k,not_found){
var c__$1 = this;
var v = c__$1.get(cljs.core.name.call(null,k),not_found);
if(typeof v === 'string'){
return goog.string.urlDecode(v);
} else {
return v;
}
});

goog.net.Cookies.prototype.cljs$core$ITransientMap$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (c,k){
var c__$1 = this;
var temp__4425__auto__ = (function (){var and__4977__auto__ = c__$1.isValidName(cljs.core.name.call(null,k));
if(cljs.core.truth_(and__4977__auto__)){
return cljs.core.name.call(null,k);
} else {
return and__4977__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var k__$1 = temp__4425__auto__;
return c__$1.remove(k__$1);
} else {
return null;
}
});

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$ = true;

goog.net.Cookies.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (c,writer,opts){
var c__$1 = this;
return cljs.core._write.call(null,writer,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ICounted$ = true;

goog.net.Cookies.prototype.cljs$core$ICounted$_count$arity$1 = (function (c){
var c__$1 = this;
return c__$1.getCount();
});

goog.net.Cookies.prototype.cljs$core$IHash$ = true;

goog.net.Cookies.prototype.cljs$core$IHash$_hash$arity$1 = (function (c){
var c__$1 = this;
return cljs.core._hash.call(null,cljs.core._persistent_BANG_.call(null,c__$1));
});

goog.net.Cookies.prototype.cljs$core$ITransientCollection$ = true;

goog.net.Cookies.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (c){
var c__$1 = this;
return shoreleave.browser.cookies.as_hash_map.call(null,c__$1);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$ = true;

goog.net.Cookies.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (c,k,v){
var c__$1 = this;
return cljs.core._assoc.call(null,cljs.core._persistent_BANG_.call(null,c__$1),k,v);
});

goog.net.Cookies.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (c,k){
var c__$1 = this;
return c__$1.containsKey(cljs.core.name.call(null,k));
});

goog.net.Cookies.prototype.cljs$core$ISeqable$ = true;

goog.net.Cookies.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (c){
var c__$1 = this;
return cljs.core.map.call(null,cljs.core.vector,c__$1.getKeys(),c__$1.getValues());
});

goog.net.Cookies.prototype.cljs$core$IFn$ = true;

goog.net.Cookies.prototype.call = (function() {
var G__8463 = null;
var G__8463__2 = (function (self__,k){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k);
});
var G__8463__3 = (function (self__,k,not_found){
var self____$1 = this;
var c = self____$1;
return cljs.core._lookup.call(null,c,k,not_found);
});
G__8463 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__8463__2.call(this,self__,k);
case 3:
return G__8463__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8463.cljs$core$IFn$_invoke$arity$2 = G__8463__2;
G__8463.cljs$core$IFn$_invoke$arity$3 = G__8463__3;
return G__8463;
})()
;

goog.net.Cookies.prototype.apply = (function (self__,args8462){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args8462)));
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var c = this;
return cljs.core._lookup.call(null,c,k);
});

goog.net.Cookies.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var c = this;
return cljs.core._lookup.call(null,c,k,not_found);
});
shoreleave.browser.cookies.cookies = (new goog.net.Cookies(document));
shoreleave.browser.cookies.as_hash_map = (function shoreleave$browser$cookies$as_hash_map(var_args){
var args8464 = [];
var len__6047__auto___8467 = arguments.length;
var i__6048__auto___8468 = (0);
while(true){
if((i__6048__auto___8468 < len__6047__auto___8467)){
args8464.push((arguments[i__6048__auto___8468]));

var G__8469 = (i__6048__auto___8468 + (1));
i__6048__auto___8468 = G__8469;
continue;
} else {
}
break;
}

var G__8466 = args8464.length;
switch (G__8466) {
case 0:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8464.length)].join('')));

}
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.as_hash_map.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.as_hash_map.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cljs.core.zipmap.call(null,cks.getKeys(),cks.getValues());
});

shoreleave.browser.cookies.as_hash_map.cljs$lang$maxFixedArity = 1;
/**
 * Returns a boolean, true if cookies are currently enabled for the browser
 */
shoreleave.browser.cookies.cookies_enabled_QMARK_ = (function shoreleave$browser$cookies$cookies_enabled_QMARK_(var_args){
var args8471 = [];
var len__6047__auto___8474 = arguments.length;
var i__6048__auto___8475 = (0);
while(true){
if((i__6048__auto___8475 < len__6047__auto___8474)){
args8471.push((arguments[i__6048__auto___8475]));

var G__8476 = (i__6048__auto___8475 + (1));
i__6048__auto___8475 = G__8476;
continue;
} else {
}
break;
}

var G__8473 = args8471.length;
switch (G__8473) {
case 0:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8471.length)].join('')));

}
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return shoreleave.browser.cookies.cookies_enabled_QMARK_.call(null,shoreleave.browser.cookies.cookies);
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (cks){
return cks.isEnabled();
});

shoreleave.browser.cookies.cookies_enabled_QMARK_.cljs$lang$maxFixedArity = 1;
shoreleave.browser.cookies.empty_BANG_ = (function shoreleave$browser$cookies$empty_BANG_(cks){
return cks.clear();
});

//# sourceMappingURL=cookies.js.map
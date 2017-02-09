// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(var_args){
var args6972 = [];
var len__6046__auto___6978 = arguments.length;
var i__6047__auto___6979 = (0);
while(true){
if((i__6047__auto___6979 < len__6046__auto___6978)){
args6972.push((arguments[i__6047__auto___6979]));

var G__6980 = (i__6047__auto___6979 + (1));
i__6047__auto___6979 = G__6980;
continue;
} else {
}
break;
}

var G__6974 = args6972.length;
switch (G__6974) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6972.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css6975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {domina.core.DomContent}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css6975 = (function (base,expr,meta6976){
this.base = base;
this.expr = expr;
this.meta6976 = meta6976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css6975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6977,meta6976__$1){
var self__ = this;
var _6977__$1 = this;
return (new domina.css.t_domina$css6975(self__.base,self__.expr,meta6976__$1));
});

domina.css.t_domina$css6975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6977){
var self__ = this;
var _6977__$1 = this;
return self__.meta6976;
});

domina.css.t_domina$css6975.prototype.domina$core$DomContent$ = true;

domina.css.t_domina$css6975.prototype.domina$core$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__6970_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__6970_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base));
});

domina.css.t_domina$css6975.prototype.domina$core$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__6971_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__6971_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base))));
});

domina.css.t_domina$css6975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta6976","meta6976",-1259137787,null)], null);
});

domina.css.t_domina$css6975.cljs$lang$type = true;

domina.css.t_domina$css6975.cljs$lang$ctorStr = "domina.css/t_domina$css6975";

domina.css.t_domina$css6975.cljs$lang$ctorPrWriter = (function (this__5586__auto__,writer__5587__auto__,opt__5588__auto__){
return cljs.core._write.call(null,writer__5587__auto__,"domina.css/t_domina$css6975");
});

domina.css.__GT_t_domina$css6975 = (function domina$css$__GT_t_domina$css6975(base__$1,expr__$1,meta6976){
return (new domina.css.t_domina$css6975(base__$1,expr__$1,meta6976));
});

}

return (new domina.css.t_domina$css6975(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map
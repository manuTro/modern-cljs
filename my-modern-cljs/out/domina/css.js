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
var args9089 = [];
var len__9004__auto___9095 = arguments.length;
var i__9005__auto___9096 = (0);
while(true){
if((i__9005__auto___9096 < len__9004__auto___9095)){
args9089.push((arguments[i__9005__auto___9096]));

var G__9097 = (i__9005__auto___9096 + (1));
i__9005__auto___9096 = G__9097;
continue;
} else {
}
break;
}

var G__9091 = args9089.length;
switch (G__9091) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9089.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t_domina$css9092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {domina.core.DomContent}
 * @implements {cljs.core.IWithMeta}
*/
domina.css.t_domina$css9092 = (function (base,expr,meta9093){
this.base = base;
this.expr = expr;
this.meta9093 = meta9093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t_domina$css9092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9094,meta9093__$1){
var self__ = this;
var _9094__$1 = this;
return (new domina.css.t_domina$css9092(self__.base,self__.expr,meta9093__$1));
});

domina.css.t_domina$css9092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9094){
var self__ = this;
var _9094__$1 = this;
return self__.meta9093;
});

domina.css.t_domina$css9092.prototype.domina$core$DomContent$ = true;

domina.css.t_domina$css9092.prototype.domina$core$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__9087_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__9087_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base));
});

domina.css.t_domina$css9092.prototype.domina$core$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__9088_SHARP_){
return domina.core.normalize_seq.call(null,goog.dom.query(self__.expr,p1__9088_SHARP_));
});})(___$1))
,domina.core.nodes.call(null,self__.base))));
});

domina.css.t_domina$css9092.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta9093","meta9093",672079768,null)], null);
});

domina.css.t_domina$css9092.cljs$lang$type = true;

domina.css.t_domina$css9092.cljs$lang$ctorStr = "domina.css/t_domina$css9092";

domina.css.t_domina$css9092.cljs$lang$ctorPrWriter = (function (this__8544__auto__,writer__8545__auto__,opt__8546__auto__){
return cljs.core._write.call(null,writer__8545__auto__,"domina.css/t_domina$css9092");
});

domina.css.__GT_t_domina$css9092 = (function domina$css$__GT_t_domina$css9092(base__$1,expr__$1,meta9093){
return (new domina.css.t_domina$css9092(base__$1,expr__$1,meta9093));
});

}

return (new domina.css.t_domina$css9092(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map
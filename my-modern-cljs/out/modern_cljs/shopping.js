// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.shopping');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
modern_cljs.shopping.calculate = (function modern_cljs$shopping$calculate(){
var quantity = domina.core.value.call(null,domina.core.by_id.call(null,"quantity"));
var price = domina.core.value.call(null,domina.core.by_id.call(null,"price"));
var tax = domina.core.value.call(null,domina.core.by_id.call(null,"tax"));
var discount = domina.core.value.call(null,domina.core.by_id.call(null,"discount"));
return domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),(((quantity * price) * ((1) + (tax / (100)))) - discount).toFixed((2)));
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__7399__auto__ = document;
if(cljs.core.truth_(and__7399__auto__)){
return document.getElementById;
} else {
return and__7399__auto__;
}
})())){
return domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"click","click",1912301393),modern_cljs.shopping.calculate);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.shopping.init', modern_cljs.shopping.init);

//# sourceMappingURL=shopping.js.map
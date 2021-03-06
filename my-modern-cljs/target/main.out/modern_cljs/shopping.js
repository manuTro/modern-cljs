// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.shopping');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('hiccups.runtime');
goog.require('shoreleave.remotes.http_rpc');
goog.require('cljs.reader');
modern_cljs.shopping.calculate = (function modern_cljs$shopping$calculate(){
var quantity = cljs.reader.read_string.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"quantity")));
var price = cljs.reader.read_string.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"price")));
var tax = cljs.reader.read_string.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"tax")));
var discount = cljs.reader.read_string.call(null,domina.core.value.call(null,domina.core.by_id.call(null,"discount")));
return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity,price,tax,discount], null),((function (quantity,price,tax,discount){
return (function (p1__8240_SHARP_){
return domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),p1__8240_SHARP_.toFixed((2)));
});})(quantity,price,tax,discount))
);
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__4977__auto__ = document;
if(cljs.core.truth_(and__4977__auto__)){
return document.getElementById;
} else {
return and__4977__auto__;
}
})())){
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"click","click",1912301393),modern_cljs.shopping.calculate);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),(function (){
return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"shoppingForm"),"<div class='help'>Click to calculate</div>");
}));

return domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),(function (){
return domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"help"));
}));
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.shopping.init', modern_cljs.shopping.init);

//# sourceMappingURL=shopping.js.map
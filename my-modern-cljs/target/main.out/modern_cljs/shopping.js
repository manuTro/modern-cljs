// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.shopping');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('domina.css');
goog.require('hiccups.runtime');
goog.require('modern_cljs.shopping.validators');
goog.require('shoreleave.remotes.http_rpc');
modern_cljs.shopping.calculate = (function modern_cljs$shopping$calculate(evt){
var quantity = domina.core.value.call(null,domina.core.by_id.call(null,"quantity"));
var price = domina.core.value.call(null,domina.core.by_id.call(null,"price"));
var tax = domina.core.value.call(null,domina.core.by_id.call(null,"tax"));
var discount = domina.core.value.call(null,domina.core.by_id.call(null,"discount"));
shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity,price,tax,discount], null),((function (quantity,price,tax,discount){
return (function (p1__8947_SHARP_){
return domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),p1__8947_SHARP_.toFixed((2)));
});})(quantity,price,tax,discount))
);

return domina.events.prevent_default.call(null,evt);
});
modern_cljs.shopping.calculate_BANG_ = (function modern_cljs$shopping$calculate_BANG_(){
var quantity = domina.core.value.call(null,domina.core.by_id.call(null,"quantity"));
var price = domina.core.value.call(null,domina.core.by_id.call(null,"price"));
var tax = domina.core.value.call(null,domina.core.by_id.call(null,"tax"));
var discount = domina.core.value.call(null,domina.core.by_id.call(null,"discount"));
var errors = modern_cljs.shopping.validators.validate_shopping_form.call(null,quantity,price,tax,discount);
if(cljs.core.not.call(null,errors)){
return shoreleave.remotes.http_rpc.remote_callback.call(null,new cljs.core.Keyword(null,"calculate","calculate",-1224644403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity,price,tax,discount], null),((function (quantity,price,tax,discount,errors){
return (function (p1__8948_SHARP_){
return domina.core.set_value_BANG_.call(null,domina.core.by_id.call(null,"total"),p1__8948_SHARP_.toFixed((2)));
});})(quantity,price,tax,discount,errors))
);
} else {
return null;
}
});
modern_cljs.shopping.validate_shopping_field_BANG_ = (function modern_cljs$shopping$validate_shopping_field_BANG_(evt,field,text){
var attr = cljs.core.name.call(null,field);
var label = domina.css.sel.call(null,[cljs.core.str("label[for="),cljs.core.str(attr),cljs.core.str("]")].join(''));
domina.core.remove_class_BANG_.call(null,label,"help");

var temp__4423__auto__ = modern_cljs.shopping.validators.validate_shopping_field.call(null,field,domina.core.value.call(null,domina.core.by_id.call(null,attr)));
if(cljs.core.truth_(temp__4423__auto__)){
var error = temp__4423__auto__;
domina.core.add_class_BANG_.call(null,label,"help");

return domina.core.set_text_BANG_.call(null,label,error);
} else {
domina.core.set_text_BANG_.call(null,label,text);

modern_cljs.shopping.calculate_BANG_.call(null);

return domina.events.prevent_default.call(null,evt);
}
});
modern_cljs.shopping.init = (function modern_cljs$shopping$init(){
if(cljs.core.truth_((function (){var and__4976__auto__ = document;
if(cljs.core.truth_(and__4976__auto__)){
return (document["getElementById"]);
} else {
return and__4976__auto__;
}
})())){
var quantity_text_8953 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=quantity]"));
var price_text_8954 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=price]"));
var tax_text_8955 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=tax]"));
var discount_text_8956 = domina.core.text.call(null,domina.css.sel.call(null,"label[for=discount]"));
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"quantity"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity_text_8953);
});})(quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"price"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"price","price",22129180),price_text_8954);
});})(quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"tax"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"tax","tax",-226525810),tax_text_8955);
});})(quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"discount"),new cljs.core.Keyword(null,"input","input",556931961),((function (quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956){
return (function (evt){
return modern_cljs.shopping.validate_shopping_field_BANG_.call(null,evt,new cljs.core.Keyword(null,"discount","discount",1508820155),discount_text_8956);
});})(quantity_text_8953,price_text_8954,tax_text_8955,discount_text_8956))
);

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"click","click",1912301393),(function (evt){
modern_cljs.shopping.calculate_BANG_.call(null);

return domina.events.prevent_default.call(null,evt);
}));

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),(function (_){
return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"shoppingForm"),[cljs.core.str("<div class=\"help\" id=\"help\">Click to calculate</div>")].join(''));
}));

domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"calc"),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890),(function (_){
return domina.core.destroy_BANG_.call(null,domina.core.by_id.call(null,"help"));
}));

return modern_cljs.shopping.calculate_BANG_.call(null);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.shopping.init', modern_cljs.shopping.init);

//# sourceMappingURL=shopping.js.map
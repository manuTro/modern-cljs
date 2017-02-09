// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__4988__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8791 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8791){
return (function (){
var _STAR_always_update_STAR_8792 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8792;
}});})(_STAR_always_update_STAR_8791))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8791;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8793 = [];
var len__6046__auto___8796 = arguments.length;
var i__6047__auto___8797 = (0);
while(true){
if((i__6047__auto___8797 < len__6046__auto___8796)){
args8793.push((arguments[i__6047__auto___8797]));

var G__8798 = (i__6047__auto___8797 + (1));
i__6047__auto___8797 = G__8798;
continue;
} else {
}
break;
}

var G__8795 = args8793.length;
switch (G__8795) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8793.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8804_8808 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8805_8809 = null;
var count__8806_8810 = (0);
var i__8807_8811 = (0);
while(true){
if((i__8807_8811 < count__8806_8810)){
var v_8812 = cljs.core._nth.call(null,chunk__8805_8809,i__8807_8811);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8812);

var G__8813 = seq__8804_8808;
var G__8814 = chunk__8805_8809;
var G__8815 = count__8806_8810;
var G__8816 = (i__8807_8811 + (1));
seq__8804_8808 = G__8813;
chunk__8805_8809 = G__8814;
count__8806_8810 = G__8815;
i__8807_8811 = G__8816;
continue;
} else {
var temp__4425__auto___8817 = cljs.core.seq.call(null,seq__8804_8808);
if(temp__4425__auto___8817){
var seq__8804_8818__$1 = temp__4425__auto___8817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8804_8818__$1)){
var c__5791__auto___8819 = cljs.core.chunk_first.call(null,seq__8804_8818__$1);
var G__8820 = cljs.core.chunk_rest.call(null,seq__8804_8818__$1);
var G__8821 = c__5791__auto___8819;
var G__8822 = cljs.core.count.call(null,c__5791__auto___8819);
var G__8823 = (0);
seq__8804_8808 = G__8820;
chunk__8805_8809 = G__8821;
count__8806_8810 = G__8822;
i__8807_8811 = G__8823;
continue;
} else {
var v_8824 = cljs.core.first.call(null,seq__8804_8818__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8824);

var G__8825 = cljs.core.next.call(null,seq__8804_8818__$1);
var G__8826 = null;
var G__8827 = (0);
var G__8828 = (0);
seq__8804_8808 = G__8825;
chunk__8805_8809 = G__8826;
count__8806_8810 = G__8827;
i__8807_8811 = G__8828;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
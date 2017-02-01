// Compiled by ClojureScript 1.7.170 {}
goog.provide('domina.core');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.core.re_html = /<|&#?\w+;/;
domina.core.re_leading_whitespace = /^\s+/;
domina.core.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.core.re_tag_name = /<([\w:]+)/;
domina.core.re_no_inner_html = /<(?:script|style)/i;
domina.core.re_tbody = /<tbody/i;
var opt_wrapper_8729 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_8730 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_8731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_8731,opt_wrapper_8729,table_section_wrapper_8730,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_8729,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_8730,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_8730,cell_wrapper_8731,table_section_wrapper_8730,table_section_wrapper_8730]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7399__auto__ = div.firstChild;
if(cljs.core.truth_(and__7399__auto__)){
return div.firstChild.childNodes;
} else {
return and__7399__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__8736 = cljs.core.seq.call(null,tbody);
var chunk__8737 = null;
var count__8738 = (0);
var i__8739 = (0);
while(true){
if((i__8739 < count__8738)){
var child = cljs.core._nth.call(null,chunk__8737,i__8739);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8740 = seq__8736;
var G__8741 = chunk__8737;
var G__8742 = count__8738;
var G__8743 = (i__8739 + (1));
seq__8736 = G__8740;
chunk__8737 = G__8741;
count__8738 = G__8742;
i__8739 = G__8743;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8736);
if(temp__4425__auto__){
var seq__8736__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8736__$1)){
var c__8214__auto__ = cljs.core.chunk_first.call(null,seq__8736__$1);
var G__8744 = cljs.core.chunk_rest.call(null,seq__8736__$1);
var G__8745 = c__8214__auto__;
var G__8746 = cljs.core.count.call(null,c__8214__auto__);
var G__8747 = (0);
seq__8736 = G__8744;
chunk__8737 = G__8745;
count__8738 = G__8746;
i__8739 = G__8747;
continue;
} else {
var child = cljs.core.first.call(null,seq__8736__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__8748 = cljs.core.next.call(null,seq__8736__$1);
var G__8749 = null;
var G__8750 = (0);
var G__8751 = (0);
seq__8736 = G__8748;
chunk__8737 = G__8749;
count__8738 = G__8750;
i__8739 = G__8751;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.core.restore_leading_whitespace_BANG_ = (function domina$core$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.core.html_to_dom = (function domina$core$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.core.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__8753 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__8753,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__8753,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__8753,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__8754 = wrapper.lastChild;
var G__8755 = (level - (1));
wrapper = G__8754;
level = G__8755;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.core.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__7399__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__7399__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__7399__auto__;
}
})())){
domina.core.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.core.string_to_dom = (function domina$core$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.core.re_html,s))){
return domina.core.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});
domina.core.nodes;
domina.core.single_node;

/**
 * @interface
 */
domina.core.DomContent = function(){};

/**
 * Returns the content as a sequence of nodes.
 */
domina.core.nodes = (function domina$core$nodes(content){
if((!((content == null))) && (!((content.domina$core$DomContent$nodes$arity$1 == null)))){
return content.domina$core$DomContent$nodes$arity$1(content);
} else {
var x__8066__auto__ = (((content == null))?null:content);
var m__8067__auto__ = (domina.core.nodes[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,content);
} else {
var m__8067__auto____$1 = (domina.core.nodes["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.core.single_node = (function domina$core$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$core$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$core$DomContent$single_node$arity$1(nodeseq);
} else {
var x__8066__auto__ = (((nodeseq == null))?null:nodeseq);
var m__8067__auto__ = (domina.core.single_node[goog.typeOf(x__8066__auto__)]);
if(!((m__8067__auto__ == null))){
return m__8067__auto__.call(null,nodeseq);
} else {
var m__8067__auto____$1 = (domina.core.single_node["_"]);
if(!((m__8067__auto____$1 == null))){
return m__8067__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__8476__auto__ = [];
var len__8469__auto___8757 = arguments.length;
var i__8470__auto___8758 = (0);
while(true){
if((i__8470__auto___8758 < len__8469__auto___8757)){
args__8476__auto__.push((arguments[i__8470__auto___8758]));

var G__8759 = (i__8470__auto___8758 + (1));
i__8470__auto___8758 = G__8759;
continue;
} else {
}
break;
}

var argseq__8477__auto__ = ((((0) < args__8476__auto__.length))?(new cljs.core.IndexedSeq(args__8476__auto__.slice((0)),(0))):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__8477__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__7399__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__7399__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__7399__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq8756){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8756));
});
domina.core.log = (function domina$core$log(var_args){
var args__8476__auto__ = [];
var len__8469__auto___8761 = arguments.length;
var i__8470__auto___8762 = (0);
while(true){
if((i__8470__auto___8762 < len__8469__auto___8761)){
args__8476__auto__.push((arguments[i__8470__auto___8762]));

var G__8763 = (i__8470__auto___8762 + (1));
i__8470__auto___8762 = G__8763;
continue;
} else {
}
break;
}

var argseq__8477__auto__ = ((((0) < args__8476__auto__.length))?(new cljs.core.IndexedSeq(args__8476__auto__.slice((0)),(0))):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__8477__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq8760){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8760));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.core.by_id = (function domina$core$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
domina.core.normalize_seq;
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.core.by_class = (function domina$core$by_class(class_name){
return domina.core.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.core.children = (function domina$core$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.core.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.core.common_ancestor = (function domina$core$common_ancestor(var_args){
var args__8476__auto__ = [];
var len__8469__auto___8765 = arguments.length;
var i__8470__auto___8766 = (0);
while(true){
if((i__8470__auto___8766 < len__8469__auto___8765)){
args__8476__auto__.push((arguments[i__8470__auto___8766]));

var G__8767 = (i__8470__auto___8766 + (1));
i__8470__auto___8766 = G__8767;
continue;
} else {
}
break;
}

var argseq__8477__auto__ = ((((0) < args__8476__auto__.length))?(new cljs.core.IndexedSeq(args__8476__auto__.slice((0)),(0))):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__8477__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq8764){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8764));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.core.ancestor_QMARK_ = (function domina$core$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.core.common_ancestor.call(null,ancestor_content,descendant_content),domina.core.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.core.clone = (function domina$core$clone(content){
return cljs.core.map.call(null,(function (p1__8768_SHARP_){
return p1__8768_SHARP_.cloneNode(true);
}),domina.core.nodes.call(null,content));
});
domina.core.apply_with_cloning;
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.append_BANG_ = (function domina$core$append_BANG_(parent_content,child_content){
domina.core.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.insert_BANG_ = (function domina$core$insert_BANG_(parent_content,child_content,idx){
domina.core.apply_with_cloning.call(null,(function (p1__8769_SHARP_,p2__8770_SHARP_){
return goog.dom.insertChildAt(p1__8769_SHARP_,p2__8770_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.core.prepend_BANG_ = (function domina$core$prepend_BANG_(parent_content,child_content){
domina.core.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_before_BANG_ = (function domina$core$insert_before_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8772_SHARP_,p2__8771_SHARP_){
return goog.dom.insertSiblingBefore(p2__8771_SHARP_,p1__8772_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8774_SHARP_,p2__8773_SHARP_){
return goog.dom.insertSiblingAfter(p2__8773_SHARP_,p1__8774_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__8776_SHARP_,p2__8775_SHARP_){
return goog.dom.replaceNode(p2__8775_SHARP_,p1__8776_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.core.detach_BANG_ = (function domina$core$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.core.destroy_BANG_ = (function domina$core$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.core.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.core.destroy_children_BANG_ = (function domina$core$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.core.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.core.style = (function domina$core$style(content,name){
var s = goog.style.getStyle(domina.core.single_node.call(null,content),cljs.core.name.call(null,name));
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.core.attr = (function domina$core$attr(content,name){
return domina.core.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_style_BANG_ = (function domina$core$set_style_BANG_(var_args){
var args__8476__auto__ = [];
var len__8469__auto___8784 = arguments.length;
var i__8470__auto___8785 = (0);
while(true){
if((i__8470__auto___8785 < len__8469__auto___8784)){
args__8476__auto__.push((arguments[i__8470__auto___8785]));

var G__8786 = (i__8470__auto___8785 + (1));
i__8470__auto___8785 = G__8786;
continue;
} else {
}
break;
}

var argseq__8477__auto__ = ((((2) < args__8476__auto__.length))?(new cljs.core.IndexedSeq(args__8476__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8477__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8780_8787 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8781_8788 = null;
var count__8782_8789 = (0);
var i__8783_8790 = (0);
while(true){
if((i__8783_8790 < count__8782_8789)){
var n_8791 = cljs.core._nth.call(null,chunk__8781_8788,i__8783_8790);
goog.style.setStyle(n_8791,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8792 = seq__8780_8787;
var G__8793 = chunk__8781_8788;
var G__8794 = count__8782_8789;
var G__8795 = (i__8783_8790 + (1));
seq__8780_8787 = G__8792;
chunk__8781_8788 = G__8793;
count__8782_8789 = G__8794;
i__8783_8790 = G__8795;
continue;
} else {
var temp__4425__auto___8796 = cljs.core.seq.call(null,seq__8780_8787);
if(temp__4425__auto___8796){
var seq__8780_8797__$1 = temp__4425__auto___8796;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8780_8797__$1)){
var c__8214__auto___8798 = cljs.core.chunk_first.call(null,seq__8780_8797__$1);
var G__8799 = cljs.core.chunk_rest.call(null,seq__8780_8797__$1);
var G__8800 = c__8214__auto___8798;
var G__8801 = cljs.core.count.call(null,c__8214__auto___8798);
var G__8802 = (0);
seq__8780_8787 = G__8799;
chunk__8781_8788 = G__8800;
count__8782_8789 = G__8801;
i__8783_8790 = G__8802;
continue;
} else {
var n_8803 = cljs.core.first.call(null,seq__8780_8797__$1);
goog.style.setStyle(n_8803,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8804 = cljs.core.next.call(null,seq__8780_8797__$1);
var G__8805 = null;
var G__8806 = (0);
var G__8807 = (0);
seq__8780_8787 = G__8804;
chunk__8781_8788 = G__8805;
count__8782_8789 = G__8806;
i__8783_8790 = G__8807;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq8777){
var G__8778 = cljs.core.first.call(null,seq8777);
var seq8777__$1 = cljs.core.next.call(null,seq8777);
var G__8779 = cljs.core.first.call(null,seq8777__$1);
var seq8777__$2 = cljs.core.next.call(null,seq8777__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8778,G__8779,seq8777__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__8476__auto__ = [];
var len__8469__auto___8815 = arguments.length;
var i__8470__auto___8816 = (0);
while(true){
if((i__8470__auto___8816 < len__8469__auto___8815)){
args__8476__auto__.push((arguments[i__8470__auto___8816]));

var G__8817 = (i__8470__auto___8816 + (1));
i__8470__auto___8816 = G__8817;
continue;
} else {
}
break;
}

var argseq__8477__auto__ = ((((2) < args__8476__auto__.length))?(new cljs.core.IndexedSeq(args__8476__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8477__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__8811_8818 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8812_8819 = null;
var count__8813_8820 = (0);
var i__8814_8821 = (0);
while(true){
if((i__8814_8821 < count__8813_8820)){
var n_8822 = cljs.core._nth.call(null,chunk__8812_8819,i__8814_8821);
n_8822.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8823 = seq__8811_8818;
var G__8824 = chunk__8812_8819;
var G__8825 = count__8813_8820;
var G__8826 = (i__8814_8821 + (1));
seq__8811_8818 = G__8823;
chunk__8812_8819 = G__8824;
count__8813_8820 = G__8825;
i__8814_8821 = G__8826;
continue;
} else {
var temp__4425__auto___8827 = cljs.core.seq.call(null,seq__8811_8818);
if(temp__4425__auto___8827){
var seq__8811_8828__$1 = temp__4425__auto___8827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8811_8828__$1)){
var c__8214__auto___8829 = cljs.core.chunk_first.call(null,seq__8811_8828__$1);
var G__8830 = cljs.core.chunk_rest.call(null,seq__8811_8828__$1);
var G__8831 = c__8214__auto___8829;
var G__8832 = cljs.core.count.call(null,c__8214__auto___8829);
var G__8833 = (0);
seq__8811_8818 = G__8830;
chunk__8812_8819 = G__8831;
count__8813_8820 = G__8832;
i__8814_8821 = G__8833;
continue;
} else {
var n_8834 = cljs.core.first.call(null,seq__8811_8828__$1);
n_8834.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__8835 = cljs.core.next.call(null,seq__8811_8828__$1);
var G__8836 = null;
var G__8837 = (0);
var G__8838 = (0);
seq__8811_8818 = G__8835;
chunk__8812_8819 = G__8836;
count__8813_8820 = G__8837;
i__8814_8821 = G__8838;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.core.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq8808){
var G__8809 = cljs.core.first.call(null,seq8808);
var seq8808__$1 = cljs.core.next.call(null,seq8808);
var G__8810 = cljs.core.first.call(null,seq8808__$1);
var seq8808__$2 = cljs.core.next.call(null,seq8808__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8809,G__8810,seq8808__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__8843_8847 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8844_8848 = null;
var count__8845_8849 = (0);
var i__8846_8850 = (0);
while(true){
if((i__8846_8850 < count__8845_8849)){
var n_8851 = cljs.core._nth.call(null,chunk__8844_8848,i__8846_8850);
n_8851.removeAttribute(cljs.core.name.call(null,name));

var G__8852 = seq__8843_8847;
var G__8853 = chunk__8844_8848;
var G__8854 = count__8845_8849;
var G__8855 = (i__8846_8850 + (1));
seq__8843_8847 = G__8852;
chunk__8844_8848 = G__8853;
count__8845_8849 = G__8854;
i__8846_8850 = G__8855;
continue;
} else {
var temp__4425__auto___8856 = cljs.core.seq.call(null,seq__8843_8847);
if(temp__4425__auto___8856){
var seq__8843_8857__$1 = temp__4425__auto___8856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8843_8857__$1)){
var c__8214__auto___8858 = cljs.core.chunk_first.call(null,seq__8843_8857__$1);
var G__8859 = cljs.core.chunk_rest.call(null,seq__8843_8857__$1);
var G__8860 = c__8214__auto___8858;
var G__8861 = cljs.core.count.call(null,c__8214__auto___8858);
var G__8862 = (0);
seq__8843_8847 = G__8859;
chunk__8844_8848 = G__8860;
count__8845_8849 = G__8861;
i__8846_8850 = G__8862;
continue;
} else {
var n_8863 = cljs.core.first.call(null,seq__8843_8857__$1);
n_8863.removeAttribute(cljs.core.name.call(null,name));

var G__8864 = cljs.core.next.call(null,seq__8843_8857__$1);
var G__8865 = null;
var G__8866 = (0);
var G__8867 = (0);
seq__8843_8847 = G__8864;
chunk__8844_8848 = G__8865;
count__8845_8849 = G__8866;
i__8846_8850 = G__8867;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.core.parse_style_attributes = (function domina$core$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__8869 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__8869,(0),null);
var v = cljs.core.nth.call(null,vec__8869,(1),null);
if(cljs.core.truth_((function (){var and__7399__auto__ = k;
if(cljs.core.truth_(and__7399__auto__)){
return v;
} else {
return and__7399__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.core.styles = (function domina$core$styles(content){
var style = domina.core.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.core.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.core.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.core.attrs = (function domina$core$attrs(content){
var node = domina.core.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__8870_SHARP_){
var attr = attrs__$1.item(p1__8870_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.core.set_styles_BANG_ = (function domina$core$set_styles_BANG_(content,styles){
var seq__8877_8883 = cljs.core.seq.call(null,styles);
var chunk__8878_8884 = null;
var count__8879_8885 = (0);
var i__8880_8886 = (0);
while(true){
if((i__8880_8886 < count__8879_8885)){
var vec__8881_8887 = cljs.core._nth.call(null,chunk__8878_8884,i__8880_8886);
var name_8888 = cljs.core.nth.call(null,vec__8881_8887,(0),null);
var value_8889 = cljs.core.nth.call(null,vec__8881_8887,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8888,value_8889);

var G__8890 = seq__8877_8883;
var G__8891 = chunk__8878_8884;
var G__8892 = count__8879_8885;
var G__8893 = (i__8880_8886 + (1));
seq__8877_8883 = G__8890;
chunk__8878_8884 = G__8891;
count__8879_8885 = G__8892;
i__8880_8886 = G__8893;
continue;
} else {
var temp__4425__auto___8894 = cljs.core.seq.call(null,seq__8877_8883);
if(temp__4425__auto___8894){
var seq__8877_8895__$1 = temp__4425__auto___8894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8877_8895__$1)){
var c__8214__auto___8896 = cljs.core.chunk_first.call(null,seq__8877_8895__$1);
var G__8897 = cljs.core.chunk_rest.call(null,seq__8877_8895__$1);
var G__8898 = c__8214__auto___8896;
var G__8899 = cljs.core.count.call(null,c__8214__auto___8896);
var G__8900 = (0);
seq__8877_8883 = G__8897;
chunk__8878_8884 = G__8898;
count__8879_8885 = G__8899;
i__8880_8886 = G__8900;
continue;
} else {
var vec__8882_8901 = cljs.core.first.call(null,seq__8877_8895__$1);
var name_8902 = cljs.core.nth.call(null,vec__8882_8901,(0),null);
var value_8903 = cljs.core.nth.call(null,vec__8882_8901,(1),null);
domina.core.set_style_BANG_.call(null,content,name_8902,value_8903);

var G__8904 = cljs.core.next.call(null,seq__8877_8895__$1);
var G__8905 = null;
var G__8906 = (0);
var G__8907 = (0);
seq__8877_8883 = G__8904;
chunk__8878_8884 = G__8905;
count__8879_8885 = G__8906;
i__8880_8886 = G__8907;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attrs_BANG_ = (function domina$core$set_attrs_BANG_(content,attrs){
var seq__8914_8920 = cljs.core.seq.call(null,attrs);
var chunk__8915_8921 = null;
var count__8916_8922 = (0);
var i__8917_8923 = (0);
while(true){
if((i__8917_8923 < count__8916_8922)){
var vec__8918_8924 = cljs.core._nth.call(null,chunk__8915_8921,i__8917_8923);
var name_8925 = cljs.core.nth.call(null,vec__8918_8924,(0),null);
var value_8926 = cljs.core.nth.call(null,vec__8918_8924,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8925,value_8926);

var G__8927 = seq__8914_8920;
var G__8928 = chunk__8915_8921;
var G__8929 = count__8916_8922;
var G__8930 = (i__8917_8923 + (1));
seq__8914_8920 = G__8927;
chunk__8915_8921 = G__8928;
count__8916_8922 = G__8929;
i__8917_8923 = G__8930;
continue;
} else {
var temp__4425__auto___8931 = cljs.core.seq.call(null,seq__8914_8920);
if(temp__4425__auto___8931){
var seq__8914_8932__$1 = temp__4425__auto___8931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8914_8932__$1)){
var c__8214__auto___8933 = cljs.core.chunk_first.call(null,seq__8914_8932__$1);
var G__8934 = cljs.core.chunk_rest.call(null,seq__8914_8932__$1);
var G__8935 = c__8214__auto___8933;
var G__8936 = cljs.core.count.call(null,c__8214__auto___8933);
var G__8937 = (0);
seq__8914_8920 = G__8934;
chunk__8915_8921 = G__8935;
count__8916_8922 = G__8936;
i__8917_8923 = G__8937;
continue;
} else {
var vec__8919_8938 = cljs.core.first.call(null,seq__8914_8932__$1);
var name_8939 = cljs.core.nth.call(null,vec__8919_8938,(0),null);
var value_8940 = cljs.core.nth.call(null,vec__8919_8938,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8939,value_8940);

var G__8941 = cljs.core.next.call(null,seq__8914_8932__$1);
var G__8942 = null;
var G__8943 = (0);
var G__8944 = (0);
seq__8914_8920 = G__8941;
chunk__8915_8921 = G__8942;
count__8916_8922 = G__8943;
i__8917_8923 = G__8944;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.core.has_class_QMARK_ = (function domina$core$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.core.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.core.add_class_BANG_ = (function domina$core$add_class_BANG_(content,class$){
var seq__8949_8953 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8950_8954 = null;
var count__8951_8955 = (0);
var i__8952_8956 = (0);
while(true){
if((i__8952_8956 < count__8951_8955)){
var node_8957 = cljs.core._nth.call(null,chunk__8950_8954,i__8952_8956);
goog.dom.classes.add(node_8957,class$);

var G__8958 = seq__8949_8953;
var G__8959 = chunk__8950_8954;
var G__8960 = count__8951_8955;
var G__8961 = (i__8952_8956 + (1));
seq__8949_8953 = G__8958;
chunk__8950_8954 = G__8959;
count__8951_8955 = G__8960;
i__8952_8956 = G__8961;
continue;
} else {
var temp__4425__auto___8962 = cljs.core.seq.call(null,seq__8949_8953);
if(temp__4425__auto___8962){
var seq__8949_8963__$1 = temp__4425__auto___8962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8949_8963__$1)){
var c__8214__auto___8964 = cljs.core.chunk_first.call(null,seq__8949_8963__$1);
var G__8965 = cljs.core.chunk_rest.call(null,seq__8949_8963__$1);
var G__8966 = c__8214__auto___8964;
var G__8967 = cljs.core.count.call(null,c__8214__auto___8964);
var G__8968 = (0);
seq__8949_8953 = G__8965;
chunk__8950_8954 = G__8966;
count__8951_8955 = G__8967;
i__8952_8956 = G__8968;
continue;
} else {
var node_8969 = cljs.core.first.call(null,seq__8949_8963__$1);
goog.dom.classes.add(node_8969,class$);

var G__8970 = cljs.core.next.call(null,seq__8949_8963__$1);
var G__8971 = null;
var G__8972 = (0);
var G__8973 = (0);
seq__8949_8953 = G__8970;
chunk__8950_8954 = G__8971;
count__8951_8955 = G__8972;
i__8952_8956 = G__8973;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.core.remove_class_BANG_ = (function domina$core$remove_class_BANG_(content,class$){
var seq__8978_8982 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8979_8983 = null;
var count__8980_8984 = (0);
var i__8981_8985 = (0);
while(true){
if((i__8981_8985 < count__8980_8984)){
var node_8986 = cljs.core._nth.call(null,chunk__8979_8983,i__8981_8985);
goog.dom.classes.remove(node_8986,class$);

var G__8987 = seq__8978_8982;
var G__8988 = chunk__8979_8983;
var G__8989 = count__8980_8984;
var G__8990 = (i__8981_8985 + (1));
seq__8978_8982 = G__8987;
chunk__8979_8983 = G__8988;
count__8980_8984 = G__8989;
i__8981_8985 = G__8990;
continue;
} else {
var temp__4425__auto___8991 = cljs.core.seq.call(null,seq__8978_8982);
if(temp__4425__auto___8991){
var seq__8978_8992__$1 = temp__4425__auto___8991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8978_8992__$1)){
var c__8214__auto___8993 = cljs.core.chunk_first.call(null,seq__8978_8992__$1);
var G__8994 = cljs.core.chunk_rest.call(null,seq__8978_8992__$1);
var G__8995 = c__8214__auto___8993;
var G__8996 = cljs.core.count.call(null,c__8214__auto___8993);
var G__8997 = (0);
seq__8978_8982 = G__8994;
chunk__8979_8983 = G__8995;
count__8980_8984 = G__8996;
i__8981_8985 = G__8997;
continue;
} else {
var node_8998 = cljs.core.first.call(null,seq__8978_8992__$1);
goog.dom.classes.remove(node_8998,class$);

var G__8999 = cljs.core.next.call(null,seq__8978_8992__$1);
var G__9000 = null;
var G__9001 = (0);
var G__9002 = (0);
seq__8978_8982 = G__8999;
chunk__8979_8983 = G__9000;
count__8980_8984 = G__9001;
i__8981_8985 = G__9002;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.core.toggle_class_BANG_ = (function domina$core$toggle_class_BANG_(content,class$){
var seq__9007_9011 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9008_9012 = null;
var count__9009_9013 = (0);
var i__9010_9014 = (0);
while(true){
if((i__9010_9014 < count__9009_9013)){
var node_9015 = cljs.core._nth.call(null,chunk__9008_9012,i__9010_9014);
goog.dom.classes.toggle(node_9015,class$);

var G__9016 = seq__9007_9011;
var G__9017 = chunk__9008_9012;
var G__9018 = count__9009_9013;
var G__9019 = (i__9010_9014 + (1));
seq__9007_9011 = G__9016;
chunk__9008_9012 = G__9017;
count__9009_9013 = G__9018;
i__9010_9014 = G__9019;
continue;
} else {
var temp__4425__auto___9020 = cljs.core.seq.call(null,seq__9007_9011);
if(temp__4425__auto___9020){
var seq__9007_9021__$1 = temp__4425__auto___9020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9007_9021__$1)){
var c__8214__auto___9022 = cljs.core.chunk_first.call(null,seq__9007_9021__$1);
var G__9023 = cljs.core.chunk_rest.call(null,seq__9007_9021__$1);
var G__9024 = c__8214__auto___9022;
var G__9025 = cljs.core.count.call(null,c__8214__auto___9022);
var G__9026 = (0);
seq__9007_9011 = G__9023;
chunk__9008_9012 = G__9024;
count__9009_9013 = G__9025;
i__9010_9014 = G__9026;
continue;
} else {
var node_9027 = cljs.core.first.call(null,seq__9007_9021__$1);
goog.dom.classes.toggle(node_9027,class$);

var G__9028 = cljs.core.next.call(null,seq__9007_9021__$1);
var G__9029 = null;
var G__9030 = (0);
var G__9031 = (0);
seq__9007_9011 = G__9028;
chunk__9008_9012 = G__9029;
count__9009_9013 = G__9030;
i__9010_9014 = G__9031;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.core.classes = (function domina$core$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.core.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.core.set_classes_BANG_ = (function domina$core$set_classes_BANG_(content,classes){
var classes_9040__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__9036_9041 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9037_9042 = null;
var count__9038_9043 = (0);
var i__9039_9044 = (0);
while(true){
if((i__9039_9044 < count__9038_9043)){
var node_9045 = cljs.core._nth.call(null,chunk__9037_9042,i__9039_9044);
goog.dom.classes.set(node_9045,classes_9040__$1);

var G__9046 = seq__9036_9041;
var G__9047 = chunk__9037_9042;
var G__9048 = count__9038_9043;
var G__9049 = (i__9039_9044 + (1));
seq__9036_9041 = G__9046;
chunk__9037_9042 = G__9047;
count__9038_9043 = G__9048;
i__9039_9044 = G__9049;
continue;
} else {
var temp__4425__auto___9050 = cljs.core.seq.call(null,seq__9036_9041);
if(temp__4425__auto___9050){
var seq__9036_9051__$1 = temp__4425__auto___9050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9036_9051__$1)){
var c__8214__auto___9052 = cljs.core.chunk_first.call(null,seq__9036_9051__$1);
var G__9053 = cljs.core.chunk_rest.call(null,seq__9036_9051__$1);
var G__9054 = c__8214__auto___9052;
var G__9055 = cljs.core.count.call(null,c__8214__auto___9052);
var G__9056 = (0);
seq__9036_9041 = G__9053;
chunk__9037_9042 = G__9054;
count__9038_9043 = G__9055;
i__9039_9044 = G__9056;
continue;
} else {
var node_9057 = cljs.core.first.call(null,seq__9036_9051__$1);
goog.dom.classes.set(node_9057,classes_9040__$1);

var G__9058 = cljs.core.next.call(null,seq__9036_9051__$1);
var G__9059 = null;
var G__9060 = (0);
var G__9061 = (0);
seq__9036_9041 = G__9058;
chunk__9037_9042 = G__9059;
count__9038_9043 = G__9060;
i__9039_9044 = G__9061;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.core.text = (function domina$core$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.core.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.core.set_text_BANG_ = (function domina$core$set_text_BANG_(content,value){
var seq__9066_9070 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9067_9071 = null;
var count__9068_9072 = (0);
var i__9069_9073 = (0);
while(true){
if((i__9069_9073 < count__9068_9072)){
var node_9074 = cljs.core._nth.call(null,chunk__9067_9071,i__9069_9073);
goog.dom.setTextContent(node_9074,value);

var G__9075 = seq__9066_9070;
var G__9076 = chunk__9067_9071;
var G__9077 = count__9068_9072;
var G__9078 = (i__9069_9073 + (1));
seq__9066_9070 = G__9075;
chunk__9067_9071 = G__9076;
count__9068_9072 = G__9077;
i__9069_9073 = G__9078;
continue;
} else {
var temp__4425__auto___9079 = cljs.core.seq.call(null,seq__9066_9070);
if(temp__4425__auto___9079){
var seq__9066_9080__$1 = temp__4425__auto___9079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9066_9080__$1)){
var c__8214__auto___9081 = cljs.core.chunk_first.call(null,seq__9066_9080__$1);
var G__9082 = cljs.core.chunk_rest.call(null,seq__9066_9080__$1);
var G__9083 = c__8214__auto___9081;
var G__9084 = cljs.core.count.call(null,c__8214__auto___9081);
var G__9085 = (0);
seq__9066_9070 = G__9082;
chunk__9067_9071 = G__9083;
count__9068_9072 = G__9084;
i__9069_9073 = G__9085;
continue;
} else {
var node_9086 = cljs.core.first.call(null,seq__9066_9080__$1);
goog.dom.setTextContent(node_9086,value);

var G__9087 = cljs.core.next.call(null,seq__9066_9080__$1);
var G__9088 = null;
var G__9089 = (0);
var G__9090 = (0);
seq__9066_9070 = G__9087;
chunk__9067_9071 = G__9088;
count__9068_9072 = G__9089;
i__9069_9073 = G__9090;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.core.value = (function domina$core$value(content){
return goog.dom.forms.getValue(domina.core.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.core.set_value_BANG_ = (function domina$core$set_value_BANG_(content,value){
var seq__9095_9099 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9096_9100 = null;
var count__9097_9101 = (0);
var i__9098_9102 = (0);
while(true){
if((i__9098_9102 < count__9097_9101)){
var node_9103 = cljs.core._nth.call(null,chunk__9096_9100,i__9098_9102);
goog.dom.forms.setValue(node_9103,value);

var G__9104 = seq__9095_9099;
var G__9105 = chunk__9096_9100;
var G__9106 = count__9097_9101;
var G__9107 = (i__9098_9102 + (1));
seq__9095_9099 = G__9104;
chunk__9096_9100 = G__9105;
count__9097_9101 = G__9106;
i__9098_9102 = G__9107;
continue;
} else {
var temp__4425__auto___9108 = cljs.core.seq.call(null,seq__9095_9099);
if(temp__4425__auto___9108){
var seq__9095_9109__$1 = temp__4425__auto___9108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9095_9109__$1)){
var c__8214__auto___9110 = cljs.core.chunk_first.call(null,seq__9095_9109__$1);
var G__9111 = cljs.core.chunk_rest.call(null,seq__9095_9109__$1);
var G__9112 = c__8214__auto___9110;
var G__9113 = cljs.core.count.call(null,c__8214__auto___9110);
var G__9114 = (0);
seq__9095_9099 = G__9111;
chunk__9096_9100 = G__9112;
count__9097_9101 = G__9113;
i__9098_9102 = G__9114;
continue;
} else {
var node_9115 = cljs.core.first.call(null,seq__9095_9109__$1);
goog.dom.forms.setValue(node_9115,value);

var G__9116 = cljs.core.next.call(null,seq__9095_9109__$1);
var G__9117 = null;
var G__9118 = (0);
var G__9119 = (0);
seq__9095_9099 = G__9116;
chunk__9096_9100 = G__9117;
count__9097_9101 = G__9118;
i__9098_9102 = G__9119;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.core.html = (function domina$core$html(content){
return domina.core.single_node.call(null,content).innerHTML;
});
domina.core.replace_children_BANG_ = (function domina$core$replace_children_BANG_(content,inner_content){
return domina.core.append_BANG_.call(null,domina.core.destroy_children_BANG_.call(null,content),inner_content);
});
domina.core.set_inner_html_BANG_ = (function domina$core$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.core.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.core.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__7399__auto__ = allows_inner_html_QMARK_;
if(and__7399__auto__){
var and__7399__auto____$1 = (function (){var or__7411__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__7411__auto__)){
return or__7411__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__7399__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__7399__auto____$1;
}
} else {
return and__7399__auto__;
}
})())){
var value_9130 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__9126_9131 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__9127_9132 = null;
var count__9128_9133 = (0);
var i__9129_9134 = (0);
while(true){
if((i__9129_9134 < count__9128_9133)){
var node_9135 = cljs.core._nth.call(null,chunk__9127_9132,i__9129_9134);
node_9135.innerHTML = value_9130;

var G__9136 = seq__9126_9131;
var G__9137 = chunk__9127_9132;
var G__9138 = count__9128_9133;
var G__9139 = (i__9129_9134 + (1));
seq__9126_9131 = G__9136;
chunk__9127_9132 = G__9137;
count__9128_9133 = G__9138;
i__9129_9134 = G__9139;
continue;
} else {
var temp__4425__auto___9140 = cljs.core.seq.call(null,seq__9126_9131);
if(temp__4425__auto___9140){
var seq__9126_9141__$1 = temp__4425__auto___9140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9126_9141__$1)){
var c__8214__auto___9142 = cljs.core.chunk_first.call(null,seq__9126_9141__$1);
var G__9143 = cljs.core.chunk_rest.call(null,seq__9126_9141__$1);
var G__9144 = c__8214__auto___9142;
var G__9145 = cljs.core.count.call(null,c__8214__auto___9142);
var G__9146 = (0);
seq__9126_9131 = G__9143;
chunk__9127_9132 = G__9144;
count__9128_9133 = G__9145;
i__9129_9134 = G__9146;
continue;
} else {
var node_9147 = cljs.core.first.call(null,seq__9126_9141__$1);
node_9147.innerHTML = value_9130;

var G__9148 = cljs.core.next.call(null,seq__9126_9141__$1);
var G__9149 = null;
var G__9150 = (0);
var G__9151 = (0);
seq__9126_9131 = G__9148;
chunk__9127_9132 = G__9149;
count__9128_9133 = G__9150;
i__9129_9134 = G__9151;
continue;
}
} else {
}
}
break;
}
}catch (e9125){if((e9125 instanceof Error)){
var e_9152 = e9125;
domina.core.replace_children_BANG_.call(null,content,value_9130);
} else {
throw e9125;

}
}} else {
domina.core.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.core.set_html_BANG_ = (function domina$core$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.core.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.core.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.core.get_data = (function domina$core$get_data(var_args){
var args9153 = [];
var len__8469__auto___9156 = arguments.length;
var i__8470__auto___9157 = (0);
while(true){
if((i__8470__auto___9157 < len__8469__auto___9156)){
args9153.push((arguments[i__8470__auto___9157]));

var G__9158 = (i__8470__auto___9157 + (1));
i__8470__auto___9157 = G__9158;
continue;
} else {
}
break;
}

var G__9155 = args9153.length;
switch (G__9155) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9153.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__7399__auto__ = bubble;
if(cljs.core.truth_(and__7399__auto__)){
return (value == null);
} else {
return and__7399__auto__;
}
})())){
var temp__4425__auto__ = domina.core.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.core.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.core.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.core.set_data_BANG_ = (function domina$core$set_data_BANG_(node,key,value){
var m = (function (){var or__7411__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__7411__auto__)){
return or__7411__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.core.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.core.apply_with_cloning = (function domina$core$apply_with_cloning(f,parent_content,child_content){
var parents = domina.core.nodes.call(null,parent_content);
var children = domina.core.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__9166_9170 = cljs.core.seq.call(null,children);
var chunk__9167_9171 = null;
var count__9168_9172 = (0);
var i__9169_9173 = (0);
while(true){
if((i__9169_9173 < count__9168_9172)){
var child_9174 = cljs.core._nth.call(null,chunk__9167_9171,i__9169_9173);
frag.appendChild(child_9174);

var G__9175 = seq__9166_9170;
var G__9176 = chunk__9167_9171;
var G__9177 = count__9168_9172;
var G__9178 = (i__9169_9173 + (1));
seq__9166_9170 = G__9175;
chunk__9167_9171 = G__9176;
count__9168_9172 = G__9177;
i__9169_9173 = G__9178;
continue;
} else {
var temp__4425__auto___9179 = cljs.core.seq.call(null,seq__9166_9170);
if(temp__4425__auto___9179){
var seq__9166_9180__$1 = temp__4425__auto___9179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9166_9180__$1)){
var c__8214__auto___9181 = cljs.core.chunk_first.call(null,seq__9166_9180__$1);
var G__9182 = cljs.core.chunk_rest.call(null,seq__9166_9180__$1);
var G__9183 = c__8214__auto___9181;
var G__9184 = cljs.core.count.call(null,c__8214__auto___9181);
var G__9185 = (0);
seq__9166_9170 = G__9182;
chunk__9167_9171 = G__9183;
count__9168_9172 = G__9184;
i__9169_9173 = G__9185;
continue;
} else {
var child_9186 = cljs.core.first.call(null,seq__9166_9180__$1);
frag.appendChild(child_9186);

var G__9187 = cljs.core.next.call(null,seq__9166_9180__$1);
var G__9188 = null;
var G__9189 = (0);
var G__9190 = (0);
seq__9166_9170 = G__9187;
chunk__9167_9171 = G__9188;
count__9168_9172 = G__9189;
i__9169_9173 = G__9190;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__9160_SHARP_,p2__9161_SHARP_){
return f.call(null,p1__9160_SHARP_,p2__9161_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args9191 = [];
var len__8469__auto___9194 = arguments.length;
var i__8470__auto___9195 = (0);
while(true){
if((i__8470__auto___9195 < len__8469__auto___9194)){
args9191.push((arguments[i__8470__auto___9195]));

var G__9196 = (i__8470__auto___9195 + (1));
i__8470__auto___9195 = G__9196;
continue;
} else {
}
break;
}

var G__9193 = args9191.length;
switch (G__9193) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9191.length)].join('')));

}
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_item.call(null,nl,(0));
});

domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.core.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.core.lazy_nl_via_array_ref = (function domina$core$lazy_nl_via_array_ref(var_args){
var args9198 = [];
var len__8469__auto___9201 = arguments.length;
var i__8470__auto___9202 = (0);
while(true){
if((i__8470__auto___9202 < len__8469__auto___9201)){
args9198.push((arguments[i__8470__auto___9202]));

var G__9203 = (i__8470__auto___9202 + (1));
i__8470__auto___9202 = G__9203;
continue;
} else {
}
break;
}

var G__9200 = args9198.length;
switch (G__9200) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9198.length)].join('')));

}
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.core.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.core.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.core.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.core.lazy_nodelist = (function domina$core$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.core.lazy_nl_via_item.call(null,nl);
} else {
return domina.core.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.core.array_like_QMARK_ = (function domina$core$array_like_QMARK_(obj){
var and__7399__auto__ = obj;
if(cljs.core.truth_(and__7399__auto__)){
var and__7399__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__7399__auto____$1){
return obj.length;
} else {
return and__7399__auto____$1;
}
} else {
return and__7399__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.core.normalize_seq = (function domina$core$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,list_thing))){
return domina.core.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.core.DomContent["string"] = true);

(domina.core.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.core.nodes.call(null,domina.core.string_to_dom.call(null,s)));
}));

(domina.core.single_node["string"] = (function (s){
return domina.core.single_node.call(null,domina.core.string_to_dom.call(null,s));
}));

(domina.core.DomContent["_"] = true);

(domina.core.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return domina.core.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.core.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.core.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.core.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.core.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=core.js.map
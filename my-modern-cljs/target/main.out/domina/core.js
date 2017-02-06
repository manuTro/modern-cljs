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
var opt_wrapper_6532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6533 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6534 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6534,opt_wrapper_6532,table_section_wrapper_6533,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6533,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6533,cell_wrapper_6534,table_section_wrapper_6533,table_section_wrapper_6533]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4977__auto__ = div.firstChild;
if(cljs.core.truth_(and__4977__auto__)){
return div.firstChild.childNodes;
} else {
return and__4977__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6539 = cljs.core.seq.call(null,tbody);
var chunk__6540 = null;
var count__6541 = (0);
var i__6542 = (0);
while(true){
if((i__6542 < count__6541)){
var child = cljs.core._nth.call(null,chunk__6540,i__6542);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6543 = seq__6539;
var G__6544 = chunk__6540;
var G__6545 = count__6541;
var G__6546 = (i__6542 + (1));
seq__6539 = G__6543;
chunk__6540 = G__6544;
count__6541 = G__6545;
i__6542 = G__6546;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6539);
if(temp__4425__auto__){
var seq__6539__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6539__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6539__$1);
var G__6547 = cljs.core.chunk_rest.call(null,seq__6539__$1);
var G__6548 = c__5792__auto__;
var G__6549 = cljs.core.count.call(null,c__5792__auto__);
var G__6550 = (0);
seq__6539 = G__6547;
chunk__6540 = G__6548;
count__6541 = G__6549;
i__6542 = G__6550;
continue;
} else {
var child = cljs.core.first.call(null,seq__6539__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6551 = cljs.core.next.call(null,seq__6539__$1);
var G__6552 = null;
var G__6553 = (0);
var G__6554 = (0);
seq__6539 = G__6551;
chunk__6540 = G__6552;
count__6541 = G__6553;
i__6542 = G__6554;
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
var vec__6556 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__6556,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6556,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6556,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6557 = wrapper.lastChild;
var G__6558 = (level - (1));
wrapper = G__6557;
level = G__6558;
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

if(cljs.core.truth_((function (){var and__4977__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4977__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__4977__auto__;
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
var x__5644__auto__ = (((content == null))?null:content);
var m__5645__auto__ = (domina.core.nodes[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,content);
} else {
var m__5645__auto____$1 = (domina.core.nodes["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,content);
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
var x__5644__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5645__auto__ = (domina.core.single_node[goog.typeOf(x__5644__auto__)]);
if(!((m__5645__auto__ == null))){
return m__5645__auto__.call(null,nodeseq);
} else {
var m__5645__auto____$1 = (domina.core.single_node["_"]);
if(!((m__5645__auto____$1 == null))){
return m__5645__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6560 = arguments.length;
var i__6048__auto___6561 = (0);
while(true){
if((i__6048__auto___6561 < len__6047__auto___6560)){
args__6054__auto__.push((arguments[i__6048__auto___6561]));

var G__6562 = (i__6048__auto___6561 + (1));
i__6048__auto___6561 = G__6562;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__4977__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__4977__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__4977__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq6559){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6559));
});
domina.core.log = (function domina$core$log(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6564 = arguments.length;
var i__6048__auto___6565 = (0);
while(true){
if((i__6048__auto___6565 < len__6047__auto___6564)){
args__6054__auto__.push((arguments[i__6048__auto___6565]));

var G__6566 = (i__6048__auto___6565 + (1));
i__6048__auto___6565 = G__6566;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq6563){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6563));
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
var args__6054__auto__ = [];
var len__6047__auto___6568 = arguments.length;
var i__6048__auto___6569 = (0);
while(true){
if((i__6048__auto___6569 < len__6047__auto___6568)){
args__6054__auto__.push((arguments[i__6048__auto___6569]));

var G__6570 = (i__6048__auto___6569 + (1));
i__6048__auto___6569 = G__6570;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((0) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((0)),(0))):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__6055__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq6567){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6567));
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
return cljs.core.map.call(null,(function (p1__6571_SHARP_){
return p1__6571_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__6572_SHARP_,p2__6573_SHARP_){
return goog.dom.insertChildAt(p1__6572_SHARP_,p2__6573_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__6575_SHARP_,p2__6574_SHARP_){
return goog.dom.insertSiblingBefore(p2__6574_SHARP_,p1__6575_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6577_SHARP_,p2__6576_SHARP_){
return goog.dom.insertSiblingAfter(p2__6576_SHARP_,p1__6577_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6579_SHARP_,p2__6578_SHARP_){
return goog.dom.replaceNode(p2__6578_SHARP_,p1__6579_SHARP_);
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
var args__6054__auto__ = [];
var len__6047__auto___6587 = arguments.length;
var i__6048__auto___6588 = (0);
while(true){
if((i__6048__auto___6588 < len__6047__auto___6587)){
args__6054__auto__.push((arguments[i__6048__auto___6588]));

var G__6589 = (i__6048__auto___6588 + (1));
i__6048__auto___6588 = G__6589;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6583_6590 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6584_6591 = null;
var count__6585_6592 = (0);
var i__6586_6593 = (0);
while(true){
if((i__6586_6593 < count__6585_6592)){
var n_6594 = cljs.core._nth.call(null,chunk__6584_6591,i__6586_6593);
goog.style.setStyle(n_6594,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6595 = seq__6583_6590;
var G__6596 = chunk__6584_6591;
var G__6597 = count__6585_6592;
var G__6598 = (i__6586_6593 + (1));
seq__6583_6590 = G__6595;
chunk__6584_6591 = G__6596;
count__6585_6592 = G__6597;
i__6586_6593 = G__6598;
continue;
} else {
var temp__4425__auto___6599 = cljs.core.seq.call(null,seq__6583_6590);
if(temp__4425__auto___6599){
var seq__6583_6600__$1 = temp__4425__auto___6599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6583_6600__$1)){
var c__5792__auto___6601 = cljs.core.chunk_first.call(null,seq__6583_6600__$1);
var G__6602 = cljs.core.chunk_rest.call(null,seq__6583_6600__$1);
var G__6603 = c__5792__auto___6601;
var G__6604 = cljs.core.count.call(null,c__5792__auto___6601);
var G__6605 = (0);
seq__6583_6590 = G__6602;
chunk__6584_6591 = G__6603;
count__6585_6592 = G__6604;
i__6586_6593 = G__6605;
continue;
} else {
var n_6606 = cljs.core.first.call(null,seq__6583_6600__$1);
goog.style.setStyle(n_6606,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6607 = cljs.core.next.call(null,seq__6583_6600__$1);
var G__6608 = null;
var G__6609 = (0);
var G__6610 = (0);
seq__6583_6590 = G__6607;
chunk__6584_6591 = G__6608;
count__6585_6592 = G__6609;
i__6586_6593 = G__6610;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6580){
var G__6581 = cljs.core.first.call(null,seq6580);
var seq6580__$1 = cljs.core.next.call(null,seq6580);
var G__6582 = cljs.core.first.call(null,seq6580__$1);
var seq6580__$2 = cljs.core.next.call(null,seq6580__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6581,G__6582,seq6580__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6618 = arguments.length;
var i__6048__auto___6619 = (0);
while(true){
if((i__6048__auto___6619 < len__6047__auto___6618)){
args__6054__auto__.push((arguments[i__6048__auto___6619]));

var G__6620 = (i__6048__auto___6619 + (1));
i__6048__auto___6619 = G__6620;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6614_6621 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6615_6622 = null;
var count__6616_6623 = (0);
var i__6617_6624 = (0);
while(true){
if((i__6617_6624 < count__6616_6623)){
var n_6625 = cljs.core._nth.call(null,chunk__6615_6622,i__6617_6624);
n_6625.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6626 = seq__6614_6621;
var G__6627 = chunk__6615_6622;
var G__6628 = count__6616_6623;
var G__6629 = (i__6617_6624 + (1));
seq__6614_6621 = G__6626;
chunk__6615_6622 = G__6627;
count__6616_6623 = G__6628;
i__6617_6624 = G__6629;
continue;
} else {
var temp__4425__auto___6630 = cljs.core.seq.call(null,seq__6614_6621);
if(temp__4425__auto___6630){
var seq__6614_6631__$1 = temp__4425__auto___6630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6614_6631__$1)){
var c__5792__auto___6632 = cljs.core.chunk_first.call(null,seq__6614_6631__$1);
var G__6633 = cljs.core.chunk_rest.call(null,seq__6614_6631__$1);
var G__6634 = c__5792__auto___6632;
var G__6635 = cljs.core.count.call(null,c__5792__auto___6632);
var G__6636 = (0);
seq__6614_6621 = G__6633;
chunk__6615_6622 = G__6634;
count__6616_6623 = G__6635;
i__6617_6624 = G__6636;
continue;
} else {
var n_6637 = cljs.core.first.call(null,seq__6614_6631__$1);
n_6637.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6638 = cljs.core.next.call(null,seq__6614_6631__$1);
var G__6639 = null;
var G__6640 = (0);
var G__6641 = (0);
seq__6614_6621 = G__6638;
chunk__6615_6622 = G__6639;
count__6616_6623 = G__6640;
i__6617_6624 = G__6641;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6611){
var G__6612 = cljs.core.first.call(null,seq6611);
var seq6611__$1 = cljs.core.next.call(null,seq6611);
var G__6613 = cljs.core.first.call(null,seq6611__$1);
var seq6611__$2 = cljs.core.next.call(null,seq6611__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6612,G__6613,seq6611__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__6646_6650 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6647_6651 = null;
var count__6648_6652 = (0);
var i__6649_6653 = (0);
while(true){
if((i__6649_6653 < count__6648_6652)){
var n_6654 = cljs.core._nth.call(null,chunk__6647_6651,i__6649_6653);
n_6654.removeAttribute(cljs.core.name.call(null,name));

var G__6655 = seq__6646_6650;
var G__6656 = chunk__6647_6651;
var G__6657 = count__6648_6652;
var G__6658 = (i__6649_6653 + (1));
seq__6646_6650 = G__6655;
chunk__6647_6651 = G__6656;
count__6648_6652 = G__6657;
i__6649_6653 = G__6658;
continue;
} else {
var temp__4425__auto___6659 = cljs.core.seq.call(null,seq__6646_6650);
if(temp__4425__auto___6659){
var seq__6646_6660__$1 = temp__4425__auto___6659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6646_6660__$1)){
var c__5792__auto___6661 = cljs.core.chunk_first.call(null,seq__6646_6660__$1);
var G__6662 = cljs.core.chunk_rest.call(null,seq__6646_6660__$1);
var G__6663 = c__5792__auto___6661;
var G__6664 = cljs.core.count.call(null,c__5792__auto___6661);
var G__6665 = (0);
seq__6646_6650 = G__6662;
chunk__6647_6651 = G__6663;
count__6648_6652 = G__6664;
i__6649_6653 = G__6665;
continue;
} else {
var n_6666 = cljs.core.first.call(null,seq__6646_6660__$1);
n_6666.removeAttribute(cljs.core.name.call(null,name));

var G__6667 = cljs.core.next.call(null,seq__6646_6660__$1);
var G__6668 = null;
var G__6669 = (0);
var G__6670 = (0);
seq__6646_6650 = G__6667;
chunk__6647_6651 = G__6668;
count__6648_6652 = G__6669;
i__6649_6653 = G__6670;
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
var vec__6672 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6672,(0),null);
var v = cljs.core.nth.call(null,vec__6672,(1),null);
if(cljs.core.truth_((function (){var and__4977__auto__ = k;
if(cljs.core.truth_(and__4977__auto__)){
return v;
} else {
return and__4977__auto__;
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
return (function (p1__6673_SHARP_){
var attr = attrs__$1.item(p1__6673_SHARP_);
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
var seq__6680_6686 = cljs.core.seq.call(null,styles);
var chunk__6681_6687 = null;
var count__6682_6688 = (0);
var i__6683_6689 = (0);
while(true){
if((i__6683_6689 < count__6682_6688)){
var vec__6684_6690 = cljs.core._nth.call(null,chunk__6681_6687,i__6683_6689);
var name_6691 = cljs.core.nth.call(null,vec__6684_6690,(0),null);
var value_6692 = cljs.core.nth.call(null,vec__6684_6690,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6691,value_6692);

var G__6693 = seq__6680_6686;
var G__6694 = chunk__6681_6687;
var G__6695 = count__6682_6688;
var G__6696 = (i__6683_6689 + (1));
seq__6680_6686 = G__6693;
chunk__6681_6687 = G__6694;
count__6682_6688 = G__6695;
i__6683_6689 = G__6696;
continue;
} else {
var temp__4425__auto___6697 = cljs.core.seq.call(null,seq__6680_6686);
if(temp__4425__auto___6697){
var seq__6680_6698__$1 = temp__4425__auto___6697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6680_6698__$1)){
var c__5792__auto___6699 = cljs.core.chunk_first.call(null,seq__6680_6698__$1);
var G__6700 = cljs.core.chunk_rest.call(null,seq__6680_6698__$1);
var G__6701 = c__5792__auto___6699;
var G__6702 = cljs.core.count.call(null,c__5792__auto___6699);
var G__6703 = (0);
seq__6680_6686 = G__6700;
chunk__6681_6687 = G__6701;
count__6682_6688 = G__6702;
i__6683_6689 = G__6703;
continue;
} else {
var vec__6685_6704 = cljs.core.first.call(null,seq__6680_6698__$1);
var name_6705 = cljs.core.nth.call(null,vec__6685_6704,(0),null);
var value_6706 = cljs.core.nth.call(null,vec__6685_6704,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6705,value_6706);

var G__6707 = cljs.core.next.call(null,seq__6680_6698__$1);
var G__6708 = null;
var G__6709 = (0);
var G__6710 = (0);
seq__6680_6686 = G__6707;
chunk__6681_6687 = G__6708;
count__6682_6688 = G__6709;
i__6683_6689 = G__6710;
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
var seq__6717_6723 = cljs.core.seq.call(null,attrs);
var chunk__6718_6724 = null;
var count__6719_6725 = (0);
var i__6720_6726 = (0);
while(true){
if((i__6720_6726 < count__6719_6725)){
var vec__6721_6727 = cljs.core._nth.call(null,chunk__6718_6724,i__6720_6726);
var name_6728 = cljs.core.nth.call(null,vec__6721_6727,(0),null);
var value_6729 = cljs.core.nth.call(null,vec__6721_6727,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6728,value_6729);

var G__6730 = seq__6717_6723;
var G__6731 = chunk__6718_6724;
var G__6732 = count__6719_6725;
var G__6733 = (i__6720_6726 + (1));
seq__6717_6723 = G__6730;
chunk__6718_6724 = G__6731;
count__6719_6725 = G__6732;
i__6720_6726 = G__6733;
continue;
} else {
var temp__4425__auto___6734 = cljs.core.seq.call(null,seq__6717_6723);
if(temp__4425__auto___6734){
var seq__6717_6735__$1 = temp__4425__auto___6734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6717_6735__$1)){
var c__5792__auto___6736 = cljs.core.chunk_first.call(null,seq__6717_6735__$1);
var G__6737 = cljs.core.chunk_rest.call(null,seq__6717_6735__$1);
var G__6738 = c__5792__auto___6736;
var G__6739 = cljs.core.count.call(null,c__5792__auto___6736);
var G__6740 = (0);
seq__6717_6723 = G__6737;
chunk__6718_6724 = G__6738;
count__6719_6725 = G__6739;
i__6720_6726 = G__6740;
continue;
} else {
var vec__6722_6741 = cljs.core.first.call(null,seq__6717_6735__$1);
var name_6742 = cljs.core.nth.call(null,vec__6722_6741,(0),null);
var value_6743 = cljs.core.nth.call(null,vec__6722_6741,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6742,value_6743);

var G__6744 = cljs.core.next.call(null,seq__6717_6735__$1);
var G__6745 = null;
var G__6746 = (0);
var G__6747 = (0);
seq__6717_6723 = G__6744;
chunk__6718_6724 = G__6745;
count__6719_6725 = G__6746;
i__6720_6726 = G__6747;
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
var seq__6752_6756 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6753_6757 = null;
var count__6754_6758 = (0);
var i__6755_6759 = (0);
while(true){
if((i__6755_6759 < count__6754_6758)){
var node_6760 = cljs.core._nth.call(null,chunk__6753_6757,i__6755_6759);
goog.dom.classes.add(node_6760,class$);

var G__6761 = seq__6752_6756;
var G__6762 = chunk__6753_6757;
var G__6763 = count__6754_6758;
var G__6764 = (i__6755_6759 + (1));
seq__6752_6756 = G__6761;
chunk__6753_6757 = G__6762;
count__6754_6758 = G__6763;
i__6755_6759 = G__6764;
continue;
} else {
var temp__4425__auto___6765 = cljs.core.seq.call(null,seq__6752_6756);
if(temp__4425__auto___6765){
var seq__6752_6766__$1 = temp__4425__auto___6765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6752_6766__$1)){
var c__5792__auto___6767 = cljs.core.chunk_first.call(null,seq__6752_6766__$1);
var G__6768 = cljs.core.chunk_rest.call(null,seq__6752_6766__$1);
var G__6769 = c__5792__auto___6767;
var G__6770 = cljs.core.count.call(null,c__5792__auto___6767);
var G__6771 = (0);
seq__6752_6756 = G__6768;
chunk__6753_6757 = G__6769;
count__6754_6758 = G__6770;
i__6755_6759 = G__6771;
continue;
} else {
var node_6772 = cljs.core.first.call(null,seq__6752_6766__$1);
goog.dom.classes.add(node_6772,class$);

var G__6773 = cljs.core.next.call(null,seq__6752_6766__$1);
var G__6774 = null;
var G__6775 = (0);
var G__6776 = (0);
seq__6752_6756 = G__6773;
chunk__6753_6757 = G__6774;
count__6754_6758 = G__6775;
i__6755_6759 = G__6776;
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
var seq__6781_6785 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6782_6786 = null;
var count__6783_6787 = (0);
var i__6784_6788 = (0);
while(true){
if((i__6784_6788 < count__6783_6787)){
var node_6789 = cljs.core._nth.call(null,chunk__6782_6786,i__6784_6788);
goog.dom.classes.remove(node_6789,class$);

var G__6790 = seq__6781_6785;
var G__6791 = chunk__6782_6786;
var G__6792 = count__6783_6787;
var G__6793 = (i__6784_6788 + (1));
seq__6781_6785 = G__6790;
chunk__6782_6786 = G__6791;
count__6783_6787 = G__6792;
i__6784_6788 = G__6793;
continue;
} else {
var temp__4425__auto___6794 = cljs.core.seq.call(null,seq__6781_6785);
if(temp__4425__auto___6794){
var seq__6781_6795__$1 = temp__4425__auto___6794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6781_6795__$1)){
var c__5792__auto___6796 = cljs.core.chunk_first.call(null,seq__6781_6795__$1);
var G__6797 = cljs.core.chunk_rest.call(null,seq__6781_6795__$1);
var G__6798 = c__5792__auto___6796;
var G__6799 = cljs.core.count.call(null,c__5792__auto___6796);
var G__6800 = (0);
seq__6781_6785 = G__6797;
chunk__6782_6786 = G__6798;
count__6783_6787 = G__6799;
i__6784_6788 = G__6800;
continue;
} else {
var node_6801 = cljs.core.first.call(null,seq__6781_6795__$1);
goog.dom.classes.remove(node_6801,class$);

var G__6802 = cljs.core.next.call(null,seq__6781_6795__$1);
var G__6803 = null;
var G__6804 = (0);
var G__6805 = (0);
seq__6781_6785 = G__6802;
chunk__6782_6786 = G__6803;
count__6783_6787 = G__6804;
i__6784_6788 = G__6805;
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
var seq__6810_6814 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6811_6815 = null;
var count__6812_6816 = (0);
var i__6813_6817 = (0);
while(true){
if((i__6813_6817 < count__6812_6816)){
var node_6818 = cljs.core._nth.call(null,chunk__6811_6815,i__6813_6817);
goog.dom.classes.toggle(node_6818,class$);

var G__6819 = seq__6810_6814;
var G__6820 = chunk__6811_6815;
var G__6821 = count__6812_6816;
var G__6822 = (i__6813_6817 + (1));
seq__6810_6814 = G__6819;
chunk__6811_6815 = G__6820;
count__6812_6816 = G__6821;
i__6813_6817 = G__6822;
continue;
} else {
var temp__4425__auto___6823 = cljs.core.seq.call(null,seq__6810_6814);
if(temp__4425__auto___6823){
var seq__6810_6824__$1 = temp__4425__auto___6823;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6810_6824__$1)){
var c__5792__auto___6825 = cljs.core.chunk_first.call(null,seq__6810_6824__$1);
var G__6826 = cljs.core.chunk_rest.call(null,seq__6810_6824__$1);
var G__6827 = c__5792__auto___6825;
var G__6828 = cljs.core.count.call(null,c__5792__auto___6825);
var G__6829 = (0);
seq__6810_6814 = G__6826;
chunk__6811_6815 = G__6827;
count__6812_6816 = G__6828;
i__6813_6817 = G__6829;
continue;
} else {
var node_6830 = cljs.core.first.call(null,seq__6810_6824__$1);
goog.dom.classes.toggle(node_6830,class$);

var G__6831 = cljs.core.next.call(null,seq__6810_6824__$1);
var G__6832 = null;
var G__6833 = (0);
var G__6834 = (0);
seq__6810_6814 = G__6831;
chunk__6811_6815 = G__6832;
count__6812_6816 = G__6833;
i__6813_6817 = G__6834;
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
var classes_6843__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6839_6844 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6840_6845 = null;
var count__6841_6846 = (0);
var i__6842_6847 = (0);
while(true){
if((i__6842_6847 < count__6841_6846)){
var node_6848 = cljs.core._nth.call(null,chunk__6840_6845,i__6842_6847);
goog.dom.classes.set(node_6848,classes_6843__$1);

var G__6849 = seq__6839_6844;
var G__6850 = chunk__6840_6845;
var G__6851 = count__6841_6846;
var G__6852 = (i__6842_6847 + (1));
seq__6839_6844 = G__6849;
chunk__6840_6845 = G__6850;
count__6841_6846 = G__6851;
i__6842_6847 = G__6852;
continue;
} else {
var temp__4425__auto___6853 = cljs.core.seq.call(null,seq__6839_6844);
if(temp__4425__auto___6853){
var seq__6839_6854__$1 = temp__4425__auto___6853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6839_6854__$1)){
var c__5792__auto___6855 = cljs.core.chunk_first.call(null,seq__6839_6854__$1);
var G__6856 = cljs.core.chunk_rest.call(null,seq__6839_6854__$1);
var G__6857 = c__5792__auto___6855;
var G__6858 = cljs.core.count.call(null,c__5792__auto___6855);
var G__6859 = (0);
seq__6839_6844 = G__6856;
chunk__6840_6845 = G__6857;
count__6841_6846 = G__6858;
i__6842_6847 = G__6859;
continue;
} else {
var node_6860 = cljs.core.first.call(null,seq__6839_6854__$1);
goog.dom.classes.set(node_6860,classes_6843__$1);

var G__6861 = cljs.core.next.call(null,seq__6839_6854__$1);
var G__6862 = null;
var G__6863 = (0);
var G__6864 = (0);
seq__6839_6844 = G__6861;
chunk__6840_6845 = G__6862;
count__6841_6846 = G__6863;
i__6842_6847 = G__6864;
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
var seq__6869_6873 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6870_6874 = null;
var count__6871_6875 = (0);
var i__6872_6876 = (0);
while(true){
if((i__6872_6876 < count__6871_6875)){
var node_6877 = cljs.core._nth.call(null,chunk__6870_6874,i__6872_6876);
goog.dom.setTextContent(node_6877,value);

var G__6878 = seq__6869_6873;
var G__6879 = chunk__6870_6874;
var G__6880 = count__6871_6875;
var G__6881 = (i__6872_6876 + (1));
seq__6869_6873 = G__6878;
chunk__6870_6874 = G__6879;
count__6871_6875 = G__6880;
i__6872_6876 = G__6881;
continue;
} else {
var temp__4425__auto___6882 = cljs.core.seq.call(null,seq__6869_6873);
if(temp__4425__auto___6882){
var seq__6869_6883__$1 = temp__4425__auto___6882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6869_6883__$1)){
var c__5792__auto___6884 = cljs.core.chunk_first.call(null,seq__6869_6883__$1);
var G__6885 = cljs.core.chunk_rest.call(null,seq__6869_6883__$1);
var G__6886 = c__5792__auto___6884;
var G__6887 = cljs.core.count.call(null,c__5792__auto___6884);
var G__6888 = (0);
seq__6869_6873 = G__6885;
chunk__6870_6874 = G__6886;
count__6871_6875 = G__6887;
i__6872_6876 = G__6888;
continue;
} else {
var node_6889 = cljs.core.first.call(null,seq__6869_6883__$1);
goog.dom.setTextContent(node_6889,value);

var G__6890 = cljs.core.next.call(null,seq__6869_6883__$1);
var G__6891 = null;
var G__6892 = (0);
var G__6893 = (0);
seq__6869_6873 = G__6890;
chunk__6870_6874 = G__6891;
count__6871_6875 = G__6892;
i__6872_6876 = G__6893;
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
var seq__6898_6902 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6899_6903 = null;
var count__6900_6904 = (0);
var i__6901_6905 = (0);
while(true){
if((i__6901_6905 < count__6900_6904)){
var node_6906 = cljs.core._nth.call(null,chunk__6899_6903,i__6901_6905);
goog.dom.forms.setValue(node_6906,value);

var G__6907 = seq__6898_6902;
var G__6908 = chunk__6899_6903;
var G__6909 = count__6900_6904;
var G__6910 = (i__6901_6905 + (1));
seq__6898_6902 = G__6907;
chunk__6899_6903 = G__6908;
count__6900_6904 = G__6909;
i__6901_6905 = G__6910;
continue;
} else {
var temp__4425__auto___6911 = cljs.core.seq.call(null,seq__6898_6902);
if(temp__4425__auto___6911){
var seq__6898_6912__$1 = temp__4425__auto___6911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6898_6912__$1)){
var c__5792__auto___6913 = cljs.core.chunk_first.call(null,seq__6898_6912__$1);
var G__6914 = cljs.core.chunk_rest.call(null,seq__6898_6912__$1);
var G__6915 = c__5792__auto___6913;
var G__6916 = cljs.core.count.call(null,c__5792__auto___6913);
var G__6917 = (0);
seq__6898_6902 = G__6914;
chunk__6899_6903 = G__6915;
count__6900_6904 = G__6916;
i__6901_6905 = G__6917;
continue;
} else {
var node_6918 = cljs.core.first.call(null,seq__6898_6912__$1);
goog.dom.forms.setValue(node_6918,value);

var G__6919 = cljs.core.next.call(null,seq__6898_6912__$1);
var G__6920 = null;
var G__6921 = (0);
var G__6922 = (0);
seq__6898_6902 = G__6919;
chunk__6899_6903 = G__6920;
count__6900_6904 = G__6921;
i__6901_6905 = G__6922;
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
if(cljs.core.truth_((function (){var and__4977__auto__ = allows_inner_html_QMARK_;
if(and__4977__auto__){
var and__4977__auto____$1 = (function (){var or__4989__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__4977__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__4977__auto____$1;
}
} else {
return and__4977__auto__;
}
})())){
var value_6933 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__6929_6934 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6930_6935 = null;
var count__6931_6936 = (0);
var i__6932_6937 = (0);
while(true){
if((i__6932_6937 < count__6931_6936)){
var node_6938 = cljs.core._nth.call(null,chunk__6930_6935,i__6932_6937);
node_6938.innerHTML = value_6933;

var G__6939 = seq__6929_6934;
var G__6940 = chunk__6930_6935;
var G__6941 = count__6931_6936;
var G__6942 = (i__6932_6937 + (1));
seq__6929_6934 = G__6939;
chunk__6930_6935 = G__6940;
count__6931_6936 = G__6941;
i__6932_6937 = G__6942;
continue;
} else {
var temp__4425__auto___6943 = cljs.core.seq.call(null,seq__6929_6934);
if(temp__4425__auto___6943){
var seq__6929_6944__$1 = temp__4425__auto___6943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6929_6944__$1)){
var c__5792__auto___6945 = cljs.core.chunk_first.call(null,seq__6929_6944__$1);
var G__6946 = cljs.core.chunk_rest.call(null,seq__6929_6944__$1);
var G__6947 = c__5792__auto___6945;
var G__6948 = cljs.core.count.call(null,c__5792__auto___6945);
var G__6949 = (0);
seq__6929_6934 = G__6946;
chunk__6930_6935 = G__6947;
count__6931_6936 = G__6948;
i__6932_6937 = G__6949;
continue;
} else {
var node_6950 = cljs.core.first.call(null,seq__6929_6944__$1);
node_6950.innerHTML = value_6933;

var G__6951 = cljs.core.next.call(null,seq__6929_6944__$1);
var G__6952 = null;
var G__6953 = (0);
var G__6954 = (0);
seq__6929_6934 = G__6951;
chunk__6930_6935 = G__6952;
count__6931_6936 = G__6953;
i__6932_6937 = G__6954;
continue;
}
} else {
}
}
break;
}
}catch (e6928){if((e6928 instanceof Error)){
var e_6955 = e6928;
domina.core.replace_children_BANG_.call(null,content,value_6933);
} else {
throw e6928;

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
var args6956 = [];
var len__6047__auto___6959 = arguments.length;
var i__6048__auto___6960 = (0);
while(true){
if((i__6048__auto___6960 < len__6047__auto___6959)){
args6956.push((arguments[i__6048__auto___6960]));

var G__6961 = (i__6048__auto___6960 + (1));
i__6048__auto___6960 = G__6961;
continue;
} else {
}
break;
}

var G__6958 = args6956.length;
switch (G__6958) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6956.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4977__auto__ = bubble;
if(cljs.core.truth_(and__4977__auto__)){
return (value == null);
} else {
return and__4977__auto__;
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
var m = (function (){var or__4989__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4989__auto__)){
return or__4989__auto__;
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
var seq__6969_6973 = cljs.core.seq.call(null,children);
var chunk__6970_6974 = null;
var count__6971_6975 = (0);
var i__6972_6976 = (0);
while(true){
if((i__6972_6976 < count__6971_6975)){
var child_6977 = cljs.core._nth.call(null,chunk__6970_6974,i__6972_6976);
frag.appendChild(child_6977);

var G__6978 = seq__6969_6973;
var G__6979 = chunk__6970_6974;
var G__6980 = count__6971_6975;
var G__6981 = (i__6972_6976 + (1));
seq__6969_6973 = G__6978;
chunk__6970_6974 = G__6979;
count__6971_6975 = G__6980;
i__6972_6976 = G__6981;
continue;
} else {
var temp__4425__auto___6982 = cljs.core.seq.call(null,seq__6969_6973);
if(temp__4425__auto___6982){
var seq__6969_6983__$1 = temp__4425__auto___6982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6969_6983__$1)){
var c__5792__auto___6984 = cljs.core.chunk_first.call(null,seq__6969_6983__$1);
var G__6985 = cljs.core.chunk_rest.call(null,seq__6969_6983__$1);
var G__6986 = c__5792__auto___6984;
var G__6987 = cljs.core.count.call(null,c__5792__auto___6984);
var G__6988 = (0);
seq__6969_6973 = G__6985;
chunk__6970_6974 = G__6986;
count__6971_6975 = G__6987;
i__6972_6976 = G__6988;
continue;
} else {
var child_6989 = cljs.core.first.call(null,seq__6969_6983__$1);
frag.appendChild(child_6989);

var G__6990 = cljs.core.next.call(null,seq__6969_6983__$1);
var G__6991 = null;
var G__6992 = (0);
var G__6993 = (0);
seq__6969_6973 = G__6990;
chunk__6970_6974 = G__6991;
count__6971_6975 = G__6992;
i__6972_6976 = G__6993;
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
return (function (p1__6963_SHARP_,p2__6964_SHARP_){
return f.call(null,p1__6963_SHARP_,p2__6964_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args6994 = [];
var len__6047__auto___6997 = arguments.length;
var i__6048__auto___6998 = (0);
while(true){
if((i__6048__auto___6998 < len__6047__auto___6997)){
args6994.push((arguments[i__6048__auto___6998]));

var G__6999 = (i__6048__auto___6998 + (1));
i__6048__auto___6998 = G__6999;
continue;
} else {
}
break;
}

var G__6996 = args6994.length;
switch (G__6996) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6994.length)].join('')));

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
var args7001 = [];
var len__6047__auto___7004 = arguments.length;
var i__6048__auto___7005 = (0);
while(true){
if((i__6048__auto___7005 < len__6047__auto___7004)){
args7001.push((arguments[i__6048__auto___7005]));

var G__7006 = (i__6048__auto___7005 + (1));
i__6048__auto___7005 = G__7006;
continue;
} else {
}
break;
}

var G__7003 = args7001.length;
switch (G__7003) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7001.length)].join('')));

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
var and__4977__auto__ = obj;
if(cljs.core.truth_(and__4977__auto__)){
var and__4977__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4977__auto____$1){
return obj.length;
} else {
return and__4977__auto____$1;
}
} else {
return and__4977__auto__;
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
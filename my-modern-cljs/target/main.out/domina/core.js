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
var opt_wrapper_6488 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6490 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6490,opt_wrapper_6488,table_section_wrapper_6489,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6488,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6489,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6489,cell_wrapper_6490,table_section_wrapper_6489,table_section_wrapper_6489]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4976__auto__ = div.firstChild;
if(cljs.core.truth_(and__4976__auto__)){
return div.firstChild.childNodes;
} else {
return and__4976__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6495 = cljs.core.seq.call(null,tbody);
var chunk__6496 = null;
var count__6497 = (0);
var i__6498 = (0);
while(true){
if((i__6498 < count__6497)){
var child = cljs.core._nth.call(null,chunk__6496,i__6498);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6499 = seq__6495;
var G__6500 = chunk__6496;
var G__6501 = count__6497;
var G__6502 = (i__6498 + (1));
seq__6495 = G__6499;
chunk__6496 = G__6500;
count__6497 = G__6501;
i__6498 = G__6502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6495);
if(temp__4425__auto__){
var seq__6495__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6495__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__6495__$1);
var G__6503 = cljs.core.chunk_rest.call(null,seq__6495__$1);
var G__6504 = c__5791__auto__;
var G__6505 = cljs.core.count.call(null,c__5791__auto__);
var G__6506 = (0);
seq__6495 = G__6503;
chunk__6496 = G__6504;
count__6497 = G__6505;
i__6498 = G__6506;
continue;
} else {
var child = cljs.core.first.call(null,seq__6495__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6507 = cljs.core.next.call(null,seq__6495__$1);
var G__6508 = null;
var G__6509 = (0);
var G__6510 = (0);
seq__6495 = G__6507;
chunk__6496 = G__6508;
count__6497 = G__6509;
i__6498 = G__6510;
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
var vec__6512 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__6512,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6512,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6512,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6513 = wrapper.lastChild;
var G__6514 = (level - (1));
wrapper = G__6513;
level = G__6514;
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

if(cljs.core.truth_((function (){var and__4976__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4976__auto__){
return cljs.core.re_find.call(null,domina.core.re_leading_whitespace,html__$1);
} else {
return and__4976__auto__;
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
var x__5643__auto__ = (((content == null))?null:content);
var m__5644__auto__ = (domina.core.nodes[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,content);
} else {
var m__5644__auto____$1 = (domina.core.nodes["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,content);
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
var x__5643__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5644__auto__ = (domina.core.single_node[goog.typeOf(x__5643__auto__)]);
if(!((m__5644__auto__ == null))){
return m__5644__auto__.call(null,nodeseq);
} else {
var m__5644__auto____$1 = (domina.core.single_node["_"]);
if(!((m__5644__auto____$1 == null))){
return m__5644__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina.core._STAR_debug_STAR_ = true;
domina.core.log_debug = (function domina$core$log_debug(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6516 = arguments.length;
var i__6047__auto___6517 = (0);
while(true){
if((i__6047__auto___6517 < len__6046__auto___6516)){
args__6053__auto__.push((arguments[i__6047__auto___6517]));

var G__6518 = (i__6047__auto___6517 + (1));
i__6047__auto___6517 = G__6518;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__4976__auto__ = domina.core._STAR_debug_STAR_;
if(cljs.core.truth_(and__4976__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__4976__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log_debug.cljs$lang$maxFixedArity = (0);

domina.core.log_debug.cljs$lang$applyTo = (function (seq6515){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6515));
});
domina.core.log = (function domina$core$log(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6520 = arguments.length;
var i__6047__auto___6521 = (0);
while(true){
if((i__6047__auto___6521 < len__6046__auto___6520)){
args__6053__auto__.push((arguments[i__6047__auto___6521]));

var G__6522 = (i__6047__auto___6521 + (1));
i__6047__auto___6521 = G__6522;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.core.log.cljs$lang$maxFixedArity = (0);

domina.core.log.cljs$lang$applyTo = (function (seq6519){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6519));
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
var args__6053__auto__ = [];
var len__6046__auto___6524 = arguments.length;
var i__6047__auto___6525 = (0);
while(true){
if((i__6047__auto___6525 < len__6046__auto___6524)){
args__6053__auto__.push((arguments[i__6047__auto___6525]));

var G__6526 = (i__6047__auto___6525 + (1));
i__6047__auto___6525 = G__6526;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.core.single_node,contents));
});

domina.core.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq6523){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6523));
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
return cljs.core.map.call(null,(function (p1__6527_SHARP_){
return p1__6527_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__6528_SHARP_,p2__6529_SHARP_){
return goog.dom.insertChildAt(p1__6528_SHARP_,p2__6529_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__6531_SHARP_,p2__6530_SHARP_){
return goog.dom.insertSiblingBefore(p2__6530_SHARP_,p1__6531_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6533_SHARP_,p2__6532_SHARP_){
return goog.dom.insertSiblingAfter(p2__6532_SHARP_,p1__6533_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6535_SHARP_,p2__6534_SHARP_){
return goog.dom.replaceNode(p2__6534_SHARP_,p1__6535_SHARP_);
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
var args__6053__auto__ = [];
var len__6046__auto___6543 = arguments.length;
var i__6047__auto___6544 = (0);
while(true){
if((i__6047__auto___6544 < len__6046__auto___6543)){
args__6053__auto__.push((arguments[i__6047__auto___6544]));

var G__6545 = (i__6047__auto___6544 + (1));
i__6047__auto___6544 = G__6545;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6539_6546 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6540_6547 = null;
var count__6541_6548 = (0);
var i__6542_6549 = (0);
while(true){
if((i__6542_6549 < count__6541_6548)){
var n_6550 = cljs.core._nth.call(null,chunk__6540_6547,i__6542_6549);
goog.style.setStyle(n_6550,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6551 = seq__6539_6546;
var G__6552 = chunk__6540_6547;
var G__6553 = count__6541_6548;
var G__6554 = (i__6542_6549 + (1));
seq__6539_6546 = G__6551;
chunk__6540_6547 = G__6552;
count__6541_6548 = G__6553;
i__6542_6549 = G__6554;
continue;
} else {
var temp__4425__auto___6555 = cljs.core.seq.call(null,seq__6539_6546);
if(temp__4425__auto___6555){
var seq__6539_6556__$1 = temp__4425__auto___6555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6539_6556__$1)){
var c__5791__auto___6557 = cljs.core.chunk_first.call(null,seq__6539_6556__$1);
var G__6558 = cljs.core.chunk_rest.call(null,seq__6539_6556__$1);
var G__6559 = c__5791__auto___6557;
var G__6560 = cljs.core.count.call(null,c__5791__auto___6557);
var G__6561 = (0);
seq__6539_6546 = G__6558;
chunk__6540_6547 = G__6559;
count__6541_6548 = G__6560;
i__6542_6549 = G__6561;
continue;
} else {
var n_6562 = cljs.core.first.call(null,seq__6539_6556__$1);
goog.style.setStyle(n_6562,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6563 = cljs.core.next.call(null,seq__6539_6556__$1);
var G__6564 = null;
var G__6565 = (0);
var G__6566 = (0);
seq__6539_6546 = G__6563;
chunk__6540_6547 = G__6564;
count__6541_6548 = G__6565;
i__6542_6549 = G__6566;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6536){
var G__6537 = cljs.core.first.call(null,seq6536);
var seq6536__$1 = cljs.core.next.call(null,seq6536);
var G__6538 = cljs.core.first.call(null,seq6536__$1);
var seq6536__$2 = cljs.core.next.call(null,seq6536__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6537,G__6538,seq6536__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___6574 = arguments.length;
var i__6047__auto___6575 = (0);
while(true){
if((i__6047__auto___6575 < len__6046__auto___6574)){
args__6053__auto__.push((arguments[i__6047__auto___6575]));

var G__6576 = (i__6047__auto___6575 + (1));
i__6047__auto___6575 = G__6576;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6570_6577 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6571_6578 = null;
var count__6572_6579 = (0);
var i__6573_6580 = (0);
while(true){
if((i__6573_6580 < count__6572_6579)){
var n_6581 = cljs.core._nth.call(null,chunk__6571_6578,i__6573_6580);
n_6581.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6582 = seq__6570_6577;
var G__6583 = chunk__6571_6578;
var G__6584 = count__6572_6579;
var G__6585 = (i__6573_6580 + (1));
seq__6570_6577 = G__6582;
chunk__6571_6578 = G__6583;
count__6572_6579 = G__6584;
i__6573_6580 = G__6585;
continue;
} else {
var temp__4425__auto___6586 = cljs.core.seq.call(null,seq__6570_6577);
if(temp__4425__auto___6586){
var seq__6570_6587__$1 = temp__4425__auto___6586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6570_6587__$1)){
var c__5791__auto___6588 = cljs.core.chunk_first.call(null,seq__6570_6587__$1);
var G__6589 = cljs.core.chunk_rest.call(null,seq__6570_6587__$1);
var G__6590 = c__5791__auto___6588;
var G__6591 = cljs.core.count.call(null,c__5791__auto___6588);
var G__6592 = (0);
seq__6570_6577 = G__6589;
chunk__6571_6578 = G__6590;
count__6572_6579 = G__6591;
i__6573_6580 = G__6592;
continue;
} else {
var n_6593 = cljs.core.first.call(null,seq__6570_6587__$1);
n_6593.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6594 = cljs.core.next.call(null,seq__6570_6587__$1);
var G__6595 = null;
var G__6596 = (0);
var G__6597 = (0);
seq__6570_6577 = G__6594;
chunk__6571_6578 = G__6595;
count__6572_6579 = G__6596;
i__6573_6580 = G__6597;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6567){
var G__6568 = cljs.core.first.call(null,seq6567);
var seq6567__$1 = cljs.core.next.call(null,seq6567);
var G__6569 = cljs.core.first.call(null,seq6567__$1);
var seq6567__$2 = cljs.core.next.call(null,seq6567__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6568,G__6569,seq6567__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__6602_6606 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6603_6607 = null;
var count__6604_6608 = (0);
var i__6605_6609 = (0);
while(true){
if((i__6605_6609 < count__6604_6608)){
var n_6610 = cljs.core._nth.call(null,chunk__6603_6607,i__6605_6609);
n_6610.removeAttribute(cljs.core.name.call(null,name));

var G__6611 = seq__6602_6606;
var G__6612 = chunk__6603_6607;
var G__6613 = count__6604_6608;
var G__6614 = (i__6605_6609 + (1));
seq__6602_6606 = G__6611;
chunk__6603_6607 = G__6612;
count__6604_6608 = G__6613;
i__6605_6609 = G__6614;
continue;
} else {
var temp__4425__auto___6615 = cljs.core.seq.call(null,seq__6602_6606);
if(temp__4425__auto___6615){
var seq__6602_6616__$1 = temp__4425__auto___6615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6602_6616__$1)){
var c__5791__auto___6617 = cljs.core.chunk_first.call(null,seq__6602_6616__$1);
var G__6618 = cljs.core.chunk_rest.call(null,seq__6602_6616__$1);
var G__6619 = c__5791__auto___6617;
var G__6620 = cljs.core.count.call(null,c__5791__auto___6617);
var G__6621 = (0);
seq__6602_6606 = G__6618;
chunk__6603_6607 = G__6619;
count__6604_6608 = G__6620;
i__6605_6609 = G__6621;
continue;
} else {
var n_6622 = cljs.core.first.call(null,seq__6602_6616__$1);
n_6622.removeAttribute(cljs.core.name.call(null,name));

var G__6623 = cljs.core.next.call(null,seq__6602_6616__$1);
var G__6624 = null;
var G__6625 = (0);
var G__6626 = (0);
seq__6602_6606 = G__6623;
chunk__6603_6607 = G__6624;
count__6604_6608 = G__6625;
i__6605_6609 = G__6626;
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
var vec__6628 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6628,(0),null);
var v = cljs.core.nth.call(null,vec__6628,(1),null);
if(cljs.core.truth_((function (){var and__4976__auto__ = k;
if(cljs.core.truth_(and__4976__auto__)){
return v;
} else {
return and__4976__auto__;
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
return (function (p1__6629_SHARP_){
var attr = attrs__$1.item(p1__6629_SHARP_);
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
var seq__6636_6642 = cljs.core.seq.call(null,styles);
var chunk__6637_6643 = null;
var count__6638_6644 = (0);
var i__6639_6645 = (0);
while(true){
if((i__6639_6645 < count__6638_6644)){
var vec__6640_6646 = cljs.core._nth.call(null,chunk__6637_6643,i__6639_6645);
var name_6647 = cljs.core.nth.call(null,vec__6640_6646,(0),null);
var value_6648 = cljs.core.nth.call(null,vec__6640_6646,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6647,value_6648);

var G__6649 = seq__6636_6642;
var G__6650 = chunk__6637_6643;
var G__6651 = count__6638_6644;
var G__6652 = (i__6639_6645 + (1));
seq__6636_6642 = G__6649;
chunk__6637_6643 = G__6650;
count__6638_6644 = G__6651;
i__6639_6645 = G__6652;
continue;
} else {
var temp__4425__auto___6653 = cljs.core.seq.call(null,seq__6636_6642);
if(temp__4425__auto___6653){
var seq__6636_6654__$1 = temp__4425__auto___6653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6636_6654__$1)){
var c__5791__auto___6655 = cljs.core.chunk_first.call(null,seq__6636_6654__$1);
var G__6656 = cljs.core.chunk_rest.call(null,seq__6636_6654__$1);
var G__6657 = c__5791__auto___6655;
var G__6658 = cljs.core.count.call(null,c__5791__auto___6655);
var G__6659 = (0);
seq__6636_6642 = G__6656;
chunk__6637_6643 = G__6657;
count__6638_6644 = G__6658;
i__6639_6645 = G__6659;
continue;
} else {
var vec__6641_6660 = cljs.core.first.call(null,seq__6636_6654__$1);
var name_6661 = cljs.core.nth.call(null,vec__6641_6660,(0),null);
var value_6662 = cljs.core.nth.call(null,vec__6641_6660,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6661,value_6662);

var G__6663 = cljs.core.next.call(null,seq__6636_6654__$1);
var G__6664 = null;
var G__6665 = (0);
var G__6666 = (0);
seq__6636_6642 = G__6663;
chunk__6637_6643 = G__6664;
count__6638_6644 = G__6665;
i__6639_6645 = G__6666;
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
var seq__6673_6679 = cljs.core.seq.call(null,attrs);
var chunk__6674_6680 = null;
var count__6675_6681 = (0);
var i__6676_6682 = (0);
while(true){
if((i__6676_6682 < count__6675_6681)){
var vec__6677_6683 = cljs.core._nth.call(null,chunk__6674_6680,i__6676_6682);
var name_6684 = cljs.core.nth.call(null,vec__6677_6683,(0),null);
var value_6685 = cljs.core.nth.call(null,vec__6677_6683,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6684,value_6685);

var G__6686 = seq__6673_6679;
var G__6687 = chunk__6674_6680;
var G__6688 = count__6675_6681;
var G__6689 = (i__6676_6682 + (1));
seq__6673_6679 = G__6686;
chunk__6674_6680 = G__6687;
count__6675_6681 = G__6688;
i__6676_6682 = G__6689;
continue;
} else {
var temp__4425__auto___6690 = cljs.core.seq.call(null,seq__6673_6679);
if(temp__4425__auto___6690){
var seq__6673_6691__$1 = temp__4425__auto___6690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6673_6691__$1)){
var c__5791__auto___6692 = cljs.core.chunk_first.call(null,seq__6673_6691__$1);
var G__6693 = cljs.core.chunk_rest.call(null,seq__6673_6691__$1);
var G__6694 = c__5791__auto___6692;
var G__6695 = cljs.core.count.call(null,c__5791__auto___6692);
var G__6696 = (0);
seq__6673_6679 = G__6693;
chunk__6674_6680 = G__6694;
count__6675_6681 = G__6695;
i__6676_6682 = G__6696;
continue;
} else {
var vec__6678_6697 = cljs.core.first.call(null,seq__6673_6691__$1);
var name_6698 = cljs.core.nth.call(null,vec__6678_6697,(0),null);
var value_6699 = cljs.core.nth.call(null,vec__6678_6697,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6698,value_6699);

var G__6700 = cljs.core.next.call(null,seq__6673_6691__$1);
var G__6701 = null;
var G__6702 = (0);
var G__6703 = (0);
seq__6673_6679 = G__6700;
chunk__6674_6680 = G__6701;
count__6675_6681 = G__6702;
i__6676_6682 = G__6703;
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
var seq__6708_6712 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6709_6713 = null;
var count__6710_6714 = (0);
var i__6711_6715 = (0);
while(true){
if((i__6711_6715 < count__6710_6714)){
var node_6716 = cljs.core._nth.call(null,chunk__6709_6713,i__6711_6715);
goog.dom.classes.add(node_6716,class$);

var G__6717 = seq__6708_6712;
var G__6718 = chunk__6709_6713;
var G__6719 = count__6710_6714;
var G__6720 = (i__6711_6715 + (1));
seq__6708_6712 = G__6717;
chunk__6709_6713 = G__6718;
count__6710_6714 = G__6719;
i__6711_6715 = G__6720;
continue;
} else {
var temp__4425__auto___6721 = cljs.core.seq.call(null,seq__6708_6712);
if(temp__4425__auto___6721){
var seq__6708_6722__$1 = temp__4425__auto___6721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6708_6722__$1)){
var c__5791__auto___6723 = cljs.core.chunk_first.call(null,seq__6708_6722__$1);
var G__6724 = cljs.core.chunk_rest.call(null,seq__6708_6722__$1);
var G__6725 = c__5791__auto___6723;
var G__6726 = cljs.core.count.call(null,c__5791__auto___6723);
var G__6727 = (0);
seq__6708_6712 = G__6724;
chunk__6709_6713 = G__6725;
count__6710_6714 = G__6726;
i__6711_6715 = G__6727;
continue;
} else {
var node_6728 = cljs.core.first.call(null,seq__6708_6722__$1);
goog.dom.classes.add(node_6728,class$);

var G__6729 = cljs.core.next.call(null,seq__6708_6722__$1);
var G__6730 = null;
var G__6731 = (0);
var G__6732 = (0);
seq__6708_6712 = G__6729;
chunk__6709_6713 = G__6730;
count__6710_6714 = G__6731;
i__6711_6715 = G__6732;
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
var seq__6737_6741 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6738_6742 = null;
var count__6739_6743 = (0);
var i__6740_6744 = (0);
while(true){
if((i__6740_6744 < count__6739_6743)){
var node_6745 = cljs.core._nth.call(null,chunk__6738_6742,i__6740_6744);
goog.dom.classes.remove(node_6745,class$);

var G__6746 = seq__6737_6741;
var G__6747 = chunk__6738_6742;
var G__6748 = count__6739_6743;
var G__6749 = (i__6740_6744 + (1));
seq__6737_6741 = G__6746;
chunk__6738_6742 = G__6747;
count__6739_6743 = G__6748;
i__6740_6744 = G__6749;
continue;
} else {
var temp__4425__auto___6750 = cljs.core.seq.call(null,seq__6737_6741);
if(temp__4425__auto___6750){
var seq__6737_6751__$1 = temp__4425__auto___6750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6737_6751__$1)){
var c__5791__auto___6752 = cljs.core.chunk_first.call(null,seq__6737_6751__$1);
var G__6753 = cljs.core.chunk_rest.call(null,seq__6737_6751__$1);
var G__6754 = c__5791__auto___6752;
var G__6755 = cljs.core.count.call(null,c__5791__auto___6752);
var G__6756 = (0);
seq__6737_6741 = G__6753;
chunk__6738_6742 = G__6754;
count__6739_6743 = G__6755;
i__6740_6744 = G__6756;
continue;
} else {
var node_6757 = cljs.core.first.call(null,seq__6737_6751__$1);
goog.dom.classes.remove(node_6757,class$);

var G__6758 = cljs.core.next.call(null,seq__6737_6751__$1);
var G__6759 = null;
var G__6760 = (0);
var G__6761 = (0);
seq__6737_6741 = G__6758;
chunk__6738_6742 = G__6759;
count__6739_6743 = G__6760;
i__6740_6744 = G__6761;
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
var seq__6766_6770 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6767_6771 = null;
var count__6768_6772 = (0);
var i__6769_6773 = (0);
while(true){
if((i__6769_6773 < count__6768_6772)){
var node_6774 = cljs.core._nth.call(null,chunk__6767_6771,i__6769_6773);
goog.dom.classes.toggle(node_6774,class$);

var G__6775 = seq__6766_6770;
var G__6776 = chunk__6767_6771;
var G__6777 = count__6768_6772;
var G__6778 = (i__6769_6773 + (1));
seq__6766_6770 = G__6775;
chunk__6767_6771 = G__6776;
count__6768_6772 = G__6777;
i__6769_6773 = G__6778;
continue;
} else {
var temp__4425__auto___6779 = cljs.core.seq.call(null,seq__6766_6770);
if(temp__4425__auto___6779){
var seq__6766_6780__$1 = temp__4425__auto___6779;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6766_6780__$1)){
var c__5791__auto___6781 = cljs.core.chunk_first.call(null,seq__6766_6780__$1);
var G__6782 = cljs.core.chunk_rest.call(null,seq__6766_6780__$1);
var G__6783 = c__5791__auto___6781;
var G__6784 = cljs.core.count.call(null,c__5791__auto___6781);
var G__6785 = (0);
seq__6766_6770 = G__6782;
chunk__6767_6771 = G__6783;
count__6768_6772 = G__6784;
i__6769_6773 = G__6785;
continue;
} else {
var node_6786 = cljs.core.first.call(null,seq__6766_6780__$1);
goog.dom.classes.toggle(node_6786,class$);

var G__6787 = cljs.core.next.call(null,seq__6766_6780__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6766_6770 = G__6787;
chunk__6767_6771 = G__6788;
count__6768_6772 = G__6789;
i__6769_6773 = G__6790;
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
var classes_6799__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6795_6800 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6796_6801 = null;
var count__6797_6802 = (0);
var i__6798_6803 = (0);
while(true){
if((i__6798_6803 < count__6797_6802)){
var node_6804 = cljs.core._nth.call(null,chunk__6796_6801,i__6798_6803);
goog.dom.classes.set(node_6804,classes_6799__$1);

var G__6805 = seq__6795_6800;
var G__6806 = chunk__6796_6801;
var G__6807 = count__6797_6802;
var G__6808 = (i__6798_6803 + (1));
seq__6795_6800 = G__6805;
chunk__6796_6801 = G__6806;
count__6797_6802 = G__6807;
i__6798_6803 = G__6808;
continue;
} else {
var temp__4425__auto___6809 = cljs.core.seq.call(null,seq__6795_6800);
if(temp__4425__auto___6809){
var seq__6795_6810__$1 = temp__4425__auto___6809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6795_6810__$1)){
var c__5791__auto___6811 = cljs.core.chunk_first.call(null,seq__6795_6810__$1);
var G__6812 = cljs.core.chunk_rest.call(null,seq__6795_6810__$1);
var G__6813 = c__5791__auto___6811;
var G__6814 = cljs.core.count.call(null,c__5791__auto___6811);
var G__6815 = (0);
seq__6795_6800 = G__6812;
chunk__6796_6801 = G__6813;
count__6797_6802 = G__6814;
i__6798_6803 = G__6815;
continue;
} else {
var node_6816 = cljs.core.first.call(null,seq__6795_6810__$1);
goog.dom.classes.set(node_6816,classes_6799__$1);

var G__6817 = cljs.core.next.call(null,seq__6795_6810__$1);
var G__6818 = null;
var G__6819 = (0);
var G__6820 = (0);
seq__6795_6800 = G__6817;
chunk__6796_6801 = G__6818;
count__6797_6802 = G__6819;
i__6798_6803 = G__6820;
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
var seq__6825_6829 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6826_6830 = null;
var count__6827_6831 = (0);
var i__6828_6832 = (0);
while(true){
if((i__6828_6832 < count__6827_6831)){
var node_6833 = cljs.core._nth.call(null,chunk__6826_6830,i__6828_6832);
goog.dom.setTextContent(node_6833,value);

var G__6834 = seq__6825_6829;
var G__6835 = chunk__6826_6830;
var G__6836 = count__6827_6831;
var G__6837 = (i__6828_6832 + (1));
seq__6825_6829 = G__6834;
chunk__6826_6830 = G__6835;
count__6827_6831 = G__6836;
i__6828_6832 = G__6837;
continue;
} else {
var temp__4425__auto___6838 = cljs.core.seq.call(null,seq__6825_6829);
if(temp__4425__auto___6838){
var seq__6825_6839__$1 = temp__4425__auto___6838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6825_6839__$1)){
var c__5791__auto___6840 = cljs.core.chunk_first.call(null,seq__6825_6839__$1);
var G__6841 = cljs.core.chunk_rest.call(null,seq__6825_6839__$1);
var G__6842 = c__5791__auto___6840;
var G__6843 = cljs.core.count.call(null,c__5791__auto___6840);
var G__6844 = (0);
seq__6825_6829 = G__6841;
chunk__6826_6830 = G__6842;
count__6827_6831 = G__6843;
i__6828_6832 = G__6844;
continue;
} else {
var node_6845 = cljs.core.first.call(null,seq__6825_6839__$1);
goog.dom.setTextContent(node_6845,value);

var G__6846 = cljs.core.next.call(null,seq__6825_6839__$1);
var G__6847 = null;
var G__6848 = (0);
var G__6849 = (0);
seq__6825_6829 = G__6846;
chunk__6826_6830 = G__6847;
count__6827_6831 = G__6848;
i__6828_6832 = G__6849;
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
var seq__6854_6858 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6855_6859 = null;
var count__6856_6860 = (0);
var i__6857_6861 = (0);
while(true){
if((i__6857_6861 < count__6856_6860)){
var node_6862 = cljs.core._nth.call(null,chunk__6855_6859,i__6857_6861);
goog.dom.forms.setValue(node_6862,value);

var G__6863 = seq__6854_6858;
var G__6864 = chunk__6855_6859;
var G__6865 = count__6856_6860;
var G__6866 = (i__6857_6861 + (1));
seq__6854_6858 = G__6863;
chunk__6855_6859 = G__6864;
count__6856_6860 = G__6865;
i__6857_6861 = G__6866;
continue;
} else {
var temp__4425__auto___6867 = cljs.core.seq.call(null,seq__6854_6858);
if(temp__4425__auto___6867){
var seq__6854_6868__$1 = temp__4425__auto___6867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6854_6868__$1)){
var c__5791__auto___6869 = cljs.core.chunk_first.call(null,seq__6854_6868__$1);
var G__6870 = cljs.core.chunk_rest.call(null,seq__6854_6868__$1);
var G__6871 = c__5791__auto___6869;
var G__6872 = cljs.core.count.call(null,c__5791__auto___6869);
var G__6873 = (0);
seq__6854_6858 = G__6870;
chunk__6855_6859 = G__6871;
count__6856_6860 = G__6872;
i__6857_6861 = G__6873;
continue;
} else {
var node_6874 = cljs.core.first.call(null,seq__6854_6868__$1);
goog.dom.forms.setValue(node_6874,value);

var G__6875 = cljs.core.next.call(null,seq__6854_6868__$1);
var G__6876 = null;
var G__6877 = (0);
var G__6878 = (0);
seq__6854_6858 = G__6875;
chunk__6855_6859 = G__6876;
count__6856_6860 = G__6877;
i__6857_6861 = G__6878;
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
if(cljs.core.truth_((function (){var and__4976__auto__ = allows_inner_html_QMARK_;
if(and__4976__auto__){
var and__4976__auto____$1 = (function (){var or__4988__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__4976__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
}
})())){
var value_6889 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__6885_6890 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6886_6891 = null;
var count__6887_6892 = (0);
var i__6888_6893 = (0);
while(true){
if((i__6888_6893 < count__6887_6892)){
var node_6894 = cljs.core._nth.call(null,chunk__6886_6891,i__6888_6893);
node_6894.innerHTML = value_6889;

var G__6895 = seq__6885_6890;
var G__6896 = chunk__6886_6891;
var G__6897 = count__6887_6892;
var G__6898 = (i__6888_6893 + (1));
seq__6885_6890 = G__6895;
chunk__6886_6891 = G__6896;
count__6887_6892 = G__6897;
i__6888_6893 = G__6898;
continue;
} else {
var temp__4425__auto___6899 = cljs.core.seq.call(null,seq__6885_6890);
if(temp__4425__auto___6899){
var seq__6885_6900__$1 = temp__4425__auto___6899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6885_6900__$1)){
var c__5791__auto___6901 = cljs.core.chunk_first.call(null,seq__6885_6900__$1);
var G__6902 = cljs.core.chunk_rest.call(null,seq__6885_6900__$1);
var G__6903 = c__5791__auto___6901;
var G__6904 = cljs.core.count.call(null,c__5791__auto___6901);
var G__6905 = (0);
seq__6885_6890 = G__6902;
chunk__6886_6891 = G__6903;
count__6887_6892 = G__6904;
i__6888_6893 = G__6905;
continue;
} else {
var node_6906 = cljs.core.first.call(null,seq__6885_6900__$1);
node_6906.innerHTML = value_6889;

var G__6907 = cljs.core.next.call(null,seq__6885_6900__$1);
var G__6908 = null;
var G__6909 = (0);
var G__6910 = (0);
seq__6885_6890 = G__6907;
chunk__6886_6891 = G__6908;
count__6887_6892 = G__6909;
i__6888_6893 = G__6910;
continue;
}
} else {
}
}
break;
}
}catch (e6884){if((e6884 instanceof Error)){
var e_6911 = e6884;
domina.core.replace_children_BANG_.call(null,content,value_6889);
} else {
throw e6884;

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
var args6912 = [];
var len__6046__auto___6915 = arguments.length;
var i__6047__auto___6916 = (0);
while(true){
if((i__6047__auto___6916 < len__6046__auto___6915)){
args6912.push((arguments[i__6047__auto___6916]));

var G__6917 = (i__6047__auto___6916 + (1));
i__6047__auto___6916 = G__6917;
continue;
} else {
}
break;
}

var G__6914 = args6912.length;
switch (G__6914) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6912.length)].join('')));

}
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.core.get_data.call(null,node,key,false);
});

domina.core.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.core.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4976__auto__ = bubble;
if(cljs.core.truth_(and__4976__auto__)){
return (value == null);
} else {
return and__4976__auto__;
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
var m = (function (){var or__4988__auto__ = domina.core.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4988__auto__)){
return or__4988__auto__;
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
var seq__6925_6929 = cljs.core.seq.call(null,children);
var chunk__6926_6930 = null;
var count__6927_6931 = (0);
var i__6928_6932 = (0);
while(true){
if((i__6928_6932 < count__6927_6931)){
var child_6933 = cljs.core._nth.call(null,chunk__6926_6930,i__6928_6932);
frag.appendChild(child_6933);

var G__6934 = seq__6925_6929;
var G__6935 = chunk__6926_6930;
var G__6936 = count__6927_6931;
var G__6937 = (i__6928_6932 + (1));
seq__6925_6929 = G__6934;
chunk__6926_6930 = G__6935;
count__6927_6931 = G__6936;
i__6928_6932 = G__6937;
continue;
} else {
var temp__4425__auto___6938 = cljs.core.seq.call(null,seq__6925_6929);
if(temp__4425__auto___6938){
var seq__6925_6939__$1 = temp__4425__auto___6938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6925_6939__$1)){
var c__5791__auto___6940 = cljs.core.chunk_first.call(null,seq__6925_6939__$1);
var G__6941 = cljs.core.chunk_rest.call(null,seq__6925_6939__$1);
var G__6942 = c__5791__auto___6940;
var G__6943 = cljs.core.count.call(null,c__5791__auto___6940);
var G__6944 = (0);
seq__6925_6929 = G__6941;
chunk__6926_6930 = G__6942;
count__6927_6931 = G__6943;
i__6928_6932 = G__6944;
continue;
} else {
var child_6945 = cljs.core.first.call(null,seq__6925_6939__$1);
frag.appendChild(child_6945);

var G__6946 = cljs.core.next.call(null,seq__6925_6939__$1);
var G__6947 = null;
var G__6948 = (0);
var G__6949 = (0);
seq__6925_6929 = G__6946;
chunk__6926_6930 = G__6947;
count__6927_6931 = G__6948;
i__6928_6932 = G__6949;
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
return (function (p1__6919_SHARP_,p2__6920_SHARP_){
return f.call(null,p1__6919_SHARP_,p2__6920_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args6950 = [];
var len__6046__auto___6953 = arguments.length;
var i__6047__auto___6954 = (0);
while(true){
if((i__6047__auto___6954 < len__6046__auto___6953)){
args6950.push((arguments[i__6047__auto___6954]));

var G__6955 = (i__6047__auto___6954 + (1));
i__6047__auto___6954 = G__6955;
continue;
} else {
}
break;
}

var G__6952 = args6950.length;
switch (G__6952) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6950.length)].join('')));

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
var args6957 = [];
var len__6046__auto___6960 = arguments.length;
var i__6047__auto___6961 = (0);
while(true){
if((i__6047__auto___6961 < len__6046__auto___6960)){
args6957.push((arguments[i__6047__auto___6961]));

var G__6962 = (i__6047__auto___6961 + (1));
i__6047__auto___6961 = G__6962;
continue;
} else {
}
break;
}

var G__6959 = args6957.length;
switch (G__6959) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6957.length)].join('')));

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
var and__4976__auto__ = obj;
if(cljs.core.truth_(and__4976__auto__)){
var and__4976__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4976__auto____$1){
return obj.length;
} else {
return and__4976__auto____$1;
}
} else {
return and__4976__auto__;
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
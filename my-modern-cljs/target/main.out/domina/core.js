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
var opt_wrapper_6403 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6404 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6405 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6405,opt_wrapper_6403,table_section_wrapper_6404,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6403,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6404,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6404,cell_wrapper_6405,table_section_wrapper_6404,table_section_wrapper_6404]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4977__auto__ = div.firstChild;
if(cljs.core.truth_(and__4977__auto__)){
return div.firstChild.childNodes;
} else {
return and__4977__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6410 = cljs.core.seq.call(null,tbody);
var chunk__6411 = null;
var count__6412 = (0);
var i__6413 = (0);
while(true){
if((i__6413 < count__6412)){
var child = cljs.core._nth.call(null,chunk__6411,i__6413);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6414 = seq__6410;
var G__6415 = chunk__6411;
var G__6416 = count__6412;
var G__6417 = (i__6413 + (1));
seq__6410 = G__6414;
chunk__6411 = G__6415;
count__6412 = G__6416;
i__6413 = G__6417;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6410);
if(temp__4425__auto__){
var seq__6410__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6410__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__6410__$1);
var G__6418 = cljs.core.chunk_rest.call(null,seq__6410__$1);
var G__6419 = c__5792__auto__;
var G__6420 = cljs.core.count.call(null,c__5792__auto__);
var G__6421 = (0);
seq__6410 = G__6418;
chunk__6411 = G__6419;
count__6412 = G__6420;
i__6413 = G__6421;
continue;
} else {
var child = cljs.core.first.call(null,seq__6410__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6422 = cljs.core.next.call(null,seq__6410__$1);
var G__6423 = null;
var G__6424 = (0);
var G__6425 = (0);
seq__6410 = G__6422;
chunk__6411 = G__6423;
count__6412 = G__6424;
i__6413 = G__6425;
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
var vec__6427 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__6427,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6427,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6427,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6428 = wrapper.lastChild;
var G__6429 = (level - (1));
wrapper = G__6428;
level = G__6429;
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
var len__6047__auto___6431 = arguments.length;
var i__6048__auto___6432 = (0);
while(true){
if((i__6048__auto___6432 < len__6047__auto___6431)){
args__6054__auto__.push((arguments[i__6048__auto___6432]));

var G__6433 = (i__6048__auto___6432 + (1));
i__6048__auto___6432 = G__6433;
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

domina.core.log_debug.cljs$lang$applyTo = (function (seq6430){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6430));
});
domina.core.log = (function domina$core$log(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6435 = arguments.length;
var i__6048__auto___6436 = (0);
while(true){
if((i__6048__auto___6436 < len__6047__auto___6435)){
args__6054__auto__.push((arguments[i__6048__auto___6436]));

var G__6437 = (i__6048__auto___6436 + (1));
i__6048__auto___6436 = G__6437;
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

domina.core.log.cljs$lang$applyTo = (function (seq6434){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6434));
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
var len__6047__auto___6439 = arguments.length;
var i__6048__auto___6440 = (0);
while(true){
if((i__6048__auto___6440 < len__6047__auto___6439)){
args__6054__auto__.push((arguments[i__6048__auto___6440]));

var G__6441 = (i__6048__auto___6440 + (1));
i__6048__auto___6440 = G__6441;
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

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq6438){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6438));
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
return cljs.core.map.call(null,(function (p1__6442_SHARP_){
return p1__6442_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__6443_SHARP_,p2__6444_SHARP_){
return goog.dom.insertChildAt(p1__6443_SHARP_,p2__6444_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__6446_SHARP_,p2__6445_SHARP_){
return goog.dom.insertSiblingBefore(p2__6445_SHARP_,p1__6446_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6448_SHARP_,p2__6447_SHARP_){
return goog.dom.insertSiblingAfter(p2__6447_SHARP_,p1__6448_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__6450_SHARP_,p2__6449_SHARP_){
return goog.dom.replaceNode(p2__6449_SHARP_,p1__6450_SHARP_);
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
var len__6047__auto___6458 = arguments.length;
var i__6048__auto___6459 = (0);
while(true){
if((i__6048__auto___6459 < len__6047__auto___6458)){
args__6054__auto__.push((arguments[i__6048__auto___6459]));

var G__6460 = (i__6048__auto___6459 + (1));
i__6048__auto___6459 = G__6460;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6454_6461 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6455_6462 = null;
var count__6456_6463 = (0);
var i__6457_6464 = (0);
while(true){
if((i__6457_6464 < count__6456_6463)){
var n_6465 = cljs.core._nth.call(null,chunk__6455_6462,i__6457_6464);
goog.style.setStyle(n_6465,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6466 = seq__6454_6461;
var G__6467 = chunk__6455_6462;
var G__6468 = count__6456_6463;
var G__6469 = (i__6457_6464 + (1));
seq__6454_6461 = G__6466;
chunk__6455_6462 = G__6467;
count__6456_6463 = G__6468;
i__6457_6464 = G__6469;
continue;
} else {
var temp__4425__auto___6470 = cljs.core.seq.call(null,seq__6454_6461);
if(temp__4425__auto___6470){
var seq__6454_6471__$1 = temp__4425__auto___6470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6454_6471__$1)){
var c__5792__auto___6472 = cljs.core.chunk_first.call(null,seq__6454_6471__$1);
var G__6473 = cljs.core.chunk_rest.call(null,seq__6454_6471__$1);
var G__6474 = c__5792__auto___6472;
var G__6475 = cljs.core.count.call(null,c__5792__auto___6472);
var G__6476 = (0);
seq__6454_6461 = G__6473;
chunk__6455_6462 = G__6474;
count__6456_6463 = G__6475;
i__6457_6464 = G__6476;
continue;
} else {
var n_6477 = cljs.core.first.call(null,seq__6454_6471__$1);
goog.style.setStyle(n_6477,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6478 = cljs.core.next.call(null,seq__6454_6471__$1);
var G__6479 = null;
var G__6480 = (0);
var G__6481 = (0);
seq__6454_6461 = G__6478;
chunk__6455_6462 = G__6479;
count__6456_6463 = G__6480;
i__6457_6464 = G__6481;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq6451){
var G__6452 = cljs.core.first.call(null,seq6451);
var seq6451__$1 = cljs.core.next.call(null,seq6451);
var G__6453 = cljs.core.first.call(null,seq6451__$1);
var seq6451__$2 = cljs.core.next.call(null,seq6451__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6452,G__6453,seq6451__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6054__auto__ = [];
var len__6047__auto___6489 = arguments.length;
var i__6048__auto___6490 = (0);
while(true){
if((i__6048__auto___6490 < len__6047__auto___6489)){
args__6054__auto__.push((arguments[i__6048__auto___6490]));

var G__6491 = (i__6048__auto___6490 + (1));
i__6048__auto___6490 = G__6491;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6485_6492 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6486_6493 = null;
var count__6487_6494 = (0);
var i__6488_6495 = (0);
while(true){
if((i__6488_6495 < count__6487_6494)){
var n_6496 = cljs.core._nth.call(null,chunk__6486_6493,i__6488_6495);
n_6496.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6497 = seq__6485_6492;
var G__6498 = chunk__6486_6493;
var G__6499 = count__6487_6494;
var G__6500 = (i__6488_6495 + (1));
seq__6485_6492 = G__6497;
chunk__6486_6493 = G__6498;
count__6487_6494 = G__6499;
i__6488_6495 = G__6500;
continue;
} else {
var temp__4425__auto___6501 = cljs.core.seq.call(null,seq__6485_6492);
if(temp__4425__auto___6501){
var seq__6485_6502__$1 = temp__4425__auto___6501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6485_6502__$1)){
var c__5792__auto___6503 = cljs.core.chunk_first.call(null,seq__6485_6502__$1);
var G__6504 = cljs.core.chunk_rest.call(null,seq__6485_6502__$1);
var G__6505 = c__5792__auto___6503;
var G__6506 = cljs.core.count.call(null,c__5792__auto___6503);
var G__6507 = (0);
seq__6485_6492 = G__6504;
chunk__6486_6493 = G__6505;
count__6487_6494 = G__6506;
i__6488_6495 = G__6507;
continue;
} else {
var n_6508 = cljs.core.first.call(null,seq__6485_6502__$1);
n_6508.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6509 = cljs.core.next.call(null,seq__6485_6502__$1);
var G__6510 = null;
var G__6511 = (0);
var G__6512 = (0);
seq__6485_6492 = G__6509;
chunk__6486_6493 = G__6510;
count__6487_6494 = G__6511;
i__6488_6495 = G__6512;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq6482){
var G__6483 = cljs.core.first.call(null,seq6482);
var seq6482__$1 = cljs.core.next.call(null,seq6482);
var G__6484 = cljs.core.first.call(null,seq6482__$1);
var seq6482__$2 = cljs.core.next.call(null,seq6482__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6483,G__6484,seq6482__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__6517_6521 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6518_6522 = null;
var count__6519_6523 = (0);
var i__6520_6524 = (0);
while(true){
if((i__6520_6524 < count__6519_6523)){
var n_6525 = cljs.core._nth.call(null,chunk__6518_6522,i__6520_6524);
n_6525.removeAttribute(cljs.core.name.call(null,name));

var G__6526 = seq__6517_6521;
var G__6527 = chunk__6518_6522;
var G__6528 = count__6519_6523;
var G__6529 = (i__6520_6524 + (1));
seq__6517_6521 = G__6526;
chunk__6518_6522 = G__6527;
count__6519_6523 = G__6528;
i__6520_6524 = G__6529;
continue;
} else {
var temp__4425__auto___6530 = cljs.core.seq.call(null,seq__6517_6521);
if(temp__4425__auto___6530){
var seq__6517_6531__$1 = temp__4425__auto___6530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6517_6531__$1)){
var c__5792__auto___6532 = cljs.core.chunk_first.call(null,seq__6517_6531__$1);
var G__6533 = cljs.core.chunk_rest.call(null,seq__6517_6531__$1);
var G__6534 = c__5792__auto___6532;
var G__6535 = cljs.core.count.call(null,c__5792__auto___6532);
var G__6536 = (0);
seq__6517_6521 = G__6533;
chunk__6518_6522 = G__6534;
count__6519_6523 = G__6535;
i__6520_6524 = G__6536;
continue;
} else {
var n_6537 = cljs.core.first.call(null,seq__6517_6531__$1);
n_6537.removeAttribute(cljs.core.name.call(null,name));

var G__6538 = cljs.core.next.call(null,seq__6517_6531__$1);
var G__6539 = null;
var G__6540 = (0);
var G__6541 = (0);
seq__6517_6521 = G__6538;
chunk__6518_6522 = G__6539;
count__6519_6523 = G__6540;
i__6520_6524 = G__6541;
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
var vec__6543 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6543,(0),null);
var v = cljs.core.nth.call(null,vec__6543,(1),null);
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
return (function (p1__6544_SHARP_){
var attr = attrs__$1.item(p1__6544_SHARP_);
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
var seq__6551_6557 = cljs.core.seq.call(null,styles);
var chunk__6552_6558 = null;
var count__6553_6559 = (0);
var i__6554_6560 = (0);
while(true){
if((i__6554_6560 < count__6553_6559)){
var vec__6555_6561 = cljs.core._nth.call(null,chunk__6552_6558,i__6554_6560);
var name_6562 = cljs.core.nth.call(null,vec__6555_6561,(0),null);
var value_6563 = cljs.core.nth.call(null,vec__6555_6561,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6562,value_6563);

var G__6564 = seq__6551_6557;
var G__6565 = chunk__6552_6558;
var G__6566 = count__6553_6559;
var G__6567 = (i__6554_6560 + (1));
seq__6551_6557 = G__6564;
chunk__6552_6558 = G__6565;
count__6553_6559 = G__6566;
i__6554_6560 = G__6567;
continue;
} else {
var temp__4425__auto___6568 = cljs.core.seq.call(null,seq__6551_6557);
if(temp__4425__auto___6568){
var seq__6551_6569__$1 = temp__4425__auto___6568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6551_6569__$1)){
var c__5792__auto___6570 = cljs.core.chunk_first.call(null,seq__6551_6569__$1);
var G__6571 = cljs.core.chunk_rest.call(null,seq__6551_6569__$1);
var G__6572 = c__5792__auto___6570;
var G__6573 = cljs.core.count.call(null,c__5792__auto___6570);
var G__6574 = (0);
seq__6551_6557 = G__6571;
chunk__6552_6558 = G__6572;
count__6553_6559 = G__6573;
i__6554_6560 = G__6574;
continue;
} else {
var vec__6556_6575 = cljs.core.first.call(null,seq__6551_6569__$1);
var name_6576 = cljs.core.nth.call(null,vec__6556_6575,(0),null);
var value_6577 = cljs.core.nth.call(null,vec__6556_6575,(1),null);
domina.core.set_style_BANG_.call(null,content,name_6576,value_6577);

var G__6578 = cljs.core.next.call(null,seq__6551_6569__$1);
var G__6579 = null;
var G__6580 = (0);
var G__6581 = (0);
seq__6551_6557 = G__6578;
chunk__6552_6558 = G__6579;
count__6553_6559 = G__6580;
i__6554_6560 = G__6581;
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
var seq__6588_6594 = cljs.core.seq.call(null,attrs);
var chunk__6589_6595 = null;
var count__6590_6596 = (0);
var i__6591_6597 = (0);
while(true){
if((i__6591_6597 < count__6590_6596)){
var vec__6592_6598 = cljs.core._nth.call(null,chunk__6589_6595,i__6591_6597);
var name_6599 = cljs.core.nth.call(null,vec__6592_6598,(0),null);
var value_6600 = cljs.core.nth.call(null,vec__6592_6598,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6599,value_6600);

var G__6601 = seq__6588_6594;
var G__6602 = chunk__6589_6595;
var G__6603 = count__6590_6596;
var G__6604 = (i__6591_6597 + (1));
seq__6588_6594 = G__6601;
chunk__6589_6595 = G__6602;
count__6590_6596 = G__6603;
i__6591_6597 = G__6604;
continue;
} else {
var temp__4425__auto___6605 = cljs.core.seq.call(null,seq__6588_6594);
if(temp__4425__auto___6605){
var seq__6588_6606__$1 = temp__4425__auto___6605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6588_6606__$1)){
var c__5792__auto___6607 = cljs.core.chunk_first.call(null,seq__6588_6606__$1);
var G__6608 = cljs.core.chunk_rest.call(null,seq__6588_6606__$1);
var G__6609 = c__5792__auto___6607;
var G__6610 = cljs.core.count.call(null,c__5792__auto___6607);
var G__6611 = (0);
seq__6588_6594 = G__6608;
chunk__6589_6595 = G__6609;
count__6590_6596 = G__6610;
i__6591_6597 = G__6611;
continue;
} else {
var vec__6593_6612 = cljs.core.first.call(null,seq__6588_6606__$1);
var name_6613 = cljs.core.nth.call(null,vec__6593_6612,(0),null);
var value_6614 = cljs.core.nth.call(null,vec__6593_6612,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_6613,value_6614);

var G__6615 = cljs.core.next.call(null,seq__6588_6606__$1);
var G__6616 = null;
var G__6617 = (0);
var G__6618 = (0);
seq__6588_6594 = G__6615;
chunk__6589_6595 = G__6616;
count__6590_6596 = G__6617;
i__6591_6597 = G__6618;
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
var seq__6623_6627 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6624_6628 = null;
var count__6625_6629 = (0);
var i__6626_6630 = (0);
while(true){
if((i__6626_6630 < count__6625_6629)){
var node_6631 = cljs.core._nth.call(null,chunk__6624_6628,i__6626_6630);
goog.dom.classes.add(node_6631,class$);

var G__6632 = seq__6623_6627;
var G__6633 = chunk__6624_6628;
var G__6634 = count__6625_6629;
var G__6635 = (i__6626_6630 + (1));
seq__6623_6627 = G__6632;
chunk__6624_6628 = G__6633;
count__6625_6629 = G__6634;
i__6626_6630 = G__6635;
continue;
} else {
var temp__4425__auto___6636 = cljs.core.seq.call(null,seq__6623_6627);
if(temp__4425__auto___6636){
var seq__6623_6637__$1 = temp__4425__auto___6636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6623_6637__$1)){
var c__5792__auto___6638 = cljs.core.chunk_first.call(null,seq__6623_6637__$1);
var G__6639 = cljs.core.chunk_rest.call(null,seq__6623_6637__$1);
var G__6640 = c__5792__auto___6638;
var G__6641 = cljs.core.count.call(null,c__5792__auto___6638);
var G__6642 = (0);
seq__6623_6627 = G__6639;
chunk__6624_6628 = G__6640;
count__6625_6629 = G__6641;
i__6626_6630 = G__6642;
continue;
} else {
var node_6643 = cljs.core.first.call(null,seq__6623_6637__$1);
goog.dom.classes.add(node_6643,class$);

var G__6644 = cljs.core.next.call(null,seq__6623_6637__$1);
var G__6645 = null;
var G__6646 = (0);
var G__6647 = (0);
seq__6623_6627 = G__6644;
chunk__6624_6628 = G__6645;
count__6625_6629 = G__6646;
i__6626_6630 = G__6647;
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
var seq__6652_6656 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6653_6657 = null;
var count__6654_6658 = (0);
var i__6655_6659 = (0);
while(true){
if((i__6655_6659 < count__6654_6658)){
var node_6660 = cljs.core._nth.call(null,chunk__6653_6657,i__6655_6659);
goog.dom.classes.remove(node_6660,class$);

var G__6661 = seq__6652_6656;
var G__6662 = chunk__6653_6657;
var G__6663 = count__6654_6658;
var G__6664 = (i__6655_6659 + (1));
seq__6652_6656 = G__6661;
chunk__6653_6657 = G__6662;
count__6654_6658 = G__6663;
i__6655_6659 = G__6664;
continue;
} else {
var temp__4425__auto___6665 = cljs.core.seq.call(null,seq__6652_6656);
if(temp__4425__auto___6665){
var seq__6652_6666__$1 = temp__4425__auto___6665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6652_6666__$1)){
var c__5792__auto___6667 = cljs.core.chunk_first.call(null,seq__6652_6666__$1);
var G__6668 = cljs.core.chunk_rest.call(null,seq__6652_6666__$1);
var G__6669 = c__5792__auto___6667;
var G__6670 = cljs.core.count.call(null,c__5792__auto___6667);
var G__6671 = (0);
seq__6652_6656 = G__6668;
chunk__6653_6657 = G__6669;
count__6654_6658 = G__6670;
i__6655_6659 = G__6671;
continue;
} else {
var node_6672 = cljs.core.first.call(null,seq__6652_6666__$1);
goog.dom.classes.remove(node_6672,class$);

var G__6673 = cljs.core.next.call(null,seq__6652_6666__$1);
var G__6674 = null;
var G__6675 = (0);
var G__6676 = (0);
seq__6652_6656 = G__6673;
chunk__6653_6657 = G__6674;
count__6654_6658 = G__6675;
i__6655_6659 = G__6676;
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
var seq__6681_6685 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6682_6686 = null;
var count__6683_6687 = (0);
var i__6684_6688 = (0);
while(true){
if((i__6684_6688 < count__6683_6687)){
var node_6689 = cljs.core._nth.call(null,chunk__6682_6686,i__6684_6688);
goog.dom.classes.toggle(node_6689,class$);

var G__6690 = seq__6681_6685;
var G__6691 = chunk__6682_6686;
var G__6692 = count__6683_6687;
var G__6693 = (i__6684_6688 + (1));
seq__6681_6685 = G__6690;
chunk__6682_6686 = G__6691;
count__6683_6687 = G__6692;
i__6684_6688 = G__6693;
continue;
} else {
var temp__4425__auto___6694 = cljs.core.seq.call(null,seq__6681_6685);
if(temp__4425__auto___6694){
var seq__6681_6695__$1 = temp__4425__auto___6694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6681_6695__$1)){
var c__5792__auto___6696 = cljs.core.chunk_first.call(null,seq__6681_6695__$1);
var G__6697 = cljs.core.chunk_rest.call(null,seq__6681_6695__$1);
var G__6698 = c__5792__auto___6696;
var G__6699 = cljs.core.count.call(null,c__5792__auto___6696);
var G__6700 = (0);
seq__6681_6685 = G__6697;
chunk__6682_6686 = G__6698;
count__6683_6687 = G__6699;
i__6684_6688 = G__6700;
continue;
} else {
var node_6701 = cljs.core.first.call(null,seq__6681_6695__$1);
goog.dom.classes.toggle(node_6701,class$);

var G__6702 = cljs.core.next.call(null,seq__6681_6695__$1);
var G__6703 = null;
var G__6704 = (0);
var G__6705 = (0);
seq__6681_6685 = G__6702;
chunk__6682_6686 = G__6703;
count__6683_6687 = G__6704;
i__6684_6688 = G__6705;
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
var classes_6714__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6710_6715 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6711_6716 = null;
var count__6712_6717 = (0);
var i__6713_6718 = (0);
while(true){
if((i__6713_6718 < count__6712_6717)){
var node_6719 = cljs.core._nth.call(null,chunk__6711_6716,i__6713_6718);
goog.dom.classes.set(node_6719,classes_6714__$1);

var G__6720 = seq__6710_6715;
var G__6721 = chunk__6711_6716;
var G__6722 = count__6712_6717;
var G__6723 = (i__6713_6718 + (1));
seq__6710_6715 = G__6720;
chunk__6711_6716 = G__6721;
count__6712_6717 = G__6722;
i__6713_6718 = G__6723;
continue;
} else {
var temp__4425__auto___6724 = cljs.core.seq.call(null,seq__6710_6715);
if(temp__4425__auto___6724){
var seq__6710_6725__$1 = temp__4425__auto___6724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6725__$1)){
var c__5792__auto___6726 = cljs.core.chunk_first.call(null,seq__6710_6725__$1);
var G__6727 = cljs.core.chunk_rest.call(null,seq__6710_6725__$1);
var G__6728 = c__5792__auto___6726;
var G__6729 = cljs.core.count.call(null,c__5792__auto___6726);
var G__6730 = (0);
seq__6710_6715 = G__6727;
chunk__6711_6716 = G__6728;
count__6712_6717 = G__6729;
i__6713_6718 = G__6730;
continue;
} else {
var node_6731 = cljs.core.first.call(null,seq__6710_6725__$1);
goog.dom.classes.set(node_6731,classes_6714__$1);

var G__6732 = cljs.core.next.call(null,seq__6710_6725__$1);
var G__6733 = null;
var G__6734 = (0);
var G__6735 = (0);
seq__6710_6715 = G__6732;
chunk__6711_6716 = G__6733;
count__6712_6717 = G__6734;
i__6713_6718 = G__6735;
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
var seq__6740_6744 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6741_6745 = null;
var count__6742_6746 = (0);
var i__6743_6747 = (0);
while(true){
if((i__6743_6747 < count__6742_6746)){
var node_6748 = cljs.core._nth.call(null,chunk__6741_6745,i__6743_6747);
goog.dom.setTextContent(node_6748,value);

var G__6749 = seq__6740_6744;
var G__6750 = chunk__6741_6745;
var G__6751 = count__6742_6746;
var G__6752 = (i__6743_6747 + (1));
seq__6740_6744 = G__6749;
chunk__6741_6745 = G__6750;
count__6742_6746 = G__6751;
i__6743_6747 = G__6752;
continue;
} else {
var temp__4425__auto___6753 = cljs.core.seq.call(null,seq__6740_6744);
if(temp__4425__auto___6753){
var seq__6740_6754__$1 = temp__4425__auto___6753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6740_6754__$1)){
var c__5792__auto___6755 = cljs.core.chunk_first.call(null,seq__6740_6754__$1);
var G__6756 = cljs.core.chunk_rest.call(null,seq__6740_6754__$1);
var G__6757 = c__5792__auto___6755;
var G__6758 = cljs.core.count.call(null,c__5792__auto___6755);
var G__6759 = (0);
seq__6740_6744 = G__6756;
chunk__6741_6745 = G__6757;
count__6742_6746 = G__6758;
i__6743_6747 = G__6759;
continue;
} else {
var node_6760 = cljs.core.first.call(null,seq__6740_6754__$1);
goog.dom.setTextContent(node_6760,value);

var G__6761 = cljs.core.next.call(null,seq__6740_6754__$1);
var G__6762 = null;
var G__6763 = (0);
var G__6764 = (0);
seq__6740_6744 = G__6761;
chunk__6741_6745 = G__6762;
count__6742_6746 = G__6763;
i__6743_6747 = G__6764;
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
var seq__6769_6773 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6770_6774 = null;
var count__6771_6775 = (0);
var i__6772_6776 = (0);
while(true){
if((i__6772_6776 < count__6771_6775)){
var node_6777 = cljs.core._nth.call(null,chunk__6770_6774,i__6772_6776);
goog.dom.forms.setValue(node_6777,value);

var G__6778 = seq__6769_6773;
var G__6779 = chunk__6770_6774;
var G__6780 = count__6771_6775;
var G__6781 = (i__6772_6776 + (1));
seq__6769_6773 = G__6778;
chunk__6770_6774 = G__6779;
count__6771_6775 = G__6780;
i__6772_6776 = G__6781;
continue;
} else {
var temp__4425__auto___6782 = cljs.core.seq.call(null,seq__6769_6773);
if(temp__4425__auto___6782){
var seq__6769_6783__$1 = temp__4425__auto___6782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6769_6783__$1)){
var c__5792__auto___6784 = cljs.core.chunk_first.call(null,seq__6769_6783__$1);
var G__6785 = cljs.core.chunk_rest.call(null,seq__6769_6783__$1);
var G__6786 = c__5792__auto___6784;
var G__6787 = cljs.core.count.call(null,c__5792__auto___6784);
var G__6788 = (0);
seq__6769_6773 = G__6785;
chunk__6770_6774 = G__6786;
count__6771_6775 = G__6787;
i__6772_6776 = G__6788;
continue;
} else {
var node_6789 = cljs.core.first.call(null,seq__6769_6783__$1);
goog.dom.forms.setValue(node_6789,value);

var G__6790 = cljs.core.next.call(null,seq__6769_6783__$1);
var G__6791 = null;
var G__6792 = (0);
var G__6793 = (0);
seq__6769_6773 = G__6790;
chunk__6770_6774 = G__6791;
count__6771_6775 = G__6792;
i__6772_6776 = G__6793;
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
var value_6804 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__6800_6805 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__6801_6806 = null;
var count__6802_6807 = (0);
var i__6803_6808 = (0);
while(true){
if((i__6803_6808 < count__6802_6807)){
var node_6809 = cljs.core._nth.call(null,chunk__6801_6806,i__6803_6808);
node_6809.innerHTML = value_6804;

var G__6810 = seq__6800_6805;
var G__6811 = chunk__6801_6806;
var G__6812 = count__6802_6807;
var G__6813 = (i__6803_6808 + (1));
seq__6800_6805 = G__6810;
chunk__6801_6806 = G__6811;
count__6802_6807 = G__6812;
i__6803_6808 = G__6813;
continue;
} else {
var temp__4425__auto___6814 = cljs.core.seq.call(null,seq__6800_6805);
if(temp__4425__auto___6814){
var seq__6800_6815__$1 = temp__4425__auto___6814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6800_6815__$1)){
var c__5792__auto___6816 = cljs.core.chunk_first.call(null,seq__6800_6815__$1);
var G__6817 = cljs.core.chunk_rest.call(null,seq__6800_6815__$1);
var G__6818 = c__5792__auto___6816;
var G__6819 = cljs.core.count.call(null,c__5792__auto___6816);
var G__6820 = (0);
seq__6800_6805 = G__6817;
chunk__6801_6806 = G__6818;
count__6802_6807 = G__6819;
i__6803_6808 = G__6820;
continue;
} else {
var node_6821 = cljs.core.first.call(null,seq__6800_6815__$1);
node_6821.innerHTML = value_6804;

var G__6822 = cljs.core.next.call(null,seq__6800_6815__$1);
var G__6823 = null;
var G__6824 = (0);
var G__6825 = (0);
seq__6800_6805 = G__6822;
chunk__6801_6806 = G__6823;
count__6802_6807 = G__6824;
i__6803_6808 = G__6825;
continue;
}
} else {
}
}
break;
}
}catch (e6799){if((e6799 instanceof Error)){
var e_6826 = e6799;
domina.core.replace_children_BANG_.call(null,content,value_6804);
} else {
throw e6799;

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
var args6827 = [];
var len__6047__auto___6830 = arguments.length;
var i__6048__auto___6831 = (0);
while(true){
if((i__6048__auto___6831 < len__6047__auto___6830)){
args6827.push((arguments[i__6048__auto___6831]));

var G__6832 = (i__6048__auto___6831 + (1));
i__6048__auto___6831 = G__6832;
continue;
} else {
}
break;
}

var G__6829 = args6827.length;
switch (G__6829) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6827.length)].join('')));

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
var seq__6840_6844 = cljs.core.seq.call(null,children);
var chunk__6841_6845 = null;
var count__6842_6846 = (0);
var i__6843_6847 = (0);
while(true){
if((i__6843_6847 < count__6842_6846)){
var child_6848 = cljs.core._nth.call(null,chunk__6841_6845,i__6843_6847);
frag.appendChild(child_6848);

var G__6849 = seq__6840_6844;
var G__6850 = chunk__6841_6845;
var G__6851 = count__6842_6846;
var G__6852 = (i__6843_6847 + (1));
seq__6840_6844 = G__6849;
chunk__6841_6845 = G__6850;
count__6842_6846 = G__6851;
i__6843_6847 = G__6852;
continue;
} else {
var temp__4425__auto___6853 = cljs.core.seq.call(null,seq__6840_6844);
if(temp__4425__auto___6853){
var seq__6840_6854__$1 = temp__4425__auto___6853;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6840_6854__$1)){
var c__5792__auto___6855 = cljs.core.chunk_first.call(null,seq__6840_6854__$1);
var G__6856 = cljs.core.chunk_rest.call(null,seq__6840_6854__$1);
var G__6857 = c__5792__auto___6855;
var G__6858 = cljs.core.count.call(null,c__5792__auto___6855);
var G__6859 = (0);
seq__6840_6844 = G__6856;
chunk__6841_6845 = G__6857;
count__6842_6846 = G__6858;
i__6843_6847 = G__6859;
continue;
} else {
var child_6860 = cljs.core.first.call(null,seq__6840_6854__$1);
frag.appendChild(child_6860);

var G__6861 = cljs.core.next.call(null,seq__6840_6854__$1);
var G__6862 = null;
var G__6863 = (0);
var G__6864 = (0);
seq__6840_6844 = G__6861;
chunk__6841_6845 = G__6862;
count__6842_6846 = G__6863;
i__6843_6847 = G__6864;
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
return (function (p1__6834_SHARP_,p2__6835_SHARP_){
return f.call(null,p1__6834_SHARP_,p2__6835_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args6865 = [];
var len__6047__auto___6868 = arguments.length;
var i__6048__auto___6869 = (0);
while(true){
if((i__6048__auto___6869 < len__6047__auto___6868)){
args6865.push((arguments[i__6048__auto___6869]));

var G__6870 = (i__6048__auto___6869 + (1));
i__6048__auto___6869 = G__6870;
continue;
} else {
}
break;
}

var G__6867 = args6865.length;
switch (G__6867) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6865.length)].join('')));

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
var args6872 = [];
var len__6047__auto___6875 = arguments.length;
var i__6048__auto___6876 = (0);
while(true){
if((i__6048__auto___6876 < len__6047__auto___6875)){
args6872.push((arguments[i__6048__auto___6876]));

var G__6877 = (i__6048__auto___6876 + (1));
i__6048__auto___6876 = G__6877;
continue;
} else {
}
break;
}

var G__6874 = args6872.length;
switch (G__6874) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6872.length)].join('')));

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
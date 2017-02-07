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
var opt_wrapper_7777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_7778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_7779 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7779,opt_wrapper_7777,table_section_wrapper_7778,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_7777,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_7778,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7778,cell_wrapper_7779,table_section_wrapper_7778,table_section_wrapper_7778]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4976__auto__ = div.firstChild;
if(cljs.core.truth_(and__4976__auto__)){
return div.firstChild.childNodes;
} else {
return and__4976__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__7784 = cljs.core.seq.call(null,tbody);
var chunk__7785 = null;
var count__7786 = (0);
var i__7787 = (0);
while(true){
if((i__7787 < count__7786)){
var child = cljs.core._nth.call(null,chunk__7785,i__7787);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7788 = seq__7784;
var G__7789 = chunk__7785;
var G__7790 = count__7786;
var G__7791 = (i__7787 + (1));
seq__7784 = G__7788;
chunk__7785 = G__7789;
count__7786 = G__7790;
i__7787 = G__7791;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7784);
if(temp__4425__auto__){
var seq__7784__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7784__$1)){
var c__5791__auto__ = cljs.core.chunk_first.call(null,seq__7784__$1);
var G__7792 = cljs.core.chunk_rest.call(null,seq__7784__$1);
var G__7793 = c__5791__auto__;
var G__7794 = cljs.core.count.call(null,c__5791__auto__);
var G__7795 = (0);
seq__7784 = G__7792;
chunk__7785 = G__7793;
count__7786 = G__7794;
i__7787 = G__7795;
continue;
} else {
var child = cljs.core.first.call(null,seq__7784__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7796 = cljs.core.next.call(null,seq__7784__$1);
var G__7797 = null;
var G__7798 = (0);
var G__7799 = (0);
seq__7784 = G__7796;
chunk__7785 = G__7797;
count__7786 = G__7798;
i__7787 = G__7799;
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
var vec__7801 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__7801,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__7801,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__7801,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__7802 = wrapper.lastChild;
var G__7803 = (level - (1));
wrapper = G__7802;
level = G__7803;
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
var len__6046__auto___7805 = arguments.length;
var i__6047__auto___7806 = (0);
while(true){
if((i__6047__auto___7806 < len__6046__auto___7805)){
args__6053__auto__.push((arguments[i__6047__auto___7806]));

var G__7807 = (i__6047__auto___7806 + (1));
i__6047__auto___7806 = G__7807;
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

domina.core.log_debug.cljs$lang$applyTo = (function (seq7804){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7804));
});
domina.core.log = (function domina$core$log(var_args){
var args__6053__auto__ = [];
var len__6046__auto___7809 = arguments.length;
var i__6047__auto___7810 = (0);
while(true){
if((i__6047__auto___7810 < len__6046__auto___7809)){
args__6053__auto__.push((arguments[i__6047__auto___7810]));

var G__7811 = (i__6047__auto___7810 + (1));
i__6047__auto___7810 = G__7811;
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

domina.core.log.cljs$lang$applyTo = (function (seq7808){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7808));
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
var len__6046__auto___7813 = arguments.length;
var i__6047__auto___7814 = (0);
while(true){
if((i__6047__auto___7814 < len__6046__auto___7813)){
args__6053__auto__.push((arguments[i__6047__auto___7814]));

var G__7815 = (i__6047__auto___7814 + (1));
i__6047__auto___7814 = G__7815;
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

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq7812){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7812));
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
return cljs.core.map.call(null,(function (p1__7816_SHARP_){
return p1__7816_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__7817_SHARP_,p2__7818_SHARP_){
return goog.dom.insertChildAt(p1__7817_SHARP_,p2__7818_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__7820_SHARP_,p2__7819_SHARP_){
return goog.dom.insertSiblingBefore(p2__7819_SHARP_,p1__7820_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__7822_SHARP_,p2__7821_SHARP_){
return goog.dom.insertSiblingAfter(p2__7821_SHARP_,p1__7822_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__7824_SHARP_,p2__7823_SHARP_){
return goog.dom.replaceNode(p2__7823_SHARP_,p1__7824_SHARP_);
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
var len__6046__auto___7832 = arguments.length;
var i__6047__auto___7833 = (0);
while(true){
if((i__6047__auto___7833 < len__6046__auto___7832)){
args__6053__auto__.push((arguments[i__6047__auto___7833]));

var G__7834 = (i__6047__auto___7833 + (1));
i__6047__auto___7833 = G__7834;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__7828_7835 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7829_7836 = null;
var count__7830_7837 = (0);
var i__7831_7838 = (0);
while(true){
if((i__7831_7838 < count__7830_7837)){
var n_7839 = cljs.core._nth.call(null,chunk__7829_7836,i__7831_7838);
goog.style.setStyle(n_7839,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7840 = seq__7828_7835;
var G__7841 = chunk__7829_7836;
var G__7842 = count__7830_7837;
var G__7843 = (i__7831_7838 + (1));
seq__7828_7835 = G__7840;
chunk__7829_7836 = G__7841;
count__7830_7837 = G__7842;
i__7831_7838 = G__7843;
continue;
} else {
var temp__4425__auto___7844 = cljs.core.seq.call(null,seq__7828_7835);
if(temp__4425__auto___7844){
var seq__7828_7845__$1 = temp__4425__auto___7844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7828_7845__$1)){
var c__5791__auto___7846 = cljs.core.chunk_first.call(null,seq__7828_7845__$1);
var G__7847 = cljs.core.chunk_rest.call(null,seq__7828_7845__$1);
var G__7848 = c__5791__auto___7846;
var G__7849 = cljs.core.count.call(null,c__5791__auto___7846);
var G__7850 = (0);
seq__7828_7835 = G__7847;
chunk__7829_7836 = G__7848;
count__7830_7837 = G__7849;
i__7831_7838 = G__7850;
continue;
} else {
var n_7851 = cljs.core.first.call(null,seq__7828_7845__$1);
goog.style.setStyle(n_7851,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7852 = cljs.core.next.call(null,seq__7828_7845__$1);
var G__7853 = null;
var G__7854 = (0);
var G__7855 = (0);
seq__7828_7835 = G__7852;
chunk__7829_7836 = G__7853;
count__7830_7837 = G__7854;
i__7831_7838 = G__7855;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq7825){
var G__7826 = cljs.core.first.call(null,seq7825);
var seq7825__$1 = cljs.core.next.call(null,seq7825);
var G__7827 = cljs.core.first.call(null,seq7825__$1);
var seq7825__$2 = cljs.core.next.call(null,seq7825__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7826,G__7827,seq7825__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6053__auto__ = [];
var len__6046__auto___7863 = arguments.length;
var i__6047__auto___7864 = (0);
while(true){
if((i__6047__auto___7864 < len__6046__auto___7863)){
args__6053__auto__.push((arguments[i__6047__auto___7864]));

var G__7865 = (i__6047__auto___7864 + (1));
i__6047__auto___7864 = G__7865;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((2) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6054__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__7859_7866 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7860_7867 = null;
var count__7861_7868 = (0);
var i__7862_7869 = (0);
while(true){
if((i__7862_7869 < count__7861_7868)){
var n_7870 = cljs.core._nth.call(null,chunk__7860_7867,i__7862_7869);
n_7870.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7871 = seq__7859_7866;
var G__7872 = chunk__7860_7867;
var G__7873 = count__7861_7868;
var G__7874 = (i__7862_7869 + (1));
seq__7859_7866 = G__7871;
chunk__7860_7867 = G__7872;
count__7861_7868 = G__7873;
i__7862_7869 = G__7874;
continue;
} else {
var temp__4425__auto___7875 = cljs.core.seq.call(null,seq__7859_7866);
if(temp__4425__auto___7875){
var seq__7859_7876__$1 = temp__4425__auto___7875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7859_7876__$1)){
var c__5791__auto___7877 = cljs.core.chunk_first.call(null,seq__7859_7876__$1);
var G__7878 = cljs.core.chunk_rest.call(null,seq__7859_7876__$1);
var G__7879 = c__5791__auto___7877;
var G__7880 = cljs.core.count.call(null,c__5791__auto___7877);
var G__7881 = (0);
seq__7859_7866 = G__7878;
chunk__7860_7867 = G__7879;
count__7861_7868 = G__7880;
i__7862_7869 = G__7881;
continue;
} else {
var n_7882 = cljs.core.first.call(null,seq__7859_7876__$1);
n_7882.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7883 = cljs.core.next.call(null,seq__7859_7876__$1);
var G__7884 = null;
var G__7885 = (0);
var G__7886 = (0);
seq__7859_7866 = G__7883;
chunk__7860_7867 = G__7884;
count__7861_7868 = G__7885;
i__7862_7869 = G__7886;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq7856){
var G__7857 = cljs.core.first.call(null,seq7856);
var seq7856__$1 = cljs.core.next.call(null,seq7856);
var G__7858 = cljs.core.first.call(null,seq7856__$1);
var seq7856__$2 = cljs.core.next.call(null,seq7856__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7857,G__7858,seq7856__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__7891_7895 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7892_7896 = null;
var count__7893_7897 = (0);
var i__7894_7898 = (0);
while(true){
if((i__7894_7898 < count__7893_7897)){
var n_7899 = cljs.core._nth.call(null,chunk__7892_7896,i__7894_7898);
n_7899.removeAttribute(cljs.core.name.call(null,name));

var G__7900 = seq__7891_7895;
var G__7901 = chunk__7892_7896;
var G__7902 = count__7893_7897;
var G__7903 = (i__7894_7898 + (1));
seq__7891_7895 = G__7900;
chunk__7892_7896 = G__7901;
count__7893_7897 = G__7902;
i__7894_7898 = G__7903;
continue;
} else {
var temp__4425__auto___7904 = cljs.core.seq.call(null,seq__7891_7895);
if(temp__4425__auto___7904){
var seq__7891_7905__$1 = temp__4425__auto___7904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7891_7905__$1)){
var c__5791__auto___7906 = cljs.core.chunk_first.call(null,seq__7891_7905__$1);
var G__7907 = cljs.core.chunk_rest.call(null,seq__7891_7905__$1);
var G__7908 = c__5791__auto___7906;
var G__7909 = cljs.core.count.call(null,c__5791__auto___7906);
var G__7910 = (0);
seq__7891_7895 = G__7907;
chunk__7892_7896 = G__7908;
count__7893_7897 = G__7909;
i__7894_7898 = G__7910;
continue;
} else {
var n_7911 = cljs.core.first.call(null,seq__7891_7905__$1);
n_7911.removeAttribute(cljs.core.name.call(null,name));

var G__7912 = cljs.core.next.call(null,seq__7891_7905__$1);
var G__7913 = null;
var G__7914 = (0);
var G__7915 = (0);
seq__7891_7895 = G__7912;
chunk__7892_7896 = G__7913;
count__7893_7897 = G__7914;
i__7894_7898 = G__7915;
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
var vec__7917 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__7917,(0),null);
var v = cljs.core.nth.call(null,vec__7917,(1),null);
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
return (function (p1__7918_SHARP_){
var attr = attrs__$1.item(p1__7918_SHARP_);
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
var seq__7925_7931 = cljs.core.seq.call(null,styles);
var chunk__7926_7932 = null;
var count__7927_7933 = (0);
var i__7928_7934 = (0);
while(true){
if((i__7928_7934 < count__7927_7933)){
var vec__7929_7935 = cljs.core._nth.call(null,chunk__7926_7932,i__7928_7934);
var name_7936 = cljs.core.nth.call(null,vec__7929_7935,(0),null);
var value_7937 = cljs.core.nth.call(null,vec__7929_7935,(1),null);
domina.core.set_style_BANG_.call(null,content,name_7936,value_7937);

var G__7938 = seq__7925_7931;
var G__7939 = chunk__7926_7932;
var G__7940 = count__7927_7933;
var G__7941 = (i__7928_7934 + (1));
seq__7925_7931 = G__7938;
chunk__7926_7932 = G__7939;
count__7927_7933 = G__7940;
i__7928_7934 = G__7941;
continue;
} else {
var temp__4425__auto___7942 = cljs.core.seq.call(null,seq__7925_7931);
if(temp__4425__auto___7942){
var seq__7925_7943__$1 = temp__4425__auto___7942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7925_7943__$1)){
var c__5791__auto___7944 = cljs.core.chunk_first.call(null,seq__7925_7943__$1);
var G__7945 = cljs.core.chunk_rest.call(null,seq__7925_7943__$1);
var G__7946 = c__5791__auto___7944;
var G__7947 = cljs.core.count.call(null,c__5791__auto___7944);
var G__7948 = (0);
seq__7925_7931 = G__7945;
chunk__7926_7932 = G__7946;
count__7927_7933 = G__7947;
i__7928_7934 = G__7948;
continue;
} else {
var vec__7930_7949 = cljs.core.first.call(null,seq__7925_7943__$1);
var name_7950 = cljs.core.nth.call(null,vec__7930_7949,(0),null);
var value_7951 = cljs.core.nth.call(null,vec__7930_7949,(1),null);
domina.core.set_style_BANG_.call(null,content,name_7950,value_7951);

var G__7952 = cljs.core.next.call(null,seq__7925_7943__$1);
var G__7953 = null;
var G__7954 = (0);
var G__7955 = (0);
seq__7925_7931 = G__7952;
chunk__7926_7932 = G__7953;
count__7927_7933 = G__7954;
i__7928_7934 = G__7955;
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
var seq__7962_7968 = cljs.core.seq.call(null,attrs);
var chunk__7963_7969 = null;
var count__7964_7970 = (0);
var i__7965_7971 = (0);
while(true){
if((i__7965_7971 < count__7964_7970)){
var vec__7966_7972 = cljs.core._nth.call(null,chunk__7963_7969,i__7965_7971);
var name_7973 = cljs.core.nth.call(null,vec__7966_7972,(0),null);
var value_7974 = cljs.core.nth.call(null,vec__7966_7972,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_7973,value_7974);

var G__7975 = seq__7962_7968;
var G__7976 = chunk__7963_7969;
var G__7977 = count__7964_7970;
var G__7978 = (i__7965_7971 + (1));
seq__7962_7968 = G__7975;
chunk__7963_7969 = G__7976;
count__7964_7970 = G__7977;
i__7965_7971 = G__7978;
continue;
} else {
var temp__4425__auto___7979 = cljs.core.seq.call(null,seq__7962_7968);
if(temp__4425__auto___7979){
var seq__7962_7980__$1 = temp__4425__auto___7979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7962_7980__$1)){
var c__5791__auto___7981 = cljs.core.chunk_first.call(null,seq__7962_7980__$1);
var G__7982 = cljs.core.chunk_rest.call(null,seq__7962_7980__$1);
var G__7983 = c__5791__auto___7981;
var G__7984 = cljs.core.count.call(null,c__5791__auto___7981);
var G__7985 = (0);
seq__7962_7968 = G__7982;
chunk__7963_7969 = G__7983;
count__7964_7970 = G__7984;
i__7965_7971 = G__7985;
continue;
} else {
var vec__7967_7986 = cljs.core.first.call(null,seq__7962_7980__$1);
var name_7987 = cljs.core.nth.call(null,vec__7967_7986,(0),null);
var value_7988 = cljs.core.nth.call(null,vec__7967_7986,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_7987,value_7988);

var G__7989 = cljs.core.next.call(null,seq__7962_7980__$1);
var G__7990 = null;
var G__7991 = (0);
var G__7992 = (0);
seq__7962_7968 = G__7989;
chunk__7963_7969 = G__7990;
count__7964_7970 = G__7991;
i__7965_7971 = G__7992;
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
var seq__7997_8001 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7998_8002 = null;
var count__7999_8003 = (0);
var i__8000_8004 = (0);
while(true){
if((i__8000_8004 < count__7999_8003)){
var node_8005 = cljs.core._nth.call(null,chunk__7998_8002,i__8000_8004);
goog.dom.classes.add(node_8005,class$);

var G__8006 = seq__7997_8001;
var G__8007 = chunk__7998_8002;
var G__8008 = count__7999_8003;
var G__8009 = (i__8000_8004 + (1));
seq__7997_8001 = G__8006;
chunk__7998_8002 = G__8007;
count__7999_8003 = G__8008;
i__8000_8004 = G__8009;
continue;
} else {
var temp__4425__auto___8010 = cljs.core.seq.call(null,seq__7997_8001);
if(temp__4425__auto___8010){
var seq__7997_8011__$1 = temp__4425__auto___8010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7997_8011__$1)){
var c__5791__auto___8012 = cljs.core.chunk_first.call(null,seq__7997_8011__$1);
var G__8013 = cljs.core.chunk_rest.call(null,seq__7997_8011__$1);
var G__8014 = c__5791__auto___8012;
var G__8015 = cljs.core.count.call(null,c__5791__auto___8012);
var G__8016 = (0);
seq__7997_8001 = G__8013;
chunk__7998_8002 = G__8014;
count__7999_8003 = G__8015;
i__8000_8004 = G__8016;
continue;
} else {
var node_8017 = cljs.core.first.call(null,seq__7997_8011__$1);
goog.dom.classes.add(node_8017,class$);

var G__8018 = cljs.core.next.call(null,seq__7997_8011__$1);
var G__8019 = null;
var G__8020 = (0);
var G__8021 = (0);
seq__7997_8001 = G__8018;
chunk__7998_8002 = G__8019;
count__7999_8003 = G__8020;
i__8000_8004 = G__8021;
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
var seq__8026_8030 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8027_8031 = null;
var count__8028_8032 = (0);
var i__8029_8033 = (0);
while(true){
if((i__8029_8033 < count__8028_8032)){
var node_8034 = cljs.core._nth.call(null,chunk__8027_8031,i__8029_8033);
goog.dom.classes.remove(node_8034,class$);

var G__8035 = seq__8026_8030;
var G__8036 = chunk__8027_8031;
var G__8037 = count__8028_8032;
var G__8038 = (i__8029_8033 + (1));
seq__8026_8030 = G__8035;
chunk__8027_8031 = G__8036;
count__8028_8032 = G__8037;
i__8029_8033 = G__8038;
continue;
} else {
var temp__4425__auto___8039 = cljs.core.seq.call(null,seq__8026_8030);
if(temp__4425__auto___8039){
var seq__8026_8040__$1 = temp__4425__auto___8039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8026_8040__$1)){
var c__5791__auto___8041 = cljs.core.chunk_first.call(null,seq__8026_8040__$1);
var G__8042 = cljs.core.chunk_rest.call(null,seq__8026_8040__$1);
var G__8043 = c__5791__auto___8041;
var G__8044 = cljs.core.count.call(null,c__5791__auto___8041);
var G__8045 = (0);
seq__8026_8030 = G__8042;
chunk__8027_8031 = G__8043;
count__8028_8032 = G__8044;
i__8029_8033 = G__8045;
continue;
} else {
var node_8046 = cljs.core.first.call(null,seq__8026_8040__$1);
goog.dom.classes.remove(node_8046,class$);

var G__8047 = cljs.core.next.call(null,seq__8026_8040__$1);
var G__8048 = null;
var G__8049 = (0);
var G__8050 = (0);
seq__8026_8030 = G__8047;
chunk__8027_8031 = G__8048;
count__8028_8032 = G__8049;
i__8029_8033 = G__8050;
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
var seq__8055_8059 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8056_8060 = null;
var count__8057_8061 = (0);
var i__8058_8062 = (0);
while(true){
if((i__8058_8062 < count__8057_8061)){
var node_8063 = cljs.core._nth.call(null,chunk__8056_8060,i__8058_8062);
goog.dom.classes.toggle(node_8063,class$);

var G__8064 = seq__8055_8059;
var G__8065 = chunk__8056_8060;
var G__8066 = count__8057_8061;
var G__8067 = (i__8058_8062 + (1));
seq__8055_8059 = G__8064;
chunk__8056_8060 = G__8065;
count__8057_8061 = G__8066;
i__8058_8062 = G__8067;
continue;
} else {
var temp__4425__auto___8068 = cljs.core.seq.call(null,seq__8055_8059);
if(temp__4425__auto___8068){
var seq__8055_8069__$1 = temp__4425__auto___8068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8055_8069__$1)){
var c__5791__auto___8070 = cljs.core.chunk_first.call(null,seq__8055_8069__$1);
var G__8071 = cljs.core.chunk_rest.call(null,seq__8055_8069__$1);
var G__8072 = c__5791__auto___8070;
var G__8073 = cljs.core.count.call(null,c__5791__auto___8070);
var G__8074 = (0);
seq__8055_8059 = G__8071;
chunk__8056_8060 = G__8072;
count__8057_8061 = G__8073;
i__8058_8062 = G__8074;
continue;
} else {
var node_8075 = cljs.core.first.call(null,seq__8055_8069__$1);
goog.dom.classes.toggle(node_8075,class$);

var G__8076 = cljs.core.next.call(null,seq__8055_8069__$1);
var G__8077 = null;
var G__8078 = (0);
var G__8079 = (0);
seq__8055_8059 = G__8076;
chunk__8056_8060 = G__8077;
count__8057_8061 = G__8078;
i__8058_8062 = G__8079;
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
var classes_8088__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__8084_8089 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8085_8090 = null;
var count__8086_8091 = (0);
var i__8087_8092 = (0);
while(true){
if((i__8087_8092 < count__8086_8091)){
var node_8093 = cljs.core._nth.call(null,chunk__8085_8090,i__8087_8092);
goog.dom.classes.set(node_8093,classes_8088__$1);

var G__8094 = seq__8084_8089;
var G__8095 = chunk__8085_8090;
var G__8096 = count__8086_8091;
var G__8097 = (i__8087_8092 + (1));
seq__8084_8089 = G__8094;
chunk__8085_8090 = G__8095;
count__8086_8091 = G__8096;
i__8087_8092 = G__8097;
continue;
} else {
var temp__4425__auto___8098 = cljs.core.seq.call(null,seq__8084_8089);
if(temp__4425__auto___8098){
var seq__8084_8099__$1 = temp__4425__auto___8098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8084_8099__$1)){
var c__5791__auto___8100 = cljs.core.chunk_first.call(null,seq__8084_8099__$1);
var G__8101 = cljs.core.chunk_rest.call(null,seq__8084_8099__$1);
var G__8102 = c__5791__auto___8100;
var G__8103 = cljs.core.count.call(null,c__5791__auto___8100);
var G__8104 = (0);
seq__8084_8089 = G__8101;
chunk__8085_8090 = G__8102;
count__8086_8091 = G__8103;
i__8087_8092 = G__8104;
continue;
} else {
var node_8105 = cljs.core.first.call(null,seq__8084_8099__$1);
goog.dom.classes.set(node_8105,classes_8088__$1);

var G__8106 = cljs.core.next.call(null,seq__8084_8099__$1);
var G__8107 = null;
var G__8108 = (0);
var G__8109 = (0);
seq__8084_8089 = G__8106;
chunk__8085_8090 = G__8107;
count__8086_8091 = G__8108;
i__8087_8092 = G__8109;
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
var seq__8114_8118 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8115_8119 = null;
var count__8116_8120 = (0);
var i__8117_8121 = (0);
while(true){
if((i__8117_8121 < count__8116_8120)){
var node_8122 = cljs.core._nth.call(null,chunk__8115_8119,i__8117_8121);
goog.dom.setTextContent(node_8122,value);

var G__8123 = seq__8114_8118;
var G__8124 = chunk__8115_8119;
var G__8125 = count__8116_8120;
var G__8126 = (i__8117_8121 + (1));
seq__8114_8118 = G__8123;
chunk__8115_8119 = G__8124;
count__8116_8120 = G__8125;
i__8117_8121 = G__8126;
continue;
} else {
var temp__4425__auto___8127 = cljs.core.seq.call(null,seq__8114_8118);
if(temp__4425__auto___8127){
var seq__8114_8128__$1 = temp__4425__auto___8127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8114_8128__$1)){
var c__5791__auto___8129 = cljs.core.chunk_first.call(null,seq__8114_8128__$1);
var G__8130 = cljs.core.chunk_rest.call(null,seq__8114_8128__$1);
var G__8131 = c__5791__auto___8129;
var G__8132 = cljs.core.count.call(null,c__5791__auto___8129);
var G__8133 = (0);
seq__8114_8118 = G__8130;
chunk__8115_8119 = G__8131;
count__8116_8120 = G__8132;
i__8117_8121 = G__8133;
continue;
} else {
var node_8134 = cljs.core.first.call(null,seq__8114_8128__$1);
goog.dom.setTextContent(node_8134,value);

var G__8135 = cljs.core.next.call(null,seq__8114_8128__$1);
var G__8136 = null;
var G__8137 = (0);
var G__8138 = (0);
seq__8114_8118 = G__8135;
chunk__8115_8119 = G__8136;
count__8116_8120 = G__8137;
i__8117_8121 = G__8138;
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
var seq__8143_8147 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8144_8148 = null;
var count__8145_8149 = (0);
var i__8146_8150 = (0);
while(true){
if((i__8146_8150 < count__8145_8149)){
var node_8151 = cljs.core._nth.call(null,chunk__8144_8148,i__8146_8150);
goog.dom.forms.setValue(node_8151,value);

var G__8152 = seq__8143_8147;
var G__8153 = chunk__8144_8148;
var G__8154 = count__8145_8149;
var G__8155 = (i__8146_8150 + (1));
seq__8143_8147 = G__8152;
chunk__8144_8148 = G__8153;
count__8145_8149 = G__8154;
i__8146_8150 = G__8155;
continue;
} else {
var temp__4425__auto___8156 = cljs.core.seq.call(null,seq__8143_8147);
if(temp__4425__auto___8156){
var seq__8143_8157__$1 = temp__4425__auto___8156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8143_8157__$1)){
var c__5791__auto___8158 = cljs.core.chunk_first.call(null,seq__8143_8157__$1);
var G__8159 = cljs.core.chunk_rest.call(null,seq__8143_8157__$1);
var G__8160 = c__5791__auto___8158;
var G__8161 = cljs.core.count.call(null,c__5791__auto___8158);
var G__8162 = (0);
seq__8143_8147 = G__8159;
chunk__8144_8148 = G__8160;
count__8145_8149 = G__8161;
i__8146_8150 = G__8162;
continue;
} else {
var node_8163 = cljs.core.first.call(null,seq__8143_8157__$1);
goog.dom.forms.setValue(node_8163,value);

var G__8164 = cljs.core.next.call(null,seq__8143_8157__$1);
var G__8165 = null;
var G__8166 = (0);
var G__8167 = (0);
seq__8143_8147 = G__8164;
chunk__8144_8148 = G__8165;
count__8145_8149 = G__8166;
i__8146_8150 = G__8167;
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
var value_8178 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__8174_8179 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8175_8180 = null;
var count__8176_8181 = (0);
var i__8177_8182 = (0);
while(true){
if((i__8177_8182 < count__8176_8181)){
var node_8183 = cljs.core._nth.call(null,chunk__8175_8180,i__8177_8182);
node_8183.innerHTML = value_8178;

var G__8184 = seq__8174_8179;
var G__8185 = chunk__8175_8180;
var G__8186 = count__8176_8181;
var G__8187 = (i__8177_8182 + (1));
seq__8174_8179 = G__8184;
chunk__8175_8180 = G__8185;
count__8176_8181 = G__8186;
i__8177_8182 = G__8187;
continue;
} else {
var temp__4425__auto___8188 = cljs.core.seq.call(null,seq__8174_8179);
if(temp__4425__auto___8188){
var seq__8174_8189__$1 = temp__4425__auto___8188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8174_8189__$1)){
var c__5791__auto___8190 = cljs.core.chunk_first.call(null,seq__8174_8189__$1);
var G__8191 = cljs.core.chunk_rest.call(null,seq__8174_8189__$1);
var G__8192 = c__5791__auto___8190;
var G__8193 = cljs.core.count.call(null,c__5791__auto___8190);
var G__8194 = (0);
seq__8174_8179 = G__8191;
chunk__8175_8180 = G__8192;
count__8176_8181 = G__8193;
i__8177_8182 = G__8194;
continue;
} else {
var node_8195 = cljs.core.first.call(null,seq__8174_8189__$1);
node_8195.innerHTML = value_8178;

var G__8196 = cljs.core.next.call(null,seq__8174_8189__$1);
var G__8197 = null;
var G__8198 = (0);
var G__8199 = (0);
seq__8174_8179 = G__8196;
chunk__8175_8180 = G__8197;
count__8176_8181 = G__8198;
i__8177_8182 = G__8199;
continue;
}
} else {
}
}
break;
}
}catch (e8173){if((e8173 instanceof Error)){
var e_8200 = e8173;
domina.core.replace_children_BANG_.call(null,content,value_8178);
} else {
throw e8173;

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
var args8201 = [];
var len__6046__auto___8204 = arguments.length;
var i__6047__auto___8205 = (0);
while(true){
if((i__6047__auto___8205 < len__6046__auto___8204)){
args8201.push((arguments[i__6047__auto___8205]));

var G__8206 = (i__6047__auto___8205 + (1));
i__6047__auto___8205 = G__8206;
continue;
} else {
}
break;
}

var G__8203 = args8201.length;
switch (G__8203) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8201.length)].join('')));

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
var seq__8214_8218 = cljs.core.seq.call(null,children);
var chunk__8215_8219 = null;
var count__8216_8220 = (0);
var i__8217_8221 = (0);
while(true){
if((i__8217_8221 < count__8216_8220)){
var child_8222 = cljs.core._nth.call(null,chunk__8215_8219,i__8217_8221);
frag.appendChild(child_8222);

var G__8223 = seq__8214_8218;
var G__8224 = chunk__8215_8219;
var G__8225 = count__8216_8220;
var G__8226 = (i__8217_8221 + (1));
seq__8214_8218 = G__8223;
chunk__8215_8219 = G__8224;
count__8216_8220 = G__8225;
i__8217_8221 = G__8226;
continue;
} else {
var temp__4425__auto___8227 = cljs.core.seq.call(null,seq__8214_8218);
if(temp__4425__auto___8227){
var seq__8214_8228__$1 = temp__4425__auto___8227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8214_8228__$1)){
var c__5791__auto___8229 = cljs.core.chunk_first.call(null,seq__8214_8228__$1);
var G__8230 = cljs.core.chunk_rest.call(null,seq__8214_8228__$1);
var G__8231 = c__5791__auto___8229;
var G__8232 = cljs.core.count.call(null,c__5791__auto___8229);
var G__8233 = (0);
seq__8214_8218 = G__8230;
chunk__8215_8219 = G__8231;
count__8216_8220 = G__8232;
i__8217_8221 = G__8233;
continue;
} else {
var child_8234 = cljs.core.first.call(null,seq__8214_8228__$1);
frag.appendChild(child_8234);

var G__8235 = cljs.core.next.call(null,seq__8214_8228__$1);
var G__8236 = null;
var G__8237 = (0);
var G__8238 = (0);
seq__8214_8218 = G__8235;
chunk__8215_8219 = G__8236;
count__8216_8220 = G__8237;
i__8217_8221 = G__8238;
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
return (function (p1__8208_SHARP_,p2__8209_SHARP_){
return f.call(null,p1__8208_SHARP_,p2__8209_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args8239 = [];
var len__6046__auto___8242 = arguments.length;
var i__6047__auto___8243 = (0);
while(true){
if((i__6047__auto___8243 < len__6046__auto___8242)){
args8239.push((arguments[i__6047__auto___8243]));

var G__8244 = (i__6047__auto___8243 + (1));
i__6047__auto___8243 = G__8244;
continue;
} else {
}
break;
}

var G__8241 = args8239.length;
switch (G__8241) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8239.length)].join('')));

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
var args8246 = [];
var len__6046__auto___8249 = arguments.length;
var i__6047__auto___8250 = (0);
while(true){
if((i__6047__auto___8250 < len__6046__auto___8249)){
args8246.push((arguments[i__6047__auto___8250]));

var G__8251 = (i__6047__auto___8250 + (1));
i__6047__auto___8250 = G__8251;
continue;
} else {
}
break;
}

var G__8248 = args8246.length;
switch (G__8248) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8246.length)].join('')));

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
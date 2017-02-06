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
var opt_wrapper_7824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_7825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_7826 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.core.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7826,opt_wrapper_7824,table_section_wrapper_7825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_7824,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_7825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7825,cell_wrapper_7826,table_section_wrapper_7825,table_section_wrapper_7825]);
domina.core.remove_extraneous_tbody_BANG_ = (function domina$core$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.core.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4977__auto__ = div.firstChild;
if(cljs.core.truth_(and__4977__auto__)){
return div.firstChild.childNodes;
} else {
return and__4977__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__7831 = cljs.core.seq.call(null,tbody);
var chunk__7832 = null;
var count__7833 = (0);
var i__7834 = (0);
while(true){
if((i__7834 < count__7833)){
var child = cljs.core._nth.call(null,chunk__7832,i__7834);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7835 = seq__7831;
var G__7836 = chunk__7832;
var G__7837 = count__7833;
var G__7838 = (i__7834 + (1));
seq__7831 = G__7835;
chunk__7832 = G__7836;
count__7833 = G__7837;
i__7834 = G__7838;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7831);
if(temp__4425__auto__){
var seq__7831__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7831__$1)){
var c__5792__auto__ = cljs.core.chunk_first.call(null,seq__7831__$1);
var G__7839 = cljs.core.chunk_rest.call(null,seq__7831__$1);
var G__7840 = c__5792__auto__;
var G__7841 = cljs.core.count.call(null,c__5792__auto__);
var G__7842 = (0);
seq__7831 = G__7839;
chunk__7832 = G__7840;
count__7833 = G__7841;
i__7834 = G__7842;
continue;
} else {
var child = cljs.core.first.call(null,seq__7831__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__7843 = cljs.core.next.call(null,seq__7831__$1);
var G__7844 = null;
var G__7845 = (0);
var G__7846 = (0);
seq__7831 = G__7843;
chunk__7832 = G__7844;
count__7833 = G__7845;
i__7834 = G__7846;
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
var vec__7848 = cljs.core.get.call(null,domina.core.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.core.wrap_map));
var depth = cljs.core.nth.call(null,vec__7848,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__7848,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__7848,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__7849 = wrapper.lastChild;
var G__7850 = (level - (1));
wrapper = G__7849;
level = G__7850;
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
var len__6047__auto___7852 = arguments.length;
var i__6048__auto___7853 = (0);
while(true){
if((i__6048__auto___7853 < len__6047__auto___7852)){
args__6054__auto__.push((arguments[i__6048__auto___7853]));

var G__7854 = (i__6048__auto___7853 + (1));
i__6048__auto___7853 = G__7854;
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

domina.core.log_debug.cljs$lang$applyTo = (function (seq7851){
return domina.core.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7851));
});
domina.core.log = (function domina$core$log(var_args){
var args__6054__auto__ = [];
var len__6047__auto___7856 = arguments.length;
var i__6048__auto___7857 = (0);
while(true){
if((i__6048__auto___7857 < len__6047__auto___7856)){
args__6054__auto__.push((arguments[i__6048__auto___7857]));

var G__7858 = (i__6048__auto___7857 + (1));
i__6048__auto___7857 = G__7858;
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

domina.core.log.cljs$lang$applyTo = (function (seq7855){
return domina.core.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7855));
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
var len__6047__auto___7860 = arguments.length;
var i__6048__auto___7861 = (0);
while(true){
if((i__6048__auto___7861 < len__6047__auto___7860)){
args__6054__auto__.push((arguments[i__6048__auto___7861]));

var G__7862 = (i__6048__auto___7861 + (1));
i__6048__auto___7861 = G__7862;
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

domina.core.common_ancestor.cljs$lang$applyTo = (function (seq7859){
return domina.core.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7859));
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
return cljs.core.map.call(null,(function (p1__7863_SHARP_){
return p1__7863_SHARP_.cloneNode(true);
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
domina.core.apply_with_cloning.call(null,(function (p1__7864_SHARP_,p2__7865_SHARP_){
return goog.dom.insertChildAt(p1__7864_SHARP_,p2__7865_SHARP_,idx);
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
domina.core.apply_with_cloning.call(null,(function (p1__7867_SHARP_,p2__7866_SHARP_){
return goog.dom.insertSiblingBefore(p2__7866_SHARP_,p1__7867_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.core.insert_after_BANG_ = (function domina$core$insert_after_BANG_(content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__7869_SHARP_,p2__7868_SHARP_){
return goog.dom.insertSiblingAfter(p2__7868_SHARP_,p1__7869_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.core.swap_content_BANG_ = (function domina$core$swap_content_BANG_(old_content,new_content){
domina.core.apply_with_cloning.call(null,(function (p1__7871_SHARP_,p2__7870_SHARP_){
return goog.dom.replaceNode(p2__7870_SHARP_,p1__7871_SHARP_);
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
var len__6047__auto___7879 = arguments.length;
var i__6048__auto___7880 = (0);
while(true){
if((i__6048__auto___7880 < len__6047__auto___7879)){
args__6054__auto__.push((arguments[i__6048__auto___7880]));

var G__7881 = (i__6048__auto___7880 + (1));
i__6048__auto___7880 = G__7881;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__7875_7882 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7876_7883 = null;
var count__7877_7884 = (0);
var i__7878_7885 = (0);
while(true){
if((i__7878_7885 < count__7877_7884)){
var n_7886 = cljs.core._nth.call(null,chunk__7876_7883,i__7878_7885);
goog.style.setStyle(n_7886,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7887 = seq__7875_7882;
var G__7888 = chunk__7876_7883;
var G__7889 = count__7877_7884;
var G__7890 = (i__7878_7885 + (1));
seq__7875_7882 = G__7887;
chunk__7876_7883 = G__7888;
count__7877_7884 = G__7889;
i__7878_7885 = G__7890;
continue;
} else {
var temp__4425__auto___7891 = cljs.core.seq.call(null,seq__7875_7882);
if(temp__4425__auto___7891){
var seq__7875_7892__$1 = temp__4425__auto___7891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7875_7892__$1)){
var c__5792__auto___7893 = cljs.core.chunk_first.call(null,seq__7875_7892__$1);
var G__7894 = cljs.core.chunk_rest.call(null,seq__7875_7892__$1);
var G__7895 = c__5792__auto___7893;
var G__7896 = cljs.core.count.call(null,c__5792__auto___7893);
var G__7897 = (0);
seq__7875_7882 = G__7894;
chunk__7876_7883 = G__7895;
count__7877_7884 = G__7896;
i__7878_7885 = G__7897;
continue;
} else {
var n_7898 = cljs.core.first.call(null,seq__7875_7892__$1);
goog.style.setStyle(n_7898,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7899 = cljs.core.next.call(null,seq__7875_7892__$1);
var G__7900 = null;
var G__7901 = (0);
var G__7902 = (0);
seq__7875_7882 = G__7899;
chunk__7876_7883 = G__7900;
count__7877_7884 = G__7901;
i__7878_7885 = G__7902;
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

domina.core.set_style_BANG_.cljs$lang$applyTo = (function (seq7872){
var G__7873 = cljs.core.first.call(null,seq7872);
var seq7872__$1 = cljs.core.next.call(null,seq7872);
var G__7874 = cljs.core.first.call(null,seq7872__$1);
var seq7872__$2 = cljs.core.next.call(null,seq7872__$1);
return domina.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7873,G__7874,seq7872__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.core.set_attr_BANG_ = (function domina$core$set_attr_BANG_(var_args){
var args__6054__auto__ = [];
var len__6047__auto___7910 = arguments.length;
var i__6048__auto___7911 = (0);
while(true){
if((i__6048__auto___7911 < len__6047__auto___7910)){
args__6054__auto__.push((arguments[i__6048__auto___7911]));

var G__7912 = (i__6048__auto___7911 + (1));
i__6048__auto___7911 = G__7912;
continue;
} else {
}
break;
}

var argseq__6055__auto__ = ((((2) < args__6054__auto__.length))?(new cljs.core.IndexedSeq(args__6054__auto__.slice((2)),(0))):null);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6055__auto__);
});

domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__7906_7913 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7907_7914 = null;
var count__7908_7915 = (0);
var i__7909_7916 = (0);
while(true){
if((i__7909_7916 < count__7908_7915)){
var n_7917 = cljs.core._nth.call(null,chunk__7907_7914,i__7909_7916);
n_7917.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7918 = seq__7906_7913;
var G__7919 = chunk__7907_7914;
var G__7920 = count__7908_7915;
var G__7921 = (i__7909_7916 + (1));
seq__7906_7913 = G__7918;
chunk__7907_7914 = G__7919;
count__7908_7915 = G__7920;
i__7909_7916 = G__7921;
continue;
} else {
var temp__4425__auto___7922 = cljs.core.seq.call(null,seq__7906_7913);
if(temp__4425__auto___7922){
var seq__7906_7923__$1 = temp__4425__auto___7922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7906_7923__$1)){
var c__5792__auto___7924 = cljs.core.chunk_first.call(null,seq__7906_7923__$1);
var G__7925 = cljs.core.chunk_rest.call(null,seq__7906_7923__$1);
var G__7926 = c__5792__auto___7924;
var G__7927 = cljs.core.count.call(null,c__5792__auto___7924);
var G__7928 = (0);
seq__7906_7913 = G__7925;
chunk__7907_7914 = G__7926;
count__7908_7915 = G__7927;
i__7909_7916 = G__7928;
continue;
} else {
var n_7929 = cljs.core.first.call(null,seq__7906_7923__$1);
n_7929.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7930 = cljs.core.next.call(null,seq__7906_7923__$1);
var G__7931 = null;
var G__7932 = (0);
var G__7933 = (0);
seq__7906_7913 = G__7930;
chunk__7907_7914 = G__7931;
count__7908_7915 = G__7932;
i__7909_7916 = G__7933;
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

domina.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq7903){
var G__7904 = cljs.core.first.call(null,seq7903);
var seq7903__$1 = cljs.core.next.call(null,seq7903);
var G__7905 = cljs.core.first.call(null,seq7903__$1);
var seq7903__$2 = cljs.core.next.call(null,seq7903__$1);
return domina.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7904,G__7905,seq7903__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.core.remove_attr_BANG_ = (function domina$core$remove_attr_BANG_(content,name){
var seq__7938_7942 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__7939_7943 = null;
var count__7940_7944 = (0);
var i__7941_7945 = (0);
while(true){
if((i__7941_7945 < count__7940_7944)){
var n_7946 = cljs.core._nth.call(null,chunk__7939_7943,i__7941_7945);
n_7946.removeAttribute(cljs.core.name.call(null,name));

var G__7947 = seq__7938_7942;
var G__7948 = chunk__7939_7943;
var G__7949 = count__7940_7944;
var G__7950 = (i__7941_7945 + (1));
seq__7938_7942 = G__7947;
chunk__7939_7943 = G__7948;
count__7940_7944 = G__7949;
i__7941_7945 = G__7950;
continue;
} else {
var temp__4425__auto___7951 = cljs.core.seq.call(null,seq__7938_7942);
if(temp__4425__auto___7951){
var seq__7938_7952__$1 = temp__4425__auto___7951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7938_7952__$1)){
var c__5792__auto___7953 = cljs.core.chunk_first.call(null,seq__7938_7952__$1);
var G__7954 = cljs.core.chunk_rest.call(null,seq__7938_7952__$1);
var G__7955 = c__5792__auto___7953;
var G__7956 = cljs.core.count.call(null,c__5792__auto___7953);
var G__7957 = (0);
seq__7938_7942 = G__7954;
chunk__7939_7943 = G__7955;
count__7940_7944 = G__7956;
i__7941_7945 = G__7957;
continue;
} else {
var n_7958 = cljs.core.first.call(null,seq__7938_7952__$1);
n_7958.removeAttribute(cljs.core.name.call(null,name));

var G__7959 = cljs.core.next.call(null,seq__7938_7952__$1);
var G__7960 = null;
var G__7961 = (0);
var G__7962 = (0);
seq__7938_7942 = G__7959;
chunk__7939_7943 = G__7960;
count__7940_7944 = G__7961;
i__7941_7945 = G__7962;
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
var vec__7964 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__7964,(0),null);
var v = cljs.core.nth.call(null,vec__7964,(1),null);
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
return (function (p1__7965_SHARP_){
var attr = attrs__$1.item(p1__7965_SHARP_);
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
var seq__7972_7978 = cljs.core.seq.call(null,styles);
var chunk__7973_7979 = null;
var count__7974_7980 = (0);
var i__7975_7981 = (0);
while(true){
if((i__7975_7981 < count__7974_7980)){
var vec__7976_7982 = cljs.core._nth.call(null,chunk__7973_7979,i__7975_7981);
var name_7983 = cljs.core.nth.call(null,vec__7976_7982,(0),null);
var value_7984 = cljs.core.nth.call(null,vec__7976_7982,(1),null);
domina.core.set_style_BANG_.call(null,content,name_7983,value_7984);

var G__7985 = seq__7972_7978;
var G__7986 = chunk__7973_7979;
var G__7987 = count__7974_7980;
var G__7988 = (i__7975_7981 + (1));
seq__7972_7978 = G__7985;
chunk__7973_7979 = G__7986;
count__7974_7980 = G__7987;
i__7975_7981 = G__7988;
continue;
} else {
var temp__4425__auto___7989 = cljs.core.seq.call(null,seq__7972_7978);
if(temp__4425__auto___7989){
var seq__7972_7990__$1 = temp__4425__auto___7989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7972_7990__$1)){
var c__5792__auto___7991 = cljs.core.chunk_first.call(null,seq__7972_7990__$1);
var G__7992 = cljs.core.chunk_rest.call(null,seq__7972_7990__$1);
var G__7993 = c__5792__auto___7991;
var G__7994 = cljs.core.count.call(null,c__5792__auto___7991);
var G__7995 = (0);
seq__7972_7978 = G__7992;
chunk__7973_7979 = G__7993;
count__7974_7980 = G__7994;
i__7975_7981 = G__7995;
continue;
} else {
var vec__7977_7996 = cljs.core.first.call(null,seq__7972_7990__$1);
var name_7997 = cljs.core.nth.call(null,vec__7977_7996,(0),null);
var value_7998 = cljs.core.nth.call(null,vec__7977_7996,(1),null);
domina.core.set_style_BANG_.call(null,content,name_7997,value_7998);

var G__7999 = cljs.core.next.call(null,seq__7972_7990__$1);
var G__8000 = null;
var G__8001 = (0);
var G__8002 = (0);
seq__7972_7978 = G__7999;
chunk__7973_7979 = G__8000;
count__7974_7980 = G__8001;
i__7975_7981 = G__8002;
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
var seq__8009_8015 = cljs.core.seq.call(null,attrs);
var chunk__8010_8016 = null;
var count__8011_8017 = (0);
var i__8012_8018 = (0);
while(true){
if((i__8012_8018 < count__8011_8017)){
var vec__8013_8019 = cljs.core._nth.call(null,chunk__8010_8016,i__8012_8018);
var name_8020 = cljs.core.nth.call(null,vec__8013_8019,(0),null);
var value_8021 = cljs.core.nth.call(null,vec__8013_8019,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8020,value_8021);

var G__8022 = seq__8009_8015;
var G__8023 = chunk__8010_8016;
var G__8024 = count__8011_8017;
var G__8025 = (i__8012_8018 + (1));
seq__8009_8015 = G__8022;
chunk__8010_8016 = G__8023;
count__8011_8017 = G__8024;
i__8012_8018 = G__8025;
continue;
} else {
var temp__4425__auto___8026 = cljs.core.seq.call(null,seq__8009_8015);
if(temp__4425__auto___8026){
var seq__8009_8027__$1 = temp__4425__auto___8026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8009_8027__$1)){
var c__5792__auto___8028 = cljs.core.chunk_first.call(null,seq__8009_8027__$1);
var G__8029 = cljs.core.chunk_rest.call(null,seq__8009_8027__$1);
var G__8030 = c__5792__auto___8028;
var G__8031 = cljs.core.count.call(null,c__5792__auto___8028);
var G__8032 = (0);
seq__8009_8015 = G__8029;
chunk__8010_8016 = G__8030;
count__8011_8017 = G__8031;
i__8012_8018 = G__8032;
continue;
} else {
var vec__8014_8033 = cljs.core.first.call(null,seq__8009_8027__$1);
var name_8034 = cljs.core.nth.call(null,vec__8014_8033,(0),null);
var value_8035 = cljs.core.nth.call(null,vec__8014_8033,(1),null);
domina.core.set_attr_BANG_.call(null,content,name_8034,value_8035);

var G__8036 = cljs.core.next.call(null,seq__8009_8027__$1);
var G__8037 = null;
var G__8038 = (0);
var G__8039 = (0);
seq__8009_8015 = G__8036;
chunk__8010_8016 = G__8037;
count__8011_8017 = G__8038;
i__8012_8018 = G__8039;
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
var seq__8044_8048 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8045_8049 = null;
var count__8046_8050 = (0);
var i__8047_8051 = (0);
while(true){
if((i__8047_8051 < count__8046_8050)){
var node_8052 = cljs.core._nth.call(null,chunk__8045_8049,i__8047_8051);
goog.dom.classes.add(node_8052,class$);

var G__8053 = seq__8044_8048;
var G__8054 = chunk__8045_8049;
var G__8055 = count__8046_8050;
var G__8056 = (i__8047_8051 + (1));
seq__8044_8048 = G__8053;
chunk__8045_8049 = G__8054;
count__8046_8050 = G__8055;
i__8047_8051 = G__8056;
continue;
} else {
var temp__4425__auto___8057 = cljs.core.seq.call(null,seq__8044_8048);
if(temp__4425__auto___8057){
var seq__8044_8058__$1 = temp__4425__auto___8057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8044_8058__$1)){
var c__5792__auto___8059 = cljs.core.chunk_first.call(null,seq__8044_8058__$1);
var G__8060 = cljs.core.chunk_rest.call(null,seq__8044_8058__$1);
var G__8061 = c__5792__auto___8059;
var G__8062 = cljs.core.count.call(null,c__5792__auto___8059);
var G__8063 = (0);
seq__8044_8048 = G__8060;
chunk__8045_8049 = G__8061;
count__8046_8050 = G__8062;
i__8047_8051 = G__8063;
continue;
} else {
var node_8064 = cljs.core.first.call(null,seq__8044_8058__$1);
goog.dom.classes.add(node_8064,class$);

var G__8065 = cljs.core.next.call(null,seq__8044_8058__$1);
var G__8066 = null;
var G__8067 = (0);
var G__8068 = (0);
seq__8044_8048 = G__8065;
chunk__8045_8049 = G__8066;
count__8046_8050 = G__8067;
i__8047_8051 = G__8068;
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
var seq__8073_8077 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8074_8078 = null;
var count__8075_8079 = (0);
var i__8076_8080 = (0);
while(true){
if((i__8076_8080 < count__8075_8079)){
var node_8081 = cljs.core._nth.call(null,chunk__8074_8078,i__8076_8080);
goog.dom.classes.remove(node_8081,class$);

var G__8082 = seq__8073_8077;
var G__8083 = chunk__8074_8078;
var G__8084 = count__8075_8079;
var G__8085 = (i__8076_8080 + (1));
seq__8073_8077 = G__8082;
chunk__8074_8078 = G__8083;
count__8075_8079 = G__8084;
i__8076_8080 = G__8085;
continue;
} else {
var temp__4425__auto___8086 = cljs.core.seq.call(null,seq__8073_8077);
if(temp__4425__auto___8086){
var seq__8073_8087__$1 = temp__4425__auto___8086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8073_8087__$1)){
var c__5792__auto___8088 = cljs.core.chunk_first.call(null,seq__8073_8087__$1);
var G__8089 = cljs.core.chunk_rest.call(null,seq__8073_8087__$1);
var G__8090 = c__5792__auto___8088;
var G__8091 = cljs.core.count.call(null,c__5792__auto___8088);
var G__8092 = (0);
seq__8073_8077 = G__8089;
chunk__8074_8078 = G__8090;
count__8075_8079 = G__8091;
i__8076_8080 = G__8092;
continue;
} else {
var node_8093 = cljs.core.first.call(null,seq__8073_8087__$1);
goog.dom.classes.remove(node_8093,class$);

var G__8094 = cljs.core.next.call(null,seq__8073_8087__$1);
var G__8095 = null;
var G__8096 = (0);
var G__8097 = (0);
seq__8073_8077 = G__8094;
chunk__8074_8078 = G__8095;
count__8075_8079 = G__8096;
i__8076_8080 = G__8097;
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
var seq__8102_8106 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8103_8107 = null;
var count__8104_8108 = (0);
var i__8105_8109 = (0);
while(true){
if((i__8105_8109 < count__8104_8108)){
var node_8110 = cljs.core._nth.call(null,chunk__8103_8107,i__8105_8109);
goog.dom.classes.toggle(node_8110,class$);

var G__8111 = seq__8102_8106;
var G__8112 = chunk__8103_8107;
var G__8113 = count__8104_8108;
var G__8114 = (i__8105_8109 + (1));
seq__8102_8106 = G__8111;
chunk__8103_8107 = G__8112;
count__8104_8108 = G__8113;
i__8105_8109 = G__8114;
continue;
} else {
var temp__4425__auto___8115 = cljs.core.seq.call(null,seq__8102_8106);
if(temp__4425__auto___8115){
var seq__8102_8116__$1 = temp__4425__auto___8115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8102_8116__$1)){
var c__5792__auto___8117 = cljs.core.chunk_first.call(null,seq__8102_8116__$1);
var G__8118 = cljs.core.chunk_rest.call(null,seq__8102_8116__$1);
var G__8119 = c__5792__auto___8117;
var G__8120 = cljs.core.count.call(null,c__5792__auto___8117);
var G__8121 = (0);
seq__8102_8106 = G__8118;
chunk__8103_8107 = G__8119;
count__8104_8108 = G__8120;
i__8105_8109 = G__8121;
continue;
} else {
var node_8122 = cljs.core.first.call(null,seq__8102_8116__$1);
goog.dom.classes.toggle(node_8122,class$);

var G__8123 = cljs.core.next.call(null,seq__8102_8116__$1);
var G__8124 = null;
var G__8125 = (0);
var G__8126 = (0);
seq__8102_8106 = G__8123;
chunk__8103_8107 = G__8124;
count__8104_8108 = G__8125;
i__8105_8109 = G__8126;
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
var classes_8135__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__8131_8136 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8132_8137 = null;
var count__8133_8138 = (0);
var i__8134_8139 = (0);
while(true){
if((i__8134_8139 < count__8133_8138)){
var node_8140 = cljs.core._nth.call(null,chunk__8132_8137,i__8134_8139);
goog.dom.classes.set(node_8140,classes_8135__$1);

var G__8141 = seq__8131_8136;
var G__8142 = chunk__8132_8137;
var G__8143 = count__8133_8138;
var G__8144 = (i__8134_8139 + (1));
seq__8131_8136 = G__8141;
chunk__8132_8137 = G__8142;
count__8133_8138 = G__8143;
i__8134_8139 = G__8144;
continue;
} else {
var temp__4425__auto___8145 = cljs.core.seq.call(null,seq__8131_8136);
if(temp__4425__auto___8145){
var seq__8131_8146__$1 = temp__4425__auto___8145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8131_8146__$1)){
var c__5792__auto___8147 = cljs.core.chunk_first.call(null,seq__8131_8146__$1);
var G__8148 = cljs.core.chunk_rest.call(null,seq__8131_8146__$1);
var G__8149 = c__5792__auto___8147;
var G__8150 = cljs.core.count.call(null,c__5792__auto___8147);
var G__8151 = (0);
seq__8131_8136 = G__8148;
chunk__8132_8137 = G__8149;
count__8133_8138 = G__8150;
i__8134_8139 = G__8151;
continue;
} else {
var node_8152 = cljs.core.first.call(null,seq__8131_8146__$1);
goog.dom.classes.set(node_8152,classes_8135__$1);

var G__8153 = cljs.core.next.call(null,seq__8131_8146__$1);
var G__8154 = null;
var G__8155 = (0);
var G__8156 = (0);
seq__8131_8136 = G__8153;
chunk__8132_8137 = G__8154;
count__8133_8138 = G__8155;
i__8134_8139 = G__8156;
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
var seq__8161_8165 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8162_8166 = null;
var count__8163_8167 = (0);
var i__8164_8168 = (0);
while(true){
if((i__8164_8168 < count__8163_8167)){
var node_8169 = cljs.core._nth.call(null,chunk__8162_8166,i__8164_8168);
goog.dom.setTextContent(node_8169,value);

var G__8170 = seq__8161_8165;
var G__8171 = chunk__8162_8166;
var G__8172 = count__8163_8167;
var G__8173 = (i__8164_8168 + (1));
seq__8161_8165 = G__8170;
chunk__8162_8166 = G__8171;
count__8163_8167 = G__8172;
i__8164_8168 = G__8173;
continue;
} else {
var temp__4425__auto___8174 = cljs.core.seq.call(null,seq__8161_8165);
if(temp__4425__auto___8174){
var seq__8161_8175__$1 = temp__4425__auto___8174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8161_8175__$1)){
var c__5792__auto___8176 = cljs.core.chunk_first.call(null,seq__8161_8175__$1);
var G__8177 = cljs.core.chunk_rest.call(null,seq__8161_8175__$1);
var G__8178 = c__5792__auto___8176;
var G__8179 = cljs.core.count.call(null,c__5792__auto___8176);
var G__8180 = (0);
seq__8161_8165 = G__8177;
chunk__8162_8166 = G__8178;
count__8163_8167 = G__8179;
i__8164_8168 = G__8180;
continue;
} else {
var node_8181 = cljs.core.first.call(null,seq__8161_8175__$1);
goog.dom.setTextContent(node_8181,value);

var G__8182 = cljs.core.next.call(null,seq__8161_8175__$1);
var G__8183 = null;
var G__8184 = (0);
var G__8185 = (0);
seq__8161_8165 = G__8182;
chunk__8162_8166 = G__8183;
count__8163_8167 = G__8184;
i__8164_8168 = G__8185;
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
var seq__8190_8194 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8191_8195 = null;
var count__8192_8196 = (0);
var i__8193_8197 = (0);
while(true){
if((i__8193_8197 < count__8192_8196)){
var node_8198 = cljs.core._nth.call(null,chunk__8191_8195,i__8193_8197);
goog.dom.forms.setValue(node_8198,value);

var G__8199 = seq__8190_8194;
var G__8200 = chunk__8191_8195;
var G__8201 = count__8192_8196;
var G__8202 = (i__8193_8197 + (1));
seq__8190_8194 = G__8199;
chunk__8191_8195 = G__8200;
count__8192_8196 = G__8201;
i__8193_8197 = G__8202;
continue;
} else {
var temp__4425__auto___8203 = cljs.core.seq.call(null,seq__8190_8194);
if(temp__4425__auto___8203){
var seq__8190_8204__$1 = temp__4425__auto___8203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8190_8204__$1)){
var c__5792__auto___8205 = cljs.core.chunk_first.call(null,seq__8190_8204__$1);
var G__8206 = cljs.core.chunk_rest.call(null,seq__8190_8204__$1);
var G__8207 = c__5792__auto___8205;
var G__8208 = cljs.core.count.call(null,c__5792__auto___8205);
var G__8209 = (0);
seq__8190_8194 = G__8206;
chunk__8191_8195 = G__8207;
count__8192_8196 = G__8208;
i__8193_8197 = G__8209;
continue;
} else {
var node_8210 = cljs.core.first.call(null,seq__8190_8204__$1);
goog.dom.forms.setValue(node_8210,value);

var G__8211 = cljs.core.next.call(null,seq__8190_8204__$1);
var G__8212 = null;
var G__8213 = (0);
var G__8214 = (0);
seq__8190_8194 = G__8211;
chunk__8191_8195 = G__8212;
count__8192_8196 = G__8213;
i__8193_8197 = G__8214;
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
var value_8225 = clojure.string.replace.call(null,html_string,domina.core.re_xhtml_tag,"<$1></$2>");
try{var seq__8221_8226 = cljs.core.seq.call(null,domina.core.nodes.call(null,content));
var chunk__8222_8227 = null;
var count__8223_8228 = (0);
var i__8224_8229 = (0);
while(true){
if((i__8224_8229 < count__8223_8228)){
var node_8230 = cljs.core._nth.call(null,chunk__8222_8227,i__8224_8229);
node_8230.innerHTML = value_8225;

var G__8231 = seq__8221_8226;
var G__8232 = chunk__8222_8227;
var G__8233 = count__8223_8228;
var G__8234 = (i__8224_8229 + (1));
seq__8221_8226 = G__8231;
chunk__8222_8227 = G__8232;
count__8223_8228 = G__8233;
i__8224_8229 = G__8234;
continue;
} else {
var temp__4425__auto___8235 = cljs.core.seq.call(null,seq__8221_8226);
if(temp__4425__auto___8235){
var seq__8221_8236__$1 = temp__4425__auto___8235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8221_8236__$1)){
var c__5792__auto___8237 = cljs.core.chunk_first.call(null,seq__8221_8236__$1);
var G__8238 = cljs.core.chunk_rest.call(null,seq__8221_8236__$1);
var G__8239 = c__5792__auto___8237;
var G__8240 = cljs.core.count.call(null,c__5792__auto___8237);
var G__8241 = (0);
seq__8221_8226 = G__8238;
chunk__8222_8227 = G__8239;
count__8223_8228 = G__8240;
i__8224_8229 = G__8241;
continue;
} else {
var node_8242 = cljs.core.first.call(null,seq__8221_8236__$1);
node_8242.innerHTML = value_8225;

var G__8243 = cljs.core.next.call(null,seq__8221_8236__$1);
var G__8244 = null;
var G__8245 = (0);
var G__8246 = (0);
seq__8221_8226 = G__8243;
chunk__8222_8227 = G__8244;
count__8223_8228 = G__8245;
i__8224_8229 = G__8246;
continue;
}
} else {
}
}
break;
}
}catch (e8220){if((e8220 instanceof Error)){
var e_8247 = e8220;
domina.core.replace_children_BANG_.call(null,content,value_8225);
} else {
throw e8220;

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
var args8248 = [];
var len__6047__auto___8251 = arguments.length;
var i__6048__auto___8252 = (0);
while(true){
if((i__6048__auto___8252 < len__6047__auto___8251)){
args8248.push((arguments[i__6048__auto___8252]));

var G__8253 = (i__6048__auto___8252 + (1));
i__6048__auto___8252 = G__8253;
continue;
} else {
}
break;
}

var G__8250 = args8248.length;
switch (G__8250) {
case 2:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.core.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8248.length)].join('')));

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
var seq__8261_8265 = cljs.core.seq.call(null,children);
var chunk__8262_8266 = null;
var count__8263_8267 = (0);
var i__8264_8268 = (0);
while(true){
if((i__8264_8268 < count__8263_8267)){
var child_8269 = cljs.core._nth.call(null,chunk__8262_8266,i__8264_8268);
frag.appendChild(child_8269);

var G__8270 = seq__8261_8265;
var G__8271 = chunk__8262_8266;
var G__8272 = count__8263_8267;
var G__8273 = (i__8264_8268 + (1));
seq__8261_8265 = G__8270;
chunk__8262_8266 = G__8271;
count__8263_8267 = G__8272;
i__8264_8268 = G__8273;
continue;
} else {
var temp__4425__auto___8274 = cljs.core.seq.call(null,seq__8261_8265);
if(temp__4425__auto___8274){
var seq__8261_8275__$1 = temp__4425__auto___8274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8261_8275__$1)){
var c__5792__auto___8276 = cljs.core.chunk_first.call(null,seq__8261_8275__$1);
var G__8277 = cljs.core.chunk_rest.call(null,seq__8261_8275__$1);
var G__8278 = c__5792__auto___8276;
var G__8279 = cljs.core.count.call(null,c__5792__auto___8276);
var G__8280 = (0);
seq__8261_8265 = G__8277;
chunk__8262_8266 = G__8278;
count__8263_8267 = G__8279;
i__8264_8268 = G__8280;
continue;
} else {
var child_8281 = cljs.core.first.call(null,seq__8261_8275__$1);
frag.appendChild(child_8281);

var G__8282 = cljs.core.next.call(null,seq__8261_8275__$1);
var G__8283 = null;
var G__8284 = (0);
var G__8285 = (0);
seq__8261_8265 = G__8282;
chunk__8262_8266 = G__8283;
count__8263_8267 = G__8284;
i__8264_8268 = G__8285;
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
return (function (p1__8255_SHARP_,p2__8256_SHARP_){
return f.call(null,p1__8255_SHARP_,p2__8256_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.core.lazy_nl_via_item = (function domina$core$lazy_nl_via_item(var_args){
var args8286 = [];
var len__6047__auto___8289 = arguments.length;
var i__6048__auto___8290 = (0);
while(true){
if((i__6048__auto___8290 < len__6047__auto___8289)){
args8286.push((arguments[i__6048__auto___8290]));

var G__8291 = (i__6048__auto___8290 + (1));
i__6048__auto___8290 = G__8291;
continue;
} else {
}
break;
}

var G__8288 = args8286.length;
switch (G__8288) {
case 1:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8286.length)].join('')));

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
var args8293 = [];
var len__6047__auto___8296 = arguments.length;
var i__6048__auto___8297 = (0);
while(true){
if((i__6048__auto___8297 < len__6047__auto___8296)){
args8293.push((arguments[i__6048__auto___8297]));

var G__8298 = (i__6048__auto___8297 + (1));
i__6048__auto___8297 = G__8298;
continue;
} else {
}
break;
}

var G__8295 = args8293.length;
switch (G__8295) {
case 1:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.core.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8293.length)].join('')));

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
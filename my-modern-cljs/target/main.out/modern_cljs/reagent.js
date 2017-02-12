// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('domina.core');
goog.require('clojure.string');
goog.require('cljsjs.marked');
modern_cljs.reagent.data = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"author","author",2111686192),"Pete Hunt",new cljs.core.Keyword(null,"text","text",-1790561697),"This is one comment"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"author","author",2111686192),"Jordan Walke",new cljs.core.Keyword(null,"text","text",-1790561697),"This is *another* comment"], null)], null));
modern_cljs.reagent.comment_component = (function modern_cljs$reagent$comment_component(author,comment){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),author], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": marked(comment,{"sanitize": true})}], null)], null)], null);
});
modern_cljs.reagent.comment_list = (function modern_cljs$reagent$comment_list(comments){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5760__auto__ = (function modern_cljs$reagent$comment_list_$_iter__8925(s__8926){
return (new cljs.core.LazySeq(null,(function (){
var s__8926__$1 = s__8926;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8926__$1);
if(temp__4425__auto__){
var s__8926__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8926__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__8926__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__8928 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__8927 = (0);
while(true){
if((i__8927 < size__5759__auto__)){
var map__8933 = cljs.core._nth.call(null,c__5758__auto__,i__8927);
var map__8933__$1 = ((((!((map__8933 == null)))?((((map__8933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8933):map__8933);
var id = cljs.core.get.call(null,map__8933__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__8933__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__8933__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append.call(null,b__8928,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__8937 = (i__8927 + (1));
i__8927 = G__8937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8928),modern_cljs$reagent$comment_list_$_iter__8925.call(null,cljs.core.chunk_rest.call(null,s__8926__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8928),null);
}
} else {
var map__8935 = cljs.core.first.call(null,s__8926__$2);
var map__8935__$1 = ((((!((map__8935 == null)))?((((map__8935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8935):map__8935);
var id = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__8935__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),modern_cljs$reagent$comment_list_$_iter__8925.call(null,cljs.core.rest.call(null,s__8926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,cljs.core.deref.call(null,comments));
})()], null);
});
modern_cljs.reagent.handle_comment_on_click = (function modern_cljs$reagent$handle_comment_on_click(comments,comment){
var author = clojure.string.trim.call(null,new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comment)));
var text = clojure.string.trim.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comment)));
cljs.core.reset_BANG_.call(null,comment,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null));

if((clojure.string.blank_QMARK_.call(null,author)) || (clojure.string.blank_QMARK_.call(null,text))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,comments,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(new Date()).getTime(),new cljs.core.Keyword(null,"author","author",2111686192),author,new cljs.core.Keyword(null,"text","text",-1790561697),text], null));
}
});
modern_cljs.reagent.comment_form = (function modern_cljs$reagent$comment_form(comments){
var comment = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"author","author",2111686192),"",new cljs.core.Keyword(null,"text","text",-1790561697),""], null));
return ((function (comment){
return (function (comments__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Your name",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"author","author",2111686192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comment)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (comment){
return (function (p1__8938_SHARP_){
return cljs.core.swap_BANG_.call(null,comment,cljs.core.assoc,new cljs.core.Keyword(null,"author","author",2111686192),p1__8938_SHARP_.target.value);
});})(comment))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Say something",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,comment)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (comment){
return (function (p1__8939_SHARP_){
return cljs.core.swap_BANG_.call(null,comment,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),p1__8939_SHARP_.target.value);
});})(comment))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Post",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (comment){
return (function (){
return modern_cljs.reagent.handle_comment_on_click.call(null,comments__$1,comment);
});})(comment))
], null)], null)], null);
});
;})(comment))
});
modern_cljs.reagent.comment_box = (function modern_cljs$reagent$comment_box(comments){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Comments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_list,comments], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_form,comments], null)], null);
});
modern_cljs.reagent.init = (function modern_cljs$reagent$init(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_box,modern_cljs.reagent.data], null),domina.core.by_id.call(null,"content"));
});
goog.exportSymbol('modern_cljs.reagent.init', modern_cljs.reagent.init);

//# sourceMappingURL=reagent.js.map
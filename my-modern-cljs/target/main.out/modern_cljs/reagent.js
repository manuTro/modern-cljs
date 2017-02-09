// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.marked');
goog.provide('modern_cljs.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljsjs.marked');
modern_cljs.reagent.data = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"author","author",2111686192),"Pete Hunt",new cljs.core.Keyword(null,"text","text",-1790561697),"This is one comment"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"author","author",2111686192),"Jordan Walke",new cljs.core.Keyword(null,"text","text",-1790561697),"This is *another* comment"], null)], null);
modern_cljs.reagent.comment_component = (function modern_cljs$reagent$comment_component(author,comment){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),author], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": marked(comment,{"sanitize": true})}], null)], null)], null);
});
modern_cljs.reagent.comment_list = (function modern_cljs$reagent$comment_list(comments){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5760__auto__ = (function modern_cljs$reagent$comment_list_$_iter__8956(s__8957){
return (new cljs.core.LazySeq(null,(function (){
var s__8957__$1 = s__8957;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8957__$1);
if(temp__4425__auto__){
var s__8957__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8957__$2)){
var c__5758__auto__ = cljs.core.chunk_first.call(null,s__8957__$2);
var size__5759__auto__ = cljs.core.count.call(null,c__5758__auto__);
var b__8959 = cljs.core.chunk_buffer.call(null,size__5759__auto__);
if((function (){var i__8958 = (0);
while(true){
if((i__8958 < size__5759__auto__)){
var map__8964 = cljs.core._nth.call(null,c__5758__auto__,i__8958);
var map__8964__$1 = ((((!((map__8964 == null)))?((((map__8964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8964):map__8964);
var id = cljs.core.get.call(null,map__8964__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__8964__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__8964__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cljs.core.chunk_append.call(null,b__8959,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__8968 = (i__8958 + (1));
i__8958 = G__8968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8959),modern_cljs$reagent$comment_list_$_iter__8956.call(null,cljs.core.chunk_rest.call(null,s__8957__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8959),null);
}
} else {
var map__8966 = cljs.core.first.call(null,s__8957__$2);
var map__8966__$1 = ((((!((map__8966 == null)))?((((map__8966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8966):map__8966);
var id = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var author = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var text = cljs.core.get.call(null,map__8966__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_component,author,text], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),modern_cljs$reagent$comment_list_$_iter__8956.call(null,cljs.core.rest.call(null,s__8957__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5760__auto__.call(null,comments);
})()], null);
});
modern_cljs.reagent.comment_form = (function modern_cljs$reagent$comment_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello, world! I'm a comment-form"], null);
});
modern_cljs.reagent.comment_box = (function modern_cljs$reagent$comment_box(comments){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Comments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_list,comments], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [modern_cljs.reagent.comment_form], null)], null);
});

//# sourceMappingURL=reagent.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
goog.require('weasel.impls.websocket');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.reader');
weasel.repl.ws_connection = cljs.core.atom.call(null,null);
weasel.repl.alive_QMARK_ = (function weasel$repl$alive_QMARK_(){

return !((cljs.core.deref.call(null,weasel.repl.ws_connection) == null));
});
if(typeof weasel.repl.process_message !== 'undefined'){
} else {
weasel.repl.process_message = (function (){var method_table__5901__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5902__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5903__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5904__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5905__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"weasel.repl","process-message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5905__auto__,method_table__5901__auto__,prefer_table__5902__auto__,method_cache__5903__auto__,cached_hierarchy__5904__auto__));
})();
}
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"error","error",-978969032),(function (message){
return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"eval-js","eval-js",760905924),(function (message){
var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(message);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217),(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null);
}catch (e8765){if((e8765 instanceof Error)){
var e = e8765;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
} else {
var e = e8765;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}})()], null);
}));
weasel.repl.repl_print = (function weasel$repl$repl_print(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8767 = arguments.length;
var i__6047__auto___8768 = (0);
while(true){
if((i__6047__auto___8768 < len__6046__auto___8767)){
args__6053__auto__.push((arguments[i__6047__auto___8768]));

var G__8769 = (i__6047__auto___8768 + (1));
i__6047__auto___8768 = G__8769;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__4423__auto__ = cljs.core.deref.call(null,weasel.repl.ws_connection);
if(cljs.core.truth_(temp__4423__auto__)){
var conn = temp__4423__auto__;
return clojure.browser.net.transmit.call(null,cljs.core.deref.call(null,weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.apply.call(null,cljs.core.pr_str,args)], null));
} else {
return null;
}
});

weasel.repl.repl_print.cljs$lang$maxFixedArity = (0);

weasel.repl.repl_print.cljs$lang$applyTo = (function (seq8766){
return weasel.repl.repl_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8766));
});
weasel.repl.console_print = (function weasel$repl$console_print(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8771 = arguments.length;
var i__6047__auto___8772 = (0);
while(true){
if((i__6047__auto___8772 < len__6046__auto___8771)){
args__6053__auto__.push((arguments[i__6047__auto___8772]));

var G__8773 = (i__6047__auto___8772 + (1));
i__6047__auto___8772 = G__8773;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((0) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((0)),(0))):null);
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(argseq__6054__auto__);
});

weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});

weasel.repl.console_print.cljs$lang$maxFixedArity = (0);

weasel.repl.console_print.cljs$lang$applyTo = (function (seq8770){
return weasel.repl.console_print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8770));
});
weasel.repl.print_fns = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"repl","repl",-35398667),weasel.repl.repl_print,new cljs.core.Keyword(null,"console","console",1228072057),weasel.repl.console_print,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null),(function() { 
var G__8774__delegate = function (args){
cljs.core.apply.call(null,weasel.repl.console_print,args);

return cljs.core.apply.call(null,weasel.repl.repl_print,args);
};
var G__8774 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8775__i = 0, G__8775__a = new Array(arguments.length -  0);
while (G__8775__i < G__8775__a.length) {G__8775__a[G__8775__i] = arguments[G__8775__i + 0]; ++G__8775__i;}
  args = new cljs.core.IndexedSeq(G__8775__a,0);
} 
return G__8774__delegate.call(this,args);};
G__8774.cljs$lang$maxFixedArity = 0;
G__8774.cljs$lang$applyTo = (function (arglist__8776){
var args = cljs.core.seq(arglist__8776);
return G__8774__delegate(args);
});
G__8774.cljs$core$IFn$_invoke$arity$variadic = G__8774__delegate;
return G__8774;
})()
], true, false);
weasel.repl.connect = (function weasel$repl$connect(var_args){
var args__6053__auto__ = [];
var len__6046__auto___8784 = arguments.length;
var i__6047__auto___8785 = (0);
while(true){
if((i__6047__auto___8785 < len__6046__auto___8784)){
args__6053__auto__.push((arguments[i__6047__auto___8785]));

var G__8786 = (i__6047__auto___8785 + (1));
i__6047__auto___8785 = G__8786;
continue;
} else {
}
break;
}

var argseq__6054__auto__ = ((((1) < args__6053__auto__.length))?(new cljs.core.IndexedSeq(args__6053__auto__.slice((1)),(0))):null);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6054__auto__);
});

weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (repl_server_url,p__8779){
var map__8780 = p__8779;
var map__8780__$1 = ((((!((map__8780 == null)))?((((map__8780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8780):map__8780);
var verbose = cljs.core.get.call(null,map__8780__$1,new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
var on_open = cljs.core.get.call(null,map__8780__$1,new cljs.core.Keyword(null,"on-open","on-open",-1391088163));
var on_error = cljs.core.get.call(null,map__8780__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_close = cljs.core.get.call(null,map__8780__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var print = cljs.core.get.call(null,map__8780__$1,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.Keyword(null,"repl","repl",-35398667));
var repl_connection = weasel.impls.websocket.websocket_connection.call(null);
cljs.core.swap_BANG_.call(null,weasel.repl.ws_connection,cljs.core.constantly.call(null,repl_connection));

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"opened","opened",-1451743091),((function (repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.set_print_fn_BANG_.call(null,((cljs.core.fn_QMARK_.call(null,print))?print:cljs.core.get.call(null,weasel.repl.print_fns,print)));

clojure.browser.net.transmit.call(null,repl_connection,cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ready","ready",1086465795)], null)));

if(cljs.core.truth_(verbose)){
console.info("Opened Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_open)){
return on_open.call(null);
} else {
return null;
}
});})(repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"message","message",-406056002),((function (repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
var map__8782 = cljs.reader.read_string.call(null,evt.message);
var map__8782__$1 = ((((!((map__8782 == null)))?((((map__8782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8782):map__8782);
var message = map__8782__$1;
var op = cljs.core.get.call(null,map__8782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var response = cljs.core.pr_str.call(null,weasel.repl.process_message.call(null,message));
return clojure.browser.net.transmit.call(null,repl_connection,response);
});})(repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"closed","closed",-919675359),((function (repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null);

if(cljs.core.truth_(verbose)){
console.info("Closed Websocket REPL connection");
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_close)){
return on_close.call(null);
} else {
return null;
}
});})(repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"error","error",-978969032),((function (repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print){
return (function (evt){
if(cljs.core.truth_(verbose)){
console.error("WebSocket error",evt);
} else {
}

if(cljs.core.fn_QMARK_.call(null,on_error)){
return on_error.call(null,evt);
} else {
return null;
}
});})(repl_connection,map__8780,map__8780__$1,verbose,on_open,on_error,on_close,print))
);

clojure.browser.repl.bootstrap.call(null);

return clojure.browser.net.connect.call(null,repl_connection,repl_server_url);
});

weasel.repl.connect.cljs$lang$maxFixedArity = (1);

weasel.repl.connect.cljs$lang$applyTo = (function (seq8777){
var G__8778 = cljs.core.first.call(null,seq8777);
var seq8777__$1 = cljs.core.next.call(null,seq8777);
return weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(G__8778,seq8777__$1);
});

//# sourceMappingURL=repl.js.map
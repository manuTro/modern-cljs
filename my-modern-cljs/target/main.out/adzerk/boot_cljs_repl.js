// Compiled by ClojureScript 1.7.170 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_8304 = "ws://localhost:44425";
if(cljs.core.truth_((function (){var and__4977__auto__ = repl_conn_8304;
if(cljs.core.truth_(and__4977__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__4977__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:44425");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('modern_cljs.login');
goog.require('cljs.core');
goog.require('domina.core');
goog.require('domina.events');
goog.require('hiccups.runtime');
modern_cljs.login.validate_email = (function modern_cljs$login$validate_email(email){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"email"));

if(cljs.core.not.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,domina.core.attr.call(null,email,new cljs.core.Keyword(null,"pattern","pattern",242135423))),domina.core.value.call(null,email)))){
domina.core.prepend_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str((function (){var attrs7418 = domina.core.attr.call(null,email,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.map_QMARK_.call(null,attrs7418)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help email"], null),attrs7418))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"help email\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs7418)),cljs.core.str("</div>")].join('');
}
})())].join(''));

return false;
} else {
return true;
}
});
modern_cljs.login.validate_password = (function modern_cljs$login$validate_password(password){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"password"));

if(cljs.core.not.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,domina.core.attr.call(null,password,new cljs.core.Keyword(null,"pattern","pattern",242135423))),domina.core.value.call(null,password)))){
domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str((function (){var attrs7420 = domina.core.attr.call(null,password,new cljs.core.Keyword(null,"title","title",636505583));
if(cljs.core.map_QMARK_.call(null,attrs7420)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"help password"], null),attrs7420))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"help password\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs7420)),cljs.core.str("</div>")].join('');
}
})())].join(''));

return false;
} else {
return true;
}
});
modern_cljs.login.validate_form = (function modern_cljs$login$validate_form(evt){
var email = domina.core.by_id.call(null,"email");
var password = domina.core.by_id.call(null,"password");
var email_val = domina.core.value.call(null,email);
var password_val = domina.core.value.call(null,password);
if((cljs.core.empty_QMARK_.call(null,email_val)) || (cljs.core.empty_QMARK_.call(null,password_val))){
domina.core.destroy_BANG_.call(null,domina.core.by_class.call(null,"help"));

domina.events.prevent_default.call(null,evt);

return domina.core.append_BANG_.call(null,domina.core.by_id.call(null,"loginForm"),[cljs.core.str("<div class=\"help\">Please complete the form</div>")].join(''));
} else {
if(cljs.core.truth_((function (){var and__4977__auto__ = modern_cljs.login.validate_email.call(null,email);
if(cljs.core.truth_(and__4977__auto__)){
return modern_cljs.login.validate_password.call(null,password);
} else {
return and__4977__auto__;
}
})())){
return true;
} else {
return domina.events.prevent_default.call(null,evt);
}
}
});
modern_cljs.login.init = (function modern_cljs$login$init(){
if(cljs.core.truth_((function (){var and__4977__auto__ = document;
if(cljs.core.truth_(and__4977__auto__)){
return (document["getElementById"]);
} else {
return and__4977__auto__;
}
})())){
var email = domina.core.by_id.call(null,"email");
var password = domina.core.by_id.call(null,"password");
domina.events.listen_BANG_.call(null,domina.core.by_id.call(null,"submit"),new cljs.core.Keyword(null,"click","click",1912301393),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_form.call(null,evt);
});})(email,password))
);

domina.events.listen_BANG_.call(null,email,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_email.call(null,email);
});})(email,password))
);

return domina.events.listen_BANG_.call(null,password,new cljs.core.Keyword(null,"blur","blur",-453500461),((function (email,password){
return (function (evt){
return modern_cljs.login.validate_password.call(null,password);
});})(email,password))
);
} else {
return null;
}
});
goog.exportSymbol('modern_cljs.login.init', modern_cljs.login.init);

//# sourceMappingURL=login.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('valip.predicates');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.Uri');
/**
 * Returns false if x is nil or blank, true otherwise.
 */
valip.predicates.present_QMARK_ = (function valip$predicates$present_QMARK_(x){
return !(clojure.string.blank_QMARK_.call(null,x));
});
/**
 * Creates a predicate that returns true if the supplied regular expression
 *   matches its argument.
 */
valip.predicates.matches = (function valip$predicates$matches(re){
return (function (s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,re,[cljs.core.str(s)].join('')));
});
});
/**
 * Creates a predicate that returns true if a string's length is less than or
 *   equal to the supplied maximum.
 */
valip.predicates.max_length = (function valip$predicates$max_length(max){
return (function (s){
return (cljs.core.count.call(null,s) <= max);
});
});
/**
 * Creates a predicate that returns true if a string's length is greater than
 *   or equal to the supplied minimum.
 */
valip.predicates.min_length = (function valip$predicates$min_length(min){
return (function (s){
return (cljs.core.count.call(null,s) >= min);
});
});
/**
 * Returns true if the email address is valid, based on RFC 2822. Email
 *   addresses containing quotation marks or square brackets are considered
 *   invalid, as this syntax is not commonly supported in practise. The domain of
 *   the email address is not checked for validity.
 */
valip.predicates.email_address_QMARK_ = (function valip$predicates$email_address_QMARK_(email){
var re = [cljs.core.str("(?i)[a-z0-9!#$%&'*+/=?^_`{|}~-]+"),cljs.core.str("(?:\\.[a-z0-9!#$%&'*+/=?"),cljs.core.str("^_`{|}~-]+)*"),cljs.core.str("@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+"),cljs.core.str("[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")].join('');
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,re),[cljs.core.str(email)].join('')));
});
/**
 * Returns true if the string represents an integer.
 */
valip.predicates.integer_string_QMARK_ = (function valip$predicates$integer_string_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/\s*[+-]?\d+\s*/,[cljs.core.str(s)].join('')));
});
/**
 * Returns true if the string represents a decimal number.
 */
valip.predicates.decimal_string_QMARK_ = (function valip$predicates$decimal_string_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/\s*[+-]?\d+(\.\d+(M|M|N)?)?\s*/,[cljs.core.str(s)].join('')));
});
/**
 * Returns true if a string consists only of numerical digits.
 */
valip.predicates.digits_QMARK_ = (function valip$predicates$digits_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/\d+/,[cljs.core.str(s)].join('')));
});
/**
 * Returns true if a string consists only of alphanumeric characters.
 */
valip.predicates.alphanumeric_QMARK_ = (function valip$predicates$alphanumeric_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/[A-Za-z0-9]+/,[cljs.core.str(s)].join('')));
});
valip.predicates.parse_number = (function valip$predicates$parse_number(x){
if(cljs.core.truth_((function (){var and__4976__auto__ = typeof x === 'string';
if(and__4976__auto__){
return cljs.core.re_matches.call(null,/\s*[+-]?\d+(\.\d+M|M|N)?\s*/,x);
} else {
return and__4976__auto__;
}
})())){
return cljs.reader.read_string.call(null,x);
} else {
return null;
}
});
/**
 * Creates a predicate function for checking if a value is numerically greater
 *   than the specified number.
 */
valip.predicates.gt = (function valip$predicates$gt(n){
return (function (x){
var temp__4423__auto__ = valip.predicates.parse_number.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var x__$1 = temp__4423__auto__;
return (x__$1 > n);
} else {
return null;
}
});
});
/**
 * Creates a predicate function for checking if a value is numerically less
 *   than the specified number.
 */
valip.predicates.lt = (function valip$predicates$lt(n){
return (function (x){
var temp__4423__auto__ = valip.predicates.parse_number.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var x__$1 = temp__4423__auto__;
return (x__$1 < n);
} else {
return null;
}
});
});
/**
 * Creates a predicate function for checking if a value is numerically greater
 *   than or equal to the specified number.
 */
valip.predicates.gte = (function valip$predicates$gte(n){
return (function (x){
var temp__4423__auto__ = valip.predicates.parse_number.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var x__$1 = temp__4423__auto__;
return (x__$1 >= n);
} else {
return null;
}
});
});
/**
 * Creates a predicate function for checking if a value is numerically less
 *   than or equal to the specified number.
 */
valip.predicates.lte = (function valip$predicates$lte(n){
return (function (x){
var temp__4423__auto__ = valip.predicates.parse_number.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var x__$1 = temp__4423__auto__;
return (x__$1 <= n);
} else {
return null;
}
});
});
/**
 * Alias for gt
 */
valip.predicates.over = valip.predicates.gt;
/**
 * Alias for lt
 */
valip.predicates.under = valip.predicates.lt;
/**
 * Alias for gte
 */
valip.predicates.at_least = valip.predicates.gte;
/**
 * Alias for lte
 */
valip.predicates.at_most = valip.predicates.lte;
/**
 * Creates a predicate function for checking whether a number is between two
 *   values (inclusive).
 */
valip.predicates.between = (function valip$predicates$between(min,max){
return (function (x){
var temp__4423__auto__ = valip.predicates.parse_number.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var x__$1 = temp__4423__auto__;
return ((x__$1 >= min)) && ((x__$1 <= max));
} else {
return null;
}
});
});
valip.predicates.url_QMARK_ = (function valip$predicates$url_QMARK_(s){
var uri = goog.Uri.parse([cljs.core.str(s)].join(''));
var and__4976__auto__ = cljs.core.seq.call(null,uri.getScheme());
if(and__4976__auto__){
return cljs.core.re_find.call(null,/\/\//,[cljs.core.str(s)].join(''));
} else {
return and__4976__auto__;
}
});

//# sourceMappingURL=predicates.js.map
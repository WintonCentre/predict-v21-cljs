// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10126){
var map__10127 = p__10126;
var map__10127__$1 = (((((!((map__10127 == null))))?(((((map__10127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10127):map__10127);
var m = map__10127__$1;
var n = cljs.core.get.call(null,map__10127__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10127__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10129_10161 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10130_10162 = null;
var count__10131_10163 = (0);
var i__10132_10164 = (0);
while(true){
if((i__10132_10164 < count__10131_10163)){
var f_10165 = cljs.core._nth.call(null,chunk__10130_10162,i__10132_10164);
cljs.core.println.call(null,"  ",f_10165);


var G__10166 = seq__10129_10161;
var G__10167 = chunk__10130_10162;
var G__10168 = count__10131_10163;
var G__10169 = (i__10132_10164 + (1));
seq__10129_10161 = G__10166;
chunk__10130_10162 = G__10167;
count__10131_10163 = G__10168;
i__10132_10164 = G__10169;
continue;
} else {
var temp__5720__auto___10170 = cljs.core.seq.call(null,seq__10129_10161);
if(temp__5720__auto___10170){
var seq__10129_10171__$1 = temp__5720__auto___10170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10129_10171__$1)){
var c__4550__auto___10172 = cljs.core.chunk_first.call(null,seq__10129_10171__$1);
var G__10173 = cljs.core.chunk_rest.call(null,seq__10129_10171__$1);
var G__10174 = c__4550__auto___10172;
var G__10175 = cljs.core.count.call(null,c__4550__auto___10172);
var G__10176 = (0);
seq__10129_10161 = G__10173;
chunk__10130_10162 = G__10174;
count__10131_10163 = G__10175;
i__10132_10164 = G__10176;
continue;
} else {
var f_10177 = cljs.core.first.call(null,seq__10129_10171__$1);
cljs.core.println.call(null,"  ",f_10177);


var G__10178 = cljs.core.next.call(null,seq__10129_10171__$1);
var G__10179 = null;
var G__10180 = (0);
var G__10181 = (0);
seq__10129_10161 = G__10178;
chunk__10130_10162 = G__10179;
count__10131_10163 = G__10180;
i__10132_10164 = G__10181;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10182 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10182);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10182)))?cljs.core.second.call(null,arglists_10182):arglists_10182));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10133_10183 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10134_10184 = null;
var count__10135_10185 = (0);
var i__10136_10186 = (0);
while(true){
if((i__10136_10186 < count__10135_10185)){
var vec__10147_10187 = cljs.core._nth.call(null,chunk__10134_10184,i__10136_10186);
var name_10188 = cljs.core.nth.call(null,vec__10147_10187,(0),null);
var map__10150_10189 = cljs.core.nth.call(null,vec__10147_10187,(1),null);
var map__10150_10190__$1 = (((((!((map__10150_10189 == null))))?(((((map__10150_10189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10150_10189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10150_10189):map__10150_10189);
var doc_10191 = cljs.core.get.call(null,map__10150_10190__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10192 = cljs.core.get.call(null,map__10150_10190__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10188);

cljs.core.println.call(null," ",arglists_10192);

if(cljs.core.truth_(doc_10191)){
cljs.core.println.call(null," ",doc_10191);
} else {
}


var G__10193 = seq__10133_10183;
var G__10194 = chunk__10134_10184;
var G__10195 = count__10135_10185;
var G__10196 = (i__10136_10186 + (1));
seq__10133_10183 = G__10193;
chunk__10134_10184 = G__10194;
count__10135_10185 = G__10195;
i__10136_10186 = G__10196;
continue;
} else {
var temp__5720__auto___10197 = cljs.core.seq.call(null,seq__10133_10183);
if(temp__5720__auto___10197){
var seq__10133_10198__$1 = temp__5720__auto___10197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10133_10198__$1)){
var c__4550__auto___10199 = cljs.core.chunk_first.call(null,seq__10133_10198__$1);
var G__10200 = cljs.core.chunk_rest.call(null,seq__10133_10198__$1);
var G__10201 = c__4550__auto___10199;
var G__10202 = cljs.core.count.call(null,c__4550__auto___10199);
var G__10203 = (0);
seq__10133_10183 = G__10200;
chunk__10134_10184 = G__10201;
count__10135_10185 = G__10202;
i__10136_10186 = G__10203;
continue;
} else {
var vec__10152_10204 = cljs.core.first.call(null,seq__10133_10198__$1);
var name_10205 = cljs.core.nth.call(null,vec__10152_10204,(0),null);
var map__10155_10206 = cljs.core.nth.call(null,vec__10152_10204,(1),null);
var map__10155_10207__$1 = (((((!((map__10155_10206 == null))))?(((((map__10155_10206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10155_10206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10155_10206):map__10155_10206);
var doc_10208 = cljs.core.get.call(null,map__10155_10207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10209 = cljs.core.get.call(null,map__10155_10207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10205);

cljs.core.println.call(null," ",arglists_10209);

if(cljs.core.truth_(doc_10208)){
cljs.core.println.call(null," ",doc_10208);
} else {
}


var G__10210 = cljs.core.next.call(null,seq__10133_10198__$1);
var G__10211 = null;
var G__10212 = (0);
var G__10213 = (0);
seq__10133_10183 = G__10210;
chunk__10134_10184 = G__10211;
count__10135_10185 = G__10212;
i__10136_10186 = G__10213;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__10157 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10158 = null;
var count__10159 = (0);
var i__10160 = (0);
while(true){
if((i__10160 < count__10159)){
var role = cljs.core._nth.call(null,chunk__10158,i__10160);
var temp__5720__auto___10214__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___10214__$1)){
var spec_10215 = temp__5720__auto___10214__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10215));
} else {
}


var G__10216 = seq__10157;
var G__10217 = chunk__10158;
var G__10218 = count__10159;
var G__10219 = (i__10160 + (1));
seq__10157 = G__10216;
chunk__10158 = G__10217;
count__10159 = G__10218;
i__10160 = G__10219;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__10157);
if(temp__5720__auto____$1){
var seq__10157__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10157__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__10157__$1);
var G__10220 = cljs.core.chunk_rest.call(null,seq__10157__$1);
var G__10221 = c__4550__auto__;
var G__10222 = cljs.core.count.call(null,c__4550__auto__);
var G__10223 = (0);
seq__10157 = G__10220;
chunk__10158 = G__10221;
count__10159 = G__10222;
i__10160 = G__10223;
continue;
} else {
var role = cljs.core.first.call(null,seq__10157__$1);
var temp__5720__auto___10224__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___10224__$2)){
var spec_10225 = temp__5720__auto___10224__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_10225));
} else {
}


var G__10226 = cljs.core.next.call(null,seq__10157__$1);
var G__10227 = null;
var G__10228 = (0);
var G__10229 = (0);
seq__10157 = G__10226;
chunk__10158 = G__10227;
count__10159 = G__10228;
i__10160 = G__10229;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__10230 = cljs.core.conj.call(null,via,t);
var G__10231 = cljs.core.ex_cause.call(null,t);
via = G__10230;
t = G__10231;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__10234 = datafied_throwable;
var map__10234__$1 = (((((!((map__10234 == null))))?(((((map__10234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10234):map__10234);
var via = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__10234__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__10235 = cljs.core.last.call(null,via);
var map__10235__$1 = (((((!((map__10235 == null))))?(((((map__10235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10235):map__10235);
var type = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__10235__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__10236 = data;
var map__10236__$1 = (((((!((map__10236 == null))))?(((((map__10236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10236):map__10236);
var problems = cljs.core.get.call(null,map__10236__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__10236__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__10236__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__10237 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__10237__$1 = (((((!((map__10237 == null))))?(((((map__10237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10237):map__10237);
var top_data = map__10237__$1;
var source = cljs.core.get.call(null,map__10237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__10242 = phase;
var G__10242__$1 = (((G__10242 instanceof cljs.core.Keyword))?G__10242.fqn:null);
switch (G__10242__$1) {
case "read-source":
var map__10243 = data;
var map__10243__$1 = (((((!((map__10243 == null))))?(((((map__10243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10243):map__10243);
var line = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__10245 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__10245__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10245,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10245);
var G__10245__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10245__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10245__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10245__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10245__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__10246 = top_data;
var G__10246__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__10246,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__10246);
var G__10246__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__10246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__10246__$1);
var G__10246__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10246__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10246__$2);
var G__10246__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10246__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10246__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10246__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10246__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__10247 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10247,(0),null);
var method = cljs.core.nth.call(null,vec__10247,(1),null);
var file = cljs.core.nth.call(null,vec__10247,(2),null);
var line = cljs.core.nth.call(null,vec__10247,(3),null);
var G__10250 = top_data;
var G__10250__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__10250,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__10250);
var G__10250__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__10250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__10250__$1);
var G__10250__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__10250__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__10250__$2);
var G__10250__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__10250__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__10250__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__10250__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__10250__$4;
}

break;
case "execution":
var vec__10251 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__10251,(0),null);
var method = cljs.core.nth.call(null,vec__10251,(1),null);
var file = cljs.core.nth.call(null,vec__10251,(2),null);
var line = cljs.core.nth.call(null,vec__10251,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__10251,source__$1,method,file,line,G__10242,G__10242__$1,map__10234,map__10234__$1,via,trace,phase,map__10235,map__10235__$1,type,message,data,map__10236,map__10236__$1,problems,fn,caller,map__10237,map__10237__$1,top_data,source){
return (function (p1__10233_SHARP_){
var or__4131__auto__ = (p1__10233_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__10233_SHARP_);
}
});})(vec__10251,source__$1,method,file,line,G__10242,G__10242__$1,map__10234,map__10234__$1,via,trace,phase,map__10235,map__10235__$1,type,message,data,map__10236,map__10236__$1,problems,fn,caller,map__10237,map__10237__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__10254 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__10254__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__10254,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__10254);
var G__10254__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__10254__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__10254__$1);
var G__10254__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__10254__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__10254__$2);
var G__10254__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__10254__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__10254__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__10254__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__10254__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10242__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__10258){
var map__10259 = p__10258;
var map__10259__$1 = (((((!((map__10259 == null))))?(((((map__10259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10259):map__10259);
var triage_data = map__10259__$1;
var phase = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__10259__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__10261 = phase;
var G__10261__$1 = (((G__10261 instanceof cljs.core.Keyword))?G__10261.fqn:null);
switch (G__10261__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10262_10271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10263_10272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10264_10273 = true;
var _STAR_print_fn_STAR__temp_val__10265_10274 = ((function (_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10264_10273;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10265_10274;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,_STAR_print_fn_STAR__temp_val__10265_10274,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,_STAR_print_fn_STAR__temp_val__10265_10274,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__10256_SHARP_){
return cljs.core.dissoc.call(null,p1__10256_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,_STAR_print_fn_STAR__temp_val__10265_10274,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__10262_10271,_STAR_print_fn_STAR__orig_val__10263_10272,_STAR_print_newline_STAR__temp_val__10264_10273,_STAR_print_fn_STAR__temp_val__10265_10274,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10263_10272;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10262_10271;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__10266_10275 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__10267_10276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__10268_10277 = true;
var _STAR_print_fn_STAR__temp_val__10269_10278 = ((function (_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__10268_10277;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__10269_10278;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,_STAR_print_fn_STAR__temp_val__10269_10278,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,_STAR_print_fn_STAR__temp_val__10269_10278,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__10257_SHARP_){
return cljs.core.dissoc.call(null,p1__10257_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,_STAR_print_fn_STAR__temp_val__10269_10278,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__10266_10275,_STAR_print_fn_STAR__orig_val__10267_10276,_STAR_print_newline_STAR__temp_val__10268_10277,_STAR_print_fn_STAR__temp_val__10269_10278,sb__4661__auto__,G__10261,G__10261__$1,loc,class_name,simple_class,cause_type,format,map__10259,map__10259__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__10267_10276;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__10266_10275;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__10261__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map

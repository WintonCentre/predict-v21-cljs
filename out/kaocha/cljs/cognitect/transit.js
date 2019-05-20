// Compiled by ClojureScript 1.10.520 {}
goog.provide('kaocha.cljs.cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if((((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID)))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error(["Cannot compare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode(this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,["#uuid \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),"\""].join(''));
});
kaocha.cljs.cognitect.transit.opts_merge = (function kaocha$cljs$cognitect$transit$opts_merge(a,b){
var seq__11253_11257 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__11254_11258 = null;
var count__11255_11259 = (0);
var i__11256_11260 = (0);
while(true){
if((i__11256_11260 < count__11255_11259)){
var k_11261 = cljs.core._nth.call(null,chunk__11254_11258,i__11256_11260);
var v_11262 = (b[k_11261]);
(a[k_11261] = v_11262);


var G__11263 = seq__11253_11257;
var G__11264 = chunk__11254_11258;
var G__11265 = count__11255_11259;
var G__11266 = (i__11256_11260 + (1));
seq__11253_11257 = G__11263;
chunk__11254_11258 = G__11264;
count__11255_11259 = G__11265;
i__11256_11260 = G__11266;
continue;
} else {
var temp__5720__auto___11267 = cljs.core.seq.call(null,seq__11253_11257);
if(temp__5720__auto___11267){
var seq__11253_11268__$1 = temp__5720__auto___11267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11253_11268__$1)){
var c__4550__auto___11269 = cljs.core.chunk_first.call(null,seq__11253_11268__$1);
var G__11270 = cljs.core.chunk_rest.call(null,seq__11253_11268__$1);
var G__11271 = c__4550__auto___11269;
var G__11272 = cljs.core.count.call(null,c__4550__auto___11269);
var G__11273 = (0);
seq__11253_11257 = G__11270;
chunk__11254_11258 = G__11271;
count__11255_11259 = G__11272;
i__11256_11260 = G__11273;
continue;
} else {
var k_11274 = cljs.core.first.call(null,seq__11253_11268__$1);
var v_11275 = (b[k_11274]);
(a[k_11274] = v_11275);


var G__11276 = cljs.core.next.call(null,seq__11253_11268__$1);
var G__11277 = null;
var G__11278 = (0);
var G__11279 = (0);
seq__11253_11257 = G__11276;
chunk__11254_11258 = G__11277;
count__11255_11259 = G__11278;
i__11256_11260 = G__11279;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.MapBuilder = (function (){
});
kaocha.cljs.cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

kaocha.cljs.cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

kaocha.cljs.cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

kaocha.cljs.cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

kaocha.cljs.cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.MapBuilder.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.MapBuilder.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/MapBuilder";

kaocha.cljs.cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/MapBuilder");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/MapBuilder.
 */
kaocha.cljs.cognitect.transit.__GT_MapBuilder = (function kaocha$cljs$cognitect$transit$__GT_MapBuilder(){
return (new kaocha.cljs.cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.VectorBuilder = (function (){
});
kaocha.cljs.cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

kaocha.cljs.cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

kaocha.cljs.cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

kaocha.cljs.cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

kaocha.cljs.cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.VectorBuilder.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/VectorBuilder";

kaocha.cljs.cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/VectorBuilder");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/VectorBuilder.
 */
kaocha.cljs.cognitect.transit.__GT_VectorBuilder = (function kaocha$cljs$cognitect$transit$__GT_VectorBuilder(){
return (new kaocha.cljs.cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from string tag to a decoder function of one
 * argument which returns the in-memory representation of the semantic transit
 * value. If a :default handler is provided, it will be used when no matching
 * read handler can be found.
 */
kaocha.cljs.cognitect.transit.reader = (function kaocha$cljs$cognitect$transit$reader(var_args){
var G__11281 = arguments.length;
switch (G__11281) {
case 1:
return kaocha.cljs.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kaocha.cljs.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kaocha.cljs.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return kaocha.cljs.cognitect.transit.reader.call(null,type,null);
});

kaocha.cljs.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader(cljs.core.name.call(null,type),kaocha.cljs.cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__11283 = (i + (2));
var G__11284 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11283;
ret = G__11284;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
}),"with-meta",(function (v){
return cljs.core.with_meta.call(null,(v[(0)]),(v[(1)]));
})], null),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)))), "defaultHandler": new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)), "mapBuilder": (new kaocha.cljs.cognitect.transit.MapBuilder()), "arrayBuilder": (new kaocha.cljs.cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

kaocha.cljs.cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
kaocha.cljs.cognitect.transit.read = (function kaocha$cljs$cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.KeywordHandler = (function (){
});
kaocha.cljs.cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

kaocha.cljs.cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

kaocha.cljs.cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

kaocha.cljs.cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.KeywordHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/KeywordHandler";

kaocha.cljs.cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/KeywordHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/KeywordHandler.
 */
kaocha.cljs.cognitect.transit.__GT_KeywordHandler = (function kaocha$cljs$cognitect$transit$__GT_KeywordHandler(){
return (new kaocha.cljs.cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.SymbolHandler = (function (){
});
kaocha.cljs.cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

kaocha.cljs.cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

kaocha.cljs.cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

kaocha.cljs.cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.SymbolHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/SymbolHandler";

kaocha.cljs.cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/SymbolHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/SymbolHandler.
 */
kaocha.cljs.cognitect.transit.__GT_SymbolHandler = (function kaocha$cljs$cognitect$transit$__GT_SymbolHandler(){
return (new kaocha.cljs.cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.ListHandler = (function (){
});
kaocha.cljs.cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

kaocha.cljs.cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11285_11289 = cljs.core.seq.call(null,v);
var chunk__11286_11290 = null;
var count__11287_11291 = (0);
var i__11288_11292 = (0);
while(true){
if((i__11288_11292 < count__11287_11291)){
var x_11293 = cljs.core._nth.call(null,chunk__11286_11290,i__11288_11292);
ret.push(x_11293);


var G__11294 = seq__11285_11289;
var G__11295 = chunk__11286_11290;
var G__11296 = count__11287_11291;
var G__11297 = (i__11288_11292 + (1));
seq__11285_11289 = G__11294;
chunk__11286_11290 = G__11295;
count__11287_11291 = G__11296;
i__11288_11292 = G__11297;
continue;
} else {
var temp__5720__auto___11298 = cljs.core.seq.call(null,seq__11285_11289);
if(temp__5720__auto___11298){
var seq__11285_11299__$1 = temp__5720__auto___11298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11285_11299__$1)){
var c__4550__auto___11300 = cljs.core.chunk_first.call(null,seq__11285_11299__$1);
var G__11301 = cljs.core.chunk_rest.call(null,seq__11285_11299__$1);
var G__11302 = c__4550__auto___11300;
var G__11303 = cljs.core.count.call(null,c__4550__auto___11300);
var G__11304 = (0);
seq__11285_11289 = G__11301;
chunk__11286_11290 = G__11302;
count__11287_11291 = G__11303;
i__11288_11292 = G__11304;
continue;
} else {
var x_11305 = cljs.core.first.call(null,seq__11285_11299__$1);
ret.push(x_11305);


var G__11306 = cljs.core.next.call(null,seq__11285_11299__$1);
var G__11307 = null;
var G__11308 = (0);
var G__11309 = (0);
seq__11285_11289 = G__11306;
chunk__11286_11290 = G__11307;
count__11287_11291 = G__11308;
i__11288_11292 = G__11309;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

kaocha.cljs.cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

kaocha.cljs.cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.ListHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.ListHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/ListHandler";

kaocha.cljs.cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/ListHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/ListHandler.
 */
kaocha.cljs.cognitect.transit.__GT_ListHandler = (function kaocha$cljs$cognitect$transit$__GT_ListHandler(){
return (new kaocha.cljs.cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.MapHandler = (function (){
});
kaocha.cljs.cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

kaocha.cljs.cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

kaocha.cljs.cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

kaocha.cljs.cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.MapHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.MapHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/MapHandler";

kaocha.cljs.cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/MapHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/MapHandler.
 */
kaocha.cljs.cognitect.transit.__GT_MapHandler = (function kaocha$cljs$cognitect$transit$__GT_MapHandler(){
return (new kaocha.cljs.cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.SetHandler = (function (){
});
kaocha.cljs.cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

kaocha.cljs.cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11310_11314 = cljs.core.seq.call(null,v);
var chunk__11311_11315 = null;
var count__11312_11316 = (0);
var i__11313_11317 = (0);
while(true){
if((i__11313_11317 < count__11312_11316)){
var x_11318 = cljs.core._nth.call(null,chunk__11311_11315,i__11313_11317);
ret.push(x_11318);


var G__11319 = seq__11310_11314;
var G__11320 = chunk__11311_11315;
var G__11321 = count__11312_11316;
var G__11322 = (i__11313_11317 + (1));
seq__11310_11314 = G__11319;
chunk__11311_11315 = G__11320;
count__11312_11316 = G__11321;
i__11313_11317 = G__11322;
continue;
} else {
var temp__5720__auto___11323 = cljs.core.seq.call(null,seq__11310_11314);
if(temp__5720__auto___11323){
var seq__11310_11324__$1 = temp__5720__auto___11323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11310_11324__$1)){
var c__4550__auto___11325 = cljs.core.chunk_first.call(null,seq__11310_11324__$1);
var G__11326 = cljs.core.chunk_rest.call(null,seq__11310_11324__$1);
var G__11327 = c__4550__auto___11325;
var G__11328 = cljs.core.count.call(null,c__4550__auto___11325);
var G__11329 = (0);
seq__11310_11314 = G__11326;
chunk__11311_11315 = G__11327;
count__11312_11316 = G__11328;
i__11313_11317 = G__11329;
continue;
} else {
var x_11330 = cljs.core.first.call(null,seq__11310_11324__$1);
ret.push(x_11330);


var G__11331 = cljs.core.next.call(null,seq__11310_11324__$1);
var G__11332 = null;
var G__11333 = (0);
var G__11334 = (0);
seq__11310_11314 = G__11331;
chunk__11311_11315 = G__11332;
count__11312_11316 = G__11333;
i__11313_11317 = G__11334;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged("array",ret);
});

kaocha.cljs.cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

kaocha.cljs.cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.SetHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.SetHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/SetHandler";

kaocha.cljs.cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/SetHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/SetHandler.
 */
kaocha.cljs.cognitect.transit.__GT_SetHandler = (function kaocha$cljs$cognitect$transit$__GT_SetHandler(){
return (new kaocha.cljs.cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.VectorHandler = (function (){
});
kaocha.cljs.cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

kaocha.cljs.cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__11335_11339 = cljs.core.seq.call(null,v);
var chunk__11336_11340 = null;
var count__11337_11341 = (0);
var i__11338_11342 = (0);
while(true){
if((i__11338_11342 < count__11337_11341)){
var x_11343 = cljs.core._nth.call(null,chunk__11336_11340,i__11338_11342);
ret.push(x_11343);


var G__11344 = seq__11335_11339;
var G__11345 = chunk__11336_11340;
var G__11346 = count__11337_11341;
var G__11347 = (i__11338_11342 + (1));
seq__11335_11339 = G__11344;
chunk__11336_11340 = G__11345;
count__11337_11341 = G__11346;
i__11338_11342 = G__11347;
continue;
} else {
var temp__5720__auto___11348 = cljs.core.seq.call(null,seq__11335_11339);
if(temp__5720__auto___11348){
var seq__11335_11349__$1 = temp__5720__auto___11348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11335_11349__$1)){
var c__4550__auto___11350 = cljs.core.chunk_first.call(null,seq__11335_11349__$1);
var G__11351 = cljs.core.chunk_rest.call(null,seq__11335_11349__$1);
var G__11352 = c__4550__auto___11350;
var G__11353 = cljs.core.count.call(null,c__4550__auto___11350);
var G__11354 = (0);
seq__11335_11339 = G__11351;
chunk__11336_11340 = G__11352;
count__11337_11341 = G__11353;
i__11338_11342 = G__11354;
continue;
} else {
var x_11355 = cljs.core.first.call(null,seq__11335_11349__$1);
ret.push(x_11355);


var G__11356 = cljs.core.next.call(null,seq__11335_11349__$1);
var G__11357 = null;
var G__11358 = (0);
var G__11359 = (0);
seq__11335_11339 = G__11356;
chunk__11336_11340 = G__11357;
count__11337_11341 = G__11358;
i__11338_11342 = G__11359;
continue;
}
} else {
}
}
break;
}

return ret;
});

kaocha.cljs.cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

kaocha.cljs.cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.VectorHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.VectorHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/VectorHandler";

kaocha.cljs.cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/VectorHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/VectorHandler.
 */
kaocha.cljs.cognitect.transit.__GT_VectorHandler = (function kaocha$cljs$cognitect$transit$__GT_VectorHandler(){
return (new kaocha.cljs.cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.UUIDHandler = (function (){
});
kaocha.cljs.cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

kaocha.cljs.cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

kaocha.cljs.cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

kaocha.cljs.cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.UUIDHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/UUIDHandler";

kaocha.cljs.cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/UUIDHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/UUIDHandler.
 */
kaocha.cljs.cognitect.transit.__GT_UUIDHandler = (function kaocha$cljs$cognitect$transit$__GT_UUIDHandler(){
return (new kaocha.cljs.cognitect.transit.UUIDHandler());
});


/**
* @constructor
*/
kaocha.cljs.cognitect.transit.WithMeta = (function (value,meta){
this.value = value;
this.meta = meta;
});

kaocha.cljs.cognitect.transit.WithMeta.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

kaocha.cljs.cognitect.transit.WithMeta.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.WithMeta.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/WithMeta";

kaocha.cljs.cognitect.transit.WithMeta.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/WithMeta");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/WithMeta.
 */
kaocha.cljs.cognitect.transit.__GT_WithMeta = (function kaocha$cljs$cognitect$transit$__GT_WithMeta(value,meta){
return (new kaocha.cljs.cognitect.transit.WithMeta(value,meta));
});


/**
* @constructor
 * @implements {kaocha.cljs.cognitect.transit.Object}
*/
kaocha.cljs.cognitect.transit.WithMetaHandler = (function (){
});
kaocha.cljs.cognitect.transit.WithMetaHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "with-meta";
});

kaocha.cljs.cognitect.transit.WithMetaHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return com.cognitect.transit.tagged("array",[v.value,v.meta]);
});

kaocha.cljs.cognitect.transit.WithMetaHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

kaocha.cljs.cognitect.transit.WithMetaHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

kaocha.cljs.cognitect.transit.WithMetaHandler.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.WithMetaHandler.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/WithMetaHandler";

kaocha.cljs.cognitect.transit.WithMetaHandler.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/WithMetaHandler");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/WithMetaHandler.
 */
kaocha.cljs.cognitect.transit.__GT_WithMetaHandler = (function kaocha$cljs$cognitect$transit$__GT_WithMetaHandler(){
return (new kaocha.cljs.cognitect.transit.WithMetaHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map with the following optional keys:
 * 
 *  :handlers  - a map of type constructors to handler instances. Can optionally
 *               provide a :default write handler which will be used if no
 *               matching handler can be found.
 *  :transform - a function of one argument returning a transformed value. Will
 *               be invoked on a value before it is written.
 */
kaocha.cljs.cognitect.transit.writer = (function kaocha$cljs$cognitect$transit$writer(var_args){
var G__11361 = arguments.length;
switch (G__11361) {
case 1:
return kaocha.cljs.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kaocha.cljs.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kaocha.cljs.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return kaocha.cljs.cognitect.transit.writer.call(null,type,null);
});

kaocha.cljs.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new kaocha.cljs.cognitect.transit.KeywordHandler());
var symbol_handler = (new kaocha.cljs.cognitect.transit.SymbolHandler());
var list_handler = (new kaocha.cljs.cognitect.transit.ListHandler());
var map_handler = (new kaocha.cljs.cognitect.transit.MapHandler());
var set_handler = (new kaocha.cljs.cognitect.transit.SetHandler());
var vector_handler = (new kaocha.cljs.cognitect.transit.VectorHandler());
var uuid_handler = (new kaocha.cljs.cognitect.transit.UUIDHandler());
var meta_handler = (new kaocha.cljs.cognitect.transit.WithMetaHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,kaocha.cljs.cognitect.transit.WithMeta,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,meta_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Eduction !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Eduction,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.Repeat !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.Repeat,list_handler]):null),(((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.MapEntry !== 'undefined'))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.MapEntry,vector_handler]):null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer(cljs.core.name.call(null,type),kaocha.cljs.cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (obj,k,v){
var G__11362 = obj;
G__11362.push(kfn.call(null,k),vfn.call(null,v));

return G__11362;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
, "handlers": (function (){var x11363 = cljs.core.clone.call(null,handlers);
x11363.forEach = ((function (x11363,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (f){
var coll = this;
var seq__11364 = cljs.core.seq.call(null,coll);
var chunk__11365 = null;
var count__11366 = (0);
var i__11367 = (0);
while(true){
if((i__11367 < count__11366)){
var vec__11374 = cljs.core._nth.call(null,chunk__11365,i__11367);
var k = cljs.core.nth.call(null,vec__11374,(0),null);
var v = cljs.core.nth.call(null,vec__11374,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),k)){
f.call(null,v,"default");
} else {
f.call(null,v,k);
}


var G__11381 = seq__11364;
var G__11382 = chunk__11365;
var G__11383 = count__11366;
var G__11384 = (i__11367 + (1));
seq__11364 = G__11381;
chunk__11365 = G__11382;
count__11366 = G__11383;
i__11367 = G__11384;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__11364);
if(temp__5720__auto__){
var seq__11364__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11364__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11364__$1);
var G__11385 = cljs.core.chunk_rest.call(null,seq__11364__$1);
var G__11386 = c__4550__auto__;
var G__11387 = cljs.core.count.call(null,c__4550__auto__);
var G__11388 = (0);
seq__11364 = G__11385;
chunk__11365 = G__11386;
count__11366 = G__11387;
i__11367 = G__11388;
continue;
} else {
var vec__11377 = cljs.core.first.call(null,seq__11364__$1);
var k = cljs.core.nth.call(null,vec__11377,(0),null);
var v = cljs.core.nth.call(null,vec__11377,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),k)){
f.call(null,v,"default");
} else {
f.call(null,v,k);
}


var G__11389 = cljs.core.next.call(null,seq__11364__$1);
var G__11390 = null;
var G__11391 = (0);
var G__11392 = (0);
seq__11364 = G__11389;
chunk__11365 = G__11390;
count__11366 = G__11391;
i__11367 = G__11392;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11363,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
;

return x11363;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,meta_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

kaocha.cljs.cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
kaocha.cljs.cognitect.transit.write = (function kaocha$cljs$cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
kaocha.cljs.cognitect.transit.read_handler = (function kaocha$cljs$cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
kaocha.cljs.cognitect.transit.write_handler = (function kaocha$cljs$cognitect$transit$write_handler(var_args){
var G__11394 = arguments.length;
switch (G__11394) {
case 2:
return kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return kaocha.cljs.cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return kaocha.cljs.cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

kaocha.cljs.cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if((typeof kaocha !== 'undefined') && (typeof kaocha.cljs !== 'undefined') && (typeof kaocha.cljs.cognitect !== 'undefined') && (typeof kaocha.cljs.cognitect.transit !== 'undefined') && (typeof kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {kaocha.cljs.cognitect.transit.Object}
 * @implements {cljs.core.IWithMeta}
*/
kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta11396){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta11396 = meta11396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11397,meta11396__$1){
var self__ = this;
var _11397__$1 = this;
return (new kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta11396__$1));
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11397){
var self__ = this;
var _11397__$1 = this;
return self__.meta11396;
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta11396","meta11396",71090240,null)], null);
});

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.cljs$lang$type = true;

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.cljs$lang$ctorStr = "kaocha.cljs.cognitect.transit/t_kaocha$cljs$cognitect$transit11395";

kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kaocha.cljs.cognitect.transit/t_kaocha$cljs$cognitect$transit11395");
});

/**
 * Positional factory function for kaocha.cljs.cognitect.transit/t_kaocha$cljs$cognitect$transit11395.
 */
kaocha.cljs.cognitect.transit.__GT_t_kaocha$cljs$cognitect$transit11395 = (function kaocha$cljs$cognitect$transit$__GT_t_kaocha$cljs$cognitect$transit11395(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11396){
return (new kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta11396));
});

}

return (new kaocha.cljs.cognitect.transit.t_kaocha$cljs$cognitect$transit11395(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

kaocha.cljs.cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
kaocha.cljs.cognitect.transit.tagged_value = (function kaocha$cljs$cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue(tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
kaocha.cljs.cognitect.transit.tagged_value_QMARK_ = (function kaocha$cljs$cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue(x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
kaocha.cljs.cognitect.transit.integer = (function kaocha$cljs$cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue(s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
kaocha.cljs.cognitect.transit.integer_QMARK_ = (function kaocha$cljs$cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger(x);
});
/**
 * Construct a big integer from a string.
 */
kaocha.cljs.cognitect.transit.bigint = (function kaocha$cljs$cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger(s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
kaocha.cljs.cognitect.transit.bigint_QMARK_ = (function kaocha$cljs$cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger(x);
});
/**
 * Construct a big decimal from a string.
 */
kaocha.cljs.cognitect.transit.bigdec = (function kaocha$cljs$cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue(s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
kaocha.cljs.cognitect.transit.bigdec_QMARK_ = (function kaocha$cljs$cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal(x);
});
/**
 * Construct a URI from a string.
 */
kaocha.cljs.cognitect.transit.uri = (function kaocha$cljs$cognitect$transit$uri(s){
return com.cognitect.transit.types.uri(s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
kaocha.cljs.cognitect.transit.uri_QMARK_ = (function kaocha$cljs$cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI(x);
});
/**
 * Construct a UUID from a string.
 */
kaocha.cljs.cognitect.transit.uuid = (function kaocha$cljs$cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid(s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
kaocha.cljs.cognitect.transit.uuid_QMARK_ = (function kaocha$cljs$cognitect$transit$uuid_QMARK_(x){
var or__4131__auto__ = com.cognitect.transit.types.isUUID(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
kaocha.cljs.cognitect.transit.binary = (function kaocha$cljs$cognitect$transit$binary(s){
return com.cognitect.transit.types.binary(s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
kaocha.cljs.cognitect.transit.binary_QMARK_ = (function kaocha$cljs$cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary(x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
kaocha.cljs.cognitect.transit.quoted = (function kaocha$cljs$cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted(x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
kaocha.cljs.cognitect.transit.quoted_QMARK_ = (function kaocha$cljs$cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted(x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
kaocha.cljs.cognitect.transit.link = (function kaocha$cljs$cognitect$transit$link(x){
return com.cognitect.transit.types.link(x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
kaocha.cljs.cognitect.transit.link_QMARK_ = (function kaocha$cljs$cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink(x);
});
/**
 * For :transform. Will write any metadata present on the value.
 */
kaocha.cljs.cognitect.transit.write_meta = (function kaocha$cljs$cognitect$transit$write_meta(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMeta$))))?true:false):false)){
var m = cljs.core._meta.call(null,x);
if((!((m == null)))){
return (new kaocha.cljs.cognitect.transit.WithMeta(cljs.core._with_meta.call(null,x,null),m));
} else {
return x;
}
} else {
return x;
}
});

//# sourceMappingURL=transit.js.map

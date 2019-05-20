// Compiled by ClojureScript 1.10.520 {}
goog.provide('winton_utils.data_frame');
goog.require('cljs.core');
/**
 * Transpose a map of vectors to a vector of maps.
 *   Resulting vector will be truncated to the length of the shortest input vector.
 *   e.g. {:a [0 1 2] :b [10 11 12]} -> [{:a 0 :b 10} {:a 1 :b 11} {:a 2 :b 12}]
 */
winton_utils.data_frame.map_of_vs__GT_v_of_maps = (function winton_utils$data_frame$map_of_vs__GT_v_of_maps(k_vs){
return cljs.core.mapv.call(null,(function (vs){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,cljs.core.keys.call(null,k_vs),k),v], null);
}),vs));
}),cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.vals.call(null,k_vs)));
});
winton_utils.data_frame.cell_apply = (function winton_utils$data_frame$cell_apply(f){
return (function (p__12962){
var vec__12963 = p__12962;
var k = cljs.core.nth.call(null,vec__12963,(0),null);
var vs = cljs.core.nth.call(null,vec__12963,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.call(null,f,vs)], null);
});
});
winton_utils.data_frame.cell_update = (function winton_utils$data_frame$cell_update(f){

return (function (p__12966){
var vec__12967 = p__12966;
var k = cljs.core.nth.call(null,vec__12967,(0),null);
var vs = cljs.core.nth.call(null,vec__12967,(1),null);
var g = cljs.core.partial.call(null,f,k);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map_indexed.call(null,g,vs)], null);
});
});
winton_utils.data_frame.cell_sums = (function winton_utils$data_frame$cell_sums(p__12970){
var vec__12971 = p__12970;
var k = cljs.core.nth.call(null,vec__12971,(0),null);
var vs = cljs.core.nth.call(null,vec__12971,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.reductions.call(null,cljs.core._PLUS_,vs)], null);
});
winton_utils.data_frame.cell_diffs = (function winton_utils$data_frame$cell_diffs(initial){
return (function (p__12974){
var vec__12975 = p__12974;
var k = cljs.core.nth.call(null,vec__12975,(0),null);
var vs = cljs.core.nth.call(null,vec__12975,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.call(null,((function (vec__12975,k,vs){
return (function (p__12978){
var vec__12979 = p__12978;
var a = cljs.core.nth.call(null,vec__12979,(0),null);
var b = cljs.core.nth.call(null,vec__12979,(1),null);
return (b - a);
});})(vec__12975,k,vs))
,cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,initial,vs)))], null);
});
});
/**
 * Apply a binary function to merge cells from the input dataframe with cells from df
 */
winton_utils.data_frame.cell_binary = (function winton_utils$data_frame$cell_binary(f,df){
return (function (p__12982){
var vec__12983 = p__12982;
var k = cljs.core.nth.call(null,vec__12983,(0),null);
var vs = cljs.core.nth.call(null,vec__12983,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.call(null,cljs.core.completing.call(null,f),k.call(null,df),vs)], null);
});
});
/**
 * Apply a binary function to merge cells from the input dataframe with cells from a seq
 */
winton_utils.data_frame.cell_binary_seq = (function winton_utils$data_frame$cell_binary_seq(f,cs){
return (function (p__12986){
var vec__12987 = p__12986;
var k = cljs.core.nth.call(null,vec__12987,(0),null);
var vs = cljs.core.nth.call(null,vec__12987,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.map.call(null,cljs.core.completing.call(null,f),cs,vs)], null);
});
});

//# sourceMappingURL=data_frame.js.map

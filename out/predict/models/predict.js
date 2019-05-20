// Compiled by ClojureScript 1.10.520 {}
goog.provide('predict.models.predict');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('winton_utils.data_frame');
predict.models.predict.exp = Math.exp;
predict.models.predict.ln = Math.log;
predict.models.predict.pow = Math.pow;
predict.models.predict.abs = Math.abs;
predict.models.predict.deltas = (function predict$models$predict$deltas(start,v){

return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p__53134){
var vec__53135 = p__53134;
var a = cljs.core.nth.call(null,vec__53135,(0),null);
var b = cljs.core.nth.call(null,vec__53135,(1),null);
return (b - a);
}),cljs.core.partition.call(null,(2),(1),cljs.core.cons.call(null,start,v))));
});
/**
 * 1/(age/10)^2
 */
predict.models.predict.rec_age_10_sq = (function predict$models$predict$rec_age_10_sq(age){
return predict.models.predict.pow.call(null,(age / (10)),-2.0);
});
/**
 * log(age/10)
 */
predict.models.predict.log_age_10 = (function predict$models$predict$log_age_10(age){
return predict.models.predict.ln.call(null,(age / (10)));
});
/**
 * R: r.base.br
 *   Base breast cancer mortality coefficient for radiotherapy enabled or disabled.
 */
predict.models.predict.r_base_br = (function predict$models$predict$r_base_br(radio_QMARK_){
if(cljs.core.truth_(radio_QMARK_)){
return 0.133;
} else {
return (0);
}
});
/**
 * R: r.base.oth
 *   Base other cause mortality coefficient
 */
predict.models.predict.r_base_oth = (function predict$models$predict$r_base_oth(radio_QMARK_){
if(cljs.core.truth_(radio_QMARK_)){
return -0.047;
} else {
return (0);
}
});
/**
 * R: r.br breast mortality coefficient for radiotherapy treatment if enabled
 */
predict.models.predict.r_br = (function predict$models$predict$r_br(radio_QMARK_){
if(cljs.core.truth_(radio_QMARK_)){
return -0.198;
} else {
return (0);
}
});
predict.models.predict.r_oth = (function predict$models$predict$r_oth(radio_QMARK_){

if(cljs.core.truth_(radio_QMARK_)){
return 0.068;
} else {
return (0);
}
});
/**
 * Calculate the breast cancer mortality prognostic index (pi).
 *   Comments relate this code to the corresponding R variables.
 */
predict.models.predict.prognostic_index = (function predict$models$predict$prognostic_index(p__53138){
var map__53139 = p__53138;
var map__53139__$1 = (((((!((map__53139 == null))))?(((((map__53139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53139):map__53139);
var detection = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"detection","detection",-1580072483),(0));
var ki67_rh = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"ki67-rh","ki67-rh",419075811),-0.11333);
var age = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"age","age",-604307804),(65));
var bis_QMARK_ = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"bis?","bis?",-304152921),true);
var her2_rh = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"her2-rh","her2-rh",597542663),-0.0762);
var grade_a = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"grade-a","grade-a",-935752499),(0));
var radio_QMARK_ = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"radio?","radio?",-1782874673),true);
var size = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"size","size",1098693007),(19));
var nodes = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),(1));
var grade = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"grade","grade",2117054771),(1));
var erstat = cljs.core.get.call(null,map__53139__$1,new cljs.core.Keyword(null,"erstat","erstat",273177076),(1));
return (((her2_rh + ki67_rh) + predict.models.predict.r_base_br.call(null,radio_QMARK_)) + (((erstat > (0)))?((((((34.53642 * (predict.models.predict.rec_age_10_sq.call(null,age) + -0.0287449295)) + (-34.20342 * ((predict.models.predict.rec_age_10_sq.call(null,age) * predict.models.predict.log_age_10.call(null,age)) + -0.0510121013))) + (0.7530729 * (predict.models.predict.ln.call(null,(size / (100))) + 1.545233938))) + (0.7060723 * (predict.models.predict.ln.call(null,((nodes + (1)) / (10))) + 1.387566896))) + (0.746655 * grade)) + (-0.22763366 * detection)):((((0.0089827 * (age - 56.3254902)) + (2.093446 * (predict.models.predict.pow.call(null,(size / (100)),0.5) + -0.5090456276))) + (0.6260541 * (predict.models.predict.ln.call(null,((nodes + (1)) / (10))) + 1.086916249))) + (1.129091 * grade_a))));
});
predict.models.predict.m_oth_prognostic_index = (function predict$models$predict$m_oth_prognostic_index(age,radio_QMARK_){

return ((0.0698252 * (predict.models.predict.pow.call(null,(age / (10)),(2)) + -34.23391957)) + predict.models.predict.r_base_oth.call(null,radio_QMARK_));
});
/**
 * baseline survival. Actually baseline-mortality! R: base.m.cum.br
 */
predict.models.predict.base_m_cum_br = (function predict$models$predict$base_m_cum_br(erstat,tm){
if((tm > (0))){
return predict.models.predict.exp.call(null,(((erstat > (0)))?((0.7424402 + (-7.527762 * predict.models.predict.pow.call(null,(1.0 / tm),0.5))) + ((-1.812513 * predict.models.predict.pow.call(null,(1.0 / tm),0.5)) * predict.models.predict.ln.call(null,tm))):((-1.156036 + (0.4707332 / predict.models.predict.pow.call(null,tm,(2)))) + (-3.51355 / tm))));
} else {
return (0);
}
});
predict.models.predict.age = (function predict$models$predict$age(y){
if((y < (25))){
return (25);
} else {
return y;
}
});
predict.models.predict.detection = (function predict$models$predict$detection(d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.204], null).call(null,d);
});
predict.models.predict.grade_a = (function predict$models$predict$grade_a(grade){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(3),null,(2),null], null), null).call(null,grade))){
return (1);
} else {
return (0);
}
});
predict.models.predict.her2_rh = (function predict$models$predict$her2_rh(her2){
var pred__53141 = cljs.core._EQ_;
var expr__53142 = her2;
if(cljs.core.truth_(pred__53141.call(null,(1),expr__53142))){
return 0.2413;
} else {
if(cljs.core.truth_(pred__53141.call(null,(0),expr__53142))){
return -0.0762;
} else {
return (0);
}
}
});
predict.models.predict.ki67_rh = (function predict$models$predict$ki67_rh(erstat,ki67){
if((erstat > (0))){
var pred__53144 = cljs.core._EQ_;
var expr__53145 = ki67;
if(cljs.core.truth_(pred__53144.call(null,(1),expr__53145))){
return 0.14904;
} else {
if(cljs.core.truth_(pred__53144.call(null,(0),expr__53145))){
return -0.11333;
} else {
return (0);
}
}
} else {
return (0);
}
});
/**
 * Calculate treatment coefficients
 *   radio indicates radiotherapy is available in the interface and selected
 *   bis indicates bisphosphonates is available in the interface and selected
 *   c = chemo, h = hormone therapy, t = trastuzumab, r = radiotherapy, b = bisphosphonates
 * 
 *   Note that we _always_ calculate the same columns, but if a treatment is _not_ selected, then
 *   its associated treatment coefficients will be zero.
 * 
 *   e.g. The treatment combination hcb will be calculated as hrctb, but with r and c coefficients zeroed.
 *   
 */
predict.models.predict.types_rx = (function predict$models$predict$types_rx(p__53151){
var map__53152 = p__53151;
var map__53152__$1 = (((((!((map__53152 == null))))?(((((map__53152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53152):map__53152);
var her2 = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"her2","her2",200463132));
var horm = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"horm","horm",-68905121));
var bis = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"bis","bis",-1311072700));
var radio = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"radio","radio",1323726374));
var bis_QMARK_ = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"bis?","bis?",-304152921));
var tra = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"tra","tra",-92028888));
var chemoGen = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"chemoGen","chemoGen",-1408109618));
var radio_QMARK_ = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"radio?","radio?",-1782874673));
var erstat = cljs.core.get.call(null,map__53152__$1,new cljs.core.Keyword(null,"erstat","erstat",273177076));
var z_vec = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
var c_vec = (function (){var pred__53181 = cljs.core._EQ_;
var expr__53182 = chemoGen;
if(cljs.core.truth_(pred__53181.call(null,(2),expr__53182))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.36,-0.248,-0.136], null);
} else {
if(cljs.core.truth_(pred__53181.call(null,(3),expr__53182))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.579,-0.446,-0.313], null);
} else {
return z_vec;
}
}
})();
var vec__53154 = c_vec;
var c_high = cljs.core.nth.call(null,vec__53154,(0),null);
var c = cljs.core.nth.call(null,vec__53154,(1),null);
var c_low = cljs.core.nth.call(null,vec__53154,(2),null);
var h_vec = (cljs.core.truth_((function (){var and__4120__auto__ = (erstat > (0));
if(and__4120__auto__){
return horm;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.502,-0.3857,-0.212], null):z_vec);
var vec__53157 = h_vec;
var h_high = cljs.core.nth.call(null,vec__53157,(0),null);
var h = cljs.core.nth.call(null,vec__53157,(1),null);
var h_low = cljs.core.nth.call(null,vec__53157,(2),null);
var t_vec = (cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,her2,(1));
if(and__4120__auto__){
return tra;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.533,-0.3567,-0.239], null):z_vec);
var vec__53160 = t_vec;
var t_high = cljs.core.nth.call(null,vec__53160,(0),null);
var t = cljs.core.nth.call(null,vec__53160,(1),null);
var t_low = cljs.core.nth.call(null,vec__53160,(2),null);
var r_vec = (cljs.core.truth_((function (){var and__4120__auto__ = radio_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return radio;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.288,-0.198,-0.105], null):z_vec);
var vec__53163 = r_vec;
var r_high = cljs.core.nth.call(null,vec__53163,(0),null);
var r = cljs.core.nth.call(null,vec__53163,(1),null);
var r_low = cljs.core.nth.call(null,vec__53163,(2),null);
var b_vec = (cljs.core.truth_((function (){var and__4120__auto__ = bis_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return bis;
} else {
return and__4120__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.32,-0.198,-0.07], null):z_vec);
var vec__53166 = b_vec;
var b_high = cljs.core.nth.call(null,vec__53166,(0),null);
var b = cljs.core.nth.call(null,vec__53166,(1),null);
var b_low = cljs.core.nth.call(null,vec__53166,(2),null);
var hr_vec = cljs.core.mapv.call(null,((function (z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat){
return (function (p1__53147_SHARP_){
return (h + p1__53147_SHARP_);
});})(z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat))
,r_vec);
var vec__53169 = hr_vec;
var hr_high = cljs.core.nth.call(null,vec__53169,(0),null);
var hr = cljs.core.nth.call(null,vec__53169,(1),null);
var hr_low = cljs.core.nth.call(null,vec__53169,(2),null);
var hrc_vec = cljs.core.mapv.call(null,((function (z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat){
return (function (p1__53148_SHARP_){
return ((h + r) + p1__53148_SHARP_);
});})(z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat))
,c_vec);
var vec__53172 = hrc_vec;
var hrc_high = cljs.core.nth.call(null,vec__53172,(0),null);
var hrc = cljs.core.nth.call(null,vec__53172,(1),null);
var hrc_low = cljs.core.nth.call(null,vec__53172,(2),null);
var hrct_vec = cljs.core.mapv.call(null,((function (z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,hrc_vec,vec__53172,hrc_high,hrc,hrc_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat){
return (function (p1__53149_SHARP_){
return (((h + r) + c) + p1__53149_SHARP_);
});})(z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,hrc_vec,vec__53172,hrc_high,hrc,hrc_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat))
,t_vec);
var vec__53175 = hrct_vec;
var hrct_high = cljs.core.nth.call(null,vec__53175,(0),null);
var hrct = cljs.core.nth.call(null,vec__53175,(1),null);
var hrct_low = cljs.core.nth.call(null,vec__53175,(2),null);
var hrctb_vec = cljs.core.mapv.call(null,((function (z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,hrc_vec,vec__53172,hrc_high,hrc,hrc_low,hrct_vec,vec__53175,hrct_high,hrct,hrct_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat){
return (function (p1__53150_SHARP_){
return ((((h + r) + c) + t) + p1__53150_SHARP_);
});})(z_vec,c_vec,vec__53154,c_high,c,c_low,h_vec,vec__53157,h_high,h,h_low,t_vec,vec__53160,t_high,t,t_low,r_vec,vec__53163,r_high,r,r_low,b_vec,vec__53166,b_high,b,b_low,hr_vec,vec__53169,hr_high,hr,hr_low,hrc_vec,vec__53172,hrc_high,hrc,hrc_low,hrct_vec,vec__53175,hrct_high,hrct,hrct_low,map__53152,map__53152__$1,her2,horm,bis,radio,bis_QMARK_,tra,chemoGen,radio_QMARK_,erstat))
,b_vec);
var vec__53178 = hrctb_vec;
var hrctb_high = cljs.core.nth.call(null,vec__53178,(0),null);
var hrctb = cljs.core.nth.call(null,vec__53178,(1),null);
var hrctb_low = cljs.core.nth.call(null,vec__53178,(2),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"r-low","r-low",-1195579680),new cljs.core.Keyword(null,"h-high","h-high",718786465),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"b-high","b-high",1699873828),new cljs.core.Keyword(null,"hrc-high","hrc-high",-1319084155),new cljs.core.Keyword(null,"hrct","hrct",2105004902),new cljs.core.Keyword(null,"hrctb-high","hrctb-high",-1661035129),new cljs.core.Keyword(null,"h-low","h-low",-845910585),new cljs.core.Keyword(null,"hrc-low","hrc-low",-1872086169),new cljs.core.Keyword(null,"c-low","c-low",-2090049080),new cljs.core.Keyword(null,"hrct-low","hrct-low",65938025),new cljs.core.Keyword(null,"hr-low","hr-low",421031787),new cljs.core.Keyword(null,"hrc","hrc",-1574692307),new cljs.core.Keyword(null,"hrctb-low","hrctb-low",1313044592),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"hrct-high","hrct-high",-206047758),new cljs.core.Keyword(null,"hrctb","hrctb",-770596110),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"t-high","t-high",-1918336234),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c-high","c-high",2065287863),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"hr-high","hr-high",-2039089126),new cljs.core.Keyword(null,"b-low","b-low",-210803460),new cljs.core.Keyword(null,"t-low","t-low",363434460),new cljs.core.Keyword(null,"r-high","r-high",1235807709)],[r_low,h_high,r,hr,b_high,hrc_high,hrct,hrctb_high,h_low,hrc_low,c_low,hrct_low,hr_low,hrc,hrctb_low,(0),c,hrct_high,hrctb,h,t_high,b,c_high,t,hr_high,b_low,t_low,r_high]);
});
/**
 * clojure/script implementation of predict-v2 model.
 * 
 *   Predicts survival based on patient input parameters.
 * 
 *   Arguments age, size and nodes are entered as values; the others as lookups
 *   # This is how the model assigns some input parameters (or ranges) into variables
 *   # i.e. parameter (or ranges) -> web form setting -> Predict model variable setting
 *   # Tumour Grade (1,2,3,unknown) -> (1,2,3,9) -> (1.0,2.0,3.0,2.13)
 *   # ER Status (-ve,+ve) -> (0,1) -> (0,1) n.b. unknown not allowed
 *   # Detection (Clinical,Screening,Other) -> (0,1,2) -> (0.0,1.0,0.204)
 *   # HER2 Status (-ve,+ve,unknown) -> (0,1,9)
 *   # KI67 Status (-ve,+ve,unknown) -> (0,1,9)
 * 
 *   We are now passing in the selected treatments so we don't have to calculate all possible
 *   treatment combinations on each call. Instead, we calculate the treatment combinations that
 *   could make up the current set in hrctb order
 * 
 *   This means that if we see non-null horm, chemoGen, bis values, we will calculate
 *   h, hc, hb, hcb only.
 * 
 *   Note:
 *   For uncertainties in the coefficients h,c,t etc, see docs/Predictv2-uncertainties.docx
 *   
 */
predict.models.predict.cljs_predict = (function predict$models$predict$cljs_predict(p__53199){
var map__53200 = p__53199;
var map__53200__$1 = (((((!((map__53200 == null))))?(((((map__53200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53200):map__53200);
var inputs = map__53200__$1;
var rtime = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"rtime","rtime",1938602588));
var her2 = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"her2","her2",200463132));
var detection = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"detection","detection",-1580072483));
var horm = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"horm","horm",-68905121));
var bis = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"bis","bis",-1311072700));
var age = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"age","age",-604307804));
var radio = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"radio","radio",1323726374));
var bis_QMARK_ = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"bis?","bis?",-304152921));
var tra = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"tra","tra",-92028888));
var ki67 = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"ki67","ki67",1279465450));
var chemoGen = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"chemoGen","chemoGen",-1408109618));
var radio_QMARK_ = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"radio?","radio?",-1782874673));
var size = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var nodes = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var grade = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"grade","grade",2117054771));
var erstat = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"erstat","erstat",273177076));
var age__$1 = (((age < (25)))?(25):age);
var detection__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),0.204], null).call(null,detection);
var grade__$1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),2.13], null).call(null,((cljs.core._EQ_.call(null,grade,(9)))?(3):(grade - (1))));
var grade_a = predict.models.predict.grade_a.call(null,grade__$1);
var her2_rh = predict.models.predict.her2_rh.call(null,her2);
var ki67_rh = predict.models.predict.ki67_rh.call(null,erstat,ki67);
var chemo = (chemoGen > (0));
var types_rx = predict.models.predict.types_rx.call(null,inputs);
var types = cljs.core.map.call(null,cljs.core.first,types_rx);
var pi = predict.models.predict.prognostic_index.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ki67-rh","ki67-rh",419075811),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"her2-rh","her2-rh",597542663),new cljs.core.Keyword(null,"grade-a","grade-a",-935752499),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"radio?","radio?",-1782874673),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.Keyword(null,"grade","grade",2117054771),new cljs.core.Keyword(null,"erstat","erstat",273177076),new cljs.core.Keyword(null,"detection","detection",-1580072483)],[ki67_rh,age__$1,her2_rh,grade_a,size,radio_QMARK_,nodes,grade__$1,erstat,detection__$1]));
var mi = predict.models.predict.m_oth_prognostic_index.call(null,age__$1,radio_QMARK_);
var times = cljs.core.range.call(null,(Math.round(rtime) + (1)));
var base_m_cum_oth = cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53184_SHARP_){
return predict.models.predict.exp.call(null,((-6.052919 + (1.079863 * predict.models.predict.ln.call(null,p1__53184_SHARP_))) + (0.3255321 * predict.models.predict.pow.call(null,p1__53184_SHARP_,0.5))));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,times);
var s_cum_oth = cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53185_SHARP_){
return predict.models.predict.exp.call(null,((- predict.models.predict.exp.call(null,mi)) * p1__53185_SHARP_));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,base_m_cum_oth);
var base_m_oth = predict.models.predict.deltas.call(null,(0),base_m_cum_oth);
var m_cum_oth = cljs.core.mapv.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (tm){
return ((1) - cljs.core.nth.call(null,s_cum_oth,tm));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,times);
var m_oth = predict.models.predict.deltas.call(null,(0),m_cum_oth);
var r_oth = predict.models.predict.r_oth.call(null,radio_QMARK_);
var rx_oth = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(cljs.core.truth_((function (){var and__4120__auto__ = radio_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["r",null], null), null),cljs.core.name.call(null,type));
} else {
return and__4120__auto__;
}
})())?r_oth:(0))], null);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,types));
var xf_m_oth_rx = ((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (tm){
return (base_m_oth.call(null,tm) * predict.models.predict.exp.call(null,(mi + type.call(null,rx_oth))));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,times)], null);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
;
var s_cum_oth_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,xf_m_oth_rx),cljs.core.map.call(null,winton_utils.data_frame.cell_sums),cljs.core.map.call(null,winton_utils.data_frame.cell_apply.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53186_SHARP_){
return predict.models.predict.exp.call(null,(- p1__53186_SHARP_));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
))),types);
var base_m_br = predict.models.predict.deltas.call(null,(0),cljs.core.map.call(null,cljs.core.partial.call(null,predict.models.predict.base_m_cum_br,erstat),times));
var m_br_rx_xf_1 = ((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (type){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53188_SHARP_){
return (predict.models.predict.exp.call(null,(type.call(null,types_rx) + pi)) * p1__53188_SHARP_);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,base_m_br)], null);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
;
var s_cum_br_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,m_br_rx_xf_1),cljs.core.map.call(null,winton_utils.data_frame.cell_sums),cljs.core.map.call(null,winton_utils.data_frame.cell_apply.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53189_SHARP_){
return predict.models.predict.exp.call(null,(- p1__53189_SHARP_));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
))),types);
var m_br_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,winton_utils.data_frame.cell_apply.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53190_SHARP_){
return ((1) - p1__53190_SHARP_);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
)),cljs.core.map.call(null,winton_utils.data_frame.cell_diffs.call(null,(0)))),s_cum_br_rx);
var m_all_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,winton_utils.data_frame.cell_binary.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53194_SHARP_,p2__53195_SHARP_){
return ((1) - (p1__53194_SHARP_ * p2__53195_SHARP_));
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,s_cum_br_rx)),cljs.core.map.call(null,winton_utils.data_frame.cell_diffs.call(null,(0)))),s_cum_oth_rx);
var pred_m_br_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,winton_utils.data_frame.cell_update.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (type,tm,old){
if((tm > (0))){
return (old / (old + cljs.core.nth.call(null,m_oth,tm)));
} else {
return (0);
}
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
)),cljs.core.map.call(null,winton_utils.data_frame.cell_binary.call(null,cljs.core._STAR_,m_all_rx))),m_br_rx);
var pred_cum_br_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,winton_utils.data_frame.cell_sums),pred_m_br_rx);
var pred_cum_all_rx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,winton_utils.data_frame.cell_binary.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,pred_m_br_rx,pred_cum_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53197_SHARP_,p2__53196_SHARP_){
return (p2__53196_SHARP_ - p1__53197_SHARP_);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,pred_m_br_rx,pred_cum_br_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,pred_m_br_rx)),cljs.core.map.call(null,winton_utils.data_frame.cell_sums),cljs.core.map.call(null,winton_utils.data_frame.cell_binary.call(null,cljs.core._PLUS_,pred_cum_br_rx))),m_all_rx);
var surg_only = cljs.core.map.call(null,((function (age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,pred_m_br_rx,pred_cum_br_rx,pred_cum_all_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat){
return (function (p1__53198_SHARP_){
return ((1) - p1__53198_SHARP_);
});})(age__$1,detection__$1,grade__$1,grade_a,her2_rh,ki67_rh,chemo,types_rx,types,pi,mi,times,base_m_cum_oth,s_cum_oth,base_m_oth,m_cum_oth,m_oth,r_oth,rx_oth,xf_m_oth_rx,s_cum_oth_rx,base_m_br,m_br_rx_xf_1,s_cum_br_rx,m_br_rx,m_all_rx,pred_m_br_rx,pred_cum_br_rx,pred_cum_all_rx,map__53200,map__53200__$1,inputs,rtime,her2,detection,horm,bis,age,radio,bis_QMARK_,tra,ki67,chemoGen,radio_QMARK_,size,nodes,grade,erstat))
,new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(pred_cum_all_rx));
var benefits2_1 = cljs.core.assoc.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,winton_utils.data_frame.cell_binary_seq.call(null,cljs.core._,new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(pred_cum_all_rx))),pred_cum_all_rx),new cljs.core.Keyword(null,"z","z",-789527183),surg_only,new cljs.core.Keyword(null,"oth","oth",901151226),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(s_cum_oth_rx));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"benefits2-1","benefits2-1",-532997404),benefits2_1,new cljs.core.Keyword(null,"annual-benefits","annual-benefits",751765272),winton_utils.data_frame.map_of_vs__GT_v_of_maps.call(null,benefits2_1)], null);
});

//# sourceMappingURL=predict.js.map

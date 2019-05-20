// Compiled by ClojureScript 1.10.520 {}
goog.provide('kaocha.cljs.websocket_client');
goog.require('cljs.core');
goog.require('kaocha.cljs.cognitect.transit');
goog.require('pjstadig.print');
goog.require('cljs.pprint');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.log');
goog.require('goog.object');
goog.require('clojure.browser.repl');
goog.require('goog.string.StringBuffer');
if((typeof kaocha !== 'undefined') && (typeof kaocha.cljs !== 'undefined') && (typeof kaocha.cljs.websocket_client !== 'undefined') && (typeof kaocha.cljs.websocket_client.logger !== 'undefined')){
} else {
kaocha.cljs.websocket_client.logger = goog.log.getLogger("Kaocha CLJS Client");
}
kaocha.cljs.websocket_client.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:(((typeof require !== 'undefined'))?require("isomorphic-ws"):(function(){throw cljs.core.ex_info.call(null,"No WebSocket implementation found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
kaocha.cljs.websocket_client.socket = null;
kaocha.cljs.websocket_client.transit_handlers = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"default","default",-1987822328),kaocha.cljs.cognitect.transit.write_handler.call(null,(function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,o));
}),(function (o){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
})),cljs.core.Var,kaocha.cljs.cognitect.transit.write_handler.call(null,cljs.core.constantly.call(null,"var"),(function (rep){
return cljs.core.meta.call(null,rep);
}))]);
kaocha.cljs.websocket_client.transit_writer = kaocha.cljs.cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),kaocha.cljs.websocket_client.transit_handlers], null));
kaocha.cljs.websocket_client.to_transit = (function kaocha$cljs$websocket_client$to_transit(value){
return kaocha.cljs.cognitect.transit.write.call(null,kaocha.cljs.websocket_client.transit_writer,value);
});
kaocha.cljs.websocket_client.from_transit = (function kaocha$cljs$websocket_client$from_transit(string){
return kaocha.cljs.cognitect.transit.read.call(null,kaocha.cljs.cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),string);
});
kaocha.cljs.websocket_client.send_BANG_ = (function kaocha$cljs$websocket_client$send_BANG_(message){
if(cljs.core.truth_((function (){var and__4120__auto__ = kaocha.cljs.websocket_client.socket;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,kaocha.cljs.websocket_client.socket.readyState,kaocha.cljs.websocket_client.socket.OPEN);
} else {
return and__4120__auto__;
}
})())){
return kaocha.cljs.websocket_client.socket.send(kaocha.cljs.websocket_client.to_transit.call(null,message));
} else {
return null;
}
});
kaocha.cljs.websocket_client.pretty_print_failure = (function kaocha$cljs$websocket_client$pretty_print_failure(m){
var buffer = (new goog.string.StringBuffer());
var _STAR_sb_STAR__orig_val__12733 = pjstadig.print._STAR_sb_STAR_;
var _STAR_out_STAR__orig_val__12734 = cljs.core._STAR_out_STAR_;
var _STAR_sb_STAR__temp_val__12735 = buffer;
var _STAR_out_STAR__temp_val__12736 = cljs.pprint.get_pretty_writer.call(null,(new cljs.core.StringBufferWriter(buffer)));
pjstadig.print._STAR_sb_STAR_ = _STAR_sb_STAR__temp_val__12735;

cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__12736;

try{var map__12737_12767 = pjstadig.print.convert_event.call(null,m);
var map__12737_12768__$1 = (((((!((map__12737_12767 == null))))?(((((map__12737_12767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12737_12767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12737_12767):map__12737_12767);
var event_12769 = map__12737_12768__$1;
var type_12770 = cljs.core.get.call(null,map__12737_12768__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var expected_12771 = cljs.core.get.call(null,map__12737_12768__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual_12772 = cljs.core.get.call(null,map__12737_12768__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var diffs_12773 = cljs.core.get.call(null,map__12737_12768__$1,new cljs.core.Keyword(null,"diffs","diffs",-1720136241));
var message_12774 = cljs.core.get.call(null,map__12737_12768__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var print_expected_12775 = ((function (map__12737_12767,map__12737_12768__$1,event_12769,type_12770,expected_12771,actual_12772,diffs_12773,message_12774,_STAR_sb_STAR__orig_val__12733,_STAR_out_STAR__orig_val__12734,_STAR_sb_STAR__temp_val__12735,_STAR_out_STAR__temp_val__12736,buffer){
return (function (actual__$1){
pjstadig.print.rprint.call(null,"Expected:\n  ");

cljs.pprint.pprint.call(null,expected_12771,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"Actual:\n  ");

return cljs.pprint.pprint.call(null,actual__$1,cljs.core._STAR_out_STAR_);
});})(map__12737_12767,map__12737_12768__$1,event_12769,type_12770,expected_12771,actual_12772,diffs_12773,message_12774,_STAR_sb_STAR__orig_val__12733,_STAR_out_STAR__orig_val__12734,_STAR_sb_STAR__temp_val__12735,_STAR_out_STAR__temp_val__12736,buffer))
;
if(cljs.core.seq.call(null,diffs_12773)){
var seq__12739_12776 = cljs.core.seq.call(null,diffs_12773);
var chunk__12740_12777 = null;
var count__12741_12778 = (0);
var i__12742_12779 = (0);
while(true){
if((i__12742_12779 < count__12741_12778)){
var vec__12755_12780 = cljs.core._nth.call(null,chunk__12740_12777,i__12742_12779);
var actual_12781__$1 = cljs.core.nth.call(null,vec__12755_12780,(0),null);
var vec__12758_12782 = cljs.core.nth.call(null,vec__12755_12780,(1),null);
var a_12783 = cljs.core.nth.call(null,vec__12758_12782,(0),null);
var b_12784 = cljs.core.nth.call(null,vec__12758_12782,(1),null);
print_expected_12775.call(null,actual_12781__$1);

pjstadig.print.rprint.call(null,"Diff:\n  ");

if(cljs.core.truth_(a_12783)){
pjstadig.print.rprint.call(null,"- ");

cljs.pprint.pprint.call(null,a_12783,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"  + ");
} else {
pjstadig.print.rprint.call(null,"+ ");
}

if(cljs.core.truth_(b_12784)){
cljs.pprint.pprint.call(null,b_12784,cljs.core._STAR_out_STAR_);
} else {
}


var G__12785 = seq__12739_12776;
var G__12786 = chunk__12740_12777;
var G__12787 = count__12741_12778;
var G__12788 = (i__12742_12779 + (1));
seq__12739_12776 = G__12785;
chunk__12740_12777 = G__12786;
count__12741_12778 = G__12787;
i__12742_12779 = G__12788;
continue;
} else {
var temp__5720__auto___12789 = cljs.core.seq.call(null,seq__12739_12776);
if(temp__5720__auto___12789){
var seq__12739_12790__$1 = temp__5720__auto___12789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12739_12790__$1)){
var c__4550__auto___12791 = cljs.core.chunk_first.call(null,seq__12739_12790__$1);
var G__12792 = cljs.core.chunk_rest.call(null,seq__12739_12790__$1);
var G__12793 = c__4550__auto___12791;
var G__12794 = cljs.core.count.call(null,c__4550__auto___12791);
var G__12795 = (0);
seq__12739_12776 = G__12792;
chunk__12740_12777 = G__12793;
count__12741_12778 = G__12794;
i__12742_12779 = G__12795;
continue;
} else {
var vec__12761_12796 = cljs.core.first.call(null,seq__12739_12790__$1);
var actual_12797__$1 = cljs.core.nth.call(null,vec__12761_12796,(0),null);
var vec__12764_12798 = cljs.core.nth.call(null,vec__12761_12796,(1),null);
var a_12799 = cljs.core.nth.call(null,vec__12764_12798,(0),null);
var b_12800 = cljs.core.nth.call(null,vec__12764_12798,(1),null);
print_expected_12775.call(null,actual_12797__$1);

pjstadig.print.rprint.call(null,"Diff:\n  ");

if(cljs.core.truth_(a_12799)){
pjstadig.print.rprint.call(null,"- ");

cljs.pprint.pprint.call(null,a_12799,cljs.core._STAR_out_STAR_);

pjstadig.print.rprint.call(null,"  + ");
} else {
pjstadig.print.rprint.call(null,"+ ");
}

if(cljs.core.truth_(b_12800)){
cljs.pprint.pprint.call(null,b_12800,cljs.core._STAR_out_STAR_);
} else {
}


var G__12801 = cljs.core.next.call(null,seq__12739_12790__$1);
var G__12802 = null;
var G__12803 = (0);
var G__12804 = (0);
seq__12739_12776 = G__12801;
chunk__12740_12777 = G__12802;
count__12741_12778 = G__12803;
i__12742_12779 = G__12804;
continue;
}
} else {
}
}
break;
}
} else {
print_expected_12775.call(null,actual_12772);
}

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(pjstadig.print._STAR_sb_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__12734;

pjstadig.print._STAR_sb_STAR_ = _STAR_sb_STAR__orig_val__12733;
}});
kaocha.cljs.websocket_client.cljs_test_msg = (function kaocha$cljs$websocket_client$cljs_test_msg(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("cljs.test","message","cljs.test/message",805969520),new cljs.core.Keyword("cljs.test","message","cljs.test/message",805969520),m,new cljs.core.Keyword("cljs.test","testing-contexts","cljs.test/testing-contexts",-805796937),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null))], null);
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaocha.type","cljs","kaocha.type/cljs",-1078165948),new cljs.core.Keyword("kaocha.cljs.websocket-client","propagate","kaocha.cljs.websocket-client/propagate",355706059)], null),(function (m){
return kaocha.cljs.websocket_client.send_BANG_.call(null,kaocha.cljs.websocket_client.cljs_test_msg.call(null,m));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaocha.type","cljs","kaocha.type/cljs",-1078165948),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
return kaocha.cljs.websocket_client.send_BANG_.call(null,kaocha.cljs.websocket_client.cljs_test_msg.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword("kaocha.report","printed-expression","kaocha.report/printed-expression",219822455),kaocha.cljs.websocket_client.pretty_print_failure.call(null,m))));
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kaocha.type","cljs","kaocha.type/cljs",-1078165948),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
var error = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
var stacktrace = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m).stack;
return kaocha.cljs.websocket_client.send_BANG_.call(null,kaocha.cljs.websocket_client.cljs_test_msg.call(null,cljs.core.assoc.call(null,m,new cljs.core.Keyword("kaocha.report","printed-expression","kaocha.report/printed-expression",219822455),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim.call(null,stacktrace)),"\n"].join(''),new cljs.core.Keyword("kaocha.report","error-type","kaocha.report/error-type",2106778117),["js/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.name)].join(''),new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return error.message;
}
})())));
}));
var seq__12805_12809 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),new cljs.core.Keyword(null,"begin-test-all-vars","begin-test-all-vars",124024339),new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",548827253),new cljs.core.Keyword("kaocha.report","one-arg-eql","kaocha.report/one-arg-eql",-871229912)], null));
var chunk__12806_12810 = null;
var count__12807_12811 = (0);
var i__12808_12812 = (0);
while(true){
if((i__12808_12812 < count__12807_12811)){
var t_12813 = cljs.core._nth.call(null,chunk__12806_12810,i__12808_12812);
cljs.core.derive.call(null,t_12813,new cljs.core.Keyword("kaocha.cljs.websocket-client","propagate","kaocha.cljs.websocket-client/propagate",355706059));


var G__12814 = seq__12805_12809;
var G__12815 = chunk__12806_12810;
var G__12816 = count__12807_12811;
var G__12817 = (i__12808_12812 + (1));
seq__12805_12809 = G__12814;
chunk__12806_12810 = G__12815;
count__12807_12811 = G__12816;
i__12808_12812 = G__12817;
continue;
} else {
var temp__5720__auto___12818 = cljs.core.seq.call(null,seq__12805_12809);
if(temp__5720__auto___12818){
var seq__12805_12819__$1 = temp__5720__auto___12818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12805_12819__$1)){
var c__4550__auto___12820 = cljs.core.chunk_first.call(null,seq__12805_12819__$1);
var G__12821 = cljs.core.chunk_rest.call(null,seq__12805_12819__$1);
var G__12822 = c__4550__auto___12820;
var G__12823 = cljs.core.count.call(null,c__4550__auto___12820);
var G__12824 = (0);
seq__12805_12809 = G__12821;
chunk__12806_12810 = G__12822;
count__12807_12811 = G__12823;
i__12808_12812 = G__12824;
continue;
} else {
var t_12825 = cljs.core.first.call(null,seq__12805_12819__$1);
cljs.core.derive.call(null,t_12825,new cljs.core.Keyword("kaocha.cljs.websocket-client","propagate","kaocha.cljs.websocket-client/propagate",355706059));


var G__12826 = cljs.core.next.call(null,seq__12805_12819__$1);
var G__12827 = null;
var G__12828 = (0);
var G__12829 = (0);
seq__12805_12809 = G__12826;
chunk__12806_12810 = G__12827;
count__12807_12811 = G__12828;
i__12808_12812 = G__12829;
continue;
}
} else {
}
}
break;
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reporter","reporter",-805360621)], null),cljs.core.constantly.call(null,new cljs.core.Keyword("kaocha.type","cljs","kaocha.type/cljs",-1078165948)));
kaocha.cljs.websocket_client.connect_BANG_ = (function kaocha$cljs$websocket_client$connect_BANG_(){
var sock = (new kaocha.cljs.websocket_client.WebSocket("ws://localhost:9753"));
kaocha.cljs.websocket_client.socket = sock;

kaocha.cljs.websocket_client.socket.onopen = ((function (sock){
return (function (e){
return kaocha.cljs.websocket_client.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("kaocha.cljs.websocket-client","connected","kaocha.cljs.websocket-client/connected",-130444887),new cljs.core.Keyword(null,"browser?","browser?",-195634801),(typeof document !== 'undefined')], null));
});})(sock))
;

kaocha.cljs.websocket_client.socket.onerror = ((function (sock){
return (function (e){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e);
});})(sock))
;

kaocha.cljs.websocket_client.socket.onmessage = ((function (sock){
return (function (e){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"message","message",-406056002),kaocha.cljs.websocket_client.from_transit.call(null,e.data));
});})(sock))
;

return kaocha.cljs.websocket_client.socket.onclose = ((function (sock){
return (function (e){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"close","close",1835149582),e);
});})(sock))
;
});
kaocha.cljs.websocket_client.disconnect_BANG_ = (function kaocha$cljs$websocket_client$disconnect_BANG_(){
if(cljs.core.truth_(kaocha.cljs.websocket_client.socket)){
kaocha.cljs.websocket_client.socket.onclose = (function (_){
return null;
});

return kaocha.cljs.websocket_client.socket.close();
} else {
return null;
}
});
kaocha.cljs.websocket_client.connect_BANG_.call(null);

//# sourceMappingURL=websocket_client.js.map

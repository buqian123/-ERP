(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-service-index"],{"011a":function(e,t,i){"use strict";i.r(t);var r=i("14f6"),a=i("e98a");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("5970");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"13f672b9",null,!1,r["a"],o);t["default"]=c.exports},"14f6":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var r={uIcon:i("fc07").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-search",style:{margin:e.margin},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100rpx":"10rpx",border:e.borderStyle,height:e.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor},e.inputStyle],attrs:{"confirm-type":"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-placeholder-class",placeholder:e.placeholder,"placeholder-style":"color: "+e.placeholderColor,type:"text"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.getFocus.apply(void 0,arguments)}}}),e.keyword&&e.clearabled&&e.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):e._e()],1),i("v-uni-view",{staticClass:"u-action",class:[e.showActionBtn||e.show?"u-action-active":""],style:[e.actionStyle],on:{click:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.custom.apply(void 0,arguments)}}},[e._v(e._s(e.actionText))])],1)},n=[]},"222b":function(e,t,i){"use strict";i.r(t);var r=i("de05"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},"3cc4":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.demand[data-v-e2f18af0]{width:100%;height:100%;min-height:100vh;background:#f5f5f5;overflow:hidden;position:relative}.van-pull-refresh__head[data-v-e2f18af0]{position:absolute;left:0;width:100%;height:1.333333rem;overflow:hidden;color:#969799;font-size:.373333rem;line-height:1.333333rem;text-align:center;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.header-bgc[data-v-e2f18af0]{position:fixed;top:0;left:0;right:0;z-index:1;background-color:#3975c5;height:8.02667rem}.flush-header[data-v-e2f18af0]{position:fixed;top:0;left:0;z-index:5;right:0;background:#3975c5;padding:.266667rem}.search-header[data-v-e2f18af0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:.4rem 0}.filter[data-v-e2f18af0]{width:100%;height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex}.filter-item[data-v-e2f18af0]{background-color:#1b5db3;color:#fff;font-size:.32rem;height:.666667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1;padding:0 .213333rem;border-radius:.053333rem}.filter-item .filter-more[data-v-e2f18af0]{width:0;height:0;border-color:transparent #fff transparent transparent;border-style:solid;border-width:.106667rem .106667rem 0 0;margin-left:.093333rem;margin-bottom:-.186667rem}.tab-list[data-v-e2f18af0]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;padding:.38rem 0}.tab-list .tab-item[data-v-e2f18af0]{position:relative;font-family:PingFangHK-Regular,PingFangHK;font-size:.373333rem;font-weight:400;line-height:.533333rem;color:#fff;opacity:.5}.tab-list .curr[data-v-e2f18af0]{opacity:1}.all-counts[data-v-e2f18af0]{color:#fff;opacity:.68;font-size:12px}.linear-background[data-v-e2f18af0]{position:fixed;top:0;left:0;right:0;z-index:1;height:5.066667rem;background-color:#3975c5}.linear-background[data-v-e2f18af0]::after{content:"";position:absolute;bottom:-2.07rem;height:2.08rem;left:0;right:0;background:-webkit-linear-gradient(top,#3975c5,rgba(57,117,197,0));background:linear-gradient(180deg,#3975c5,rgba(57,117,197,0))}.service-ul[data-v-e2f18af0]{width:100%;padding:4.906667rem .293333rem 0;margin-top:.266667rem;position:relative;z-index:4}.service-ul .service-item[data-v-e2f18af0]{margin-top:.4rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%;background:#fff;border-radius:.106667rem}.service-ul .service-item[data-v-e2f18af0]:first-child{margin-top:0}.service-ul .service-item .service-item-top[data-v-e2f18af0]{width:100%;padding:.266667rem .32rem 0}.service-ul .service-item .service-item-top .mg[data-v-e2f18af0]{margin-top:.146667rem!important;margin-bottom:.26666rem!important}.service-ul .service-item .service-item-top .text[data-v-e2f18af0]{width:100%;height:.44rem;font-size:.32rem;line-height:.44rem;color:#7b7b7b;margin-bottom:.106667rem}.service-ul .service-item .service-item-top .text .img[data-v-e2f18af0]{width:.506667rem;height:.506667rem;margin-left:.133334rem}.service-ul .service-item .service-item-top .text uni-text[data-v-e2f18af0]{box-sizing:border-box;border-radius:.053333rem;font-size:.32rem;margin-right:.12rem}.service-ul .service-item .service-item-top .text .t1[data-v-e2f18af0]{padding:.053333rem .133333rem;color:#fd8517;max-width:4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border:.013333rem solid #ffa14c}.service-ul .service-item .service-item-top .text .t2[data-v-e2f18af0]{padding:.053333rem .133333rem;color:#1f9400;border:.013333rem solid #1f9400}.service-ul .service-item .service-item-center[data-v-e2f18af0]{padding:.88rem .32rem;background-color:#f5f9ff}.service-ul .service-item .service-item-center .service-person[data-v-e2f18af0]{width:1.733333rem;height:.56rem;overflow:hidden;font-size:.4rem;font-weight:400;line-height:.56rem;color:#262626;text-overflow:ellipsis;white-space:nowrap}.service-ul .service-item .service-item-center .service-arrive[data-v-e2f18af0]{width:1.626667rem;height:.853333rem;font-size:.373333rem;font-weight:400;line-height:.533333rem;color:#3975c5;text-align:center;background-image:url(/static/arrive.png);background-repeat:no-repeat;background-position:0 100%;background-size:1.626667rem .213333rem;margin:0 1.33333rem .106667rem 1.626667rem}.service-ul .service-item .service-item-bottom[data-v-e2f18af0]{height:1.226667rem;box-sizing:border-box;padding:0 .32rem}.service-ul .service-item .service-item-bottom .service-btn-ul[data-v-e2f18af0]{width:100%}.service-ul .service-item .service-item-bottom .service-btn-ul .btn-list[data-v-e2f18af0]{box-sizing:border-box;height:.773333rem;line-height:.773333rem;padding:0 .266667rem;margin-left:.266667rem;font-size:.32rem;font-weight:400;color:#262626;border-radius:.386667rem;border:.013333rem solid #ccc}.service-ul .service-item .service-item-bottom .service-btn-ul .cur[data-v-e2f18af0]{color:#3975c5;border-color:#3975c5}.van-list__finished-text[data-v-e2f18af0]{color:#969799;font-size:.373333rem;line-height:1.333333rem;text-align:center}.van-list__placeholder[data-v-e2f18af0]{height:0;pointer-events:none}',""]),e.exports=t},"413c":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var r={uSearch:i("011a").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"demand"},[i("v-uni-view",{staticClass:"van-pull-refresh__head"}),i("v-uni-view",{staticClass:"flush-header"},[i("v-uni-view",{staticClass:"search-header"},[i("u-search",{attrs:{placeholder:"姓名(昵称)/手机号/地址(如碧桂园-2-3-102)",shape:"square",clearabled:!0,"show-action":!1},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),i("v-uni-view",{staticClass:"filter"},[i("v-uni-view",{staticClass:"filter-item"},[i("v-uni-view",{staticClass:"ell"},[e._v("筛选")]),i("v-uni-view",{staticClass:"filter-more"})],1)],1),i("v-uni-view",{staticClass:"tab-list"},[i("v-uni-view",{staticClass:"tab-item",class:{curr:0==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=0}}},[e._v("全部")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:1==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=1}}},[e._v("待分配")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:2==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=2}}},[e._v("待确认")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:3==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=3}}},[e._v("进行中")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:4==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=4}}},[e._v("已完成")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:5==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabIndex=5}}},[e._v("已撤销")])],1),i("v-uni-view",{staticClass:"all-counts"},[e._v("共2个服务单，1个客户，1个客户需求")])],1),i("v-uni-view",{staticClass:"linear-background"}),i("v-uni-view",{staticClass:"service-ul"},e._l(2,(function(t,r){return i("v-uni-view",{key:r,staticClass:"service-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"service-item-top"},[i("v-uni-view",{staticClass:"text"},[e._v("服务编号：202109011051061442906839")]),i("v-uni-view",{staticClass:"text"},[e._v("服务单类型：测量-示例(请去PC端修改)")]),i("v-uni-view",{staticClass:"text"},[e._v("派单时间：2021-09-01 10:51")]),i("v-uni-view",{staticClass:"text"},[e._v("客户：AnDragon")]),i("v-uni-view",{staticClass:"text flex-jsac"},[i("v-uni-text",[e._v("详细地址：杭州解百城市奥莱A座-A8-1-1011")]),i("v-uni-image",{staticClass:"img",attrs:{src:"/static/address.png"}})],1),i("v-uni-view",{staticClass:"text flex-jsac mg"},[i("v-uni-text",{staticClass:"t1"},[e._v("示例(请去PC端修改)")]),i("v-uni-text",{staticClass:"t2"},[e._v("已签约")])],1)],1),i("v-uni-view",{staticClass:"service-item-center flex-cen"},[i("v-uni-view",{staticClass:"service-person"},[e._v("ZhengYu")]),i("v-uni-view",{staticClass:"service-arrive"},[e._v("进行中")]),i("v-uni-view",{staticClass:"service-person"},[e._v("ZhengYu")])],1),i("v-uni-view",{staticClass:"service-item-bottom flex-jeac"},[i("v-uni-view",{staticClass:"service-btn-ul flex-jeac"},[i("v-uni-view",{staticClass:"btn-list"},[e._v("详情")]),i("v-uni-view",{staticClass:"btn-list cur"},[e._v("去服务")])],1)],1)],1)})),1),i("v-uni-view",{staticClass:"van-list__finished-text"},[e._v("已显示全部数据")]),i("v-uni-view",{staticClass:"van-list__placeholder"})],1)},n=[]},5970:function(e,t,i){"use strict";var r=i("ce5e"),a=i.n(r);a.a},"5f5c":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-13f672b9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}',""]),e.exports=t},"9b62":function(e,t,i){"use strict";var r=i("9dc1"),a=i.n(r);a.a},"9dc1":function(e,t,i){var r=i("3cc4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("2856a790",r,!0,{sourceMap:!1,shadowMode:!1})},ce5e:function(e,t,i){var r=i("5f5c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("1e55d65a",r,!0,{sourceMap:!1,shadowMode:!1})},d931:function(e,t,i){"use strict";i.r(t);var r=i("413c"),a=i("222b");for(var n in a)"default"!==n&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("9b62");var o,s=i("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"e2f18af0",null,!1,r["a"],o);t["default"]=c.exports},de05:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{search:"",tabIndex:0}},methods:{goDetail:function(){uni.navigateTo({url:"/pages/customer/cus-detail-type/service/serviceDetail"})}}};t.default=r},e98a:function(e,t,i){"use strict";i.r(t);var r=i("ee20"),a=i.n(r);for(var n in r)"default"!==n&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},ee20:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};t.default=r}}]);
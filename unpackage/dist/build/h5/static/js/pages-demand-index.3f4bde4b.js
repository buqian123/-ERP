(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-demand-index"],{"011a":function(e,t,i){"use strict";i.r(t);var n=i("14f6"),a=i("e98a");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("5970");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"13f672b9",null,!1,n["a"],r);t["default"]=l.exports},"14f6":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uIcon:i("fc07").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-search",style:{margin:e.margin},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickHandler.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-content",style:{backgroundColor:e.bgColor,borderRadius:"round"==e.shape?"100rpx":"10rpx",border:e.borderStyle,height:e.height+"rpx"}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{staticClass:"u-clear-icon",attrs:{size:30,name:e.searchIcon,color:e.searchIconColor?e.searchIconColor:e.color}})],1),i("v-uni-input",{staticClass:"u-input",style:[{textAlign:e.inputAlign,color:e.color,backgroundColor:e.bgColor},e.inputStyle],attrs:{"confirm-type":"search",value:e.value,disabled:e.disabled,focus:e.focus,maxlength:e.maxlength,"placeholder-class":"u-placeholder-class",placeholder:e.placeholder,"placeholder-style":"color: "+e.placeholderColor,type:"text"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.blur.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.getFocus.apply(void 0,arguments)}}}),e.keyword&&e.clearabled&&e.focused?i("v-uni-view",{staticClass:"u-close-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-clear-icon",attrs:{name:"close-circle-fill",size:"34",color:"#c0c4cc"}})],1):e._e()],1),i("v-uni-view",{staticClass:"u-action",class:[e.showActionBtn||e.show?"u-action-active":""],style:[e.actionStyle],on:{click:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=e.$handleEvent(t),e.custom.apply(void 0,arguments)}}},[e._v(e._s(e.actionText))])],1)},o=[]},"4f1f":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.demand[data-v-07c7e7fe]{width:100%;min-height:100vh;background:#f5f5f5;overflow:hidden;position:relative}.van-pull-refresh__head[data-v-07c7e7fe]{position:absolute;left:0;width:100%;height:1.333333rem;overflow:hidden;color:#969799;font-size:.373333rem;line-height:1.333333rem;text-align:center;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.header-bgc[data-v-07c7e7fe]{position:fixed;top:0;left:0;right:0;z-index:1;background-color:#3975c5;height:9.22667rem}.flush-header[data-v-07c7e7fe]{background-color:#3975c5;height:4.746667rem;position:fixed;top:0;left:0;right:0;z-index:20}.search-header[data-v-07c7e7fe]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#3975c5;height:1.76rem;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-shrink:0;flex-shrink:0;position:relative;z-index:10;padding:.266667rem .32rem}.filter[data-v-07c7e7fe]{height:.8rem;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#3975c5;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:.293333rem;position:relative;z-index:10}.list-header[data-v-07c7e7fe]{height:.666667rem;margin-top:-.026667rem;background-color:#3975c5;padding:0 .293333rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:.32rem;color:hsla(0,0%,100%,.72);-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;z-index:9}.filter-item[data-v-07c7e7fe]{background-color:#1b5db3;color:#fff;font-size:.32rem;height:.666667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:1;padding:0 .213333rem;border-radius:.053333rem}.filter-item .filter-more[data-v-07c7e7fe]{width:0;height:0;border-color:transparent #fff transparent transparent;border-style:solid;border-width:.106667rem .106667rem 0 0;margin-left:.093333rem;margin-bottom:-.186667rem}.drop[data-v-07c7e7fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:.666667rem;overflow:hidden;background-color:#1b5db3;border-radius:.053333rem;box-sizing:border-box;padding:0 .213333rem;font-size:.32rem;margin-right:.266667rem}.drop .drop-title[data-v-07c7e7fe]{max-width:100%;line-height:.586667rem;color:#fff!important;font-size:.32rem;font-weight:400}.drop .triangle[data-v-07c7e7fe]{width:0;height:0;border-bottom:.106667rem solid #fff;border-left:.106667rem solid transparent;margin:.133333rem 0 0 .133333rem;border-bottom-color:#3975c5}.tab-list[data-v-07c7e7fe]{height:1.306667rem;padding:0 .293333rem;background-color:#3975c5;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:.346667rem;position:relative;z-index:9}.tab-list .tab-item[data-v-07c7e7fe]{color:hsla(0,0%,100%,.5);font-weight:500;position:relative}.tab-list .curr[data-v-07c7e7fe]{color:#fff!important}.content[data-v-07c7e7fe]{position:relative;z-index:8;padding-top:4.746667rem}.content .bgc-container[data-v-07c7e7fe]{width:100%;padding-bottom:.266667rem;background-color:#3975c5;padding:0 .293333rem .266667rem;box-sizing:border-box}.content .bgc-container .price-count[data-v-07c7e7fe]{display:-webkit-box;display:-webkit-flex;display:flex;background-color:#5e97e3;border-radius:.106667rem;height:2rem;color:#fff}.content .bgc-container .price-count .price-count-item[data-v-07c7e7fe]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:relative}.content .bgc-container .price-count .price-count-item .price-count-item-price[data-v-07c7e7fe]{font-size:.48rem;font-weight:600;line-height:.666667rem;margin-bottom:.053333rem}.content .bgc-container .price-count .price-count-item .price-count-item-price .unit[data-v-07c7e7fe]{font-size:16px;margin-left:1px}.content .bgc-container .price-count .price-count-item .price-count-item-text[data-v-07c7e7fe]{font-size:.32rem;line-height:.453333rem}.content .liner-grand-bgc[data-v-07c7e7fe]{width:100%;height:2.08rem;background:-webkit-linear-gradient(top,#3975c5,rgba(57,117,197,0));background:linear-gradient(180deg,#3975c5,rgba(57,117,197,0));-webkit-transform:translateY(-.02667rem);transform:translateY(-.02667rem);position:fixed;left:0;right:0;top:9.22667rem}.content .list[data-v-07c7e7fe]{height:auto;padding:0 .293333rem .293333rem;position:relative}.content .list .list-box[data-v-07c7e7fe]{position:relative;z-index:20}.content .list .list-box .item[data-v-07c7e7fe]{background-color:#fff;border-radius:.106667rem;margin-bottom:.266667rem}.content .list .list-box .item .info[data-v-07c7e7fe]{height:1.44rem;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:0 .293333rem}.content .list .list-box .item .info .info-left .avatar[data-v-07c7e7fe]{width:24px;height:24px}.content .list .list-box .item .info .info-left .avatar .img[data-v-07c7e7fe]{width:100%;height:100%;border-radius:50%}.content .list .list-box .item .info .info-left .info-name[data-v-07c7e7fe]{font-size:.4rem;color:#262626;margin-left:.24rem;max-width:3.866667rem;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.content .list .list-box .item .info .info-left .wx-flag[data-v-07c7e7fe]{color:#1f9400;font-size:.4rem;margin-left:.16rem}.content .list .list-box .item .sale-top[data-v-07c7e7fe]{box-sizing:border-box;padding:0 .293333rem}.content .list .list-box .item .sale-top .content-item[data-v-07c7e7fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;margin-bottom:.16rem}.content .list .list-box .item .sale-top .content-item .progress-item[data-v-07c7e7fe]{color:#7b7b7b;background-color:#f5f5f5;font-size:.32rem;border-radius:.053333rem;padding:.08rem .133333rem;line-height:1;margin-right:.186667rem;margin-bottom:.16rem}.content .list .list-box .item .sale-top .content-item .scale-border[data-v-07c7e7fe]{position:relative;padding:0 .133333rem;margin-right:5px;margin-bottom:6px}.content .list .list-box .item .sale-top .content-item .scale-border .border[data-v-07c7e7fe]{-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:.026667rem solid;top:-50%;right:-50%;bottom:-50%;left:-50%}.content .list .list-box .item .sale-top .content-item .scale-border .orange[data-v-07c7e7fe]{color:#ffa14c;font-size:12px;padding:3px 0;max-width:120px}.content .list .list-box .item .sale-top .content-item .scale-border .ob[data-v-07c7e7fe]{border-radius:4px;border-color:#ffa14c}.content .list .list-box .item .sale-top .content-item .scale-border .green[data-v-07c7e7fe]{color:#1f9400;font-size:12px;padding:3px 0}.content .list .list-box .item .sale-top .content-item .scale-border .gb[data-v-07c7e7fe]{border-radius:4px;border-color:#1f9400}.content .list .list-box .item .sale-top .content-item .scale-border .zi[data-v-07c7e7fe]{color:#8777df;font-size:12px;padding:3px 0}.content .list .list-box .item .sale-top .content-item .scale-border .zb[data-v-07c7e7fe]{border-radius:4px;border-color:#8777df}.content .list .list-box .item .sale-top .sell-info .info-text-list[data-v-07c7e7fe]{margin-top:.106667rem;font-family:PingFangSC-Regular,PingFang SC;font-size:.32rem;font-weight:400;line-height:.453333rem;color:#999}.content .list .list-box .item .money-ul[data-v-07c7e7fe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;padding:.32rem 0 .373333rem 0;background:#fafcff;border-radius:0 0 .106667rem .106667rem}.content .list .list-box .item .money-ul .money-list[data-v-07c7e7fe]{box-sizing:border-box;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center}.content .list .list-box .item .money-ul .money-list .money-text[data-v-07c7e7fe]{font-family:PingFangSC-Medium,PingFang SC;font-size:.373333rem;font-weight:500;line-height:.533333rem;color:#3975c5}.content .list .list-box .item .money-ul .money-list .money-tips[data-v-07c7e7fe]{margin-top:.053333rem;font-family:PingFangSC-Regular,PingFang SC;font-size:.32rem;font-weight:400;line-height:.453333rem;color:#3975c5}.content .list .list-box .item .wx-btns[data-v-07c7e7fe]{height:1.306667rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 .293333rem}.content .list .list-box .item .wx-btns .scale-border[data-v-07c7e7fe]{position:relative;padding:0 .133333rem}.content .list .list-box .item .wx-btns .scale-border .text[data-v-07c7e7fe]{color:#1f9400;font-size:12px;padding:10px 19px}.content .list .list-box .item .wx-btns .scale-border .border[data-v-07c7e7fe]{-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:.026667rem solid;top:-50%;right:-50%;bottom:-50%;left:-50%;border-radius:42px;border-color:#1f9400}.van-list__finished-text[data-v-07c7e7fe]{color:#969799;font-size:.373333rem;line-height:1.333333rem;text-align:center}.van-list__placeholder[data-v-07c7e7fe]{height:0;pointer-events:none}',""]),e.exports=t},5970:function(e,t,i){"use strict";var n=i("ce5e"),a=i.n(n);a.a},"5f5c":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-search[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-content[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?18?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-clear-icon[data-v-13f672b9]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-input[data-v-13f672b9]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;line-height:1;margin:0 %?10?%;color:#909399}.u-close-wrap[data-v-13f672b9]{width:%?40?%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:50%}.u-placeholder-class[data-v-13f672b9]{color:#909399}.u-action[data-v-13f672b9]{font-size:%?28?%;color:#303133;width:0;overflow:hidden;-webkit-transition:all .3s;transition:all .3s;white-space:nowrap;text-align:center}.u-action-active[data-v-13f672b9]{width:%?80?%;margin-left:%?10?%}',""]),e.exports=t},"78d8":function(e,t,i){var n=i("4f1f");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1de68645",n,!0,{sourceMap:!1,shadowMode:!1})},"7a76":function(e,t,i){"use strict";i.r(t);var n=i("d7be"),a=i("a6ca");for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("bebdf");var r,s=i("f0c5"),l=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"07c7e7fe",null,!1,n["a"],r);t["default"]=l.exports},a220:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{search:"",tabIndex:0}},onLoad:function(){},methods:{changeTab:function(e){this.tabIndex=e},goDetail:function(){uni.navigateTo({url:"/pages/customer/cus-detail-type/demand/demand-detail/index"})}}};t.default=n},a6ca:function(e,t,i){"use strict";i.r(t);var n=i("a220"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},bebdf:function(e,t,i){"use strict";var n=i("78d8"),a=i.n(n);a.a},ce5e:function(e,t,i){var n=i("5f5c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("1e55d65a",n,!0,{sourceMap:!1,shadowMode:!1})},d7be:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uSearch:i("011a").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"demand"},[i("v-uni-view",{staticClass:"van-pull-refresh__head"}),i("v-uni-view",{staticClass:"header-bgc",style:{height:0==e.tabIndex?"":"5.97333rem"}}),i("v-uni-view",{staticClass:"flush-header"},[i("v-uni-view",{staticClass:"search-header"},[i("u-search",{attrs:{placeholder:"姓名(昵称)/手机号/地址(如碧桂园-2-3-102)",shape:"square",clearabled:!0,"show-action":!1},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),i("v-uni-view",{staticClass:"filter"},[i("v-uni-view",{staticClass:"drop"},[i("v-uni-view",{staticClass:"drop-title"},[e._v("客户获取时间逆序")]),i("v-uni-view",{staticClass:"triangle"})],1),i("v-uni-view",{staticClass:"filter-item"},[i("v-uni-view",{staticClass:"ell"},[e._v("筛选")]),i("v-uni-view",{staticClass:"filter-more"})],1)],1),i("v-uni-view",{staticClass:"tab-list"},[i("v-uni-view",{staticClass:"tab-item",class:{curr:0==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab(0)}}},[e._v("全部")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:1==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab(1)}}},[e._v("跟进中")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:2==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab(2)}}},[e._v("已签约")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:3==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab(3)}}},[e._v("已交付")]),i("v-uni-view",{staticClass:"tab-item",class:{curr:4==e.tabIndex},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changeTab(4)}}},[e._v("已流失")])],1),i("v-uni-view",{staticClass:"list-header flex-bet"},[i("v-uni-view",[e._v("共2个需求")]),i("v-uni-view",{staticClass:"filter-item"},[i("v-uni-view",{staticClass:"ell"},[e._v("全公司")]),i("v-uni-view",{staticClass:"filter-more"})],1)],1)],1),i("v-uni-view",{staticClass:"content"},[0==e.tabIndex?i("v-uni-view",{staticClass:"bgc-container"},[i("v-uni-view",{staticClass:"price-count"},[i("v-uni-view",{staticClass:"price-count-item"},[i("v-uni-view",{staticClass:"price-count-item-price"},[e._v("100.00"),i("v-uni-text",{staticClass:"unit"},[e._v("万元")])],1),i("v-uni-view",{staticClass:"price-count-item-text"},[e._v("合同总金额")])],1),i("v-uni-view",{staticClass:"price-count-item"},[i("v-uni-view",{staticClass:"price-count-item-price"},[e._v("50.00"),i("v-uni-text",{staticClass:"unit"},[e._v("万元")])],1),i("v-uni-view",{staticClass:"price-count-item-text"},[e._v("已收总金额")])],1),i("v-uni-view",{staticClass:"price-count-item"},[i("v-uni-view",{staticClass:"price-count-item-price"},[e._v("50.00"),i("v-uni-text",{staticClass:"unit"},[e._v("万元")])],1),i("v-uni-view",{staticClass:"price-count-item-text"},[e._v("待收总金额")])],1)],1)],1):e._e(),i("v-uni-view",{staticClass:"liner-grand-bgc",style:{top:0==e.tabIndex?"":"5.97333rem"}}),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"list-box"},e._l(3,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goDetail.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"info flex-bet"},[i("v-uni-view",{staticClass:"info-left flex-jsac"},[i("v-uni-view",{staticClass:"avatar"},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/avatar-default-img.png"}})],1),i("v-uni-view",{staticClass:"info-name"},[e._v("AnDragon")]),i("v-uni-view",{staticClass:"wx-flag"},[e._v("@微信")])],1)],1),i("v-uni-view",{staticClass:"sale-top"},[i("v-uni-view",{staticClass:"content-item"},[i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"orange"},[e._v("示例(请去PC端修改)")]),i("v-uni-view",{staticClass:"ob border"})],1),i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"orange"},[e._v("零售")]),i("v-uni-view",{staticClass:"ob border"})],1),i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"orange"},[e._v("D类需求")]),i("v-uni-view",{staticClass:"ob border"})],1),i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"orange"},[e._v("需求指数10%")]),i("v-uni-view",{staticClass:"ob border"})],1),i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"green"},[e._v("已签约")]),i("v-uni-view",{staticClass:"gb border"})],1)],1),i("v-uni-view",{staticClass:"content-item"},[i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"zi"},[e._v("ZhengYu跟进")]),i("v-uni-view",{staticClass:"zb border"})],1),i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"zi"},[e._v("张三介绍")]),i("v-uni-view",{staticClass:"zb border"})],1)],1),i("v-uni-view",{staticClass:"content-item"},[i("v-uni-view",{staticClass:"progress-item"},[e._v("昨天已联系")])],1),i("v-uni-view",{staticClass:"sell-info"},[i("v-uni-view",{staticClass:"info-text-list ell"},[e._v("客户地址: 客户地址：杭州解百城市奥莱A座小区A8幢1单元1011室")]),i("v-uni-view",{staticClass:"info-text-list ell"},[e._v("最新跟新：跟进内容测试测试测试")]),i("v-uni-view",{staticClass:"info-text-list ell"},[e._v("签单时间：09-01 10:47")]),i("v-uni-view",{staticClass:"info-text-list ell"},[e._v("创建时间：09-01 10:38")])],1)],1),i("v-uni-view",{staticClass:"money-ul"},[i("v-uni-view",{staticClass:"money-list"},[i("v-uni-view",{staticClass:"money-text"},[e._v("1000000")]),i("v-uni-view",{staticClass:"money-tips"},[e._v("合同金额")])],1),i("v-uni-view",{staticClass:"money-list"},[i("v-uni-view",{staticClass:"money-text"},[e._v("500000")]),i("v-uni-view",{staticClass:"money-tips"},[e._v("已收金额")])],1),i("v-uni-view",{staticClass:"money-list"},[i("v-uni-view",{staticClass:"money-text"},[e._v("500000")]),i("v-uni-view",{staticClass:"money-tips"},[e._v("待收金额")])],1)],1),i("v-uni-view",{staticClass:"wx-btns"},[i("v-uni-view",{staticClass:"scale-border"},[i("v-uni-view",{staticClass:"text"},[e._v("微信")]),i("v-uni-view",{staticClass:"border"})],1)],1)],1)})),1),i("v-uni-view",{staticClass:"van-list__finished-text"},[e._v("已显示全部数据")]),i("v-uni-view",{staticClass:"van-list__placeholder"})],1)],1)],1)},o=[]},e98a:function(e,t,i){"use strict";i.r(t);var n=i("ee20"),a=i.n(n);for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},ee20:function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"u-search",props:{shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:function(){return{}}},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},value:{type:String,default:""},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:function(){return{}}},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(e){this.$emit("input",e),this.$emit("change",e)},value:{immediate:!0,handler:function(e){this.keyword=e}}},computed:{showActionBtn:function(){return!(this.animation||!this.showAction)},borderStyle:function(){return this.borderColor?"1px solid ".concat(this.borderColor):"none"}},methods:{inputChange:function(e){this.keyword=e.detail.value},clear:function(){var e=this;this.keyword="",this.$nextTick((function(){e.$emit("clear")}))},search:function(e){this.$emit("search",e.detail.value);try{uni.hideKeyboard()}catch(e){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(e){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var e=this;setTimeout((function(){e.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")}}};t.default=n}}]);
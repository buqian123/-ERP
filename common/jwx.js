// const API = require("./api.js")
//由于企业微信jssdk不是模块化js文件,所以采用自定义index.html模板,并用<script>标签引入
// const jWeixin = require('../static/jweixin-1.2.0.js');
const initJssdk = function() {
  return new Promise((reslove, reject) => {
    uni.request({
      url: 'http://192.168.1.16:6745/api/getJsSDKSha1',
      data: {
        url: 'https://www.andragon.cn'
      },
      header: {
        Authorization: uni.getStorageSync('token')
      },
      success: res => {
        // let info = JSON.parse(res.module.config);
        jWeixin.config({
          debug: true, // 开启调试模式,
          appId: res.data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.signature,// 必填，签名，见附录1
          jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        jWeixin.ready((res) => {
          console.log('企业微信api初始化成功');
          reslove(true)
        })
        jWeixin.error(function(err) {
          console.log('企业微信api初始化失败', err);
          reslove(false)
        });
      }
    })
  })
}
 
module.exports = {
  initJssdk
}
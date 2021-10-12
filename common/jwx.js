import Vue from 'vue'

const initJssdk = () => {
  return new Promise((reslove, reject) => {
    Vue.prototype.$u.api.getJwx({url: 'http://9.andragon.cn'}).then(res => {
    // Vue.prototype.$u.api.getJwx({url: encodeURIComponent(location.href.split('#')[0])}).then(res => {
      setTimeout(() => {
        jWeixin.config({
          beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: 'ww5d5dc0c559d9025a', // 必填，企业微信的corpID
          timestamp: res.timestamp.toString(), // 必填，生成签名的时间戳
          nonceStr: res.nonceStr, // 必填，生成签名的随机串
          signature: res.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
          jsApiList: ['startRecord', 'stopRecord', 'getLocation', 'scanQRCode', 'getContext'], // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
        });
        jWeixin.ready((res) => {
          console.log('企业微信api初始化成功');
          jWeixin.checkJsApi({
            jsApiList: ['getLocation', 'startRecord', 'stopRecord', 'scanQRCode', 'getContext'], // 需要检测的JS接口列表
            success: function(data) {
              // 以键值对的形式返回，可用的api值true，不可用为false
              // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
              console.log(data)
            }
          });
          jWeixin.invoke('getContext', {
          }, function(res){
            console.log(res)
            if(res.err_msg == "getContext:ok"){
              entry = res.entry ; //返回进入H5页面的入口类型，目前有normal、contact_profile、single_chat_tools、group_chat_tools、chat_attachment
              shareTicket = res.shareTicket; //可用于调用getShareInfo接口
            }else {
              //错误处理
              console.log('接口错误');
            }
          });
        })
        jWeixin.error((err) => {
          console.log('企业微信api初始化失败', err);
        })
      }, 1000)
    }, 700)
  })
    
    
    
  // uni.request({
  //   url: 'http://192.168.1.16:6745/api/getJsSDKSha1',
  //   data: {
  //     url: 'https://www.andragon.cn'
  //   },
  //   header: {
  //     Authorization: uni.getStorageSync('token')
  //   },
  //   success: res => {
  //     // let info = JSON.parse(res.module.config);
  //     jWeixin.config({
  //       debug: true, // 开启调试模式,
  //       appId: res.data.appId, // 必填，企业号的唯一标识，此处填写企业号corpid
  //       timestamp: res.data.timestamp, // 必填，生成签名的时间戳
  //       nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
  //       signature: res.data.signature,// 必填，签名，见附录1
  //       jsApiList: ['getLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  //     });
  //     jWeixin.ready((res) => {
  //       console.log('企业微信api初始化成功');
  //       reslove(true)
  //     })
  //     jWeixin.error(function(err) {
  //       console.log('企业微信api初始化失败', err);
  //       reslove(false)
  //     });
  //   }
  // })
  // })
}
 
module.exports = {
  initJssdk
}
<template>
  <view class="wallet-page">
    <view class="wallet-tab flex-jsac">
      <view class="tab-item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">销售云续费升级</view>
      <view class="tab-item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 0">推广费充值</view>
    </view>
    <view class="wallet-box">
      <view class="info">
        <view class="text">当前已开通用户数：1人</view>
        <view class="text">试用期剩余时间：2天</view>
        <view class="info-btn">充值记录(开发票)</view>
      </view>
      <view class="pay">
        
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.wallet-page {
  width: 100%;
  min-height: 100%;
  background-color: #f8f8f8;
  font-family: PingFangSC-Regular,PingFang SC;
  box-sizing: border-box;
  padding-bottom: .533333rem;
  background-image: linear-gradient(top,#3975c5 4.773333rem,#f8f8f8 6.853333rem);
  background-image: -moz-linear-gradient(top,#3975c5 4.773333rem,#f8f8f8 6.853333rem);
  background-image: -webkit-linear-gradient(top,#3975c5 4.773333rem,#f8f8f8 6.853333rem);
}
.wallet-tab {
  width: 100%;
  height: 1.213333rem;
  box-sizing: border-box;
  padding: 0 .293333rem;
  margin-bottom: .146667rem;
  
  .tab-item {
    display: block;
    font-size: .426667rem;
    font-weight: 600;
    color: #fff;
    opacity: .5;
    margin-right: .733333rem;
  }
  .curr {
    opacity: 1;
  }
}
.wallet-box {
  width: 100%;
  box-sizing: border-box;
  padding: 0 .293333rem;
  
  .info {
    width: 100%;
    background-color: #518ad8;
    border-radius: .106667rem;
    padding: .373333rem .28rem;
    position: relative;
    
    .text {
      width: 100%;
      height: .533333rem;
      color: #fff;
      display: flex;
      align-items: center;
      
      &:first-child {
        margin-bottom: .186667rem;
      }
    }
    .info-btn {
      width: 3.066667rem;
      height: .773333rem;
      background-color: #6d9dde;
      border-radius: 1.333333rem 0 0 1.333333rem;
      text-align: center;
      line-height: .773333rem;
      color: #fff;
      position: absolute;
      top: .586667rem;
      right: 0;
      z-index: auto;
      font-size: 12px;
    }
  }
  
  .pay {
    width: 100%;
    background-color: #fff;
    border-radius: .106667rem;
    box-sizing: border-box;
    padding: .813333rem .4rem;
    margin-top: .266667rem;
  }
  
}
</style>

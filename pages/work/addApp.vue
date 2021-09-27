<template>
  <view class="wrap">
    <view class="main-box">
      <view class="block">
        <view class="title flex-bet">
          <view class="s1">已选择</view>
          <!-- <view class="s2">可拖动调整顺序</view> -->
        </view>
        <view class="flex-bet flex-wrap">
          <view class="item flex-wrap flex-col flex-cen" v-for="(item, index) in navTrue"
          :style="{backgroundImage: item.bgImg, color: item.color}" :key="index">
            <view class="t1">{{item.t1}}</view>
            <view class="t2">{{item.t2}}</view>
            <view class="box flex-jeac flex-wrap" @tap="cancel(index)">
              <image src="/static/work-nav/cancel.png" class="img"></image>
            </view>
          </view>
        </view>
      </view>
      <view class="block">
        <view class="title flex-bet">
          <view class="s1">推荐选择</view>
        </view>
        <view class="flex-bet flex-wrap">
          <view class="item flex-wrap flex-col flex-cen" v-for="(item, index) in navFalse"
          :style="{backgroundImage: item.bgImg, color: item.color}" :key="index">
            <view class="t1">{{item.t1}}</view>
            <view class="t2">{{item.t2}}</view>
            <view class="box flex-jeac flex-wrap" @tap="add(index)">
              <image src="/static/work-nav/addApp_blue.png" class="img"></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="btn-box flex-cen">
      <view class="cancel">取消</view>
      <view class="right">确定</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      navlist: [
        { bgImg: 'url(/static/work-nav/bg1.png)', color: '#4b62bc', t1: '需求', t2: '客户需求跟踪', path: '/pages/demand/index' },
        { bgImg: 'url(/static/work-nav/bg2.png)', color: '#3a787d', t1: '服务单', t2: '服务协同管理', path: '/pages/service/index' },
        { bgImg: 'url(/static/work-nav/bg3.png)', color: '#6172d1', t1: 'POS收款', t2: '支付微信、支付宝' },
        { bgImg: 'url(/static/work-nav/add.png)', color: '#fd8517', t1: '添加', t2: '更多应用→', path: '/pages/work/addApp' },
        { bgImg: 'url(/static/work-nav/bg4.png)', color: '#338854', t1: '接待登记', t2: '客户进店等待' },
        { bgImg: 'url(/static/work-nav/bg5.png)', color: '#338854', t1: '拜访登记', t2: '客户当面拜访' },
        { bgImg: 'url(/static/work-nav/bg6.png)', color: '#ca7253', t1: '素材库', t2: '客户营销素材' },
        { bgImg: 'url(/static/work-nav/bg7.png)', color: '#ca7253', t1: '话书库', t2: '常用语高效沟通' },
        { bgImg: 'url(/static/work-nav/bg8.png)', color: '#9a6844', t1: '钱包', t2: '相关费用充值' },
        { bgImg: 'url(/static/work-nav/bg9.png)', color: '#9a6844', t1: '收款管理', t2: '收款对账审核' }
      ],
      navTrue: [],
      navFalse: []
    }
  },
  onLoad() {
    this.navTrue = this.navlist.slice(0, 3)
    this.navFalse = this.navlist.slice(4)
  },
  methods: {
    add(i) {
      this.navTrue.push(this.navFalse[i])
      this.navFalse.splice(i, 1)
    },
    cancel(i) {
      this.navFalse.push(this.navTrue[i])
      this.navTrue.splice(i, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100%;
  }
  
  .main-box {
    width: 100%;
    overflow-y: auto;
    background-color: #f8f8f8;
    padding: .266667rem .293333rem;
    
    .block {
      width: 100%;
      background-color: #fff;
      border-radius: .106667rem;
      padding: 0 .293333rem;
      margin-bottom: .266667rem;
      
      .title {
        width: 100%;
        height: 1.333333rem;
        
        .s1 {
          font-size: .4rem;
          font-weight: 600;
          color: #262626;
        }
        .s2 {
          font-size: .346667rem;
          color: #999;
        }
      }
    }
  }
  .item {
    width: calc(50% - .13333rem);
    height: 1.466667rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-left: .266667rem;
    margin-bottom: .266667rem;
    position: relative;
    
    view {
      width: 100%;
    }
    
    .t1 {
      font-size: .346667rem;
      font-weight: 600;
      margin-bottom: .133333rem;
    }
    
    .t2 {
      font-size: .32rem;
    }
    
    .box {
      width: .666667rem;
      height: .666667rem;
      position: absolute;
      top: -.213333rem;
      right: -.213333rem;
      z-index: auto;
      
      .img {
        width: .426667rem;
        height: .426667rem;
      }
    }
  }
  .btn-box {
    width: 100%;
    height: 1.706667rem;
    background-color: #fff;
    
    view {
      height: 1.173333rem;
      text-align: center;
      line-height: 1.173333rem;
      border-radius: .106667rem;
      font-size: .4rem;
    }
    
    .cancel {
      width: 3.066667rem;
      height: 1.173333rem;
      color: #7b7b7b;
      background-color: #f8f8f8;
    }
    .right {
      width: 6.08rem;
      color: #fff;
      background: linear-gradient(198deg,#5688ff,#2472d9);
      margin-left: .266667rem;
    }
  }
</style>

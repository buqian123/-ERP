<template>
  <view class="customer-detail-page">
    <view class="bgc"></view>
    <view class="bgc-line-gra"></view>
    <view class="user-info flex-jsac">
      <view class="avatar">
        <image src="../../static/work-nav/logo.png" class="img"></image>
      </view>
      <view class="user-info-right">
        <view class="user-info-name">
          AnDragon
          <text>@微信</text>
        </view>
        <view class="user-info-action flex-jsac">
          <text @tap="goCusInfo">查看客户资料</text>
          <view class="ver-line-split"></view>
          <text @tap="goEditCus">编辑客户</text>
          <view class="ver-line-split"></view>
          <text @tap="showMoreAction = true">更多</text>
        </view>
        <view style="color: #000000;">
          <u-action-sheet :list="moreActionList" v-model="showMoreAction" @tap="selectAction" :cancel-btn="true">
          </u-action-sheet>
        </view>
      </view>
    </view>
    <view class="money">
      <view class="price-follow-container">
        <view class="price">
          <text class="price-top">签单合同总金额</text>
          <text>￥1000000</text>
        </view>
        <view class="price">
          <text class="price-top">实际收款金额</text>
          <text>￥500000</text>
        </view>
        <view class="price">
          <text class="price-top">跟进人(1)</text>
          <text>ZhengYu</text>
        </view>
      </view>
    </view>
    <view class="tabs flex-bet">
      <view class="tab-item" :class="{'tabs-active': tabIndex == 0}" @tap="tabIndex = 0">雷达</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 1}" @tap="tabIndex = 1">跟进</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 2}" @tap="tabIndex = 2">需求</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 3}" @tap="tabIndex = 3">收款</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 4}" @tap="tabIndex = 4">服务</view>
    </view>
    <!-- 联系 -->
    <view class="wx-phone">
      <view class="wx">
        <image src="../../static/logo.png" class="img"></image>
        <view class="text">微信</view>
      </view>
      <view class="phone">
        <image src="../../static/logo.png" class="img"></image>
        <view class="text-deactive">手机</view>
      </view>
    </view>
    
    <Radar v-if="tabIndex == 0"></Radar>
    <Follow v-if="tabIndex == 1"></Follow>
    <Demand v-if="tabIndex == 2"></Demand>
    <Payment v-if="tabIndex == 3"></Payment>
    <Service v-if="tabIndex == 4"></Service>
  </view>
</template>

<script>
import Radar from './cus-detail-type/radar/radar.vue'
import Follow from './cus-detail-type/follow/follow.vue'
import Demand from './cus-detail-type/demand/demand.vue'
import Payment from './cus-detail-type/payment/payment.vue'
import Service from './cus-detail-type/service/service.vue'
export default {
  components: {
    Radar,
    Follow,
    Demand,
    Payment,
    Service
  },
  data() {
    return {
      tabIndex: 1,
      showMoreAction: false,
      moreActionList: [{
          text: '操作日志'
        },
        {
          text: '转交客户'
        },
        {
          text: '删除客户'
        }
      ]
    }
  },
  methods: {
    selectAction(index) {

    },
    goCusInfo() {
      uni.navigateTo({
        url: '/pages/customer/cusInfo'
      })
    },
    goEditCus() {
      uni.navigateTo({
        url: '/pages/customer/editCus'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .customer-detail-page {
    width: 100%;
    min-height: 100vh;
    background: #f8f8f8;

    .bgc {
      height: 10.13333rem;
      background-color: #3975c5;
    }

    .bgc-line-gra {
      background: linear-gradient(180deg, #3975c5, rgba(57, 117, 197, 0));
      height: 1.866667rem;
      margin-top: -.026667rem;
    }
  }

  .user-info {
    height: 2.213333rem;
    padding: 0 .293333rem;
    margin-top: -12rem;

    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 12px;

      .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .user-info-right {
      font-size: .32rem;
      height: 1.333333rem;
      box-sizing: border-box;
      color: #fff;
      padding: .106667rem 0 .133333rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .user-info-name {
        font-size: .426667rem;
        font-weight: 500;
        line-height: 1;

        text {
          font-size: .426667rem;
          font-weight: 500;
          line-height: 1;
          margin-left: 4.5px;
        }
      }

      .user-info-action {
        color: hsla(0, 0%, 100%, .6);

        text {
          color: hsla(0, 0%, 100%, .6);
        }

        .ver-line-split {
          width: .026667rem;
          height: .293333rem;
          background-color: #a6ccff;
          margin: 0 .266667rem;
          transform: scaleX(.5);
        }
      }
    }
  }

  .money {
    width: 100%;

    .price-follow-container {
      margin: 0 .293333rem;
      border-radius: .106667rem;
      background-color: #5e97e3;
      display: flex;
      align-items: center;
      height: 2rem;
      font-size: .32rem;
      color: #fff;
      font-weight: 500;

      .price {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .price-top {
          margin-bottom: .373333rem;
          font-weight: 500;
        }
      }
    }
  }

  .tabs {
    padding: .4rem .293333rem;
    color: hsla(0, 0%, 100%, .5);

    .tab-item {
      position: relative;
    }

    .tabs-active {
      color: #fff;
      font-weight: 500;
    }
  }

  .wx-phone {
    width: 3.84rem;
    height: 1.413333rem;
    background: linear-gradient(90deg, #3a82e2, #5688ff);
    border-radius: .72rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .32rem;
    color: #fff;
    padding: 0 .266667rem;
    box-sizing: border-box;

    position: fixed;
    right: 0;
    bottom: 1.333333rem;
    transform: translateX(-.293333rem);
    z-index: 8;

    .wx,
    .phone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    .img {
      width: .533333rem;
      height: .533333rem;
      margin-bottom: .053333rem;
    }

    .text {
      line-height: .453333rem;
    }

    .text-deactive {
      color: hsla(0, 0%, 100%, .6);
    }
  }




  .van-list__finished-text {
    color: #969799;
    font-size: .373333rem;
    line-height: 1.333333rem;
    text-align: center;
  }

  .van-list__placeholder {
    height: 3rem;
    pointer-events: none;
  }
</style>

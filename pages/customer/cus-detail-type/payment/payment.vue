<template>
  <!-- 收款 -->
  <view class="payment-box">
    <view class="tips-box">
      <image src="/static/jingao.png" class="img"></image>
      <text>请在「需求」中选择具体需求，新增收退款</text>
    </view>
    <view class="pay-list">
      <view class="payment-item" v-for="item in collectList" :key="item.id">
        <view class="payment-title flex-jsac">
          <view class="title-tag">{{item.distinguish == '0' ? '收款' : '退款'}}</view>
          <view class="title ell">收款编号：{{item.id}}</view>
        </view>
        <view class="info-text-list">收款时间：{{item.slowTime}}</view>
        <view class="info-text-list">收款类型：{{item.slowType}}</view>
        <view class="info-text-list">结算方式：{{item.settlementMethod}}</view>
        <view class="info-text-list">审核状态：{{item.isExamine == '0' ? '已审核' : '待审核'}}</view>
        <view class="info-text-list flex-jsac">
          本次收款：
          <text class="info-text-cur">{{item.money}}元</text>
        </view>
        <view class="info-text-list">收款备注：{{item.remarks}}</view>
        <view class="img-ul" v-if="item.imgUrl">
          <image class="img" :src="subitem" v-for="(subitem, index) in item.imgUrl" :key="index"></image>
        </view>
        <view class="pay-btn-box flex-bet">
          <view class="pay-btn-left flex-jsac">
            <image src="/static/logo.png" class="avatar"></image>
            <text>{{item.slowPeople}}收款</text>
          </view>
          <view class="pay-btn-right flex-jsac">
            <view class="flex-jsac">
              <!-- <image src="../../static/jingao.png" class="img"></image> -->
              <text>修改</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="collectList.length != 0">
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    <view class="no-data" v-if="collectList.length == 0">
      <image src="/static/no-chart.png"></image>
      暂无跟进记录
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      collectList: []
    }
  },
  created() {
    this.getCollectList()
  },
  methods: {
    getCollectList() {
      this.$u.api.getCollect({limit: 10, offset: 1}).then(res => {
        this.collectList = res
        console.log(this.collectList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .payment-box {
    width: 100%;
    padding: 0 .293333rem;

    .tips-box {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 1.2rem;
      padding-top: .16rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      color: #fd8517;
      // background-image: url(../../../static/detail-pay-tips-bg.56f87b68.png);
      background-image: url("/static/detail-pay-tips-bg.56f87b68.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .img {
        width: .373333rem;
        height: .373333rem;
        margin-right: .16rem;
        vertical-align: middle;
      }
    }

    .pay-list {
      margin-top: .4rem;
      .payment-item {
        width: 100%;
        padding: .293333rem;
        padding-bottom: 0;
        margin-top: .373333rem;
        background: #fff;
        border-radius: .106667rem;
        
        &:first-child {
          margin-top: 0;
        }

        .payment-title {
          .title-tag {
            width: .96rem;
            background-color: #63af4e;
            border-radius: .053333rem;
            height: .506667rem;
            margin-right: .16rem;
            color: #fff;
            font-size: .32rem;
            font-weight: 400;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .title {
            font-family: PingFangSC-Medium, PingFang SC;
            font-size: .373333rem;
            font-weight: 500;
            line-height: .533333rem;
            color: #262626;
          }
        }

        .info-text-list {
          margin-top: .106667rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          line-height: .506667rem;
          color: #262626;
          word-break: break-all;

          .info-text-cur {
            color: #f65d48;
          }
        }
        
        .img-ul {
          display: flex;
          margin-top: .16rem;
          
          .img {
            width: 1.653333rem;
            height: 1.653333rem;
            margin-left: .16rem;
            border-radius: .106667rem;
            
            &:first-child {
              margin-left: 0;
            }
          }
        }

        .pay-btn-box {
          width: 100%;
          height: 1.173333rem;

          .pay-btn-left {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #262626;

            .avatar {
              width: .64rem;
              height: .64rem;
              margin-right: .24rem;
              border-radius: 50%;
            }
          }

          .pay-btn-right {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #999;

            .img {
              width: .346667rem;
              margin-right: .106667rem;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <!-- 收款 -->
  <view class="payment-box">
    <view class="tips-box">
      <image src="/static/jingao.png" class="img"></image>
      <text>请在「需求」中选择具体需求，新增收退款</text>
    </view>
    <view class="pay-list">
      <view class="payment-item">
        <view class="payment-title flex-jsac">
          <view class="title-tag">收款</view>
          <view class="title">收款编号：P202109011056255369</view>
        </view>
        <view class="info-text-list">收款时间：2021-09-01 10:47:46</view>
        <view class="info-text-list">收款类型：定金</view>
        <view class="info-text-list">结算方式：内部调账</view>
        <view class="info-text-list">审核状态：待审核</view>
        <view class="info-text-list flex-jsac">
          本次收款：
          <text class="info-text-cur">500000元</text>
        </view>
        <view class="info-text-list">收款备注：测试测试测试测试</view>
        <view class="pay-btn-box flex-bet">
          <view class="pay-btn-left flex-jsac">
            <image src="/static/logo.png" class="avatar"></image>
            <text>ZhengYu收款</text>
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
    <view class="van-list__finished-text">已显示全部数据</view>
    <view class="van-list__placeholder"></view>
  </view>
</template>

<script>
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
      .payment-item {
        width: 100%;
        padding: .293333rem;
        padding-bottom: 0;
        margin-top: .373333rem;
        background: #fff;
        border-radius: .106667rem;

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

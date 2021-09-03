<template>
  <!-- 需求 -->
  <view class="sale-box">
    <view class="btn-ul">
      <view class="btn-item">
        <view class="add-icon flex-cen">+</view>
        <view class="add-text">添加需求</view>
      </view>
    </view>
    <view class="sale-list">
      <view class="sale-item" v-for="(item, index) in 2" :key="index" @tap="goDetail">
        <view class="sale-top">
          <view class="content-item">
            <view class="scale-border">
              <view class="orange">示例(请去PC端修改)</view>
              <view class="ob border"></view>
            </view>
            <view class="scale-border">
              <view class="orange">零售</view>
              <view class="ob border"></view>
            </view>
            <view class="scale-border">
              <view class="orange">D类需求</view>
              <view class="ob border"></view>
            </view>
            <view class="scale-border">
              <view class="green">已签约</view>
              <view class="gb border"></view>
            </view>
          </view>
          <view class="content-item">
            <view class="scale-border">
              <view class="zi">ZhengYu跟进</view>
              <view class="zb border"></view>
            </view>
            <view class="scale-border">
              <view class="zi">张三介绍</view>
              <view class="zb border"></view>
            </view>
          </view>
          <view class="sell-info">
            <view class="info-text-list">签单ID: 10561</view>
            <view class="info-text-list">签单日期：09-01 10:47</view>
          </view>
        </view>
        <view class="money-ul">
          <view class="money-list">
            <view class="money-text">1000000</view>
            <view class="money-tips">合同金额</view>
          </view>
          <view class="money-list">
            <view class="money-text">500000</view>
            <view class="money-tips">已收金额</view>
          </view>
          <view class="money-list">
            <view class="money-text">500000</view>
            <view class="money-tips">待收金额</view>
          </view>
        </view>
        <view class="sale-btn-box">
          <view class="sale-btn-ul">
            <view class="btn-list">收款</view>
            <view class="btn-list">退款</view>
            <view class="btn-list">服务单</view>
            <view class="btn-list">服务群</view>
          </view>
        </view>
      </view>
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .sale-box {
    width: 100%;
    padding: 0 .293333rem;

    .btn-ul {
      display: flex;

      .btn-item {
        width: 2.48rem;
        height: .773333rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 0 .32rem;
        margin-left: 0;
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: .32rem;
        font-weight: 400;
        line-height: .933333rem;
        color: #fff;
        text-align: center;
        background: #1b5db3;
        border-radius: .4rem;

        .add-icon {
          width: .266667rem;
          height: .266667rem;
          margin-right: .186667rem;
        }
      }
    }

    .sale-list {
      .sale-item {
        box-sizing: border-box;
        width: 100%;
        margin-top: .266667rem;
        background: #fff;
        border-radius: .106667rem;
        padding-top: .346667rem;

        .sale-top {
          box-sizing: border-box;
          padding: 0 .293333rem;

          .content-item {
            display: flex;
            margin-bottom: .16rem;

            .scale-border {
              position: relative;
              padding: 0 .133333rem;
              margin-right: 5px;

              .border {
                transform: scale(.5);
                position: absolute;
                border: .026667rem solid;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
              }

              .orange {
                color: rgb(255, 161, 76);
                font-size: 12px;
                padding: 3px 0px;
                max-width: 120px;
              }

              .ob {
                border-radius: 4px;
                border-color: rgb(255, 161, 76);
              }

              .green {
                color: rgb(31, 148, 0);
                font-size: 12px;
                padding: 3px 0px;
              }

              .gb {
                border-radius: 4px;
                border-color: rgb(31, 148, 0);
              }

              .zi {
                color: rgb(135, 119, 223);
                font-size: 12px;
                padding: 3px 0px;
              }

              .zb {
                border-radius: 4px;
                border-color: rgb(135, 119, 223);
              }

            }
          }

          .sell-info {
            .info-text-list {
              margin-top: .106667rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-size: .32rem;
              font-weight: 400;
              line-height: .453333rem;
              color: #999;
            }
          }
        }

        .money-ul {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: .32rem 0 .373333rem 0;
          background: #fafcff;
          border-radius: 0 0 .106667rem .106667rem;

          .money-list {
            box-sizing: border-box;
            flex: 1;
            text-align: center;

            .money-text {
              font-family: PingFangSC-Medium, PingFang SC;
              font-size: .373333rem;
              font-weight: 500;
              line-height: .533333rem;
              color: #3975c5;
            }

            .money-tips {
              margin-top: .053333rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-size: .32rem;
              font-weight: 400;
              line-height: .453333rem;
              color: #3975c5;
            }
          }
        }

        .sale-btn-box {
          box-sizing: border-box;
          padding: 0 .293333rem;

          .sale-btn-ul {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            padding: .293333rem 0;

            .btn-list {
              box-sizing: border-box;
              display: flex;
              align-items: center;
              justify-content: center;
              height: .773333rem;
              padding: 0 .266667rem;
              margin-left: .266667rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-size: .32rem;
              font-weight: 400;
              line-height: .453333rem;
              color: #262626;
              background: #fff;
              border-radius: 26.64rem;
              position: relative;
              border: 1px solid #f8f8f8;
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

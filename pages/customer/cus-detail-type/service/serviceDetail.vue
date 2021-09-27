<template>
  <view class="service-detail">
    <view class="status-box">
      <view class="status-text-ul">
        <view class="status-text-item" :class="{cur: status >= 0}">待确认</view>
        <view class="status-text-item" :class="{cur: status >= 50}">进行中</view>
        <view class="status-text-item" :class="{cur: status >= 100}">已完成</view>
      </view>
      <view class="statusGroup">
        <view class="statusColor" :style="{'width': status + '%' }"></view>
      </view>
      <view class="icon-ul flex-bet">
        <view class="icon-ul-li">
          <text class="statusColorDiv"></text>
        </view>
        <view class="icon-ul-li">
          <text class="statusColorDiv" :class="{none: status < 50}"></text>
        </view>
        <view class="icon-ul-li">
          <text class="statusColorDiv" :class="{none: status < 100 }"></text>
        </view>
      </view>
    </view>
    <view class="service-info">
      <view class="service-info-top">
        <view class="left">
          <image src="/static/status1.png" class="img"></image>
        </view>
        <view class="right">
          <view class="service-title">ZhengYu服务中</view>
          <view class="service-list-text">服务类型：测量类-示例(请去PC端修改)</view>
          <view class="service-list-text">服务预约时间：2021-09-01 10:50</view>
          <view class="service-list-text">服务编号：202109011051061442906839</view>
        </view>
      </view>
      <view class="service-bottom">
        <view class="service-btn-ul flex-jeac">
          <view class="btn-list">去服务</view>
          <view class="btn-list">修改</view>
          <view class="btn-list">取消</view>
        </view>
      </view>
      <view class="line"></view>
    </view>
    <view class="cus-box">
      <view class="cus-info">
        <view class="cus-info-left">
          <image src="/static/avatar-default-img.png" class="img"></image>
        </view>
        <view class="cus-info-right">
          <view class="info-name"> AnDragon </view>
          <view class="cus-tag flex-jsac">
            <text class="s0">服务客户</text>
            <text class="s1">示例(情趣PC端修改)</text>
            <text class="s3">已签约</text>
          </view>
          <view class="cus-address flex-jsac">
            <view class="text flex-cen">客户地址：杭州解百城市奥莱A座-A8-1-1011</view>
            <image src="/static/address.png" class="img"></image>
          </view>
        </view>
      </view>
      <view class="btn-ul flex-jeac">
        <view class="btn" @tap="cusInfo">查看资料</view>
        <view class="btn">微信</view>
        <view class="btn">电话</view>
      </view>
    </view>
    <view class="dispatch-info">
      <view class="title">
        <view class="text">
          <text class="point"></text>
          派单信息
        </view>
        <view class="edit-btn">修改</view>
      </view>
      <view class="list-text">
        <view class="list-text-left">派单人</view>
        <view class="list-text-right">ZhengYu</view>
      </view>
      <view class="list-text">
        <view class="list-text-left">服务人</view>
        <view class="list-text-right">ZhengYu</view>
      </view>
      <view class="list-text">
        <view class="list-text-left">派单时间</view>
        <view class="list-text-right">2021-09-01 10:51</view>
      </view>
      <view class="list-text">
        <view class="list-text-left">派单人</view>
        <view class="list-text-right">啊啊啊啊啊啊啊啊啊啊</view>
      </view>
      <view class="img-box">
        <view class="img-title">派单图片</view>
        <view class="img-ul"></view>
      </view>
      <view class="line"></view>
    </view>
    <view class="dispatch-info">
      <view class="title">
        <view class="text">
          <text class="point"></text>
          接单信息
        </view>
      </view>
      <view class="list-text">
        <view class="list-text-left">确认人</view>
        <view class="list-text-right">ZhengYu</view>
      </view>
      <view class="list-text">
        <view class="list-text-left">确认时间</view>
        <view class="list-text-right">2021-09-01 10:51</view>
      </view>
      <view class="line"></view>
    </view>
    <view class="bottom"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      status: 51
    }
  },
  onLoad(options) {
    this.$u.api.getServiceInfo({id: options.id}).then(res => {
      console.log(res);
    })
  },
  methods: {
    cusInfo() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/service/serivceCusInfo'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .service-detail {
    width: 100%;
    min-height: 100%;
    background: #fff;

    .status-box {
      width: 100%;
      height: 2.92rem;
      position: relative;
      box-sizing: border-box;
      padding: .64rem .4rem .666667rem;
      background: #3975c5;

      .status-text-ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;

        .status-text-item {
          width: 1.413333rem;
          height: .8rem;
          background-image: url("/static/qipao_blue.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          font-family: PingFangSC-Medium, PingFang SC;
          font-size: .32rem;
          font-weight: 600;
          line-height: .693333rem;
          text-align: center;
          color: hsla(0, 0%, 100%, .58);
        }

        .cur {
          background-image: url("/static/qipao_white.png");
          color: #3975c5;
        }
      }

      .statusGroup {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: center;
        width: 100%;
        height: .08rem;
        margin-top: .613333rem;
        background-color: #195eba;

        .statusColor {
          width: .746667rem;
          height: .08rem;
          background-color: #fff;
          border-radius: .053333rem;
        }

        .s1 {
          width: 50%;
        }
      }

      .icon-ul {
        .icon-ul-li {
          width: 1.413333rem;
          height: .08rem;
          display: flex;
          justify-content: center;

          .statusColorDiv {
            display: block;
            width: .16rem;
            height: .16rem;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0 .026667rem .08rem 0 hsla(0, 0%, 100%, .37);
            margin-top: -.12rem;
            z-index: 1;
          }

          .none {
            width: 0;
            height: 0;
          }
        }
      }
    }

    .service-info {
      width: 100%;
      padding: .466667rem .266667rem 0 .426667rem;
      background: #fff;

      .service-info-top {
        width: 100%;
        display: flex;

        .left {
          width: 1.013333rem;
          margin-right: .266667rem;

          .img {
            width: 1.013333rem;
            height: 1.013333rem;
          }
        }

        .right {
          width: calc(100% - 1.28rem);

          .service-title {
            font-family: PingFangSC-Medium, PingFang SC;
            font-size: .426667rem;
            font-weight: 600;
            line-height: .613333rem;
            color: #262626;
          }

          .service-list-text {
            margin-top: .16rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            line-height: .453333rem;
            color: #949494;
          }
        }
      }

      .service-bottom {
        margin-top: .266667rem;

        .service-btn-ul {
          .btn-list {
            height: .773333rem;
            line-height: .773333rem;
            box-sizing: border-box;
            padding: 0 .266667rem;
            margin-left: .266667rem;
            font-size: .32rem;
            font-weight: 400;
            color: #262626;
            border: .013333rem solid #ccc;
            border-radius: .386667rem;
          }
        }
      }
    }

    .cus-box {
      width: 100%;
      background: #fff;
      box-sizing: border-box;
      padding: .373333rem .293333rem .053333rem .293333rem;
      box-shadow: 0 .133333rem .373333rem -.133333rem rgba(0, 0, 0, .07);

      .cus-info {
        width: 100%;
        display: flex;

        .cus-info-left {
          width: 1.013333rem;
          margin-right: .266667rem;

          .img {
            width: 1.013333rem;
            height: 1.013333rem;
            border-radius: 50%;
          }
        }

        .cus-info-right {
          width: calc(100% - 1.28rem);

          .info-name {
            width: 100%;
            height: .6rem;
            line-height: .6rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .426667rem;
            font-weight: 600;
            color: #262626;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: .106667rem;
          }

          .cus-tag {
            width: 100%;
            margin-bottom: .16rem;

            text {
              padding: .053333rem .133333rem;
              box-sizing: border-box;
              border: .013333rem solid #ffa14c;
              border-radius: .053333rem;
              font-size: .32rem;
              margin-right: .12rem;
            }

            .s0 {
              color: #8777df;
              border-color: #8777df;
            }

            .s1 {
              color: #fd8517;
              border-color: #ffa14c;
              max-width: 4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }

            .s3 {
              color: #1f9400;
              border-color: #1f9400;
            }
          }

          .cus-address {
            width: 100%;
            line-height: .506667rem;

            .text {
              color: #999;
              word-break: break-all;
              margin-right: .133333rem;
            }

            .img {
              width: .506667rem;
              height: .506667rem;
            }
          }
        }
      }

      .btn-ul {
        width: 100%;
        height: 1.413333rem;

        .btn {
          height: .773333rem;
          line-height: .773333rem;
          padding: 0 .266667rem;
          box-sizing: border-box;
          border: .013333rem solid #ccc;
          border-radius: .386667rem;
          font-size: .32rem;
          color: #262626;
          margin-left: .266667rem;
        }
      }
    }

    .dispatch-info {
      width: 100%;
      box-sizing: border-box;
      padding-top: .48rem;

      .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 .293333rem;
        margin-bottom: .453333rem;

        .text {
          font-family: PingFangSC-Medium, PingFang SC;
          font-size: .426667rem;
          font-weight: 600;
          color: #262626;
          display: flex;
          align-items: center;

          .point {
            display: inline-block;
            width: .133333rem;
            height: .133333rem;
            border-radius: 50%;
            background-color: #3975c5;
            margin-right: .2rem;
          }
        }

        .edit-btn {
          height: .773333rem;
          line-height: .773333rem;
          padding: 0 .266667rem;
          box-sizing: border-box;
          border: .013333rem solid #ccc;
          border-radius: .386667rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .32rem;
          font-weight: 400;
          color: #262626;
        }
      }

      .list-text {
        display: flex;
        box-sizing: border-box;
        padding: 0 .28rem 0 .586667rem;
        margin-top: .266667rem;
        line-height: .506667rem;

        .list-text-left {
          width: 2.08rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          color: #7b7b7b;
        }

        .list-text-right {
          flex: 1;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          color: #262626;
          word-break: break-all;
        }
      }

      .img-box {
        width: 100%;
        box-sizing: border-box;
        padding: 0 .28rem 0 .586667rem;
        margin-top: .266667rem;

        .img-title {
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          line-height: .506667rem;
          color: #7b7b7b;
        }

        .img-ul {
          display: flex;
          flex-wrap: wrap;
          margin-top: .266667rem;
        }
      }
    }
  }

  .line {
    width: 100%;
    height: .266667rem;
    box-sizing: border-box;
    border-bottom: .013333rem solid #f0f0f0;
  }

  .bottom {
    width: 100%;
    height: 1.333333rem;
    background-color: #f8f8f8;
  }
</style>

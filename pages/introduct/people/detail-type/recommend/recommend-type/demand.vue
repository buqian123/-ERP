<template>
  <view class="demand">
    <view class="dropdowns">
      <view class="drop">
        <view class="drop-title">推荐需求状态</view>
        <view class="triangle"></view>
      </view>
      <view class="drop">
        <view class="drop-title">需求分佣状态</view>
        <view class="triangle"></view>
      </view>
    </view>
    <view class="demand-list">
      <view class="demand-item">
        <view class="item-header flex-jsac">
          <view class="avatar">
            <image src="/static/avatar-default-img.png" class="img"></image>
          </view>
          <view class="item-name">AnDragon</view>
        </view>
        <view class="item-content">
          <view class="item-content-top flex-jsac">
            <view>ZhengYu跟进</view>
            <view>张三介绍</view>
            <view class="green">已签约</view>
          </view>
          <view class="item-sign-price flex-jsac">实收金额：¥500000</view>
          <view class="item-sign-time">签单时间：2021-09-01</view>
          <view class="item-sign-time">推荐时间：2021-09-01 10:38:10</view>
        </view>
        <view class="item-bottom-list">
          <view class="scale-border" @tap="goDemandDetail">
            <view class="item-bottom-item">需求详情</view>
            <view class="border"></view>
          </view>
          <view class="scale-border">
            <view class="item-bottom-item">不分佣</view>
            <view class="border"></view>
          </view>
          <view class="scale-border">
            <view class="item-bottom-item">分佣</view>
            <view class="border blue"></view>
          </view>
        </view>
      </view>
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
    goDemandDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demand {
  margin: 0 .293333rem;
}
.dropdowns {
  display: flex;
  justify-content: flex-end;
  margin: .266667rem 0;
  
  .drop {
    display: flex;
    align-items: center;
    height: .666667rem;
    overflow: hidden;
    background-color: #1b5db3;
    border-radius: .053333rem;
    box-sizing: border-box;
    padding: 0 .213333rem;
    font-size: .32rem;
    margin-right: .266667rem;
    
    &:last-child {
      margin-right: 0;
    }
    
    .drop-title {
      max-width: 100%;
      // font-size: .4rem;
      line-height: .586667rem;
      color: #fff !important;
      font-size: .32rem;
      font-weight: 400;
    }
    
    .triangle {
      width: 0;
      height: 0;
      border-bottom: .106667rem solid #fff;
      border-left: .106667rem solid transparent;
      margin: .133333rem 0 0 .133333rem;
      border-bottom-color: #fff;
    }
  }
}
.demand-list {
  .demand-item {
    background-color: #fff;
    border-radius: .106667rem;
    padding: 0 .293333rem;
    margin-bottom: .266667rem;
    
    .item-header {
      height: 1.44rem;
      font-size: .4rem;
      color: #262626;
      
      .avatar {
        width: 24px;
        height: 24px;
        margin-right: 9px;
        
        .img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .item-name {
        max-width: 3.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .item-content {
      position: relative;
      .item-content-top {
        view {
          position: relative;
          padding: 3px 6px;
          margin-right: 5px;
          color: rgb(135, 119, 223);
          font-size: 12px;
          line-height: 1;
          border: .026667rem solid rgb(135, 119, 223);
          border-radius: 4px;
          transform: scale(.8);
        }
        .green {
          border-color: rgb(31, 148, 0);
          color: rgb(31, 148, 0);
        }
      }
      .item-sign-price {
        font-size: .32rem;
        line-height: .453333rem;
        color: #3975c5;
        margin: .106667rem 5px 0 0;
      }
      .item-sign-time {
        font-size: 12px;
        line-height: .453333rem;
        color: #999;
        margin-top: .106667rem;
      }
    }
    .item-bottom-list {
      height: 1.226667rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: .08rem;
      
      .scale-border {
        position: relative;
        padding: 0 .266667rem;
        line-height: .773333rem;
        margin-left: .293333rem;
        
        .item-bottom-item {
          text-align: center;
        }
        .border {
          position: absolute;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border: .026667rem solid #ccc;
          border-radius: .8rem;
          -webkit-transform: scale(.5);
          transform: scale(.5);
        }
        .blue {
          border-color: #3975c5;
        }
      }
    }
  }
}
</style>

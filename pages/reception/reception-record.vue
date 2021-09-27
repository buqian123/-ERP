<template>
  <view class="receptionPage">
    <view class="base"></view>
    <view class="receptionHead">
      <view class="top flex-jsac">
        <view class="filter-item">
          <view class="ell">全部时间</view>
          <view class="filter-more"></view>
        </view>
        <view class="filter-item">
          <view class="ell">全公司</view>
          <view class="filter-more"></view>
        </view>
        <view class="filter-item">
          <view class="ell">更多</view>
          <view class="filter-more"></view>
        </view>
      </view>
      <view class="bottom">1个客户接待，0个陌生接待</view>
    </view>
    <view class="receptionBox">
      <view class="reception-list">
        <view class="reception-item">
          <view class="title flex-bet">
            <view class="flex-jsac">
              <image src="/static/avatar-default-img.png" class="avatar"></image>
              <view class="name">AnDragon</view>
              <image src="/static/arrow-right-orange.png" class="icon"></image>
            </view>
          </view>
          <view class="desc flex-jsac">
            <view class="item"> ZhengYu接待 </view>
            <view class="item"> ZhengYu跟进 </view>
          </view>
          <view class="info">
            <view class="data-time flex-jsac">
              <view>星期二</view>
              <view>2021-08-31</view>
              <view>11:01:17</view>
            </view>
            <view class="type"> 店面接待0-10分钟｜普通跟进 </view>
            <view class="desc"> sfhhvxduhf </view>
            <view class="text"> 接待时，未关联需求 </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
.receptionPage {
  width: 100%;
  min-height: 100%;
  padding-top: 1.973333rem;
  background-color: transparent;
}
.base {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: -webkit-linear-gradient(top,#3975c5 1.973333rem,#f8f8f8 4.053333rem);
}
.receptionHead {
  width: 100%;
  background-color: #3975c5;
  box-sizing: border-box;
  padding: 0 .293333rem;
  position: fixed;
  left: 0;
  z-index: 1;
  top: 0px;
  .top {
    width: 100%;
    height: .666667rem;
    padding-top: 15px;
    box-sizing: content-box;
    
    .filter-item {
      background-color: #1b5db3;
      color: #fff;
      font-size: .32rem;
      height: .666667rem;
      display: flex;
      align-items: center;
      line-height: 1;
      padding: 0 .213333rem;
      border-radius: .053333rem;
      margin-right: .4rem;
      
      .filter-more {
        width: 0;
        height: 0;
        border-color: transparent #fff transparent transparent;
        border-style: solid;
        border-width: .106667rem .106667rem 0 0;
        margin-left: .093333rem;
        margin-bottom: -.186667rem;
      }
    }
  }
  .bottom {
    width: 100%;
    height: .906667rem;
    line-height: .906667rem;
    font-size: .32rem;
    color: #fff;
    opacity: .63;
  }
}
.receptionBox {
  width: 100%;
  
  .reception-list {
    width: 100%;
    padding: 0 .293333rem;
    
    .reception-item {
      width: 100%;
      background-color: #fff;
      padding: .4rem .293333rem .293333rem .293333rem;
      border-radius: .106667rem;
      margin-bottom: .266667rem;
      
      .title {
        width: 100%;
        padding: 0 0 .346667rem 0;
        
        .avatar {
          width: .64rem;
          height: .64rem;
          border-radius: 50%;
          margin-right: .16rem;
        }
        .name {
          display: block;
          max-width: 2.666667rem;
          font-size: .4rem;
          color: #262626;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .icon {
          width: .293333rem;
          height: .293333rem;
          margin-left: .133333rem;
        }
      }
      .desc {
        width: 100%;
        margin-bottom: .213333rem;
        
        .item {
          padding: .08rem .133333rem;
          box-sizing: border-box;
          border: .013333rem solid #8777df;
          border-radius: .053333rem;
          margin-right: .133333rem;
          font-size: .32rem;
          color: #8777df;
        }
      }
      .info {
        width: 100%;
        background-color: #f9f9f9;
        box-sizing: border-box;
        padding: .346667rem .266667rem .266667rem .266667rem;
        
        .data-time {
          width: 100%;
          font-size: .32rem;
          color: #999;
          margin-bottom: .2rem;
          
          view {
            
            &:nth-of-type(2) {
              margin: 0 1.27rem;
            }
            
          }
        }
        .type {
          width: 100%;
          font-size: .32rem;
          color: #999;
          margin-bottom: .133333rem;
        }
        .desc {
          width: 100%;
          font-size: .32rem;
          color: #434242;
          word-break: break-all;
        }
        .text {
          width: 100%;
          display: flex;
          align-items: center;
          margin-top: .2rem;
          font-size: .32rem;
          color: #999;
        }
      }
    }
  }
}
</style>

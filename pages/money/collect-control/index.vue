<template>
  <view class="collect-control">
    <view class="base"></view>
    <view class="head-box">
      <view class="tool flex-jsac">
        <view class="filter-item">
          <view class="ell">全部时间</view>
          <view class="filter-more"></view>
        </view>
        <view class="filter-item">
          <view class="ell">收款人：全公司</view>
          <view class="filter-more"></view>
        </view>
        <view class="filter-item">
          <view class="ell">待审核</view>
          <view class="filter-more"></view>
        </view>
      </view>
      <view class="number">
        <view class="number-item"> 共1个收款，收款总金额￥500000 </view>
        <view class="number-item"> 共0个退款，退款总金额￥0 </view>
        <view class="number-item"> 实际总金额￥500000 </view>
      </view>
    </view>
    <view class="main-box">
      <view class="collect-list">
        <view class="collect-item">
          <view class="code flex-jsac">
            <view class="left">收款</view>
            <view class="right">编号：P202109011056255369</view>
          </view>
          <view class="text"> 收款时间：2021-09-01 10:47:46 </view>
          <view class="text"> 收款类型：定金 </view>
          <view class="text"> 结算方式：内部调账 </view>
          <view class="money flex-jsac">
            <view class="left">本次收款：</view>
            <view class="right">500000元</view>
          </view>
          <view class="text"> 收款备注：测试测试测试测试 </view>
          <view class="text"> 需求品牌：示例(请去PC端修改) </view>
          <view class="picture flex-jsac">
            <image src="/static/noRadar.png" class="img"></image>
          </view>
          <view class="operate flex-bet">
            <view class="left flex-jsac">
              <image src="/static/avatar-default-img.png" class="avatar"></image>
              <view>ZhengYu收款</view>
            </view>
            <view class="right">
              <text>查看需求</text>
              <text>修改</text>
              <text>审核</text>
            </view>
          </view>
        </view>
        <view class="van-list__finished-text">已显示全部数据</view>
        <view class="van-list__placeholder"></view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
.collect-control {
  width: 100%;
  min-height: 100%;
  background-color: transparent;
  box-sizing: border-box;
  padding-top: 3.16rem;
}
.base {
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  background-image: linear-gradient(top,#3975c5 3.16rem,#f8f8f8 5.24rem);
  background-image: -moz-linear-gradient(top,#3975c5 3.16rem,#f8f8f8 5.24rem);
  background-image: -webkit-linear-gradient(top,#3975c5 3.16rem,#f8f8f8 5.24rem);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
.head-box {
  width: 100%;
  background-color: #3975c5;
  box-sizing: border-box;
  padding: 0 .293333rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  .tool {
    width: 100%;
    height: 1.066667rem;
    padding-top: .4rem;
    
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
  .number {
    width: 100%;
    padding: .293333rem 0 .266667rem 0;
    
    .number-item {
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      font-size: .32rem;
      color: #fff;
      opacity: .68;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: .106667rem;
    }
  }
}
.main-box {
  width: 100%;
  
  .collect-list {
    width: 100%;
    padding: 0 .293333rem;
    
    .collect-item {
      width: 100%;
      background-color: #fff;
      border-radius: .106667rem;
      box-sizing: border-box;
      padding: .293333rem .293333rem 0 .293333rem;
      margin-bottom: .266667rem;
      
      .code {
        width: 100%;
        .left {
          width: .946667rem;
          height: .506667rem;
          text-align: center;
          line-height: .506667rem;
          font-size: .32rem;
          color: #fff;
          border-radius: .053333rem;
          margin-right: .16rem;
          background-color: #63af4e;
        }
        .right {
          font-size: .373333rem;
          font-weight: 600;
          color: #262626;
        }
      }
      .text {
        width: 100%;
        height: .44rem;
        line-height: .44rem;
        font-size: .32rem;
        color: #7b7b7b;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: .106667rem;
      }
      .money {
        width: 100%;
        height: .44rem;
        margin-top: .106667rem;
        
        .left {
          font-size: .32rem;
          color: #7b7b7b;
        }
        .right {
          font-size: .32rem;
          color: #f88778;
        }
      }
      .picture {
        width: 100%;
        margin-top: .16rem;
        .img {
          width: 1.653333rem;
          height: 1.653333rem;
          border-radius: .106667rem;
          overflow: hidden;
          margin-right: calc(25% - 2.06667rem);
          
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .operate {
        width: 100%;
        height: 1.306667rem;
        
        .left {
          font-size: .32rem;
          color: #262626;
          
          .avatar {
            width: .64rem;
            height: .64rem;
            border-radius: 50%;
            margin-right: .24rem;
          }
        }
        .right {
          text {
            padding: .173333rem .266667rem;
            box-sizing: border-box;
            border: .013333rem solid #ccc;
            border-radius: .386667rem;
            font-size: .32rem;
            margin-left: .266667rem;
            
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>

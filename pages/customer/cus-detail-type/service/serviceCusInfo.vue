<template>
  <!-- 客户资料 -->
  <view class="wrap">
    <view class="group">
      <view class="row">
        <view class="row-label">*客户名称</view>
        <view class="row-content">AnDragon</view>
      </view>
      <view class="row">
        <view class="row-label">*省市区</view>
        <view class="row-content"></view>
      </view>
    </view>
    <view class="group">
      <view class="thead">关键信息</view>
      <view class="row">
        <view class="row-label">客户户型</view>
        <view class="row-content">三室</view>
      </view>
      <view class="row">
        <view class="row-label">房屋面积</view>
        <view class="row-content">200平米</view>
      </view>
      <view class="row">
        <view class="row-label">详细地址</view>
        <view class="row-content">
          <text>杭州解百城市奥莱A座-A8-1-1011</text>
          <text class="goto-address-api">到这去</text>
        </view>
      </view>
      <view class="row">
        <view class="row-label">装修阶段</view>
        <view class="row-content">水电</view>
      </view>
    </view>
    <view class="group">
      <view class="row">
        <view class="row-label">签单人</view>
        <view class="row-content">ZhengYu</view>
      </view>
      <view class="row">
        <view class="row-label">签单日期</view>
        <view class="row-content">2021-09-01 10:47:46</view>
      </view>
      <view class="row">
        <view class="row-label">关联活动</view>
        <view class="row-content"></view>
      </view>
      <view class="stats-outer">
        <view class="stats-inner">
          <view class="stats-cell">
            <view>1000000</view>
            <view>合同金额</view>
          </view>
          <view class="stats-cell">
            <view>500000</view>
            <view>已收金额</view>
          </view>
          <view class="stats-cell">
            <view>500000</view>
            <view>待收金额</view>
          </view>
        </view>
      </view>
    </view>
    <view class="group">
      <view class="thead">其他信息</view>
      <view class="row">
        <view class="row-label">性别</view>
        <view class="row-content">男</view>
      </view>
      <view class="row">
        <view class="row-label">年龄</view>
        <view class="row-content"></view>
      </view>
      <view class="row">
        <view class="row-label">生日</view>
        <view class="row-content"></view>
      </view>
      <view class="row">
        <view class="row-label">客户简介</view>
        <view class="row-content"></view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="less" scoped>
  page {
    height: 100%;
  }
  .wrap {
    background-color: #f5f5f5;
    padding: .266667rem;
    min-height: 100%;
    box-sizing: border-box;
    
    .group {
      border-radius: .106667rem;
      background-color: #fff;
      margin-bottom: .266667rem;
      padding: .266667rem;
      
      .row {
        margin-bottom: .266667rem;
        font-size: .346667rem;
        display: flex;
        
        .row-label {
          color: #7b7b7b;
          width: 6em;
        }
        
        .row-content {
          color: #262626;
          min-width: 0;
          flex: 1;
          
          .goto-address-api {
            margin-left: .16rem;
            font-size: .346667rem;
            color: #3975c5;
          }
        }
      }
      .thead {
        color: #262626;
        font-size: .373333rem;
        padding: .133333rem 0 .4rem;
        font-weight: 500;
      }
      .stats-outer {
        margin: 0 -.266667rem -.266667rem;
        
        .stats-inner {
          display: flex;
          text-align: center;
          background-color: #f5f9ff;
          border-radius: 0 0 .106667rem .106667rem;
          color: #3975c5;
          font-size: .373333rem;
          line-height: .533333rem;
          padding: .32rem 0;
          
          .stats-cell {
            flex: 1 1 0;
          }
        }
      }
    }
  }
</style>

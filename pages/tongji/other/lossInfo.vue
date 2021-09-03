<template>
  <view class="container">
    <view class="chartBox" style="background: none;margin-bottom: 0;">
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全公司</view>
            <view class="triangle"></view>
          </view>
        </view><view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求品牌</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="chartBox">
      <view class="title">
        <text>需求统计流失</text>
      </view>
      <view class="data">
        <view class="data-item">
          <view class="num">0</view>
          <view class="text">流失需求</view>
        </view>
        <view class="data-item">
          <view class="num">0</view>
          <view class="text">流失至竞争对手的需求</view>
        </view>
      </view>
    </view>
    <view class="chartBox">
      <view class="title">需求流失--竞对分析</view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据信息</view>
      </view>
    </view>
    <view class="chartBox">
      <view class="title">需求流失原因分布</view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据信息</view>
      </view>
    </view>
    <view class="empty"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 0;
    background-image: -webkit-linear-gradient(top,#3975c5 1.466667rem,#f8f8f8 3.546667rem);
  }
  .chartBox {
    
    .toolbox {
      height: 1.3333rem;
      padding: 0;
      .drop {
        background-color: #1b5db3;
        .drop-title {
          color: #fff !important;
        }
      }
    }
    .data {
      justify-content: space-around;
      .data-item {
        width: 45%;
        margin-bottom: 0;
      }
    }
  }
  .empty {
    width: 100%;
    height: .5rem;
  }
</style>

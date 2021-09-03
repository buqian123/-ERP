<template>
  <view class="container">
    <view class="chartBox" style="background: none;margin-bottom: 0;">
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">收款金额</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">本周</view>
            <view class="triangle"></view>
          </view>
        </view><view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">接单人</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="chartBox">
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据信息</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(options) {
    this.type = options.type
  },
  data() {
    return {
      type: ''
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-image: -webkit-linear-gradient(top,#3975c5 1.466667rem,#f8f8f8 3.546667rem);
    padding-top: 0;
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
</style>

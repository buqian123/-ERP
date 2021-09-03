<template>
  <!-- 客户分析 -->
  <view>
    <!-- 未签需求分析 -->
    <view class="chartBox">
      <view class="title">
        <text>未签需求分析</text>
        <u-icon class="icon" name="info-circle" color="#3963bc;" size="40"></u-icon>
      </view>
      <view class="unSignTip">
        <text class="text">未签需求0个</text>
      </view>
      <view class="data">
        <view class="data-item" v-for="(item, index) in 6" :key="index">
          <view class="num">0</view>
          <view class="text">进店未签</view>
        </view>
      </view>
    </view>
    <!-- 客户&线索构成分析 -->
    <view class="chartBox">
      <view class="title">客户&线索构成分析</view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">需求跟进状态</view>
      <view class="charts" style="position: relative;">
        <qiun-data-charts type="ring" background="none" :opts="status.options" :chartData="status.chartData" />
        <view class="loss" @tap="goLossInfo">
          <text>流失分析</text>
          <image src="../../../static/arrow-right-orange.png" class="img"></image>
        </view>
      </view>
    </view>
    <view class="chartBox">
      
      <view class="title">
        <text>需求跟进转化分析</text>
        <u-icon class="icon" name="info-circle" color="#3963bc;" size="36"></u-icon>
      </view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求品牌</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">品牌时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="line" :eopts="conversion.eopts" :chartData="conversion.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">需求级别分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求品牌</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求状态</view>
            <view class="triangle"></view>
          </view>
        </view><view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">需求星级分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求品牌</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">需求状态</view>
            <view class="triangle"></view>
          </view>
        </view><view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
  </view>
</template>

<script>
import charts from './customerCharts.js'
export default {
  data() {
    return {
      constitute: charts.constitute,
      status: charts.status,
      conversion: charts.conversion,
      chartsDataColumn2: {}
    }
  },
  methods: {
    goLossInfo() {
      uni.navigateTo({
        url: '/pages/tongji/other/lossInfo'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .unSignTip {
    width: 100%;
    height: .6rem;
    box-sizing: border-box;
    padding: 0 .293333rem;
    margin-top: .306667rem;
    .text {
      padding: .12rem .253333rem;
      border-radius: 0 .34rem .34rem .34rem;
      background-color: #ffecdb;
      color: #fd8517;
      font-size: .32rem;
    }
  }
  .loss {
    height: .666667rem;
    background-color: #ffecdb;
    color: #fd8517;
    font-size: .32rem;
    display: flex;
    align-items: center;
    border-radius: .333333rem .333333rem .333333rem 0;
    padding-left: .293333rem;
    padding-right: .133333rem;
    white-space: nowrap;
    position: absolute;
    bottom: 40px;
    right: 6px;
    z-index: auto;
    
    .img {
      width: .24rem;
      height: .24rem;
      margin-left: .053333rem;
    }
  }
</style>

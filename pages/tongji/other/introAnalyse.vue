<template>
  <view class="wrap">
    <view class="chartBox">
      <view class="title">介绍人构成分析</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title">全公司</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">介绍人类型分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title">全公司</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">介绍人公司类型分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title">全公司</view>
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
import charts from '../analysis-type/customerCharts.js'
export default {
  data() {
    return {
      constitute: charts.constitute,
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    min-height: 100%;
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: .293333rem;
  }
</style>

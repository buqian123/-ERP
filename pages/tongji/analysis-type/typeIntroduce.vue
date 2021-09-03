<template>

  <view>
    <!-- 介绍人概况 -->
    <view class="chartBox">
      <view class="title">
        <text>介绍人概况</text>
        <u-icon class="icon" name="info-circle" color="#3963bc;" size="40"></u-icon>
      </view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="data">
        <view class="data-item" v-for="(item, index) in 9" :key="index">
          <view class="num">0</view>
          <view class="text">新增介绍人</view>
        </view>
      </view>
    </view>
    <!-- 介绍人构成分析 -->
    <view class="chartBox">
      <view class="title flex-bet">
        <view class="text">介绍人构成分析</view>
        <view class="more" @click="goMoreIntro">
          <text>更多分析&gt;</text>
        </view>
      </view>
      <view class="charts">
        <qiun-data-charts type="ring" background="none" :opts="constitute.options" :eopts="constitute.echart" :chartData="constitute.chartData" />
      </view>
    </view>
    <view class="chartBox">
      <view class="title">推荐需求跟进状态分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据</view>
      </view>
    </view>
    <view class="chartBox">
      <view class="title">推荐分佣分析</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据</view>
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
      dateTime: '',
      dataTimeOption: [
        { label: '今日', value: 1 },
        { label: '昨日', value: 2 },
        { label: '本周', value: 3 },
        { label: '本月', value: 4 },
        { label: '全部时间', value: 5 },
        { label: '自定义时间', value: 6 }
      ],
      currDateOptionIndex: 0,
      cusCate: '',
      cusCateOption: [
        { label: '营销云公海客户', value: 1 },
        { label: '投放公海客户', value: 2 }
      ]
    }
  },
  methods: {
    goMoreIntro() {
      uni.navigateTo({
        url: '/pages/tongji/other/introAnalyse'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .genjin {
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    padding: 20px 0 0 10px;
    background-color: #fff;
    
    .data {
      width: 100%;
      padding: 5px 10px 15px;
      .data-item {
        width: 33.33333333333%;
        height: 60px;
        margin-bottom: 13px;
        
        .num {
          width: 100%;
          color: #3975c5;
          font-weight: 700;
          font-size: 15px;
          margin-bottom: 6px;
        }
        .text {
          color: #262626;
          font-size: 12px;
        }
      }
    }
    
  }
  .slot-content {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 10px;
    
    .subtitle {
      color: #999;
      font-size: 12px;
      padding-bottom: 13px;
    }
    .selectOption{
      width: 100%;
      .option-item {
        width: 30%;
        padding: 0 5px;
        height: 30px;
        font-size: 13px;
        background-color: #f8f8f8;
        color: #717171;
        border-radius: 5px;
        margin-bottom: 8px;
      }
      .option-item-two {
        // width: 30%;
        padding: 0 10px;
        height: 30px;
        font-size: 13px;
        background-color: #f8f8f8;
        color: #717171;
        border-radius: 5px;
        margin-bottom: 8px;
        margin-right: 10px;
      }
      .selectTrue {
        background-color: #eaf3ff;
        color: #3975c5;
      }
    }
    .btn-box {
      width: 100%;
      margin-top: 15px;
      button {
        margin: 0;
        border: none;
      }
      :first-child {
        width: 25%;
        background-color: #F8F8F8;
      }
      :last-child {
        width: 70%;
        background-color: #367AE6;
      }
    }
  }
  .title {
    font-size: 15px;
    font-weight: 600;
  }
  .salelist {
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    padding: 20px 0 0 10px;
    background-color: #fff;
  }
  .charts-box {
    width: 100%;
    height: 280px;
    background-color: #fff;
  }
</style>

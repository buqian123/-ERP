<template>
  <!-- 销售分析 -->
  <view>
    <!-- 销售跟进概况 -->
    <view class="chartBox" style="margin: 0;">
      <view class="title">服务人概况</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">接单人</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">本周</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="data">
        <view class="data-item" v-for="(item, index) in 9" :key="index">
          <view class="num">0</view>
          <view class="text">新增线索</view>
        </view>
      </view>
    </view>
    <!-- 签单率 -->
    <view class="rate">
      <view v-for="(item, index) in 2" :key="index">
        <view class="title">测量签单率统计的是跟进中就完成测量的需求中，签单的比率</view>
        <view class="catebox">
          <view class="item" v-for="(item, index) in 3" :key="index">
            <view class="top-text">测量签单率</view>
            <view>0%</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 全公司服务排行榜 -->
    <view class="chartBox">
      <view class="title flex-bet">
        <view class="text">全公司服务排行榜</view>
        <view class="more" @tap="goRankList">
          <text>全部&gt;</text>
        </view>
      </view>
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
        </view>
      </view>
    </view>
    <!-- 服务概况 -->
    <view class="chartBox">
      <view class="title">服务概况</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">派单人</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">接单人</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">本周</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="survey">
        <view class="left">
          <view class="cate">服务单</view>
          <view class="num">0</view>
        </view>
        <view class="right">
          <view class="rItem" v-for="(item, index) in 6" :key="index">
            <view class="cate">已完成</view>
            <view class="num">0</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 服务单类型分布 -->
    <view class="chartBox">
      <view class="title">服务单类型分布</view>
      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">接单人</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">本周</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据信息</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
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
    goRankList() {
      uni.navigateTo({
        url: '/pages/tongji/other/rankingList?type=1'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .rate {
    width: 100%;
    box-sizing: border-box;
    padding: .506667rem .293333rem .533333rem .293333rem;
    background-color: #f8faff;
    margin-bottom: .293333rem;
    
    .title {
      width: 100%;
      font-size: .32rem;
      color: #7b7b7b;
      margin-bottom: .4rem;
    }
    
    .catebox {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding-left: .293333rem;
      margin-bottom: .533333rem;
      
      .item {
        width: 33.33333%;
        display: flex;
        flex-direction: column;
        font-size: .32rem;
        color: #262626;
        position: relative;
        
        &:first-child::before {
          content: "";
          width: .186667rem;
          height: .186667rem;
          border-radius: 50%;
          position: absolute;
          top: 0.08rem;
          left: -0.27rem;
          z-index: auto;
          background-color: #87a1ff;
        }
        
        .top-text {
          font-weight: 600;
          margin-bottom: .266667rem;
        }
      }
    }
  }
  
  
  .survey {
    width: 100%;
    height: 3.253333rem;
    display: flex;
    border-radius: .106667rem;
    overflow: hidden;
    
    .left {
      width: calc(100% - 5.65333rem);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #87a1ff;
    }
    
    .right {
      width: 5.653333rem;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      box-sizing: border-box;
      padding: .333333rem 0 .333333rem 0;
      color: #262626;
      background-color: #ecf1ff;
      
      .rItem {
        width: 50%;
        box-sizing: border-box;
        padding-left: .88rem;
      }
    }
    
    .cate {
      display: block;
      height: .44rem;
      line-height: .44rem;
      font-size: .32rem;
      margin-bottom: .066667rem;
    }
    .num {
      display: block;
      height: .64rem;
      line-height: .64rem;
      font-size: .453333rem;
      font-weight: 600;
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
</style>

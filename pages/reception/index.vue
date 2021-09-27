<template>
  <!-- 接待登记 -->
  <view class="reception">
    <view class="top-box">
      <view class="top-block">
        <view class="item i1">
          <view class="text">新增接待</view>
        </view>
        <view class="item i2" @tap="goRecord">
          <view class="text">接待记录</view>
        </view>
      </view>
      <view class="top-search">
        <view class="inner">
          <view class="text">查预约</view>
          <u-search placeholder="请输入客户名称(昵称)/手机号" shape="square" :clearabled="true"
          :show-action="false" v-model="search"></u-search>
        </view>
      </view>
      <view class="tab-box flex-bet">
        <view class="item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">即将接待(0)</view>
        <view class="item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 1">如约进店(0)</view>
        <view class="item" :class="{curr: tabIndex == 2}" @tap="tabIndex = 2">客户失约(0)</view>
      </view>
      <view class="tool-box flex-jeac">
        <view class="time flex-cen">
          <view class="title ell">近期(当天前后7天)</view>
        </view>
      </view>
      <view class="list-box">
        <view class="noData">
          <image src="/static/no-chart.png" class="img"></image>
          <view class="text">暂无数据</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tabIndex: 0
    }
  },
  methods: {
    goRecord() {
      uni.navigateTo({
        url: '/pages/reception/reception-record'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
.reception {
  width: 100%;
  min-height: 100%;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding-top: 6.76rem;
}

.top-box {
  width: 100%;
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  
  .top-block {
    width: 100%;
    height: 1.92rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: .266667rem .293333rem;
    
    .item {
      width: calc(50% - .13333rem);
      height: 100%;
      border-radius: .106667rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 .293333rem;
      
      .text {
        font-size: .373333rem;
        font-weight: 600;
        color: #fff;
      }
    }
    
    .i1 {
      background-image: url("/static/work-nav/bgA.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .i2 {
      background-image: url("/static/work-nav/bgB.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
.top-search {
  width: 100%;
  height: 2.56rem;
  box-sizing: border-box;
  padding: 0 .293333rem;
  
  .inner {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: .106667rem;
    box-sizing: border-box;
    padding: .373333rem .293333rem .266667rem .293333rem;
    
    .text {
      height: .6rem;
      line-height: .6rem;
      font-size: .426667rem;
      font-weight: 600;
      color: #262626;
      margin-bottom: .36rem;
    }
  }
}
.tab-box {
  width: 100%;
  height: 1.573333rem;
  box-sizing: border-box;
  padding: 0 .293333rem;
  
  .item {
    max-width: calc(33.33333% - .17778rem);
    height: .773333rem;
    line-height: .773333rem;
    box-sizing: border-box;
    padding: 0 .28rem;
    font-size: .346667rem;
    font-weight: 600;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .curr {
    color: #fff;
    background-color: #3975c5;
    border-radius: .386667rem;
  }
}
.tool-box {
  width: 100%;
  height: .706667rem;
  padding: 0 .293333rem;
  
  .time {
    height: .666667rem;
    overflow: hidden;
    
    .title {
      font-size: .32rem;
      font-weight: 400;
      height: .44rem;
      line-height: .44rem;
      color: #6f6f6f!important;
    }
  }
}
.list-box {
  width: 100%;
  
  .noData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 2.133333rem;
    
    .img {
      width: 1.973333rem;
      height: 2rem;
    }
    
    .text {
      font-size: .346667rem;
      color: #999;
    }
  }
}
</style>

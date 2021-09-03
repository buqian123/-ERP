<template>
  <view class="broadcast">
    <view class="dropdowns">
      <view class="drop">
        <view class="drop-title">推荐需求状态</view>
        <view class="triangle"></view>
      </view>
      <view class="drop">
        <view class="drop-title">需求分佣状态</view>
        <view class="triangle"></view>
      </view>
    </view>
    <view class="noData flex-col flex-cen">
      <image src="/static/no-chart.png" class="img"></image>
      <view class="text">暂无数据</view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
.broadcast {
  margin: 0 .293333rem;
}
.dropdowns {
  display: flex;
  justify-content: flex-end;
  margin: .266667rem 0;
  
  .drop {
    display: flex;
    align-items: center;
    height: .666667rem;
    overflow: hidden;
    background-color: #1b5db3;
    border-radius: .053333rem;
    box-sizing: border-box;
    padding: 0 .213333rem;
    font-size: .32rem;
    margin-right: .266667rem;
    
    &:last-child {
      margin-right: 0;
    }
    
    .drop-title {
      max-width: 100%;
      // font-size: .4rem;
      line-height: .586667rem;
      color: #fff !important;
      font-size: .32rem;
      font-weight: 400;
    }
    
    .triangle {
      width: 0;
      height: 0;
      border-bottom: .106667rem solid #fff;
      border-left: .106667rem solid transparent;
      margin: .133333rem 0 0 .133333rem;
      border-bottom-color: #fff;
    }
  }
}
.noData {
  padding-top: 100px;
  .img {
    width: 1.973333rem;
    height: 2rem;
  }
  .text {
    font-size: .346667rem;
    color: #999;
    line-height: .346667rem;
    margin-top: .053333rem;
  }
}
</style>

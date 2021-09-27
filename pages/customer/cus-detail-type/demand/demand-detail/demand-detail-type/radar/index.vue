<template>
  <view class="radar">
    <view class="counts">
      <view>浏览0次</view><view>报名0次</view><view>购卡0次</view>
      <view>下单0次</view><view>观看直播0次</view><view>访问素材0次</view>
      <view>提交表单0次</view>
    </view>
    <view class="line-ver-gradint"></view>
    <view class="noData">
      <image src="/static/noRadar.png" class="img"></image>
      <text class="text">暂无雷达信息</text>
    </view>
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
.radar {
  .counts {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: .586667rem .293333rem 0;
    background-color: #fff;
    color: #fd8517;
    font-size: .32rem;
    
    view {
      height: .44rem;
      line-height: .44rem;
      font-size: .32rem;
      margin-right: .613333rem;
      margin-bottom: .506667rem;
    }
  }

  .noData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1.973333rem 0;
    
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

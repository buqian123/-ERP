<template>
  <!-- 雷达 -->
  <view class="radar">
    <view class="count">
      <text>浏览0次</text><text>报名0次</text>
      <text>购卡0次</text><text>下单0次</text>
      <text>观看直播0次</text><text>访问素材0次</text>
      <text>提交表单0次</text>
    </view>
    <view class="filter">
      <view class="filter-box flex-cen">
        <u-icon name="arrow-down"></u-icon>
        <text>全部类型</text>
      </view>
    </view>
    <view class="noData">
      <image src="/static/no-chart.png" class="img"></image>
      <text>暂无雷达信息</text>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .radar {
    width: 100% !important;
    padding: 0 .293333rem !important;

    .count {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      text {
        display: block;
        height: .44rem;
        line-height: .44rem;
        font-size: .32rem;
        color: hsla(0, 0%, 100%, .72);
        margin-right: .48rem;
        margin-bottom: .186667rem;
      }
    }

    .filter {
      width: 100%;
      margin-bottom: .4rem;

      .filter-box {
        width: 2.48rem;
        height: .773333rem;
        border-radius: .386667rem;
        background-color: #1b5db3;
        color: #3975c5;

        text {
          color: #fff;
        }
      }
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

    text {
      font-size: .346667rem;
      color: #999;
    }
  }

  .van-list__finished-text {
    color: #969799;
    font-size: .373333rem;
    line-height: 1.333333rem;
    text-align: center;
  }

  .van-list__placeholder {
    height: 3rem;
    pointer-events: none;
  }
</style>

<template>
  <!-- 跟进详情页面 -->
  <view class="detail-follow">
    <view class="follow-head">
      <view class="content-box">
        <view class="input-title">跟进内容</view>
        <view class="input-text">跟进内容测试测试测试</view>
      </view>
      <view class="input-info">
        <view class="input-list">
          <view class="input-title">图片</view>
          <view class="input-text">暂无</view>
        </view>
      </view>
    </view>
    <view class=" customer-info">
      <view class="input-list">
        <view class="input-title">客户名称</view>
        <view class="input-text">AnDragon</view>
      </view>
      <view class="input-list">
        <view class="input-title">关联需求</view>
        <view class="input-text">210901103810280</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进模板</view>
        <view class="input-text color">普通跟进</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进方式</view>
        <view class="input-text">电话拜访</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进时间</view>
        <view class="input-text">2021-09-01 10:46:36</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进人</view>
        <view class="input-text">ZhengYu</view>
      </view>
    </view>
  </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .detail-follow {
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    padding: .293333rem;
    color: #262626;
    font-size: .346667rem;

    .follow-head {
      border-radius: .106667rem;
      background-color: #fff;
      padding: .133333rem 0;

      .content-box {
        width: 100%;
        padding: .133333rem .293333rem;
        display: flex;
        align-items: flex-start;

        .input-title {
          color: #7b7b7b;
          min-width: 6em;
        }

        .input-text {
          flex: 1;
          padding: 0 .24rem
        }
      }

      .input-info {
        width: 100%;
        padding: .133333rem .293333rem;
      }
    }

    .customer-info {
      width: 100%;
      padding: .133333rem .293333rem;
      margin: .266667rem 0;
      border-radius: .106667rem;
      background-color: #fff;
    }
  }

  .input-list {
    display: flex;
    align-items: center;
    width: 100%;
    padding: .133333rem 0;

    .input-title {
      box-sizing: border-box;
      min-width: 6em;
      color: #7b7b7b;
    }

    .input-text {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
      padding: 0 .24rem;
    }

    .color {
      color: #3975c5;
    }
  }
</style>

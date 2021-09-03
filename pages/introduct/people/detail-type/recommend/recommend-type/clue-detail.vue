<template>
  <view class="wrap">
    <view class="header flex-bet">
      <view class="header-name">AnDragon</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">微信昵称：</view>
      <view class="info-item-right">AnDragon</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">联系方式：</view>
      <view class="info-item-right">13577779999</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">客户来源：</view>
      <view class="info-item-right">自然进店</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">省市区：</view>
      <view class="info-item-right">湖南省长沙市岳麓区</view>
    </view>
    <view class="line"></view>
    <view class="info-header">关键信息</view>
    <view class="imp-item">
      <view class="info-item">
        <view class="info-item-left">客户户型：</view>
        <view class="info-item-right">三室</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">详细地址：</view>
        <view class="info-item-right">杭州解百城市奥莱A座小区A8幢1单元1011室</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">房屋面积：</view>
        <view class="info-item-right">200平米</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">装修阶段：</view>
        <view class="info-item-right">水电</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">装修风格：</view>
        <view class="info-item-right">中式</view>
      </view>
      <view class="line" style="margin-top: 12px;"></view>
    </view>
    <view class="info-header">其他信息</view>
    <view>
      <view class="info-item">
        <view class="info-item-left">性别：</view>
        <view class="info-item-right">男</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">年龄：</view>
        <view class="info-item-right">999</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">生日：</view>
        <view class="info-item-right">13/1</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">用户简介：</view>
        <view class="info-item-right">帅的一批</view>
      </view>
    </view>
    <view class="info-header">报备信息</view>
    <view>
      <view class="info-item">
        <view class="info-item-left">报备说明：</view>
        <view class="info-item-right">测试测试测试测试测试测试</view>
      </view>
      <view class="info-item">  <!-- <view class="info-item flex-col">  有图时 -->
        <view class="info-item-left">报备图片：</view>
        <view class="info-item-right">暂无</view>
        <!-- <view class="image-list">
          <view class="img-item">
            <image src="/static/avatar-default-img.png" class="img"></image>
          </view>
        </view> -->
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    goEditCus() {
      uni.navigateTo({
        url: '/pages/customer/editCus'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 0 .293333rem 0 .533333rem;
    background-color: #fff;
    height: 100%;
    color: #262626;
    font-size: .346667rem;
    
    .header {
      padding: .586667rem 0 .533333rem;
      .header-name {
        font-size: .613333rem;
        font-weight: 500;
        line-height: .88rem;
      }
      .scale-border {
        position: relative;
        padding: 0 .133333rem;
        .text {
          color: rgb(38, 38, 38);
          font-size: 12px;
          padding: 7px 13px;
        }
        .border {
          transform: scale(.5);
          position: absolute;
          border: .026667rem solid rgb(204, 204, 204);
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 26px;
        }
      }
    }
    .info-item {
      margin-top: .22rem;
      display: flex;
      .info-item-left {
        line-height: .506667rem;
        flex-shrink: 0;
      }
      .info-item-right {
        line-height: .506667rem;
      }
      .image-list {
        display: flex;
        margin-top: .266667rem;
        justify-content: space-between;
        
        .img-item {
          width: 64px;
          height: 64px;
          position: relative;
          
          .img {
            display: block;
            width: 100%;
            height: 100%;
            border-style: none;
          }
        }
      }
    }
    .line {
      height: .026667rem;
      transform: scaleY(.5);
      background-color: #f0f0f0;
      width: 100%;
      margin-top: 20px;
    }
    .info-header {
      font-size: .426667rem;
      font-weight: 500;
      padding: .32rem 0 .32rem;
      position: relative;
      
      &::after {
        position: absolute;
        content: "";
        left: -.32rem;
        top: 50%;
        transform: translateY(-50%);
        width: .133333rem;
        height: .133333rem;
        border-radius: 50%;
        background-color: #3975c5;
      }
    }
  }
</style>

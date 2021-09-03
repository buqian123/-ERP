<template>
  <view class="detail-follow-page">
    <view class="content-box">
      <view class="input-title">跟进内容</view>
      <view class="remarks">跟进测试4</view>
    </view>
    <view class="upload-box">
      <view class="input-title">图片</view>
      <!-- <view class="input-text">暂无</view> -->
      <view class="upload">
        <image src="/static/noRadar.png" class="img"></image>
      </view>
    </view>
    <view class="input-info">
      <view class="input-list">
        <view class="input-title">介绍人名称</view>
        <view class="input-text">张三</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进方式</view>
        <view class="input-text">进店接待</view>
      </view>
      <view class="input-list">
        <view class="input-title">跟进时间</view>
        <view class="input-text">2021-09-03 11:48:36</view>
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
  .detail-follow-page {
    width: 100%;
    height: 100vh;
    padding-top: .266667rem;
    background: #f8f8f8;
  }
  .content-box {
    width: 100%;
    padding: .453333rem .533333rem;
    background: #fff;
    
    .input-title {
      font-family: PingFangSC-Medium,PingFang SC;
      font-size: .426667rem;
      font-weight: 500;
      line-height: .613333rem;
      color: #262626;
    }
    .remarks {
      margin-top: .56rem;
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .4rem;
      font-weight: 400;
      line-height: .56rem;
      color: #262626;
      word-break: break-all;
    }
  }
  .upload-box {
    box-sizing: border-box;
    width: 100%;
    padding: .48rem .293333rem .266667rem;
    margin-top: .266667rem;
    background: #fff;
        
    .input-title {
      font-family: PingFangSC-Medium,PingFang SC;
      font-size: .426667rem;
      font-weight: 500;
      line-height: .613333rem;
      color: #262626;
      padding-left: .213333rem;
    }    
    
    .input-text {
      flex: 1;
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .4rem;
      font-weight: 400;
      color: #262626;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: break-all;
    }
    
    .upload {
      display: flex;
      margin-top: .533333rem;
      
      .img {
        width: 1.653333rem;
        height: 1.653333rem;
        margin-left: .24rem;
        vertical-align: middle;
        border-radius: .106667rem;
        
        &:first {
          margin-left: 0;
        }
      }
    }
  }
  .input-info {
    width: 100%;
    padding: 0 .293333rem;
    margin-top: .266667rem;
    background: #fff;
    .input-list {
       display: flex;
       align-items: center;
       width: 100%;
       height: 1.6rem; 
       .input-title {
         box-sizing: border-box;
         width: 2.373333rem;
         padding-left: .24rem;
         font-family: PingFangSC-Medium,PingFang SC;
         font-size: .426667rem;
         font-weight: 500;
         color: #262626;
         margin-right: .266667rem;
       }
       .input-text {
         flex: 1;
         font-family: PingFangSC-Regular,PingFang SC;
         font-size: .4rem;
         font-weight: 400;
         color: #262626;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
         word-break: break-all;
       }
    }
  }
</style>

<template>
    <view class="container">
      <view class="user-info flex-jsac">
        <view class="user-avatar">
          <img data-v-1fd634be="" src="https://wework.qpic.cn/bizmail/XScYpxxqR6KDPSTD9Ehl52MnwPNFf1j8AZyc6ntBHmjXsaEdC3xPyw/0" class="img">
        </view>
        <view class="info-text flex-col">
          <view class="username">ZhengYu</view>
          <view class="rolename">超级管理员</view>
        </view>
        <view class="set-btn">设置</view>
      </view>
      <view class="more-item">联系我们</view>
      <view class="more-item">帮助中心</view>
    </view>
</template>

<script>
</script>

<style lang="scss" scoped>
  .container {
    background-image: none;
    background-color: #fff;
  }
  .user-info {
    height: 2.933333rem;
    background: #fff;
    box-shadow: 0 .026667rem .373333rem 0 rgba(57,117,197,.09);
    border-radius: .16rem;
    position: relative;
    padding: 0 .293333rem;
    
    .user-avatar {
      width: 1.413333rem;
      height: 1.413333rem;
      margin-right: .293333rem;
      .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .info-text {
    padding: .026667rem 0;
    
    .username {
      font-size: .533333rem;
      font-family: PingFangSC-Medium,PingFang SC;
      font-weight: 500;
      color: #262626;
      line-height: .746667rem;
    }
    .rolename {
      font-size: .346667rem;
      font-family: PingFangSC-Light,PingFang SC;
      font-weight: 300;
      color: #999;
      line-height: .506667rem;
    }
  }
  .set-btn {
    width: 1.493333rem;
    height: .72rem;
    background: #eef5ff;
    border-radius: 0 .16rem 0 .453333rem;
    position: absolute;
    font-size: .32rem;
    color: #3975c5;
    top: 0;
    right: 0;
    justify-content: center;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  .more-item {
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    display: flex;
    align-items: center;
    position: relative;
    height: 1.866667rem;
    font-size: .346667rem;
    color: #262626;
    
    &::after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      height: .04rem;
      transform: scaleY(.5);
      background-color: #f0f0f0;
    }
  }
</style>

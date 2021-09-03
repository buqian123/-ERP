<template>
  <view class="log">
    <view class="log-list">
      <view class="log-item">
        <view class="log-info">
          <view class="time-box">
            <view class="week">星期三</view>
            <view class="time">2021年08月25日</view>
          </view>
          <view class="time-ul">
            <view class="time-list" v-for="(item, index) in 5" :key="index" @tap="goDetail">
              <view class="time-text"> 10:04:55</view>
              <view class="list-icon"></view>
              <view class="list-content">
                <view class="content-icon"></view>
                <view class="content">
                  <view class="content-top flex-bet">
                    <view class="mode-name">创建介绍人</view>
                    <view class="customer">ZhengYu</view>
                  </view>
                  <view class="follow-text">跟进测试4</view>
                  <view class="update-box">
                    <view class="update-title"></view>
                  </view>
                </view>
                <view class="line" v-if="index != 7">
                  <view class="line-border"></view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
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
    goDetail() {
      uni.navigateTo({
        url: '/pages/introduct/people/detail-type/follow-detail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.log {
  width: 100%;
  min-height: 100%;
  padding: 0.266667rem 0.293333rem;
  position: relative;
  .log-list {
    .log-item {
      margin-top: 0.266667rem;
      &:first-child {
        margin-top: 0;
      }
      
      .log-info {
        width: 100%;
        height: 100%;
        padding: 0 .266667rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-size: .32rem;
        font-weight: 400;
        line-height: .453333rem;
        color: #999;
        background: #fff;
        border-radius: .106667rem;
        
        .time-box {
          display: flex;
          align-items: center;
          width: 100%;
          height: 1.2rem;
          border-bottom: .026667rem solid #f8f8f8;
          .week {
            width: 1.813333rem;
          }
        }
        .time-ul {
          width: 100%;
          margin-top: .266667rem;
          
          .time-list {
            position: relative;
            display: flex;
            width: 100%;
            .time-text {
              width: 1.813333rem;
            }
            .list-icon {
              position: relative;
              z-index: 5;
              width: .16rem;
              height: .16rem;
              margin-top: .16rem;
              background: #3975c5;
              border-radius: 50%;
            }
            .list-content {
              position: relative;
              box-sizing: border-box;
              display: flex;
              flex: 1;
              padding-bottom: .506667rem;
              margin-top: .16rem;
              margin-left: .613333rem;
              .content-icon {
                width: 0;
                height: 0;
                border-top: .186667rem solid #f8f8f8;
                border-left: .186667rem solid transparent;
              }
              .content {
                flex: 1;
                padding: .293333rem .453333rem .293333rem .293333rem;
                background: #f8f8f8;
                border-radius: 0 .106667rem .106667rem .106667rem;
                
                .follow-text {
                  max-width: 5.333333rem;
                  margin-top: .133333rem;
                  color: #434242;
                  word-break: break-all;
                  display: -webkit-box;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                }
                
                .update-box {
                  margin-top: .16rem;
                  font-family: PingFangSC-Regular,PingFang SC;
                  font-size: .32rem;
                  font-weight: 400;
                  line-height: .506667rem;
                  color: #434242;
                  word-break: break-all;
                  
                  .update-title {
                    color: #3975c5;
                  }
                }
              }
              .line {
                position: absolute;
                top: 0;
                left: -.693333rem;
                z-index: 2;
                box-sizing: border-box;
                width: 1.6rem;
                height: 100%;
                padding-top: .32rem;
                margin: 0 auto;
                
                .line-border {
                  width: .026667rem;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  right: .293333rem;
                  content: "";
                  background-color: #fff;
                  transform: none;
                  border-left: .026667rem dashed #d3e4fa;
                }
              }
            }
          }
        }
      }
    }
  }
}
.van-list__finished-text {
  color: #969799;
  font-size: .373333rem;
  line-height: 1.333333rem;
  text-align: center;
}
.van-list__placeholder {
  height: 0;
  pointer-events: none;
}
</style>

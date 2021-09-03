<template>
  <view class="clue">
    <view class="dropdowns flex-jsac">
      <view class="clue-btn-ul">
        <view class="clue-btn-item">
          <view class="add-icon">
            <image src="/static/add-follow.png" class="img"></image>
          </view>
          <view class="text">录入线索</view>
        </view>
        <view class="clue-btn-ul-desc">说明:录入手机号，如果识别是新线索，会自动进入转介绍客户公海</view>
      </view>
    </view>
    <view class="list">
      <view class="clue-box">
        <view class="clue-ul">
          <view class="clue-item" @tap="goClueDetail">
            <view class="clue-item-content">
              <view class="avatar">
                <image src="/static/avatar-default-img.png" class="img"></image>
              </view>
              <view class="info">
                <view class="info-name">王五</view>
                <view class="info-item">联系方式：13788889999</view>
                <view class="info-item">地址：四合院小区1幢1单元1室</view>
                <view class="info-item">介绍人：张三(ZhengYu对接)</view>
                <view class="info-item">录入时间：2021-09-03 14:25:18</view>
                <view class="info-item">跟进人：暂无</view>
                <view class="btns flex-jeac">
                  <view class="border btn-item" @tap.stop="relation">关联需求</view>
                  <view class="border btn-item" @tap.stop="edit">编辑</view>
                  <view class="border btn-item" @tap.stop="del">删除</view>
                </view>
              </view>
            </view>
          </view>
          <view class="van-list__finished-text">已显示全部数据</view>
          <view class="van-list__placeholder"></view>
        </view>
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
    goClueDetail() {
      uni.navigateTo({
        url: '/pages/introduct/people/detail-type/recommend/recommend-type/clue-detail'
      })
    },
    relation() {
      
    },
    edit() {
      
    },
    del() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .dropdowns {
    margin: .266667rem .293333rem;
    .clue-btn-ul {
      width: 100%;
      transform: translateY(.08rem);
      .clue-btn-item {
        width: 2.506667rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: .773333rem;
        padding: 0 .32rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-size: .32rem;
        font-weight: 400;
        color: #fff;
        text-align: center;
        background: #1b5db3;
        margin-left: 0;
        border-radius: 2px;
        
        .add-icon {
          width: .266667rem;
          height: .266667rem;
          margin-right: .16rem;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        
        .text {
          height: .906667rem;
          line-height: .933333rem;
        }
      }
      .clue-btn-ul-desc {
        font-size: .32rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: hsla(0,0%,100%,.6);
        margin-top: .266667rem;
        overflow: hidden;
        line-height: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        box-sizing: border-box;
      }
    }
  }
  .list {
    margin: 0 .293333rem;
    .clue-box {
      width: 100%;
      .clue-ul {
        .clue-item {
          width: 100%;
          padding: .4rem .32rem;
          margin-top: .266667rem;
          background: #fff;
          border-radius: .106667rem;
          .clue-item-content {
            display: flex;
            padding: .4rem .293333rem .266667rem;
            border-radius: .106667rem;
            background-color: #fff;
            
            .avatar {
              width: .64rem;
              height: .64rem;
              margin-right: .24rem;
              .img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .info {
              flex: 1;
              font-family: PingFangSC-Regular,PingFang SC;
              font-weight: 400;
              .info-name {
                margin-bottom: .106667rem;
                font-size: .4rem;
                color: #262626;
                line-height: .56rem;
                max-width: 3.626667rem;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
              }
              .info-item {
                font-size: .32rem;
                color: #999;
                line-height: .453333rem;
              }
              .btns {
                margin-top: .266667rem;
                
                .btn-item {
                  font-size: .32rem;
                  color: #262626;
                  margin-right: 10px;
                  
                  &:last-child {
                    margin-right: 0;
                  }
                }
                
                .border {
                  padding: .24rem .266667rem;
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  
                  &::before {
                    content: " ";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 200%;
                    border: .026667rem solid #ccc;
                    transform-origin: 0 0;
                    transform: scale(.5);
                    border-radius: .906667rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>

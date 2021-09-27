<template>
  <view class="follow-box">
    <view class="follow-btn-ul">
      <view class="follow-btn-item" @tap="addFollow">
        <text class="add-follow-text">添加跟进</text>
        <image src="/static/add-follow.png" class="add-follow-icon"></image>
      </view>
    </view>
    <view class="line-ver-gradint"></view>
    <!-- 跟进列表 -->
    <view class="follow-ul">
      <view class="follow-list" v-for="(item, index) in followList" :key="item.timeId">
        <view class="fllow-info">
          <view class="time-box">
            <view class="week">{{item.week}}</view>
            <view class="time">{{item.specificDate}}</view>
          </view>
          <view class="time-ul">
            <view class="time-list" v-for="subitem in item.openLogs" :key="subitem.id" @tap="goFllowDetail(subitem.id)">
              <view class="time-text">{{subitem.logDateTime}}</view>
              <view class="list-icon"></view>
              <view class="list-content">
                <view class="content-icon"></view>
                <view class="content">
                  <view>
                    <view class="mode-name">{{subitem.logTitle}}</view>
                    <view class="customer">操作人:{{subitem.openUser}}</view>
                  </view>
                  <view class="follow-text ell">{{subitem.openContent}}</view>
                </view>
                <view class="content-icon"></view>
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
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      cusInfo: state => state.customer.cusInfo,
    })
  },
  data() {
    return {
      followList: []
    }
  },
  created() {
    this.getFollowLog()
  },
  methods: {
    ...mapMutations(['setFollowId']),
    getFollowLog() {
      let data = {
        fromId: '|' + this.cusId + '|',
        type: 'FOLLOW',
        limit: 5,
      }
      this.$u.api.getAllLog(data).then(res => {
        this.followList = res
      })
    },
    addFollow() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/follow/addFollow'
      })
    },
    // 查看跟进详情
    goFllowDetail(id) {
      this.setFollowId(id)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/follow/followDetail'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.follow-box {
  width: 100%;
}
.follow-btn-ul {
  display: flex;
  padding: .266667rem .293333rem 0;
  background-color: #fff;

  .follow-btn-item {
    padding: 0 .213333rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: .666667rem !important;
    margin-left: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-size: .32rem;
    font-weight: 400;
    color: #fd8517 !important;
    background: #fff6ed !important;
    border-radius: .346667rem !important;

    &:first-child {
      margin-left: 0px;
    }

    .add-follow-icon {
      width: .32rem;
      height: .32rem;
    }

    .add-follow-text {
      height: .906667rem;
      line-height: .933333rem;
      margin-right: 4px;
    }
  }
}
.follow-ul {
  padding: 0 .293333rem;
  margin-top: -1.013333rem;

  .follow-list {
    width: 100%;
    padding: .4rem .32rem;
    margin-top: .266667rem;
    background: #fff;
    border-radius: .106667rem;

    .fllow-info {
      width: 100%;
      height: 100%;
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      line-height: .453333rem;
      color: #999;
      margin-top: 0.26666rem;

      .time-box {
        box-sizing: border-box;
        display: flex;
        width: 100%;
        padding-bottom: .4rem;
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
            width: .133333rem;
            height: .133333rem;
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
              box-sizing: border-box;
              flex: 1;
              padding: .293333rem .293333rem .293333rem .293333rem;
              background: #f8f8f8;
              border-radius: 0 .106667rem .106667rem .106667rem;

              .customer {
                margin-top: .133333rem;
              }

              .follow-text {
                max-width: 5.333333rem;
                margin-top: .133333rem;
                color: #434242;
                word-break: break-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>

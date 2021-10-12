<template>
  <view class="log-box">
    <view class="follow-ul">
      <view class="follow-list" v-for="item in loglist" :key="item.timeId">
        <view class="fllow-info">
          <view class="time-box">
            <view class="week">{{item.week}}</view>
            <view class="time">{{item.specificDate}}</view>
          </view>
          <view class="time-ul">
            <view class="time-list" v-for="subitem in item.openLogs" :key="subitem.id" @tap="goDetail(subitem.id)">
              <view class="time-text">{{subitem.logDateTime}}</view>
              <view class="list-icon"></view>
              <view class="list-content">
                <view class="content-icon"></view>
                <view class="content">
                  <view>
                    <view class="mode-name">{{subitem.logTitle}}</view>
                    <view class="customer">{{'操作人：' + subitem.openUser}}</view>
                  </view>
                  <view class="follow-text ell">{{subitem.openContent}}</view>
                </view>
                <view class="content-icon"></view>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      <view v-if="logAll != 0" style="padding-top: 2rem;">
        <view class="van-list__finished-text">已显示全部数据</view>
        <view class="van-list__placeholder"></view>
      </view>
      <view class="no-data" v-if="loglist.length == 0">
        <image src="/static/no-chart.png"></image>
        暂无操作日志
      </view>
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
      logPage: 1,
      loglist: [],
      logAll: false
    }
  },
  onLoad() {
    this.getHandleLog()
  },
  onReachBottom() {
    if (!this.followAll) {
      this.getHandleLog()
    }
  },
  methods: {
    getHandleLog() {
      let data = {
        fromId: this.cusId,
        limit: 5,
        page: this.logPage
      }
      this.$u.api.getAllLog(data).then(res => {
        let arr = res.records.filter(item => {
          return item.openLogs.length != 0
        }) 
        
        arr.forEach(item => {
          this.loglist.push(item)
        })
        
        this.logPage += 1
        if (res.pages != 0) {
          if (this.logPage > res.pages) {
            this.logAll = true
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.follow-ul {
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

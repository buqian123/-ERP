<template>
  <!-- 服务 -->
  <view class="service-box">
    <view class="tips-box">
      <!-- <image src="../../../static/jingao.png" class="img"></image> -->
      <image src="/static/jingao.png" class="img"></image>
      <text>请在「需求」中选择具体需求，新增服务单</text>
    </view>
    <view class="service-list">
      <view class="service-item" v-for="(item, index) in serviceList" :key="item.id" @tap="goDetail(item.id)">
        <view class="service-item-top">
          <view class="text"> 服务编号：{{item.id}} </view>
          <view class="text"> 服务单类型：{{item.serviceType}} </view>
          <view class="text"> 派单时间：{{item.serviceTime}} </view>
          <view class="text"> 客户：{{item.customerName}} </view>
          <view class="text flex-jsac">
            <text>详细地址：杭州解百城市奥莱A座-A8-1-1011</text>
            <image src="/static/address.png" class="img"></image>
          </view>
          <view class="text flex-jsac mg">
            <text class="t1">示例(请去PC端修改)</text>
            <text class="t2">已签约</text>
          </view>
        </view>
        <view class="service-item-center flex-cen">
          <view class="service-person">{{item.dispatchVos.dispatchPeople}}</view>
          <view class="service-arrive">进行中</view>
          <view class="service-person">{{item.dispatchVos.servicePeople}}</view>
        </view>
      </view>
    </view>
    <view v-if="loadAll" style="padding-top: 2rem;">
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    <view class="no-data" v-if="serviceList.length == 0">
      <image src="/static/no-chart.png"></image>
      暂无服务单记录
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      userInfo: state => state.userInfo
    })
  },
  created() {
    // this.getService()
  },
  data() {
    return {
      // serviceList: []
    }
  },
  props: {
    serviceList: {
      type: Array,
      default: []
    },
    loadAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations(['setServiceId']),
    // getService() {
    //   let data = {
    //     customerId: this.cusId,
    //     limit: 10,
    //     page: 1
    //   }
    //   this.$u.api.getServiceByCusId(data).then(res => {
    //     this.serviceList = res.data
    //   })
    // },
    goDetail(id) {
      this.setServiceId(id)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .service-box {
    width: 100%;
    padding: 0 .293333rem;

    .tips-box {
      position: relative;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 1.2rem;
      padding-top: .16rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      color: #fd8517;
      background: url("/static/detail-service-tips-bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .img {
        width: .373333rem;
        height: .373333rem;
        margin-right: .16rem;
        vertical-align: middle;
      }
    }

    .service-list {
      margin-top: .4rem;

      .service-item {
        margin-top: .4rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #fff;
        border-radius: .106667rem;

        .service-item-top {
          width: 100%;
          padding: .266667rem .32rem 0;

          .mg {
            margin-top: .146667rem !important;
            margin-bottom: .26666rem !important;
          }

          .text {
            width: 100%;
            height: .44rem;
            font-size: .32rem;
            line-height: .44rem;
            color: #7b7b7b;
            margin-bottom: .106667rem;

            .img {
              width: .506667rem;
              height: .506667rem;
              margin-left: .133334rem;
            }

            text {
              box-sizing: border-box;
              border-radius: .053333rem;
              font-size: .32rem;
              margin-right: .12rem;
            }

            .t1 {
              padding: .053333rem .133333rem;
              color: #fd8517;
              max-width: 4rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              border: .013333rem solid #ffa14c;
            }

            .t2 {
              padding: .053333rem .133333rem;
              color: #1f9400;
              border: .013333rem solid #1f9400;
            }
          }
        }

        .service-item-center {
          padding: .88rem .32rem;
          background-color: #f5f9ff;

          .service-person {
            width: 1.733333rem;
            height: .56rem;
            overflow: hidden;
            font-size: .4rem;
            font-weight: 400;
            line-height: .56rem;
            color: #262626;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .service-arrive {
            width: 1.626667rem;
            height: .853333rem;
            font-size: .373333rem;
            font-weight: 400;
            line-height: .533333rem;
            color: #3975c5;
            text-align: center;
            // background-image: url(../../../static/arrive.png);
            background-image: url("/static/arrive.png");
            background-repeat: no-repeat;
            background-position: 0 100%;
            background-size: 1.626667rem .213333rem;
            margin: 0 1.33333rem .106667rem 1.626667rem;
          }
        }
      }
    }
  }
</style>

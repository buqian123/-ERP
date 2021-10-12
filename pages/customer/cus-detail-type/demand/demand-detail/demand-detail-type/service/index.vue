<template>
  <view class="serivce">
    <view class="btn-box">
      <view class="btn-item" @tap="addService">
        <image src="/static/add-follow.png" class="img"></image>
        服务工单
      </view>
    </view>
    <view class="serivce-list">
      <view class="serivce-item" v-for="(item, index) in serviceList" :key="item.id" @tap="goServiceDetail(item.id)">
        <view class="desc">
          <text>服务编号：{{item.id}}</text>
          <text>{{item.serviceType}}</text>
        </view>
        <view class="desc">
          <text>派单时间：{{item.serviceTime}}</text>
          <text class="more-text">客户：{{item.customerName}}</text>
        </view>
        <view class="serivce-people">
          <view class="left">
            <view class="text">{{item.dispatchVos.dispatchPeople}}</view>
          </view>
          <view class="middle">
            <view>
              <view class="text">进行中</view>
              <image src="/static/arrive.png" class="img"></image>
            </view>
          </view>
          <view class="right">
            <view class="text">{{item.dispatchVos.servicePeople}}</view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="loadAll">
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    <view class="no-data" v-if="serviceList.length == 0">
      <image src="/static/no-chart.png"></image>
      暂无服务单记录
    </view>
    
    <u-modal v-model="showService" content="当前需求无客户地址信息，请先补充再签单！" :show-cancel-button="true"
    confirm-text="补充地址" confirm-color="#1f9400" cancel-text="暂不补充" 
    @confirm="supplementAddress" @cancel="supplementAddService"></u-modal>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      demandId: state => state.customer.demandId
    })
  },
  data() {
    return {
      // serviceList: [],
      // demandInfo: {},
      showService: false
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
    },
    demandInfo: {
      type: Object,
      default: {}
    }
  },
  created() {
    // this.getService()
    // this.$u.api.getDemandInfoById({id: this.demandId}).then(res => {
    //   this.demandInfo = res
    // })
  },
  methods: {
    ...mapMutations(['setLastPath', 'setServiceId']),
    // getService() {
    //   let data = {
    //     demandId: this.demandId,
    //     limit: 10,
    //     offset: 0
    //   }
    //   this.$u.api.getServiceByDemandId(data).then(res => {
    //     this.serviceList = res
    //     console.log(this.serviceList);
    //   })
    // },
    // 补充需求的keyMessage
    supplementAddress() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/supplementKeyId/list'
      })
    },
    supplementAddService () {
      let routes =  getCurrentPages();
      let currPage = routes[routes.length - 1].route
      this.setLastPath(currPage)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/service/addService'
      })
    },
    goServiceDetail(id) {
      this.setServiceId(id)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    },
    addService() {
      if (this.demandInfo.keyId == null || this.demandInfo.keyMessage.address == null) {
        this.showService = true
      } else {
        let routes =  getCurrentPages();
        let currPage = routes[routes.length - 1].route
        this.setLastPath(currPage)
        uni.navigateTo({
          url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/service/addService'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.serivce {
    .btn-box {
      display: flex;
      padding: 0 .293333rem;
      background-color: #fff;
      padding-top: .586667rem;
      padding-bottom: .133333rem;
      
      .btn-item {
        background-color: #fff6ed;
        border-radius: .346667rem;
        padding: 0 .266667rem;
        height: .666667rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fd8517;
        margin-right: .266667rem;
        
        .img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
    .serivce-list {
      padding: 0px 11px;

      .serivce-item {
        padding: .293333rem .293333rem 0;
        border-radius: .106667rem;
        background-color: #fff;
        margin-bottom: .266667rem;
        
        .desc {
          display: flex;
          height: .453333rem;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .133333rem;
          color: #7b7b7b;
          font-size: .32rem;
          
          .more-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 2.346667rem;
          }
        }
      }
      .serivce-people {
        height: 2.933333rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .left {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          
          .text {
            font-size: 15px;
            line-height: 21px;
            color: rgb(38, 38, 38);
          }
        }
        .middle {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 1.333333rem;
          
          .text {
            color: #3975c5!important;
            line-height: 20px;
          }
          .img {
            width: 62px;
            height: 8px;
            margin-top: 4px;
          }
        }
        .right {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          
          .text {
            font-size: 15px;
            line-height: 21px;
            color: rgb(38, 38, 38);
          }
        }
      }
    }
    .end-data {
      width: 100%;
      line-height: 1.333333rem;
      text-align: center;
      background-color: rgb(248, 248, 248);
      color: rgb(153, 153, 153);
    }
  }
</style>

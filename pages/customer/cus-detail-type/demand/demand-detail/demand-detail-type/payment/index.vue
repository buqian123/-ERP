<template>
  <view class="payment">
    <view class="pay-types">
      <view class="pay-type-item flex-cen" @tap="addCollect(0)">
        <image src="/static/add-follow.png" class="img"></image>
        收款
      </view>
      <view class="pay-type-item flex-cen" @tap="addCollect(1)">
        <image src="/static/add-follow.png" class="img"></image>
        退款
      </view>
    </view>
    
    <view class="pay-list">
      <view class="payment-item" v-for="item in paymentList" :key="item.id">
        <view class="payment-title flex-jsac">
          <view class="title-tag" :style="{backgroundColor: item.distinguish == 0 ? '#63af4e' : '#fd8517'}">{{item.distinguish == '0' ? '收款' : '退款'}}</view>
          <view class="title">收款编号：{{item.id}}</view>
        </view>
        <view class="info-text-list">收款时间：{{item.slowTime}}</view>
        <view class="info-text-list">收款类型：{{item.slowType}}</view>
        <view class="info-text-list">结算方式：{{item.settlementMethod}}</view>
        <view class="info-text-list">审核状态：{{item.isExamine == '0' ? '已审核' : '待审核'}}</view>
        <view class="info-text-list flex-jsac">
          本次收款：
          <text class="info-text-cur">{{item.money}}元</text>
        </view>
        <view class="info-text-list">收款备注：{{item.remarks}}</view>
        <view class="pay-btn-box flex-bet">
          <view class="pay-btn-left flex-jsac">
            <image src="/static/logo.png" class="avatar"></image>
            <text>{{item.slowPeople}}收款</text>
          </view>
          <view class="pay-btn-right flex-jsac" @tap="editPayment(item.distinguish, item.id)">
            <view class="flex-jsac">
              <!-- <image src="../../static/jingao.png" class="img"></image> -->
              <text>修改</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="loadAll">
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    <view class="no-data" v-if="paymentList.length == 0">
      <image src="/static/no-chart.png"></image>
      暂无收款记录
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      demandId: state => state.customer.demandId
    })
  },
  data() {
    return {
      // paymentList: [],
      settlementMethodList: [
        {value: 0,label: '微信支付'},
        {value: 1,label: '支付宝'},
        {value: 2,label: '现金'},
        {value: 3,label: 'POS'},
        {value: 4,label: '银行转账'},
        {value: 5,label: '内部调账'},
        {value: 6,label: '支票'},
        {value: 7,label: '其他'}
      ]
    }
  },
  props: {
    paymentList: {
      type: Array,
      default: []
    },
    loadAll: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // this.getCollectList()
    this.paymentList = this.paymentList.reverse()
    this.paymentList.forEach(item => {
      this.settlementMethodList.forEach(sitem => {
        if (item.settlementMethod == sitem.value) {
          item.settlementMethod = sitem.label
        }
      })
      
    })
  },
  methods: {
    ...mapMutations(['setLastPath']),
    // getCollectList() {
    //   this.$u.api.getCollectForDemand({limit: 10, offset: 1, demandId: this.demandId}).then(res => {
    //     this.paymentList = res.records.reverse()
    //     this.paymentList.forEach(item => {
    //       this.settlementMethodList.forEach(sitem => {
    //         if (item.settlementMethod == sitem.value) {
    //           item.settlementMethod = sitem.label
    //         }
    //       })
          
    //     })
    //   })
    // },
    addCollect(type) {
      let routes =  getCurrentPages();
      let currPage = routes[routes.length - 1].route
      this.setLastPath(currPage)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/payment/addCollect?type=' + type
      })
    },
    editPayment(type,id) {
      let routes =  getCurrentPages();
      let currPage = routes[routes.length - 1].route
      this.setLastPath(currPage)
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/payment/editCollect?type=' + type + '&id=' + id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .payment {
    height: 100%;

    .pay-types {
      display: flex;
      padding: 0 .293333rem;
      background-color: #fff;
      padding-top: .586667rem;
      padding-bottom: .133333rem;
      
      .pay-type-item {
        background-color: #fff6ed;
        border-radius: .346667rem;
        padding: 0 .266667rem;
        height: .666667rem;
        color: #fd8517;
        margin-right: .266667rem;
        
        .img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
    .pay-list {
      padding: 0px 11px;
      .payment-item {
        width: 100%;
        padding: .293333rem;
        padding-bottom: 0;
        margin-top: .373333rem;
        background: #fff;
        border-radius: .106667rem;
        
        &:first-child {
          margin-top: 0;
        }
    
        .payment-title {
          .title-tag {
            width: .96rem;
            background-color: #63af4e;
            border-radius: .053333rem;
            height: .506667rem;
            margin-right: .16rem;
            color: #fff;
            font-size: .32rem;
            font-weight: 400;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
    
          .title {
            font-family: PingFangSC-Medium, PingFang SC;
            font-size: .373333rem;
            font-weight: 500;
            line-height: .533333rem;
            color: #262626;
          }
        }
    
        .info-text-list {
          margin-top: .106667rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          line-height: .506667rem;
          color: #262626;
          word-break: break-all;
    
          .info-text-cur {
            color: #f65d48;
          }
        }
    
        .pay-btn-box {
          width: 100%;
          height: 1.173333rem;
    
          .pay-btn-left {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #262626;
    
            .avatar {
              width: .64rem;
              height: .64rem;
              margin-right: .24rem;
              border-radius: 50%;
            }
          }
    
          .pay-btn-right {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #999;
    
            .img {
              width: .346667rem;
              margin-right: .106667rem;
            }
          }
        }
      }
    }
  }
</style>

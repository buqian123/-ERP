<template>
  <!-- 收款 -->
  <view class="payment-box">
    <view class="tips-box">
      <image src="/static/jingao.png" class="img"></image>
      <text>请在「需求」中选择具体需求，新增收退款</text>
    </view>
    <view class="pay-list">
      <view class="payment-item" v-for="item in collectList" :key="item.id">
        <view class="payment-title flex-jsac">
          <view class="title-tag" :style="{backgroundColor: item.distinguish == 0 ? '#63af4e' : '#fd8517'}">{{item.distinguish == '0' ? '收款' : '退款'}}</view>
          <view class="title ell">{{item.distinguish == 0 ? '收款' : '退款'}}编号：{{item.id}}</view>
        </view>
        <view class="info-text-list">{{item.distinguish == 0 ? '收款' : '退款'}}时间：{{item.slowTime}}</view>
        <view class="info-text-list">收款类型：{{item.slowType}}</view>
        <view class="info-text-list">结算方式：{{item.settlementMethod}}</view>
        <view class="info-text-list">审核状态：{{item.isExamine == '0' ? '已审核' : '待审核'}}</view>
        <view class="info-text-list flex-jsac">
          本次{{item.distinguish == 0 ? '收款' : '退款'}}：
          <text class="info-text-cur">{{item.money}}元</text>
        </view>
        <view class="info-text-list">{{item.distinguish == 0 ? '收款' : '退款'}}备注：{{item.remarks}}</view>
        <view class="img-ul" v-if="item.imgUrl">
          <image class="img" :src="subitem" v-for="(subitem, index) in item.imgUrl" :key="index"></image>
        </view>
        <view class="pay-btn-box flex-bet">
          <view class="pay-btn-left flex-jsac">
            <image src="/static/logo.png" class="avatar"></image>
            <text>{{item.slowPeople}}{{item.distinguish == 0 ? '收款' : '退款'}}</text>
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
    <view v-if="loadAll" style="padding-top: 2rem;">
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    <view class="no-data" v-if="collectList.length == 0">
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
      cusId: state => state.customer.cusId
    })
  },
  data() {
    return {
      // collectList: [],
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
  created() {
    // this.getCollectList()
    this.collectList = this.collectList.reverse()
    this.collectList.forEach(item => {
      this.settlementMethodList.forEach(sitem => {
        if (item.settlementMethod == sitem.value) {
          item.settlementMethod = sitem.label
        }
      })
    })
  },
  props: {
    collectList: {
      type: Array,
      default: []
    },
    loadAll: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations(['setLastPath']),
    // getCollectList() {
    //   this.$u.api.getCollectForCus({limit: 10, offset: 1, customerId: this.cusId}).then(res => {
    //     this.collectList = res.records.reverse()
    //     this.collectList.forEach(item => {
    //       this.settlementMethodList.forEach(sitem => {
    //         if (item.settlementMethod == sitem.value) {
    //           item.settlementMethod = sitem.label
    //         }
    //       })
    //     })
    //   })
    // },
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
  .payment-box {
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
      // background-image: url(../../../static/detail-pay-tips-bg.56f87b68.png);
      background-image: url("/static/detail-pay-tips-bg.56f87b68.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;

      .img {
        width: .373333rem;
        height: .373333rem;
        margin-right: .16rem;
        vertical-align: middle;
      }
    }

    .pay-list {
      margin-top: .4rem;
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
        
        .img-ul {
          display: flex;
          margin-top: .16rem;
          
          .img {
            width: 1.653333rem;
            height: 1.653333rem;
            margin-left: .16rem;
            border-radius: .106667rem;
            
            &:first-child {
              margin-left: 0;
            }
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

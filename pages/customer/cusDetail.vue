<template>
  <view class="customer-detail-page">
    <view class="bgc" :class="{'bgc-follow': tabIndex == 1}"></view>
    <view class="bgc-line-gra"></view>
    <view class="user-info flex-jsac" :class="{'user-info-follow': tabIndex == 1}">
      <view class="avatar">
        <image src="../../static/work-nav/logo.png" class="img"></image>
      </view>
      <view class="user-info-right">
        <view class="user-info-name">
          {{cusInfo.userName}}
          <text>@微信</text>
        </view>
        <view class="user-info-action flex-jsac">
          <text @tap="goCusInfo">查看客户资料</text>
          <view class="ver-line-split"></view>
          <text @tap="goEditCus">编辑客户</text>
          <view class="ver-line-split"></view>
          <text @tap="showMoreAction = true">更多</text>
        </view>
        <view style="color: #000000;">
          <u-action-sheet :list="moreActionList" v-model="showMoreAction" @tap="selectAction" :cancel-btn="true">
          </u-action-sheet>
        </view>
      </view>
    </view>
    <view class="money">
      <view class="price-follow-container">
        <view class="price">
          <text class="price-top">签单合同总金额</text>
          <text>￥{{cusInfo.contractMoney || '0'}}</text>
        </view>
        <view class="price">
          <text class="price-top">实际收款金额</text>
          <text>￥{{cusInfo.collectionMoney || '0'}}</text>
        </view>
        <view class="price">
          <text class="price-top" v-if="cusInfo.followUpPerson">跟进人{{'(' + cusInfo.followUpPerson.split(',').length + ')'}}</text>
          <text class="price-top" v-else>跟进人(0)</text>
          <text>{{cusInfo.followUpPerson || '暂无跟进人'}}</text>
        </view>
      </view>
    </view>
    <view class="tabs flex-bet">
      <view class="tab-item" :class="{'tabs-active': tabIndex == 0}" @tap="changeTabIndex(0)">雷达</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 1}" @tap="changeTabIndex(1)">跟进</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 2}" @tap="changeTabIndex(2)">需求</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 3}" @tap="changeTabIndex(3)">收款</view>
      <view class="tab-item" :class="{'tabs-active': tabIndex == 4}" @tap="changeTabIndex(4)">服务</view>
    </view>
    <!-- 联系 -->
    <view class="wx-phone">
      <view class="wx">
        <image src="/static/wx-icon.png" class="img"></image>
        <view class="text-deactive">微信</view>
      </view>
      <view class="phone">
        <image src="/static/phone-icon.png" class="img"></image>
        <view class="text">手机</view>
      </view>
    </view>
    
    <u-modal v-model="showDelCustomer" content="删除后无法查找到该用户哦" title="确认删除" :show-cancel-button="true"
    confirm-text="确认" cancel-text="取消" @confirm="delCus"></u-modal>
    
    
<!--    <Radar v-if="tabIndex == 0"></Radar>
    <block v-if="cusInfo.id">
      <Follow v-if="tabIndex == 1"></Follow>
    </block>
    
    <Demand v-if="tabIndex == 2"></Demand>
    <Payment v-if="tabIndex == 3"></Payment>
    <Service v-if="tabIndex == 4"></Service> -->
    <block v-if="tabShow0">
      <Radar v-show="tabIndex == 0"></Radar>
    </block>
    <block v-if="tabShow1">
      <Follow v-show="tabIndex == 1" :loglist="followList" :loadAll="followAll"></Follow>
    </block>
   <block v-if="tabShow2">
     <Demand v-show="tabIndex == 2" :demandList="demandList" :loadAll="demandAll"></Demand>
   </block>
   <block v-if="tabShow3">
     <Payment v-show="tabIndex == 3" :collectList="paylist" :loadAll="paymentAll"></Payment>
   </block>
   <block v-if="tabShow4">
     <Service v-show="tabIndex == 4" :serviceList="serviceList" :loadAll="serviceAll"></Service>
   </block>
  </view>
</template>

<script>
import Radar from './cus-detail-type/radar/radar.vue'
import Follow from './cus-detail-type/follow/follow.vue'
import Demand from './cus-detail-type/demand/demand.vue'
import Payment from './cus-detail-type/payment/payment.vue'
import Service from './cus-detail-type/service/service.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    Radar,
    Follow,
    Demand,
    Payment,
    Service
  },
  data() {
    return {
      tabIndex: 1,
      showMoreAction: false,
      moreActionList: [{
          text: '操作日志'
        },
        {
          text: '转交客户'
        },
        {
          text: '删除客户'
        }
      ],
      cusInfo: {},
      tabShow0: false,
      tabShow1: false,
      tabShow2: false,
      tabShow3: false,
      tabShow4: false,
      showDelCustomer: false,
      // 跟进
      followList: [],
      followPage: 1,
      followAll: false,
      // 需求
      demandList: [],
      demandPage: 1,
      demandAll: false,
      // 收付款数据
      paylist: [],
      paymentOffset: 0,
      paymentAll: false,
      // 服务单数据
      serviceList: [],
      serviceOffset: 0,
      serviceAll: false,
    }
  },
  onLoad() {
    if (this.cusDetailTabIndex) {
      this.tabIndex = this.cusDetailTabIndex
      this['tabShow' + this.tabIndex] = true
    }
    this.getCusInfo()
    switch(this.tabIndex) {
      case 0:
        break;
      case 1:
        this.getFollowList()
        break;
      case 2:
        this.getDemandList()
        break;
      case 3:
        this.getPaymentList()
        break;
      case 4:
        this.getServiceList()
        break;
      default: return false
    }
  },
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      cusDetailTabIndex: state => state.customer.cusDetailTabIndex,
      lastPath: state => state.lastPath
    })
  },
  onPullDownRefresh() {
    // this.pageIndex = 1;
    
    // // 重置 loadAll 状态
    // this.loadAll = false;
    
    // // 清空当前数据
    // this.listData = [];
    
    // // 查询列表数据
    // this.queryListData();
    
    // // 停止下拉刷新
    // uni.stopPullDownRefresh();
  },
  onReachBottom() {
    switch(this.tabIndex) {
      case 0:
        break;
      case 1:
        if (!this.followAll) {
          this.getFollowList()
        }
        break;
      case 2:
        if (!this.demandAll) {
          this.getDemandList()
        }
        break;
      case 3:
        if (!this.paymentAll) {
          this.getPaymentList()
        }
        break;
      case 4:
        if (!this.serviceAll) {
          this.getServiceList()
        }
        break;
      default: return false
    }
  },
  methods: {
    ...mapMutations(['setCusInfo', 'setTabIndex', 'setLastPath']),
    getFollowList() {
      let data = {
        customerId: this.cusId,
        type: 'FOLLOW',
        limit: 5,
        page: this.followPage
      }
      this.$u.api.getAllLog(data).then(res => {
        let arr = res.records.filter(item => {
          return item.openLogs.length != 0
        }) 
        
        arr.forEach(item => {
          this.followList.push(item)
        })
        
        this.followPage += 1
        if (res.pages != 0) {
          if (this.followPage > res.pages) {
            this.followAll = true
          }
        }
      })
    },
    getDemandList() {
      let data = {
        limit: 5,
        page: this.demandPage,
        customerId: this.cusId
      }
      this.$u.api.getCusDemand(data).then(res => {
        res.records.forEach(item => {
          this.demandList.push(item)
        })
        this.demandPage += 1
        if (res.pages != 0) {
          if (this.demandPage > res.pages) {
            this.demandAll = true
          }
        }
      })
    },
    getPaymentList() {
      let data = {
        limit: 5,
        offset: this.paymentOffset, 
        customerId: this.cusId,
      }
      this.$u.api.getCollect(data).then(res => {
        res.data.forEach(item => {
          this.paylist.push(item)
        })
        this.paymentOffset += 5
        if (res.total != 0) {
          if (this.paymentOffset > res.total) {
            this.paymentAll = true
          }
        }
      })
    },
    getServiceList() {
      let data = {
        customerId: this.cusId,
        limit: 5,
        offset: this.serviceOffset
      }
      this.$u.api.getService(data).then(res => {
        res.data.forEach(item => {
          this.serviceList.push(item)
        })
        this.serviceOffset += 5
        if (res.total != 0) {
          if (this.serviceOffset >= res.total) {
            this.serviceAll = true
          }
        }
      })
    },
    changeTabIndex(i) {
      switch(i) {
        case 0:
          break;
        case 1:
          if (!this['tabShow' + i]) {
            this.getFollowList()
          }
          break;
        case 2:
          if (!this['tabShow' + i]) {
            this.getDemandList()
          }
          break;
        case 3:
          if (!this['tabShow' + i]) {
            this.getPaymentList()
          }
          break;
        case 4:
          if (!this['tabShow' + i]) {
            this.getServiceList()
          }
          break;
        default: return false
      }
      
      this.tabIndex = i
      this.setTabIndex({type: 'cusDetailTabIndex', value: i})
      this['tabShow' + i] = true
    },
    getCusInfo() {
      this.$u.api.selectCusInfo({id: this.cusId}).then(res => {
        this.cusInfo = res
        this.setCusInfo(res)
        this['tabShow' + this.tabIndex] = true
      })
    },
    selectAction(index) {
      if (index == 0) {
        uni.navigateTo({
          url: '/pages/customer/handleLog'
        })
      }
      if (index == 2) {
        this.showDelCustomer = true
      }
    },
    delCus() {
      this.$u.api.delCustomer({id: this.cusId}).then(res => {
        uni.redirectTo({
          url: '/pages/customer/index'
        })
      })
    },
    goCusInfo() {
      uni.navigateTo({
        url: '/pages/customer/cusInfo'
      })
    },
    goEditCus() {
      let routes =  getCurrentPages();
      let currPage = routes[routes.length - 1].route
      this.setLastPath(currPage)
      uni.redirectTo({
        url: '/pages/customer/editCus'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .customer-detail-page {
    width: 100%;
    min-height: 100vh;
    background: #f8f8f8;

    .bgc {
      height: 7.06667rem;
      background-color: #3975c5;
    }

    .bgc-line-gra {
      background: linear-gradient(180deg, #3975c5, rgba(57, 117, 197, 0));
      height: 1.866667rem;
      margin-top: -.026667rem;
    }
  }

  .user-info {
    height: 2.213333rem;
    padding: 0 .293333rem;
    margin-top: -8.93333rem;

    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 12px;

      .img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .user-info-right {
      font-size: .32rem;
      height: 1.333333rem;
      box-sizing: border-box;
      color: #fff;
      padding: .106667rem 0 .133333rem;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      .user-info-name {
        font-size: .426667rem;
        font-weight: 500;
        line-height: 1;

        text {
          font-size: .426667rem;
          font-weight: 500;
          line-height: 1;
          margin-left: 4.5px;
        }
      }

      .user-info-action {
        color: hsla(0, 0%, 100%, .6);

        text {
          color: hsla(0, 0%, 100%, .6);
        }

        .ver-line-split {
          width: .026667rem;
          height: .293333rem;
          background-color: #a6ccff;
          margin: 0 .266667rem;
          transform: scaleX(.5);
        }
      }
    }
  }

  .money {
    width: 100%;

    .price-follow-container {
      margin: 0 .293333rem;
      border-radius: .106667rem;
      background-color: #5e97e3;
      display: flex;
      align-items: center;
      height: 2rem;
      font-size: .32rem;
      color: #fff;
      font-weight: 500;

      .price {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .price-top {
          margin-bottom: .373333rem;
          font-weight: 500;
        }
      }
    }
  }

  .tabs {
    padding: .4rem .293333rem;
    color: hsla(0, 0%, 100%, .5);

    .tab-item {
      position: relative;
    }

    .tabs-active {
      color: #fff;
      font-weight: 500;
    }
  }

  .wx-phone {
    width: 3.84rem;
    height: 1.413333rem;
    background: linear-gradient(90deg, #3a82e2, #5688ff);
    border-radius: .72rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .32rem;
    color: #fff;
    padding: 0 .266667rem;
    box-sizing: border-box;

    position: fixed;
    right: 0;
    bottom: 1.333333rem;
    transform: translateX(-.293333rem);
    z-index: 8;

    .wx,
    .phone {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
    }

    .img {
      width: .533333rem;
      height: .533333rem;
      margin-bottom: .053333rem;
    }

    .text {
      line-height: .453333rem;
    }

    .text-deactive {
      color: hsla(0, 0%, 100%, .6);
    }
  }


  .van-list__finished-text {
    color: #969799;
    font-size: .373333rem;
    line-height: 1.333333rem;
    text-align: center;
  }

  .van-list__placeholder {
    height: 3rem;
    pointer-events: none;
  }
  
  .bgc-follow {
    height: 10.1333rem !important;
  }
  .user-info-follow {
    margin-top: -12rem !important;
  }
</style>

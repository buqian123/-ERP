<template>
  <!-- 需求详情 -->
  <view class="wrap" v-if="load">
    <view class="base-info">
      <view class="base-info-title">
        <text>基本信息</text>
        <view class="edit-btn">
          <view class="text">编辑</view>
          <view class="border"></view>
        </view>
      </view>
      <view class="base-info-item" style="padding-top: 0;">
        <view class="item-title">需求品牌</view>
        <view class="desc">{{demandInfo.demandType}}</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">需求类型</view>
        <view class="desc">{{demandInfo.demandName}}</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">关联客户</view>
        <view class="desc flex-jsac">
          <text class="wx">微信</text>
          <view class="v-line"></view>
          <view class="cus">{{demandInfo.relationId}}</view>
        </view>
      </view>
      <view class="base-info-item">
        <view class="item-title">客户关键信息</view>
        <view class="desc" v-if="demandInfo.keyMessage">
          <view>{{demandInfo.keyMessage.productName}}</view>
          <view>{{demandInfo.keyMessage.productType}}</view>
          <view>{{demandInfo.keyMessage.address}}</view>
        </view>
      </view>
      <view class="base-info-item">
        <view class="item-title">关联介绍人</view>
        <view class="desc">{{demandInfo.introducerId + '(' + demandInfo.demandFollowPeople + '对接)'}}</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">竞争对手</view>
        <view class="desc">{{demandInfo.competitor}}</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">预估金额</view>
        <view class="desc">{{demandInfo.predictMoney}}</view>
      </view>
      <view class="more-info" v-if="moretype == true">
        <view class="base-info-item">
          <view class="item-title">备注</view>
          <view class="desc">{{demandInfo.remarks}}</view>
        </view>
        <view class="base-info-item">
          <view class="item-title">需求跟进人</view>
          <view class="desc">{{demandInfo.demandFollowPeople}}</view>
        </view>
        <view class="base-info-item">
          <view class="item-title">{{demandInfo.demandPushPeople}}</view>
          <view class="desc"></view>
        </view>
        <view class="base-info-item">
          <view class="item-title">{{demandInfo.demandSharePeople}}</view>
          <view class="desc"></view>
        </view>
      </view>
      <view class="base-info-item flex-bet" @tap="showMore">
        <view class="item-title">{{moretype == false ? '更多' : '收起'}}</view>
        <u-icon class="desc" name="arrow-down" v-if="!moretype"></u-icon>
        <u-icon class="desc" name="arrow-up" v-if="moretype"></u-icon>
      </view>
    </view>
    <!-- 操作 -->
    <view class="action flex-jsac">
      <view class="action-item" @tap="star.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text star">{{demandInfo.star || 0}}星</view>
        <u-select v-model="star.show" :list="star.list" @confirm="confirm"></u-select>
      </view>
      <view class="action-item" @tap="level.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text">级别：{{demandInfo.majorLevel || '暂无'}}</view>
        <u-select v-model="level.show" :list="level.list"></u-select>
      </view>
      <view class="action-item" @tap="status.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text" v-if="demandInfo.followState == 0">跟进中</view>
        <view class="text" v-if="demandInfo.followState == 1">已签约</view>
        <view class="text" v-if="demandInfo.followState == 2">已交付</view>
        <view class="text" v-if="demandInfo.followState == 3">已流失</view>
        <u-select v-model="status.show" :list="status.list"></u-select>
      </view>
      <view class="action-item">
        <image src="/static/status1.png" class="img"></image>
        <view class="text">服务群</view>
      </view>
      <view class="action-item" @tap="showMoreAction = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text more">更多</view>
        <view style="color: #000000;">
          <u-action-sheet :list="moreActionList" v-model="showMoreAction" @tap="selectAction" :cancel-btn="true">
          </u-action-sheet>
        </view>
      </view>
    </view>
    
    <!-- tabs -->
    <view class="sale-tabs">
      <view class="sale-tabs-item" :class="{cur: saleTab == 0}" @tap="saleTab = 0">雷达</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 1}" @tap="saleTab = 1">跟进</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 2}" @tap="saleTab = 2">签单</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 3}" @tap="saleTab = 3">收款</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 4}" @tap="saleTab = 4">服务</view>
    </view>
    
    <radar v-if="saleTab == 0"></radar>
    <follow v-if="saleTab == 1"></follow>
    <signing v-if="saleTab == 2"></signing>
    <payment v-if="saleTab == 3"></payment>
    <serivce v-if="saleTab == 4"></serivce>

  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Radar from './demand-detail-type/radar/index.vue'
import Follow from './demand-detail-type/follow/index.vue'
import Signing from './demand-detail-type/signing/index.vue'
import Payment from './demand-detail-type/payment/index.vue'
import Serivce from './demand-detail-type/service/index.vue'
export default {
  components: {
    Radar,
    Follow,
    Signing,
    Payment,
    Serivce
  },
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      demandId: state => state.customer.demandId
    })
  },
  data() {
    return {
      demandInfo: {},
      moretype: false,
      star: {
        show: false,
        list: [
          { label: '0星', value: 0 },{ label: '0.5星', value: 0.5 },
          { label: '1星', value: 1 },{ label: '1.5星', value: 1.5 },
          { label: '2星', value: 2 },{ label: '2.5星', value: 2.5 },
          { label: '3星', value: 3 },{ label: '3.5星', value: 3.5 },
          { label: '4星', value: 4 },{ label: '4.5星', value: 4.5 },
          { label: '5星', value: 5 }
        ]
      },
      level: {
        show: false,
        list: [
          { label: 'A类', value: 0 },{ label: 'B类', value: 1 },
          { label: 'C类', value: 2 },{ label: 'D类', value: 3 },
        ]
      },
      status: {
        show: false,
        list: [
          { label: '跟进中', value: 0 },{ label: '已签约', value: 1 },
          { label: '已交付', value: 2 },{ label: '已流失', value: 3 }
        ]
      },
      showMoreAction: false,
      moreActionList: [
        { text: '操作日志' }, { text: '转交需求' }, { text: '删除需求' }
      ],
      saleTab: 2,
      load: false
    }
  },
  onLoad() {
    this.getDemandInfo()
  },
  methods: {
    async getDemandInfo() {
      await this.$u.api.getDemandInfoById({id: this.demandId}).then(res => {
        this.demandInfo = res
        this.load = true
      })
    },
    addFollow() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/follow/addFollow'
      })
    },
    showMore() {
      this.moretype = !this.moretype
    },
    selectAction(index) {
      console.log(index);
    },
    confirm(e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  box-sizing: border-box;
  overflow-y: auto;
}

.base-info {
  background-color: #fff;
  padding: 0 .293333rem;
  flex-shrink: 0;
  box-shadow: 0 .026667rem .346667rem 0 rgba(0, 0, 0, .04);
  z-index: 9;

  .base-info-title {
    font-size: .426667rem;
    line-height: .613333rem;
    color: #262626;
    padding: .586667rem 0;
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    .edit-btn {
      position: relative;
      margin-left: .266667rem;
      height: 29px;
      display: flex;
      align-items: center;
      padding: 0px 13px;

      .text {
        font-size: 12px;
        color: rgb(38, 38, 38);
        font-weight: 400;
      }

      .border {
        -webkit-transform: scale(.5);
        transform: scale(.5);
        position: absolute;
        border: .026667rem solid rgb(204, 204, 204);
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-radius: 43px;
      }
    }
  }

  .base-info-item {
    display: flex;
    font-size: .346667rem;
    align-items: center;
    padding: .24rem 0;

    .item-title {
      flex-shrink: 0;
      width: 2.133333rem;
      color: #7b7b7b;
      margin-right: .586667rem;
      line-height: .506667rem;
    }

    .desc {
      color: #262626;
      word-break: break-all;

      .wx {
        color: rgb(57, 117, 197);
      }

      .v-line {
        height: .366667rem;
        width: .026667rem;
        background-color: #8eb2e1;
        margin: .026667rem .266667rem 0;
        // transform: translateY(-.053333rem);
      }

      .cus {
        max-width: 2rem;
        margin-right: .106667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
.action {
  background-color: #fff;
  border-radius: .106667rem;
  padding: .64rem 0;
  flex-shrink: 0;
  .action-item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .img {
      width: .666667rem;
      height: .666667rem;
      margin-bottom: .24rem;
    }
    .text {
      font-size: .32rem;
      color: rgb(57, 117, 197);
    }
    .star {
      color: rgb(243, 160, 0);
    }
    .more {
      color: #262626;
    }
  }
}
.sale-tabs {
  display: flex;
  padding-left: .32rem;
  padding-bottom: .08rem;
  background-color: #fff;
  flex-shrink: 0;
  
  .sale-tabs-item {
    text-align: center;
    font-size: .32rem;
    color: #262626;
    margin-right: .64rem;
    line-height: .453333rem;
    height: .453333rem;
  }
  .cur {
    font-weight: 500;
    position: relative;
    line-height: .453333rem;
    height: .453333rem;
    
    &::after {
      content: "";
      position: absolute;
      bottom: -.053333rem;
      left: .133333rem;
      right: .133333rem;
      height: .053333rem;
      border-radius: .026667rem;
      background-color: #fd8517;
    }
  }
}
  
</style>

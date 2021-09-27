<template>
  <view class="signing">
    <view class="follow-btn-ul" v-if="!signInfo.signPeople">
      <view class="follow-btn-item" @tap="addSign">
        <text class="add-follow-text">新增签单</text>
        <image src="/static/add-follow.png" class="add-follow-icon"></image>
      </view>
    </view>
    <view class="line-ver-gradint"></view>
    <view class="list-box">
      <view class="header">签单</view>
      <view class="desc">签单人：{{signInfo.signPeople}}</view>
      <view class="desc">签单日期：{{signInfo.signTime}}</view>
      <view class="desc">关联活动：无 </view>
      <view class="price flex-bet">
        <view class="price-item">
          <view class="num">{{signInfo.contractMoney}}</view>
          <view class="price-desc">合同金额</view>
        </view>
        <view class="price-item">
          <view class="num">{{signInfo.collectionMoney}}</view>
          <view class="price-desc">已收金额</view>
        </view>
        <view class="price-item">
          <view class="num">{{signInfo.treatMoney}}</view>
          <view class="price-desc">待手金额</view>
        </view>
      </view>
      <view class="edit flex-jeac" @tap="editSign">
        <image src="/static/edit-price.png" class="img"></image>
        修改
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      demandId: state => state.customer.demandId
    })
  },
  data() {
    return {
      signInfo: {}
    }
  },
  created() {
    this.getSignInfo()
  },
  methods: {
    getSignInfo() {
      this.$u.api.getSignList({demandId: this.demandId}).then(res => {
        this.signInfo = res
      })
    },
    addSign() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/signing/addSign'
      })
    },
    editSign() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/demand-detail/demand-detail-type/signing/editSign?id=' + this.signInfo.signId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .signing {
    padding: 0px 11px;

    .list-box {
      background-color: #fff;
      padding: .293333rem;
      border-radius: .106667rem;
      margin-bottom: .266667rem;

      .header {
        font-weight: 500;
        line-height: .533333rem;
        font-size: .373333rem;
        color: #262626;
      }

      .desc {
        margin-top: .16rem;
        line-height: .453333rem;
        color: #7b7b7b;
        font-size: .32rem;
      }

      .price {
        margin-top: .266667rem;

        .price-item {
          background-color: #ecf4ff;
          border-radius: .106667rem;
          padding-top: .24rem;
          padding-bottom: .266667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 31.5%;

          .num {
            line-height: .666667rem;
            font-size: .48rem;
            color: #3975c5;
            font-weight: 600;
            margin-bottom: .16rem;
          }

          .price-desc {
            font-size: .293333rem;
            color: #3975c5;
          }
        }
      }

      .edit {
        color: #999;
        font-size: .32rem;
        margin-top: .346667rem;

        .img {
          height: 13px;
          width: 13px;
          margin-right: 4px;
        }
      }
    }
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
</style>

<template>
  <view class="wrap">
    <view class="header flex-bet">
      <view class="header-name">{{cusInfo.userName}}</view>
      <view class="scale-border" @tap="goEditCus">
        <view class="text">编辑资料</view>
        <view class="border"></view>
      </view>
    </view>
    <view class="info-item">
      <view class="info-item-left">微信昵称：</view>
      <view class="info-item-right">{{cusInfo.wechatName}}</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">联系方式：</view>
      <view class="info-item-right">
        <view v-for="item in cusInfo.mobile">{{item.remarks + '-' + item.mobile}}</view>
      </view>
    </view>
    <view class="info-item">
      <view class="info-item-left">客户来源：</view>
      <view class="info-item-right">{{cusInfo.customerSource}}</view>
    </view>
    <view class="info-item">
      <view class="info-item-left">省市区：</view>
      <view class="info-item-right">{{cusInfo.address}}</view>
    </view>
    <view v-for="item in cusInfo.keyMessages">
      <view class="line"></view>
      <view class="info-header">关键信息</view>
      <view class="imp-item">
        <view class="info-item" >
          <view class="info-item-left">产品名称：</view>
          <view class="info-item-right">{{item.productName}}</view>
        </view>
        <view class=info-item>
          <view class="info-item-right">产品类型：</view>
          <view class="info-item-right">{{item.productType}}</view>
        </view>
        <view class="info-item">
          <view class="info-item-right">地址：</view>
          <view class="info-item-right">{{item.address}}</view>
        </view>
        <view class="line" style="margin-top: 12px;"></view>
      </view>
    </view>
    <view class="info-header">其他信息</view>
    <view>
      <view class="info-item">
        <view class="info-item-left">性别：</view>
        <view class="info-item-right">{{cusInfo.sex}}</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">年龄：</view>
        <view class="info-item-right">{{cusInfo.age}}</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">生日：</view>
        <view class="info-item-right">{{cusInfo.birthday}}</view>
      </view>
      <view class="info-item">
        <view class="info-item-left">用户简介：</view>
        <view class="info-item-right">{{cusInfo.introduce}}</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusInfo: state => state.customer.cusInfo
    })
  },
  data() {
    return {

    }
  },
  onLoad() {
    // this.getCusInfo()
  },
  methods: {
    ...mapMutations(['setLastPath']),
    getCusInfo() {
      // this.$u.api.selectCusInfo({id: this.cusId}).then(res => {
      //   this.cusInfo = res
      //   console.log(this.cusInfo);
      // })
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
  .wrap {
    padding: 0 .293333rem 0 .533333rem;
    background-color: #fff;
    height: 100%;
    color: #262626;
    font-size: .346667rem;
    
    .header {
      padding: .586667rem 0 .533333rem;
      .header-name {
        font-size: .613333rem;
        font-weight: 500;
        line-height: .88rem;
      }
      .scale-border {
        position: relative;
        padding: 0 .133333rem;
        .text {
          color: rgb(38, 38, 38);
          font-size: 12px;
          padding: 7px 13px;
        }
        .border {
          transform: scale(.5);
          position: absolute;
          border: .026667rem solid rgb(204, 204, 204);
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 26px;
        }
      }
    }
    .info-item {
      margin-top: .22rem;
      display: flex;
      .info-item-left {
        line-height: .506667rem;
        flex-shrink: 0;
      }
      .info-item-right {
        line-height: .506667rem;
      }
    }
    .line {
      height: .026667rem;
      transform: scaleY(.5);
      background-color: #f0f0f0;
      width: 100%;
      margin-top: 20px;
    }
    .info-header {
      font-size: .426667rem;
      font-weight: 500;
      padding: .32rem 0 .32rem;
      position: relative;
      
      &::after {
        position: absolute;
        content: "";
        left: -.32rem;
        top: 50%;
        transform: translateY(-50%);
        width: .133333rem;
        height: .133333rem;
        border-radius: 50%;
        background-color: #3975c5;
      }
    }
  }
</style>

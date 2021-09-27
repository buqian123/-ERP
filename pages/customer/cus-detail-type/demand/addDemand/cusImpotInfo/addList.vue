<template>
  <view class="input-info">
    <view class="input-list">
      <view class="input-title" style="padding-left: .213333rem;">
        产品名称
      </view>
      <view class="input-right">
        <u-input class="input-text" v-model="name" type="text" />
      </view>
    </view>
    
    <view class="input-list">
      <view class="input-title" style="padding-left: .213333rem;">
        产品类型
      </view>
      <view class="input-right" @tap="typeShow = true">
        <view class="input-text">{{type}}</view>
        <image src="/static/arrow-right-img.png" class="right-icon"></image>
      </view>
    </view>
    
    <view class="input-list">
      <view class="input-title" style="padding-left: .213333rem;">
        地址
      </view>
      <view class="input-right">
        <u-input class="input-text" v-model="address" type="text" />
      </view>
    </view>
    
    <u-select v-model="typeShow" :default-value="typeDefaultIndex" :list="productTypeList" @confirm="selectProductType"></u-select>
    <view class="btn-box flex-cen">
      <view class="btn-list flex-cen" @tap="cancel">取消</view>
      <view class="btn-list flex-cen" @tap="submit">提交</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
      typeShow: false,
      type: '',
      typeDefaultIndex: [],
      productTypeList: [
        {value: 0, label: '产品'},{value: 1, label: '硬件'},
        {value: 2, label: '研发'},{value: 3, label: '服务'},
        {value: 4, label: '硬件(毛利)'},{value: 5, label: '服务包'},
        {value: 6, label: '钉钉服务包'},{value: 7, label: '钉钉专业版'},
        {value: 9, label: '钉钉奖励金'}
      ]
    }
  },
  methods: {
    selectProductType(data) {
      this.type = data[0].label
      this.typeDefaultIndex[0] = data[0].value
    },
    submit() {
      let data = {
        productName: this.name,
        productType: this.type,
        address: this.address
      }
      this.$u.api.addCusImportInfo(data).then(res => {
        uni.redirectTo({
          url: '/pages/customer/cus-detail-type/demand/addDemand/cusImpotInfo/list'
        })
      })
    },
    cancel() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.input-title {
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: .426667rem;
  font-weight: 700;
  color: #262626;

  .title-icon {
    color: #dc3131;
  }
}
.input-info {
  width: 100%;
  margin-top: .266667rem;
  background: #fff;

  .input-list {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 1.573333rem;
    border-bottom: .026667rem solid #ebedf0;
    padding: .266667rem;
    color: #323233;
    font-size: .373333rem;
    line-height: .64rem;
    background-color: #fff;
  
    .input-text {
      flex: 1;
      margin-left: .533333rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: .4rem;
      font-weight: 400;
      color: #262626;
    }

    .input-text-cur {
      color: #999;
    }

    .input-right {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      .right-icon {
        width: .32rem;
        height: .32rem;
      }
    }
  }

  .name {
    height: 1.41333rem;
    padding-left: .213333rem;
  }
  
  .share-desc-text {
    padding: .293333rem .293333rem 0;
    font-size: .32rem;
    color: #999;
    line-height: .453333rem;
    padding-bottom: .16rem;
    background: #f8f8f8;
  }
}
.btn-box {
  width: 100%;
  padding: .266667rem 0!important;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  
  .btn-list {
    height: 1.173333rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: .4rem;
    font-weight: 400;
    border-radius: .106667rem!important;
  
    &:first-child {
      width: 3.066667rem;
      color: #7b7b7b;
      background-color: #f8f8f8;
    }
    &:last-child {
      width: 6.08rem;
      color: #fff;
      background: linear-gradient(198deg,#5688ff,#2472d9);
      margin-left: .266667rem;
    }
  }
}
</style>

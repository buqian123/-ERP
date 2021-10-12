<template>
  <view class="add-service-page">
    <view class="add-content">
      <view class="input-title">
        <span class="title-icon">*</span>
        撤销原因详情
      </view>
      <u-field v-model="remark" label="" :label-width="0" :clearable="false"
      placeholder="请输入备注" type="textarea" :auto-height="false" maxlength="1000">
      </u-field>
    </view>
    <view class="btn-box flex-cen">
      <button type="default" class="cancel" @tap="cancel">取消</button>
      <view class="submit" @tap="submit">提交</view>
      <!-- <button type="primary" >提交</button> -->
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      serviceId: state => state.customer.serviceId
    })
  },
  data() {
    return {
      remark: ''
    }
  },
  onLoad() {
    
  },
  methods: {
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    },
    submit() {
      if (this.remark == '') {
        this.$refs.uToast.show({
          title: `请填写撤销原因！`,
          type: 'info'
        })
        return
      }
      this.$u.api.delService({id: this.serviceId}).then(res => {
        uni.redirectTo({
          url: '/pages/customer/cus-detail-type/service/serviceDetail'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-service-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
}
.add-content {
  flex: 1;
  overflow-y: scroll;
}
.input-title {
    height: 1.6rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-size: .426667rem;
    font-weight: 500;
    line-height: 1.6rem;
    color: #262626;
    
    .title-icon {
      color: #dc3131;
      margin-right: .053333rem;
    }
    .w {
      color: #fff !important;
    }
  }
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.013333rem;
  padding-left: .293333rem;
  font-family: PingFangSC-Regular,PingFang SC;
  font-size: .32rem;
  font-weight: 400;
  color: #999;
  background: #f8f8f8;
}
.btn-box {
  width: 100%;
  padding: .266667rem 0;
  background: #fff;
  z-index: 69;
  .cancel {
    width: 3.066667rem;
    height: 1.173333rem;
    text-align: center;
    line-height: 1.173333rem;
    border-radius: .106667rem;
    font-size: .4rem;
    color: #7b7b7b;
    margin: 0;
  }
  .submit {
    width: 6.08rem;
    height: 1.173333rem;
    background: linear-gradient(198deg,#5688ff,#2472d9);
    text-align: center;
    line-height: 1.173333rem;
    border-radius: .106667rem;
    font-size: .4rem;
    color: #fff;
    margin: 0;
    margin-left: .266667rem;
  }
}
</style>

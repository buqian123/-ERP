<template>
  <view class="add-service-page">
    <view class="add-content">
      <view class="title">服务单信息</view>
      <u-field v-model="addForm.serviceType" :disabled="true" label="服务单类型"
        placeholder="请选择" right-icon="arrow-right" :required="true"
        @tap="serviceTypeShow = true">
      </u-field>
      <u-select v-model="serviceTypeShow" title="选择服务单类型" :list="serviceTypeList" @confirm="selectSlowType"></u-select>
      
      <view class="service-time flex-bet">
        <view class="left">预约服务时间</view>
        <view class="right">
          <datetime-picker
            style="width: 90%;"
          	placeholder="请选择"
          	:start="startTime"
          	end="2050-01-01 23:59"
          	fields="minute"
          	@change="selectServiceTime"
          ></datetime-picker>
          <image src="/static/arrow-right-img.png" class="right-icon"></image>
        </view>
      </view>
      
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
      startTime: '',
      addForm: {
        id: '',
        customerId: '',
        customerName: '',
        demandId: '',
        dispatchVos: {
          servicePeople: 'ZhengYu',
          dispatchRemarks: '',
          dispatchPeople: '',
          dispatchDate: '',
          imgUrl: [],
          enclosure: []
        },
        serviceType: '',
        serviceTime: '', 
        createTime: ''
      },
      serviceTypeShow: false,
      serviceTypeList: [],
      serviceTimeShow: false,
      timeParams: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true
      },
      fileList: [],
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      },
      serviceInfo: {}
    }
  },
  onLoad() {
    this.startTime = this.$u.timeFormat(+new Date(), 'yy-mm-dd hh:MM')
    this.getOptions('4')
    this.$u.api.getServiceInfo({id: this.serviceId}).then(res => {
      for (let i in this.addForm) {
        this.addForm[i] = res[i]
      }
      this.addForm.id = this.serviceId
    })
  },
  methods: {
    getOptions(type) {
      this.$u.api.getOptionList({type: type}).then(res => {
        res.records.forEach(item => {
          let obj = {
            value: item.id,
            label: item.typeName
          }
          this.serviceTypeList.push(obj)
        })
      })
    },
    selectSlowType(data) {
      this.addForm.serviceType = data[0].label
    },
    selectServiceTime(date) {
      this.addForm.serviceTime = date.data
    },
    cancel() {
      
    },
    submit() {
      this.$u.api.editService(this.addForm).then(res => {
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

.service-time {
  font-size: 14px;
  padding: 10px 14px;
  text-align: left;
  position: relative;
  color: #303133;
  line-height: .64rem;
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .left {
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-left: .16rem;
    font-size: .426667rem;
    font-weight: 500;
    line-height: .613333rem;
    color: #262626;
    width: auto !important;
    word-wrap: break-word;
    margin-right: .32rem;
    flex: none !important;
  }
  .right {
    position: relative;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
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
</style>

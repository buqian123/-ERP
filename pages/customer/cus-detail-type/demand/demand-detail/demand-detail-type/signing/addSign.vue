<template>
  <view class="add-sign-form">
    <view class="sign-content">
      <view class="top-title">基础信息</view>
      <u-form :model="addSignForm" ref="addFormRef">
        <u-field v-model="addSignForm.customerName" :disabled="true" 
          label="客户名称" placeholder="请选择" :required="true">
        </u-field>
        <u-field v-model="addSignForm.signPeople" :disabled="true"
          label="签单人" placeholder="请选择" right-icon="arrow-right" 
          :required="true" @tap="$refs.signPeopleRef.open()">
        </u-field>
        
        <uni-drawer ref="signPeopleRef" mode="right" :mask-click="true" :width="320">
          <view class="drawer-title">签单人</view>
          <view class="drawer-search">
            <u-search placeholder="请输入员工姓名" v-model="searchSignPeople" :show-action="false"></u-search>
          </view>
        </uni-drawer>
        
        <u-field v-model="addSignForm.signTime" :disabled="true"
          label="签单时间" placeholder="请选择" right-icon="arrow-right" 
          :required="true" @tap="signTimeShow = true">
        </u-field>
        
        <u-picker mode="time" v-model="signTimeShow" :params="timeParams" title ="选择时间" @confirm="selectSignTime"></u-picker>
        
        
        <u-field v-model="addSignForm.contractMoney" label="合同金额" :clearable="false" 
        placeholder="合同金额" :required="true">
        </u-field>
        <u-field v-model="addSignForm.activity" :disabled="true"
          label="关联活动" placeholder="关联活动" right-icon="arrow-right">
        </u-field>
   
      </u-form>
      
      <view class="btn-more" @tap="moreFill = !moreFill">
        {{moreFill ? '取消填写已收款信息' : '填写已收款信息'}}
        <u-icon class="arrow" :name="moreFill ? 'arrow-up' : 'arrow-down'"></u-icon>
      </view>
      
      <view v-if="moreFill">
        <view class="top-title">收款信息</view>
        <u-form :model="paymentForm" ref="paymentFormRef">
          <u-field v-model="paymentForm.slowPeople" :disabled="true"
            label="收款人" placeholder="收款人" right-icon="arrow-right" 
            :required="true">
          </u-field>
          
          <uni-drawer ref="signPeopleRef" mode="right" :mask-click="true" :width="320">
            <view class="drawer-title">收款人</view>
            <view class="drawer-search">
              <u-search placeholder="请输入员工姓名" v-model="searchSignPeople" :show-action="false"></u-search>
            </view>
          </uni-drawer>
          
          <u-field v-model="paymentForm.slowType" :disabled="true"
            label="收款类型" placeholder="收款类型" right-icon="arrow-right" 
            :required="true" @tap="slowTypeShow = true">
          </u-field>
          
          <!-- <u-field v-model="paymentForm" :disabled="true"
            label="关联营销云订单" placeholder="关联营销云订单" right-icon="arrow-right" 
            :required="true">
          </u-field> -->
          
          <u-select v-model="slowTypeShow" :list="slowTypeList" @confirm="selectSlowType"></u-select>
          
          <u-field v-model="paymentForm.money" label="收款金额" :clearable="false"
            placeholder="收款金额" :required="true">
          </u-field>
          
          <u-field v-model="settlementMethodText" :disabled="true"
            label="结算方式" placeholder="结算方式" right-icon="arrow-right" 
            :required="true" @tap="settlementMethodShow = true">
          </u-field>
          
          <u-select v-model="settlementMethodShow" :list="settlementMethodList" @confirm="selectPayMethod"></u-select>
          
          <u-field v-model="paymentForm.slowTime" :disabled="true"
            label="收款时间" placeholder="收款时间" right-icon="arrow-right" 
            :required="true" @tap="slowTimeShow = true">
          </u-field>
          
          <u-picker mode="time" v-model="slowTimeShow" :params="timeParams" title ="选择收款时间" @confirm="selectSlowTimeShow"></u-picker>
          
          <view class="content-box">
            <view class="input-title">备注</view>
            <u-field v-model="paymentForm.remarks" label="" :label-width="0" :clearable="false"
            placeholder="请输入备注" type="textarea" :auto-height="false" maxlength="1000">
            </u-field>
          </view>
          
          <view class="upload-box">
            <view class="input-title">图片</view>
            <view class="upload">
              <u-upload ref="imgUpload" :header="uploadImgHeader" :action="uploadUrl"
              del-icon="close" del-bg-color="#3975C5" del-color="#ffffff" :show-progress="false"
              :before-remove="beforeUpload"></u-upload>
            </view>
          </view>
        </u-form>
      </view>
    </view>
    <view class="btn-box flex-cen">
      <button type="default" class="cancel" @tap="cancel">取消</button>
      <button type="primary" class="submit" @tap="submit">提交</button>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      demandId: state => state.customer.demandId,
      cusId: state => state.customer.cusId,
      uploadUrl: state => state.uploadUrl,
      lastPath: state => state.lastPath
    })
  },
  data() {
    return {
      addSignForm: {
        demandId: '',
        customerId: '',
        customerName: '张三',
        signPeople: 'ZhengYu',
        signTime: '',
        contractMoney: '', // 合同总金额
        activity: '123' , // 关联活动Id
      },
      moreFill: false,
      searchSignPeople: '',
      signTimeShow: false,
      timeParams: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true
      },
      paymentForm: {
        customertId: '',
        demandId: '',
        distinguish: '0',
        slowPeople: 'ZhengYu',
        slowType: '',
        money: '',
        settlementMethod: '',
        slowTime: '',
        remarks: '',
        imgUrl: []
      },
      slowTypeShow: false,
      slowTypeList: [
        {value: 0,label: '定金'},
        {value: 0,label: '回款'},
        {value: 0,label: '尾款'},
        {value: 0,label: '全款'},
        {value: 0,label: '其他'}
      ],
      settlementMethodShow: false,
      settlementMethodText: '',
      settlementMethodList: [
        {value: 0,label: '微信'},
        {value: 1,label: '支付宝'},
        {value: 2,label: '现金'},
        {value: 3,label: 'POS'},
        {value: 4,label: '银行转账'},
        {value: 5,label: '内部调账'},
        {value: 6,label: '支票'},
        {value: 7,label: '其他'}
      ],
      slowTimeShow: false,
      imgList: [],
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      }
    }
  },
  methods: {
    selectSignTime(data) {
      this.addSignForm.signTime = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}:${data.second}`
    },
    selectSlowType(data) {
      this.paymentForm.slowType = data[0].label
    },
    // 选择支付方式
    selectPayMethod(data) {
      this.settlementMethodText = data[0].label
      this.paymentForm.settlementMethod = data[0].value
    },
    selectSlowTimeShow(data) {
      this.paymentForm.slowTime = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}:${data.second}`
    },
    cancel() {
      uni.navigateBack({
        delta: 1
      })
    },
    beforeUpload(index, list) {
      this.$u.api.delUploadFile({fileName: list[index].file.name}).then(res => {
        
      })
    },
    submit() {
      // 验证必填
      let rule = {
        '客户名称': this.addSignForm.customerName,
        '签单人': this.addSignForm.signPeople,
        '签单时间': this.addSignForm.signTime,
        '合同金额': this.addSignForm.contractMoney
      }
      for (let i in rule) {
        if (rule[i] === '') {
          this.$refs.uToast.show({
            title: `请输入${i}`,
            type: 'info'
          })
          return
        }
      }
      if (Number(this.addSignForm.contractMoney) === NaN) {
        this.$refs.uToast.show({
          title: `合同金额请输入纯数字`,
          type: 'info'
        })
        return
      }
      
      
      this.addSignForm.demandId = this.demandId
      this.addSignForm.customerId = this.cusId
      
      if (this.moreFill) {
        
        let payRule = {
          '收款人': this.paymentForm.slowPeople,
          '收款类型': this.paymentForm.slowType,
          '收款金额': this.paymentForm.money,
          '结算方式': this.paymentForm.settlementMethod,
          '收款时间': this.paymentForm.slowTime
        }
        for (let i in payRule) {
          if (payRule[i] === '') {
            console.log(payRule[i]);
            this.$refs.uToast.show({
              title: `请输入${i}`,
              type: 'info'
            })
            return
          }
        }
        
        if (Number(this.paymentForm.money) === NaN ) {
          this.$refs.uToast.show({
            title: `收款金额请输入纯数字`,
            type: 'info'
          })
          return
        }
        
        // 获取上传的图片的路径
        this.paymentForm.imgUrl = []
        let files = []
        files = this.$refs.imgUpload.lists.filter(val => {
          return val.progress == 100;
        })
        files.forEach(item => {
          this.paymentForm.imgUrl.push(item.response.data.url)
        })
        
        this.paymentForm.demandId = this.demandId
        this.paymentForm.customertId = this.cusId
        
        this.$u.api.addSign(this.addSignForm).then(res => {
          this.$u.api.addTransact(this.paymentForm).then(res => {
            // uni.navigateBack({
            //   delta: 1
            // })
            uni.redirectTo({
              url: '/' + this.lastPath
            })
          })
        })
      } else {
        this.$u.api.addSign(this.addSignForm).then(res => {
          // uni.navigateBack({
          //   delta: 1
          // })
          uni.redirectTo({
            url: '/' + this.lastPath
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.u-field {
  padding: .426667rem .266667rem;
  font-size: .373333rem;
  line-height: .64rem;
  background-color: #fff;
  display: flex;
  width: 100%;

  ::v-deep .u-field-inner {
    width: 100%;
  }
  ::v-deep .u-label  {
    margin-left: .16rem;
    font-size: .426667rem;
    font-weight: 500;
    line-height: .613333rem;
    color: #262626;
    width: auto;
    text-align: left;
    word-wrap: break-word;
    margin-right: .32rem;
    flex: none !important;
  }
  ::v-deep .fild-body {
    position: relative;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
  }
  
  ::v-deep .uni-input-wrapper {
    font-size: .4rem;
    color: #262626;
    cursor: pointer;
  }
  
  ::v-deep .uni-input-input {
    font-size: .4rem !important;
    color: #262626 !important;
    font-weight: 500;
  }
  ::v-deep .uni-textarea-textarea {
    font-size: .4rem !important;
    color: #262626 !important;
    font-weight: 500;
  }
}
  
  
  
.add-sign-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
}

.sign-content {
  flex: 1;
  overflow-y: scroll;
}

.top-title {
  padding: 0 .293333rem;
  font-size: .373333rem;
  font-weight: 400;
  line-height: 1.013333rem;
  color: #999;
  background: #f5f5f5;
}

.btn-more {
  height: 1.333333rem;
  font-size: .373333rem;
  font-weight: 400;
  line-height: 1.333333rem;
  color: #7b7b7b;
  text-align: center;
  background: #fff;
  margin-top: .266667rem;
  
  .arrow {
    margin-left: .166667rem;
  }
}
.drawer-title {
  font-size: .4rem;
  line-height: .56rem;
  color: #262626;
  font-weight: 500;
  padding: .586667rem .266667rem;
  flex-shrink: 0;
  background-color: #fff;
  text-align: center;
}
.drawer-search {
  padding: 0 .266667rem;
  box-sizing: border-box;
  background-color: #fff;
}

.content-box {
  box-sizing: border-box;
  padding-top: .48rem;
  background: #fff;
}
.input-title {
  padding-left: .506667rem;
  font-family: PingFangSC-Medium,PingFang SC;
  font-size: .426667rem;
  font-weight: 500;
  line-height: .613333rem;
  color: #262626;
}
.upload-box {
  width: 100%;
  padding: .586667rem .293333rem .266667rem .293333rem;
  background: #fff;

  .upload {
    padding-left: .213333rem;
    margin-top: .53333rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
}

.btn-box {
  width: 100%;
  padding: .266667rem 0;
  background: #fff;
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

<template>
  <view class="edit-sign-form">
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
      cusId: state => state.customer.cusId
    })
  },
  onLoad(options) {
    this.signId = options.id
    this.getSignInfo()
  },
  data() {
    return {
      signId: '',
      addSignForm: {
        signId: '',
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
      }
    }
  },
  methods: {
    getSignInfo() {
      this.$u.api.getSignDetailInfo({id: this.signId}).then(res => {
        
        Object.keys(this.addSignForm).forEach(key=>{
          this.addSignForm[key]=res[key]
        })
        console.log(this.addSignForm);
        // this.addSignForm = res
      })
    },
    selectSignTime(data) {
      this.addSignForm.signTime = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}:${data.second}`
    },
    cancel() {
      uni.navigateBack({
        delta: 1
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
      console.log(this.addSignForm );
      this.$u.api.editSign(this.addSignForm).then(res => {
        console.log(res);
      })
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
  
  
  
.edit-sign-form {
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

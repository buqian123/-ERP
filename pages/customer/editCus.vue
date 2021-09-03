<template>
  <view class="wrap">
    <view class="form">
      <view class="form-container">
        <view class="header-item">基本信息</view>
        <uni-forms :modelValue="formData" ref="form" :rules="rules">
            <uni-forms-item label-position="top" label="姓名" name="name">
              <input class="input" v-model="formData.name" type="text" placeholder="请输入用户名" />
            </uni-forms-item>
            <uni-forms-item required name="email" label="邮箱">
              <input class="input" v-model="formData.email" type="text" placeholder="请输入邮箱" @input="binddata('email',$event.detail.value)" />
            </uni-forms-item>
        </uni-forms>
      </view>
      <view class="submit-btn flex-bet">
        <u-button :custom-style="cancelStyle" :hair-line="false" type="info" @tap="back">取消</u-button>
        <u-button :custom-style="submitStyle" :hair-line="false" type="primary" @tap="submitTip.show = true">提交</u-button>
        <u-modal v-model="submitTip.show" :content="submitTip.content" :show-cancel-button="true" @confirm="submit"></u-modal>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      cancelStyle: {
        width: '32%',
        margin: 0,
        border: 'none'
      },
      submitStyle: {
        width: '64%',
        margin: 0,
        border: 'none'
      },
      submitTip: {
        show: false,
        content: '您确定要编辑客户吗？'
      },
      formData: {
        name: '',
        email: ''
      },
      rules: {
        // 对name字段进行必填验证
        name: {
          rules: [
            { required: true, errorMessage: '请输入姓名'},
            { minLength: 3, maxLength: 5, errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符' }
          ]
        },
        // 对email字段进行必填验证
        email: {
          rules: [
            { required: true, errorMessage: '请输入邮箱'},
            { format: 'email',errorMessage: '请输入正确的邮箱地址' }
          ]
        }
      }
    }
  },
  methods: {
    back() {
      uni.navigateBack()
    },
    submit() {
      this.$refs.form.validate().then(res=>{
          console.log('表单数据信息：', res);
      }).catch(err =>{
          console.log('表单错误信息：', err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100%;
    background-color: #f8f8f8;
  }
  .form {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 .293333rem;
  }
  .form-container {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-bottom: 1.04rem;
    
    .header-item {
      padding: .933333rem 0 .773333rem;
      color: #262626;
      font-size: .613333rem;
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .submit-btn {
    width: 100%;
    height: 64px;
    flex-shrink: 0;
    font-size: .4rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0 .293333rem;
  }
</style>

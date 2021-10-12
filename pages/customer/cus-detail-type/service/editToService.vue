<template>
  <view class="add-service-page">
    <view class="add-content">
      <view class="title">服务信息</view>
      <view class="add-info">
        <view class="content-box">
          <view class="input-title">
            <!-- <text class="title-icon">*</text> -->
            服务备注
            <text class="field__word-limit-float">{{addForm.remarks.length}}/1000</text>
          </view>
          <u-input class="follow-content" v-model="addForm.remarks" type="textarea" :auto-height="false" maxlength="1000" />
          <view class="voiceTool">
            <view class="btn" @touchstart="voiceStart" @touchend="voiceEnd">
              <image src="/static/microphone.png"></image>
              <text>按住说话</text>
            </view>
            <view class="wave" :style="{display: voice ? 'block' : 'none'}">
              <view class="inner">
                <view class="music">
                  <text class="s1"></text>
                  <text class="s2"></text>
                  <text class="s3"></text>
                  <text class="s4"></text>
                  <text class="s5"></text>
                </view>
                <view class="text">松开转文字</view>
                <view class="shape"></view>
              </view>
            </view>
          </view>
        </view>
        
<!--        <view class="content-box">
          <view class="input-title">
            <span class="title-icon w">*</span>
            服务备注
          </view>
          <view class="inner-box">
            <u-field v-model="remark" label="" :label-width="0" :clearable="false"
            placeholder="请输入备注" type="textarea" :auto-height="false" maxlength="1000">
            </u-field>
            
          </view>
        </view> -->
        
        <view class="picture-clip">
          <view class="clip-title">
            <view class="left">
              <text class="title-icon">*</text>
              服务图片
            </view>
          </view>
          <view class="upload-box">
            <view class="upload">
              <u-upload ref="imgUpload" :header="uploadImgHeader" :action="uploadUrl"
              del-icon="close" del-bg-color="#3975C5" del-color="#ffffff" :show-progress="false"
              :before-remove="beforeUpload" :file-list="imglist"></u-upload>
            </view>
            <view class="upload-tips">
              图片最多上传20张
            </view>
          </view>
        </view>
        
      </view>
      
      <view class="scheme-content"></view>
      <view>
        <view class="sign-content">
          <view class="sign-title-left">
            <text class="text-icon">*</text>
            签到记录
          </view>
          <view class="sign-title-middle">默认</view>
          <view class="sign-title-right">
            <image src="/static/sign-icon.png" class="icon"></image>
            <text>签到</text>
          </view>
        </view>
        <view class="one-list">
          <view class="sign-list">{{$u.timeFormat(new Date(), 'yy-mm-dd hh:MM:ss')}}在湖南省长沙市岳麓区文轩路签到</view>
        </view>
      </view>
      <view class="sign-content">
        <view class="input-title title-cur">服务人</view>
        <view class="input-right title-cur">
          <view class="input-text">{{addForm.serviceUser}}</view>
        </view>
      </view>
    </view>
    <view class="btn-box">
      <view class="btn" @tap="cancel">取消</view>
      <view class="btn" @tap="submit">提交</view>
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
      serviceId: state => state.customer.serviceId
    })
  },
  data() {
    return {
      voice: false,
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      },
      addForm: {
        remarks: '',
        serviceId: '',
        imgUrl: [],
        serviceUser: '',
        signInContent: '' // 签到地点
      },
      imglist: []
    }
  },
  onLoad(){
    this.getService()
    this.getEditInfo()
  },
  methods: {
    getService() {
      this.$u.api.getServiceInfo({id: this.serviceId}).then(res => {
        this.addForm.serviceUser = res.dispatchVos.servicePeople
        this.addForm.serviceId = this.serviceId
      })
    },
    getEditInfo() {
      let data = {
        serviceId: this.serviceId,
        limit: 100000,
        page: 1
      }
      this.$u.api.getToServiceAll(data).then(res => {
        if (res.records.length != 0) {
          let data = res.records[res.records.length - 1]
          for(let i in this.addForm) {
            this.addForm[i] = data[i]
          }
          
          data.imgUrl.forEach(item => {
            let obj = {
              url: item
            }
            this.imgList.push(obj)
          })
          
          
        }
      })
    },
    voiceStart() {
      this.voice = true
    },
    voiceEnd() {
      this.voice = false
    },
    beforeUpload(index, list) {
      this.$u.api.delUploadFile({fileName: list[index].file.name}).then(res => {
        
      })
    },
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    },
    submit() {
      this.addForm.imgUrl = []
      this.addForm.signInContent = this.$u.timeFormat(new Date(), 'yy-mm-dd hh:MM:ss') + '在湖南省长沙市岳麓区文轩路签到'
      let files = []
      files = this.$refs.imgUpload.lists.filter(val => {
        return val.progress == 100;
      })
      files.forEach(item => {
        if (item.response) {
          this.addForm.imgUrl.push(item.response.data.url)
        } else {
          this.paymentForm.imgUrl.push(item.url)
          this.addForm.imgUrl.push(item.url)
        }
        
      })
      if (this.addForm.imgUrl.length == 0) {
        this.$refs.uToast.show({
          title: `请上传服务图片`,
          type: 'info'
        })
        return
      }
      if (this.addForm.signInContent == '') {
        this.$refs.uToast.show({
          title: `请先签到`,
          type: 'info'
        })
        return
      }
      
      this.$u.api.addToService(this.addForm).then(res => {
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
.add-info {
  width: 100%;
  padding: 0 .293333rem;
  background: #fff;
}
.content-box {
  padding: 0 .293333rem .293333rem 0;
  background: #fff;
  
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
  .inner-box {
    padding-left: .213333rem;
  }
}
.picture-clip {
  width: 100%;
  box-sizing: border-box;
  padding: .573333rem .213333rem .333333rem .213333rem;
  border-top: .013333rem solid #f0f0f0;
  border-bottom: .013333rem solid #f0f0f0;
  margin-top: .573333rem;
  
  .clip-title {
    width: 100%;
    height: .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .333333rem;
    
    .left {
      font-size: .426667rem;
      font-weight: 500;
      color: #262626;
      
      .title-icon {
        font-size: .426667rem;
        font-weight: 500;
        color: #dc3131;
        margin-right: .053333rem;
      }
    }
  }
  .upload-box {
    width: 100%;
    background: #fff;
    padding: 0 0 .266667rem 0;
    .upload {
      padding-left: .213333rem;
      margin-top: .453333rem;
    }
    .upload-tips {
      padding-left: .213333rem;
      margin-top: .266667rem;
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      line-height: .453333rem;
      color: #999;
    }
  }
}
.scheme-content {
  width: 100%;
  padding: 0 .293333rem;
  background: #fff;
  margin-top: .266667rem;
}
.sign-content {
  width: 100%;
  height: 1.6rem;
  padding: 0 .293333rem;
  background: #fff;
  margin-top: .266667rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sign-title-left {
    font-family: PingFangSC-Medium,PingFang SC;
    font-size: .426667rem;
    font-weight: 500;
    .text-icon {
      color: #dc3131;
      margin-right: .053333rem;
      font-family: PingFangSC-Medium,PingFang SC;
      font-size: .426667rem;
      font-weight: 500;

    }
  }
  .sign-title-middle {
    width: 5.68rem;
    font-size: .4rem;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sign-title-right {
    display: flex;
    align-items: center;
    height: 100%;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: .346667rem;
    font-weight: 400;
    color: #3975c5;
    .icon {
      width: .346667rem;
      height: .346667rem;
      margin-right: .16rem;
    }
  }
  .input-title {
    margin-right: .373333rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-size: .426667rem;
    font-weight: 500;
    color: #262626;
  }
  .title-cur {
    color: #7b7b7b;
  }
  .input-right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .input-text {
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .4rem;
      font-weight: 400;
      color: #ccc;
    }
  }
}
.one-list {
  padding-bottom: .266667rem;
  .sign-list {
    width: 100%;
    padding: 0 .293333rem;
    margin-top: .266667rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: .346667rem;
    font-weight: 400;
    line-height: .506667rem;
    color: #262626;
    
    &:first-child {
      margin-top: 0;
    }
  }
}
.btn-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: .266667rem .293333rem;
  background: #fff;
  
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.173333rem;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: .4rem;
    font-weight: 400;
    border-radius: .106667rem;
    
    &:first-child {
      width: 3.066667rem;
      color: #7b7b7b;
      background: #f8f8f8;
    }
    &:last-child {
      width: 6.08rem;
      color: #fff;
      background: linear-gradient(198deg,#5688ff,#2472d9);
    }
  }
}
  .content-box {
    .input-title {
      .field__word-limit-float {
        float: right;
        font-size: .346667rem;
        color: #ccc;
      }
    }
    .follow-content {
      padding: 0 0 0 .266667rem !important;
      color: #262626 !important;
    }
  }
  .input-title {
    font-family: PingFangSC-Medium, PingFang SC;
    font-size: .426667rem;
    font-weight: 500;
    color: #262626;
  
    .title-icon {
      color: #dc3131;
    }
  }
</style>

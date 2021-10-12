<template>
  <view class="add-service-page">
    <view class="add-content">
      <view class="title">派单信息</view>
      <u-field v-model="addForm.dispatchVos.servicePeople" :disabled="true" label="服务人"
        placeholder="请选择" right-icon="arrow-right" :required="true"
        @tap="$refs.servicePeopleRef.open()">
      </u-field>
      
      <uni-drawer ref="servicePeopleRef" mode="right" :mask-click="true" :width="320">
        <view class="drawer-title">服务人</view>
        <view class="drawer-search">
          <u-search placeholder="" v-model="searchServicePeople" :show-action="false"></u-search>
        </view>
        
      </uni-drawer>
      
      <view class="content-box">
        <view class="input-title">
          派单备注
          <text class="field__word-limit-float">{{addForm.dispatchVos.dispatchRemarks.length}}/1000</text>
        </view>
        <u-input class="follow-content" v-model="addForm.dispatchVos.dispatchRemarks" type="textarea" :auto-height="false" maxlength="1000" />
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
      
      
      <view class="upload-box">
        <view class="input-title">派单图片</view>
        <view class="upload">
          <u-upload ref="imgUpload" :header="uploadImgHeader" :action="uploadUrl"
          del-icon="close" del-bg-color="#3975C5" del-color="#ffffff" :show-progress="false"
          :before-remove="beforeUpload" :file-list="imgList"></u-upload>
        </view>
        <view class="upload-tips">图片最多上传5张</view>
      </view>
      
      <view class="clip">
        <view class="clip-title flex-bet">
          <view class="left">附件</view>
          <view class="right flex-jsac" @tap="uploadFile">
            <image src="/static/up-file.png" class="img"></image>
            点击上传
          </view>
        </view>
        <l-file ref="enclosureFile" @up-success="uploadFileSuccess"></l-file>
        <view class="clip-tip"> 建议单个文件大小在5M以内 </view>
        <view class="clip-content" v-for="(item,index) in fileList" :key="index">
          <view class="clip-li">
            <image src="/static/clip-icon.png" class="icon"></image>
            <view class="info">
              <view class="name">{{item.name}}</view>
              <view class="size">{{item.size}}</view>
            </view>
            <view class="btn">
              X
            </view>
          </view>
        </view>
      </view>
      <view style="height: 30px;"></view>
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
      serviceId: state => state.customer.serviceId,
      uploadUrl: state => state.uploadUrl
    })
  },
  data() {
    return {
      voice: false,
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
      servicePeopleShow: false,
      searchServicePeople: '',
      imgList: [],
      fileList: [],
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      }
    }
  },
  onLoad() {
    this.getEditInfo()
  },
  methods: {
    getEditInfo() {
      this.$u.api.getServiceInfo({id: this.serviceId}).then(res => {
        for (let i in this.addForm) {
          this.addForm[i] = res[i]
        }
        this.addForm.id = this.serviceId
        res.dispatchVos.imgUrl.forEach(item => {
          let obj = {
            name: item.substr(item.lastIndexOf('/') + 1),
            size: '未知'
          }
          this.fileList.push(obj)
        })
        res.dispatchVos.enclosure.forEach(item => {
          let obj = {
            url: item
          }
          this.imgList.push(obj)
        })
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
    uploadFile() {
      this.$refs.enclosureFile.upload({
          // #ifdef APP-PLUS
          currentWebview: this.$mp.page.$getAppWebview(),
          // #endif
          url: this.uploadUrl, //你的上传附件接口地址
          name: 'file',
          header: {'Authorization': uni.getStorageSync('token')},
      });
    },
    uploadFileSuccess(res) {
      let lastIndex = res.data.url.lastIndexOf('/')
      let obj = {
        url: res.data.url,
        size: res.data.size / 1000 + 'kb',
        name: res.data.url.substring(lastIndex-0+1)
      }
      this.addForm.dispatchVos.enclosure.unshift(res.data.url)
      this.fileList.unshift(obj)
    },
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    },
    submit() {
      this.addForm.dispatchVos.imgUrl = []
      let files = []
      files = this.$refs.imgUpload.lists.filter(val => {
        return val.progress == 100;
      })
      files.forEach(item => {
        if (item.response) {
          this.addForm.dispatchVos.imgUrl.push(item.response.data.url)
        } else {
          this.paymentForm.imgUrl.push(item.url)
          this.addForm.dispatchVos.imgUrl.push(item.url)
        }
        
      })
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
.no-input {
  ::v-deep .u-label {
    color: #999 !important;
  }
  ::v-deep .uni-input-input {
    color: #999 !important;
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
  width: 100%;
  padding: .586667rem .293333rem .266667rem .293333rem;
  border-top: 1px solid #f8f8f8;
  background: #fff;

  .input-title {

    .field__word-limit-float {
      float: right;
      font-size: .346667rem;
      color: #ccc;
    }
  }

  .follow-content {
    padding: .53333rem 0 0 .266667rem !important;
    color: #262626 !important;
  }

  .voiceTool {
    width: 100%;
    height: 1.173333rem;
    box-sizing: border-box;
    border: .013333rem solid #ccc;
    border-radius: .053333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .373333rem;
    color: #262626;
  }
}
.upload-box {
  width: 100%;
  padding: .586667rem .293333rem .266667rem .293333rem;
  border-top: 1px solid #f8f8f8;
  background: #fff;

  .upload {
    padding-left: .213333rem;
    margin-top: .453333rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    
    img {
      width: 1.8rem;
      height: 1.6rem;
      margin-right: .2rem;
    }
    
    .addImg {
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid #DEDEDE;
      
      .add-icon {
        color: #DEDEDE;
      }
    }
  }

  .upload-tips {
    margin-top: .266667rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-size: .32rem;
    font-weight: 400;
    line-height: .453333rem;
    color: #999;
    padding-left: .213333rem;
  }
}


.clip {
    width: 100%;
    background: #fff;
    padding: .573333rem .293333rem .333333rem .533333rem;
    border-top: 1px solid #f8f8f8;
    .clip-title {
      width: 100%;
      height: .6rem;
      margin-bottom: .333333rem;
      
      .left {
        font-size: .426667rem;
        font-weight: 500;
        color: #262626;
      }
      
      .right {
        font-size: .346667rem;
        color: #3975c5;
        
        .img {
          width: .333333rem;
          height: .346667rem;
          margin-right: .16rem;
        }
      }
    }
    .clip-tip {
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      font-size: .32rem;
      color: #999;
    }
    .clip-content {
      width: 100%;
      padding: .333333rem 0 .2rem 0;
      .clip-li {
        width: 100%;
        height: .773333rem;
        display: flex;
        align-items: center;
        margin-bottom: .64rem;
        
        &:last-child {
          margin-bottom: 0;
        }
        
        .icon {
          width: .773333rem;
          height: .773333rem;
          margin-right: .08rem;
        }
        .info {
          width: calc(100% - 1.33333rem);
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-right: .08rem;
          
          .name {
            font-size: .32rem;
            color: #262626;
          }
          .size {
            font-size: .32rem;
            color: #999;
          }
        }
        .btn {
          width: .4rem;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
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

<template>
  <view class="add-follow-page">
    <view class="input-box">
      <view class="tab-box">
        <text :class="{'active-tab': tabIndex == 0}" @tap="tabIndex = 0">普通跟进</text>
        <text :class="{'active-tab': tabIndex == 1}" @tap="tabIndex = 1">进店邀约</text>
        <text :class="{'active-tab': tabIndex == 2}" @tap="tabIndex = 2">测量邀约</text>
      </view>

      <view class="input-info" v-if="tabIndex != 0">
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            邀约结果
          </view>
          <view class="input-right" @tap="inviteResuleShow = true">
            <view class="input-text">{{inviteResuleText}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        <view class="input-list" v-if="tabIndex == 1">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            邀约到店时间
          </view>
          <view class="input-right" @tap="inviteTimeShow = true">
            <view class="input-text">{{sysFollow.inviteTime}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
      </view>

      <view class="content-box">
        <view class="input-title">
          <text class="title-icon">*</text>
          跟进内容
          <text class="field__word-limit-float">{{sysFollow.followContent.length}}/1000</text>
        </view>
        <u-input class="follow-content" v-model="sysFollow.followContent" type="textarea" :auto-height="false" maxlength="1000" />
        <view class="voiceTool">按住说话</view>
      </view>

      <view class="input-info">
        <view class="input-list name">
          <view class="input-title">客户名称</view>
          <view class="input-text input-text-cur">{{sysFollow.customerName}}</view>
        </view>
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">关联需求</view>
          <view class="input-right">
            <view class="input-text">{{sysFollow.demandId}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            跟进方式
          </view>
          <view class="input-right" @tap="followModeShow = true">
            <view class="input-text">{{followModeText}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <view class="input-list" v-if="sysFollow.followMode == 3">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            留店时长
          </view>
          <view class="input-right" @tap="stayShopShow = true">
            <view class="input-text">{{stayShopText}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <view class="input-list" v-if="sysFollow.followMode == 2 || sysFollow.followMode == 3">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            接待定位
          </view>
          <view class="input-right" @tap="getVisitLocalhost">
            <view class="input-text">{{sysFollow.visitLocalhost}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
      </view>
      <view class="upload-box">
        <view class="input-title">图片</view>
        <view class="upload">
          <!-- <img v-for="(item,index) in sysFollow.imgUrl" :src="item" :key="index">
          <div class="addImg flex-cen" @tap="uploadImg">
            <u-icon class="add-icon" name="plus"></u-icon>
          </div>
          <l-file ref="imgFile" @up-success="uploadImgSuccess"></l-file> -->
          <u-upload :action="uploadUrl" del-icon="close" del-bg-color="#3975C5" del-color="#ffffff"
            :show-progress="false" :header="uploadImgHeader" :before-remove="beforeUpload"
            ref="uploadImg"></u-upload>
        </view>
        <view class="upload-tips">图片最多上传5张</view>
      </view>
      
      <view v-if="tabIndex == 2">
        <view class="title">服务单信息</view>
        <view class="input-info add-info">
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              <text class="title-icon">*</text>
              服务单类型
            </view>
            <view class="input-right" @tap="serviceTypeShow = true">
              <view class="input-text">{{serviceTypeText}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              服务单预约时间
            </view>
            <view class="input-right" @tap="serviceTimeShow = true">
              <view class="input-text">{{sysFollow.serviceSingle.serviceTime}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
        </view>
        <view class="title">服务单信息</view>
        <view class="input-info add-info">
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              <text class="title-icon">*</text>
              服务人
            </view>
            <view class="input-right">
              <view class="input-text">{{sysFollow.serviceSingle.dispatchVos.servicePeople}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
          <view class="content-box">
            <view class="input-title">
              派单备注
              <text class="field__word-limit-float">{{sysFollow.serviceSingle.dispatchVos.dispatchRemarks.length}}/1000</text>
            </view>
            <u-input class="follow-content" v-model="sysFollow.serviceSingle.dispatchVos.dispatchRemarks" type="textarea" :auto-height="false" maxlength="1000" />
            <view class="voiceTool" @tap="yuyin">按住说话</view>
          </view>
          
          
          <view class="upload-box">
            <view class="input-title">图片</view>
            <view class="upload">
              <!-- <img v-for="(item,index) in sysFollow.serviceSingle.dispatchVos.imgUrl" :src="item" :key="index">
              <div class="addImg flex-cen" @tap="uploadServiceImg">
                <u-icon class="add-icon" name="plus"></u-icon>
              </div>
              <l-file ref="imgServiceFile" @up-success="uploadServiceImgSuccess"></l-file> -->
              <u-upload :action="uploadUrl" del-icon="close" del-bg-color="#3975C5" del-color="#ffffff"
                :show-progress="false" :header="uploadImgHeader" :before-remove="beforeUpload"
                ref="dispatchVosImgRef"></u-upload>
            </view>
            
            
<!--            <view class="upload" @tap="uploadImg">
              <u-upload ref="uploadImg" :action="imgUploadUrl" del-icon="close" :auto-upload="false" del-bg-color="#3975C5" del-color="#ffffff"
                :file-list="sysFollow.serviceSingle.dispatchVos.imgUrl"></u-upload>
            </view> -->
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
                <view class="btn" @tap="delFile(item.name, index)">
                  X
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      
      
      <view style="height: 10px;"></view>
      <view class="create-next-plan" @tap="nextFollowPlanShow = true">
        <view class="create-next-plan-icon"></view>
        <span>添加下次跟进计划</span>
      </view>
      <view class="next-follow-plan" v-if="nextFollowPlanShow">
        <view class="small-title-row flex-bet">
          <text>下次跟进计划</text>
          <view class="cancel-next-plan flex-jsac" @tap="nextFollowPlanShow = false">
            <view class="cancel-next-plan-icon"></view>
            <text>取消添加</text>
          </view>
        </view>
        <view class="content-box">
          <view class="input-title">
            <text class="title-icon">*</text>
            计划跟进内容
            <text class="field__word-limit-float">{{sysFollow.nextFollowPlan.planFollow.length}}/1000</text>
          </view>
          <u-input class="follow-content" v-model="sysFollow.nextFollowPlan.planFollow" type="textarea" :auto-height="false" maxlength="1000" />
          <view class="voiceTool">按住说话</view>
        </view>
        <view class="input-info">
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              <text class="title-icon">*</text>
              提醒时间
            </view>
            <view class="input-right" @tap="remindShow = true">
              <view class="input-text">{{sysFollow.nextFollowPlan.remind}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
        </view>
        <view class="small-title-row">跟进计划通过企微消息提醒跟进人</view>
      </view>
    </view>
    <view style="height: 2rem;"></view>
    <view class="btn-box flex-cen">
      <view class="btn-list flex-cen" @tap="cancel">取消</view>
      <view class="btn-list flex-cen" @tap="addFollow">提交</view>
    </view>
    
    <u-action-sheet :list="followModeList" v-model="followModeShow" @tap="selectFollowMode" :cancel-btn="true"></u-action-sheet>
    
    <u-select v-model="stayShopShow" :list="stayShopList" @confirm="selectStayShopTime"></u-select>
    
    <u-picker mode="time" v-model="remindShow" :params="remindParams" title ="选择时间" @confirm="selectRemind"></u-picker>
    
    <u-select v-model="inviteResuleShow" :list="inviteResuleList" @confirm="selectInviteResule" title="选择结果"></u-select>
    
    <u-picker mode="time" v-model="inviteTimeShow" :params="selectInviteParams" title ="选择时间" @confirm="selectInviteTime"></u-picker>
    
    <u-select v-model="serviceTypeShow" :list="serviceTypeList" @confirm="selectServiceType" title="选择服务单类型"></u-select>
    
    <u-picker mode="time" v-model="serviceTimeShow" :params="remindParams" title ="选择时间" @confirm="selectServiceTime"></u-picker>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId,
      cusInfo: state => state.customer.cusInfo,
      uploadUrl: state => state.uploadUrl
    })
  },
  onLoad() {
    this.sysFollow.customerName = this.cusInfo.userName
    this.sysFollow.customerId = this.cusId
  },
  data() {
    return {
      tabIndex: '0',
      sysFollow: {
        customerId: '',
        followContent: '',
        customerName: '',
        demandId: '12345',
        followMode: '0',
        followType: '',
        imgUrl: [],
        nextFollowPlan: {
          planFollow: '',
          remind: ''
        },
        inviteResule: '',
        inviteTime: '',
        serviceSingle: {
          serviceType: '',
          serviceTime: '',
          dispatchVos: {
            servicePeople: '',
            dispatchRemarks: '',
            imgUrl: [],
            enclosure: {
              imgUrl: []
            }
          }
        },
        stayShop: '',
        visitLocalhost: ''
      },
      followModeShow: false,
      followModeText: '电话拜访',
      followModeList: [
        {text: '电话拜访'},{text: '网络拜访'},
        {text: '当面拜访'},{text: '进店接待'}
      ],
      stayShopShow: false,
      stayShopText: '',
      stayShopList: [
        {value: 0, label: '0-10分钟'},
        {value: 1, label: '10-30分钟'},
        {value: 2, label: '30分钟以上'}
      ],
      nextFollowPlanShow: false,
      remindShow: false,
      remindParams: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true
      },
      inviteResuleShow: false,
      inviteResuleText: '',
      inviteResuleList: [
        {value:0,label:'答应邀约'},
        {value:1,label:'拒绝邀约'}
      ],
      inviteTimeShow: false,
      selectInviteParams: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true
      },
      serviceTypeShow: false,
      serviceTypeText: '',
      serviceTypeList: [
        {value:0,label: '类型一'},
        {value:1,label: '类型二'}
      ],
      serviceTimeShow: false,
      fileList: [],
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      }
    }
  },
  methods: {
    // 过滤属性值为空的对象属性
    filterObj(obj) {
      let _newPar = {};
      for (let key in obj) {
          //如果对象属性的值不为空，就保存该属性（这里我做了限制，如果属性的值为0，保存该属性。如果属性的值全部是空格，属于为空。）
          if ((obj[key] == 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
              //记录属性
              _newPar[key] = obj[key];
          }
      }
      //返回对象
      return _newPar;
    },
    addFollow() {
      this.sysFollow.followType = this.tabIndex
      // 获取上传的图片的路径
      this.sysFollow.imgUrl = []
      let files = []
      files = this.$refs.uploadImg.lists.filter(val => {
        return val.progress == 100;
      })
      files.forEach(item => {
        this.sysFollow.imgUrl.push(item.response.data.url)
      })
      
      // 获取派单信息 上传的图片 
      this.sysFollow.serviceSingle.dispatchVos.imgUrl = []
      let dispatchVosImgfiles = []
      files = this.$refs.dispatchVosImgRef.lists.filter(val => {
        return val.progress == 100;
      })
      files.forEach(item => {
        this.sysFollow.serviceSingle.dispatchVos.imgUrl.push(item.response.data.url)
      })
      

      let obj = this.filterObj(this.$u.deepClone(this.sysFollow))
      
      // 判断跟进类型，传不同的参数
      if (this.sysFollow.followType != 2 && this.nextFollowPlanShow != true) {
        var { nextFollowPlan, serviceSingle ,...data } = obj;
      } else {
        if (this.sysFollow.followType == 2 && this.nextFollowPlanShow == true) {
          var data = obj
        } else {
          if (this.sysFollow.followType == 2) {
            var { nextFollowPlan ,...data } = obj;
          }
          
          if (this.nextFollowPlanShow == true) {
            var { serviceSingle ,...data } = obj;
          }
        }
      }
      
      console.log(data);
      // this.$u.api.addFollow(data).then(res => {
      //   console.log(res)
        
      //   uni.redirectTo({
      //     url: '/pages/customer/cusDetail'
      //   })
        
      // })
    },
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cusDetail'
      })
    },
    // 选择跟进方式
    selectFollowMode(i) {
      this.followModeText = this.followModeList[i].text
      this.sysFollow.followMode = i
    },
    // 选择留店时长
    selectStayShopTime(data) {
      this.stayShopText = data[0].label
      this.sysFollow.stayShop = data[0].value
    },
    // 获取接待定位
    getVisitLocalhost() {
      
    },
    // 选择提醒时间
    selectRemind(data) {
      this.sysFollow.nextFollowPlan.remind = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}:${data.second}`
    },
    // 选择邀约结果
    selectInviteResule(data) {
      this.inviteResuleText = data[0].label
      this.sysFollow.inviteResule = data[0].value
    },
    selectInviteTime(data) {
      this.sysFollow.inviteTime = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}:${data.second}`
    },
    selectServiceType(data) {
      this.serviceTypeText = data[0].label
      this.sysFollow.serviceSingle.serviceType = data[0].value
    },
    selectServiceTime(data) {
      this.sysFollow.serviceSingle.serviceTime = `${data.year}-${data.month}-${data.day} ${data.hour}:${data.minute}`
    },
    beforeUpload(index, list) {
      this.$u.api.delUploadFile({fileName: list[index].file.name}).then(res => {
        
      })
    },
    uploadImg() {
      this.$refs.imgFile.upload({
          // #ifdef APP-PLUS
          currentWebview: this.$mp.page.$getAppWebview(),
          // #endif
          url: this.uploadUrl, //你的上传附件接口地址
          name: 'file',
          header: {'Authorization': uni.getStorageSync('token')},
      });
    },
    // 上传图片
    uploadImgSuccess(res) {
      this.sysFollow.imgUrl.unshift(res.data.url)
    },
    uploadServiceImg() {
      this.$refs.imgServiceFile.upload({
          // #ifdef APP-PLUS
          currentWebview: this.$mp.page.$getAppWebview(),
          // #endif
          url: this.uploadUrl, //你的上传附件接口地址
          name: 'file',
          header: {'Authorization': uni.getStorageSync('token')},
      });
    },
    // 上传测量邀约的服务单信息图片
    uploadServiceImgSuccess(res) {
      this.sysFollow.serviceSingle.dispatchVos.imgUrl.unshift(res.data.url)
    },
    // 上传测量邀约的附件
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
      this.sysFollow.serviceSingle.dispatchVos.enclosure.imgUrl.unshift(res.data.url)
      this.fileList.unshift(obj)
    },
    // 删除派单信息的 上传的附件
    delFile(name, i) {
      uni.showLoading({
          title: '删除中'
      });
      this.$u.api.delUploadFile({fileName: name}).then(res => {
        uni.hideLoading();
        this.fileList.splice(i, 1)
      })
    },
    yuyin() {
      // this.sdk.
      wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              var speed = res.speed; // 速度，以米/每秒计
              var accuracy = res.accuracy; // 位置精度
          }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .add-follow-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
  }

  .input-box {
    flex: 1;
    overflow-y: scroll;
  }

  .tab-box {
    width: 100%;
    height: 1.226667rem;
    box-sizing: border-box;
    padding: .4rem .293333rem 0 .293333rem;
    display: flex;
    align-items: center;

    text {
      font-size: .32rem;
      font-weight: 600;
      color: #262626;
      padding: .173333rem .253333rem;
      margin-right: .146667rem;
    }

    .active-tab {
      background-color: #3975c5;
      border-radius: .353333rem;
      color: #fff;
    }
  }

  .content-box {
    width: 100%;
    padding: .586667rem .293333rem .266667rem .293333rem;
    margin-top: .266667rem;
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

  .input-title {
    font-family: PingFangSC-Medium, PingFang SC;
    font-size: .426667rem;
    font-weight: 500;
    color: #262626;

    .title-icon {
      color: #dc3131;
    }
  }

  .input-info {
    width: 100%;
    padding: 0 .293333rem;
    margin-top: .266667rem;
    background: #fff;

    .input-list {
      display: flex;
      align-items: center;
      width: 100%;
      height: 1.573333rem;
      border-bottom: 0;

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
  }

  .upload-box {
    width: 100%;
    padding: .586667rem .293333rem .266667rem .293333rem;
    margin-top: .266667rem;
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
    padding: .573333rem .293333rem .333333rem .533333rem;
    border-top: .013333rem solid #f0f0f0;
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
            height: 1.41333rem;
            padding-left: .213333rem;
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

  .create-next-plan {
    background-color: #fff;
    padding: .4rem;
    display: flex;
    align-items: center;
    font-size: .4rem;
    color: #262626;
    margin-bottom: .266667rem;

    .create-next-plan-icon {
      width: .4rem;
      height: .4rem;
      background: url('/static/create-next-plan-icon.png') 50%/100% no-repeat;
      margin-right: .266667rem;
    }
  }
  .next-follow-plan {
    .small-title-row {
      font-size: .32rem;
      padding: .293333rem;
      color: #999;
      
    }
    .cancel-next-plan {
      font-size: .32rem;
      color: #3975c5;
      
      .cancel-next-plan-icon {
        width: .346667rem;
        height: .346667rem;
        background: url('/static/cancel-next-plan-icon.png') 50%/100% no-repeat;
        margin-right: .053333rem;
      }
    }
  }
  .btn-box {
    width: 100%;
    padding: .266667rem 0!important;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 69;
    
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
    background: #fff;
  }
</style>

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

      <view class="input-info">
        <view class="input-list name">
          <view class="input-title">客户名称</view>
          <view class="input-text input-text-cur">{{sysFollow.customerName}}</view>
        </view>
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">关联需求</view>
          <view class="input-right" @tap="openDemand">
            <view class="input-text" :class="{'input-text-cur': sysFollow.demandId.length == 0}">{{sysFollow.demandId || '请选择'}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <uni-drawer ref="demandRef" mode="right" :mask-click="true" :width="320">
          <view class="selete-demand">
            <view class="title">需求</view>
            <view class="sale-tips">请选择客户{{sysFollow.customerName}}相关的需求</view>
            <view class="sale-ul">
              <view class="item flex-jsac" v-for="item in demandlist" :key="item.id" @tap="selectDemandId(item.id)">
                <view class="left">
                  <view class="sale-number">需求编号：{{item.id}}</view>
                  <view class="sale-number">需求品牌：{{item.demandType}}</view>
                  <view class="sale-number">需求地址：{item.keyMessage.address}</view>
                  <view class="sale-cus">{{item.demandFollowPeople}}跟进</view>
                </view>
                <view class="right">
                  <view class="state" v-if="item.followState == 0">跟进中</view>
                  <view class="state" v-if="item.followState == 1">已签约</view>
                  <view class="state" v-if="item.followState == 2">已交付</view>
                  <view class="state" v-if="item.followState == 3">已流失</view>
                </view>
              </view>
            </view>
          </view>
        </uni-drawer>
        
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
              <view class="input-text" :class="{'input-text-cur': serviceTypeText == ''}">{{serviceTypeText || '请选择'}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              服务单预约时间
            </view>
            <view class="input-right">
              <!-- <view class="input-text">{{sysFollow.serviceSingle.serviceTime}}</view> -->
              <datetime-picker
                class="input-text"
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
        <view class="title">服务单信息</view>
        <view class="input-info add-info">
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">
              <text class="title-icon">*</text>
              服务人
            </view>
            <view class="input-right" @tap="$refs.servicePeopleRef.open()">
              <view class="input-text">{{sysFollow.serviceSingle.dispatchVos.servicePeople}}</view>
              <image src="/static/arrow-right-img.png" class="right-icon"></image>
            </view>
          </view>
          
          <uni-drawer ref="servicePeopleRef" mode="right" :mask-click="true" :width="320">
            <view class="drawer-title">服务人</view>
            <view class="drawer-search">
              <u-search placeholder="请输入员工姓名" v-model="searchServicePeople" :show-action="false"></u-search>
            </view>
            <view class="peolist">
              <view class="peo" v-for="(item, index) in servicePeopleList" :key="index" @tap="selectServicePeople(item)">
                <view class="flex-jsac" style="padding: 10px;">
                  <image src="/static/avatar-default-img.png" class="avatar"></image>
                  <view class="peo-name flex-jsac">{{item}}</view>
                </view>
                <view class="border"></view>
              </view>
            </view>
          </uni-drawer>
          
          
          
          
          
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
      <view class="create-next-plan" v-if="nextFollowPlanShow == false" @tap="nextFollowPlanShow = true">
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
            <view class="input-right">
              <!-- <view class="input-text">{{sysFollow.nextFollowPlan.remind}}</view> -->
              <datetime-picker
                class="input-text"
              	placeholder="请选择"
              	:start="startTime"
              	end="2050-01-01 23:59"
              	fields="minute"
              	@change="selectRemind"
              ></datetime-picker>
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
    
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
import datatimePicker from '@/components/datetime-picker/datetime-picker.vue'
import jwx from '@/common/jwx.js'
export default {
  components: {
    datatimePicker
  },
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
    this.startTime = this.$u.timeFormat(+new Date(), 'yy-mm-dd hh:MM')
    jwx.initJssdk()
  },
  data() {
    return {
      startTime: '',
      tabIndex: '0',
      sysFollow: {
        customerId: '',
        followContent: '',
        customerName: '',
        demandId: '',
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
            servicePeople: 'along',
            dispatchRemarks: '',
            imgUrl: [],
            enclosure: [],
            dispatchPeople: '',
            dispatchDate: ''
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
      fileList: [],
      uploadImgHeader: {
        'Authorization': uni.getStorageSync('token')
      },
      demandlist: [],
      searchServicePeople: '',
      servicePeopleList: ['along', 'zy', 'ZhengYu', '张三', '测试'],
      voice: false
    }
  },
  methods: {
    getCusDemand() {
      let data = {
        customerId: this.cusId,
        limit: 1000000,
        page: 1
      }
      this.$u.api.getCusDemand(data).then(res => {
        this.demandlist = res.records
      })
    },
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
      
      // 处理传值
      let data = {
        customerId: this.sysFollow.customerId,
        followContent: this.sysFollow.followContent,
        customerName: this.sysFollow.customerName,
        demandId: this.sysFollow.demandId,
        followType: this.sysFollow.followType,
        followMode: this.sysFollow.followMode,
        imgUrl: []
      }
      // 必填规则
      let rule = {
        '跟进内容': this.sysFollow.followContent,
        '跟进方式': this.sysFollow.followMode
      }
      
      // 获取 普通跟进的 上传的图片的路径
      this.sysFollow.imgUrl = []
      let files = []
      files = this.$refs.uploadImg.lists.filter(val => {
        return val.progress == 100;
      })
      files.forEach(item => {
        this.sysFollow.imgUrl.push(item.response.data.url)
        data.imgUrl.push(item.response.data.url)
      })
      
      
      // 进店邀约
      if (this.tabIndex == 1) {
        rule['邀约结果'] = this.sysFollow.inviteResule
        rule['邀约到店时间'] = this.sysFollow.inviteTime
        
        data.inviteResule = this.sysFollow.inviteResule
        data.inviteTime = this.sysFollow.inviteTime
      }
      // 测量邀约
      if (this.tabIndex == 2) {
        rule['邀约结果'] = this.sysFollow.inviteResule
        rule['服务单类型'] = this.sysFollow.serviceSingle.serviceType
        // rule['服务人'] = this.sysFollow.serviceSingle.dispatchVos.servicePeople
        
        data.inviteResule = this.sysFollow.inviteResule
        data.serviceSingle = this.sysFollow.serviceSingle
        data.serviceSingle.dispatchVos.dispatchPeople = this.sysFollow.serviceSingle.dispatchVos.dispatchPeople
        data.serviceSingle.dispatchVos.dispatchDate = this.$u.timeFormat(new Date(), 'yyyy-mm-dd hh:MM:ss');
        
        // 获取派单信息 上传的图片
        this.sysFollow.serviceSingle.dispatchVos.imgUrl = []
        let dispatchVosImgfiles = []
        dispatchVosImgfiles = this.$refs.dispatchVosImgRef.lists.filter(val => {
          return val.progress == 100;
        })
        dispatchVosImgfiles.forEach(item => {
          this.sysFollow.serviceSingle.dispatchVos.imgUrl.push(item.response.data.url)
          data.serviceSingle.dispatchVos.imgUrl.push(item.response.data.url)
        })
        
      }
      
      // 跟进方式
      if (this.sysFollow.followMode == 2) {
        rule['接待定位'] = this.sysFollow.visitLocalhost
        data.visitLocalhost = this.sysFollow.visitLocalhost
      } 
      if (this.sysFollow.followMode == 3) {
        rule['留店时长'] = this.sysFollow.stayShop
        rule['接待定位'] = this.sysFollow.visitLocalhost
        data.stayShop = this.sysFollow.stayShop
        data.visitLocalhost = this.sysFollow.visitLocalhost
      }
      
      // 下次跟进计划
      if (this.nextFollowPlanShow == true) {
        rule['计划跟进内容'] = this.sysFollow.nextFollowPlan.planFollow
        rule['提醒时间'] = this.sysFollow.nextFollowPlan.remind
        data.nextFollowPlan = this.sysFollow.nextFollowPlan
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
      data = this.filterObj(this.$u.deepClone(data))

      this.$u.api.addFollow(data).then(res => {
        
        uni.redirectTo({
          url: '/pages/customer/cusDetail'
        })
        
      })
    },
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cusDetail'
      })
    },
    openDemand() {
      this.getCusDemand()
      this.$refs.demandRef.open()
    },
    selectDemandId(id) {
      this.sysFollow.demandId = id
      this.$refs.demandRef.close()
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
      jWeixin.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
            var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            var speed = res.speed; // 速度，以米/每秒计
            var accuracy = res.accuracy; // 位置精度
            console.log(res)
            console.log(speed,accuracy)
          },
          fail: function(err) {
            console.log(err);
          }
      });
    },
    // 选择提醒时间
    selectRemind(date) {
      this.sysFollow.nextFollowPlan.remind = date.data
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
    // 选择预约服务时间
    selectServiceTime(date) {
      this.sysFollow.serviceSingle.serviceTime = date.data
      console.log(this.sysFollow);
    },
    // 选择服务人
    selectServicePeople(data) {
      this.sysFollow.serviceSingle.dispatchVos.servicePeople = data
      this.$refs.servicePeopleRef.close()
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
      jWeixin.scanQRCode({
          desc: 'scanQRCode desc',
          needResult: 0, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
          scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是条形码（一维码），默认二者都有
          success: function(res) {
              // 回调
              console.log(res);
          },
          error: function(res) {
            console.log(res);
              if (res.errMsg.indexOf('function_not_exist') > 0) {
                  alert('版本过低请升级')
              }
          }
      });
    },
    voiceStart() {
      console.log('录音开始')
      jWeixin.startRecord();
      this.voice = true
    },
    voiceEnd() {
      console.log('录音结束')
      jWeixin.stopRecord({
          success: function (res) {
              var localId = res.localId;
              console.log(res)
          },
          fail: function(err) {
            console.log(err);
          }
      });
      this.voice = false
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
  
  .selete-demand {
    width: 100%;
    
    .title {
      width: 100%;
      height: 1.706667rem;
      padding-left: .426667rem;
      font-family: PingFangSC-Medium,PingFang SC;
      font-size: .4rem;
      font-weight: 500;
      line-height: 1.706667rem;
      color: #262626;
    }
    .sale-tips {
      width: 100%;
      height: 1.066667rem;
      padding: 0 .293333rem;
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      line-height: 1.066667rem;
      color: #3975c5;
      background: #eaf3ff;
    }
    .sale-ul {
      width: 100%;
      .item {
        width: 100%;
        padding: .373333rem .293333rem;
        
        &::after {
          position: absolute;
          box-sizing: border-box;
          content: " ";
          pointer-events: none;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border: .026667rem solid #ebedf0;
          -webkit-transform: scale(.5);
          transform: scale(.5);
        }
        
        .left {
          width: calc(100% - 1.6rem);
          .sale-number {
            width: 100%;
            overflow: hidden;
            font-family: PingFangSC-Medium,PingFang SC;
            font-size: .346667rem;
            font-weight: 400;
            line-height: .506667rem;
            color: #262626;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: .16rem;
          }
          .sale-cus {
            font-family: PingFangSC-Regular,PingFang SC;
            font-size: .346667rem;
            font-weight: 400;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right {
          width: 1.6rem;
          text-align: right;
          .state {
            font-family: PingFangSC-Regular,PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            line-height: .453333rem;
            color: #1f9400;
          }
        }
      }
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
  .peolist {
    width: 100%;
    .peo {
      position: relative;
      
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .peo-name {
        font-size: 14px;
        color: rgb(68, 68, 68);
      }
      .border {
        // width: 100%;
        // height: 1px;
        position: absolute;
        left: 11px;
        right: 11px;
        height: 1px;
        border-bottom: 1px solid #f0f0f0;
        transform: scaleY(0.5);
      }
    }
  }
</style>

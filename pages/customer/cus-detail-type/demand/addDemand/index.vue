<template>
  <view class="wrap">
    <u-form :model="addForm" ref="uForm">
      <view class="input-info">
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            需求品牌
          </view>
          <view class="input-right" @tap="$refs.demandTypeRef.open()">
            <view class="input-text">实例(请去Pc端修改)</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <uni-drawer ref="demandTypeRef" mode="right" :mask-click="true" :width="320">
          <view class="drawer-title">需求品牌</view>
          <view class="type-popup-list" @click="selectDemandType">
            <view class="type-popup-item">实例(请去Pc端修改)</view>
            <view class="end-list">已显示全部数据</view>
          </view>
        </uni-drawer>
        
        
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">
            <text class="title-icon">*</text>
            需求类型
          </view>
          <view class="input-right" @tap="$refs.demandNameRef.open()">
            <view class="input-text">{{addForm.demandName}}</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <uni-drawer ref="demandNameRef" mode="right" :mask-click="true" :width="320">
          <view class="drawer-title">需求类型</view>
          <view class="type-popup-list">
            <view class="type-popup-item" v-for="item in demandNameList" :key="item.value" @click="selectDemandName(item)">{{item.label}}</view>
            <view class="end-list">已显示全部数据</view>
          </view>
        </uni-drawer>
        
        
        
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">客户关键信息</view>
          <view class="input-right" @tap="selectkeyMsg">
            <view class="input-text">
              <view>{{keyInfo}}</view>
            </view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">关联介绍人</view>
          <view class="input-right" @tap="chooseIntroductor">
            <view class="input-text input-text-cur">请选择</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        
        <view class="more-action" @tap="moreForm = !moreForm">
          <view>更多</view>
          <u-icon name="arrow-down"></u-icon>
        </view>
        
        <view v-if="moreForm">
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">竞争对手</view>
            <view class="input-right">
              <u-input class="input-text" v-model="addForm.competitor" type="text" placeholder="请输入" />
            </view>
          </view>
          
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">竞争对手描述</view>
            <view class="input-right">
              <u-input class="input-text" v-model="addForm.opponentRemarks" type="text" placeholder="请输入" />
            </view>
          </view>
          <view class="input-list">
            <view class="input-title" style="padding-left: .213333rem;">预估金额</view>
            <view class="input-right">
              <u-input class="input-text" v-model="addForm.predictMoney	" type="text" />
            </view>
          </view>
          
          <view class="content-box">
            <view class="input-title">
              <text class="title-icon">*</text>
              备注
              <text class="field__word-limit-float">{{addForm.remarks.length}}/1000</text>
            </view>
            <textarea class="follow-content" v-model="addForm.remarks" />
            <!-- <u-input class="follow-content" v-model="addForm.remarks" ref="remarksRef" type="textarea" :focus="remarkFocus" :auto-height="false" maxlength="1000" /> -->
          </view>
          
          <view class="litter-title-container">
            <view class="title-desc">小标题：</view>
            <view class="litter-title-scroll">
              <du-nav :option="litterTitleList" @feedback="feedback" :width="0"></du-nav>
            </view>
          </view>
          
        </view>
        
        
        
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">需求跟进人</view>
          <view class="input-right">
            <view class="input-text">ZhengYu</view>
          </view>
        </view>
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">需求共享人</view>
          <view class="input-right">
            <view class="input-text input-text-cur">请选择</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        <view class="share-desc-text">需求共享人可查看需求信息，添加跟进，添加收退款，添加服务单，进入服务群，电话或微信联系客户，其他功能都不可操作。</view>
        <view class="input-list">
          <view class="input-title" style="padding-left: .213333rem;">需求内推人</view>
          <view class="input-right" @tap="$refs.demandPushPeopleRef.open()">
            <view class="input-text input-text-cur">请选择</view>
            <image src="/static/arrow-right-img.png" class="right-icon"></image>
          </view>
        </view>
        <uni-drawer ref="demandPushPeopleRef" mode="right" :mask-click="true" :width="320">
          <view class="drawer-title">需求内推人</view>
          <view class="drawer-search">
            <u-search placeholder="请输入员工姓名" v-model="addForm.demandPushPeople" :show-action="false"></u-search>
          </view>
          <view class="dep">
            <view class="check-group">
              <view class="check-item flex-bet">
                <view class="left flex-jsac">
                  <u-checkbox v-model="checkAll" shape="circle">全部</u-checkbox>
                </view>
                <view class="right flex-jeac">
                  <image src="/static/arrow-right-img.png"></image>
                </view>
              </view>
              <view class="second">
                <view class="check-item flex-bet">
                  <view class="left flex-jsac">
                    <u-checkbox v-model="checkAll" shape="circle">销售部</u-checkbox>
                  </view>
                  <view class="right flex-jeac">
                    <image src="/static/arrow-right-img.png"></image>
                  </view>
                </view>
                <view class="check-item flex-bet">
                  <view class="left flex-jsac">
                    <u-checkbox v-model="checkAll" shape="circle">服务部</u-checkbox>
                  </view>
                  <view class="right flex-jeac">
                    <image src="/static/arrow-right-img.png"></image>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="dep-footer flex-jsac">
            <view class="flex-bet" style="width: 100%;">
              <view class="emp-count">已选0人</view>
              <view class="sure-choode-btn flex-cen">确定</view>
            </view>
          </view>
        </uni-drawer>
        <view class="share-desc-text">记录联单推荐的内部员工</view>
      </view>
      
      <view style="height: 2rem;"></view>
      <view class="btn-box flex-cen">
        <view class="btn-list flex-cen" @tap="cancel">取消</view>
        <view class="btn-list flex-cen" @tap="addSubmit">提交</view>
      </view>
    </u-form>
  </view>
</template>

<script>
import { mapState } from 'vuex'
import duNav from '@/components/du-nav/du-nav.vue'
export default {
  components: { duNav },
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId
    })
  },
  data() {
    return {
      addForm: {
        relationId: '', // 关联客户id
        demandType: '产品', // 需求品牌
        demandName: '零售', // 需求类型
        keyId: '', // 关键信息Id
        introducerId: '', // 关联介绍人Id
        competitor: '', // 竞争对手
        opponentRemarks: '', // 竞争对手描述
        predictMoney	: '', // 预估金额
        remarks: '', // 备注
        demandFollowPeople: 'along', // 需求跟进人
        demandPushPeople: '', // 需求内推人
        demandSharePeople: '' // 需求共享人
        
      },
      moreForm: false,
      demandNameList: [
        {value: 0,label: '零售'},
        {value: 1,label: '工程'},
        {value: 2,label: '整装'},
        {value: 3,label: '分销'}
      ],
      keyInfo: '', // 关键信息
      introducer: '', // 关联介绍人
      checkAll: false,
      litterTitleList: [
        {name: '👦🏻随行人员：'},
        {name: '👔决策人员：'},
        {name: '🛒已购品牌：'},
        {name: '👜购买用途：'},
        {name: '❤️意向产品：'},
        {name: '👏推荐产品：'},
        {name: '💰方案报价：'},
        {name: '💗特别关心：'}
      ],
      remarkFocus: false
    }
  },
  onLoad() {
    this.addForm.relationId = this.cusId
    uni.$on("keyInfo", (data) => {
      this.addForm.keyId = data.keyId
      this.keyInfo = data.productName + '/' + data.productType + '\n' + data.address
    });
  },
  onUnload() {
    uni.$off("keyInfo")
  },
  methods: {
    // 选择需求品牌
    selectDemandType() {
      this.$refs.demandTypeRef.close()
    },
    selectDemandName(item) {
      this.addForm.demandName = item.label
      this.$refs.demandNameRef.close()
    },
    // 选择关键信息
    selectkeyMsg() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/addDemand/cusImpotInfo/list'
      })
    },
    // 选择介绍人
    chooseIntroductor() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/addDemand/choose-introductor'
      })
    },
    // 选择小标题
    feedback(index) {
      if (this.addForm.remarks.charAt(this.addForm.remarks.length-1) != '') {
        this.addForm.remarks = this.addForm.remarks + '\n' + this.litterTitleList[index].name
      } else {
        this.addForm.remarks = this.addForm.remarks + this.litterTitleList[index].name
      }
    },
    addSubmit() {
      console.log(this.addForm);
      this.$u.api.addDemand(this.addForm).then(res => {
        console.log(res);
        // uni.redirectTo({
        //   url: '/pages/customer/cusDetail'
        // })
      })
    },
    cancel() {
      uni.redirectTo({
        url: '/pages/customer/cusDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
.wrap {
  height: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-title {
  font-family: PingFangSC-Medium, PingFang SC;
  font-size: .426667rem;
  font-weight: 700;
  color: #262626;

  .title-icon {
    color: #dc3131;
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

.litter-title-container {
  width: 100%;
  z-index: 8;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 .293333rem;
  overflow: hidden;
  
  &::after {
    content: "";
    position: absolute;
    left: .293333rem;
    right: .293333rem;
    bottom: 0;
    height: .026667rem;
    transform: scaleY(.5);
    background-color: #ebedf0;
  }
  
  .title-desc {
    font-size: .346667rem;
    font-family: PingFangSC-Medium,PingFang SC;
    font-weight: 500;
    color: #262626;
    margin-right: .133333rem;
    flex-shrink: 0;
  }
  .litter-title-scroll {
    display: flex;
    flex: 1;
    overflow-x: auto;
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

.more-action {
  font-size: .426667rem;
  font-family: PingFangSC-Regular,PingFang SC;
  font-weight: 400;
  color: #7b7b7b;
  height: 1.6rem;
  display: flex;
  align-items: center;
  padding: 0 .266667rem 0 .373333rem;
  justify-content: space-between;
  background-color: #fff;
  position: relative;
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

.uni-drawer ::v-deep .uni-drawer__content {
  background-color: #F8F8F8;
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
.dep {
  // height: 100%;
  overflow-y: auto;
  .check-group {
    background-color: rgb(255, 255, 255);
    padding: 0px 10px;
    position: relative;
    font-size: 13px;
    
    .check-item {
      border-bottom: 1px solid #f0f0f0;
      
      .left {
        width: 100%;
        height: 50px;
        color: rgb(38, 38, 38);
      }
      .right {
        width: 10%;
        text-align: right;
        height: 50px;
        
        image {
          width: 12px;
          height: 12px;
          transition: all 0.3s ease-out;
        }
      }
    }
    .second {
      padding-left: 28px;
      transition: height 0.3s;
      overflow: hidden;
      will-change: height;
    }
    
  }
  
}
.dep-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.506667rem;
  background-color: #fff;
  padding: .266667rem;
  border-top: .026667rem solid #f8f8f8;
  .emp-count {
    font-size: .373333rem;
    color: #262626;
  }
  .sure-choode-btn {
    border-radius: .666667rem;
    height: .986667rem;
    color: #fff;
    background: linear-gradient(90deg,#3a82e2,#5688ff);
    width: 4.186667rem;
    align-self: flex-end;
    font-size: .426667rem;
  }
}
.type-popup-list {
  overflow-y: auto;
  
  .type-popup-item {
    height: 1.333333rem;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 .293333rem;
    background-color: #fff;
    
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: .293333rem;
      right: .293333rem;
      transform: scaleY(.5);
      height: .026667rem;
      background-color: #f0f0f0;
    }
  }
  .end-list {
    padding: .56rem;
    font-size: .32rem;
    color: #999;
    text-align: center;
  }
}
</style>

<template>
  <view class="content-box">
    <u-form :model="formData" ref="addCusFormRef" class="form" label-width="150">
      <view class="content-container">
        
        <view class="header-item">基本信息</view>
        
        <view class="input-item">
          <view class="input-title">
            <view class="input-title-must">客户名称</view>
          </view>
          <view class="input-box">
            <input type="text" v-model="formData.userName" maxlength="15" placeholder="请输入" />
            <view class="show-word-limit">
              <text :class="{'have-num': formData.userName.length > 0}">{{formData.userName.length}}</text>
              /15
            </view>
          </view>
        </view>
        
        <view class="input-item">
          <view class="input-title">
            <view class="input-title-must">联系方式</view>
            <image src="/static/add-phone-item.png" class="add-del-phone-item" @tap="addMobile"></image>
          </view>
          
          <view class="input-box">
            <input type="text" v-model="formData.mobile[0].mobile" placeholder="请输入" />
          </view>
          
          
          <view class="more-phone" v-for="(item, index) in formData.mobile.slice(1)" :key="index">
            <view class="more-phone-item flex-bet">
              <view class="more-phone-item-left flex-jsac">
                <input type="text" placeholder="请输入备注" v-model="item.remarks" class="more-phone-item-remark" />
                <view class="other-phone-split"></view>
                <input type="text" placeholder="请输入号码" v-model="item.mobile">
              </view>
              <image src="/static/del-phone-item.png" class="add-del-phone-item" @tap="delMobile(index)"></image>
            </view>
          </view>
          
        </view>
        
        
        <view class="input-item">
          <view class="input-title">
            <view class="input-title-must">客户来源</view>
          </view>
          <view class="input-choose-action flex-bet" @tap="customerSourceShow = true">
            <view :class="{'input-no-choose': formData.customerSource == ''}">{{formData.customerSource ? formData.customerSource : '请选择'}}</view>
            <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
          </view>
        </view>

        <u-select v-model="customerSourceShow" :default-value="customerSourceDefaultIndex" :list="customerSourceList" @confirm="selectCustomerSource"></u-select>
        
        <view class="input-item">
          <view class="input-title">
            <view class="input-title-must">省市区</view>
          </view>
          <view class="input-choose-action flex-bet" @tap="addressShow = true">
            <view :class="{'input-no-choose': formData.address == ''}">{{formData.address ? formData.address : '请选择'}}</view>
            <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
          </view>
        </view>
        
        <u-picker v-model="addressShow" :area-code="addressDefault" mode="region" @confirm="selectAddress"></u-picker>
        
        
        
        <view class="input-item">
          <view class="input-title">
            <view>性别</view>
          </view>
          <view class="input-choose-action flex-bet" @tap="sexShow = true">
            <view :class="{'input-no-choose': sex == ''}">{{sex ? sex : '请选择'}}</view>
            <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
          </view>
        </view>
        
        <u-select v-model="sexShow" :default-value="sexDefaultIndex" :list="sexlist" @confirm="selectSex"></u-select>
        
        <view class="input-item">
          <view class="input-title">
            <view>生日</view>
          </view>
          <view class="input-choose-action flex-bet" @tap="birthdayShow=true">
            <view :class="{'input-no-choose': formData.birthday == ''}">{{formData.birthday ? formData.birthday : '请选择'}}</view>
            <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
          </view>
        </view>
        
        <u-picker v-model="birthdayShow" :default-time="birthdayDefault" mode="time" @confirm="selectBirthday"></u-picker>
        
        <view class="input-item">
          <view class="input-title">
            <view>年龄</view>
          </view>
          <view class="input-box">
            <input type="text" v-model="formData.age" placeholder="请输入" />
          </view>
        </view>
        
        <view class="input-item">
          <view class="input-title">
            <view>客户简介</view>
          </view>
          <view class="input-box">
            <input type="textarea" v-model="formData.introduce" maxlength="1000" placeholder="请输入" />
            <view class="show-word-limit">
              <text :class="{'have-num': formData.introduce.length > 0}">{{formData.introduce.length}}</text>
              /1000
            </view>
          </view>
        </view>
        
        
        <view class="header-item">
          <text>关键信息</text>
          <image src="/static/add-del-imp-info.png" class="add-del-imp-info" @tap="addImp"></image>
        </view>
        
        <!-- 关键信息 -->
        <view>
          <view class="input-item">
            <view class="input-title">
              <view>产品名称</view>
            </view>
            <view class="input-box">
              <input type="text" v-model="formData.keyMessages[0].productName" maxlength="15" placeholder="请输入" />
              <view class="show-word-limit">
                <text :class="{'have-num': formData.keyMessages[0].productName.length > 0}">{{formData.keyMessages[0].productName.length}}</text>
                /15
              </view>
            </view>
          </view>
          
          <view class="input-item">
            <view class="input-title">
              <view>产品类型</view>
            </view>
            <view v-for="(item, index) in formData.keyMessages.slice(0,1)" :key="item.id" class="input-choose-action flex-bet" @tap="item.show = true">
              <view :class="{'input-no-choose': item.productType == ''}">{{item.productType ? item.productType : '请选择'}}</view>
              <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
              <u-select v-model="item.show" :default-value="item.defaultIndex" :list="productTypeList" @confirm="selectProductType($event,item)"></u-select>
            </view>
          </view>
          <view class="input-item">
            <view class="input-title">
              <view>地址</view>
            </view>
            <view class="input-box">
              <input type="text" v-model="formData.keyMessages[0].address" placeholder="请输入" />
            </view>
          </view>
          
          
          
        </view>
        
        <!-- 添加的关键信息 -->
        <view v-for="(item, index) in formData.keyMessages.slice(1)" :key="index">
          <view style="position: relative; margin-top: 15px;">
            <image src="/static/del-imp-img.png" class="add-del-imp-info self-del-imp-info" @tap="delImp(index,item.keyId)"></image>
            <view class="scale-border" style="padding: 14px 10px 0px; box-sizing: border-box; width: 99%; transform: translateX(2px);">
              <view class="more-imp-info">
                
                <view class="input-item">
                  <view class="input-title">
                    <view>产品名称</view>
                  </view>
                  <view class="input-box">
                    <input type="text" v-model="item.productName" maxlength="15" placeholder="请输入" />
                    <view class="show-word-limit">
                      <text :class="{'have-num': item.productName.length > 0}">{{item.productName.length}}</text>
                      /15
                    </view>
                  </view>
                </view>
                <view class="input-item">
                  <view class="input-title">
                    <view>产品类型</view>
                  </view>
                  <view class="input-choose-action flex-bet" @tap="item.show = true">
                    <view :class="{'input-no-choose': item.productType == ''}">{{item.productType ? item.productType : '请选择'}}</view>
                    <image src="/static/arrow-right-img.png" class="arrow-right-img"></image>
                  </view>
                </view>
                
                <view class="input-item">
                  <view class="input-title">
                    <view>地址</view>
                  </view>
                  <view class="input-box">
                    <input type="text" v-model="item.address" placeholder="请输入" />
                  </view>
                </view>
                
              </view>
              
              <view class="more-imp-info-border"></view>
            </view>
          </view>
          <u-select v-model="item.show" :default-value="item.defaultIndex" :list="productTypeList" @confirm="selectProductType($event,item,index)"></u-select>
        </view> 
      </view>
      <view class="submit-btn">
        <u-button size="medium" @tap="cancel">取消</u-button>
        <u-button size="medium" type="primary" @tap="addCustomer()">提交</u-button>
      </view>
    </u-form>
    
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusInfo: state => state.customer.cusInfo
    })
  },
  data() {
    return {
      formData: {
        userName: '',
        mobile: [
          {remarks: '默认', mobile: ''}
        ],
        customerSource: '',
        age: '',
        sex: '',
        introduce: '',
        keyMessages: [
          {
            productName: '',
            productType: '',
            address: '',
            show: false,
            defaultIndex: []
          }
        ],
        address: '',
        birthday: ''
      },
      // 控制客户来源选择列 显示隐藏
      customerSourceShow: false,
      // 选择客户来源时,选中的默认值
      customerSourceDefaultIndex: [],
      // 客户来源列表
      customerSourceList: [
        {value: 0, label: '自然进店'},{value: 1, label: '展会活动'},
        {value: 2, label: '销售发掘'},{value: 3, label: '其他'}
      ],
      addressShow: false,
      addressDefault: [],
      sexShow: false,
      sex: '',
      sexDefaultIndex: [],
      sexlist: [
        {value: '0', label: '女'},{value: '1', label: '男'}
      ],
      birthdayShow: false,
      birthdayDefault: '',
      productTypeList: [
        {value: 0, label: '产品'},{value: 1, label: '硬件'},
        {value: 2, label: '研发'},{value: 3, label: '服务'},
        {value: 4, label: '硬件(毛利)'},{value: 5, label: '服务包'},
        {value: 6, label: '钉钉服务包'},{value: 7, label: '钉钉专业版'},
        {value: 9, label: '钉钉奖励金'}
      ],
      delKeyInfoList: []
    }
  },
  onLoad() {
    let customerInfo = this.$u.deepClone(this.cusInfo);
    for (let i in this.formData) {
      this.formData[i] = customerInfo[i]
    }
    this.sex = this.formData.sex == '1' ? '男': '女'
    this.formData.keyMessages[0].defaultIndex = []
  },
  methods: {
    ...mapMutations(['setCusInfo']),
    // 添加手机号
    addMobile() {
      let obj = {
        remarks: '',
        mobile: ''
      }
      this.formData.mobile.push(obj)
    },
    delMobile(i) {
      let arr = JSON.parse(JSON.stringify(this.formData.mobile))
      arr.splice(i-0+1,1)
      this.formData.mobile = arr
    },
    // 选择客户来源
    selectCustomerSource(data) {
      this.formData.customerSource = data[0].label
      this.customerSourceDefaultIndex[0] = data[0].value
    },
    // 选地址
    selectAddress(data) {
      this.formData.address = data.province.label + data.city.label + data.area.label
      this.addressDefault.push(data.province.value)
      this.addressDefault.push(data.city.value)
      this.addressDefault.push(data.area.value)
    },
    // 选择性别
    selectSex(data) {
      this.formData.sex = data[0].value
      this.sexDefaultIndex[0] = data[0].value
      this.sex = data[0].label
    },
    selectBirthday(data) {
      this.formData.birthday = `${data.year}-${data.month}-${data.day}`
      this.birthdayDefault = `${data.year}-${data.month}-${data.day}`
    },
    // 新增关键信息
    addImp() {
      let obj = {
        productName: '',
        productType: '',
        show: false,
        defaultIndex: []
      }
      this.formData.keyMessages.push(obj)
    },
    delImp(i,keyId) {
      let arr = this.$u.deepClone(this.formData.keyMessages);
      arr.splice(i-0+1,1)
      this.formData.keyMessages = arr
      
      this.delKeyInfoList.push(keyId)
    },
    // 选择产品类型
    selectProductType(data,item, index) {
      console.log(data);
      item.productType = data[0].label
      item.defaultIndex[0] = data[0].value
    },
    cancel() {
      const pages = getCurrentPages();
      console.log(pages);
      if (pages.length === 2) {
        uni.navigateBack({
          delta: 1
        });
      } else if (pages.length === 1) {
        uni.reLaunch({
          url: '/pages/customer/index'
        })
      } else {
        uni.navigateBack({
          delta: 1
        });
      }
    },
    // 提交
    addCustomer() {
      this.formData.id = this.cusInfo.id
      // for (let i in this.formData) {
      //   if (this.formData[i] == '') {
      //     this.$refs.uToast.show({
      //       title: `请输入${i}`,
      //       type: 'info'
      //     })
      //     return
      //   }
      // }
      let flag = 0
      if (this.delKeyInfoList.length != 0) {
        this.delKeyInfoList.forEach(item => {
          flag++
          this.$u.api.delKeyInfo({id: item}).then(res => {
          })
          
          if (flag === this.delKeyInfoList.length) {
            this.$u.api.editCustomer(this.formData).then(res => {
              this.$u.api.selectCusInfo({id: this.cusInfo.id}).then(res => {
                this.setCusInfo(res)
                uni.navigateBack({
                  delta: 1
                })
              })
            })
          }
        })
      } else {
        this.$u.api.editCustomer(this.formData).then(res => {
          this.$u.api.selectCusInfo({id: this.cusInfo.id}).then(res => {
            this.setCusInfo(res)
            uni.navigateBack({
              delta: 1
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}

.content-box {
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
.content-container {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 1.6rem;
  
  .header-item {
    padding: .933333rem 0 .773333rem;
    color: #262626;
    font-size: .613333rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-item {
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: .026667rem;
      transform: scaleY(.5);
      background-color: #f0f0f0;
    }
    
    .input-title {
      color: #262626;
      font-size: .346667rem;
      line-height: .506667rem;
      margin-top: .373333rem;
      display: flex;
      justify-content: space-between;
      font-family: PingFangSC-Light,PingFang SC;
      
      .input-title-must {
        position: relative;
        display: inline-block;
        
        &::after {
          content: "*";
          color: #f13030;
          font-size: .346667rem;
          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(100%);
        }
      }
    }
    .input-box {
      position: relative;
      
      input {
        width: 100%;
        margin: .373333rem 0 .533333rem;
        padding-right: .8rem;
        box-sizing: border-box;
        background-color: rgb(255, 255, 255);
      }
      .show-word-limit {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: .346667rem;
        color: #ccc;
        
        .have-num {
          color: rgb(57, 117, 197);
        }
      }
    }
    .more-phone {
      padding-bottom: .32rem;
      .more-phone-item {
        .more-phone-item-left {
          .more-phone-item-remark {
            width: 2.5rem;
          }
          .other-phone-split {
            width: .213333rem;
            height: .026667rem;
            background-color: #ccc;
            margin: 0 .373333rem;
          }
        }
      }
    }
    .input-choose-action {
      height: .56rem;
      padding: .373333rem 0 .533333rem;
      font-size: .4rem;
      color: #262626;
      box-sizing: content-box;
      
      .input-no-choose {
        color: #ccc;
      }
      .arrow-right-img {
        width: .24rem;
        height: .24rem;
      }
    }
  }
}
.add-del-phone-item {
  width: .373333rem;
  height: .373333rem;
  margin-right: .053333rem;
}
.add-del-imp-info {
  width: .453333rem;
  height: .453333rem;
  margin-right: .026667rem;
}
.self-del-imp-info {
  z-index: 8;
  position: absolute;
  right: 0;
  top: 0;
}
.scale-border {
  position: relative;
  padding: 0 .133333rem;
}
.more-imp-info {
  position: relative;
  z-index: 20;
}
.more-imp-info-border {
  transform: scale(.5);
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  z-index: 6;
  border: .026667rem #f0f0f0;
  border-radius: 6px;
  box-shadow: 0 .026667rem .186667rem 0 hsla(0,0%,80.4%,.35);
}
.submit-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  font-size: .4rem;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 .293333rem;
  z-index: 69;
  
  & button:first-child {
    width: 32%;
  }
  & button:last-child {
    width: 64%;
  }
}
</style>

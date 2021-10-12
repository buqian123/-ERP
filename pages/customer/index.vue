<template>
  <view class="customer">
    <view class="van-pull-refresh__head"></view>
    <view class="flush-header">
      <view class="search-header">
        <u-search placeholder="姓名(昵称)/手机号/地址(如碧桂园-2-3-102)" shape="square" :clearabled="true" 
        :show-action="false" v-model="search"></u-search>
      </view>
      <view class="filter">
        <view class="drop">
          <view class="drop-title">客户获取时间逆序</view>
          <view class="triangle"></view>
        </view>
        <view class="filter-item">
          <view class="ell">筛选</view>
          <view class="filter-more"></view>
        </view>
      </view>
      <view class="list-header flex-bet">
        <view>共{{cuslist.length}}人</view>
        <view class="filter-item">
          <view class="ell">全公司</view>
          <view class="filter-more"></view>
        </view>
      </view>
      <view class="nav-tab">
        <view class="nav-tab-container">
          <view class="text" :class="{current: navTabIndex == 0}" @tap="changeNavTabIndex(0)">线索</view>
          <view class="text" :class="{current: navTabIndex == 1}" @tap="changeNavTabIndex(1)">客户</view>
        </view>
      </view>
    </view>
    
    <view class="cus-list">
      
      <view class="synchro" v-if="navTabIndex == 0">
        <view>未找到最新添加的联系人？</view>
        <view class="right flex-jsac" @tap="refreshCustomer">
          <text>点击同步</text>
          <u-icon name="reload"></u-icon>
        </view>
      </view>
      
      <view class="status-ul" v-if="navTabIndex == 1">
        <view class="status-list" :class="{cur: status.length == 0}" @tap="changeNavStatus('all')">全部</view>
        <view class="status-list" v-for="item in navStatusList" :key="item.value"
        :class="{cur: status.indexOf(item.value) != -1}" @tap="changeNavStatus(item.value)">
          {{item.name}}
        </view>
      </view>
      
      <view class="cus-item" v-for="item in cuslist" :key="item.id">
        <view class="cus-info" @tap="goCusDetail(item.id)">
          <view class="info-box">
            <view class="info-left">
              <image src="../../static/logo.png" class="img"></image>
            </view>
            <view class="info-right">
              <view class="custom-name">
                {{item.userName}}
                <text>@微信</text>
              </view>
              <view class="follow-right">跟进人： {{item.followUpPerson}}</view>
            </view>
          </view>
          <view class="label-ul">
            <view class="label-list">{{item.customerSource}}</view>
          </view>
          <view class="btn-box">
            <text v-if="navTabIndex == 0" @tap="invalidTag(item)">标记无效</text>
            <text>转介绍人</text>
            <text v-if="navTabIndex == 0" @tap.stop="changeStatus(item)">转客户</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="no-data" v-if="cuslist.length == 0">
      <image src="/static/no-cus.png" class="img"></image>
      暂无客户
    </view>
    
    <view class="add-btn-box flex-cen">
      <view class="add flex-wrap flex-cen-col">
        <image src="/static/lingqu.png" class="img"></image>
        <text>领取</text>
      </view>
      <view class="line"></view>
      <view class="add flex-wrap flex-cen-col" @tap="addCustomer">
        <image src="/static/add.png" class="img"></image>
        <text>新建</text>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusTabIndex: state => state.customer.cusTabIndex
    })
  },
  data() {
    return {
      navTabIndex: 0,
      search: '',
      navStatusList: [
        { value: 1, name: '意向' },{ value: 2, name: '成单' },
        { value: 3, name: '交付' },{ value: 4, name: '复购' },
        { value: 5, name: '联购' },{ value: 6, name: '丢单' },
        { value: 7, name: '无效' }
      ],
      status: [],
      cuslist: []
    }
  },
  onLoad() {
    this.setDefault()
    this.setLastPath('')
    if (this.cusTabIndex) {
      this.navTabIndex = this.cusTabIndex
    }
    if (this.navTabIndex == 0) {
      this.refreshCustomer()
    } else {
      this.getCusByStatus()
    }
  },
  methods: {
    ...mapMutations(['setTabIndex', 'setDefault', 'setLastPath']),
    // 通过当前选择状态查询客户
    getCusByStatus() {
      // 状态为全部时， 不传status参数
      if (this.status.length == 0) {
        this.cuslist=[]
        this.$u.api.queryCustomerByStatus().then(res => {
          this.cuslist = res
        })
      } else {
        this.cuslist=[]
        this.$u.api.queryCustomerByStatus({status: this.status}).then(res => {
          this.cuslist = res
        })
      }
    },
    // 获取 状态为线索的客户
    refreshCustomer() {
      this.cuslist=[]
      this.$u.api.queryCustomerByStatus({status: [0]}).then(res => {
        this.cuslist = res
      })
    },
    // 选择线索 /  客户
    changeNavTabIndex(index) {
      this.navTabIndex = index
      let tab = {
        type: 'cusTabIndex',
        value: index
      }
      this.setTabIndex(tab)
      if (index == 0) {
        this.refreshCustomer()
      }
      if (index == 1) {
        this.status = []
        this.getCusByStatus()
      }
    },
    // 选择客户状态
    changeNavStatus(val) {
      if (val == 'all') {
        this.status = []
      } else {
        this.status.indexOf(val) == -1 ? this.status.push(val) : this.status.splice(this.status.indexOf(val), 1)
      }
      this.getCusByStatus()
    },
    // 客户详情页面
    goCusDetail(id) {
      this.$store.commit('setCusId', id)
      uni.navigateTo({
        url: '/pages/customer/cusDetail'
      })
    },
    // 新建客户
    addCustomer() {
      uni.navigateTo({
        url: '/pages/customer/addCustomer'
      })
    },
    // 转客户
    changeStatus(item) {

      let data =  {
        id: item.id,
        status: '1'
      }
      this.$u.api.changeCusStatus(data).then(res => {
        this.refreshCustomer()
      })
    },
    // 标记无效
    invalidTag(item) {
      let data =  {
        id: item.id,
        status: '7'
      }
      this.$u.api.editCusStatus(data).then(res => {
        this.refreshCustomer()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.customer {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
  position: relative;
}
.van-pull-refresh__head {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.333333rem;
  overflow: hidden;
  color: #969799;
  font-size: .373333rem;
  line-height: 1.333333rem;
  text-align: center;
  transform: translateY(-100%);
  
}
.flush-header {
  background-color: #3975c5;
  height: 4.906667rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.search-header {
  display: flex;
  background-color: #3975c5;
  height: 1.76rem;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
  padding: .266667rem .32rem;
}
.filter {
  height: .8rem;
  display: flex;
  background-color: #3975c5;
  align-items: center;
  padding-left: .293333rem;
  position: relative;
  z-index: 10;

} 
.list-header {
  height: 1.2rem;
  margin-top: -.026667rem;
  background-color: #3975c5;
  padding: .266667rem .293333rem;
  font-size: .32rem;
  color: hsla(0,0%,100%,.5);
  position: relative;
  z-index: 9;
}
.nav-tab {
  background: #fff;
  
  .nav-tab-container {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 50%;
    height: 1.173333rem;
    padding: 0 .293333rem;
    
    .text {
      position: relative;
      margin-right: .96rem;
      font-family: PingFangHK-Regular,PingFangHK;
      font-size: .346667rem;
      font-weight: 400;
      line-height: .533333rem;
      color: #262626;
    }
    .current {
      color: #3975c5;
      
      &::after {
        position: absolute;
        top: .773333rem;
        left: 50%;
        display: block;
        width: .8rem;
        height: .053333rem;
        margin-left: -.426667rem;
        content: "";
        background: #3975c5;
      }
    }
  }
}
.filter-item {
  background-color: #1b5db3;
  color: #fff;
  font-size: .32rem;
  height: .666667rem;
  display: flex;
  align-items: center;
  line-height: 1;
  padding: 0 .213333rem;
  border-radius: .053333rem;
  margin-right: .4rem;
  
  .filter-more {
    width: 0;
    height: 0;
    border-color: transparent #fff transparent transparent;
    border-style: solid;
    border-width: .106667rem .106667rem 0 0;
    margin-left: .093333rem;
    margin-bottom: -.186667rem;
  }
}
.drop {
  display: flex;
  align-items: center;
  height: .666667rem;
  overflow: hidden;
  background-color: #1b5db3;
  border-radius: .053333rem;
  box-sizing: border-box;
  padding: 0 .213333rem;
  font-size: .32rem;
  margin-right: .266667rem;
  
  .drop-title {
    max-width: 100%;
    // font-size: .4rem;
    line-height: .586667rem;
    color: #fff !important;
    font-size: .32rem;
    font-weight: 400;
  }
  
  .triangle {
    width: 0;
    height: 0;
    border-bottom: .106667rem solid #fff;
    border-left: .106667rem solid transparent;
    margin: .133333rem 0 0 .133333rem;
    border-bottom-color: #3975c5;
  }
}

.cus-list {
  position: relative;
  padding-top: 5.92rem;
  
  .synchro {
    width: 100%;
    height: 1.013333rem;
    background-color: #eaf3ff;
    box-sizing: border-box;
    padding: 0 .333333rem;
    display: flex;
    align-items: center;
    color: #3975c5;
    font-size: .32rem;
    position: fixed;
    top: 4.906667rem;
    left: 0;
    z-index: 9;
    
    .right {
      height: 100%;
    }
  }
  
  .status-ul {
    width: 100%;
    display: flex;
    padding: .4rem 0 .16rem 0;
    background: #fff;
    position: fixed;
    top: 4.906667rem;
    left: 0;
    z-index: 9;
    
    .status-list {
      box-sizing: border-box;
      display: flex;
      padding: .053333rem .16rem .053333rem .186667rem;
      margin-left: .24rem;
      font-family: PingFangSC-Regular,PingFang SC;
      font-size: .32rem;
      font-weight: 400;
      line-height: .453333rem;
      color: #7b7b7b;
      background: none;
    }

    .cur {
      color: #3975c5;
      background: #ebf4ff;
      border-radius: .266667rem;
    }
  }
  
  
  
  
  .cus-item {
    width: 100%;
    height: auto;
    padding: 0 .293333rem;
    background: #fff;
    
    .cus-info {
      width: 100%;
      height: auto;
      padding: .293333rem 0 .106667rem 0;
      
      .info-box {
        width: 100%;
        display: flex;
        align-items: center;
        .info-left {
          display: flex;
          align-items: center;
          width: 1.173333rem;
          height: 1.173333rem;
          margin-right: .24rem;
          
          .img {
            width: 1.173333rem;
            height: 1.173333rem;
          }
        }
        
        .info-right {
          flex: 1;
          
          .custom-name {
             max-width: 7.466667rem;
             overflow: hidden;
             font-family: PingFangSC-Regular,PingFang SC;
             font-size: .426667rem;
             font-weight: 400;
             line-height: .613333rem;
             color: #262626;
             text-overflow: ellipsis;
             white-space: nowrap; 
             
             text {
               margin-left: .12rem;
               color: #1f9400;
             }
          }
          
          .follow-right {
            max-width: 7.466667rem;
            margin-top: .106667rem;
            overflow: hidden;
            font-family: PingFangSC-Regular,PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            line-height: .453333rem;
            color: #999;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      
      .label-ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 1.413333rem;
        margin-top: .106667rem;
        
        .label-list {
          box-sizing: border-box;
          height: .506667rem;
          padding: 0 .133333rem;
          margin-right: .16rem;
          margin-bottom: .16rem;
          font-family: PingFangSC-Regular,PingFang SC;
          font-size: .32rem;
          font-weight: 400;
          line-height: .533333rem;
          color: #fd8517;
          background: #fff2e6;
          border-radius: .053333rem;
        }
      }
      
      .btn-box {
        width: 100%;
        height: 1.28rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        text {
          padding: .186667rem .266667rem;
          border-radius: .386667rem;
          border: 1px solid #ccc;
          color: #262626;
          font-size: .32rem;
          margin-left: .266667rem;
        }
      }
      
    }
  }
  
}
.no-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.6rem;
  font-family: PingFangSC-Regular,PingFang SC;
  font-size: .32rem;
  font-weight: 400;
  line-height: .453333rem;
  color: #999;
  text-align: center;
  
  .img {
    width: 2rem;
    height: 2rem;
  }
}
.add-btn-box {
  width: 3.84rem;
  height: 1.36rem;
  background: linear-gradient(198deg,#5688ff,#2472d9);
  box-shadow: 0 .04rem .106667rem 0 rgba(59,130,228,.3);
  border-radius: .833333rem;
  position: fixed;
  right: .293333rem;
  bottom: 1.333333rem;
  z-index: 9;
  
  .add {
    height: 100%;
    
    .img {
      width: .533333rem;
      height: .533333rem;
      margin-bottom: .053333rem;
    }
    text {
      display: block;
      height: .44rem;
      line-height: .44rem;
      font-size: .32rem;
      font-weight: 600;
      color: #fff;
    }
  }
  .line {
    width: .013333rem;
    height: .92rem;
    background-color: hsla(0,0%,100%,.22);
    margin-left: .493333rem;
    margin-right: .493333rem;
  }
}
</style>

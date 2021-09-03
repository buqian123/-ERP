<template>
  <view class="demand">
    <view class="van-pull-refresh__head"></view>
    <view class="flush-header">
      <view class="search-header">
        <u-search placeholder="姓名(昵称)/手机号/地址(如碧桂园-2-3-102)" shape="square" :clearabled="true" 
        :show-action="false" v-model="search"></u-search>
      </view>
      <view class="filter">
        <view class="filter-item">
          <view class="ell">筛选</view>
          <view class="filter-more"></view>
        </view>
      </view>
      
      <view class="tab-list">
        <view class="tab-item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">全部</view>
        <view class="tab-item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 1">待分配</view>
        <view class="tab-item" :class="{curr: tabIndex == 2}" @tap="tabIndex = 2">待确认</view>
        <view class="tab-item" :class="{curr: tabIndex == 3}" @tap="tabIndex = 3">进行中</view>
        <view class="tab-item" :class="{curr: tabIndex == 4}" @tap="tabIndex = 4">已完成</view>
        <view class="tab-item" :class="{curr: tabIndex == 5}" @tap="tabIndex = 5">已撤销</view>
      </view>
      <view class="all-counts">共2个服务单，1个客户，1个客户需求</view>
    </view>
    <view class="linear-background"></view>
    <view class="service-ul">
      <view class="service-item" v-for="(item, index) in 2" :key="index" @tap="goDetail">
        <view class="service-item-top">
          <view class="text"> 服务编号：202109011051061442906839 </view>
          <view class="text"> 服务单类型：测量-示例(请去PC端修改) </view>
          <view class="text"> 派单时间：2021-09-01 10:51 </view>
          <view class="text"> 客户：AnDragon </view>
          <view class="text flex-jsac">
            <text>详细地址：杭州解百城市奥莱A座-A8-1-1011</text>
            <image src="/static/address.png" class="img"></image>
          </view>
          <view class="text flex-jsac mg">
            <text class="t1">示例(请去PC端修改)</text>
            <text class="t2">已签约</text>
          </view>
        </view>
        <view class="service-item-center flex-cen">
          <view class="service-person">ZhengYu</view>
          <view class="service-arrive">进行中</view>
          <view class="service-person">ZhengYu</view>
        </view>
        <view class="service-item-bottom flex-jeac">
          <view class="service-btn-ul flex-jeac">
            <view class="btn-list">详情</view>
            <view class="btn-list cur">去服务</view>
          </view>
        </view>
      </view>
    </view>
    <view class="van-list__finished-text">已显示全部数据</view>
    <view class="van-list__placeholder"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      tabIndex: 0
    }
  },
  methods: {
    goDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demand {
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
.header-bgc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #3975c5;
  height: 8.02667rem;
}
.flush-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  right: 0;
  background: #3975c5;
  padding: .266667rem;
}
.search-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .4rem 0;
}
.filter {
  width: 100%;
  height: .8rem;
  display: flex;
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

.tab-list {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: .38rem 0;
  
  .tab-item {
    position: relative;
    font-family: PingFangHK-Regular,PingFangHK;
    font-size: .373333rem;
    font-weight: 400;
    line-height: .533333rem;
    color: #fff;
    opacity: .5;
  }
  .curr {
    opacity: 1;
  }
}
.all-counts {
  color: rgb(255, 255, 255);
  opacity: 0.68;
  font-size: 12px;
}
.linear-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  height: 5.066667rem;
  background-color: #3975c5;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -2.07rem;
    height: 2.08rem;
    left: 0;
    right: 0;
    background: linear-gradient(180deg,#3975c5,rgba(57,117,197,0));
  }
}
.service-ul {
  width: 100%;
  padding: 4.906667rem .293333rem 0;
  margin-top: .266667rem;
  position: relative;
  z-index: 4;
  .service-item {
    margin-top: .4rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    border-radius: .106667rem;
  
    &:first-child {
      margin-top: 0;
    }
  
    .service-item-top {
      width: 100%;
      padding: .266667rem .32rem 0;
  
      .mg {
        margin-top: .146667rem !important;
        margin-bottom: .26666rem !important;
      }
  
      .text {
        width: 100%;
        height: .44rem;
        font-size: .32rem;
        line-height: .44rem;
        color: #7b7b7b;
        margin-bottom: .106667rem;
  
        .img {
          width: .506667rem;
          height: .506667rem;
          margin-left: .133334rem;
        }
  
        text {
          box-sizing: border-box;
          border-radius: .053333rem;
          font-size: .32rem;
          margin-right: .12rem;
        }
  
        .t1 {
          padding: .053333rem .133333rem;
          color: #fd8517;
          max-width: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          border: .013333rem solid #ffa14c;
        }
  
        .t2 {
          padding: .053333rem .133333rem;
          color: #1f9400;
          border: .013333rem solid #1f9400;
        }
      }
    }
  
    .service-item-center {
      padding: .88rem .32rem;
      background-color: #f5f9ff;
  
      .service-person {
        width: 1.733333rem;
        height: .56rem;
        overflow: hidden;
        font-size: .4rem;
        font-weight: 400;
        line-height: .56rem;
        color: #262626;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  
      .service-arrive {
        width: 1.626667rem;
        height: .853333rem;
        font-size: .373333rem;
        font-weight: 400;
        line-height: .533333rem;
        color: #3975c5;
        text-align: center;
        // background-image: url(../../../static/arrive.png);
        background-image: url("/static/arrive.png");
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: 1.626667rem .213333rem;
        margin: 0 1.33333rem .106667rem 1.626667rem;
      }
    }
    .service-item-bottom {
      height: 1.226667rem;
      box-sizing: border-box;
      padding: 0 .32rem;
      .service-btn-ul {
        width: 100%;
        
        .btn-list {
          box-sizing: border-box;
          height: .773333rem;
          line-height: .773333rem;
          padding: 0 .266667rem;
          margin-left: .266667rem;
          font-size: .32rem;
          font-weight: 400;
          color: #262626;
          border-radius: .386667rem;
          border: .013333rem solid #ccc;
        }
        
        .cur {
          color: #3975c5;
          border-color: #3975c5;
        }
      }
    }
  }
}
.van-list__finished-text {
  color: #969799;
  font-size: .373333rem;
  line-height: 1.333333rem;
  text-align: center;
}
.van-list__placeholder {
  height: 0;
  pointer-events: none;
}
</style>

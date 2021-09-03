<template>
  <view class="demand">
    <view class="van-pull-refresh__head"></view>
    <view class="header-bgc"></view>
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
      
      <view class="tab-list">
        <view class="tab-item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">全部</view>
        <view class="tab-item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 1">跟进中</view>
        <view class="tab-item" :class="{curr: tabIndex == 2}" @tap="tabIndex = 2">已签约</view>
        <view class="tab-item" :class="{curr: tabIndex == 3}" @tap="tabIndex = 3">已交付</view>
        <view class="tab-item" :class="{curr: tabIndex == 4}" @tap="tabIndex = 4">已流失</view>
      </view>
      <view class="list-header flex-bet">
        <view>共2个需求</view>
        <view class="filter-item">
          <view class="ell">全公司</view>
          <view class="filter-more"></view>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="bgc-container">
        <view class="price-count">
          <view class="price-count-item">
            <view class="price-count-item-price">
              100.00
              <text class="unit">万元</text>
            </view>
            <view class="price-count-item-text">合同总金额</view>
          </view>
          <view class="price-count-item">
            <view class="price-count-item-price">
              50.00
              <text class="unit">万元</text>
            </view>
            <view class="price-count-item-text">已收总金额</view>
          </view>
          <view class="price-count-item">
            <view class="price-count-item-price">
              50.00
              <text class="unit">万元</text>
            </view>
            <view class="price-count-item-text">待收总金额</view>
          </view>
        </view>
      </view>
      <view class="liner-grand-bgc"></view>
      <view class="list">
        <view class="list-box">
          <view class="item" v-for="(item, index) in 3" :key="index" @tap="goDetail">
            <view class="info flex-bet">
              <view class="info-left flex-jsac">
                <view class="avatar">
                  <image src="/static/avatar-default-img.png" class="img"></image>
                </view>
                <view class="info-name">AnDragon</view>
                <view class="wx-flag">@微信</view>
              </view>
            </view>
            <view class="sale-top">
              <view class="content-item">
                <view class="scale-border">
                  <view class="orange">示例(请去PC端修改)</view>
                  <view class="ob border"></view>
                </view>
                <view class="scale-border">
                  <view class="orange">零售</view>
                  <view class="ob border"></view>
                </view>
                <view class="scale-border">
                  <view class="orange">D类需求</view>
                  <view class="ob border"></view>
                </view>
                <view class="scale-border">
                  <view class="orange">需求指数10%</view>
                  <view class="ob border"></view>
                </view>
                <view class="scale-border">
                  <view class="green">已签约</view>
                  <view class="gb border"></view>
                </view>
              </view>
              <view class="content-item">
                <view class="scale-border">
                  <view class="zi">ZhengYu跟进</view>
                  <view class="zb border"></view>
                </view>
                <view class="scale-border">
                  <view class="zi">张三介绍</view>
                  <view class="zb border"></view>
                </view>
              </view>
              <view class="content-item">
                <view class="progress-item">昨天已联系</view>
              </view>
              <view class="sell-info">
                <view class="info-text-list ell">客户地址: 客户地址：杭州解百城市奥莱A座小区A8幢1单元1011室</view>
                <view class="info-text-list ell">最新跟新：跟进内容测试测试测试</view>
                <view class="info-text-list ell">签单时间：09-01 10:47</view>
                <view class="info-text-list ell">创建时间：09-01 10:38</view>
              </view>
            </view>
            <view class="money-ul">
              <view class="money-list">
                <view class="money-text">1000000</view>
                <view class="money-tips">合同金额</view>
              </view>
              <view class="money-list">
                <view class="money-text">500000</view>
                <view class="money-tips">已收金额</view>
              </view>
              <view class="money-list">
                <view class="money-text">500000</view>
                <view class="money-tips">待收金额</view>
              </view>
            </view>
            <view class="wx-btns">
              <view class="scale-border">
                <view class="text">微信</view>
                <view class="border"></view>
              </view>
            </view>
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
        url: '/pages/customer/cus-detail-type/demand/demand-detail/index'
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
  background-color: #3975c5;
  height: 4.746667rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
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
  height: .666667rem;
  margin-top: -.026667rem;
  background-color: #3975c5;
  padding: 0 .293333rem;
  display: flex;
  align-items: center;
  font-size: .32rem;
  color: hsla(0,0%,100%,.72);
  justify-content: space-between;
  position: relative;
  z-index: 9;
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

.tab-list {
  height: 1.306667rem;
  padding: 0 .293333rem;
  background-color: #3975c5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .346667rem;
  position: relative;
  z-index: 9;
  
  .tab-item {
    color: hsla(0,0%,100%,.5);
    font-weight: 500;
    position: relative;
  }
  .curr {
    color: #fff!important;
  }
}
.content {
  position: relative;
  z-index: 8;
  padding-top: 4.746667rem;
  
  .bgc-container {
    width: 100%;
    padding-bottom: .266667rem;
    background-color: #3975c5;
    padding: 0 .293333rem .266667rem;
    box-sizing: border-box;
    
    .price-count {
      display: flex;
      background-color: #5e97e3;
      border-radius: .106667rem;
      height: 2rem;
      color: #fff;
      .price-count-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        
        .price-count-item-price {
          font-size: .48rem;
          font-weight: 600;
          line-height: .666667rem;
          margin-bottom: .053333rem;
          
          .unit {
            font-size: 16px;
            margin-left: 1px;
          }
        }
        
        .price-count-item-text {
          font-size: .32rem;
          line-height: .453333rem;
        }
      }
    }
  }
  .liner-grand-bgc {
    width: 100%;
    height: 2.08rem;
    background: linear-gradient(180deg,#3975c5,rgba(57,117,197,0));
    transform: translateY(-.026667rem);
    position: fixed;
    left: 0;
    right: 0;
    top: 8.02667rem;
  }
  .list {
    height: auto;
    padding: 0 .293333rem .293333rem;
    position: relative;
    .list-box {
      position: relative;
      z-index: 20;
      
      .item {
        background-color: #fff;
        border-radius: .106667rem;
        margin-bottom: .266667rem;
        
        .info {
          height: 1.44rem;
          justify-content: space-between;
          padding: 0 .293333rem;
          
          .info-left {
            .avatar {
              width: 24px;
              height: 24px;
              
              .img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
            .info-name {
              font-size: .4rem;
              color: #262626;
              margin-left: .24rem;
              max-width: 3.866667rem;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
            }
            .wx-flag {
              color: #1f9400;
              font-size: .4rem;
              margin-left: .16rem;
            }
          }
        }
        
        
        
        .sale-top {
          box-sizing: border-box;
          padding: 0 .293333rem;
        
          .content-item {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: .16rem;
        
            .progress-item {
              color: #7b7b7b;
              background-color: #f5f5f5;
              font-size: .32rem;
              border-radius: .053333rem;
              padding: .08rem .133333rem;
              line-height: 1;
              margin-right: .186667rem;
              margin-bottom: .16rem;
            }
        
            .scale-border {
              position: relative;
              padding: 0 .133333rem;
              margin-right: 5px;
              margin-bottom: 6px;
        
              .border {
                transform: scale(.5);
                position: absolute;
                border: .026667rem solid;
                top: -50%;
                right: -50%;
                bottom: -50%;
                left: -50%;
              }
        
              .orange {
                color: rgb(255, 161, 76);
                font-size: 12px;
                padding: 3px 0px;
                max-width: 120px;
              }
        
              .ob {
                border-radius: 4px;
                border-color: rgb(255, 161, 76);
              }
        
              .green {
                color: rgb(31, 148, 0);
                font-size: 12px;
                padding: 3px 0px;
              }
        
              .gb {
                border-radius: 4px;
                border-color: rgb(31, 148, 0);
              }
        
              .zi {
                color: rgb(135, 119, 223);
                font-size: 12px;
                padding: 3px 0px;
              }
        
              .zb {
                border-radius: 4px;
                border-color: rgb(135, 119, 223);
              }
        
            }
          }
        
          .sell-info {
            .info-text-list {
              margin-top: .106667rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-size: .32rem;
              font-weight: 400;
              line-height: .453333rem;
              color: #999;
            }
          }
        }
        
        .money-ul {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: .32rem 0 .373333rem 0;
          background: #fafcff;
          border-radius: 0 0 .106667rem .106667rem;
        
          .money-list {
            box-sizing: border-box;
            flex: 1;
            text-align: center;
        
            .money-text {
              font-family: PingFangSC-Medium, PingFang SC;
              font-size: .373333rem;
              font-weight: 500;
              line-height: .533333rem;
              color: #3975c5;
            }
        
            .money-tips {
              margin-top: .053333rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-size: .32rem;
              font-weight: 400;
              line-height: .453333rem;
              color: #3975c5;
            }
          }
        }
        .wx-btns {
          height: 1.306667rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 .293333rem;
          .scale-border {
            position: relative;
            padding: 0 .133333rem;
            
            .text {
              color: rgb(31, 148, 0);
              font-size: 12px;
              padding: 10px 19px;
            }
            .border {
              transform: scale(.5);
              position: absolute;
              border: .026667rem solid;
              top: -50%;
              right: -50%;
              bottom: -50%;
              left: -50%;
              border-radius: 42px;
              border-color: rgb(31, 148, 0);
            }
          }
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

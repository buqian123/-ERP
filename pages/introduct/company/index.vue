<template>
  <view class="company">
    <view class="van-pull-refresh__head"></view>
    <view class="introCompany">
      <view class="base"></view>
      <view class="flush-header">
        <view class="search-header">
          <u-search placeholder="姓名(昵称)/手机号/地址(如碧桂园-2-3-102)" shape="square" :clearabled="true" 
          :show-action="false" v-model="search"></u-search>
        </view>
        <view class="filter">
          <view class="filter-item">
            <view class="ell">倒序</view>
            <view class="filter-more"></view>
          </view>
          <view class="filter-item">
            <view class="ell">筛选</view>
            <view class="filter-more"></view>
          </view>
        </view>
        <view class="list-header flex-bet">
          <view class="count">共1个</view>
          <view class="filter-item" style="margin-right: 0;">
            <view class="ell">全公司</view>
            <view class="filter-more"></view>
          </view>
        </view>
      </view>
      <view class="com-list">
        <view class="com-item">
          <view class="title">测试有限公司</view>
          <view class="desc">
            <text>同行异业</text>
          </view>
          <view class="num-list">
            <view class="num flex-col flex-cen">
              <view class="text">推荐需求</view>
              <view class="count ell">1</view>
            </view>
            <view class="num flex-col flex-cen">
              <view class="text">签单需求</view>
              <view class="count ell">1</view>
            </view>
            <view class="num flex-col flex-cen">
              <view class="text">实收总额</view>
              <view class="count ell">500000元</view>
            </view>
            <view class="num flex-col flex-cen">
              <view class="text">分佣金额</view>
              <view class="count ell">0元</view>
            </view>
          </view>
          <view class="itr-peo flex-jeac">
            <text>查看介绍人(1)</text>
            <text class="icon">></text>
          </view>
        </view>
      </view>
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
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
    
  }
}
</script>

<style lang="scss" scoped>
.company {
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
  -webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}

.introCompany {
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
  box-sizing: border-box;
  padding-top: 3.893333rem;
  
  .base {
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    background-image: linear-gradient(top,#3975c5 3.893333rem,#f8f8f8 5.76rem);
    background-image: -moz-linear-gradient(top,#3975c5 3.893333rem,#f8f8f8 5.76rem);
    background-image: -webkit-linear-gradient(top,#3975c5 3.893333rem,#f8f8f8 5.76rem);
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .flush-header {
    width: 100%;
    background-color: #3975c5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    
    .search-header {
      width: 100%;
      height: 1.76rem;
      padding: .4rem .293333rem;
    }
    .filter {
      width: 100%;
      height: .8rem;
      display: flex;
      align-items: center;
      padding: 0 .293333rem;
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
    } 
    .list-header {
      width: 100%;
      height: 1.333333rem;
      padding: .386667rem .293333rem .28rem .293333rem;
      
      .count {
        color: #fff;
        font-size: .32rem;
        opacity: .63;
      }
    }
  }
}
.com-list {
  width: 100%;
  padding: 0 .293333rem;
  
  .com-item {
    width: 100%;
    background-color: #fff;
    border-radius: .106667rem;
    margin-bottom: .266667rem;
    
    .title {
      width: 100%;
      box-sizing: border-box;
      padding: .266667rem .293333rem .133333rem .293333rem;
      font-size: .373333rem;
      font-weight: 600;
      color: #262626;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .desc {
      width: 100%;
      padding: 0 .293333rem .266667rem .293333rem;
      text {
        display: inline-block;
        padding: .053333rem .106667rem;
        border: .013333rem solid #fd8517;
        border-radius: .053333rem;
        color: #fd8517;
        font-size: .32rem;
      }
    }
    .num-list {
      width: 100%;
      height: 1.706667rem;
      display: flex;
      align-items: center;
      background-color: #f5f9ff;
      
      .num {
        width: 25%;
        height: 100%;
        font-size: .32rem;
        color: #3975c5;
        
        .text {
          margin-bottom: .266667rem;
        }
        .count {
          width: 100%;
          text-align: center;
        }
      }
    }
    .itr-peo {
      width: 100%;
      height: 1.186667rem;
      font-size: .32rem;
      color: #999;
      box-sizing: border-box;
      padding: 0 .293333rem;
      .icon {
        margin-left: .213333rem;
        color: #999;
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

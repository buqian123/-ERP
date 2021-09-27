<template>
  <view class="materialLibrary">
    <view class="header-container">
      <view class="liner-grad-bgc"></view>
      <view class="nav-tabNav-tab">
        <view class="nav-tabContainer">
          <view class="nav-tabText" :class="{current: tabIndex == 0}" @tap="tabIndex = 0">雷达素材</view>
          <view class="nav-tabText" :class="{current: tabIndex == 1}" @tap="tabIndex = 1">表单</view>
        </view>
      </view>
      <view class="search">
        <u-search placeholder="请输入客户名称(昵称)/手机号" shape="square" :clearabled="true"
        :show-action="false" v-model="search"></u-search>
      </view>
      <view class="filter">
        <view class="filter-item">
          <view class="ell">筛选</view>
          <view class="filter-more"></view>
        </view>
      </view>
      <view class="filter-desc" v-if="tabIndex == 0">点击进入详情，进行分享</view>
    </view>
    <view class="introduct-content" v-if="tabIndex == 0">
      <view class="script-item">
        <view class="bg-white">
          <view class="script-item-top flex-bet">
            <view class="left">
              <view class="title">素材1</view>
              <view class="content">素材库</view>
            </view>
            <view class="right">
              <image src="/static/noRadar.png" class="img"></image>
            </view>
          </view>
          <view class="script-item-bottom flex-bet">
            <view class="text">个人转载</view>
            <view class="flex-jsac">
              <view class="btn">编辑</view>
              <view class="btn">删除</view>
            </view>
          </view>
        </view>
        <view class="van-list__placeholder"></view>
      </view>
    </view>
<!--    <view class="" v-if="tabIndex == 1">
      暂无数据
    </view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
  
.materialLibrary {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
}
.header-container {
  background-color: #3975c5;
  position: relative;
  
  .liner-grad-bgc {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.08rem;
    background: linear-gradient(180deg,#3975c5,rgba(57,117,197,0));
    transform: translateY(2.053333rem);
  }
  .nav-tabNav-tab {
    width: 100%;
    padding: .4rem .293333rem 0;
    background-color: #3975c5;
    
    .nav-tabContainer {
      display: flex;
      align-items: center;
      width: 100%;
      height: .586667rem;
      
      .nav-tabText {
        position: relative;
        font-size: .426667rem;
        font-weight: 500;
        margin-right: .666667rem;
        color: hsla(0,0%,100%,.6);
        
        &:first-child {
          margin-left: 0;
        }
      }
      
      .current {
        font-weight: 500;
        color: #fff;
      }
    }
  }
  
  .search {
    z-index: 5;
    right: 0;
    background: #3975c5;
    padding: .266667rem;
  }
  .filter {
    background-color: #3975c5;
    display: flex;
    align-items: center;
    position: relative;
    height: .8rem;
    padding-left: .293333rem;
    margin-bottom: 10px;
    
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
  
  .filter-desc {
    padding: 0 .293333rem .293333rem;
    color: #fff;
    font-size: .32rem;
    opacity: .72;
  }
}
.introduct-content {
  width: 100%;
  height: 100%;
  flex: 1;
  overflow-y: auto;
  position: relative;
  padding: 0 .293333rem .533333rem;
  
  .script-item {
    background: #fff;
    border-radius: .106667rem;
    
    .bg-white {
      background: #fff;
      border-radius: .106667rem;
      padding: .48rem .293333rem .213333rem;
    
      .script-item-top {
        font-size: .32rem;
        font-weight: 400;
        line-height: .453333rem;
        color: #262626;
        padding-bottom: .266667rem;
        
        .left {
          width: 7.12rem;
          height: 1.52rem;
          
          .title {
            font-size: .373333rem;
            color: #262626;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            line-height: .533333rem;
          }
          .content {
            margin-top: .106667rem;
            font-size: .32rem;
            color: #7b7b7b;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-height: .44rem;
          }
        }
        .right {
          width: 1.52rem;
          height: 1.52rem;
          border-radius: .053333rem;
          
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
      
      .script-item-bottom {
        width: 100%;
        font-size: .32rem;
        font-weight: 400;
        color: #7b7b7b;
        padding-bottom: .053333rem;
        
        .text {
          color: #3975c5;
          font-size: .32rem;
          height: .8rem;
          line-height: .8rem;
        }
        .btn {
          box-sizing: border-box;
          height: .8rem;
          line-height: .8rem;
          padding: 0 .266667rem;
          margin-left: .266667rem;
          font-size: .32rem;
          font-weight: 400;
          color: #262626;
        }
      }
    }
    
    .van-list__placeholder {
      height: 0;
      pointer-events: none;
    }
  }
}
</style>

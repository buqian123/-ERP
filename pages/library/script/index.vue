<template>
  <view class="scriptLibrary">
    <view class="header-container">
      <view class="nav-tabNav-tab">
        <view class="nav-tabContainer">
          <view class="nav-tabText" :class="{current: tabIndex == 0}" @tap="tabIndex = 0">企业常用语</view>
          <view class="nav-tabText" :class="{current: tabIndex == 1}" @tap="tabIndex = 1">个人常用语</view>
        </view>
      </view>
      <view class="search">
        <u-search placeholder="请输入客户名称(昵称)/手机号" shape="square" :clearabled="true"
        :show-action="false" v-model="search"></u-search>
      </view>
      <view class="operation">
        <view class="filter">
          <view class="filter-item curr">全部常用语</view>
        </view>
        <view class="btn flex-jeac">
          <view class="add">新增</view>
          <view class="sort">排序</view>
        </view>
      </view>
    </view>
    <view class="script-list">
      <view class="item">
        <view class="item-top">
          <view class="keyword">
            <text>您好</text>
          </view>
          <view class="text">您好，请问有什么可以帮助您的吗?</view>
        </view>
        <view class="item-bottom flex-jeac">
          <view class="btn flex-cen">删除</view>
          <view class="btn flex-cen">编辑</view>
          <view class="btn flex-cen copy">删除</view>
        </view>
      </view>
    </view>
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
.scriptLibrary {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
}
.header-container {
  background-color: #3975c5;
  position: relative;
  padding-bottom: .266667rem;
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
  .operation {
    width: 100%;
    padding: 0 .293333rem;
    background-color: #3975c5;
    
    .filter {
      width: 100%;
      .filter-item {
        display: inline-block;
        font-size: .32rem;
        padding: 0 .266667rem;
        background-color: hsla(0,0%,100%,.13);
        border-radius: .586667rem;
        height: .586667rem;
        line-height: .586667rem;
        margin-right: .266667rem;
        margin-top: .266667rem;
        color: #fff;
        
        &:last-child {
          margin-right: 0;
        }
      }
      .curr {
        color: #3975c5;
        font-weight: 500;
        background-color: #fff;
      }
      
    }
  }
  .btn {
    color: #fff;
    position: relative;
    height: .906667rem;
    margin-top: .266667rem;
    
    .add {
      
    }
    .sort {
      
    }
  }
}

.script-list {
  height: 100%;
  flex: 1;
  overflow-y: auto;
  position: relative;
  
  .item {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .266667rem .293333rem;
    border-bottom: .013333rem solid #f0f0f0;
    background-color: #fff;
    
    &:last-child {
      border-bottom: none;
    }
    
    .item-top {
      font-size: .32rem;
      font-weight: 400;
      line-height: .453333rem;
      color: #262626;
      
      .keyword {
        font-size: .32rem;
        font-weight: 400;
        line-height: .453333rem;
        color: #262626;
        margin-bottom: .2666rem;
        
        text {
          border-radius: .053333rem;
          color: #3975c5;
          font-size: .32rem;
          padding: .133333rem .266667rem;
          height: .64rem;
          line-height: .64rem;
          background-color: #eff5ff;
        }
      }
      .text {
        font-size: .32rem;
        font-weight: 400;
        line-height: .453333rem;
        color: #262626;
      }
    }
    
    .item-bottom {
      width: 100%;
      font-size: .32rem;
      font-weight: 400;
      line-height: .453333rem;
      color: #7b7b7b;
      margin-top: .266667rem;
      
      .btn {
        height: .773333rem;
        padding: 0 .266667rem;
        margin-left: .266667rem;
        font-size: .32rem;
        font-weight: 400;
        color: #262626;
        border: 1px solid #ebedf0;
        border-radius: 26rem;
      }
      .copy {
        color: rgb(57, 117, 197);
        border-color: rgb(57, 117, 197);
      }
    }
  }
}
</style>

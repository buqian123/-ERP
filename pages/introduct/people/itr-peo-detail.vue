<template>
  <view class="wrap">
    <view class="bgc-container">
      <view class="bgc" :class="{'bgc-clue': tabIndex == 1}"></view>
      <view class="bgc-line-gra" :class="{'bgc-clue-line': tabIndex == 1}"></view>
    </view>
    <view class="header">
      <view class="header-user-info">
        <view class="user flex">
          <view class="user-avater">
            <image src="/static/avatar-default-img.png" class="img"></image>
          </view>
          <view class="detail-info">
            <view class="detail-info-top flex-bet">
              <view class="flex-jsac">
                <view class="username">张三</view>
                <view class="desc">设计师</view>
              </view>
              <view class="peo flex-cen">对接人：ZhengYu</view>
            </view>
            <view class="company">公司名称：测试有限公司</view>
          </view>
        </view>
        <view class="user-actions flex-jsac">
          <view>电话</view>
          <view class="line"></view>
          <view>修改</view>
          <view class="line"></view>
          <view>转交</view>
          <view class="line"></view>
          <view @tap="delPeo.show = true">删除</view>
          <u-modal v-model="delPeo.show" :title="delPeo.title" :content="delPeo.content" :show-cancel-button="true" confirm-color="#1f9400"></u-modal>
        </view>
      </view>
      <view class="sale-chance-list">
        <view class="list-item" v-for="(item, index) in 6" :key="index">
          <view class="title">推荐需求</view>
          <view class="num">1</view>
        </view>
      </view>
      <view class="tab flex-bet">
        <view class="tab-item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">跟进管理</view>
        <view class="tab-item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 1">推荐管理</view>
        <view class="tab-item" :class="{curr: tabIndex == 2}" @tap="tabIndex = 2">操作日志</view>
      </view>
    </view>
    
    <Follow v-if="tabIndex == 0"></Follow>
    <Recommend v-if="tabIndex == 1"></Recommend>
    <Log v-if="tabIndex == 2"></Log>
  </view>
</template>

<script>
import Follow from './detail-type/follow.vue'
import Recommend from './detail-type/recommend/index.vue'
import Log from './detail-type/log.vue'
export default {
  components: { 
    Follow,
    Recommend,
    Log
  },
  data() {
    return {
      tabIndex: 0,
      delPeo: {
        show: false,
        title: '确认删除么？',
        content: '删除后，该介绍人的所有对接人都将看不到该介绍人，且他介绍的需求中的介绍人也都会置空。'
      }
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
}
.wrap {
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
}
.bgc-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .bgc {
    height: 9.226667rem;
    background-color: #3975c5;
  }
  .bgc-line-gra {
    height: 1.86667rem;
    background: linear-gradient(rgb(57, 117, 197), rgba(57, 117, 197, 0));
    margin-top: -.026667rem;
  }
  .bgc-clue {
    height: 10.32rem !important;
  }
  .bgc-clue-line {
    height: 1.866667rem;
    background: linear-gradient(180deg,#3975c5,rgba(57,117,197,0));
  }
}
.header {
  position: relative;
  .header-user-info {
    height: 2.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.4rem 0.293333rem;
    
    .user {
      .user-avater {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        .img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .detail-info {
        height: 1.33333rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.106667rem 0px;
        flex: 1 1 0%;
        
        .detail-info-top {
          .username {
            font-size: 16px;
            color: rgb(255, 255, 255);
            margin-right: 11px;
          }
          .desc {
            color: rgb(255, 255, 255);
            height: 18px;
            font-size: 12px;
            background-color: rgb(94, 151, 227);
            border-radius: 2px;
            padding: 2px 5px;
          }
          .peo {
            color: rgba(255, 255, 255, 0.6);
            font-size: 12px;
          }
        }
        
        .company {
          max-width: 6.93333rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 0.32rem;
          color: rgba(255, 255, 255, 0.6);
          overflow: hidden;
        }
      }
    }
    .user-actions {
      font-size: 0.32rem;
      color: rgba(255, 255, 255, 0.701961);
      margin-left: 1.6rem;
      
      .line {
        width: 0.026667rem;
        height: 0.266667rem;
        background-color: rgb(255, 255, 255);
        transform: scaleX(0.5);
        opacity: 0.68;
        margin: 0px 0.453333rem;
      }
    }
  }
  .sale-chance-list {
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(94, 151, 227);
    color: rgb(255, 255, 255);
    height: 3.68rem;
    margin: 0px 0.293333rem;
    border-radius: 0.106667rem;
    .list-item {
      width: 33.33%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 0.32rem;
        font-weight: 500;
        line-height: 0.453333rem;
        margin-bottom: 0.24rem;
      }
      .num {
        font-size: 0.4rem;
        line-height: 0.56rem;
      }
    }
  }
  .tab {
    margin: 0.4rem 0px;
    padding: 0px 0.293333rem;
    .tab-item {
      font-weight: 500;
      font-size: 0.346667rem;
      color: rgba(255, 255, 255, 0.6);
      text-align: center;
    }
    .curr {
      color: rgb(255, 255, 255);
      font-weight: 500;
      border-radius: 0.346667rem;
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

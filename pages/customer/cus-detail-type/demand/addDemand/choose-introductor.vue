<template>
  <view class="choos-itr-page">
    <view class="content">
      <view class="search-header">
        <u-search placeholder="请输入员工姓名" v-model="searchVal" :show-action="false"></u-search>
      </view>
      <view class="responsible-name-new">以下为ZhengYu负责对接的介绍人，可「搜索」选择更多介绍人 </view>
      <view class="list">
        <view class="item flex-bet" v-for="item in introducerList" :key="item.id" @tap="selectItr(item)">
          <view class="left">
            <view class="item-peple">{{item.introducerName}}</view>
            <view class="item-company">{{'公司名称：' + item.companyName}}</view>
          </view>
          <view class="right">ZhengYu对接</view>
        </view>
        <view class="van-list__finished-text">已显示全部数据</view>
        <view class="van-list__placeholder"></view>
      </view>
    </view>
    <view class="submit-btn flex-bet">
      <view class="left flex-jsac" v-for="item in activeIntroducer" :key="id">
        <view class="choose">已选：</view>
        <view class="choose-list flex-jsac">
          <view class="item">
            <text>{{item.introducerName}}</text>
            <view class="img flex-cen">x</view>
          </view>
        </view>
      </view>
      <u-button class="btn" type="primary" size="medium" @tap="submit">确定</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      searchVal: '',
      introducerList: [],
      activeIntroducer: []
    }
  },
  onLoad() {
    this.$u.api.getIntroducer({offset: 100}).then(res => {
      this.introducerList = res
    })
  },
  methods: {
    selectItr(data) {
      this.activeIntroducer.push(data)
    },
    submit() {
      uni.redirectTo({
        url: '/pages/customer/cus-detail-type/demand/addDemand/index'
        // success() {
        //   setTimeout(() => {
        //     uni.$emit()
        //   },400)
        // }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.choos-itr-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f5f5f5;
  .content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
}
.search-header {
  display: flex;
  background-color: #fff;
  height: 1.626667rem;
  align-items: center;
  flex-shrink: 0;
}

.responsible-name-new {
  height: 1.04rem;
  display: flex;
  align-items: center;
  padding: 0 .293333rem;
  font-size: .32rem;
  color: #999;
  justify-content: flex-start;
  flex-shrink: 0;

}

.list {
  flex: 1;
  overflow-y: auto;
  
  .item {
    height: 1.92rem;
    padding: 0 .293333rem;
    background-color: #fff;
    position: relative;
    border-top: 1px solid #f0f0f0;
    
    .left {
      .item-peple {
        line-height: .613333rem;
        font-size: .426667rem;
        color: #232323;
        margin-bottom: .106667rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 3.733333rem;
      }
      .item-company {
        line-height: .453333rem;
        font-size: .32rem;
        color: #999;
      }
    }
    .right {
      color: #7b7b7b;
      font-size: .346667rem;
    }
  }
  .item-active {
    background-color: #e6f1ff!important;
  }
}

.submit-btn {
  height: 64px;
  background-color: #fff;
  padding: 0 .293333rem;
  
  .choose {
    font-size: .373333rem;
    color: #262626;
    margin-right: .133333rem;
  }
  .choose-list {
    .item {
      background-color: #f3f3f3;
      height: .72rem;
      border-radius: .106667rem;
      display: flex;
      align-items: center;
      padding: 0 .133333rem;
      
      text {
        font-size: .32rem;
        color: #7b7b7b;
        max-width: 2.933333rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-right: .133333rem;
      }
      .img {
        width: .24rem;
        height: .24rem;
      }
    }
  }
  .btn {
    margin-right: 0;
  }
}
</style>

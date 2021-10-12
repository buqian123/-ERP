<template>
  <view class="cus-import-info-page">
    <view class="content">
      <view class="header" @tap="add">新建</view>
      <view class="list">
        <view class="item" v-for="item in infolist" :key="item.keyId" @click="selectKeyInfo(item)">
          <view class="item-con">
            <image class="left" src="/static/item-img.png" v-if="item.keyId != activeId"></image>
            <image class="left" src="/static/active-item-img.png" v-if="item.keyId == activeId"></image>
            <view class="right">
              <view>{{item.productName + '/' + item.productType}}</view>
              <view>{{item.address}}</view>
            </view>
          </view>
          <view class="action">
            <text>修改</text>
            <text @tap.stop="delItem(item.keyId)">删除</text>
          </view>
        </view>
        <view v-if="infolist.length != 0">
          <view class="van-list__finished-text">已显示全部数据</view>
          <view class="van-list__placeholder"></view>
        </view>
        <view class="no-data" v-if="infolist.length == 0">
          <image src="/static/no-chart.png"></image>
          暂无介绍人
        </view>
      </view>
      <view style="height: 2rem;"></view>
      <view class="btn-box flex-cen">
        <view class="btn-list flex-cen" @tap="cancel">取消</view>
        <view class="btn-list flex-cen" @tap="submit">确认</view>
      </view>
    </view>
    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      cusId: state => state.customer.cusId
    })
  },
  data() {
    return {
      infolist: [],
      activeId: '',
      activeItem: {}
    }
  },
  onLoad() {
    this.getInfoList()
  },
  methods: {
    getInfoList() {
      this.$u.api.getCusImportInfoAll({limit: 10000000, offset: 0}).then(res => {
        this.infolist = res
      })
    },
    add() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/demand/addDemand/cusImpotInfo/addList'
      })
    },
    delItem(id) {
      this.$u.api.delCusImportInfo({id: id}).then(res => {
        this.$refs.uToast.show({
          title: `删除成功！`,
          type: 'info'
        })
        this.getInfoList()
      })
    },
    selectKeyInfo(data) {
      this.activeId = data.keyId
      this.activeItem = data
    },
    submit() {  
      
      uni.navigateBack({
        delta: 1,
        success: () => {
          setTimeout(res => {
            uni.$emit("keyInfo", this.activeItem);
          }, 200)
        }
      })
    },
    cancel() {
      uni.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style scoped lang="scss">
.cus-import-info-page {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f8f8f8;
  box-sizing: border-box;
  
  .content {
    flex: 1;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}
.header {
  height: 1.066667rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
  padding: 0 .293333rem;
  color: rgb(57, 117, 197);
  font-size: 12px;
}
.list {
  overflow-y: auto;
  flex: 1;
  
  .item {
    position: relative;
    padding: .266667rem .293333rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    
    &::after {
      position: absolute;
      content: "";
      bottom: 0;
      left: .293333rem;
      right: .293333rem;
      height: .026667rem;
      background-color: #f0f0f0;
      transform: scaleY(.5);
    }
    
    .item-con {
      display: flex;
      align-items: center;
      flex: 1;
      .left {
        width: .426667rem;
        height: .426667rem;
        margin-right: .346667rem;
      }
      .right {
        font-size: .346667rem;
        color: #262626;
        line-height: .506667rem;
      }
    }
    .action {
      display: flex;
      font-size: .32rem;
      color: #3975c5;
      
      & text:first-child {
        margin-right: 25px;
      }
    }
  }
}
.btn-box {
  width: 100%;
  padding: .266667rem 0!important;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  
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
</style>

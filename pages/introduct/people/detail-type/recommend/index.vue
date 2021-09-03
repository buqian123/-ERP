<template>
  <view style="position: relative;">
    <view class="recommend-tab-list">
      <view class="recommend-tab-item" :class="{curr: tabIndex == 0}" @tap="tabIndex = 0">推荐线索</view>
      <view class="recommend-tab-item" :class="{curr: tabIndex == 1}" @tap="tabIndex = 1">推荐需求</view>
      <view class="recommend-tab-item" :class="{curr: tabIndex == 2}" @tap="tabIndex = 2">推荐直播</view>
    </view>
    <Clue v-if="tabIndex == 0"></Clue>
    <Demand v-if="tabIndex == 1"></Demand>
    <LiveBroadcast v-if="tabIndex == 2"></LiveBroadcast>
  </view>
</template>

<script>
import Clue from './recommend-type/clue.vue'
import Demand from './recommend-type/demand.vue'
import LiveBroadcast from './recommend-type/live-broadcast.vue'
export default {
  components: {
    Clue,
    Demand,
    LiveBroadcast
  },
  data() {
    return {
      tabIndex: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .recommend-tab-list {
    font-size: .32rem;
    height: .56rem;
    display: flex;
    align-items: center;
    margin: 0 .293333rem;
    .recommend-tab-item {
      color: hsla(0,0%,100%,.5);
      margin-right: .533333rem;
    }
    .curr {
      color: #fff;
    }
  }
</style>

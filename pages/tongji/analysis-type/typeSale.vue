<template>
  <!-- 销售分析 -->
  <view style="width: 100%;">
    <!-- 销售跟进概况 -->
    <view class="chartBox">
      <view class="title">
        <text>销售跟进概况</text>
        <u-icon class="icon" title="提示内容" name="info-circle" color="#3963bc;" size="40" @click="show = true"></u-icon>
        <u-modal v-model="show" :title-style="{color: 'red'}">
          <view class="slot-content">
            <view>新增线索：</view>
            <view>新增线索：</view>
            <view>新增线索：</view>
          </view>
        </u-modal>
      </view>
     <view>
       <u-dropdown>
          <u-dropdown-item v-model="dateTime" title="今日">
            <view class="slot-content">
              <view class="subtitle">时间</view>
              <view class="selectOption flex-wrap flex-bet">
                <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in dataTimeOption" :key="index" 
                class="option-item flex-cen">{{item.label}}</view>
              </view>
              <view class="btn-box flex-bet">
                <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
              </view>
            </view>
          </u-dropdown-item>
          <u-dropdown-item v-model="cusCate" title="客户类型">
            <view class="slot-content">
              <view class="subtitle">客户类型</view>
              <view class="selectOption flex-wrap flex-jsac">
                <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in cusCateOption" :key="index" 
                class="option-item-two flex-cen">{{item.label}}</view>
              </view>
              <view class="btn-box flex-bet">
                <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
              </view>
            </view>
          </u-dropdown-item>
        </u-dropdown>
      </view>
     
<!--      <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">今日</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">客户类型</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view> -->
      
      <view class="data">
        <view class="data-item" v-for="(item, index) in 9" :key="index">
          <view class="num">0</view>
          <view class="text">新增线索</view>
        </view>
      </view>
    </view>
    <!-- -->
    <view class="chartBox">
      <view class="title flex-bet">
        <view class="text">全公司销售排行榜</view>
        <view class="more" @tap="goRankList">
          <text>全部&gt;</text>
        </view>
      </view>
      <view>
        <u-dropdown>
           <u-dropdown-item v-model="dateTime" title="今日">
             <view class="slot-content">
               <view class="subtitle">时间</view>
               <view class="selectOption flex-wrap flex-bet">
                 <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in dataTimeOption" :key="index" 
                 class="option-item flex-cen">{{item.label}}</view>
               </view>
               <view class="btn-box flex-bet">
                 <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                 <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
               </view>
             </view>
           </u-dropdown-item>
           <u-dropdown-item v-model="cusCate" title="客户类型">
             <view class="slot-content">
               <view class="subtitle">客户类型</view>
               <view class="selectOption flex-wrap flex-jsac">
                 <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in cusCateOption" :key="index" 
                 class="option-item-two flex-cen">{{item.label}}</view>
               </view>
               <view class="btn-box flex-bet">
                 <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                 <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
               </view>
             </view>
           </u-dropdown-item>
         </u-dropdown>
       </view>
      <!-- <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">收款金额</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">本周</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view> -->
    </view>
    <!--  -->
    <view class="chartBox">
      <view class="title">进店邀约转化漏斗</view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据</view>
      </view>
    </view>
    <!--  -->
    <view class="chartBox">
      <view class="title">测量邀约转化漏斗</view>
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据</view>
      </view>
    </view>
    <!--  -->
    <view class="chartBox">
      <view class="title">微信联系人企微聊天</view>
      <view>
        <u-dropdown>
           <u-dropdown-item v-model="dateTime" title="今日">
             <view class="slot-content">
               <view class="subtitle">时间</view>
               <view class="selectOption flex-wrap flex-bet">
                 <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in dataTimeOption" :key="index" 
                 class="option-item flex-cen">{{item.label}}</view>
               </view>
               <view class="btn-box flex-bet">
                 <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                 <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
               </view>
             </view>
           </u-dropdown-item>
           <u-dropdown-item v-model="cusCate" title="客户类型">
             <view class="slot-content">
               <view class="subtitle">客户类型</view>
               <view class="selectOption flex-wrap flex-jsac">
                 <view :class="{selectTrue: currDateOptionIndex == index}" v-for="(item,index) in cusCateOption" :key="index" 
                 class="option-item-two flex-cen">{{item.label}}</view>
               </view>
               <view class="btn-box flex-bet">
                 <u-button :hair-line="false" type="info" size="medium">清除</u-button>
                 <u-button :hair-line="false" type="primary" size="medium">确定</u-button>
               </view>
             </view>
           </u-dropdown-item>
         </u-dropdown>
      </view>
      <!-- <view class="toolbox">
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
        <view class="drop">
          <view class="flex-cen">
            <view class="drop-title ell">全部时间</view>
            <view class="triangle"></view>
          </view>
        </view>
      </view> -->
      <view class="no-chart">
        <img src="/static/no-chart.png" alt="">
        <view class="text">暂无数据</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dateTime: '',
      dataTimeOption: [
        { label: '今日', value: 1 },
        { label: '昨日', value: 2 },
        { label: '本周', value: 3 },
        { label: '本月', value: 4 },
        { label: '全部时间', value: 5 },
        { label: '自定义时间', value: 6 }
      ],
      currDateOptionIndex: 0,
      cusCate: '',
      cusCateOption: [
        { label: '营销云公海客户', value: 1 },
        { label: '投放公海客户', value: 2 }
      ],
      show: false
    }
  },
  methods: {
    goRankList() {
      uni.navigateTo({
        url: '/pages/tongji/other/rankingList?type=0'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .slot-content {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 10px;
    
    .subtitle {
      color: #999;
      font-size: 12px;
      padding-bottom: 13px;
    }
    .selectOption{
      width: 100%;
      .option-item {
        width: 30%;
        padding: 0 5px;
        height: 30px;
        font-size: 13px;
        background-color: #f8f8f8;
        color: #717171;
        border-radius: 5px;
        margin-bottom: 8px;
      }
      .option-item-two {
        // width: 30%;
        padding: 0 10px;
        height: 30px;
        font-size: 13px;
        background-color: #f8f8f8;
        color: #717171;
        border-radius: 5px;
        margin-bottom: 8px;
        margin-right: 10px;
      }
      .selectTrue {
        background-color: #eaf3ff;
        color: #3975c5;
      }
    }
    .btn-box {
      width: 100%;
      margin-top: 15px;
      button {
        margin: 0;
        border: none;
      }
      :first-child {
        width: 25%;
        background-color: #F8F8F8;
      }
      :last-child {
        width: 70%;
        background-color: #367AE6;
      }
    }
  }
</style>

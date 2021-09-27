<template>
  <view class="container">
    <!-- 头部类型导航 -->
    <view class="header">
      <view class="nav flex-wrap flex-bett">
        <view class="item flex-wrap flex-col flex-cen" v-for="(item, index) in navImg" 
        :style="{backgroundImage: item.bgImg, color: item.color}" :key="index"
        @tap="handleClick(item.path)">
          <view class="t1">{{item.t1}}</view>
          <view class="t2">{{item.t2}}</view>
        </view>
      </view>
      <!-- 广告 -->
      <view class="activity-box">
        <view class="activity flex-bet">
          <view class="flex-jsac" @click="xding">
            <image src="../../static/logo.png"></image>
            <view class="t1">营销云</view>
            <view class="t2">裂变直播活动</view>
          </view>
          <u-icon name="arrow-right" color="#9C9C9C" size="40"></u-icon>
        </view>
      </view>
    </view>
    <!-- 目标看板 -->
    <view class="target flex-jsac">
      <!-- collapse折叠面板， head-style：标题自定义样式 -->
      <u-collapse style="width: 100%;" hover-class="none" :head-style="collapseTitle">
        <!-- title 标题 -->
        <u-collapse-item title="目标看板" hover-class="none">
          <!-- font-size:tab字体大小 bar:滑块 list:标签数组  current：当前下标  swiperWidthtabs组件外部swiper的宽度-->
          <u-tabs-swiper font-size="20" bar-width="68" bar-height="4" ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false"
          swiperWidth="750"></u-tabs-swiper>
          <swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
            <swiper-item class="swiper-item">
              <view>部门目标</view>
            </swiper-item>
            <swiper-item class="swiper-item">
              <view>员工目标</view>
            </swiper-item>
          </swiper>
        </u-collapse-item>
      </u-collapse>
    </view>
    <!-- 雷达、任务 -->
    <u-sticky offset-top="-90" :enable="enable">   <!-- 吸顶，  offset-top顶部距离-->
      <view style="width: 100%;background-color: #F9F9F9;">
        <view class="task">
          <!-- tab切换， name：文字 count：角标  offset ：角标位置偏移 [x,y]  taskList：tab数组  is-scroll：是否可左右拖动  show-bar：是否显示底部滑块-->
          <u-tabs name="cate_name" count="cate_count" :list="taskList" :is-scroll="false"
          :current="taskCurrent" :show-bar="false" duration="0" @change="taskChange"
          font-size="33" bg-color="#F9F9F9" :offset="badgeOffset"></u-tabs>
        </view>
      </view>
    </u-sticky>

    <!-- 雷达 -->
    <view class="radar" v-if="taskCurrent == 0">
      <!-- <u-subsection :list="radarList" :current="radarCurr" @change="sectionChange"></u-subsection> -->
      <view class="tabBox flex-jsac">
        <view class="tab-item" :class="{activeTab: radarCurr == 0}" @tap="radarCurr = 0">
          <text>素材</text>
        </view>
        <view class="tab-item" :class="{activeTab: radarCurr == 1}" @tap="radarCurr = 1">
          <text>营销云</text>
        </view>
      </view>
      
      <!-- 素材 -->
      <view class="material" v-if="radarCurr == 0">
        <view class="noData">
          <image src="../../static/no-chart.png" class="img"></image>
          <text>暂无数据</text>
        </view>
      </view>
      <!-- 营销云 -->
      <view class="market" v-if="radarCurr == 1">
        <view class="noData">
          <image src="../../static/no-chart.png" class="img"></image>
          <text>暂无雷达数据</text>
        </view>
      </view>
    </view>
    
    <!-- 任务列表 -->
    <view class="tasklist" v-if="taskCurrent == 1">
      <!-- 吸顶 -->
      <u-sticky offset-top="-10" :enable="enable">
        <view style="background-color: #fff;">
          <view class="flex-bet">
            <view class="scroll-nav">
              <!-- 任务列表 -->
              <du-nav :option="tlist" @feedback="feedback"></du-nav>  <!-- 可左右滑动导航栏 -->
            </view>
            <view class="add-task flex-cen" @click="addTask">
              <text>新建任务</text>
              <u-icon name="plus-circle"></u-icon>
            </view>
          </view>
          <view class="task-detail">
            <view class="task-person flex-jeac">
              <view @click="$refs.selectPeo.open()">执行人：ZhengYu</view>
              <!-- <view @click="popupShow = true">执行人：ZhengYu</view> -->
              <view class="more" @tap="actionSheetShow = true">更多操作</view>
            </view>
            <!-- 更多操作， 调出操作面板 -->
            <u-action-sheet :list="actionSheetList" v-model="actionSheetShow" @tap="selectAction" :cancel-btn="true"></u-action-sheet>
            
            
            <!-- 抽屉， 调出右侧面板 ，mask-click:点击遮罩层关闭 -->
            <uni-drawer ref="selectPeo" mode="right" :mask-click="true" :width="320">
              <view class="peo-drawer">
                <view class="d-title flex-cen">请选择执行人</view>
                <view class="search-box">
                  <!-- 搜索框 -->
                  <u-search placeholder="请输入执行人名称" shape="square" :show-action="false" v-model="searchPeo"></u-search>
                  <view class="select-peo flex-bet">
                    <view>共0人</view>
                    <view>全部部门</view>
                  </view>
                  <view class="radio flex-jeac">
                    <u-radio-group v-model="radioSale" size="25" icon-size="6" >
                    	<u-radio name="name" label-size="10">显示已离职员工</u-radio>
                    </u-radio-group>
                  </view>
                </view>
                <view class="content">
                  <view class="no-data flex-cen">暂无数据</view>
                </view>
                <view class="btn-box flex-cen">
                  <u-button style="width: 30%;" :hair-line="false" type="info" size="medium">清除</u-button>
                  <u-button style="width: 60%;" :hair-line="false" type="primary" size="medium">确定</u-button>
                </view>
              </view>
            </uni-drawer>
            <view class="task-status flex-bet">
              <view>当前分数： 0分</view>
              <view>达标分数： 10分</view>
              <view>剩余时间： 07:53:35</view>
            </view>
            <u-gap height="20" bg-color="#f9f9f9"></u-gap>
          </view>
        </view>
      </u-sticky>
      
      <!-- 具体的任务内容 -->
      <view class="list-detail">
        <view class="task-list-item flex-wrap flex-col flex-bett" v-for="(item, index) in currTaskList" :key="index">
          <view>{{item.msg}}</view>
          <view class="grade">已完成：{{item.grade + '分'}}</view>
        </view>
        <view class="no-more">已显示全部数据</view>
      </view>
    </view>
  </view>
</template>

<script>
  import duNav from '@/components/du-nav/du-nav.vue'
  export default {
    components: { duNav },
    data() {
      return {
        // 头部分类导航
        navImg: [
          { bgImg: 'url(/static/work-nav/bgA.png)', color: '#ffffff', t1: '客户', t2: '线索清晰、客户跟踪', path: '/pages/customer/index' },
          { bgImg: 'url(/static/work-nav/bgB.png)', color: '#ffffff', t1: '介绍人', t2: '渠道维护、介绍人分佣', path: '/pages/introduct/index' },
          { bgImg: 'url(/static/work-nav/bg1.png)', color: '#4b62bc', t1: '需求', t2: '客户需求跟踪', path: '/pages/demand/index' },
          { bgImg: 'url(/static/work-nav/bg2.png)', color: '#3a787d', t1: '服务单', t2: '服务协同管理', path: '/pages/service/index' },
          { bgImg: 'url(/static/work-nav/bg3.png)', color: '#6172d1', t1: 'POS收款', t2: '支付微信、支付宝' },
          { bgImg: 'url(/static/work-nav/bg4.png)', color: '#338854', t1: '接待登记', t2: '客户进店接待', path: '/pages/reception/index' },
          { bgImg: 'url(/static/work-nav/bg6.png)', color: '#ca7253', t1: '素材库', t2: '客户营销素材', path: '/pages/library/material/index' },
          { bgImg: 'url(/static/work-nav/bg7.png)', color: '#ca7253', t1: '话术库', t2: '常用语高效沟通', path: '/pages/library/script/index' },
          { bgImg: 'url(/static/work-nav/bg8.png)', color: '#9a6844', t1: '钱包', t2: '相关费用充值', path: '/pages/money/wallet/index' },
          { bgImg: 'url(/static/work-nav/bg9.png)', color: '#9a6844', t1: '收款管理', t2: '收款对账审核', path: '/pages/money/collect-control/index' },
          { bgImg: 'url(/static/work-nav/add.png)', color: '#fd8517', t1: '添加', t2: '更多应用→', path: '/pages/work/addApp' },
        ],
        // 折叠面板标题样式
        collapseTitle: {
          fontSize: '17px',
          fontFamily: '黑体'
        },
        // 目标看板
        list: [{
          name: '部门目标'
        }, {
          name: '员工目标'
        }],
        // 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
        current: 0, // tabs组件的current值，表示当前活动的tab选项
        swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        taskList: [{
          cate_name: '雷达'
        }, {
          cate_name: '任务',
          cate_count: 5
        }],
        taskCurrent: 1,
        badgeOffset: [0, 0],
        radarCurr: 0,
        // 任务列表
        tlist: [
          { name: '任务一', peo: 'ZhengYu', 
          // 具体任务详情
            clist: [
              { msg: '每新增1个线索，得1分', grade: 2 },
              { msg: '每新增1个线索，得2分', grade: 2 },
              { msg: '每新增1个线索，得3分', grade: 2 },
              { msg: '每新增2个线索，得2分', grade: 2 },
              { msg: '每新增3个线索，得3分', grade: 2 },
              { msg: '每新增4个线索，得4分', grade: 2 },
              { msg: '每新增5个线索，得5分', grade: 2 },
              { msg: '每新增6个线索，得6分', grade: 2 },
              { msg: '每新增7个线索，得7分', grade: 2 },
              { msg: '每新增8个线索，得8分', grade: 2 }
            ]
          },
          { name: '任务二', peo: 'ZhengYu',
            clist: [
              { msg: '每新增跟进1个，得1分', grade: 2 },
              { msg: '每新增跟进2个，得2分', grade: 2 },
              { msg: '每新增跟进3个，得3分', grade: 2 },
              { msg: '每新增跟进4个，得4分', grade: 2 },
            ]
          },
          { name: '任务3', peo: 'ZhengYu',
            clist: [
              { msg: '每新增接待1个，得1分', grade: 2 }
            ]
          },
          { name: '任务4', peo: 'ZhengYu',
            clist: [
              { msg: '每新增拜访1个，得1分', grade: 2 },
              { msg: '每新增拜访1个，得1分', grade: 2 },
              { msg: '每新增拜访1个，得1分', grade: 2 },
            ]
          },
          { name: '任务5', peo: 'ZhengYu',
            clist: [
              { msg: '每回访1个签单客户，得2分', grade: 2 }
            ]
          },
          { name: '任务6', peo: 'ZhengYu',
            clist: [
              { msg: '每新增1个介绍人，得1分', grade: 2 },
              { msg: '每新增1个介绍人，得1分', grade: 2 }
            ]
          }
        ],
        // 当前任务索引
        tlistIndex: 0,
        // 当前任务详细内容
        currTaskList: [],
        // 操作面板显示隐藏
        actionSheetShow: false,
        // 操作列表内容
        actionSheetList: [
          { text: '编辑任务' },
          { text: '删除任务' },
          { text: '标记休息' },
          { text: '查看统计' }
        ],
        // 搜索框绑定数据，
        searchPeo: '', // 搜索执行人
        popupShow: false,
        // 是否全部
        radioSale: '',
        // 控制吸顶
        enable: true
      }
    },
    onShow() {
      this.enable = true
      
      // 展示第一个任务的详情内容
      var arr = this.tlist[this.tlistIndex].clist
      this.currTaskList = arr
    },
    onHide() {
      this.enable = false
    },
    methods: {
      xding() {
        
      },
      tabsChange(index) {
        this.swiperCurrent = index;
      },
      // swiper-item左右移动，通知tabs的滑块跟随移动
      transition(e) {
        let dx = e.detail.dx;
        this.$refs.uTabs.setDx(dx);
      },
      // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
      // swiper滑动结束，分别设置tabs和swiper的状态
      animationfinish(e) {
        let current = e.detail.current;
        this.$refs.uTabs.setFinishCurrent(current);
        this.swiperCurrent = current;
        this.current = current;
      },
      // scroll-view到底部加载更多
      onreachBottom() {
        
      },
      taskChange(index) {
				this.taskCurrent = index;
			},
      sectionChange(index) {
        this.radarCurr = index;
      },
      feedback(index) {
        this.tlistIndex = index
        var arr = this.tlist[this.tlistIndex].clist
        this.currTaskList = arr
      },
      addTask() {
        uni.navigateTo({
          url: '/pages/work/task/task'
        })
      },
      selectAction(index) {
        console.log(index);
      },
      handleClick(path) {
        uni.navigateTo({
          url: path
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
 .header {
   width: 100%;
   background-color: #fff;
   border-radius: .106667rem;
   padding: .24rem .293333rem .4rem;
 }
 .nav {
  width: 100%;
  
  .item {
    width: calc(50% - .14667rem);
    height: 1.466667rem;
    position: relative;
    margin-bottom: .266667rem;
    color: rgb(75, 98, 188);
    padding-left: .333333rem;
    
    border-radius: 5px;
    background-size: 100% 100%;
    
    view {
      width: 100%;
    }
    
    .t1 {
      font-size: .346667rem;
      font-weight: 600;
      margin-bottom: .133333rem;
    }
    
    .t2 {
      font-size: .32rem;
    }
  }
 }
 .activity-box {
   width: 100%;
   height: 1.2rem;
   box-sizing: border-box;
   padding: 0 .293333rem;
   // background-color: #F5F9FF;
   background-color: #f5f9ff;
   border-radius: 1.2rem;
   
  .activity {
    width: 100%;
    height: 100%;
    
    box-sizing: border-box;
    padding: 0 .36rem;
    
    image {
      display: block;
      width: .8rem;
      height: .8rem;
      margin-right: .213333rem;
    }
    
    .t1 {
      font-size: .346667rem;
      font-weight: 600;
      color: #262626;
      margin-right: .333333rem;
    }
    .t2 {
      font-size: .32rem;
      color: #999;
    }
  }
   
 
   

 }
 .target {
   width: 100%;
   border-radius: .106667rem;
   overflow: hidden;
   margin-top: .266667rem;
   background-color: #fff;
   padding: .25rem .293333rem;
 }
 
 .task {
   width: 100px;
   padding: .2rem 0;
   background-color: #f8f8f8;
 }
 .radar {
   .tabBox {
     width: 100%;
     margin-bottom: .4rem;
     
     .tab-item {
       display: block;
       width: 1.786667rem;
       height: .693333rem;
       font-size: .32rem;
       font-weight: 500;
       line-height: .693333rem;
       color: #262626;
       text-align: center;
       border-radius: .346667rem;
       margin-right: .266667rem;
     }
     .activeTab {
       color: #fff;
       background-color: #3975c5;
     }
   }
   
   
   .material {
     // padding-top: 50px;
   }
   .market {
     // padding-top: 50px;
   }
 }
 .tasklist {
   width: 100%;
   
   .flex-bet {
     .scroll-nav {
       width: 75%;
     }
     .add-task {
       width: 22%;
       
       text {
         padding-right: 5px;
       }
     }
   }
   .task-detail {
     .task-person {
       .more {
         font-size: 13px;
         color: #7b7b7b;
         padding-left: 30px;
       }
     }
     .task-status {
       height: 35px;
       border-radius: 3px;
       margin-top: 18px;
       padding: 0 10px;
       font-size: 13px;
       color: #fd8517;
       background-color: #ffebd7;
     }
     .peo-drawer {
       width: 100%;
       height: 100%;
       background-color: #F8F8F8;
       position: relative;
       .d-title {
         width: 100%;
         height: 60px;
         font-weight: bold;
       }
       .search-box {
         width: 100%;
         padding: 0 10px;
         background-color: #fff;
         
         .select-peo {
           margin-top: 13px;
           font-size: 12px;
           color: #999999;
         }
         .radio {
           margin-top: 16px;
           .u-radio-group {
             .u-radio {
               .u-radio__label {
                 margin-right: 0;
               }
             }

           }

         }
       }
       .content {
         width: 100%;
         // height: 30%;
         
         .no-data {
           padding: 30px;
         }
       }
       .btn-box {
         width: 100%;
         height: 55px;
         padding: 13px;
         background-color: #fff;
         position: absolute;
         bottom: 0;
       }
     }

  }
  .list-detail {
    width: 100%;
    margin-top: 10px;
    .task-list-item {
      margin-bottom: 10px;
      height: 50px;
      font-size: 12px;
      background-color: #fff;
      padding: 10px 0 10px 5px;
      
      .grade {
        color: #3975c5;
      }
    }
    .no-more {
      height: 60px;
      padding: 10px 0 20px;
      color: #969799;
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
 }

  .noData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1.973333rem 0;
    
    .img {
      width: 1.973333rem;
      height: 2rem;
    }
    
    text {
      font-size: .346667rem;
      color: #999;
    }
  }
</style>

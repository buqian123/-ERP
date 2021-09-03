<template>
  <view class="container">
    <!-- 选择分析范围 -->
    <view class="fanwei flex-jsac">
      <view class="left">数据范围</view>
      <view class="right flex-cen" @click="$refs.selectRange.open()">
        <text>全公司</text>
        <text class="triangle"></text>
      </view>
    </view>
    <!-- 抽屉， 调出右侧面板 ，mask-click:点击遮罩层关闭 -->
    <uni-drawer ref="selectRange" mode="right" :mask-click="true" :width="320">
      <view class="rangeBox">
        <view class="range" :class="{activeRange: activeRange == 0}" @tap="activeRange = 0">按员工</view>
        <view class="range" :class="{activeRange: activeRange == 1}" @tap="activeRange = 1">按部门</view>
      </view>
      <view class="staffBox" v-if="activeRange == 0">
        <view class="searchBox">
           <u-search placeholder="请输入员工姓名" shape="square" :show-action="false" v-model="searchPeo"></u-search>
        </view>
        <view class="contentBox">
          <view class="check">
            <view class="imgbox">
              <image src="../../static/tab-bar-img/icon-admin.png" class="img"></image>
            </view>
            <view class="text">显示已离职员工</view>
          </view>
          <view class="checkGroup">
            <view class="innerTitle">我</view>
            <view class="list">
              <u-checkbox class="a" v-model="checked" :disabled="false">天涯</u-checkbox>
            </view>
            <view>
              <view class="innerTitle">测试</view>
              <view class="list">
                <u-checkbox v-model="checked" :disabled="false">测试</u-checkbox>
              </view>
            </view>
            
          </view>
        </view>
        <view class="resultBox">
          <view class="left">已选择：1人</view>
          <view class="right">确定</view>
        </view>
      </view>
      <view class="staffBox" v-if="activeRange == 1">
        <view class="contentBox c2">
          <view class="check">
            <view class="imgbox">
              <image src="../../static/tab-bar-img/icon-admin.png" class="img"></image>
            </view>
            <view class="text">显示已离职员工</view>
          </view>
          <view class="checkGroup">
            <view class="innerTitle"></view>
            <view class="list">
              <u-checkbox v-model="checked" :disabled="false">天涯</u-checkbox>
            </view>
            <view class="tip"> 默认自动选中子部门 </view>
          </view>
          
          <view class="noData"></view>
        </view>
        <view class="resultBox">
          <view class="left">已选择：1人</view>
          <view class="right">确定</view>
        </view>
      </view>
    </uni-drawer>
    <!-- 选择分析的方向、类型 -->
    <view class="tab flex-jsac">
      <view @tap="cateChange(index)" :class="{currCate: currCate == index}" v-for="(item, index) in catelist" :key="index">{{item.name}}</view>
    </view>
    
    <!-- 销售分析 -->
    <Sale v-if="currCate == 0"></Sale>
    <Customer v-if="currCate == 1"></Customer>
    <Service v-if="currCate == 2"></Service>
    <Introduce v-if="currCate == 3"></Introduce>
  </view>
</template>

<script>
import Sale from './analysis-type/typeSale.vue'
import Customer from './analysis-type/typeCustomer.vue'
import Service from './analysis-type/typeService.vue'
import Introduce from './analysis-type/typeIntroduce.vue'
export default {
  components: {
    Sale,
    Customer,
    Service,
    Introduce
  },
  data() {
    return {
      catelist: [
        { name: '销售分析' },{ name: '客户分析' },
        { name: '服务分析' },{ name: '介绍分析' }
      ],
      currCate: 0,
      searchPeo: '',
      activeRange: 0,
      checked: false
    }
  },
  methods: {
    cateChange(index) {
      this.currCate = index;
    },
		handlerColumnChange(e) {
			if (e.cancel) return;
			
			this.columnOptions.forEach(item=>{
				item.default = e.data[item.key];
			})
		}
  }
}
</script>

<style lang="less" scoped>
  .container {
    padding-top: 0;
  }
  .fanwei {
    width: 100%;
    height: 1.066667rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-top: .4rem;
    
    .left {
      font-size: .346667rem;
      color: #fff;
      margin-right: .533333rem;
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: .32rem;
      color: #fff;
      background-color: #1b5db3;
      border-radius: .053333rem;
      padding: 0 .226667rem;
      
      .text {
        display: block;
        max-width: 2.666667rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .triangle {
        display: block;
        width: 0;
        height: 0;
        border-bottom: .106667rem solid #fff;
        border-left: .106667rem solid transparent;
        margin: .133333rem 0 0 .133333rem;
      }
    }
  }
  
  .rangeBox {
    width: 100%;
    height: 1.333333rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    
    .range {
      display: block;
      width: 50%;
      height: 100%;
      text-align: center;
      line-height: 1.333333rem;
      font-size: .4rem;
      color: #262626;
      opacity: .5;
    }
    .activeRange {
      font-weight: 700;
      opacity: 1;
    }
  }
  
  .staffBox {
    width: 100%;
    height: calc(100% - 1.33333rem);
    background-color: #fff;
    
    .searchBox {
      width: 100%;
      height: 1.253333rem;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 .293333rem;
      display: flex;
      justify-content: center;
    }
    .contentBox {
      width: 100%;
      height: calc(100% - 2.96rem);
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-bottom: .266667rem;
      overflow-y: auto;
      position: relative;
      
      .check {
        height: .533333rem;
        display: flex;
        align-items: center;
        position: absolute;
        right: .293333rem;
        top: .24rem;
        z-index: auto;
        
        .imgbox {
          width: .373333rem;
          height: .373333rem;
          
          .img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        
        .text {
          font-size: .32rem;
          color: #999;
          margin-left: .213333rem;
          line-height: .533333rem;
        }
      }
      
      .checkGroup {
        .tip {
          width: 100%;
          font-size: .32rem;
          color: #3975c5;
          box-sizing: border-box;
          padding: .28rem .266667rem;
        }
        .innerTitle {
          width: 100%;
          height: 1.013333rem;
          background-color: #f8f8f8;
          line-height: 1.013333rem;
          box-sizing: border-box;
          padding-left: .293333rem;
          font-size: .32rem;
          color: #999;
        }
        
        .list {
          width: 100%;
          height: 1.333333rem;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding-left: .293333rem;
          background-color: #fff;
          
          .a {
            height: 1.333333rem;
            font-size: .373333rem;
            color: #262626;
          }
        }
        
        .noData {
          width: 100%;
          height: 2.666667rem;
          text-align: center;
          line-height: 1.333333rem;
          color: #999;
        }
      }
      
      
    }
    .c2 {
      height: calc(100% - 1.70667rem);
    }
    .resultBox {
      width: 100%;
      height: 1.706667rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 .293333rem;
      .left {
        width: calc(100% - 5.62667rem);
        font-size: .373333rem;
        color: #262626;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .right {
        width: 5.36rem;
        height: 1.173333rem;
        background: linear-gradient(198deg,#5688ff,#2472d9);
        border-radius: .106667rem;
        font-size: .373333rem;
        color: #fff;
        text-align: center;
        line-height: 1.173333rem;
      }
    }
  }
  
  
  .tab {
    width: 100%;
    height: 1.493333rem;
    line-height: 1.493333rem;
    white-space: nowrap;
    overflow-x: auto;

    view {
      display: inline-block;
      height: .693333rem;
      line-height: .693333rem;
      padding: 0 .266667rem;
      font-size: .32rem;
      font-weight: 600;
      color: #fff;
      margin-right: .266667rem;
    }
    
    .currCate {
      color: #3975c5;
      background-color: #fff;
      border-radius: .353333rem;
    }
  }
</style>

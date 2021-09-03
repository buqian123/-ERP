<template>
  <!-- 需求详情 -->
  <view class="wrap">
    <view class="base-info">
      <view class="base-info-title">
        <text>基本信息</text>
        <view class="edit-btn">
          <view class="text">编辑</view>
          <view class="border"></view>
        </view>
      </view>
      <view class="base-info-item" style="padding-top: 0;">
        <view class="item-title">需求品牌</view>
        <view class="desc">示例(请去PC端修改)</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">需求类型</view>
        <view class="desc">零售</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">关联客户</view>
        <view class="desc flex-jsac">
          <text class="wx">微信</text>
          <view class="v-line"></view>
          <view class="cus">AnDragon</view>
        </view>
      </view>
      <view class="base-info-item">
        <view class="item-title">客户关键信息</view>
        <view class="desc">
          <view>3室 200平米</view>
          <view>杭州解百城市奥莱A座小区A8幢1单元1011室</view>
          <view>水电阶段 极简</view>
        </view>
      </view>
      <view class="base-info-item">
        <view class="item-title">关联介绍人</view>
        <view class="desc">张三(ZhengYu对接)</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">竞争对手</view>
        <view class="desc">1号竞争对手</view>
      </view>
      <view class="base-info-item">
        <view class="item-title">预估金额</view>
        <view class="desc">1000000</view>
      </view>
      <view class="more-info" v-if="moretype == true">
        <view class="base-info-item">
          <view class="item-title">备注</view>
          <view class="desc">备注测试测试</view>
        </view>
        <view class="base-info-item">
          <view class="item-title">需求跟进人</view>
          <view class="desc">ZhengYu</view>
        </view>
        <view class="base-info-item">
          <view class="item-title">需求共享人</view>
          <view class="desc"></view>
        </view>
        <view class="base-info-item">
          <view class="item-title">需求内推人</view>
          <view class="desc"></view>
        </view>
      </view>
      <view class="base-info-item flex-bet" @tap="showMore">
        <view class="item-title">{{moretype == false ? '更多' : '收起'}}</view>
        <view class="desc">图标</view>
      </view>
    </view>
    <!-- 操作 -->
    <view class="action flex-jsac">
      <view class="action-item" @tap="star.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text star">0星</view>
        <u-select v-model="star.show" :list="star.list" @confirm="confirm"></u-select>
      </view>
      <view class="action-item" @tap="level.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text">级别：D</view>
        <u-select v-model="level.show" :list="level.list"></u-select>
      </view>
      <view class="action-item" @tap="status.show = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text">已签约</view>
        <u-select v-model="status.show" :list="status.list"></u-select>
      </view>
      <view class="action-item">
        <image src="/static/status1.png" class="img"></image>
        <view class="text">服务群</view>
      </view>
      <view class="action-item" @tap="showMoreAction = true">
        <image src="/static/status1.png" class="img"></image>
        <view class="text more">更多</view>
        <view style="color: #000000;">
          <u-action-sheet :list="moreActionList" v-model="showMoreAction" @tap="selectAction" :cancel-btn="true">
          </u-action-sheet>
        </view>
      </view>
    </view>
    
    <!-- tabs -->
    <view class="sale-tabs">
      <view class="sale-tabs-item" :class="{cur: saleTab == 0}" @tap="saleTab = 0">雷达</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 1}" @tap="saleTab = 1">跟进</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 2}" @tap="saleTab = 2">签单</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 3}" @tap="saleTab = 3">收款</view>
      <view class="sale-tabs-item" :class="{cur: saleTab == 4}" @tap="saleTab = 4">服务</view>
    </view>
    
    <view class="radar" v-if="saleTab == 0">
      <view class="counts">
        <view>浏览0次</view><view>报名0次</view><view>购卡0次</view>
        <view>下单0次</view><view>观看直播0次</view><view>访问素材0次</view>
        <view>提交表单0次</view>
      </view>
      <view class="line-ver-gradint"></view>
      <view class="noData">
        <image src="/static/noRadar.png" class="img"></image>
        <text class="text">暂无雷达信息</text>
      </view>
    </view>
    
    <view class="follow-box" v-if="saleTab == 1">
      <view class="follow-btn-ul">
        <view class="follow-btn-item">
          <text class="add-follow-text">添加跟进</text>
          <image src="/static/add-follow.png" class="add-follow-icon"></image>
        </view>
        <view class="follow-btn-item">
          <text class="add-follow-text">完成代办0/13</text>
          <image src="/static/arrow-right-orange.png" class="add-follow-icon"></image>
        </view>
      </view>
      <view class="line-ver-gradint"></view>
      <!-- 跟进列表 -->
      <view class="follow-ul">
        <view class="follow-list" v-for="(item, index) in 3" :key="index" @tap="goFllowDetail">
          <view class="fllow-info">
            <view class="time-box">
              <view class="week">星期二</view>
              <view class="time">2021年08月31日</view>
            </view>
            <view class="time-ul">
              <view class="time-list">
                <view class="time-text">11:01:18</view>
                <view class="list-icon"></view>
                <view class="list-content">
                  <view class="content-icon"></view>
                  <view class="content">
                    <view>
                      <view class="mode-name">进店接待0-10分钟 | 普通跟进</view>
                      <view class="customer">跟进人:ZhengYu</view>
                    </view>
                    <view class="follow-text ell">sfhhvxduhf</view>
                  </view>
                  <view class="content-icon"></view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="van-list__finished-text">已显示全部数据</view>
        <view class="van-list__placeholder"></view>
      </view>
    </view>
    
    <!-- 签单 -->
    <view class="qiandan" v-if="saleTab == 2">
      <view class="list-box">
        <view class="header">签单</view>
        <view class="desc">签单人：ZhengYu</view>
        <view class="desc">签单日期：2021-09-01 10:47:46</view>
        <view class="desc">关联活动：无 </view>
        <view class="price flex-bet">
          <view class="price-item">
            <view class="num">1000000</view>
            <view class="price-desc">合同金额</view>
          </view>
          <view class="price-item">
            <view class="num">500000</view>
            <view class="price-desc">已收金额</view>
          </view>
          <view class="price-item">
            <view class="num">500000</view>
            <view class="price-desc">待手金额</view>
          </view>
        </view>
        <view class="edit flex-jeac">
          <image src="/static/edit-price.png" class="img"></image>
          修改
        </view>
      </view>
    </view>
    
    <!-- 收款 -->
    <view class="payment" v-if="saleTab == 3">
      <view class="pay-types">
        <view class="pay-type-item flex-cen">
          <image src="/static/add-follow.png" class="img"></image>
          收款
        </view>
        <view class="pay-type-item flex-cen">
          <image src="/static/add-follow.png" class="img"></image>
          退款
        </view>
      </view>
      
      <view class="pay-list">
        <view class="payment-item">
          <view class="payment-title flex-jsac">
            <view class="title-tag">收款</view>
            <view class="title">收款编号：P202109011056255369</view>
          </view>
          <view class="info-text-list">收款时间：2021-09-01 10:47:46</view>
          <view class="info-text-list">收款类型：定金</view>
          <view class="info-text-list">结算方式：内部调账</view>
          <view class="info-text-list">审核状态：待审核</view>
          <view class="info-text-list flex-jsac">
            本次收款：
            <text class="info-text-cur">500000元</text>
          </view>
          <view class="info-text-list">收款备注：测试测试测试测试</view>
          <view class="pay-btn-box flex-bet">
            <view class="pay-btn-left flex-jsac">
              <image src="/static/logo.png" class="avatar"></image>
              <text>ZhengYu收款</text>
            </view>
            <view class="pay-btn-right flex-jsac">
              <view class="flex-jsac">
                <!-- <image src="../../static/jingao.png" class="img"></image> -->
                <text>修改</text>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="van-list__finished-text">已显示全部数据</view>
      <view class="van-list__placeholder"></view>
    </view>
    
    <view class="serivce" v-if="saleTab == 4">
      <view class="btn-box">
        <view class="btn-item">
          <image src="/static/add-follow.png" class="img"></image>
          服务工单
        </view>
      </view>
      <view class="serivce-list">
        <view class="serivce-item" v-for="(item, index) in 3" :key="index" @tap="goServiceDetail">
          <view class="desc">
            <text>服务编号：202109011051061442906839</text>
            <text>测量-示例(请去PC端修改)</text>
          </view>
          <view class="desc">
            <text>派单时间：2021-09-01 10:51</text>
            <text class="more-text">客户：AnDragon</text>
          </view>
          <view class="serivce-people">
            <view class="left">
              <view class="text">ZhengYu</view>
            </view>
            <view class="middle">
              <view>
                <view class="text">进行中</view>
                <image src="/static/arrive.png" class="img"></image>
              </view>
            </view>
            <view class="right">
              <view class="text">ZhengYu</view>
            </view>
          </view>
        </view>
      </view>
      <view class="end-data">已显示全部数据</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      moretype: false,
      star: {
        show: false,
        list: [
          { label: '0星', value: 0 },{ label: '0.5星', value: 0.5 },
          { label: '1星', value: 1 },{ label: '1.5星', value: 1.5 },
          { label: '2星', value: 2 },{ label: '2.5星', value: 2.5 },
          { label: '3星', value: 3 },{ label: '3.5星', value: 3.5 },
          { label: '4星', value: 4 },{ label: '4.5星', value: 4.5 },
          { label: '5星', value: 5 }
        ]
      },
      level: {
        show: false,
        list: [
          { label: 'A类', value: 0 },{ label: 'B类', value: 1 },
          { label: 'C类', value: 2 },{ label: 'D类', value: 3 },
        ]
      },
      status: {
        show: false,
        list: [
          { label: '跟进中', value: 0 },{ label: '已签约', value: 1 },
          { label: '已交付', value: 2 },{ label: '已流失', value: 3 }
        ]
      },
      showMoreAction: false,
      moreActionList: [
        { text: '操作日志' }, { text: '转交需求' }, { text: '删除需求' }
      ],
      saleTab: 1
    }
  },
  methods: {
    showMore() {
      this.moretype = !this.moretype
    },
    selectAction(index) {
      console.log(index);
    },
    confirm(e) {
      console.log(e);
    },
    // 查看跟进详情
    goFllowDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/follow/followDetail'
      })
    },
    goServiceDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/service/serviceDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    box-sizing: border-box;
    overflow-y: auto;
  }

  .base-info {
    background-color: #fff;
    padding: 0 .293333rem;
    flex-shrink: 0;
    box-shadow: 0 .026667rem .346667rem 0 rgba(0, 0, 0, .04);
    z-index: 9;

    .base-info-title {
      font-size: .426667rem;
      line-height: .613333rem;
      color: #262626;
      padding: .586667rem 0;
      font-weight: 500;
      display: flex;
      justify-content: space-between;

      .edit-btn {
        position: relative;
        margin-left: .266667rem;
        height: 29px;
        display: flex;
        align-items: center;
        padding: 0px 13px;

        .text {
          font-size: 12px;
          color: rgb(38, 38, 38);
          font-weight: 400;
        }

        .border {
          -webkit-transform: scale(.5);
          transform: scale(.5);
          position: absolute;
          border: .026667rem solid rgb(204, 204, 204);
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 43px;
        }
      }
    }

    .base-info-item {
      display: flex;
      font-size: .346667rem;
      align-items: center;
      padding: .24rem 0;

      .item-title {
        flex-shrink: 0;
        width: 2.133333rem;
        color: #7b7b7b;
        margin-right: .586667rem;
        line-height: .506667rem;
      }

      .desc {
        color: #262626;
        word-break: break-all;

        .wx {
          color: rgb(57, 117, 197);
        }

        .v-line {
          height: .366667rem;
          width: .026667rem;
          background-color: #8eb2e1;
          margin: .026667rem .266667rem 0;
          // transform: translateY(-.053333rem);
        }

        .cus {
          max-width: 2rem;
          margin-right: .106667rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .action {
    background-color: #fff;
    border-radius: .106667rem;
    padding: .64rem 0;
    flex-shrink: 0;
    .action-item {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .img {
        width: .666667rem;
        height: .666667rem;
        margin-bottom: .24rem;
      }
      .text {
        font-size: .32rem;
        color: rgb(57, 117, 197);
      }
      .star {
        color: rgb(243, 160, 0);
      }
      .more {
        color: #262626;
      }
    }
  }
  .sale-tabs {
    display: flex;
    padding-left: .32rem;
    padding-bottom: .08rem;
    background-color: #fff;
    flex-shrink: 0;
    
    .sale-tabs-item {
      text-align: center;
      font-size: .32rem;
      color: #262626;
      margin-right: .64rem;
      line-height: .453333rem;
      height: .453333rem;
    }
    .cur {
      font-weight: 500;
      position: relative;
      line-height: .453333rem;
      height: .453333rem;
      
      &::after {
        content: "";
        position: absolute;
        bottom: -.053333rem;
        left: .133333rem;
        right: .133333rem;
        height: .053333rem;
        border-radius: .026667rem;
        background-color: #fd8517;
      }
    }
  }
  .radar {
    .counts {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: .586667rem .293333rem 0;
      background-color: #fff;
      color: #fd8517;
      font-size: .32rem;
      
      view {
        height: .44rem;
        line-height: .44rem;
        font-size: .32rem;
        margin-right: .613333rem;
        margin-bottom: .506667rem;
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
      .text {
        font-size: .346667rem;
        color: #999;
      }
    }
  }
  .follow-box {
    width: 100%;
  
    .follow-btn-ul {
      display: flex;
      padding: .266667rem .293333rem 0;
      background-color: #fff;
  
      .follow-btn-item {
        padding: 0 .213333rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: .666667rem!important;
        margin-left: 10px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-size: .32rem;
        font-weight: 400;
        color: #fd8517!important;
        background: #fff6ed!important;
        border-radius: .346667rem!important;
  
        &:first-child {
          margin-left: 0px;
        }
  
        .add-follow-icon {
          width: .32rem;
          height: .32rem;
        }
  
        .add-follow-text {
          height: .906667rem;
          line-height: .933333rem;
          margin-right: 4px;
        }
      }
    }
  
    .follow-ul {
      padding: 0 .293333rem;
      margin-top: -1.013333rem;
      .follow-list {
        width: 100%;
        padding: .4rem .32rem;
        margin-top: .266667rem;
        background: #fff;
        border-radius: .106667rem;
  
        .fllow-info {
          width: 100%;
          height: 100%;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .32rem;
          font-weight: 400;
          line-height: .453333rem;
          color: #999;
          margin-top: 0.26666rem;
  
          .time-box {
            box-sizing: border-box;
            display: flex;
            width: 100%;
            padding-bottom: .4rem;
            border-bottom: .026667rem solid #f8f8f8;
  
            .week {
              width: 1.813333rem;
            }
          }
  
          .time-ul {
            width: 100%;
            margin-top: .266667rem;
  
            .time-list {
              position: relative;
              display: flex;
              width: 100%;
  
              .time-text {
                width: 1.813333rem;
              }
  
              .list-icon {
                position: relative;
                z-index: 5;
                width: .133333rem;
                height: .133333rem;
                margin-top: .16rem;
                background: #3975c5;
                border-radius: 50%;
              }
  
              .list-content {
                position: relative;
                box-sizing: border-box;
                display: flex;
                flex: 1;
                padding-bottom: .506667rem;
                margin-top: .16rem;
                margin-left: .613333rem;
  
                .content-icon {
                  width: 0;
                  height: 0;
                  border-top: .186667rem solid #f8f8f8;
                  border-left: .186667rem solid transparent;
                }
  
                .content {
                  box-sizing: border-box;
                  flex: 1;
                  padding: .293333rem .293333rem .293333rem .293333rem;
                  background: #f8f8f8;
                  border-radius: 0 .106667rem .106667rem .106667rem;
  
                  .customer {
                    margin-top: .133333rem;
                  }
  
                  .follow-text {
                    max-width: 5.333333rem;
                    margin-top: .133333rem;
                    color: #434242;
                    word-break: break-all;
                  }
                }
              }
            }
          }
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
    height: 3rem;
    pointer-events: none;
  }
  .line-ver-gradint {
    height: 1.28rem;
    width: 100%;
    background: linear-gradient(180deg,hsla(0,0%,100%,.76),hsla(0,0%,100%,0));
  }
  
  .qiandan {
    padding: 0px 11px;
    
    .list-box {
      background-color: #fff;
      padding: .293333rem;
      border-radius: .106667rem;
      margin-bottom: .266667rem;
      
      .header {
        font-weight: 500;
        line-height: .533333rem;
        font-size: .373333rem;
        color: #262626;
      }
      .desc {
        margin-top: .16rem;
        line-height: .453333rem;
        color: #7b7b7b;
        font-size: .32rem;
      }
      .price {
        margin-top: .266667rem;
        .price-item {
          background-color: #ecf4ff;
          border-radius: .106667rem;
          padding-top: .24rem;
          padding-bottom: .266667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 31.5%;
          .num {
            line-height: .666667rem;
            font-size: .48rem;
            color: #3975c5;
            font-weight: 600;
            margin-bottom: .16rem;
          }
          .price-desc {
            font-size: .293333rem;
            color: #3975c5;
          }
        }
      }
      .edit {
        color: #999;
        font-size: .32rem;
        margin-top: .346667rem;
        
        .img {
          height: 13px;
          width: 13px;
          margin-right: 4px;
        }
      }
    }
  }
  
  
  .payment {
    .pay-types {
      display: flex;
      padding: 0 .293333rem;
      background-color: #fff;
      padding-top: .586667rem;
      padding-bottom: .133333rem;
      
      .pay-type-item {
        background-color: #fff6ed;
        border-radius: .346667rem;
        padding: 0 .266667rem;
        height: .666667rem;
        color: #fd8517;
        margin-right: .266667rem;
        
        .img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
    .pay-list {
      padding: 0px 11px;
      .payment-item {
        width: 100%;
        padding: .293333rem;
        padding-bottom: 0;
        margin-top: .373333rem;
        background: #fff;
        border-radius: .106667rem;
    
        .payment-title {
          .title-tag {
            width: .96rem;
            background-color: #63af4e;
            border-radius: .053333rem;
            height: .506667rem;
            margin-right: .16rem;
            color: #fff;
            font-size: .32rem;
            font-weight: 400;
            line-height: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
    
          .title {
            font-family: PingFangSC-Medium, PingFang SC;
            font-size: .373333rem;
            font-weight: 500;
            line-height: .533333rem;
            color: #262626;
          }
        }
    
        .info-text-list {
          margin-top: .106667rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-size: .346667rem;
          font-weight: 400;
          line-height: .506667rem;
          color: #262626;
          word-break: break-all;
    
          .info-text-cur {
            color: #f65d48;
          }
        }
    
        .pay-btn-box {
          width: 100%;
          height: 1.173333rem;
    
          .pay-btn-left {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #262626;
    
            .avatar {
              width: .64rem;
              height: .64rem;
              margin-right: .24rem;
              border-radius: 50%;
            }
          }
    
          .pay-btn-right {
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #999;
    
            .img {
              width: .346667rem;
              margin-right: .106667rem;
            }
          }
        }
      }
    }
  }
  
  .serivce {
    .btn-box {
      display: flex;
      padding: 0 .293333rem;
      background-color: #fff;
      padding-top: .586667rem;
      padding-bottom: .133333rem;
      
      .btn-item {
        background-color: #fff6ed;
        border-radius: .346667rem;
        padding: 0 .266667rem;
        height: .666667rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fd8517;
        margin-right: .266667rem;
        
        .img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
    .serivce-list {
      padding: 0px 11px;

      .serivce-item {
        padding: .293333rem .293333rem 0;
        border-radius: .106667rem;
        background-color: #fff;
        margin-bottom: .266667rem;
        
        .desc {
          display: flex;
          height: .453333rem;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .133333rem;
          color: #7b7b7b;
          font-size: .32rem;
          
          .more-text {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 2.346667rem;
          }
        }
      }
      .serivce-people {
        height: 2.933333rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .left {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          
          .text {
            font-size: 15px;
            line-height: 21px;
            color: rgb(38, 38, 38);
          }
        }
        .middle {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 1.333333rem;
          
          .text {
            color: #3975c5!important;
            line-height: 20px;
          }
          .img {
            width: 62px;
            height: 8px;
            margin-top: 4px;
          }
        }
        .right {
          height: 1.226667rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          
          .text {
            font-size: 15px;
            line-height: 21px;
            color: rgb(38, 38, 38);
          }
        }
      }
    }
    .end-data {
      width: 100%;
      line-height: 1.333333rem;
      text-align: center;
      background-color: rgb(248, 248, 248);
      color: rgb(153, 153, 153);
    }
  }
</style>

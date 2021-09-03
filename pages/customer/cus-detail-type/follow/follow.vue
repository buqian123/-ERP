<template>
  <!-- 跟进 -->
  <view class="follow-box">
    <view class="follow-title">
      <view class="title-content">
        <view class="title-text">跟进信息</view>
      </view>
      <view class="main-box">
        <view class="box-inner">
          <view class="cus-list">
            <view class="cus-list-round">
              <text></text>
            </view>
            <view class="cus-list-info">
              <view class="cus-name">
                <text class="s1">跟进人：</text>
                <text class="s2">ZhengYu</text>
              </view>
              <view class="cus-status" @tap="showStatusAction = true">
                <view class="name">客户状态</view>
                <view class="text">
                  <text>成单/</text>
                </view>
              </view>
              <!-- 更改客户状态选择框 -->
              <view style="color: #000000;">
                <u-select v-model="showStatusAction" :list="statuslist" @confirm="changeStatus"></u-select>
              </view>
              <view class="btn-ul">
                <view class="invalid-flag" @tap="invalid.show = true"> 标记无效 </view>
                <u-modal v-model="invalid.show" :show-cancel-button="true" :content="invalid.content" @confirm="handleInvalid"></u-modal>
              </view>
            </view>
            <view class="cus-list-icon"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="follow-btn-ul">
      <view class="follow-btn-item">
        <view class="add-follow-icon">+</view>
        <view class="add-follow-text">添加跟进</view>
      </view>
    </view>
    <!-- 跟进列表 -->
    <view class="follow-ul">
      <view class="follow-list" v-for="(item, index) in 3" :key="index" @tap="goDetail">
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
</template>

<script>
export default {
  data() {
    return {
      showStatusAction: false,
      // 修改客户状态 操作菜单
      statuslist: [
        { label: '线索', value: 1 }, { label: '意向', value: 2 }, { label: '成单', value: 3 },
        { label: '支付', value: 4 }, { label: '复购', value: 5 }, { label: '联购', value: 6 }, 
        { label: '丢单', value: 7 }, { label: '无效', value: 8 }
      ],
      // 标记无效弹框
      invalid: {
        show: false,
        content: '确认标记无效么？'
      }
    }
  },
  methods: {
    // 改变客户状态
    changeStatus(index) {
      console.log(index);
    },
    // 确认标记无效
    handleInvalid() {
      console.log('确认');
    },
    // 查看跟进详情
    goDetail() {
      uni.navigateTo({
        url: '/pages/customer/cus-detail-type/follow/followDetail'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .follow-box {
    width: 100%;
    padding: 0 .293333rem;

    .follow-title {
      width: 100%;
      background: #fff;
      border-radius: .106667rem;

      .title-content {
        border-radius: .106667rem .106667rem 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 1.173333rem;
        padding: 0 10px;

        .title-text {
          font-family: PingFangSC-Medium, PingFang SC;
          font-size: .346667rem;
          font-weight: 600;
          color: #262626;
        }
      }

      .main-box {
        width: 100%;
        box-sizing: border-box;
        padding: 0 .266667rem .253333rem .32rem;

        .box-inner {
          width: 100%;
          background-color: #fbfbfb;
          border-radius: .106667rem;

          .cus-list {
            width: 100%;
            font-family: PingFangSC-Regular, PingFang SC;
            font-size: .32rem;
            font-weight: 400;
            color: #666;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: .333333rem .266667rem .32rem .186667rem;

            .cus-list-round {
              padding-top: .133333rem;

              text {
                display: block;
                width: .106667rem;
                height: .106667rem;
                background-color: #fd8517;
                border-radius: 50%;
              }
            }

            .cus-list-info {
              width: calc(100% - 1.54667rem);
              box-sizing: border-box;
              padding: 0 .666667rem 0 .213333rem;

              .cus-name {
                width: 100%;
                height: .44rem;
                display: flex;
                align-items: center;
                margin-bottom: .16rem;

                .s1 {
                  display: block;
                  width: 1.733333rem;
                }

                .s2 {
                  width: calc(100% - 1.73333rem);
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }

              .cus-status {
                width: 100%;
                display: flex;
                margin-bottom: .213333rem;

                .name {
                  display: block;
                  width: 1.733333rem;
                }

                .text {
                  width: calc(100% - 1.73333rem);
                }
              }

              .btn-ul {
                width: 100%;
                box-sizing: border-box;
                padding-left: 1.733333rem;

                .invalid-flag {
                  color: #fd8517;
                }
              }
            }

            .cus-list-icon {
              width: 1.44rem;
            }
          }
        }
      }
    }

    .follow-btn-ul {
      display: flex;
      margin-top: .266667rem;

      .follow-btn-item {
        width: 2.48rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: .773333rem;
        margin-left: 0;
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: .346667rem;
        font-weight: 400;
        color: #fff;
        text-align: center;
        background: #1b5db3;
        border-radius: .4rem;

        .add-follow-icon {
          width: .32rem;
          height: .32rem;
          margin-right: .16rem;
        }

        .add-follow-text {
          height: .906667rem;
          line-height: .933333rem;
        }
      }
    }

    .follow-ul {
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
</style>

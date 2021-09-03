<template>
  <view class="wrap">
    <view class="tab flex-bet">
      <view class="tab-item" style="margin-right: 10px;">
        <view class="t1 flex-col flex-jcas">
          <view class="tab-title">新增介绍人</view>
          <view class="desc">手机号介绍人录入</view>
        </view>

      </view>
      <view class="tab-item">
        <view class="t2 flex-col flex-jcas">
          <view class="tab-title">给介绍人分佣</view>
          <view class="desc">推荐的需求&订单分期</view>
        </view>
      </view>
    </view>
    <view class="title">
      介绍人
      <text class="total">1人</text>
    </view>
    <view class="people">
      <view class="people-list flex-wrap">
        <view class="people-item flex-col flex-cen">
          <view class="img">
            <text class="num">1</text>
          </view>
          <view class="name">张三</view>
          <view class="type">设计师</view>
        </view>
      </view>
      <view class="more flex-cen" @tap="morePeople">
        更多>
      </view>
    </view>
    <view class="title">
      介绍人公司
      <text class="total">1个</text>
    </view>
    <view class="company">
      <view class="company-list flex-wrap">
        <view class="company-item flex-col flex-cen">
          <view class="img">
            <text class="num">1</text>
          </view>
          <view class="name">测试有限公司</view>
          <view class="type">同行异业</view>
        </view>
      </view>
      <view class="more flex-cen" @tap="moreCompany">
        更多>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    morePeople() {
      uni.navigateTo({
        url: '/pages/introduct/people/index'
      })
    },
    moreCompany() {
      uni.navigateTo({
        url: '/pages/introduct/company/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  page {
    height: 100%;
  }

  .wrap {
    background-color: #f8f8f8;
    height: 100%;
    overflow-y: auto;
    padding: .293333rem .266667rem;
  }

  .tab {
    .tab-item {
      border-radius: .106667rem;
      height: 1.946667rem;
      flex: 1;
      font-size: .346667rem;
      font-weight: 500;
      color: #262626;

      .tab-title {
        font-size: .373333rem;
        color: #fff;
        margin-bottom: .24rem;
      }

      .desc {
        font-size: .32rem;
        color: hsla(0, 0%, 100%, .7);
      }
    }

    .t1 {
      position: relative;
      padding-left: .266667rem;
      width: 100%;
      height: 100%;
      background: url("/static/intro-people1.png");
      background-size: 100% 100%;
    }

    .t2 {
      position: relative;
      padding-left: .266667rem;
      width: 100%;
      height: 100%;
      background: url("/static/intro-price1.png");
      background-size: 100% 100%;
    }
  }

  .title {
    height: 1.493333rem;
    font-size: .453333rem;
    font-weight: 500;
    line-height: .613333rem;
    color: #262626;
    display: flex;
    align-items: center;

    .total {
      height: .533333rem;
      display: flex;
      align-items: center;
      background-color: #ff7906;
      font-size: .346667rem;
      color: #fff;
      padding: 0 .186667rem;
      border-radius: 1.333333rem 1.333333rem 1.333333rem 0;
      margin-left: .186667rem;
    }
  }

  .more {
    font-size: .32rem;
    color: #999;
    line-height: .453333rem;
    margin: 0 auto;
    margin-top: -.88rem;
    padding: .48rem 0 .4rem;
  }

  .people,
  .company {
    padding: .613333rem .213333rem 0 .266667rem;
    background-color: #fff;
    border-radius: .106667rem;

    .people-list,
    .company-list {

      .people-item,
      .company-item {
        width: 25%;
        margin-bottom: .88rem;

        .img {
          position: relative;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          background-image: url("/static/avatar-default-img.png");
          background-size: 100% 100%;

          .num {
            position: absolute;
            top: .053333rem;
            right: .16rem;
            transform: translate(50%, -50%);
            padding: 0 .08rem;
            color: #fff;
            font-size: .32rem;
            background-color: #f88c44;
            border-radius: .32rem;
            min-width: .32rem;
            line-height: .426667rem;
            text-align: center;
          }
        }

        .name {
          width: 98%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .346667rem;
          color: #262626;
          text-align: center;
          margin: .106667rem 0;
          line-height: .506667rem;
        }

        .type {
          max-width: 90%;
          font-size: .32rem;
          color: #999;
          line-height: .453333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
</style>

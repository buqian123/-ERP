<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "uview-ui/index.scss";
  @import "common/global.scss";
  .container {
   // width: 100%;
   // padding: 0 13px;
   // min-height: calc(100vh - 40px);
   // background-color: #F8F8F8;
   // // background-image: linear-gradient(top,#3975c5 2.56rem,#f8f8f8 4.64rem);
   // // background-image: -moz-linear-gradient(top,#3975c5 2.56rem,#f8f8f8 4.64rem);
   // background-image: -webkit-linear-gradient(top,#3975c5 80px,#f8f8f8 165px);
   width: 100%;
   padding: .266667rem 0.24074rem 0;
   min-height: calc(100vh - 1.33333rem);
   background-color: #f8f8f8;
   background-image: linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
   background-image: -moz-linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
   background-image: -webkit-linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
  }

  .chartBox {
    width: 100%;
    background-color: #fff;
    border-radius: .106667rem;
    margin-bottom: .293333rem;
    // overflow: hidden;
    
    .title {
      width: 100%;
      display: flex;
      align-items: center;
      font-size: .426667rem;
      font-weight: 700;
      box-sizing: border-box;
      padding: .506667rem .293333rem 0 .293333rem;
      position: relative;
      
      text {
        font-size: .426667rem;
        font-weight: 700;
      }
      
      .icon {
        margin-left: .213333rem;
        font-size: .426667rem;
      }
      
      .text {
        width: 70%;
      }
      .more {
        text {
          height: .48rem;
          line-height: .48rem;
          font-weight: 400;
          font-size: .32rem;
          color: #999;
        }
        
        .img {
          width: .266667rem;
          height: .266667rem;
          margin-left: .133333rem;
        }
      }
    }
    
    .toolbox {
      width: 100%;
      height: 1.466667rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: .4rem .293333rem;
      
      .drop {
        display: flex;
        align-items: center;
        height: .666667rem;
        overflow: hidden;
        background-color: #f1f7ff;
        border-radius: .053333rem;
        box-sizing: border-box;
        padding: 0 .213333rem;
        font-size: .32rem;
        margin-right: .266667rem;
        
        .drop-title {
          max-width: 100%;
          // font-size: .4rem;
          line-height: .586667rem;
          color: #3975c5 !important;
          font-size: .32rem;
          font-weight: 400;
        }
        
        .triangle {
          width: 0;
          height: 0;
          border-bottom: .106667rem solid #fff;
          border-left: .106667rem solid transparent;
          margin: .133333rem 0 0 .133333rem;
          border-bottom-color: #3975c5;
        }
      }
    }
    
    .data {
      width: 100%;
      box-sizing: border-box;
      padding: .146667rem .293333rem .546667rem .293333rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      
      .data-item {
        width: calc(33.33333% - .19556rem);
        height: 1.146667rem;
        margin-bottom: .72rem;
        
        .num {
          width: 100%;
          text-align: center;
          font-size: .426667rem;
          color: #3975c5;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: .213333rem;
        }
        .text {
          width: 100%;
          font-size: .32rem;
          color: #262626;
          text-align: center;
        }
      }
    }
    
    .charts {
      width: 100%;
      box-sizing: border-box;
      padding: 0 .293333rem;
    }
    
    .no-chart {
      width: 100%;
      height: 5.333333rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
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

<script>
	export default {
		onLaunch: function() {
      const skinBlue = [
        { name: '--nav-bgc', value: 'skyblue' },
        { name: '--text-color', value: '#fff' }
      ]
      const skinOrange = [
        { name: '--nav-bgc', value: '#f40' },
        { name: '--text-color', value: '#000' }
      ]
      let theme = uni.getStorageSync('theme')
      switch(theme) {
        case 'skinBlue':
          skinBlue.forEach(item => {
            document.body.style.setProperty(item.name, item.value)
          })
          break;
        case 'skinOrange':
          skinOrange.forEach(item => {
            document.body.style.setProperty(item.name, item.value)
          })
          break;
        default: return false;
      }
		},
		onShow: function() {
      
		},
		onHide: function() {
      
		},
    created() {
      //在页面加载时读取sessionStorage里的状态信息
      if (sessionStorage.getItem("store") ) {
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }
      
      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
	}
</script>

<style lang="scss">
	/*每个页面公共css */
  @import "uview-ui/index.scss";
  @import "common/global.scss";
  input {
    outline: none;
    border: none;
    font-size: .4rem;
    background-color: #fff;
    line-height: .56rem;
    color: #262626;
    padding-left: 0;
    background-color: rgb(255, 255, 255);
  }
  page {
    height: 100%;
  }
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
   // background-color: var(--nav-bgc);
   background-color: #f8f8f8;
   // background-image: linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
   // background-image: -moz-linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
   background-image: -webkit-linear-gradient(top,#3975c5 2.56rem, #f8f8f8 4.64rem);
   // background-image: var(--linear-gradient);
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
  .line-ver-gradint {
    height: 0.28rem;
    width: 100%;
    background: linear-gradient(180deg,hsla(0,0%,100%,.76),hsla(0,0%,100%,0));
  }
  .u-field {
    padding: .426667rem .266667rem;
    font-size: .373333rem;
    line-height: .64rem;
    background-color: #fff;
    display: flex;
    width: 100%;
  
    ::v-deep .u-field-inner {
      width: 100%;
    }
    ::v-deep .u-label  {
      margin-left: .16rem;
      font-size: .426667rem;
      font-weight: 500;
      line-height: .613333rem;
      color: #262626;
      width: auto !important;
      text-align: left;
      word-wrap: break-word;
      margin-right: .32rem;
      flex: none !important;
    }
    ::v-deep .fild-body {
      position: relative;
      color: #969799;
      text-align: right;
      vertical-align: middle;
      word-wrap: break-word;
    }
    
    ::v-deep .uni-input-wrapper {
      font-size: .4rem;
      color: #262626;
      cursor: pointer;
    }
    
    ::v-deep .uni-input-input {
      font-size: .4rem !important;
      color: #262626;
      font-weight: 500;
    }
    ::v-deep .uni-textarea-textarea {
      font-size: .4rem !important;
      color: #262626 !important;
      font-weight: 500;
    }
  }
  .no-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-size: .32rem;
    font-weight: 400;
    line-height: .453333rem;
    color: #999;
    text-align: center;
    
    image {
      width: 2rem;
      height: 2rem;
    }
  }
  .voiceTool {
    width: 100%;
    position: relative;
    
    .btn {
      width: 100%;
      height: 1.173333rem;
      box-sizing: border-box;
      border: .013333rem solid #ccc;
      border-radius: .053333rem;
      display: flex;
      align-items: center;
      justify-content: center;
      
      image {
        width: .346667rem;
        height: .346667rem;
        margin-right: .133333rem;
      }
      text {
        font-size: .373333rem;
        color: #262626;
      }
    }
    .wave {
      width: 4.933333rem;
      height: 2.373333rem;
      background-color: #e9f2ff;
      border-radius: .16rem;
      position: absolute;
      top: -2.666667rem;
      left: calc(50% - 2.46667rem);
      z-index: auto;
      .inner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        .music {
          width: .933333rem;
          height: .533333rem;
          position: relative;
          margin-bottom: .213333rem;
          
          @keyframes bodong
          {
            from {height:.133333rem;}
            to {height: .5rem;}
          }
          
          text {
            width: .133333rem;
            height: .133333rem;
            bottom: 0;
            position: absolute;
            background: #3975c5;
            animation: bodong .5s ease 0s infinite alternate;
          }
          .s1 {
            left: 0;
            animation-delay: .3s;
          }
          .s2 {
            left: .186667rem;
            animation-delay: .4s;
          }
          .s3 {
            left: .373333rem;
            animation-delay: .6s;
          }
          .s4 {
            left: .56rem;
            animation-delay: .8s;
          }
          .s5 {
            left: .746667rem;
            animation-delay: 1s;
          }
        }
        .text {
          font-size: .32rem;
          color: #3975c5;
        }
        .shape {
          width: 0;
          height: 0;
          border-left: .213333rem solid transparent;
          border-right: .213333rem solid transparent;
          border-top: .16rem solid #e9f2ff;
          position: absolute;
          bottom: -.16rem;
          left: 2.253333rem;
          z-index: auto;
        }
      }
    }
  }
  
</style>

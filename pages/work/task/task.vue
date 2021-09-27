<template>
  <!-- 新建任务 -->
  <view class="task-box">
    <u-form :model="form" ref="uForm" :error-type="errorType" label-width="180">
      <u-form-item label="任务名称"><u-input v-model="form.name" placeholder="请输入" /></u-form-item>
      <u-form-item label="执行人"><u-input v-model="form.name" placeholder="请输入" /></u-form-item>
      <u-form-item label="执行周期">
        <view class="cycle flex-jsac">
          每
          <u-input type="number" v-model="form.name" placeholder="" />
          天，执行一次
        </view>
      </u-form-item>
      <u-form-item label="休息日">
        <view @tap="$refs.testData.open()">休息日</view>
        <!-- 选择周几的 抽屉框 -->
        <uni-drawer ref="testData" mode="right" :mask-click="true" :width="320">
          <view class="test-data">
            <view class="d-title flex-cen">选择执行休息日</view>
            <view class="datalist">
              <u-checkbox-group :wrap="true" icon-size="10" size="28">
                <u-checkbox 
                  v-model="item.checked" shape="circle"
                  v-for="(item, index) in testDataList" :key="index" 
                  :name="item.name"
                  label-size="28"
                >{{item.name}}</u-checkbox>
              </u-checkbox-group>
            </view>
            <view class="btn-box flex-cen">
              <u-button style="width: 30%;" :hair-line="false" type="info" size="medium">清除</u-button>
              <u-button style="width: 60%;" :hair-line="false" type="primary" size="medium">确定</u-button>
            </view>
          </view>
        </uni-drawer>
      </u-form-item>
      <u-form-item label="任务状态">
        <u-switch v-model="taskStatus" size="40"></u-switch>
      </u-form-item>
      <u-form-item label="达标分数">
        <view class="flex-jsac">
          <u-input v-model="form.name" placeholder="请输入" />分
        </view>
      </u-form-item>
      <u-form-item label="可重复完成">
        <u-switch v-model="repeatSuccess" size="40"></u-switch>
      </u-form-item>
    </u-form>
    
    
    <!--  任务项的表格 -->
    <view class="taskItem">
      <view>任务项</view>
      <u-table padding="20rpx 0">
        <u-tr class="u-tr">
          <u-th width="10%" class="u-th"></u-th>
          <u-th width="20%" class="u-th">任务</u-th>
          <u-th width="20%" class="u-th">数量</u-th>
          <u-th width="25%" class="u-th">分数</u-th>
          <u-th width="25%" class="u-th">上限次数</u-th>
        </u-tr>
        <u-tr class="u-tr" v-for="(item, index) in 20" :key="index">
        		<u-td width="10%" class="u-td">
              <!-- <u-checkbox style="height: 16px;" label-size="0" v-model="item.cke" size="26" shape="circle"></u-checkbox> -->
              <radio :value="String(item)" class="radio" />
            </u-td>
        		<u-td width="20%" class="u-td">{{item}}</u-td>
        		<u-td width="20%" class="u-td">{{item---index}}</u-td>
        		<u-td width="25%" class="u-td">{{item}}</u-td>
        		<u-td width="25%" class="u-td">{{item}}</u-td>
        	</u-tr>
      </u-table>
    </view>
    <view style="width: 100%;height: 70px;"></view>
    <view class="btn-box flex-bet">
      <u-button style="width: 30%;" :hair-line="false" type="info" size="medium">清除</u-button>
      <u-button style="width: 60%;" :hair-line="false" type="primary" size="medium" @click="add">确定</u-button>
    </view>
  </view>
</template>

<script>
export default {
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
  onReady() {
    this.$refs.uForm.setRules(this.rules);
  },
  data() {
    return {
      form: {
        name: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur,change' }
        ]
      },
      errorType: ['message'],
      testDataList: [
        { name: '每周一', checked: false },
        { name: '每周二', checked: false },
        { name: '每周三', checked: false },
        { name: '每周四', checked: false },
        { name: '每周五', checked: false },
        { name: '每周六', checked: false },
        { name: '每周日', checked: false },
      ],
      taskStatus: false,
      repeatSuccess: false
    }
  },
  methods: {
    submit() {
      this.$refs.uForm.validate(valid => {
        if (valid) {
          console.log('验证通过');
        } else {
          console.log('验证失败');
        }
      });
    },
    add() {
      // var data = {
      //   title: '新增任务',
      //   list: [
          
      //   ]
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  page {
    height: 100%;
  }
  .task-box {
    width: 100%;
    height: 100%;
    padding: 15px 8px 0;
    position: relative;
  }
  
  .test-data {
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    position: relative;
    .d-title {
      width: 100%;
      height: 60px;
      font-weight: bold;
    }
    .datalist {
      width: 100%;
      padding-left: 10px;
      
      .u-checkbox-group {
        .u-checkbox {
          padding: 7px;
          border-top: 1px solid #ccc;
        }
      }
    }
  }
  
  
  .taskItem {
    .radio {
      width: 15px;
      height: 15px;
    }
  }
  
  .btn-box {
    width: 100%;
    height: 55px;
    padding: 13px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    button {
      margin: 0;
    }
  }
</style>

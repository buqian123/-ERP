import Vue from 'vue'
import Vuex from 'vuex'

import customer from '@/store/modules/customer'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 上传文件地址
    uploadUrl: 'http://9.andragon.cn/api/upload'
  },
  modules:{
    customer
  }
})
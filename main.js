import Vue from 'vue';
import App from './App';
import store from './store'
import '@/common/rem.js'
// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false;

App.mpType = 'app';


if (/(Android)/i.test(navigator.userAgent)) {
  Vue.prototype.sdk=jWeixin
}
if (/(iPhone|iPad|iPod|ios)/i.test(navigator.userAgent)) {
  Vue.prototype.sdk=wx
}



const app = new Vue({
  store,
	...App
});
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js';
Vue.use(httpInterceptor, app);
// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js';
Vue.use(httpApi, app);
app.$mount();
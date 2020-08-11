import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import router from "./router";
import 'element-ui/lib/theme-chalk/index.css';

import store from '@/store/index';

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.prototype.msgSuccess = function (msg) {
  this.$message({showClose: true, message: msg, type: "success"})
}

Vue.prototype.msgError = function (msg) {
  this.$message({showClose: true, message: msg, type: "error"})
}

Vue.prototype.msgInfo = function (msg) {
  this.$message({showClose: true, message: msg, type: "info"})
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

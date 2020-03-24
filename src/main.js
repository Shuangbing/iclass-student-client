import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import playSounds from './plugins/sound';
import { FormModel } from 'ant-design-vue';

Vue.use(Antd);
Vue.use(FormModel);
Vue.prototype.$sound = playSounds
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

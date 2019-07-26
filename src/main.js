// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import axios from 'axios'
import login from './components/login.vue'
import color from './components/color.vue'
import shoppingcart from './components/shoppingcart.vue'
import VTSheader from './components/VTSheader.vue'
import VTSnavigator from './components/VTSnavigator.vue'
import VTSbody from './components/VTSbody.vue'
import VTSfooter from './components/VTSfooter.vue'

// import UserRPT from '@/components/UserRPT'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(axios);
// Vue.use(qs);

Vue.component('login', login);
Vue.component('color', color);
Vue.component('shoppingcart', shoppingcart);
Vue.component('vts-header', VTSheader);
Vue.component('vts-navigator', VTSnavigator);
Vue.component('vts-body', VTSbody);
Vue.component('vts-footer', VTSfooter);

// Vue.component('user-rpt', UserRPT);


// 将 axios 改写为 Vue 的原型属性,使在其它的组件中可以使用 axios
Vue.prototype.$axios = axios;
Vue.prototype.APIroot = "/im";//dev
// Vue.prototype.APIroot = "";//prod
// Vue.prototype.$qs = qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

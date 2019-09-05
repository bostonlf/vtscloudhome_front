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
// Vue.prototype.APIroot = "/im";//dev
Vue.prototype.APIroot = "";//prod
// Vue.prototype.$qs = qs;

/* eslint-disable no-new */
new Vue({
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      testLoginUser: "inituser",
      isLogin:false
    };
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    gettestdtat: function() {
      alert("start");
      //发送get请求  /apis/api/values
      this.$http.get("/apis/api/testcrodata").then(
        function(res) {
          console.log("请求successfully处理");
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    getLoginUser: function() {
      this.$http.get(this.APIroot+"/API/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");
          this.delwithlogin(res);
        },
        function() {
          console.log("请求失败处理");
      
        }
      );
    },
    delwithlogin: function(res) {
    
      if (res.body == "loginError") {
        alert("Token error or project user not existing.");
        console.log("re-direct to login page.");
        function jumurl() {
          window.location.href = "login?backurl=" + window.location.href;
        }
        if(confirm("You are not login , do you want go to login page?"))window.location.href = "login?backurl=" + window.location.href;
        // setTimeout(jumurl, 3000);
      } else {
        console.log("you can get current user.");
        // console.log(JSON.stringify(res));
        // console.log(res.body.cn);
        this.testLoginUser = res.body.cn;
        this.isLogin = true;
        Vue.prototype.currentUserDocument = res.body.cn;
        console.log("currentUser is :"+Vue.prototype.currentUserDocument);
        //display you user INFO in your page
      }
    }
  },
  mounted() {
    //自动加载indexs方法
    this.getLoginUser();
  }
})

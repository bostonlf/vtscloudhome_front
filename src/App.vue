<template>
<div id="app">
  <vts-header v-bind:currentUser="currentUser"  v-bind:isLogin="isLogin" ></vts-header>
  <div id="ibm-content-wrapper">
  <div id="ibm-pcon">
  <div id="ibm-content">
  <div id="ibm-content-body">
    <router-view/>
    <vts-footer></vts-footer>
  </div>
  </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentUser: "inituser",
      isLogin:false
    };
  },
  name: "App",
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
          // var fackres = {
          //   url: "/getLoginUser",
          //   ok: true,
          //   status: 200,
          //   statusText: "OK",
          //   headers: {
          //     map: {
          //       date: ["Tue, 28 May 2019 08:10:05 GMT"],
          //       etag: ['W/"83a-092unGzkh9ByG3LZkCn9JzDJh38"'],
          //       connection: ["keep-alive"],
          //       "x-powered-by": ["Express"],
          //       "content-length": ["2106"],
          //       "content-type": ["application/json; charset=utf-8"]
          //     }
          //   },
          //   body: {
          //     issuer: {
          //       _: "https://w3id.alpha.sso.ibm.com/auth/sps/samlidp2/saml20",
          //       $: {
          //         Format: "urn:oasis:names:tc:SAML:2.0:nameid-format:entity"
          //       }
          //     },
          //     sessionIndex: "uuidfd52c0ae-016a-148d-b7d0-a3e9d282deec",
          //     nameID: "feilv@cn.ibm.com",
          //     nameIDFormat: "urn:ibm:names:ITFIM:5.1:accessmanager",
          //     firstName: "Fei",
          //     uid: "053946672",
          //     lastName: "Lv",
          //     emailaddress: "feilv@cn.ibm.com",
          //     cn: "Fei Lv",
          //     blueGroups: [
          //       "cn=ITSAS General Access 1,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=user - perf,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_CN-BJ-CDL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_CN-SH-CDL-ShuiOn1,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_TW-CDL-ALL2,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_HK-G6O-SWG-G2,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_CN-XA-CDL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_CN-NB-CDL-DEP1,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=rptHRMS_cn,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=BSO-AP-GCG_CN-XA-CSTL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=ratsuite183_RTCuser,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=MS__OFFICE__2013SE__B,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=MS__OFFICE__2010SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=MS__OFFICE__2013SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=MS__OFFICE__2011SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=LIS Regular China,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=legalibm,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=WSE - Order&Workflow Squad,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=w3id-saml-adopters-techcontacts,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=HRMS_employees_ch_hk,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=pSeriesADS,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=ThinkNews,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=SH IBM Reqular 201808,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=SH IBM Reqular 201808-1,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=SH IBM Reqular 201808 P,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=G_China_Grp,ou=memberlist,ou=ibmgroups,o=ibm.com",
          //       "cn=MD test group1,ou=memberlist,ou=ibmgroups,o=ibm.com"
          //     ]
          //   },
          //   bodyText:
          //     '{"issuer":{"_":"https://w3id.alpha.sso.ibm.com/auth/sps/samlidp2/saml20","$":{"Format":"urn:oasis:names:tc:SAML:2.0:nameid-format:entity"}},"sessionIndex":"uuidfd52c0ae-016a-148d-b7d0-a3e9d282deec","nameID":"feilv@cn.ibm.com","nameIDFormat":"urn:ibm:names:ITFIM:5.1:accessmanager","firstName":"Fei","uid":"053946672","lastName":"Lv","emailaddress":"feilv@cn.ibm.com","cn":"Fei Lv","blueGroups":["cn=ITSAS General Access 1,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=user - perf,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_CN-BJ-CDL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_CN-SH-CDL-ShuiOn1,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_TW-CDL-ALL2,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_HK-G6O-SWG-G2,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_CN-XA-CDL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_CN-NB-CDL-DEP1,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=rptHRMS_cn,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=BSO-AP-GCG_CN-XA-CSTL-DEP2,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=ratsuite183_RTCuser,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=MS__OFFICE__2013SE__B,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=MS__OFFICE__2010SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=MS__OFFICE__2013SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=MS__OFFICE__2011SE__MASTER,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=LIS Regular China,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=legalibm,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=WSE - Order&Workflow Squad,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=w3id-saml-adopters-techcontacts,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=HRMS_employees_ch_hk,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=pSeriesADS,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=ThinkNews,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=SH IBM Reqular 201808,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=SH IBM Reqular 201808-1,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=SH IBM Reqular 201808 P,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=G_China_Grp,ou=memberlist,ou=ibmgroups,o=ibm.com","cn=MD test group1,ou=memberlist,ou=ibmgroups,o=ibm.com"]}'
          // };
          // this.delwithlogin(fackres);
          // console.log("请求失败处理2");
        }
      );
    },
    delwithlogin: function(res) {
      //JSON.stringify(res) 返回这个对象
      // {
      //     "url": "/getLoginUser",
      //     "ok": true,
      //     "status": 200,
      //     "statusText": "OK",
      //     "headers": {
      //         "map": {
      //             "date": ["Thu, 23 May 2019 08:37:06 GMT"],
      //             "etag": ["W/\"6-fnk3A5ndt6j7t9OzoIu0G7TLgek\""],
      //             "connection": ["keep-alive"],
      //             "x-powered-by": ["Express"],
      //             "content-length": ["6"],
      //             "content-type": ["text/html; charset=utf-8"]
      //         }
      //     },
      //     "body": "aabbcc",
      //     "bodyText": "aabbcc"
      // }

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
        this.currentUser = res.body.cn;
        this.isLogin = true;
        //display you user INFO in your page
      }
    }
  },
  mounted() {
    //自动加载indexs方法
    this.getLoginUser();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

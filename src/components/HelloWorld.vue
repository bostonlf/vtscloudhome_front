<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <p>
      <button v-on:click="AddNewUser">AddNewUser</button>
    </p>
    <p>
      <button v-on:click="DeleteUser">DeleteUser</button>
    </p>
    <p>
      <button v-on:click="UpdateUser">UpdateUser</button>
    </p>
    <p>
      <button v-on:click="SearchUsers">SearchUsers</button>
    </p>
    <p>
      <button v-on:click="getLoginUser">mytestbutton123</button>
    </p>
    <p>
      <button v-on:click="testnewAJAX">testnewAJAX</button>
    </p>

    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
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
      this.$http.get("/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");

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
            alert("you will be re-direct to login page in 3 seconds.");
            function jumurl() {
              window.location.href = "login?backurl=" + window.location.href;
            }
            setTimeout(jumurl, 3000);
          } else {
            alert("you can get current user.");
            console.log(res.body);
            //display you user INFO in your page
          }
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    AddNewUser: function() {
      alert("AddNewUser");
      this.$http.post("/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    DeleteUser: function() {
      alert("DeleteUser");
      this.$http.delete("/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    UpdateUser: function() {
      alert("UpdateUser");
      this.$http.put("/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    SearchUsers: function() {
      alert("SearchUsers");
      this.$http.get("/getLoginUser").then(
        function(res) {
          console.log("请求successfully处理");
        },
        function() {
          console.log("请求失败处理");
        }
      );
    },
    testnewAJAX: function(){


axios.get('/testnewAJAX?ID=12345')
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});


    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

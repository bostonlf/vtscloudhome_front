<template>
  <article>
    <div v-if="userRPTdata.length>0">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>User</th>
            <th>Role</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Modified date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userRPTdata"  v-bind:key="user.x_userid">
            <td>
              <input
                type="checkbox"
                v-model="selectedUser"
                v-bind:value="user.checkboxValue"
                v-bind:id="user.x_userid"
              >
            </td>
            <td>
<router-link :to="{name:'ExistingUser',params:{userdocid:user._id}}">{{ user.x_userid }}</router-link>
            </td>
            <td>{{ user.role }}</td>
            <td>{{ user.x_firstname }}</td>
            <td>{{ user.x_lastname }}</td>
            <td>{{ user.x_modified }}</td>
            <td>{{ user.Status }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              <button @click="SelectAll">Select all</button>
            </td>
            <td colspan="3">
              <button @click="DeleteSelected">Delect selected user</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div v-else>No records.</div>
    <hr>

    {{selectedUser}}
  </article>
</template>

<script>
import qs from "qs";
// import axios from 'axios';
// var root = '/im'
// var root = 'http://172.16.188.107:8080/im'
// https://localhost:3001/testnewAJAX
// this.$axios.defaults.baseURL = "/im"
export default {
  data() {
    return {
      userRPTdata: [],
      selectedUser: []
    };
  },
  name: "UserRPT",
  props: ["loginmsg"],
  methods: {
    getuserRPT: function(params) {
      this.$axios
        .get(this.APIroot+"/API/searchUsers?country=cn&customer=IBM")
        .then(response => {
          if ("loginError" == response.data) {
            //跳转到login
            // https://localhost:3001/login
            var id = 1;
            this.$router.push({ name: "Pleaselogin", params: { userid: id } });
          } else {
            this.userRPTdata = response.data;
            for (var i = 0; this.userRPTdata[i]; i++) {
              var currentRPTuser = this.userRPTdata[i];
              currentRPTuser.checkboxValue = this.generatecheckboxvaule(
                currentRPTuser._id,
                currentRPTuser._rev
              );
            }
          }
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    SelectAll: function() {
      if (this.selectedUser.length > 0) {
        this.selectedUser = [];
      } else {
        this.selectedUser = [];
        for (var i = 0; this.userRPTdata[i]; i++) {
          this.selectedUser.push(
            this.generatecheckboxvaule(
              this.userRPTdata[i]._id,
              this.userRPTdata[i]._rev
            )
          );
        }
      }
    },
    DeleteSelected: function() {
      if (this.selectedUser.length == 0) {
        alert("Please select one document at least.");
      } else {
        var that = this;
        this.$axios
          .delete(this.APIroot+"/API/deleteSelectedUsers", {
            //params参数必写 , 如果没有参数传{}也可以
            params: {
              id: 12345,
              selectedUser: this.selectedUser
            },
            paramsSerializer: params => {
              return qs.stringify(params, { indices: false });
            }
          })
          .then(function(res) {
            console.log(res);
            that.getuserRPT();
          })
          .catch(function(err) {
            console.log(err);
          });
      }
    },
    generatecheckboxvaule: function(id, rev) {
      return id + "@" + rev;
    }
  },
  mounted() {
    //自动加载indexs方法
    this.getuserRPT();
  }
};
</script>
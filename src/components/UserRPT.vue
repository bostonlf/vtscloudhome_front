<template>
  <article>
      info@@{{info}}@@
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
    <tr v-for="user in userRPTdata">
      <td><input type="checkbox"></td>
      <td>{{ user.User }}</td>
      <td>{{ user.Role }}</td>
      <td>{{ user.FirstName }}</td>
      <td>{{ user.LastName }}</td>
      <td>{{ user.ModifiedDate }}</td>
      <td>{{ user.Status }}</td>
    </tr>
</tbody>
  <tfoot>
<tr>
<td colspan="6"></td>
</tr>
  </tfoot>
</table>

  </article>
</template>

<script>
// import axios from 'axios';
// var root = '/im'
// var root = 'http://172.16.188.107:8080/im'
// https://localhost:3001/testnewAJAX
// this.$axios.defaults.baseURL = "/im"
export default {
  data() {
    return {
      userRPTdata: [
        {
          User: "&^sesese",
          Role: "HR",
          FirstName: "seses",
          LastName: "esesese",
          ModifiedDate: "2019/02/14",
          Status: "Active"
        },
        {
          User: "badgeitaly@cn.ibm.com",
          Role: "Badge",
          FirstName: "Badge",
          LastName: "Italy",
          ModifiedDate: "2019/02/13",
          Status: "Inactive"
        },
        {
          User: "1112wsetest2018@outlook.com",
          Role: "HR",
          FirstName: "1112WSETest2018@outlook.com",
          LastName: "1112WSETest2018@outlook.com",
          ModifiedDate: "2019/05/16",
          Status: "Active"
        },
        {
          User: "badge1114@cn.ibm.com",
          Role: "Badge",
          FirstName: "Badge",
          LastName: "1114",
          ModifiedDate: "2019/02/14",
          Status: "Active"
        },
        {
          User: "badgege@cn.ibm.com",
          Role: "Badge",
          FirstName: "BadgeGE@cn.ibm.com",
          LastName: "BadgeGE@cn.ibm.com",
          ModifiedDate: "2018/09/02",
          Status: "Active"
        }
      ],
      info:"info"
    };
  },
  name: "UserRPT",
  props: ["loginmsg"],
  methods:{
getuserRPT : function(params) {
        this.$axios
      .get('/im/API/searchUsers?country=cn&customer=IBM')
      .then(response => (this.info = response))
      .catch(function (error) { // 请求失败处理
        console.log(error);
      });
}
  },
    mounted() {
    //自动加载indexs方法
    this.getuserRPT();
  }
};
</script>
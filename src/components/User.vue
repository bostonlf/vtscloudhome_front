<template>
  <div>
    <p>
      User accounts
      <br/>
    <a href="#/route/createNewUser">Create a new User account</a>
    </p>
    <p><div class="ibm-rule ibm-alternate-1"></div></p>
    <p>
      To find users, please input user's information then click the Search button - fuzzy search scope including User ID, Role, Email, First name, Last name.
      Please input user's information
      <br>
      <div class="dataTables_filter">
      <input type="text" v-model="searchFilter">
      <button>Search</button>
      </div>
    </p>
    <p>
        <user-rpt v-bind:searchFilter="searchFilter"></user-rpt>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import UserRPT from '@/components/UserRPT'
Vue.component('user-rpt', UserRPT);

export default {
    data() {
    return {
      root:this.APIroot,
      searchFilter:""
    };
  },
  name: "User",
  props: ["loginmsg"],
};
</script>
<template>
  <div>
    <p>
      User accounts
      <br>
    <a href="#/route/createNewUser">Create a new User account</a>
    </p>
    <p>
      To find users, please input user's information then click the Search button - fuzzy search scope including User ID, Role, Email, First name, Last name.
      Please input user's information
      <br>
      <input type="text" v-model="searchFilter">
      <button>Search</button>
    </p>
    <p>
        <user-rpt v-bind:searchFilter="searchFilter"></user-rpt>

<router-link :to="{name:'ExistingUser',params:{username:'jspang'}}">ExistingUser</router-link>

    </p>
    <p>


    APIroot{{root}}

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
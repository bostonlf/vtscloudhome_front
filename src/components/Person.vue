<template>
  <div>
    <p>
      Person
      <br/>
    <a href="#/route/PersonDetail">Create a new Person</a>
    </p>
    <p><div class="ibm-rule ibm-alternate-1"></div></p>
    <p>
      To find persons, please input person's information then click the Search button - fuzzy search scope including Resource key, Status, Resource type, Resource first name, Resource last name, Department name and V-TServices responsible manager.
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
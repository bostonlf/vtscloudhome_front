<template>
  <header role="banner" aria-labelledby="ibm-pagetitle-h1">
    <!--MENU_NAVIGATION_BEGIN-->
    <div class="ibm-sitenav-menu-container">
      <div class="ibm-sitenav-menu-name">
        <a href="#/route/VTShomepage">V-TServices</a>
      </div>
      <div class="ibm-sitenav-menu-list">
        <ul role="menubar">
          <li role="presentation" class="ibm-highlight">
            <a role="menuitem" href="#/route/VTShomepage">V-TServices</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/Person">Person</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/Request">Request</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/TaskProfile">Task profile</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/Task">Task</a>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/Adminstration">Adminstration</a>
<ul>
    <li v-for="item in SubItemList">
        <router-link :to="{name:item.routerName,params:{linkText:item.linkText}}">{{ item.linkText }}</router-link>
    </li>
</ul>
          </li>
          <li role="presentation">
            <a role="menuitem" href="#/route/User">User accounts</a>
          </li>
        </ul>
      </div>

<div>currentUser : {{currentUser}}</div>


    </div>
    <!--MENU_NAVIGATION_END-->
    <!--LEADSPACE_BEGIN-->
    <div
      id="ibm-leadspace-head"
      class="ibm-alternate"
      v-bind:style="backgroundStyle">
      <div id="ibm-leadspace-body" class="ibm-padding-top-r2 ibm-padding-bottom-r2">
        <div class="ibm-columns ibm-alternate-background">
          <div class="ibm-col-6-4 ibm-col-medium-1-1">
            <h1 class="ibm-h1 ibm-medium ibm-padding-bottom-1">V-TServices</h1>
            <h4 class="ibm-h4 ibm-padding-bottom-2">Administrator</h4>
          </div>
        </div>
      </div>
    </div>
    <!--LEADSPACE_END-->
  </header>
</template>

<script>
export default {
  data() {
    return {
      backgroundStyle: {
        backgroundImage:
          "url(" + require("@/assets/leadspace-lightblue.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "right"
      },
      SubItemList: [
        {"routerName":"AdminCompany","linkText":"V-TSerivces company"},
        {"routerName":"AdminIBMcompany","linkText":"IBM company"},
        {"routerName":"AdminSupplierCompany","linkText":"Supplier company name"},
        {"routerName":"AdminDepartment","linkText":"Department name"},
        {"routerName":"AdminPrimaryLocation","linkText":"V-TServices primary location"},
        {"routerName":"AdminAdditionallocation","linkText":"V-TServices additional location"},
        {"routerName":"AdminProfession","linkText":"Profession"},
        {"routerName":"AdminCustomerInvolved","linkText":"Customer data are involved"},
        {"routerName":"AdminTypeSystem","linkText":"Type of system administrator right"},
        {"routerName":"AdminImports","linkText":"Imports"},
        {"routerName":"AdminExports","linkText":"Exports"}
        ]
    };
  },props: ["currentUser"],
};
</script>

<style>
</style>
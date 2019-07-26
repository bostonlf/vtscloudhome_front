<template>
  <main>
    <div id="ibm-pcon">
      <!--CONTENT_BEGIN-->
      <div id="ibm-content">
        <div id="ibm-content-body">
          <div id="ibm-content-main">
            <div class="ibm-band ibm-background-neutral-white-core">
            
<table border="0" cellpadding="0" cellspacing="0" class="ibm-data-table display dataTable no-footer dtr-inline ibm-widget-processed" data-widget="datatable" data-searching="true" role="grid">
        <caption class="ibm-h1">Please select</caption> 
        <tbody>
          <tr v-for="item in SubItemList">
            <td class="ibm-forward-link">
              <router-link :to="{name:item.routerName,params:{linkText:item.linkText}}">{{ item.linkText }}</router-link>
            </td>
          </tr>
        </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
  },
  name: "UserRPT",
  props: ["searchFilter"]
};
</script>
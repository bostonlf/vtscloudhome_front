<template>
<form class="ibm-column-form" @submit.prevent="createNewUser">
<div  class="ibm-columns">
  <div  class="ibm-col-1-1">
    <div class="ibm-show-hide ibm-alternate ibm-widget-processed">
      <div class="ibm-container-body">
        <div  class="ibm-columns">
          <div  class="ibm-col-1-1">
            <p class="ibm-h4">createNewUser</p>
            
<p>The fields indicated with an asterisk (*) are required to complete this transaction; other fields are optional. If you do not want to provide us with the required information, please use the back button on your browser to return to the previous page.</p>

<div style="display:none">
      <input type="hidden" v-model="userform.boname" name="boname" id="boname" value="XUSERPROFILE">
      <input type="hidden" v-model="userform.nexturl" name="nexturl" id="nexturl" value="User">
      <input type="hidden" v-model="userform.x_docid" name="x_docid" id="x_docid" value>
      <input type="hidden" v-model="userform.state" name="state" id="state" value="ACTIVE">
      <input type="hidden" v-model="userform.app" name="app" id="app" value="VTService">
      <input
        type="hidden"
        v-model="userform.appFolder"
        name="appFolder"
        id="appFolder"
        value="X0033"
      >
      <input
        type="hidden"
        v-model="userform.basePath"
        name="basePath"
        id="basePath"
        value="/tools/wse/runtime/hspx/dev/protect"
      >
            <input
        type="hidden"
        v-model="userform.x_returnMode"
        name="x_returnMode"
        id="x_returnMode"
        value="xinclude"
      >
      <input
        type="hidden"
        v-model="userform.x_allFilesName"
        name="x_allFilesName"
        id="x_allFilesName"
        value
      >
      <input
        type="hidden"
        v-model="userform.fileCheck"
        name="fileCheck"
        id="fileCheck"
        value="true"
      >
</div>

        <p>
          <label for="x_focalpoint" class="ibm-column-field-label">Focal Point of countries:</label>
            <input type="text" v-model="userform.x_focalpoint" name="input.x_focalpoint" id="x_focalpoint" maxlength="200"  size="30" value>
        </p>

        <p>
          <label for="x_notification" class="ibm-column-field-label">Email notifications:</label>
            <input type="text" v-model="userform.x_notification" name="input.x_notification" id="x_notification" maxlength="200"  size="30" value>
        </p>

        <p>
          <label for="x_userid" class="ibm-column-field-label">User ID:<span class="ibm-required">*</span></label>
            <input type="text" v-model="userform.x_userid" name="input.x_userid" id="x_userid" maxlength="200"  size="30" value>
        </p>

        <p>
          <label for="role" class="ibm-column-field-label">Role:<span class="ibm-required">*</span></label>
            <span>
             <select
            v-model="userform.role"
            name="role"
            id="role"
            onchange="changerole()"
            required="true"
          >
            <option value="VTServicesHR">HR</option>
            <option value="V-TServices_Head_of_HR">Head_of_HR</option>
            <option value="Telephony">Telephony</option>
            <option value="Site_Manager">Site_Manager</option>
            <option value="Service_SupplierMgr">Service_SupplierMgr</option>
            <option value="SAP_FP">SAP_FP</option>
            <option value="RDM">RDM</option>
            <option value="Organization_Admin">Organization_Admin</option>
            <option value="Mobile">Mobile</option>
            <option value="Medical_Services">Medical_Services</option>
            <option value="Manager">Manager</option>
            <option value="Internal_Apps">Internal_Apps</option>
            <option value="IT_Workplace">IT_Workplace</option>
            <option value="IAM_FP">IAM_FP</option>
            <option value="Delegated_Manager">Delegated_Manager</option>
            <option value="Data_Center">Data_Center</option>
            <option value="DPO">DPO</option>
            <option value="Communication">Communication</option>
            <option value="CAM">CAM</option>
            <option value="Business_Continuity">Business_Continuity</option>
            <option value="Badge">Badge</option>
            <option value="Administrator">Administrator</option>
            <option value="ATT_FocalPoint">ATT_FocalPoint</option>
          </select>
          </span>
        </p>

        <p>
          <label for="x_country" class="ibm-column-field-label">Focal Point of countries:</label>
            <select
              v-model="userform.x_country"
              name="x_country"
              id="x_country"
              onchange="setfocal()"
              multiple
            >
              <option value></option>
              <option value="Italy">Italy</option>
              <option value="Germany">Germany</option>
              <option value="Austria">Austria</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Poland">Poland</option>
              <option value="Hungary">Hungary</option>
              <option value="Other Countries">Other Countries</option>
            </select>
        </p>

 <p>
    <label for="x_emailnotification" class="ibm-column-field-label">Email notifications:</label>
    <span>
            <input type="hidden" name="$$x_emailnotification" value>
            <input
              type="radio"
              v-model="userform.x_emailnotification"
              name="x_emailnotification"
              id="x_emailnotification_1"
              class="ibm-styled"
              value="YES"
            >
            <label for="x_emailnotification_1">YES</label>
            <br>
            <input
              type="radio"
              v-model="userform.x_emailnotification"
              name="x_emailnotification"
              id="x_emailnotification_2"
              class="ibm-styled"
              value="NO"
            >
            <label for="x_emailnotification_2">NO</label>
            <br>
          </span>
</p>
<p>
    <label for="x_email" class="ibm-column-field-label">Email:<span class="ibm-required">*</span></label>
    <input type="text" v-model="userform.x_email" name="input.x_email" id="x_email" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_firstname" class="ibm-column-field-label">First Name:<span class="ibm-required">*</span></label>
    <input type="text" v-model="userform.x_firstname" name="input.x_firstname" id="x_firstname" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_lastname" class="ibm-column-field-label">Last Name:<span class="ibm-required">*</span></label>
    <input type="text" v-model="userform.x_lastname" name="input.x_lastname" id="x_lastname" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_phone" class="ibm-column-field-label">Phone number:</label>
    <input type="text" v-model="userform.x_phone" name="input.x_phone" id="x_phone" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_mobile" class="ibm-column-field-label">Mobile phone number:</label>
    <input type="text" v-model="userform.x_mobile" name="input.x_mobile" id="x_mobile" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_fax" class="ibm-column-field-label">Fax:</label>
    <input type="text" v-model="userform.x_fax" name="input.x_fax" id="x_fax" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_company" class="ibm-column-field-label">Company:</label>
    <input type="text" v-model="userform.x_company" name="input.x_company" id="x_company" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_department" class="ibm-column-field-label">Department:</label>
    <input type="text" v-model="userform.x_department" name="input.x_department" id="x_department" maxlength="200" size="30"
        value>
</p>
<p>
    <label for="x_function" class="ibm-column-field-label">Function:</label>
    <input type="text" v-model="userform.x_function" name="input.x_function" id="x_function" maxlength="200" size="30"
        value>
</p>

<p>
  <label for="Status" class="ibm-column-field-label">Status:</label>
  <input type="hidden" v-model="userform.Status" name="Status" id="Status" value="Active">
  <span id="Status-output">Active&nbsp;</span>
</p>

<p>
<label for="x_comment" class="ibm-column-field-label">Comments:</label>
  <span>
    <textarea v-model="userform.x_comment" name="x_comment" id="x_comment" rows="6" cols="38"></textarea>
  </span>
</p>

<p class="ibm-btn-row">
<input type="submit" @click="updateData()" value="提交" class="ibm-btn-pri ibm-btn-blue-50">
</p>

      
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</template>

<script>
export default {
  data() {
    return {
      userform: {
        boname: "",
        nexturl: "",
        x_docid: "",
        state: "",
        app: "",
        appFolder: "",
        basePath: "",
        x_focalpoint: "",
        x_notification: "",
        x_userid: "",
        role: "",
        x_country: [],
        x_emailnotification: "",
        x_emailnotification: "",
        x_email: "",
        x_firstname: "",
        x_lastname: "",
        x_phone: "",
        x_mobile: "",
        x_fax: "",
        x_company: "",
        x_department: "",
        x_function: "",
        Status: "Active",
        x_returnMode: "",
        x_allFilesName: "",
        fileCheck: "",
        x_comment: ""
      },
      newuserdocid: "info"
    };
  },
  name: "UserRPT",
  props: ["loginmsg"],
  methods: {
    createNewuser: function(params) {
      alert("start");
      alert("post data");
      alert("return res");
      alert("turn to rpt page");

      return false;

      //     this.$axios
      // .get('/im/API/searchUsers?country=cn&customer=IBM')
      // .then(response => (this.newuserdocid = response))
      // .catch(function (error) { // 请求失败处理
      //     console.log(error);
      // });
    },
    createNewUser(e) {
      console.log(e);
      console.log(this.formObj);
      console.log("赋值 Status 和 x_modified");
      this.$axios
        .post(this.APIroot+"/API/createNewDoc", this.userform)
        .then(response => {
          this.newuserdocid = response;
          this.$router.push({ name: "User" });
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
    },
    updateData() {
      this.userform.x_modified = new Date();
    }
  },
  created() {
    //this.formObj.city = "sz";  初始化
  }
};
</script>
<template>
  <article>
    <h3>createNewUser</h3>

    <form @submit.prevent="showData">

  <div class="ibm-container">
      <p>The fields indicated with an asterisk (*) are required to complete this transaction; other fields are optional. If you do not want to provide us with the required information, please use the back button on your browser to return to the previous page.</p></div>
    <input type="hidden" v-model="userform.boname" name="boname" id="boname" value="XUSERPROFILE">
    <input type="hidden" v-model="userform.nexturl" name="nexturl" id="nexturl" value="User">
    <input type="hidden" v-model="userform.x_docid" name="x_docid" id="x_docid" value="">
    <input type="hidden" v-model="userform.state" name="state" id="state" value="ACTIVE">
    <input type="hidden" v-model="userform.app" name="app" id="app" value="VTService">
    <input type="hidden" v-model="userform.appFolder" name="appFolder" id="appFolder" value="X0033">
    <input type="hidden" v-model="userform.basePath" name="basePath" id="basePath" value="/tools/wse/runtime/hspx/dev/protect">
    <div style="display:none">
      <p>
        <label for="x_focalpoint">Focal Point of countries:</label>
        <span>
          <input v-model="userform.x_focalpoint" name="x_focalpoint" id="x_focalpoint" value=""></span>
      </p>
      <p>
        <label for="x_notification">Email notifications:</label>
        <span>
          <input v-model="userform.x_notification" name="x_notification" id="x_notification" value=""></span>
      </p>
    </div>
    <p>
      <label for="x_userid">User ID:
        <span class="ibm-required">*</span></label>
      <span>
        <input v-model="userform.x_userid"  name="x_userid" size="40" required="true" id="x_userid" value=""></span>
    </p>
    <p>
      <label for="role">Role:
        <span class="ibm-required">*</span></label>
      <span class="ibm-input-group">
        <select v-model="userform.role" name="role" id="role" onchange="changerole()" required="true">
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
          <option value="ATT_FocalPoint">ATT_FocalPoint</option></select>
      </span>
    </p>
    <div id="focalpoint" style="display:none">
      <p>
        <label for="x_country">Focal Point of countries:</label>
        <span class="ibm-input-group">
          <select v-model="userform.x_country" name="x_country" id="x_country" onchange="setfocal()" multiple="">
            <option value=""></option>
            <option value="Italy">Italy</option>
            <option value="Germany">Germany</option>
            <option value="Austria">Austria</option>
            <option value="Czech Republic">Czech Republic</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Poland">Poland</option>
            <option value="Hungary">Hungary</option>
            <option value="Other Countries">Other Countries</option></select>
        </span>
      </p>
    </div>
    <p>
      <label for="x_emailnotification">Email notifications:
        <span class="ibm-required">*</span></label>
      <span class="ibm-input-group">
        <input type="hidden" name="$$x_emailnotification" value="">
        <input type="radio" v-model="userform.x_emailnotification" name="x_emailnotification" id="x_emailnotification_1" class="ibm-styled" value="YES">
        <label for="x_emailnotification_1">YES</label>
        <br>
        <input type="radio" v-model="userform.x_emailnotification" name="x_emailnotification" id="x_emailnotification_2" class="ibm-styled" value="NO">
        <label for="x_emailnotification_2">NO</label>
        <br></span>
    </p>
    <p>
      <label for="x_email">Email:
        <span class="ibm-required">*</span></label>
      <span>
        <input v-model="userform.x_email"  name="x_email" size="40" required="true" id="x_email" value=""></span>
    </p>
    <p>
      <label for="x_firstname">First Name:
        <span class="ibm-required">*</span></label>
      <span>
        <input v-model="userform.x_firstname"  name="x_firstname" size="40" required="true" id="x_firstname" value=""></span>
    </p>
    <p>
      <label for="x_lastname">Last Name:
        <span class="ibm-required">*</span></label>
      <span>
        <input v-model="userform.x_lastname"  name="x_lastname" size="40" required="true" id="x_lastname" value=""></span>
    </p>
    <p>
      <label for="x_phone">Phone number:</label>
      <span>
        <input v-model="userform.x_phone" name="x_phone" size="40" id="x_phone" value=""></span>
    </p>
    <p>
      <label for="x_mobile">Mobile phone number:</label>
      <span>
        <input v-model="userform.x_mobile" name="x_mobile" size="40" id="x_mobile" value=""></span>
    </p>
    <p>
      <label for="x_fax">Fax:</label>
      <span>
        <input v-model="userform.x_fax" name="x_fax" size="40" id="x_fax" value=""></span>
    </p>
    <p>
      <label for="x_company">Company:</label>
      <span>
        <input v-model="userform.x_company" name="x_company" size="40" id="x_company" value=""></span>
    </p>
    <p>
      <label for="x_department">Department:</label>
      <span>
        <input v-model="userform.x_department" name="x_department" size="40" id="x_department" value=""></span>
    </p>
    <p>
      <label for="x_function">Function:</label>
      <span>
        <input v-model="userform.x_function" name="x_function" size="40" id="x_function" value=""></span>
    </p>
    <p>
      <label for="Status">Status:</label>
      <input type="hidden" v-model="userform.Status" name="Status" id="Status" value="Active">
      <span id="Status-output">Active&nbsp;</span></p>
    <input type="hidden" v-model="userform.x_returnMode" name="x_returnMode" id="x_returnMode" value="xinclude">
    <input type="hidden" v-model="userform.x_allFilesName" name="x_allFilesName" id="x_allFilesName" value="">
    <input type="hidden" v-model="userform.fileCheck" name="fileCheck" id="fileCheck" value="true">
    <p>
      <label for="x_comment">Comments:</label>
      <span>
        <textarea v-model="userform.x_comment" name="x_comment" id="x_comment" rows="6" cols="38"></textarea>
      </span>
    </p>


      
      <input type="submit" value="提交">
    </form>

    <p>newuserdocid : {{newuserdocid}}</p>
  </article>
</template>

<script>
export default {
  data() {
    return {
      userform: {
 boname :"",
 nexturl :"",
 x_docid :"",
 state :"",
 app :"",
 appFolder :"",
 basePath :"",
 x_focalpoint :"",
 x_notification :"",
 x_userid :"",
 role :"",
 x_country :[],
 x_emailnotification :"",
 x_emailnotification :"",
 x_email :"",
 x_firstname :"",
 x_lastname :"",
 x_phone :"",
 x_mobile :"",
 x_fax :"",
 x_company :"",
 x_department :"",
 x_function :"",
 Status :"",
 x_returnMode :"",
 x_allFilesName :"",
 fileCheck :"",
 x_comment :""
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
    showData(e) {
      console.log(e);
      console.log(this.formObj);
                this.$axios
      .post('/im/API/createNewDoc',this.userform)
      .then(response => (this.newuserdocid = response))
      .catch(function (error) { // 请求失败处理
          console.log(error);
      });
    }
  },
  created() {
    //this.formObj.city = "sz";  初始化
  }
};
</script>
<template>
   <header>
    <a href="#/">homepage</a> | <div>CurrentUser is : {{currentUser}}</div> | 
   <div v-bind:class="loginStyle"><a href="/route/login">login</a></div>
   <div v-bind:class="logoutStyle"><a href="/route/logout">logout</a></div>
   </header>
</template>

<script>
    export default {
          data() {
                return {
                msg: "Welcome to Your Vue.js App",
                mystle:"showlogin"
                };
            },
        name: "VTSheader",
        props:['loginmsg','currentUser','isLogin'],
        computed:{
        loginStyle: function () {
        return this.isLogin?"hiddelogin":"showlogin"
        },
        logoutStyle: function () {
        return this.isLogin?"showlogin":"hiddelogin"
        }
        }
    }
</script>

<style>
.showlogin {
display: inline;
color: red;
}

.hiddelogin {
display: none;
}
</style>
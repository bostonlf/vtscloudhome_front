<template>
    <div>
        
        color1111@{{loginmsg}}@@@{{bbbb}}

<!-- 这里不能用 div -->
<!-- <p id="mycolorbox" v-bind:style="{backgroundColor:'rgb('+R+','+G+','+fathercolor+')'}"></p> -->
this is fathercolor :{{fathercolor}}
<br/>
<input type="text" v-model="fathercolor">
    </div>
</template>


<style>
#mycolorbox{
    height: 100px;
    width: 100px;
    background-color: red;
}
</style>

<script>
    export default {
        name: "color",
          data() {
    return {
      R:100,
      G:200,
      B:100
    }
  },
        props:['loginmsg','fathercolor']
    }
</script>
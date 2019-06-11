<template>
   <article>
      <h3>Pleaselogin</h3>
<p><a href="/login">Log in</a></p>

build之后这个link可以点击，直接跳的w3用户登陆（待测试）
<br>
登陆之后的会跳页面带上路由，把之前的页面存入cookie或者 sessionStorage 

   </article>
</template>

<script>
    export default {
        name: "VTSbody",
        props:['loginmsg']
    }
</script>
<template>
   <article>
       
       
       
       ExistingUser

<br>

 <!-- <p>新闻ID：{{ $route.ExistingUser.newsId}}</p>

        <p>新闻标题：{{ $route.ExistingUser.newsTitle}}</p> -->

@@{{$route.params.username}}@@
   </article>
</template>

<script>
    export default {
        name: "VTSbody",
        props:['loginmsg']
    }
</script>
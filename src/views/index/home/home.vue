<template>
  <div class="home">
     <Head/>
     <router-view/>
  </div>
</template>

<script>
import Head from '@/components/header.vue'
export default {
 components:{
   Head
 },
 provide:{
   name:"小明"
 }
 
}
</script>

<style scopend>
    .home>div{
      flex:1;
      width:100%;
      background: #f4f4f4;
    }
</style>
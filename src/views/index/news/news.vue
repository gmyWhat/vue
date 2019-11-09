<template>
  <div>
      消息
  </div>
</template>

<script>
export default {
  created(){
   this.$bus.$on("changeIndex",(ind)=>{
      console.log(ind)
   })
 }
}
</script>

<style>

</style>
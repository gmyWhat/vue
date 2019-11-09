<template>
  <div>
      关注
  </div>
</template>

<script>
import '@/mock/mock'
export default {
    created(){
      console.log(this.$http)
      console.log(this.name)
    },
    inject:['name']
}
</script>

<style>

</style>
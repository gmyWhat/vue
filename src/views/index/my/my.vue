<template>
  <div>
    <span @click="hanldmy">我的</span>
  </div>
</template>

<script>
export default {
    methods:{
      hanldmy(){
        this.$bus.$emit("changeIndex",1)
      }
    }
}
</script>

<style>

</style>
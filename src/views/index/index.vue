<template>
  <div class="index">
     <router-view/>
     <Foot/>
  </div>
</template>

<script>
import Foot from '@/components/foot.vue'
export default {
  components:{
    Foot
  }
}
</script>

<style scopend>
    .index>div{
      flex:1;
      width:100%;
      display: flex;
      flex-direction: column;
 }
</style>
<template>
  <ol class="ol">
      <router-link v-for="(item,index) in head" :key="index" tag="li" :to="item.path" @click.native="hanldtag(index)" :class="ind==index?'active':''">{{item.txt}}</router-link>
  </ol>
</template>

<script>
export default {
   data(){
       return {
           head:[
               {
                   path:'/index/home/keep',
                   txt:"关注"
               },
                {
                   path:'/index/home/cell',
                   txt:"热销"
               },
                {
                   path:'/index/home/recom',
                   txt:"推荐"
               }
           ],
           ind:0
       }
   },
   methods:{
       hanldtag(index){
            this.ind=index
       }
   }
}
</script>

<style scopend>
     .ol{
         width:100%;
         height:44px;
         border-bottom:2px solid #ccc;
         display: flex;
         justify-content: space-between;
         align-items: center;
     }
      .ol li{
          flex:1;
          text-align: center;
          line-height: 40px;
      }
      .ol li.active{
           border-bottom:2px solid #f40;
      }
</style>
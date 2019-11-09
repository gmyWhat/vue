<template>

 <ul class="ul">
    <router-link v-for="(item,index) in foot" :key="index" :to="item.path" tag="li" @click.native="hanldtab(index)" :class="ind==index?'active':''">{{item.txt}}</router-link>
  </ul>

  
</template>

<script>
export default {
   data(){
       return {
           foot:[
               {
                   path:"/index/home",
                   txt:"首页"
               },
               {
                   path:"/index/idea",
                   txt:"想法"
               },
               {
                   path:"/index/college",
                   txt:"大学"
               },
               {
                   path:"/index/news",
                   txt:"想法"
               },
               {
                   path:"/index/my",
                   txt:"我的"
               }

           ],
           ind:0
       }
       
   },
   methods:{
      hanldtab(index){
         this.ind=index 
      }
   }
}
</script>

<style scopend>
   .ul{
       width:100%;
       height:50px;
       display: flex;
       align-items: center;
       justify-content: space-between;
       border-top:2px solid #ccc;
   }
   .ul li{
       flex:1;
       text-align: center;
   }
   .ul li.active{
       color:#f40;
   }
</style>
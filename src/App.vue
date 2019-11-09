<template>
  <div id="app">
    <keep-alive>
         <router-view/>
    </keep-alive>
   
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html,body,#app{
  width:100%;
  height:100%;

}


#app>div{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>

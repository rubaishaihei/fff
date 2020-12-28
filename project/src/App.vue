<template>
  <div id="app">
    
     <router-view></router-view>   
     <div>Copyright © 2004 - 2020 当当网. All Rights Reserved京ICP证041189号|出版物经营许可证 新出发京批字第直0673号</div>
  
   
 
  </div>
</template>

<script>
import  sy from './components/sy'

import Tou from './components/tou.vue'
import Ct from './components/ct.vue'
import Ss from './components/ss.vue'
import Splb from './components/splb.vue'
export default {
  components: {
    sy,
    Tou,
    Ct,
    Ss,
    Splb
  },
  name: 'App',
   data () {
    return {
       is:true
  }
   },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
  width: 1200px;
}

</style>

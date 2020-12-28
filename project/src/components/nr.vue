<template>
  <div id="nr">
    
   
  <Tou ></Tou>
  <Ss/>
   
  <div >
   <img src="../img/h.jpg"> 
    <sy />
    <Ct/>
    <Splb/>
     <!-- <Todo v-for="(todo, index) in todos" :todo="todo" :key="index"
        @delete-todo="deleteTodo"
        ></Todo>  -->
    </div>
  </div>
</template>
<script>
import  sy from '../components/sy'
import Tou from '../components/tou.vue'
import Ct from '../components/ct.vue'
import Ss from '../components/ss.vue'
import Splb from '../components/splb.vue'
export default {
  components: {
    sy,
    Tou,
    Ct,
    Ss,
    Splb
  },
  name: 'nr',
   data () {
    return {
     
    };
  }
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

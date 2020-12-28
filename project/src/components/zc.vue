<template>
  <div class="dlzc">
         <Tou ></Tou>
   <Ss/>
      
      <div class="div1"  > 
          <div class="div2">
              <h5>注册</h5>
           
              用户名:<input type="text"  placeholder="请输入用户名"  >
              <br>
              <br>
              密 码: &nbsp;<input type="password" placeholder="请输入密码" v-model="password" />
              <br>
              <br>
              <button @click="zc">{{this.$route.params.userId}}注册</button>
              {{this.$route.params.userId}}
              <router-link :to="{ name: 'dlzc', params: { userId: 1111,lx:'登录'}}">登录</router-link>
          </div>
      </div>
   
  </div>
</template>

<script>
import books from '../josn/text.json'
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
  name: 'zc',
   data () {
    return {
      is1:true

    }
  },
   mounted: function()  {
     
    },

  methods:{
    routerTo(){
      this.$router.push({ name: 'dlzc', params: { userId: 123 }});
    }
  }

   
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1{
    background: url("../img/dl.jpg");
    width: 1200px;
    height: 500px;
}
.div2{
   width: 300px;
   height: 240px;
  background: rgb(245, 237, 237);
color:#0e0d0d;


position: relative;
padding:5px;
text-align:center;

right: -700px;
top: 45px;

}
</style>

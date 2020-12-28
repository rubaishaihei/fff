<template>
  <div class="dlzc">
    
      <Tou ></Tou>
   <Ss/>
      <div class="div1"  v-show="is1"> 
          <div class="div2">
              <h5>登录</h5>
           <span>{{this.ts }}{{this.ss}}</span>
           <br>
           
              用户名:<input type="text"  placeholder="请输入用户名"  v-model="name">
              <br>
              <br>

              密 码: &nbsp;<input type="password" placeholder="请输入密码" v-model="password" />
              <br>
              <br>
              <button @click="dl">登录</button>
            
              <router-link :to="{ name: 'zc', params: { userId: 1111}}">注册</router-link>
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
  name: 'dlzc',
   data () {
    return {
      is1:true,
      name:"",
      password:"",
      user:books.user,
      ts:"",
      ss:"",
      user1:[
        {
          name:"fu",
          password:"123",
          gwc:[]
        }
      ],
      user2:{
         name:"123",
          password:"",
          gwc:[]
      },
      user3:{
         name:"",
          password:"",
          gwc:[]
      }

    }
   },
  
   mounted: function()  {
     localStorage.setItem('users', JSON.stringify(this.user1));
    
        if(localStorage.length>0){
          localStorage.setItem('users', JSON.stringify(this.user1));

        }
        else {
          localStorage.setItem('users', JSON.stringify(this.user2));
        }
   },

  methods:{
    dl(){
      
      
      
     
       var i=0;
       for(;i<this.user.length;i++)
       {
         this.ts=this.user[i].name
         if(this.user[i].name===this.name && this.user[i].password===this.password)
         {
           this.user3.name=this.name;
           this.user3.password=this.password;
          localStorage.setItem('user', JSON.stringify(this.user3));
           

          this.$router.push({ name: 'nr', params: { name: this.user3.name }});
         }
       }
        this.ts="用户名，密码错误"


     
     
    },
    
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

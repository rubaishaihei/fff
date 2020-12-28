<template>
  <div class="tou">
    <el-container style=" border: 0px solid #eee">
        <el-header style="heigh;30px;">
            <table style=" width: 85%;">
                <tr>
                    <td  style=" width: 70%;">  

                    </td>
                    <td>
                       
                       <span v-show="!this.is"> 欢迎用户{{this.user2.name}} </span> 
                        <router-link to="/" >首页</router-link>
                       
                          <router-link v-show="this.is" :to="{ name: 'dlzc', params: { userId: 1111,lx:'登录'}}">登录</router-link>
                        
                    </td>
                    <td>
                      
                        <router-link :to="{ name: 'dlzc', params: { userId: 1111,lx:'注册'}}">注册</router-link>
                    </td>
                    <td>
                      <a href="" @click="zx">
                        注销
                      </a>
                     
                    </td>
                    <td>
                         <el-link :underline="false" ref="">购物车</el-link>
                    </td>
                </tr>
            </table>
        </el-header>
       
        <!-- <el-aside style="width:100px; background-color:#67C23A;">
            
        </el-aside>
        <el-main style="background-color:#E6A23C">
             <el-aside style="width:100px; background-color:#67C23A;">
            
        </el-aside> -->
            
        
  
</el-container>
  </div>
</template>

<script>
export default {
  name: 'tou',
  data(){
    return{
      is:true,
      is1:true,
      name:"",
      user2:{
         name:"1",
          password:"",
          gwc:[]

      }
    }
  },
  

    mounted: function()  {
     
        // if(localStorage.length>0){
        //   localStorage.setItem('users', JSON.stringify(this.user2));

        // }
        // else{
        //   localStorage.setItem('users', JSON.stringify(this.user2));
        // }
        // this.user2=JSON.parse(localStorage.getItem('1'));
        // this.ss=JSON.parse(localStorage.getItem('1'))
      
         
       if(JSON.parse(localStorage.getItem('user'))==null)
       {
          
         this.is=true
         
       }
       else if(JSON.parse(localStorage.getItem('user'))!=null){
          this.user2=JSON.parse(localStorage.getItem('user'));
           this.is=false
       }
       
        
       
    //  if(JSON.parse(localStorage.getItem('users')).length==0)
    //  {
    //    user2=user1;
    //    localStorage.setItem('users', JSON.stringify(this.user1));


    //  }

   },
    methods:{
    zx(){
     
       
       if(JSON.parse(localStorage.getItem('user'))!=null)
       {
         this.is=true

          localStorage.removeItem('user');
           localStorage.clear();

       }
     
     
     

     
     
    }
  }

   
  };
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;


  }
  .tou{
    padding-bottom: 5px;
  }
</style>

<template>
  <div id="ct">
      <table>
          <tr>
              <td class="td1">
                   <img src="../img/ss3.png" alt="">
              </td>
              <td>
                  
              </td>
              <td>
             
                <table>
                    <tr>
                      <td class="td2">
                          <input type="text">
                  <el-button type="primary" icon="el-icon-search">搜索</el-button>
                      </td>
                      <td>
                         
                        <el-button type="danger" @click="gw"><i class="el-icon-shopping-cart-full" >购物车</i></el-button>
                      </td>
                  </tr>
                  <tr>
                      <td >
                        <span>热搜:  </span>
                        <el-link href="" target="_blank">安奈儿 </el-link>
                        <el-link href="" target="_blank">欢乐英语阅读 </el-link>
                        <el-link href="" target="_blank">安踏 </el-link>
                        <el-link href="" target="_blank">良品铺子 </el-link>
                        <el-link href="" target="_blank">秒杀1元抢 </el-link>
                          
                      </td>
                      <td>
                          <el-link href="" target="_blank"> 我的订单 </el-link>
                      </td>
                  </tr>

                </table>

                       
                  
                 
                 
              </td>
             
          </tr>
      </table>
     <hr>
   
    
    
  </div>
</template>

<script>

export default {
  
  name: 'ss',
   data () {
    return {
        bh:0,
         

     
  }
   },
   methods:{
    gw(){
     
       
       if(JSON.parse(localStorage.getItem('user'))!=null)
       {
           this.$router.push({ name: 'gwc', params: { name: "s" }});
        

       }
       else if(JSON.parse(localStorage.getItem('user'))==null)
       {
            this.$router.push({ name: 'dlzc', params: { name: "s" }});

       }
     

    }
  }
   

  

}
</script>
<style scoped>
hr{
   
   background-color:red;
   height: 3px;
   border: none
}
span{
    color: rgb(158, 8, 8);
    height: 50px;
}
input{
    width: 400px;
    height: 35px;
    
    border:2px solid #409EFF
}
td{
    text-align:left;
}
a{
    font-size: 15px;
    text-align:right;
    color: #000;
    text-decoration:none;
}
.td1{
    width: 400px;
}
.td2{
    width:550px ;


}
.td3{
    color:#909399;
}
.el-link{
    text-decoration:none;
}
.tr1{
    height: 50px;
}

</style>



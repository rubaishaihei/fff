<template>
  <div id="zhu">
    <table>
        <tr>
            <td class="td1" ><img src="../img/tb1.png" alt=""> </td>
            <td class="td2"> 新书热卖榜</td>
        </tr>
        
           
            
                
           
        
        <tr>
            <td></td>
            <td class="td3">
                
                <el-link type="primary">爆品童书，3.9折封顶</el-link>


            </td>
        </tr>
        <tr>
            <td></td>
            <td class="td3" >
                 <el-link type="primary"> 悦小说品文学，5折封顶</el-link>
              
               
                 

            </td>
        </tr>
        <tr>
            <td></td>
            <td class="td3">
                 <el-link type="primary"> 传统文化，哲理人生，5折封顶</el-link>
               
               

            </td>
        </tr>
    </table>
   
    
     <!-- <Todo v-for="(todo, index) in todos" :todo="todo" :key="index"
        @delete-todo="deleteTodo"
        ></Todo>  -->
  </div>
</template>

<script>

export default {
  
  name: 'zmd',
   data () {
    return {
        bh:0,
         

     
  }
   }

  

}
</script>
<style scoped>
table{
    width: 100%;
}
th {
    align-content: center;
    text-align: center;
    font-size: 30px;
}
.div1{
    text-align:center
}
.td1{
    width: 20%;
}
.td2{
    text-align:center;
}
.td3{
    text-align: left;
}

</style>



<template>
  <div id="ct">
   <table>
       <tr>
           <td><a href=""> 12.12 年终狂欢</a></td>
       </tr>
       <tr>
           <td>
               <table>
                   <tr>
                       <td>
                           <table>
                               <tr>
                                   <td>
                                      <img src="../img/tu1.jpg" alt="">  
                                   </td>
                                   <td>
                                       <img src="../img/tu1.jpg" alt="">
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                        <img src="../img/tu3.jpg" alt="">
                                   </td>
                                   <td>
                                        <img src="../img/tu4.jpg" alt="">

                                   </td>
                               </tr>
                           </table>

                       </td>
                       <td>
                            <img src="../img/tu5.jpg" alt="">

                       </td>
                       <td>
                           <table>
                               <tr>
                                   <td>
                                      <img src="../img/tu6.jpg" alt="">  
                                   </td>
                                   <td>
                                       <img src="../img/tu7.jpg" alt="">
                                   </td>
                               </tr>
                               <tr>
                                   <td>
                                        <img src="../img/tu8.jpg" alt="">
                                   </td>
                                   <td>
                                        <img src="../img/tu9.jpg" alt="">

                                   </td>
                               </tr>
                           </table>


                       </td>
                   </tr>
               </table>

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
  
  name: 'ct',
   data () {
    return {
        bh:0,
         

     
  }
   }

  

}
</script>
<style scoped>
td{
    text-align:left;
}
a{
    font-size: 30px;
    text-align:right;
    color: #000;
    text-decoration:none;
    
}
</style>



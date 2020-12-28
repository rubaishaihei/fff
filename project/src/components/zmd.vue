<template>
  <div id="zmd">
    <el-carousel :interval="4000" height="315px" arrow="always">
      <el-carousel-item v-for="item in imagesBox" :key="item.id" >
        <img :src="item.idView" class="image">
      </el-carousel-item>
    </el-carousel>
   
    
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
         imagesBox:[{id:0,idView:require("../img/a1.jpg")},
          {id:1,idView:require("../img/a2.jpg")},
          {id:2,idView:require("../img/a3.jpg")},
          {id:3,idView:require("../img/a4.jpg")},
          ],

     
  }
   }

  

}
</script>
<style scoped>
 
.homePage /deep/ .el-carousel__item {
  
  background-color: #5d7ca0;
  z-index: 2;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    z-index: 2;
  }
  #zmd{
    z-index: 2;
  }
</style>



<template>
  <div id="splb"   >
    <div v-for="(fl,index) in lj"  :key="index"  class="div1">
          <div >
            <table class="table1"  >
              <tr>
                <td >
                   <router-link :to="{ name: 'xq', params: { bookId: index}}"> <img   :src="lj[index]" class="image"></router-link>
                </td>
              </tr>
                <tr>
                <td class="td1">   
                   <router-link :to="{ name: 'xq', params: { bookId: index}}">{{books[index].name}}</router-link>
                </td>
              </tr>
                <tr>
                <td class="td2">
                   ¥{{books[index].jg}}
                  
                </td>
              </tr>
            </table>
            </div>
            
        
       <!-- <table class="table1" >
              <tr>
                <td>
                  
                    <router-link :to="{ name: 'xq', params: { bookId: index}}"> <img   :src="lj[index]" class="image"></router-link>

                </td>
              </tr>
                <tr>
                <td class="td1">
                 <router-link :to="{ name: 'xq', params: { bookId: index}}">{{books[index].name}}</router-link>
                  
                </td>
              </tr>
                <tr>
               <td class="td2">
                  ¥{{books[index].jg}}
                  
                </td>
                
                
              </tr>
              </table> -->

    </div>
     
      
  </div>
</template>

<script>
import books from '../josn/text.json'
export default {
  
  name: 'splb',
  //  methods:{
  //   routerTo(index){
  //     this.$router.push({ name: 'xq', params: { userId: index*5 }});
  //   }
  // },
   data () {
    return {
        lj:[],
        books:books.book

        
         

     
  }
   },

    mounted: function()  {
       var i=1;
      // var j="../img/"+i+"-1.jpg"
       for(;i<=40;i++)
       {
          this.lj.push(require("../img/"+i+"-1.jpg")); 
       }
      
    },

  

}
</script>
<style scoped>
td{
 max-width: 200px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.td1{
  font-size: 12px;
}
.td2{
  color: rgb(230, 15, 15);

}
.div1{
  width: 20%;
   display: flex;
  float:right;
}
.table1{
  width: 200px;
}

</style>



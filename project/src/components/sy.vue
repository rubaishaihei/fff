<template>
  <div class="d1" id="sy">
    
      
        <div class="dlc">
           <Zhu/>
     
        </div>
        <div class="cbk">
        
        
            
             <fllan :fls="fls"/>
        
        
         
    </div> 
           
  

        
       <div class="lbt">
         <zmd/>
      
       </div>
        
  

  </div>
</template>


<script>
import zmd from './zmd.vue'

import Fllan from './fllan.vue';
import Zhu from './zhu.vue'

export default {
  components: { zmd, Fllan,Zhu },

  name: 'sy',
  props: ['fls'],
 
   data () {
        return {
             
      
            isEditing: false,
          
            
          
         
        };
    },
    methods:{
      enter(){
        this.isEditing = true;
        
      },
      leave(){
        this.isEditing = false;
        
      }
    }

    
 
  }  


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.xf{
    background: #1a59b7;
color:#ffffff;
overflow: hidden;
z-index: 9999;
position: fixed;
padding:5px;
text-align:center;
width: 175px;
height: 22px;

right: 10px;
top: 10px;
}

  
 
.cbk{
   width: 20%;
   z-index: 2;
    display: flex;
    
    
}
.lbt{
    width: 60%;
    z-index: 2;
}
.dlc
{
    width: 20%;
}
.d1{
    display: flex;
    z-index: 2;
}
.cs{
    width: 1400px;
    height: 20px;
    background-color: aqua;
    z-index: 0;
}
  #as{
      width: 100%;
  }
</style>
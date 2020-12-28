<template>
  <div class="xq">
    <div>
      <Tou/>
      <Ss/>
    </div>
    <img src="../img/xq-1.jpg" alt="">
    <div>
          <div  class="div1">
              <table>
                  <tr>
                      <td class="td1">

                      </td>
                      <td class="td2">

                      </td>
                      <td class="td3">
                        <h4>书名</h4>
                      </td>
                      <td class="td4">
                          <h4>价格</h4>
                      </td>
                  </tr>
                  <tr  v-for="(fl,index) in s3"  :key="index" >
                      <td class="td1" @click="zj()">
                          <input type="checkbox" value=index name="a" > 
                      </td>
                      <td class="td2">
                        
                         <router-link :to="{ name: 'xq', params: { bookId: s3[index]}}">  <img   :src="lj[index]" class="image"></router-link>
                      </td>
                      <td class="td3">
                           <router-link :to="{ name: 'xq', params: { bookId: s3[index]}}">    {{books[s3[index]].name}}</router-link>
                      
                      </td>
                      <td class="td4">
                          
                           ￥{{books[s3[index]].jg}}
                      </td>

                  </tr>
                  <tr>
                      <td class="td5">
                          
                      </td>
                      <td>
                        
                      </td>
                      <td>

                      </td>
                      <td>
                           总价:￥{{zj()}} <br> <button  class="b1">购买</button>
                      </td>
                  </tr>
              </table>
            
              

          </div>

    </div>
  
   
     

    
   
    <!-- <img   :src="src1" class="image"> -->
  </div>
</template>

<script>
import books from '../josn/text.json'
import PicZoom from "vue-piczoom"
import Tou from '../components/tou.vue'
import Ss from '../components/ss.vue'

export default {
  
  
  name: 'gwc',
  components:{
          PicZoom,
          Tou,
          Ss
        },
  //  methods:{
  //   routerTo(index){
  //     this.$router.push({ name: 'xq', params: { userId: index*5 }});
  //   }
  // },
   data () {
    return {
        lj:[],
        books:books.book,
        b:0,
        s:0,
        s2:0,
        s3:[],
         imgurl:[],
         user2:{
         name:"",
          password:"",
          gwc:[]

      }
               
            }



        
         

     
  },
   

    mounted: function()  {
        this.s=this.$route.params.bookId;
        this.user2=JSON.parse(localStorage.getItem('user'));
        this.s3=this.user2.gwc
        var i=0;
        var i1;
         for(;i<=this.s3.length;i++)
       {
           i1=this.s3[i]+1;
          this.lj.push(require("../img/"+i1+"-1.jpg")); 
       }
        this.s2=this.s+1;
        this.imgurl=require("../img/"+this.s2+"-1.jpg");

      
      // var j="../img/"+i+"-1.jpg"
      
      
    },
     methods:{
    gw(){
       if(JSON.parse(localStorage.getItem('user'))!=null)
       {
         this.user2=JSON.parse(localStorage.getItem('user'));
        
         this.user2.gwc.push(this.s);
         localStorage.setItem('user', JSON.stringify(this.user2));
        //  localStorage.setItem('user', JSON.stringify(this.user2));
       }
       else if(JSON.parse(localStorage.getItem('user'))==null)
       {
            this.$router.push({ name: 'dlzc', params: { name: "s" }});

       }
     

    },
    ja1()
    {
      this.s3++;
    },
    ja2(){
      if(this.s3>=1)
      {
        this.s3--;
      }
    },
    zj (){
            var checkboxs=document.getElementsByName("a");
            this.b=0;
            for(var i=0;i<checkboxs.length;i++){
              if(checkboxs[i].checked){
                  
                 this.b=this.books[this.s3[i]].jg+this.b;
			  }
		                }
            return this.b;
       },
  }
   

  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
     background-color:#f43256 ;
     height: 45px;
     width: 100px;
     color: rgb(255, 255, 255);
     font-size: 15px;
     border-bottom-width: 0px;
     border-bottom-color:#f43256 ;
     border-color:#f43256  ;
}

.div1{
  
  width: 800px;
  text-align: left;
  
  
}
.div2{
  display: flex;

}
.td1{
    width: 10%;

}
.td2{
     width: 30%;

}
.td3{
     width: 50%;

}
.td4{
     width: 10%;

}





  

</style>

<template>
  <div class="xq">
    <div>
      <Tou/>
      <Ss/>
    </div>
    <img src="../img/xq-1.jpg" alt="">
  
    <!-- {{this.$route.params.bookId}}
     <img   :src="lj[s]" class="image"> -->
     <div class="div2">
    <div>
       <div class="box">
          <pic-zoom :url="imgurl" :scale="3"></pic-zoom>
      </div>
      <div class="list"> 
      <img   :src="imgurl" class="image">
      </div>
    </div>
     
     <div class="div1">
      <table>
        <tr>
          <th>
            <img src="../img/xq-2.png" alt="">
            {{this.user2.gwc[0]}}
           {{books[s].name}}
           <br>
          </th>
        </tr>
        <tr>
          <td>
            <br>
            作者：{{books[s].zz}}
            <br>
          </td>
        </tr>
        <tr>
          <td>
            <br>
            出版社：{{books[s].cbs}}
            <br>
          </td>
        </tr>
        <tr>
          <br>
          当当价：
          <br>
          ¥{{books[s].jg}}
          <br>
        </tr>
        <tr>
          <td>
            <br>
            详情：
            <br>
            {{books[s].jj}}
            <br>
            <br>
          </td>
        </tr>
        <tr>
          <td>
            <br>
            分类：{{books[s].fl}}
            <br>
          </td>
        </tr>
        <tr>
          <td>
             <button @click="ja1">+</button>
         <input type="text " v-model="s3">
         <button @click="ja2">-</button>
        <button @click="gw()" class="b1">🛒加入购物车</button>
        

          </td>
         <!-- <button @click="ja1">+</button>
         <input type="text " v-model="s3">
         <button @click="ja2">-</button>
         <button @click="gw" class="b1">🛒加入购物车</button> -->
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
import Ct from '../components/ct.vue'
import Ss from '../components/ss.vue'
import Splb from '../components/splb.vue'
export default {
  
  
  name: 'xq',
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
        
        s:0,
        s2:0,
        s3:1,
         imgurl:"",
         user2:{
         name:"",
          password:"",
          gwc:[]

      }
               
            }



        
         

     
  },
   

    mounted: function()  {
        this.s=this.$route.params.bookId;
        this.s2=this.s+1;
        this.imgurl=require("../img/"+this.s2+"-1.jpg");

       var i=1;
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
    }
  }
   

  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
  width: 20px;
}
span
{
  background-color: red;
}

th{
  font-size: 20px;
}
.b1{
  border-block-end-width: 0px;
  height: 40px;
  width: 180px;
  background-color: rgb(209, 23, 23);
}
.div1{
  
  width: 600px;
  text-align: left;
  
  
}
.div2{
  display: flex;

}


.box{
  width: 400px;
  height: 400px;
}
.list{
  width: 400px;
  height: 130px;
}
  .list ul{
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
  .list ul li{
    width:120px;
    height: 90px;
    background-color: white;
    margin-top: 15px;
  }
  .list ul li img{
    width: 120px;
    height: 90px;
  }

</style>

<template>
  <div class="flan">
  
   <table class="table1" id="table">
               <tr v-for="(fl,index) in fls" :key="index"  @mouseenter="enter(index)" @mouseleave="leave(index)"   >
                 <td class="td1" :id="'a'+index">
                   {{fl.fl1}}
                 </td>
               </tr>
             </table>
    
    <div class="xf"  v-show="isEditing"> 
      <table class="table2">
        <tr v-for="(sz1,index1) in sz" :key="index1" >
          <td class="td2">  <el-link type="primary">{{sz[index1]}}</el-link></td>
        </tr>
        <tr>
        </tr>
      </table>
  </div>

  </div>
  
</template>

<script>
import { PopupManager } from 'element-ui/lib/utils/popup'
export default {
   
  name: 'flan',
 
  data () {
        return {
             sz:[],
             s:PopupManager.nextZIndex(),
             fls: [
        {
        fl1:"童话",
        fl2:'凯迪克奖获奖作品,纽伯瑞奖获奖作品,高铁的秘密,读专“鼠”于你的好绘本,好想去这样那样的国家,童心陶醉的幻想世界,新宝驾到模范爸爸是什么样 '
      },
      {
        fl1:"文艺",
        fl2:'奥斯卡：原著比电影更精彩,人民日报2020推荐书单,2019年豆瓣年度书单,易烊千玺荐书洞察人性！,东野圭吾新书,教育部推荐必读书目'

      },
       {
        fl1:"社科",
        fl2:'历史类人气品牌 ,“甲骨文丛书”书单,历史类精品“汗青堂丛书”书单,译文纪实系列书单,中信“新思文库”品牌书单,汉译世界学术名著丛书（精装典藏版）'
      },
      {
        fl1:"经管励志",
        fl2:'读懂2020中国经济书单,比尔·盖茨推荐今夏必读5本书,抓住股市投资机会,瞬间提高个人修养的10部经典,月薪不足3W你要读的书'

      },
       {
        fl1:"生活",
        fl2:'凯迪克奖获奖作品,纽伯瑞奖获奖作品,高铁的秘密,读专“鼠”于你的好绘本,好想去这样那样的国家,童心陶醉的幻想世界,新宝驾到模范爸爸是什么样 '
      },
       {
        fl1:"科技",
        fl2:'凯迪克奖获奖作品,纽伯瑞奖获奖作品,高铁的秘密,读专“鼠”于你的好绘本,好想去这样那样的国家,童心陶醉的幻想世界,新宝驾到模范爸爸是什么样 '
      },
       {
        fl1:"教育",
        fl2:'凯迪克奖获奖作品,纽伯瑞奖获奖作品,高铁的秘密,读专“鼠”于你的好绘本,好想去这样那样的国家,童心陶醉的幻想世界,新宝驾到模范爸爸是什么样 '
      },
      ],
      
   
            
      
          isEditing: false,
          active: "",
          
            
          
         
        };
    },
    methods:{
      enter(index){
        this.sz=this.fls[index].fl2.split(',');
        var dz='a'+index
    document.getElementById(dz).style.color="red"

        this.isEditing = true;
        
        
      },
      leave(index){

         this.sz=[];
          var dz='a'+index
    

         document.getElementById(dz).style.color="black"
         
        this.isEditing = false;
        
        
      },
      
     
    
    },
    
  };
 
   

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.table1{
  border-right-width: 0px;
  width: 100%;
  border: rgb(15, 13, 10) 1px solid;
  height: 315px;
   background-color: rgb(183, 240, 240);
}
.table{
 width: 240px;
}
.tr1{
  width: 100%;

 
 
}
.td1{
  width: 100%;
  height: 42px;
  border: none;
   padding: 0px;
}
.td2{
  width: 230px;
}
.flan{
  width: 100%;
}
  .xf{
    background: #5c5c5c;
color:#ffffff;
overflow: hidden;
z-index: s+1;
position: fixed;
padding:5px;
text-align:center;

right: 1308px;
top: 245px;
}

</style>

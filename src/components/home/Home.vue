<template>
  <div class="hello">

    <el-button @click="searchSwitch=!searchSwitch">时间</el-button>
    <div v-if="searchSwitch">
      <input  class="input-box" v-model="searchKeyWords" placeholder="search" @keyup.enter="search"/>
      <div class="search-svg-box">
        <div 
          v-for="(searchSvg,index) in searchSvgs" 
          :key="index" 
          :data-index="searchSvg.name"
          :class="{searchSvgEach:true,isActive:searchSvg.name==searchType}" 
          @click.prevent="changeSearchType(searchSvg.name)"
        >
          <svg-icon :icon-class="searchSvg.name" className="search-svg"></svg-icon>
        </div>
      </div>
    </div>

    <el-carousel v-else height="343px" indicator-position="outside" arrow="never" :autoplay='false'>
      <el-carousel-item >
        <el-row >
          <el-col v-for="(svg,index) in collections" :key="index" :span="3" :offset="0">
            <a href='javascript:;' @click.prevent="deleteCollection(index)">
              <svg-icon icon-class="delete" className="delete-svg" />
            </a>
            <div class="card-div" @click.prevent="jumpCollection(svg.url)">
              <svg-icon :icon-class="svg.icon" className="card-svg"/>
            </div>
            <p class="card-p">
              {{svg.name}}
            </p>
          </el-col>
          <el-col :span="3" :offset="0" @click.native.stop="addCollection">
            <div class="card-div">
              <svg-icon icon-class="plus" className="card-svg"/>
            </div>
            <p class="card-p">
              添加
            </p>
          </el-col>
        </el-row>
      </el-carousel-item>
      <el-carousel-item >
        <textarea  class="note-box" type="text"  v-model="note" placeholder="在此键入以创建新的便签"/>
      </el-carousel-item >
    </el-carousel>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      searchKeyWords: '',
      note: '',
      searchType: 'baidu',
      searchSwitch: false,
      collections:[
        {icon:'bilibili-line',name:'bilibili',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili1',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili2',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili3',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili4',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili5',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili6',url:'https://www.bilibili.com'},
        {icon:'bilibili-line',name:'bilibili7',url:'https://www.bilibili.com'}
      ],
      searchSvgs:[
        {name:'baidu'},
        {name:'bing'},
        {name:'google'},
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    changeSearchType(name){
      this.searchType = name
      this.search()
    },
    // changeSearchType1(e){
    //   console.log(e.target.dataset.index)
    // },
    search(){
      if(this.searchKeyWords!=''){
        switch (this.searchType) {
          case 'baidu':
            window.open('http://www.baidu.com'+'/s?wd=' + this.searchKeyWords)
            break;
          case 'bing':
            window.open('https://cn.bing.com'+'/search?q=' + this.searchKeyWords)
            break;
          default:
            window.open('https://www.google.com'+'/search?q=' + this.searchKeyWords)
            break;
        }
      }
    },
    jumpCollection(url){
      console.log(url)
      window.open(url)
    },
    deleteCollection(index){
      this.collections.splice(index,1);
    },
    addCollection(){
      if(this.collections.length<11){
        this.collections.push({icon:'bilibili-line',name:'bilibili',url:'https://www.bilibili.com'})
      }else{
        alert('标签够多了，别加了')
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .el-carousel--horizontal{
    width: 750px;
    height: 375px;
    padding-top: 10px;
  }
  .el-row{
    width: 700px;
    margin:auto;
  }
  .el-col-offset-0 {
    margin-left: 65px;
    margin-top: 14px;
  }
  .el-button {
    display: block;
    margin: auto;
    margin-top: 160px;
  }
  .el-carousel--horizontal{
    margin: 50px auto;
  }
  // 卡片指示器样式
  // ul{
  //   background: white !important;
  //   width: 100px;
  //   margin: auto;
  //   border-radius: 15px;
  //   opacity: 0.5;
  // }




  .isActive{
    background: gray !important;
  }
  .searchSvgEach{
    display: inline-block;
    width: 80px;
    height: 30px;
    border-radius: 15px;
    margin: 5px;
    background: white;
    opacity: 0.8;
  }
  .searchSvgEach:hover{
    cursor: pointer;
    background: gray !important;
  }
  .input-box{
    width: 320px;
    display: block;
    margin: auto;
    margin-top: 50px;
    border-radius: 22px;
    opacity: 0.8;
    border: 0;
    height: 50px;
    outline: none;
    text-align: center;
    font-size: 25px;
  }
  .input-box:hover{
    width: 650px;
  }

  .note-box{
    width: 89%;
    height: 77%;
    border-radius: 43px;
    border: 0;
    font-size: 22px;
    outline: none;
    padding: 40px 40px 40px 40px;
  }
  .search-svg-box{
    margin: 10px auto;
    text-align: center;
    .search-svg{
      width: 1em;
      height: 1em;
      padding-top: 5px;
    }
  }
  .card-div{
    height: 80px;
    background: white;
    border-radius: 10px;
    opacity: 0.7;
  }
  .card-div:hover{
    cursor: pointer;
  }
  .card-p{
    color: white;
    margin: auto;
    text-align: center;
  }
  .card-svg{
    margin: 24px 27px;
    width: 2em;
    height: 2em;
  }
  .delete-svg{
    position: absolute;
    width: 2em;
    height: 2em;
    margin-left: 71px;
    margin-top: -17px;
    z-index: 1;
  }
  .delete-svg:hover{
    cursor: pointer;
  }
</style>

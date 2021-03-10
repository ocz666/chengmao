<template>
  <div id="app">
    <img class='bgimg' draggable="false" src="./assets/background.jpg" alt="背景图片">
    <home/>
  </div>
</template>

<script>
  import home from '@/components/home/Home'
  export default {
    name: 'App',
    components:{
      home
    }
  }
</script>

<style>
  .bgimg{
      z-index: -3;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 1s, transform .25s, filter .25s;
      backface-visibility: hidden;
      
  }
</style>

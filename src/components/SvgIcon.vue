<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      iconClass: {
        type :String,
        required: true
      },
      className:{
        type:String
      }
    },
    computed:{
      iconName() {
        return `#icon-${this.iconClass}`
      },
      svgClass() {
        if(this.className){
          return this.className + ' svg-icon'
        }else{
          return 'svg-icon'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .svg-icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>



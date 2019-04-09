<template>
  <el-carousel trigger="click" height="150px">
    <el-carousel-item v-for="item in lists" :key="item.id">
      <img :src="item.imgSrc">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "swiper",
  data(){
    return {
      lists:[
        {id:0,imgSrc:'https://fuss10.elemecdn.com/7/05/bb01f6e34c18a0e12d39b7c98e6f6jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'},
        {id:1,imgSrc:'https://fuss10.elemecdn.com/2/f6/36e52bca0d6db458e9855b7fc5813jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'},
        {id:2,imgSrc:'https://fuss10.elemecdn.com/e/fd/792553a2bbab2ac4dc04ecff99f0cjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/'},
      ]
    }
  }
};
</script>

<style lang="stylus" scoped>
img 
  width 100%
  height 100%
</style>



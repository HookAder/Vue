<template>
  <div class="icons">
    <ul>
      <li v-for="item in lists" :key="item.id">
        <img :src="item.imgSrc">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'icons',
  data(){
    return {
      lists:[
        {id:0,imgSrc:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'美食'},
        {id:1,imgSrc:'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'晚餐'},
        {id:2,imgSrc:'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'商超便利'},
        {id:3,imgSrc:'https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'水果'},
        {id:4,imgSrc:'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'医药健康'},
        {id:5,imgSrc:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'浪漫鲜花'},
        {id:6,imgSrc:'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'跑腿代购'},
        {id:7,imgSrc:'https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'汉堡披萨'},
        {id:8,imgSrc:'https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'厨房生鲜'},
        {id:9,imgSrc:'https://fuss10.elemecdn.com/a/78/0fb469b2da210827ec16896e00420jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',title:'炸鸡炸串'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons
  width 100%
  height 8rem
  ul
    width 100%
    height 100%
    li 
      float left
      list-style none
      width 20%
      height 50%
      background white
      text-align center
      img 
        width 80%
        height 60%
      span 
        font-size .8rem
</style>



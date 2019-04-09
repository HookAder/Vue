<template>
  <div class="offer-box">
    <p>优惠专区</p>
    <div class="boxs">
      <div class="box-left">
        <span>限时秒杀</span>
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2276087206,3092416280&fm=27&gp=0.jpg" alt="">
      </div>
      <div class="box-right">
        <span>减配送费</span>
        <img src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3408780906,1229760806&fm=85&s=728467A75D5655C65EAB79790300D07B" alt="">
      </div>
    </div>
    <!-- 一行四个box -->
    <div class="row-four-box">
      <ul>
        <li v-for="item in lists" :key="item.id" :style={background:item.bgColor}>
          <p>{{ item.pTitle }}</p>
          <span>{{ item.spanTitle }}</span>
          <img :src="item.imgSrc">
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'offer',
  data(){
    return {
      lists:[
        {id:0,pTitle:'8元起抢',spanTitle:'周四套餐日',bgColor:'#ecd7d7',imgSrc:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1859635578,3466032058&fm=202&src=2000&mola=new&crop=v1'},
        {id:1,pTitle:'品质餐厅',spanTitle:'午餐减20',bgColor:'#e4e5da',imgSrc:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1859635578,3466032058&fm=202&src=2000&mola=new&crop=v1'},
        {id:2,pTitle:'水果鲜切',spanTitle:'低至9.9',bgColor:'#d0eac9',imgSrc:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1859635578,3466032058&fm=202&src=2000&mola=new&crop=v1'},
        {id:3,pTitle:'新店特惠',spanTitle:'配送0元起',bgColor:'#c4f5fa',imgSrc:'https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1859635578,3466032058&fm=202&src=2000&mola=new&crop=v1'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.offer-box 
  width 100%
  margin-top .5rem
  p
    font-weight bolder
  .boxs
    margin-top .3rem
    width 100%
    height 5rem
    text-align center
    img 
      width 100%
      height 100%
    span 
      color white
      font-size .7rem
    .box-left 
      width 50%
      height 100%
      float left
      background #ccc
    .box-right
      width 50%
      height 100%
      float right
      background #ccc
  .row-four-box
    margin-top 1rem
    width 100%
    height 5rem
    background white
    ul 
      width 100%
      li  
        float left 
        list-style none
        width 25%
        height 100%
        text-align center
        p
          margin-top .3rem
          font-size .8rem
        span 
          font-size .6rem
        img 
          width 80%
          height 80%
</style>



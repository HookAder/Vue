<template>
  <div class="home">
    <!-- 头部部分 -->
    <header>
      <div class="icon-box">
        <i class="el-icon-location"></i>
        <span>北京</span>
      </div>
    </header>
    <!-- 搜索框 -->
    <div class="search-box">
      <input type="text" placeholder="星巴克专星福利">
    </div>
    <!-- 轮播图 -->
    <div class="swiper-box">
      <Swiper></Swiper>
    </div>
    <!-- 图标icons -->
    <div class="icons-box">
      <Icons></Icons>
    </div>
    <!-- 横着的一个列表 -->
    <div class="list-box">
      <ul>
        <li>
          <p>口碑</p>
          <span>到店美食</span>
        </li>
        <li>
          <p>电影</p>
          <span>小飞象</span>
        </li>
        <li>
          <p>酒店</p>
          <span>踏青出游</span>
        </li>
        <li>
          <p>火车票</p>
          <span>便携出行</span>
        </li>
      </ul>
    </div>
    <!-- 优惠专区 -->
    <div class="offer-box">
      <Offer></Offer>
    </div>
    <!-- 零食推荐部分 -->
    <div class="snack-box">
      <Snack></Snack>
    </div>
    <!-- 底部导航组件 -->
    <Footer></Footer>
  </div>
</template>
  
<script>

// 轮播图组件
import Swiper from './components/Swiper.vue'

// Icons组件
import Icons from './components/Icons.vue'

// 优惠专区组件
import Offer from './components/Offer.vue'

// 推荐小吃组件
import Snack from './components/Snack.vue'

// footer组件
import Footer from '../Footer/index.vue'

export default {
  name:'home',
  components:{
    Swiper,
    Icons,
    Offer,
    Snack,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
// 整个home页面的宽高
.home
  width 100%
  height 50rem
  background #eee
  header 
    position relative
    width 100%
    height 3rem
    background white
    .icon-box 
      position absolute
      left 1rem
      line-height 3rem
      // 头部部分定位图标
      i
        color #34667f
      span 
        margin-left .3rem
        font-size .9rem
        font-weight bolder
  .search-box 
    width 100%
    height 2rem
    z-index 9999
    background white
    input
      margin-left 1rem
      width 90%
      height 1.4rem
      text-align center
      background #e2e1e1
      border 0
      border-radius 1rem
  // 轮播图盒子样式
  .swiper-box 
    background #ccc
    // 一堆图标的样式
  .icons-box 
    width 100%
    background red
    // 一个横列表
  .list-box
    margin-top 1rem
    width 100%
    height 2rem
    background white
    overflow hidden
    ul 
      width 100%
      height 100%
      margin-left 1rem
      li
        float left 
        list-style none
        width 20%
        height 100%
        background #f6f6f6
        margin-right .3rem
        p 
          font-weight bold
          font-size .6rem
        span 
          color #898383
          font-size .4rem
  // 优惠专区
  .offer-box
    width 100%
    margin-top 1rem
    // 零食
  .snack-box
    margin-top .5rem
    width 100%
    background white
</style>




<template>
  <div class="cart">
    <!-- 标题 -->
    <div class="cart-title">
      <span>购物车</span>
      <i class="el-icon-location-outline"></i>
    </div>
    <!-- 购物车列表 -->
    <div class="cart-list">
      <ul>
        <transition-group>
          <li v-for="(item,index) in lists" :key="index">
            <img :src="item.imgSrc">
            <span @click="handleRemoveItem(index)">X</span>
            <p class="cart-title">{{ item.title }}</p>
            <p class="cart-price">￥{{ item.price }}</p>
            <p class="cart-info">{{ item.info }}</p>
            <!-- 添加减少box -->
            <div class="cart-options">
              <button class="less-btn" @click="handleLessCount(item.id)">-</button>
              <span>{{ item.count }}</span>
              <button class="add-btn" @click="handleAddCount(item.id)">+</button>
            </div>
          </li>
        </transition-group>
      </ul>
    </div>
    <!-- 结算box -->
    <div class="jiesuan-box">
      <span>合计:<b>￥{{ handleTotalPrice() }}</b></span>
      <button @click="handleSettlement()">去结算</button>
    </div>
    <!-- 底部导航组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import store from '@/store'
import Footer from '../Footer/index.vue'

export default {
  name:'cart',
  store,
  components:{
    Footer
  },
  data(){
    return {
      lists:store.state.snackData,
    }
  },
  methods:{
    // 删除一个商品
    handleRemoveItem(index){
      store.commit('handleRemoveItem',index);
      this.$message.success('删除成功!');
    },
    handleLessCount(index){
      store.commit('handleLessCount',index);
    },
    handleAddCount(index){
      store.commit('handleAddCount',index);
    },
    //结算事件
    handleSettlement(){
      store.commit('handleSettlement');
      this.$message.success('结算成功!');
      this.lists = [];
    },
    // 计算总金额
    handleTotalPrice(){
      let price = 0;
      this.lists.forEach(item => {
        price += item.count * item.price;
      })
      return price;
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart
  width 100%
  .cart-title 
    width 100%
    text-align center
    margin-top .3rem
    border-bottom 1px solid #eee
  .cart-list 
    width 100%
    ul 
      width 100%
      li 
        position: relative;
        float left 
        list-style none 
        width 100%
        height 5rem
        background #eee
        margin-top: 0.4rem;
        img 
          float left 
          width 30%
          height 100%
        span 
          float right
        .cart-title 
          font-size .8rem
          text-indent 2em
          text-align left
        .cart-price 
          margin-top .5rem
          font-size .7rem
          text-indent 2em
        .cart-info  
          margin-top .8rem
          color red
          font-size .3rem
          text-indent 2em
        .cart-options
          position absolute 
          left: 15rem;
          top: 3.3rem;
          width 3rem
          background #eee
          span 
            position absolute 
            left 1.2rem
            top -.1rem
          .less-btn 
            float left 
            width 1rem
          .add-btn 
            float right
            width 1rem
  .jiesuan-box
    position fixed
    top 85%
    width 100%
    height 2rem
    background #eee
    box-shadow: 2px 4px 8px black;
    span 
      line-height 2rem
    button 
      float right
      width 3rem
      height 100%
      background #f44336
      border 0
      color white
</style>



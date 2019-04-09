<template>
  <div class="snack-container">
    <p>推荐小吃</p>
    <!-- 小吃列表 -->
    <div class="snack-list">
      <ul>
        <li v-for="(item,index) in lists" :key="item.id">
          <img :src="item.imgSrc">
          <p class="snack-title">{{ item.title }}</p>
          <p class="snack-price">￥{{ item.price }}</p>
          <p class="snack-info">{{ item.info }}</p>
          <button @click="handleAddCart(index)">添加购物车</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import store from '@/store'

export default {
  name:'snack',
  store,
  data(){
    return {
      //食品数据数组
      lists:[]
    }
  },
  created(){
    //在生命周期中获取ajax数据
    this.$http('/api/get_food')
      .then(res => {
        this.lists = res.data.data
      })
      .catch(err => {
        throw err;
      })
  },
  methods:{
    // 添加购物车事件
    handleAddCart(index){
      //根据index获取当前点击的是哪一个,保存到item
      const item = this.lists[index];
      store.commit('handlePushSnackData',item);
    }
  }
}
</script>

<style lang="stylus" scoped>
.snack-container 
  width 100%
  p
    font-weight bolder
    // 小吃列表
  .snack-list
    widht 100%
    ul 
      margin-top .3rem
      width 100%
      height 45rem
      overflow auto
      li 
        position: relative;
        float: left;
        list-style: none;
        width: 100%;
        height: 5rem;
        background: #f9f9f9;
        margin-top: 0.4rem;
        box-shadow: 0px 1px 4px black;
        img 
          float left 
          width 30%
          height 100%
        .snack-title 
          font-size .8rem
          text-indent 2em
        .snack-price 
          margin-top .5rem
          font-size .7rem
          text-indent 2em
        .snack-info  
          margin-top .8rem
          color red
          font-size .3rem
          text-indent 2em
        button 
          position absolute
          right 0
          top 3rem
          border 0
          width 3.5rem
          height 1.5rem
          background #2eb0a4
          color white
          border-radius 1rem
</style>



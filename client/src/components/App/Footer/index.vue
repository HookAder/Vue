<template>
  <div class="footer-container">
    <footer>
      <ul>
        <li>
          <router-link to="/app/home">首页</router-link>
        </li>
        <li>
          <router-link to="/app/cart">购物车</router-link>
          <i>{{ $store.state.snackData.length }}</i>
        </li>
        <li>
          <router-link to="/app/my">我的</router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name:'footer-'
}
</script>

<style lang="stylus" scoped>
.footer-container
  position fixed
  top 91%
  width 100%
  height 3.3rem
  background white
  footer 
    box-shadow: 2px 1px 8px #9d9595;
    width 100%
    height 100%
    ul
      width 100%
      li
        list-style none
        float left
        width 33%
        height 100%
        text-align center
        line-height 3
        background white
        a
          color black
          text-decoration-line none
        i 
          display inline-block
          position absolute
          top -.8rem
          color red
</style>



<template>
  <div class="my">
    <header>
      <div class="user">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==">
        <p class="user-title">用户名</p>
        <p class="user-info">查看特权 ></p>
      </div>
    </header>
    <!-- 三个列表显示 -->
    <div class="user-options">
      <ul>
        <li>
          <i class="el-icon-tickets"></i>
          <p>我的订单</p>
        </li>
        <li>
          <i class="el-icon-message"></i>
          <p>我的消息</p>
        </li>
      </ul>
    </div>
    <!-- lists-box -->
    <div class="lists-box">
      <ul>
        <li>我的收藏</li>
        <li>我的客服</li>
      </ul>
    </div>
    <!-- 退出部分 -->
    <div class="exit-box">
      <el-button type="danger" @click="handleExitUser()">退出登录</el-button>
    </div>
    <!-- 底部导航组件 -->
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from '../Footer/index.vue'

export default {
  name:'my',
  components:{
    Footer
  },
  methods:{
    // 退出登录事件
    handleExitUser(){
      this.$message.success('退出成功!');
      this.$router.push('/');
    }
  }
}
</script>

<style lang="stylus" scoped>
.my 
  width 100%
  height 30rem
  background #eee
  header 
    position relative
    width 100%
    height 6rem
    background #0085ff
    .user
      position absolute 
      top 1rem
      left 1rem
      width 100%
      height 4rem
      img 
        position absolute 
        top .5rem
        float left 
        width 20%
        height 80%
        border-radius 80%
      .user-title
        position absolute 
        top 1rem
        color white
        left 4rem
      .user-info 
        position absolute 
        top 2.5rem
        left 4rem
        color #ccc
        font-size .6rem
  .user-options 
    width 100%
    height 4rem
    background white
    box-shadow: 1px 2px 4px black;
    ul 
      width 100%
      li 
        float left
        list-style none
        width 50%
        height 100%
        text-align center
        line-height 1.5
  .lists-box
    width 100%
    ul
      width 100%
      li 
        width 100%
        height 1.7rem
        list-style none
        background white
        font-size .8rem
        line-height 1.7rem
        text-indent 3.1em
        border-bottom 1px solid #eee
  .exit-box
    position absolute 
    top 84%
    width 100%
    button 
      width 100%
</style>



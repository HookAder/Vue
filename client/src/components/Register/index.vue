<template>
  <div class="login-container">
    <!-- 登录头部部分 -->
    <header>
      <img src="~@/assets/images/login/logo.png">
    </header>
    <!-- 登录标题 -->
    <div class="login-title">
      <span>注册</span>
    </div>
    <!-- 表单部分 -->
    <div class="login-box">
      <form>
        <!-- 账号框 -->
        <div class="user-box">
          <label>
            <span>账号</span>
            <input type="text" v-model="registerUserInfo.username">
          </label>
        </div>
        <!-- 密码框 -->
        <div class="pass-box">
          <label>
            <span>密码</span>
            <input type="password" v-model="registerUserInfo.password">
          </label>
        </div>
      </form>
      <!-- 按钮部分 -->
      <div class="btn-box">
        <el-button @click="handleRegisterUserInfo()" class="btn-primary" type="primary" round>立即注册</el-button>
        <el-button @click="handleJumpLogin()" class="btn-success" type="success" round>返回登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'register',
  data(){
    return {
      //账号密码
      registerUserInfo:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    // 注册按钮
    //注册用户账号密码
    handleRegisterUserInfo(){
      if(!this.registerUserInfo.username || !this.registerUserInfo.password){
        this.$message.error('请填写账号或密码!');
        return;
      }
      this.$http.post('/api/register',{
        username:this.registerUserInfo.username,
        password:this.registerUserInfo.password
      }).then(res => {
        if(res.data.status === 200){
          //注册成功
          this.$message.success(res.data.msg);
          this.handleJumpLogin();
        }else{
          this.$message.error(res.data.msg);
          this.registerUserInfo.username = '';
          this.registerUserInfo.password = '';
        }
      })
    },
    // 跳转到注册页面上
    handleJumpLogin(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-container
    position relative
    width 100%
    height 30rem
    background #eee
    header 
      width 100%
      height 12rem
      background white
      border-bottom 1px solid #ccc
      img 
        width 100%
        height 100%
    .login-title 
      text-align center
      margin-top .5rem
      font-size 1.5rem
      border-bottom 1px solid #ddd
    .login-box 
      position relative
      margin-top 1rem
      width 100%
      height 13rem
      background #eee
      form .user-box 
        position absolute 
        left 3rem
        top 1rem
        span
          font-weight bolder
          font-size .7rem
        input 
          width 10rem
          height 1.5rem
          border-radius .3rem
          border: 0
          margin-left .3rem
      form .pass-box 
        position absolute 
        left 3rem
        top 3rem
        span
          font-weight bolder
          font-size .7rem
        input 
          width 10rem
          height 1.5rem
          border-radius .3rem
          border 0
          margin-left .3rem
      .btn-box
        position relative
        left 0rem
        top 7rem
        width 100%
        height 5rem
        background #eee
        .btn-primary 
          position absolute 
          left 2rem
          top 0rem
          width 80%
        .btn-success
          position absolute 
          left 1.4rem
          top 2rem
          width 80%
          margin-top .6rem
</style>
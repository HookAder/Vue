<template>
  <div class="login-container">
    <!-- 登录头部部分 -->
    <header>
      <img src="~@/assets/images/login/logo.png">
    </header>
    <!-- 登录标题 -->
    <div class="login-title">
      <span>登录</span>
    </div>
    <!-- 表单部分 -->
    <div class="login-box">
      <form>
        <!-- 账号框 -->
        <div class="user-box">
          <label>
            <span>账号</span>
            <input type="text" v-model="loginUserInfo.username">
          </label>
        </div>
        <!-- 密码框 -->
        <div class="pass-box">
          <label>
            <span>密码</span>
            <input type="password" v-model="loginUserInfo.password">
          </label>
        </div>
      </form>
      <!-- 按钮部分 -->
      <div class="btn-box">
        <el-button @click="handleUserLogin()" class="btn-primary" type="primary" round>登录</el-button>
        <el-button @click="handleJumpRegister()" class="btn-success" type="success" round>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      //账号密码
      loginUserInfo: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    // 登录按钮
    handleUserLogin() {
      // 效验是否输入
      if(!this.loginUserInfo.username || !this.loginUserInfo.password){
        this.$message.error('账号或密码为空!');
        return;
      }
      this.$http.post('/api/login',{
        username:this.loginUserInfo.username,
        password:this.loginUserInfo.password
      }).then(res => {
        if(res.data.status === 200){
          // 登录成功
          this.$message.success(res.data.msg);
          this.$router.push("/app/home");
        }else{
          this.$message.error(res.data.msg);
          this.loginUserInfo.username = '';
          this.loginUserInfo.password = '';
        }
      }).catch(err => {
        throw err;
      })
    },
    // 跳转到注册页面上
    handleJumpRegister() {
      this.$router.push("/register");
    }
  }
};
</script>

<style lang="stylus" scoped>
.login-container {
  position: relative;
  width: 100%;
  height: 30rem;
  background: #eee;

  header {
    width: 100%;
    height: 12rem;
    background: white;
    border-bottom: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .login-title {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #ddd;
  }

  .login-box {
    position: relative;
    margin-top: 1rem;
    width: 100%;
    height: 13rem;
    background: #eee;

    form .user-box {
      position: absolute;
      left: 3rem;
      top: 1rem;

      span {
        font-weight: bolder;
        font-size: 0.7rem;
      }

      input {
        width: 10rem;
        height: 1.5rem;
        border-radius: 0.3rem;
        border: 0;
        margin-left: 0.3rem;
      }
    }

    form .pass-box {
      position: absolute;
      left: 3rem;
      top: 3rem;

      span {
        font-weight: bolder;
        font-size: 0.7rem;
      }

      input {
        width: 10rem;
        height: 1.5rem;
        border-radius: 0.3rem;
        border: 0;
        margin-left: 0.3rem;
      }
    }

    .btn-box {
      position: relative;
      left: 0rem;
      top: 7rem;
      width: 100%;
      height: 5rem;
      background: #eee;

      .btn-primary {
        position: absolute;
        left: 2rem;
        top: 0rem;
        width: 80%;
      }

      .btn-success {
        position: absolute;
        left: 1.4rem;
        top: 2rem;
        width: 80%;
        margin-top: 0.6rem;
      }
    }
  }
}
</style>
import React,{ Component } from 'react';
import { Input,Button,message } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginBtnText:'登录',
      username:'',
      password:''
    };
  }
  handleChangeValue = e =>{
    const { name,value } = e.target;
    this.setState({
      [name]:[value]
    })
  }
  // 登录事件
  handleLogin = e =>{
    // 登录成功,跳转到管理界面
    if(this.state.username[0] === 'admin' && this.state.password[0] === 'admin'){
      message.success('登录成功!');
      this.setState({
        loginBtnText:'登录中...'
      })
      // 延迟宜1.5秒后跳转.
      // setTimeout(() => {
      //   window.location.pathname = 'app/admin/visible_data';
      // },1500)
    }else{
      message.error('账号或密码错误!');
    }
    console.log(this.state);
  }
  render(){
    return (
      <div className="login-container">
        <div className="login-header">
          <p>欢迎登录--管理系统</p>
        </div>
        {/* 登录的表单 */}
        <div className="login-form">
          <Input type="text" name="username" value={this.state.username} onChange={this.handleChangeValue} />
          <Input type="password" name="password" value={this.state.password} onChange={this.handleChangeValue} /><br/>
          {/* <Button type="primary" onClick={this.handleLogin}>{this.state.loginBtnText}</Button> */}
          <Link to="/app/admin/visible_data" onClick={this.handleLogin} className="link-to">{this.state.loginBtnText}</Link>
        </div>
      </div>
    );
  }
};

export default Login;
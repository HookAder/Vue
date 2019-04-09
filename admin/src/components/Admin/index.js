import React, { Component } from 'react'
import { Layout, Menu, Icon, Button, Input, message } from 'antd';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import './style.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {
  Header,
  Sider,
  Content
} = Layout;


// 可视化数据组件
class VisibleData extends Component {
  static View(props) {
    // bgColor - 背景颜色
    // data    - 数据对象
    const { bgColor, data } = props;
    return (
      <div className="visible-view" style={{ background: bgColor }}>
        <span>{data.title}</span>
        <h1>{data.text}</h1>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      //用户总数
      userTotal: 0,
      // 商品总数
      cmmodityTotal: 0
    };
  }
  componentDidMount() {
    axios.get('/admin/get_user_food')
      .then(res => {
        const user_length = res.data.user.length;
        const food_length = res.data.food.length;
        this.setState({
          userTotal: user_length,
          cmmodityTotal: food_length
        })
      })
      .catch(err => {
        throw err;
      })
  }
  render() {
    return (
      <div className="visible-data">
        <VisibleData.View
          bgColor="#66cdba"
          data={{
            title: '用户总数',
            text: this.state.userTotal
          }}
        ></VisibleData.View>
        <VisibleData.View
          bgColor="#78a0e8"
          data={{
            title: '商品总数',
            text: this.state.cmmodityTotal
          }}
        ></VisibleData.View>
        <VisibleData.View
          bgColor="#dcb6b6"
          data={{
            title: '暂无',
            text: ''
          }}
        ></VisibleData.View>
      </div>
    );
  }
};

// 用户数据组件
class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
  }
  // 获取ajax数据
  componentDidMount() {
    axios.get('/admin/get_user_food/')
      .then(res => {
        this.setState({
          user: res.data.user
        })
      })
      .catch(err => {
        message.error('更新数据失败!');
      })
  }
  // 删除单个用户数据
  handleRemoveUserInfo = (index) => {
    const username = this.state.user[index].username;
    if (window.confirm('是否要删除该用户?')) {
      axios.post('/admin/remove_user/', { username })
        .then(res => {
          message.success(res.data.msg);
          this.componentDidMount();
        })
        .catch(err => {
          throw err;
        })
    } else {
      message.info('成功取消该操作');
    }
  }
  render() {
    return (
      <div className="user-data">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERNAME</th>
              <th>PASSWORD</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.user.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>
                    <Button type="primary" onClick={this.handleRemoveUserInfo.bind(this, index)}>删除</Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
};

// 增加框组件
class AddCommodityBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddBox: true,
      title: '',
      imgSrc: '',
      price: '',
      info: ''
    };
  }
  handleChangeValue = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  // 提交商品事件
  handleSubmit = () => {
    const { title, imgSrc, price, info } = this.state;
    if (!title || !imgSrc || !price || !info) {
      message.warning('请确认提交信息完整!');
      return;
    }
    axios.post('/admin/add_food', { title, imgSrc, price, info })
      .then(res => {
        if (res.data.status === 200) {
          // 成功了
          message.success(res.data.msg);
          this.setState({
            isAddBox: !this.state.isAddBox
          })
        } else {
          message.success(res.data.msg);
        }
      })
      .catch(err => {
        throw err;
      })
  }
  render() {
    return (
      <div className="add_box" style={{ display: this.state.isAddBox ? 'block' : 'none' }}>
        <div className="add_box_title">
          <span>添加</span>
        </div>
        <div className="add_box_form">
          <label>
            <Input type="text" name="title" onChange={this.handleChangeValue} placeholder="商品名" />
          </label>
          <label>
            <Input type="text" name="imgSrc" onChange={this.handleChangeValue} placeholder="图片地址" />
          </label>
          <label>
            <Input type="number" name="price" onChange={this.handleChangeValue} placeholder="价格" />
          </label>
          <label>
            <Input type="text" name="info" onChange={this.handleChangeValue} placeholder="商品介绍" />
          </label>
        </div>
        <Button type="primary" onClick={this.handleSubmit} style={{ width: 100 + '%' }}>提交</Button>
      </div>
    );
  }
};

// 商品数据组件
class CommodityData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 商品数组
      commodity: [],
      // 用于控制是否显示增加框组件
      isAddBox: false,
    };
  }
  componentDidMount() {
    axios.get('/admin/get_user_food')
      .then(res => {
        this.setState({
          commodity: res.data.food
        })
      })
      .catch(err => {
        throw err;
      })
  }
  // 增加一条商品
  handleAddCommodity = () => {
    this.setState({
      isAddBox: !this.state.isAddBox
    })
  }
  // 删除单个商品数据
  handleRemoveItem = (title) => {
    if (window.confirm('是否删除该商品数据?')) {
      axios.post('/admin/remove_food', { title })
        .then(res => {
          if (res.data.status === 200) {
            message.success(res.data.msg);
            this.componentDidMount();
          } else {
            message.error(res.data.msg);
          }
        })
        .catch(err => {
          throw err;
        })
    }
  }
  // 编辑事件
  handleEditItemValue = index => {
    const { title,imgSrc,price,info } = this.state.commodity[index];
  }
  render() {
    return (
      <div className="commodity-data">
        <Button type="primary" onClick={this.handleAddCommodity}>添加</Button>
        {this.state.isAddBox ? <AddCommodityBox /> : null}
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>IMG</th>
              <th>PRICE</th>
              <th>INFO</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.commodity.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.imgSrc} alt="数据加载失败" style={{
                      float: 'left',
                      width: 80,
                      height: 60
                    }} />
                  </td>
                  <td>￥{item.price}</td>
                  <td>{item.info}</td>
                  <td>
                    <Button type="primary" onClick={this.handleRemoveItem.bind(this, item.title)}>删除</Button>
                    {/* <Button type="danger" onClick={this.handleEditItemValue.bind(this,index)} style={{ marginLeft: 10 }}>编辑🖊</Button> */}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
};

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <Layout>
          <Header>
            <h1 className="admin-title">后台管理</h1>
          </Header>
          <Layout>
            <Sider >
              <Menu
                className="layout-2"
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航</span></span>}>
                  <MenuItemGroup key="g1" title="首页">
                    <Menu.Item key="1">
                      <Link to="/app/admin/visible_data">可视化数据</Link>
                    </Menu.Item>
                  </MenuItemGroup>
                  <MenuItemGroup key="g2" title="数据">
                    <Menu.Item key="2">
                      <Link to="/app/admin/user_data">用户数据</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/app/admin/commodity_data">商品数据</Link>
                    </Menu.Item>
                  </MenuItemGroup>
                </SubMenu>
              </Menu>
            </Sider>
            <Content className="admin-content">
              <Route path="/app/admin/visible_data" component={VisibleData} />
              <Route path="/app/admin/user_data" component={UserData} />
              <Route path="/app/admin/commodity_data" component={CommodityData} />
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
};

export default Admin;
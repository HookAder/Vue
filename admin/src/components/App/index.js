import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// 登录组件
import Login from '../Login';
import Admin from '../Admin';

const BrowserUrlNavLinkRoute = () => (
  <div>
    <Route path="/" exact component={Login} />
    <Route path="/app/admin" component={Admin} />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserUrlNavLinkRoute />
      </div>
    );
  }
}

export default App;

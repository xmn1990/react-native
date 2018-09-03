import React from 'react';
import { List, Drawer, NavBar, Icon } from 'antd-mobile';
import { Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'react-redux';
import styles from './IndexPage.less';

const routes = [
  {
    path: '/home',
    title: 'Home',
    component: () => import('../pages/home/index'),
  },
  {
    path: '/ware-detail',
    title: 'WareDetal',
    component: () => import('../pages/ware-detail/index'),
  },
];

@connect()
export default class IndexPage extends React.Component {
  state = {
    open: false,
    title: routes.filter(v => v.path === this.props.location.pathname)[0].title,
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  };

  onNavigate = (path, title) => {
    this.setState({ open: false, title });
    this.props.dispatch(routerRedux.push(path));
  };

  render() {
    const { app } = this.props;
    const sidebar = (
      <List>
        <List.Item onClick={() => this.onNavigate('/home', 'Home')}>
          Home
        </List.Item>
        <List.Item onClick={() => this.onNavigate('/ware-detail', 'WareDetal')}>
          WareDetal
        </List.Item>
      </List>
    );
    return (
      <div>
        <NavBar
          style={{ backgroundColor: '#01C3A6' }}
          icon={<Icon type="ellipsis" />}
          onLeftClick={this.onOpenChange}
        >
          {this.state.title}
        </NavBar>
        <Drawer
          className={styles.drawer}
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sidebar}
          sidebarStyle={{
            width: '70%',
            background: 'rgb(245,245,249)',
            zIndex: 9,
          }}
          overlayStyle={{ zIndex: 8 }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          {routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key}
              exact
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))}
        </Drawer>
      </div>
    );
  }
}

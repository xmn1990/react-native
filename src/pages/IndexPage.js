import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from '../pages/home';
import WareDetail from '../pages/ware-detail';
const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  WareDetail: {
    screen: WareDetail,
  },
});

export default class IndexPage extends React.Component {
  render() {
    return <Drawer screenProps={{ stackNavigation: this.props.navigation }} />;
  }
}

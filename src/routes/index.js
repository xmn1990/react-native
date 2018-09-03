import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import ResetPaw from '../pages/reset-paw';
import WareDetail from '../pages/ware-detail';
import Tab from '../common/components/e-tab-bar';
import RNC from 'react-native-css';

const styles = RNC`
cardStyle{
    background-color:#fff;
}
`;
const headerTitleStyle = { alignSelf: 'center' };

//导航默认配置
let StackNavigatorConfig = {
  initialRouteName: 'Tab',
  mode: Platform.OS === 'ios' ? 'modal' : 'card', //页面跳转方式，有card和modal两种，默认为 card
  cardStyle: styles.cardStyle, //为各个页面设置统一的样式，比如背景色，字体大小等
};

const Router = StackNavigator(
  {
    Tab: {
      screen: Tab,
    },
    ResetPaw: {
      screen: ResetPaw,
      path: '/reset-paw',
      navigationOptions: {
        title: '重置密码',
        headerTitleStyle,
      },
    },
    WareDetail: {
      screen: WareDetail,
      path: '/ware-detail',
      navigationOptions: {
        title: '商品详情',
        headerTitleStyle,
      },
    },
  },
  StackNavigatorConfig
);

export default Router;

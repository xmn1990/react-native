import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import TabBarItem from '../e-tab-bar-item';
import Home from '../../../pages/home';
import Login from '../../../pages/login';

const headerTitleStyle = { alignSelf: 'center' };
const Tab = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem tintColor={tintColor} focused={focused} />
        ),
      }),
    },

    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        title: '登陆',
        headerTitleStyle,
        tabBarLabel: '我',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem tintColor={tintColor} focused={focused} />
        ),
      }),
    },
  },

  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#06c1ae',
      inactiveTintColor: '#979797',
      style: { backgroundColor: '#ffffff' },
      labelStyle: {
        fontSize: 16, // 文字大小
      },
      indicatorStyle: { height: 0 }, //android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
    },
  }
);

export default Tab;

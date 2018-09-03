import React from 'react';
import { Tabs, Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import { routerRedux } from 'dva/router';
import { View, Text, Image, FlatList } from 'react-native';
import RNC from 'react-native-css';
import WareItem from '../../common/components/ware-item';
import EButton from '../../common/components/e-button';

const img = require('../../assets/images/ping.png');
const styles = RNC`

  wareFlex{
    padding:10;
    margin-bottom:10;
    background-color:#fff;
  }

  tabs{
    font-size: 18;
  }
`;
const { Item } = Flex;

@connect(({ login }) => ({ login }))
export default class Home extends React.PureComponent {
  // componentDidMount() {
  //   if (window.platform) {
  //     // 只在 ReactNative 中使用
  //     this.props.screenProps.stackNavigation.setParams({
  //       title: '首页',
  //       drawerNavigation: this.props.navigation,
  //     });
  //   }
  // }

  renderWareItem = ({ item }) => {
    return (
      <Flex style={styles.wareFlex}>
        <Item onPress={() => this.props.navigation.navigate('WareDetail')}>
          <WareItem {...item.ware} />
        </Item>
        <View>
          <EButton
            onClick={() =>
              this.props.dispatch(routerRedux.push('/ware-detail'))
            }
            type={'primary'}
          >
            领取
          </EButton>
        </View>
      </Flex>
    );
  };

  render() {
    const tabs = [
      { title: <Text style={styles.tabs}>热门任务</Text> },
      { title: <Text style={styles.tabs}>推荐任务</Text> },
    ];
    const ware = {
      img,
      name: '激活广东康爱多连锁药店3客户',
      reward: '100E',
      desc: '任务描述任务描述任务描述任务描述任务描述',
    };
    const data = Array.from({ length: 100 }, (v, key) => {
      return {
        key,
        ware,
      };
    });

    return (
      <Tabs swipeable={false} tabs={tabs}>
        <FlatList data={data} renderItem={this.renderWareItem} />
        <FlatList data={data} renderItem={this.renderWareItem} />
      </Tabs>
    );
  }
}

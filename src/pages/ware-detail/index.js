import React from 'react';
import { Accordion, Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import RNC from 'react-native-css';
import WareItem from '../../common/components/ware-item';

const img = require('../../assets/images/ping.png');
const styles = RNC`

  body{
    background-color:#F5F5F5;
  }

  header{
      padding:10 10 20;
      border-top:1 solid #E6E6E6;
      background-color:#fff;
  }

  wareText{
      color:#333;
  }

  accordion{
    background-color:#fff;
    margin-top:10;
  }

  accordionText{
      padding:10;
      color:#666;
      line-height:20;
  }

`;
const { Item } = Flex;

@connect(({ login }) => ({ login }))
export default class Home extends React.Component {
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
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <WareItem {...ware}>
            <Text style={styles.wareText}>任务已达成，奖励已发放。</Text>
          </WareItem>
        </View>
        <RenderAccordion header={'任务说明'}>
          任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任
          务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述
        </RenderAccordion>
        <RenderAccordion header={'任务条件'}>
          任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任
          务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述
        </RenderAccordion>
        <RenderAccordion header={'任务奖励'}>
          任务达成后，获得「xxx」e币奖励。
        </RenderAccordion>
        <RenderAccordion header={'任务建议（助你轻松完成任务）'}>
          任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任
          务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述任务描述
        </RenderAccordion>
      </View>
    );
  }
}
const RenderAccordion = ({ header, children }) => {
  return (
    <Accordion style={styles.accordion}>
      <Accordion.Panel header={header}>
        <Text style={styles.accordionText}>{children && children}</Text>
      </Accordion.Panel>
    </Accordion>
  );
};

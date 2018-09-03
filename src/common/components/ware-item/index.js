import React from 'react';
import { Flex } from 'antd-mobile';
import { View, Text, Image } from 'react-native';
import RNC from 'react-native-css';

const styles = RNC`
  wareImg{
    width:65;
    height:65;
    position: relative;
  }

  wareImgText{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    text-align: center;
    background-color:#FF6D00;
    color:#fff;
  }
  
  wareText{
    padding:0 5;
  }

  wareName{
    font-size: 20;
    line-height:30;
  }

  wareDesc{
    color:#999;
    line-height:24;
  }

`;
const { Item } = Flex;

export default class WareItem extends React.Component {
  render() {
    const { img, name, reward, desc, children } = this.props;
    return (
      <Flex style={styles.wareFlex}>
        <View>
          <Image style={styles.wareImg} source={img} />
          <Text style={styles.wareImgText}>{reward}</Text>
        </View>
        <Item style={styles.wareText}>
          <Text numberOfLines={1} style={styles.wareName}>
            {name}
          </Text>
          <Text style={styles.wareDesc} numberOfLines={2}>
            {desc}
          </Text>
          {children && children}
        </Item>
      </Flex>
    );
  }
}

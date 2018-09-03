import React, { Component } from 'react';
import { Icon } from 'antd-mobile';

const TabBarItem = ({
  focused,
  tintColor,
  icon: EIcon = <Icon type={'check-circle-o'} />,
  activeStyle = {},
}) => {
  const baseStyle = { tintColor: tintColor, fontSize: 14 };
  const style = focused ? Object.assign({}, baseStyle, activeStyle) : baseStyle;
  return typeof EIcon === 'function' ? (
    <EIcon style={style} />
  ) : (
    <Icon type={EIcon} style={style} />
  );
};

export default TabBarItem;

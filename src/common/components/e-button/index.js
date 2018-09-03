import React from 'react';
import { Button } from 'antd-mobile';
import RNC from 'react-native-css';

const styles = RNC`
primary{
    background-color: #01C3A6;
    border:1 solid #01C3A6;
}
`;

export default class EButton extends React.Component {
  render() {
    const { style, ...props } = this.props;
    return (
      <Button style={Object.assign({}, style, styles[props.type])} {...props} />
    );
  }
}

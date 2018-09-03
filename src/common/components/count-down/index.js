import React from 'react';
import { InputItem, Toast, Flex } from 'antd-mobile';
import { Text } from 'react-native';

export default class CountdownButton extends React.Component {
  static defaultProps = {
    second: 60,
    countdown: false,
  };

  state = {
    second: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.countdown !== this.props.countdown) {
      this.clearInterval();
      if (nextProps.countdown) {
        this.interval = setInterval(() => {
          this.countdown();
        }, 1000);
      }
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  handleClick = e => {
    const { countdown, onClick } = this.props;
    if (!countdown) {
      const { second } = this.state;
      if (!second) {
        this.setState({ second: this.props.second });
      }
      onClick && onClick(e);
    }
  };

  countdown = () => {
    const { second } = this.state;
    if (second > 1) {
      this.setState({ second: second - 1 });
    } else {
      const { onCountdownFinish } = this.props;
      this.setState({ second: null });
      onCountdownFinish && onCountdownFinish();
    }
  };

  render() {
    const {
      second,
      countdown,
      onCountdownFinish,
      disabled,
      onClick,
      children,
      ...others
    } = this.props;
    const time = this.state.second;
    return (
      <Text {...others} onPress={this.handleClick}>
        {children}
        {countdown && time}
      </Text>
    );
  }
}

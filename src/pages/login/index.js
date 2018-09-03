import React from 'react';
import { InputItem, Toast, Flex } from 'antd-mobile';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import EForm from '../../common/components/e-form';
import EButton from '../../common/components/e-button';
import CountDown from '../../common/components/count-down';
import RNC from 'react-native-css';
import { isPhone } from '../../utils/utils';

const img = require('../../assets/images/ping.png');
const styleSheet = StyleSheet.create({
  headerImg: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 84,
    height: 84,
    transform: [
      {
        translateX: -42,
      },
      {
        translateY: -42,
      },
    ],
  },
});

const styles = RNC`

body{
  background-color:#fff;
  padding:10;
}

header{
  height:170;
  position: relative;
}

lgoinButton {
  margin: 20 10;
}

flex {
  margin: 10;
}

flexItem {
  text-align: right;
}

text {
  color: #01C3A6;
}
`;
const { Item } = Flex;
@connect(({ login }) => ({ login }))
export default class Login extends React.Component {
  state = {
    loginType: 'paw',
    countdown: false,
  };

  account = {
    id: 'phone',
    options: {
      initialValue: '13312345678',
    },
    component: InputItem,
    props: {
      placeholder: '请输入手机号',
      type: 'number',
      maxLength: 11,
      labelNumber: 3,
      children: '账号',
      clear: true,
    },
  };
  paw = {
    id: 'numCode',
    options: {
      initialValue: '654321',
    },
    component: InputItem,
    props: {
      placeholder: '请输入短信验证码',
      type: 'number',
      maxLength: 11,
      labelNumber: 3,
      children: '密码',
      clear: true,
      extra: (
        <Text
          onPress={() => this.props.navigation.navigate('ResetPaw')}
          style={styles.text}
        >
          忘记密码
        </Text>
      ),
      onExtraClick: () => console.log('忘记密码'),
    },
  };
  smsPaw = {
    id: 'numCode',
    options: {
      initialValue: '654321',
    },
    component: InputItem,
    props: {
      placeholder: '请输入短信验证码',
      type: 'number',
      maxLength: 11,
      labelNumber: 3,
      children: '密码',
      clear: true,
      extra: (
        <CountDown
          onClick={this.handleSendSms}
          countdown={this.state.countdown}
          style={styles.text}
        >
          获取短信验证码
        </CountDown>
      ),
      onExtraClick: () => console.log('获取短信验证码'),
    },
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'componentWillReceiveProps');
    if (nextProps.login.loading) {
      Toast.loading('登陆中...');
    }

    if (nextProps.login.loginState) {
      Toast.success('登陆成功');
      this.props.dispatch({
        type: 'login/claerLoginState',
      });
      this.props.navigation.navigate('Home');
    }
  }

  formValuesChange = (value, values) => {
    console.log(value, values);
  };

  handleSmsLogin = () => {
    this.setState({ loginType: 'smsPaw' });
  };

  handleLogin = () => {
    this.setState({ loginType: 'paw' });
  };

  handleSubmit = form => {
    form.validateFields((error, value) => {
      if (!value.phone) {
        return Toast.fail('手机号码不能为空');
      } else if (!isPhone(value.phone)) {
        return Toast.fail('手机号码不正确');
      }
      if (!value.numCode) {
        return Toast.fail('请输入短信验证码');
      }
      this.props.dispatch({
        type: 'login/login',
        user: value,
      });
    });
  };

  handleSendSms = () => {
    Toast.info('handleSendSms');
    this.setState({ countdown: true });
  };

  renderFooter = form => {
    return (
      <EButton
        type={'primary'}
        style={styles.lgoinButton}
        onClick={() => this.handleSubmit(form)}
      >
        登陆
      </EButton>
    );
  };

  render() {
    const { loginType } = this.state;
    const formItems =
      loginType === 'paw'
        ? [this.account, this.paw]
        : [this.account, this.smsPaw];
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={styleSheet.headerImg} source={img} />
        </View>
        <EForm
          onValuesChange={this.formValuesChange}
          renderChildren={this.renderFooter}
          items={formItems}
        />
        <View style={styles.flex}>
          <Flex>
            {loginType === 'paw' ? (
              <Item onPress={this.handleSmsLogin}>
                <Text>短信验证码登录</Text>
              </Item>
            ) : (
              <Item onPress={this.handleLogin}>
                <Text>密码登录</Text>
              </Item>
            )}
            <Item>
              <Text style={styles.flexItem}>立即注册</Text>
            </Item>
          </Flex>
        </View>
      </View>
    );
  }
}

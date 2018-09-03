import React from 'react';
import { InputItem, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import EForm from '../../common/components/e-form';
import EButton from '../../common/components/e-button';
import RNC from 'react-native-css';
import { isPhone } from '../../utils/utils';

const styles = RNC`

lgoinButton {
    margin: 20 10;
  }

text {
    color: #01C3A6;
  }
  `;

@connect(({ login }) => ({ login }))
export default class ResetPaw extends React.Component {
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
      extra: <Text style={styles.text}>获取短信验证码</Text>,
      onExtraClick: () => console.log('获取短信验证码'),
    },
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

  render() {
    return (
      <EForm
        renderChildren={this.renderFooter}
        items={[this.account, this.smsPaw]}
      />
    );
  }
}

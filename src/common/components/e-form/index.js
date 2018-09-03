import React from 'react';
import { createForm } from 'rc-form';
import { List } from 'antd-mobile';


const Form = ({ onValuesChange, ...other }) => {
    @createForm({ onValuesChange: (e, value, values) => onValuesChange(value, values) })
  class EForm extends React.Component {
    render() {
      const { form, renderChildren, items } = this.props;
      const { getFieldProps } = form;
      return (
        <List>
          {items && items.map((item, index) => {
            const { id, options = {}, props = {}, component: Component } = item;
            return (
              <Component
                {...getFieldProps(id, options)}
                key={index}
                {...props}
              />);
          })}
          {renderChildren && renderChildren(form)}
        </List>
      );
    }
    }
  return <EForm {...other} />;
};

export default Form;

/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:54:27
*/

import React,{ Component } from 'react'
import axios from 'axios'
import {Form, Icon, Input, Button, Checkbox} from 'antd'


import './index.css'

class NormalLoginForm extends Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios({
        	method:'post',
        	url:'http://127.0.0.1:3000/admin/login',
        	data:values
        })
        .then(result=>{
        	console.log(result)
        })
        .cath(err=>{
        	console.log(err)
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
   		<div className="Login">
	      <Form className="login-form">
	        <Form.Item>
	          {getFieldDecorator('userName', {
	            rules: [{ pattern: /^[a-z0-9]{3,6}$/, message: '用户名三到六的数字或者字符' }],
	          })(
	            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="帐户" />
	          )}
	        </Form.Item>
	        <Form.Item>
	          {getFieldDecorator('password', {
	            rules: [{ pattern: /^\w{3,6}$/, message: '密码三到六位' }],
	          })(
	            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
	          )}
	        </Form.Item>
	        <Form.Item>
	          <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
	            登录 GG
	          </Button>
	        </Form.Item>
	      </Form>
     	</div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default WrappedNormalLoginForm;
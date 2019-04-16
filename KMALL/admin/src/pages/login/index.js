/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:54:27
*/

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Form, Icon, Input, Button, message} from 'antd'


import './index.css'

class NormalLoginForm extends Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
    this.state={
      isFething:false
    }
	}
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       // console.log('Received values of form: ', values);
       this.setState(()=>({isFething:true}))
        axios({
        	method:'post',
        	url:'http://127.0.0.1:3000/admin/login',
        	data:values
        })
        .then(result=>{
        	 if(result.data.code == 0){//登录成功跳转
                //跳转到后台
                window.location.href = '/'
           }else if(result.data.code == 1){
                message.error(result.data.message)
           }
        })
        .catch(err=>{
        	   console.log(err)
             message.error('网络请求失败，请稍后再试')
        })
        .finally(()=>{
             this.setState(()=>({isFething:false}))
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
	          {getFieldDecorator('username', {
	            rules: [{ pattern: /^[a-z0-9_]{3,6}$/, message: '用户名三到六的数字或者字符' }],
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
	          <Button 
            type="primary" 
            onClick={this.handleSubmit} 
            className="login-form-button"
            loading={this.props.isFething}
             >
	            登录 GG
	          </Button>
	        </Form.Item>
	      </Form>
     	</div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) =>{
    return {
      isFething:state.get('login').get('isFething')
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
      
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm);
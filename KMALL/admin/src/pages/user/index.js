/*
* @Author: TomChen
* @Date:   2019-04-09 19:29:30
* @Last Modified by:   TomChen
* @Last Modified time: 2019-04-12 20:54:27
*/

import React,{ Component } from 'react'

import { Table, Breadcrumb } from 'antd';

import { connect } from 'react-redux'

import { actionCreator } from './store'

import moment from 'moment'

import Layout from 'common/Layout'





const columns = [{
  title: '用户名',
  dataIndex: 'username',
  key: 'username',
}, {
  title: '是否是管理员',
  dataIndex: 'isAdmin',
  key: 'isAdmin',
  render:isAdmin=>isAdmin?'是':'否'
}, {
  title: 'emall',
  dataIndex: 'emall',
  key: 'emall',
},, {
  title: '手机',
  dataIndex: 'phone',
  key: 'phone',
},, {
  title: '注册时间',
  dataIndex: 'createdAt',
  key: 'createdAt',
}];


class User extends Component{
	componentDidMount(){
		this.props.handlePage(1);
	}
      render(){
      //console.log("1::",this.props.list)
      	const { list,current,pageSize,total,handlePage } = this.props;
      	const dataSource = list.map(user=>{
      		return {
      			key:user.get('_id'),
      			username: user.get('username'),
      			isAdmin: user.get('isAdmin'),
      			emall: user.get('emall'),
      			phone: user.get('phone'),
      			createdAt:moment(user.get('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      		}
      	}).toJS()
          return (
          		<div className="User">
          			<Layout>
          			<Breadcrumb style={{ margin: '16px 0' }}>
          				<Breadcrumb.Item>首页</Breadcrumb.Item>
          				<Breadcrumb.Item>用户管理</Breadcrumb.Item>
          				<Breadcrumb.Item>用户列表</Breadcrumb.Item>
          			</Breadcrumb>   
          				<Table 
          				dataSource={dataSource}
          				 columns={columns} 
          				 pagination={{
          				 	current:current,
          				 	pageSize:pageSize,
          				 	total:total
          				 }}
          				 onChange={(page)=>{
          				 	handlePage(page.current)
          				 }}
          				 loading={{
          				 	spinning:false,
          				 	tip:'滴滴滴 加载数据'

          				 }}
          				 />
          			</Layout>
          		</div>

          	) 

      }
}

const mapStateToProps = (state)=>{
	return {
		//初始值在reducer定义
		list:state.get('user').get('list'),
		current:state.get('user').get('current'),
		pageSize:state.get('user').get('pageSize'),
		total:state.get('user').get('total'),
		isFetching:	state.get('user').get('isFetching')	
	}
}

const mapDispatchToProps = (dispath)=>{
	return {
		handlePage:(page)=>{
			const action = actionCreator.getPageAction(page)
			dispath(action)
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(User)

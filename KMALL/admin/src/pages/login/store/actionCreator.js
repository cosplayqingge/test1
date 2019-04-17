
import * as types from './actionTypes.js'
import axios from 'axios';
import {message} from 'antd'

import { request } from 'util'
import { ADMIN_LOGIN } from 'api'

const getLoginRequestAction = ()=>{
	return {
		type:types.LOGIN_REQUEST
	}
}
const getLoginDoneAction = ()=>{
	return {
		type:types.LOGIN_DONE
	}
}


export const getLoginAction = (values)=>{
	return (dispatch)=>{
		//1.让登录按钮处于加载状态
		//1.1 其实就是需要改变state.login.isFetching 为 true
		//1.2 方法就是派发action
		//1.3 dispatch把action派发到store
		//1.4 store再把action转交个reducer
		//1.5 相当于程序流程走到./reducer.js
		dispatch(getLoginRequestAction());
		request({
			method:'post',
			url:ADMIN_LOGIN,
			data:values
		})
		.then(result=>{			
			 if(result.data.code == 0){//登录成功跳转
                //跳转到后台
                 window.location.href = "/"
            }else if(result.data.code == 1){
            	message.error(result.data.message)
            }
		})
		.catch(err=>{
			// console.log(err)
			// console.log('11111')
			message.error('网络请求失败，请稍后再试')
		})
		.finally(()=>{
			//2.让登录按钮处于活动状态
			dispatch(getLoginDoneAction())
		})
		/*
		axios({
			method:'post',
			url:'http://127.0.0.1:3000/admin/login',
			data:values
		})
		.then(result=>{
			console.log("result",result);
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
			//2.让登录按钮处于活动状态
			dispatch(getLoginDoneAction())
		})
		*/	
	}
}



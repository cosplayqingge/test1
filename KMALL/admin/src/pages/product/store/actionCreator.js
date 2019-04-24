import * as types from './actionTypes.js'
import { message } from 'antd'
import { request } from 'util'
import { GET_USERS,ADD_CATEGORY,GET_CATEGORIES,UPDATE_CATEGORY_ORDER,UPDATE_CATEGORY_NAME,
SAVE_PRODUCT } from 'api'


export const getSetCategoryIdAction = (pid,id)=>{
	return {
		type:types.SET_CATEGORY_ID,
		payload:{
			parentCategoryId:pid,
			categotyId:id,
		}
	}
}

//保存商品图片到store
export const getSetImagesAction = (payload)=>{
	return {
		type:types.SET_IMAGES,
		payload
	}
}

//保存商品描述到store
export const getSetDetailAction = (payload)=>{
	return {
		type:types.SET_DETAIL,
		payload
	}
}


export const getSaveAction = (values)=>{
	return (dispatch,getState)=>{
		const state = getState().get('product');
		const category = state.get('categoryId');
		const images = state.get('images');
		const detail = state.get('detail');
		request({
			method:'post',
			url:SAVE_PRODUCT,
			data:{
				...values,
				category,
				images,
				detail
			}
		})
		.then(result=>{
			console.log(result)
		})

	}
}


const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
const setPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getPageAction = (pid,page)=>{
	return (dispatch)=>{
		dispatch(getPageRequestAction())
		request({
			url:GET_CATEGORIES,
			data:{
				page:page,
				pid:pid
			}
		})
		.then(result=>{
			if(result.code == 0){
				dispatch(setPageAction(result.data))
			}
		})
		.catch(err=>{
			console.log(err)
		})
		.finally(()=>{
			dispatch(getPageDoneAction())
		})
	}
}

export const getLevelOneCategoriesAction = ()=>{
	return (dispatch)=>{
		request({
			url:GET_CATEGORIES,
			data:{
				pid:0
			}
		})
		.then(result=>{
			dispatch(setLevelOneCategoriesAction(result.data))
		})
	}	
}
export const getOrderAction = (pid,id,newOrder)=>{
	return (dispatch,getState)=>{
	//可以拿到页码数console.log(getState().get('category').get('current'))
		const state = getState().get('category');
		request({
			method:'put',
			url:UPDATE_CATEGORY_ORDER,
			data:{
				pid:pid,
				id:id,
				order:newOrder,
				page:state.get('current')
			}
		})
		.then(result=>{
			console.log(result)
			if(result.code == 0){
				message.success('更新排序成功')
				dispatch(setPageAction(result.data))
			}
		})
	}	
}


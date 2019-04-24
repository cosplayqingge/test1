
import { fromJS } from 'immutable'

import * as types from './actionTypes.js'

const defaultState = fromJS({
	parentCategoryId:'',
	categotyId:'',
	images:'',
	detail:'',
	isPageFetching:false,
	list:[],
	current:1,
	pageSize:0,
	total:0,
})
export default (state=defaultState,action)=>{
	if(action.type == types.SET_PAGE){
		return state.merge({
			list:fromJS(action.payload.list),
			current:action.payload.current,
			pageSize:action.payload.pageSize,
			total:action.payload.total				
		})
	}
	if(action.type == types.PAGE_REQUEST){
		return state.set('isPageFetching',true)
	}
	if(action.type == types.PAGE_DONE){
		return state.set('isPageFetching',false)
	}
	
	if(action.type == types.SET_CATEGORY_ID){
		return state.merge({
			parentCategoryId:action.payload.parentCategoryId,
			categotyId:action.payload.categotyId
		})
	}
	if(action.type == types.SET_IMAGES){
		return state.set('images',action.payload)
	}
	if(action.type == types.SET_DETAIL){
		return state.set('detail',action.payload)
	}
	return state;
}
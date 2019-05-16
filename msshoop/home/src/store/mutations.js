import {
	GET_HOME_PRODUCTS
} from './types.js'



export default {
		[GET_HOME_PRODUCTS](state,payload){
			console.log(payload.homeProducts)
			state.homeProducts=payload.homeProducts
		}
}
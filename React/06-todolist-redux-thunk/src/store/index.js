import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducer.js'


//1.store是负责整个数据的管理(获取最新的state,派发action,监听state的改变)
//2.整个应用只有一个store
//3.创建store时第一个参数需要传入一个函数(reducer)

const store = createStore(reducer,applyMiddleware(thunk))

export default store


























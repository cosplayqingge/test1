
import React,{ Component,Fragment } from 'react'
import Item from './Item.js'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭"],
			val:''
		}
		this.handleChange= this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this)

	}
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('app getDerivedStateFromProps',nextProps, prevState)
		return {
			list:['睡觉']
		}
	}
	componentDidMount(){
		console.log('app componentDidMount ')
	}
	handleAdd(){
		//直接返回的话就是再加一个括号
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}));
	}
	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val:val
		}));
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}));
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
		})
	}
	render(){
		// console.log('app . render...')
		return(
				<div className="App">
					<input onChange={
						this.handleChange} 
						value={this.state.val}
						/>
					<button onClick={this.handleAdd}>新增</button>
					<ul>
						{
							this.getItems()
						}
					</ul>
				</div>
			)
	}

}


export default App

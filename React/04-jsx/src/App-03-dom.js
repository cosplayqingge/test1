
import React,{ Component,Fragment } from 'react'
import Item from './Item.js'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","敲代码"],
			val:''
		}
		this.handleChange= this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this)

	}
	handleAdd(){
		//直接返回的话就是再加一个括号
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''
		}),()=>{
			console.log(this.ul.querySelectorAll('li'))
		});
		//console.log(this.ul.querySelectorAll('li'))
	}
	handleChange(ev){
		const val = this.input.value;
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
		console.log('app . render...')
		return(
				<div className="App">
					<input onChange={
						this.handleChange} 
						value={this.state.val}
						ref={(input)=>{
							//console.log(input)
							this.input = input
						}}
						/>
					<button onClick={this.handleAdd}>新增</button>
					<ul ref={(ul)=>{this.ul=ul}}>
						{
							this.getItems()
						}
					</ul>
				</div>
			)
	}

}


export default App


import React,{ Component,Fragment } from 'react'
import './App.css'

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:["吃饭","睡觉","敲代码"],
			val:''
		}
	}
	handleAdd(){
		// console.log('add....')
		this.setState({
			list:[...this.state.list,this.state.val]
			val:''
		})
	}
	handleChange(ev){
		//console.log(ev.target.value)
		this.setState({
			val:ev.target.value
		})
	}
	handleDel(index){
		//console.log(index)
		//this.state.list.splic(index,1)
		const list = [...this.state.list]
		list.splic(index,1)
	}
	render(){
		//return <div><input /> <button>新增</button></div>
		//return <Fragment><input /> <button>新增</button></Fragment>
		return(
				// <div style={{background:'red' }}>
				<div className="App">
					<input onChange={this.handleChange.bind(this)} value={this.state.val}/>
					<button onClick={this.handleAdd.bind(this)}>新增</button>
					<ul>
						{
							this.state.list.map((item,index)=>{
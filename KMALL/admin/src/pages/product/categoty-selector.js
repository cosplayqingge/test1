
import React,{ Component } from 'react'
import { Select } from 'antd';

import { request } from 'util'
import { GET_CATEGORIES } from 'api'


const Option = Select.Option;

class CategotySelector extends Component{
	constructor(props){
		super(props);
		this.state={
			levelOneCategories:[],
			levelOneId:'',
			levelTwoCategories:[],
			levelTwoId:''
		}
		this.handleLeveOneChange = this.handleLeveOneChange.bind(this)
		this.handleLeveTwoChange = this.handleLeveTwoChange.bind(this)
	}
	componentDidMount(){
		this.loadLeveOneCategories();
	}
	loadLeveOneCategories(){
		request({
			url:GET_CATEGORIES,
			data:{
				pid:0
			}
		})
		.then(result=>{
			if(result.code == 0){
				this.setState(()=>({levelOneCategories:result.data}))
			}
		})
	}
	handleLeveOneChange(value){
		this.setState(()=>({levelOneId:value,levelTwoId:''}),()=>{
			this.levelTowCategories()
			this.onValueChangge()
		})
	}
	levelTowCategories(){
		request({
			url:GET_CATEGORIES,
			data:{
				pid:this.state.levelOneId
			}
		})
		.then(result=>{
			if(result.code == 0){
				this.setState(()=>({levelTwoCategories:result.data}))
			}
		})
	}
	handleLeveTwoChange(value){
		this.setState(()=>({levelTwoId:value}),()=>{
			this.onValueChangge()
		})
	}
	onValueChangge(){
		const { getCategotyId } = this.props
		const { levelOneId,levelTwoId } = this.state
		if(levelTwoId){
			getCategotyId(levelOneId,levelTwoId)
		}else{
			getCategotyId(0,levelOneId)
		}
		
	}	
    render(){
      	const { levelOneCategories,levelTwoCategories,levelOneId,levelTwoId } = this.state;
      	const levelOneOptions = levelOneCategories.map(category=><Option key={category._id} value={category._id}>{category.name}</Option>)
        const levelTwoOptions = levelTwoCategories.map(category=><Option key={category._id} value={category._id}>{category.name}</Option>) 
          return (
          		<div className="CategotySelector">
          			<Select 
          				style={{width:200,marginRight:10}}
          				onChange={this.handleLeveOneChange}
          				value={levelOneId}
          			>
          				{levelOneOptions}
          			</Select>
          			{
          				levelTwoOptions.length
          				?<Select
          			 		style={{width:200}}
          			 		onChange={this.handleLeveTwoChange}
          			 		value={levelTwoId}
          			 	>
          					{levelTwoOptions}
          				</Select>
          				:null
          			}
          	
          		</div>

          	) 

      }
}



export default CategotySelector
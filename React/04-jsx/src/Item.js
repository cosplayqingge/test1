import React,{ Component } from 'react'
import propTypes from 'prop-types'

class Item extends Component{
	render(){
		console.log('item render ....')
		//通过结构赋值
		const {handleDel,content} = this.props
		return (
			<li onClick={handleDel}>
				{content}
			</li>	

			)
	}
}
Item.propTypes = {
	handleDel: propTypes.func,
	content:propTypes.string.isRequired
}
Item.defaultProps = {
	content:"睡觉"
}
export default Item
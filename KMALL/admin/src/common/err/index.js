import React,{ Component } from 'react'
import { Link } from "react-router-dom"
import { Alert } from 'antd';

import './index.css'

class Err extends Component{
    render(){
        return (
        	<div className="Err">
			    <Alert
			      message="好像走失了 呜呜!"
			      description="您访问的页面好像去火星了."
			      type="error"
			      showIcon
			    />
			    <Link to="/">点击返回首页</Link>
        	</div>
        )
    }
}


export default Err
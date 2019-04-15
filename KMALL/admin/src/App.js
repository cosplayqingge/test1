
import React,{ Component,Fragment } from 'react'
import Login from './pages/login'

import { 
	BrowserRouter as Router, 
	// HashRouter as Router, 
	Route, 
	Switch,
	Link 
} from "react-router-dom";

import './App.css'

class App extends Component{	
	render(){
		return( 
			<div className="App">
				<Login />
			</div>
		)
	}
}


export default App;
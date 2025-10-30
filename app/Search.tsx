import {React} from 'react';
import {Component} from 'react';

import Dropdown from './Dropdown.tsx';

function handleChange(){

}

export default class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			inputValue: ""
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(){
		this.setState({
			inputValue: document.getElementById("search-input").value.toLowerCase(),
		})
	}

	render(){
		return (
				<div id="search">
					<input onChange={this.handleChange} autoComplete="off" id="search-input" type="text" placeholder="magenta" value={this.state.inputValue}/>
					<Dropdown inputValue={this.state.inputValue}/>
				</div>
			)
	}
}
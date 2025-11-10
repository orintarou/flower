import {React} from 'react';
import {Component} from 'react';

import Dropdown from './Dropdown.tsx';

export default class Search extends Component {
	constructor(props){
		super(props);

		this.state = {
			inputValue: "",
			placeholder: "green"
		}
		
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value, source){
		let newInput = (source === 'input') ? event.target.value : value;
		this.setState({
			inputValue: (source === 'dropdown') ? "" : newInput,
			placeholder: "next color"
		})
		this.props.changeSearchValue(newInput);
	}

	render(){
		console.log(this.props.colorCount);
		return (
				<div id="search">
					<input onChange={() => this.handleChange("", "input")} autoComplete="off" id="search-input" type="text" placeholder={this.state.placeholder} value={this.state.inputValue}/>
					<Dropdown onClick={this.handleChange} colorCount={this.props.colorCount} inputValue={this.state.inputValue}/>
				</div>
			)
	}
}
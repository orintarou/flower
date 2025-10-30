import React, {Component} from 'react';


let colors = {
	'green': 15, 
	'gray': 25, 
	'red': 8, 
	'blue': 12, 
	'purple': 30
};


function myColors(input){
	let result = [];
	//if a substring that begins at index 0, then return.
	console.log(Object.keys(colors));

}

export default class Dropdown extends Component {
	constructor(props){
		super(props);
	}

	render(){
		myColors(this.props.inputValue);
		return (
			<div id="dropdown">
				<div className="dropdown-item" autoComplete="off" type="text" placeholder="magenta">gray</div>
				<div className="dropdown-item" autoComplete="off" type="text" placeholder="magenta">green</div>
				<div className="dropdown-item" autoComplete="off" type="text" placeholder="magenta">gin</div>
			</div>
		)
	}
}
import React, {Component} from 'react';

let colors = {
		'green': 5, 
		'gray': 5, 
		'red': 5, 
		'blue': 5, 
		'purple': 5,
		'brown': 5,
		'white': 5,
		'black': 5,
		'orange': 5,
}

function isMatch(input, color){
	let myColorBreakdown = {};

	let myBuilder = "";
	for(var i in color.split("")){
		myBuilder = myBuilder.concat(color.split("")[i]);
		myColorBreakdown[myBuilder] = 1;
	}

	return (input in myColorBreakdown);
}

function findColors(input){
	let result = [];

	for(var i in Object.keys(colors)){
		if(isMatch(input, Object.keys(colors)[i])){
			result.push(Object.keys(colors)[i]);
		}
	}

	return result;
}

export default class Dropdown extends Component {
	constructor(props){
		super(props);
		this.dropdownClick = this.dropdownClick.bind(this);
	}

	dropdownClick(color){
		this.props.onClick(color, "dropdown");
	}

	render(){
		let myColors = findColors(this.props.inputValue);
		return (
			<div id="dropdown">
				{
					myColors.map((color, index) => {
						return (
							<div key={index} onClick={() => this.dropdownClick(color)} className="dropdown-item flex" autoComplete="off" type="text" placeholder="magenta">
								<div className={"w-[4%]"} style={{backgroundColor: color}}></div>
								<div className="p-[.5vh] inline-flex">
									<div className="text-left">{color}</div>
									<div className="text-right text-gray-500">{"(" + this.props.colorCount[color] + ")"}</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}
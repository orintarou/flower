'use client'

import React, {Component} from 'react';

let myColors = {
	"green": 1, 
	"blue": 1, 
	"yellow": 1, 
	"red": 1, 
	"orange": 1
}

let closeTo = function(s){
	let result = [];
	let myKeys = Object.keys(myColors);

	for(var i in myKeys){
		if(s.substring(0,2) === myKeys[i].substring(0,2)){
			result[0] = true;
			result[1] = myKeys[i];
		}
	}

	return result;
}

class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			mid_type: "red",
			final_color: "red"
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		if(myColors[e.target.value] === 1){

		}
		this.setState({
			mid_type: e.target.value,
			final_color: closeTo(e.target.value)[0] ? closeTo(e.target.value)[1]: this.state.final_color
		})
	}

	render(){
		return (
			<div>
				<p>Enter the color you'd like to check out!</p>
				<input onChange={(event) => this.handleChange(event)} type="text" placeholder="red" value={this.state.choice}/>
				<p className="pa" style={{color: this.state.final_color}}>{this.state.mid_type}</p>
			</div>
		)
	}
}

export default Page;
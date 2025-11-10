import React, {Component} from 'react';
import Card from './Card.tsx';

function isMatch(input, color){
	if(input === ""){
		return true;
	}

	let myColorBreakdown = {};
	//green
	let myBuilder = "";
	for(var i in color.split("")){
		myBuilder = myBuilder.concat(color.split("")[i]);
		myColorBreakdown[myBuilder] = 1;
	}

	return (input in myColorBreakdown);
}

export default class Results extends Component {
	constructor(props){
		super(props);
	}

	render(){
		let searchResults = []
		for(var i in this.props.initialImages){
			if(isMatch(this.props.searchValue, this.props.initialImages[i].color)){
				searchResults.push(this.props.initialImages[i]);
			}
		}
		
		return (
			<div id="results">
				{
					searchResults.map((image, index) => {
						if(image.url !== null && image.common_name !== null){
							return (
								<Card key={index} index={index+1} image={image}/>
							)
						}
					})
				}
			</div>
		)
	}
}
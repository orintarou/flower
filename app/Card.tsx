import React, {Component} from 'react';

export default class Card extends Component {
	constructor(props){
		super(props);
	}


	render(){
		return(
			<div id="card">
				<img id="results-image" src={'./images/' + this.props.image.url + '.png'}/>
				<h2 id="results-image-text">{this.props.image.color}</h2>
			</div>
		)
	}
}
import React, {Component} from 'react';
import Badge from '@mui/material/Badge';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default class Card extends Component {
	constructor(props){
		super(props);
		this.handleHover = this.handleHover.bind(this);
	}

	handleHover(){
		document.getElementById(this.props.index).style.cursor = "pointer";
	}

	navigateFlower(name){
		document.getElementById("landing-content").style.display = 'none';
		document.getElementById("loading").style.display = "block";
		window.location = "/plant/" + name;
	}

	render(){
		return(
			<div className="card" onMouseOver={this.handleHover}>
				<img id="results-image" className="border-[1px]" src={this.props.image.url}/>
				<h2 id="results-image-color" className="text-black border-[1px] bg-white w-fit-content p-1" style={{borderColor: this.props.image.color}}>{this.props.image.color}</h2>
				<Badge id={this.props.index} className="results-image-click" >
					<AspectRatioIcon onClick={() => this.navigateFlower(this.props.image.common_name)}/>
				</Badge>
			</div>
		)
	}                                                                                                  
}
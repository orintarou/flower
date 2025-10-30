import React, {Component} from 'react';
import Card from './Card.tsx';

//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';



function getColor(num){
	return (num % 2 === 0) ? "green" : 
		(num % 3 === 0) ? "purple" :
		(num % 4 === 0) ? "blue" :
		"yellow";
}

export default class Results extends Component {
	render(){
		let images = [];
		for(var i=1; i<19; i++){
			images.push({
				"url": i,
				"color": getColor(i)
			});
		}

		return (
			<div id="results">
				{
					images.map((image) => {
						return <Card key={image.url} image={image}/>
					})
				}
			</div>
		)
	}
}
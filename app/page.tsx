'use client'

import React, {Component} from 'react';
import Search from './Search.tsx';
import Results from './Results.tsx';
import ToggleButton from '@mui/material/ToggleButton';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';


import axios from 'axios';
import * as data from './new_data.json';

import './globals.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let colors = {
	"white": 1,
	"red": 1,
	"pink": 1,
	"yellow": 1,
	"purple": 1,
	"blue": 1,
	"orange": 1,
	"green": 1,
	"gray": 1,
	"brown": 1,
}

function shuffleArray(arr){
	let myNumbers = {};
	let result = [];

	for(var i=0; i<arr.length; i++){
		let randomInt = getRandomInt(arr.length);
		while(randomInt in myNumbers){
			randomInt = getRandomInt(arr.length);
		}
		myNumbers[randomInt] = 1;
		result.push(arr[randomInt]);
	}

	return result;
}

class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			initialImages: [],
			searchValue: ""
		};

		this.changeSearchValue = this.changeSearchValue.bind(this);
	}

	async componentDidMount(){
			let allFlowers = {};
			let initialImages = [];

			for(var i in Object.keys(colors)){
				let color = Object.keys(colors)[i];

				let partialFlowers = await axios.get("https://flower-be.onrender.com/api/plants?color=" + color);
				allFlowers[color] = partialFlowers;
			}

			for(var i in allFlowers){
				for(var j in allFlowers[i].data){
					initialImages.push({
						"key": allFlowers[i].data[j].id,
						"url": allFlowers[i].data[j].image_url,
						"color": i,
						"common_name": allFlowers[i].data[j].common_name,
						"scientific_name": allFlowers[i].data[j].scientific_name,
					});
				}
			}
			
			this.setState({
				initialImages: shuffleArray(initialImages)
			})
	}

	changeSearchValue(input){
		this.setState({
			intitialImages: [],
			searchValue: input,
		})
	}

	render(){
		return (
			<div>
				<div id="landing-content">
					<ToggleButton className="fixed! top-0 right-0">O/I</ToggleButton>
					<Search changeSearchValue={this.changeSearchValue}/>
					<Results initialImages={this.state.initialImages} searchValue={this.state.searchValue} />
				</div>
				<div id="loading" className="fixed">
					<LocalFloristIcon className="absolute opacity-[.7] left-[calc(50%-20px)] top-[calc(20%-20px)]"/>
					<span className="absolute opacity-[.7] text-xs left-[calc(50%-110px)] top-[calc(22%)]">April showers bringing in May flowers...</span>
				</div>
			</div>
		)
	}
}

export default Page;
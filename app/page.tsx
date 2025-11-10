'use client'

import React, {Component} from 'react';
import Search from './Search.tsx';
import Results from './Results.tsx';
import ToggleButton from '@mui/material/ToggleButton';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddchartIcon from '@mui/icons-material/Addchart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import axios from 'axios';
import * as data from './new_data.json';

import './globals.css';
import { init } from 'next/dist/compiled/webpack/webpack';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let colors = {
	"white": 1,
	'green': 1, 
	'gray': 1, 
	'red': 1, 
	'blue': 1, 
	'purple': 1,
	'brown': 1,
	'black': 1,
	'orange': 1,
}

const icons = ['add a photo', 'add a comment', 'view statistics', 'view charts', 'inbox', 'notifications']; 

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
			searchValue: "",
			colorCount: {},
		};

		this.changeSearchValue = this.changeSearchValue.bind(this);
	}

	async componentDidMount(){
			let allFlowers = {};
			let initialImages = [];
			let colorCount = {};

			for(var i in Object.keys(colors)){
				let color = Object.keys(colors)[i];
				let partialFlowers = await axios.get("https://flower-be.onrender.com/api/plants?color=" + color);
				allFlowers[color] = partialFlowers;
			}

			for(var i in allFlowers){
				for(var j in allFlowers[i].data){
					if(allFlowers[i].data[j].image_url !== null && allFlowers[i].data[j].common_name !== null){
						initialImages.push({
							"key": allFlowers[i].data[j].id,
							"url": allFlowers[i].data[j].image_url,
							"color": i,
							"common_name": allFlowers[i].data[j].common_name,
							"scientific_name": allFlowers[i].data[j].scientific_name,
						});
					}
				}
			}

			for(var i in initialImages){
				if(colorCount[initialImages[i].color] === undefined){
					colorCount[initialImages[i].color] = 1;
				}else{
					colorCount[initialImages[i].color] += 1;
				}
			}
			
			this.setState({
				initialImages: shuffleArray(initialImages),
				colorCount: colorCount,
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
					<Search changeSearchValue={this.changeSearchValue} colorCount={this.state.colorCount}/>
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
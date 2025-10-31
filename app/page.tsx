'use client'

import React, {Component} from 'react';
import Search from './Search.tsx';
import Results from './Results.tsx';
import ToggleButton from '@mui/material/ToggleButton';
import './globals.css';

let colors = {
	'green': 15, 
	'gray': 25, 
	'red': 8, 
	'blue': 12, 
	'purple': 30,
	'brown': 23,
	'white': 15,
	'black': 4,
	'orange': 54
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getColor(i){
	if(i === 0) {
		return Object.keys(colors)[1];
	}
	if(i === 1) {
		return Object.keys(colors)[1];
	}
	if(i === 2) {
		return Object.keys(colors)[0];
	}
	if(i === 3) {
		return Object.keys(colors)[0];
	}
	if(i === 4) {
		return Object.keys(colors)[4];
	}
	if(i === 5) {
		return Object.keys(colors)[0];
	}
	if(i === 6) {
		return Object.keys(colors)[6];
	}
	if(i === 7) {
		return Object.keys(colors)[7];
	}
	if(i === 8) {
		return Object.keys(colors)[8];
	}
	if(i === 9) {
		return Object.keys(colors)[4];
	}
	if(i === 10) {
		return Object.keys(colors)[8];
	}
	if(i === 11) {
		return Object.keys(colors)[7];
	}
	if(i === 12) {
		return Object.keys(colors)[1];
	}
	if(i === 13) {
		return Object.keys(colors)[1];
	}
	if(i === 14) {
		return Object.keys(colors)[2];
	}
	if(i === 15) {
		return Object.keys(colors)[0];
	}
	if(i === 16) {
		return Object.keys(colors)[1];
	}
}

function formImages() {
	let images = [];
	for(var i=1; i<17; i++){
		images.push({
			"url": i,
			"color": getColor(i)
		});
	}
	return images;
}

class Page extends Component{
	constructor(props){
		super(props);
		this.state = {
			initialImages: formImages(),
			searchValue: ""
		};

		this.changeSearchValue = this.changeSearchValue.bind(this);
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
				<ToggleButton className="fixed! top-0 right-0">O/I</ToggleButton>
				<Search changeSearchValue={this.changeSearchValue}/>
				<Results initialImages={this.state.initialImages} searchValue={this.state.searchValue} />
			</div>
		)
	}
}

export default Page;
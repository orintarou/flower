'use client'

import React, {Component} from 'react';
import Search from './Search.tsx';
import Results from './Results.tsx';
import './globals.css';

class Page extends Component{
	render(){
		return (
			<div>
				{/*<p>Enter the color you'd like to check out!</p>*/}
				<Search/>
				<Results/>
			</div>
		)
	}
}

export default Page;
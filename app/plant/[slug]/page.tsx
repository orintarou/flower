'use client'

import React, {Component} from 'react';
import axios from 'axios';
import {use} from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddchartIcon from '@mui/icons-material/Addchart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';


const icons = ['add a photo', 'add a comment']; 

const comments = [
	{
		'user': 'kuma', 
		'text': 'a classic flower!'
	},
	{
		'user': 'kuma',
		'text': 'Would love to get some for my house'
	},
	{
		'user': 'kuma',
		'text': 'A nice present'
	},
	{
		'user': 'kuma',
		'text': 'Thanks for including this species'
	},
	{
		'user': 'kuma',
		'text': "I'm hoping to find some in my area"
	},
	{
		'user': 'kuma',
		'text': 'Just bought a vase of these'
	},
	{
		'user': 'kuma',
		'text': 'A classic!!'
	},
	{
		'user': 'kuma',
		'text': 'Never heard of em'
	}
];

const photos = [];

// const photos = [
// 	'../../images/1.png',
// 	'../../images/5.png',
// 	'../../images/9.png',
// 	'../../images/2.png',
// 	'../../images/3.png',
// 	'../../images/2.png',
// 	'../../images/6.png',
// 	'../../images/5.png',
// 	'../../images/13.png'
// ]

class Plant extends Component{
	constructor(props){
		super(props);

		this.state = {
			flowerData: "",
			comments: comments,
			photos: photos,
		}
	}

	async componentDidMount(){
		let flowerData = await axios.get("https://flower-be.onrender.com/api/plants/" + this.props.params.slug);
		this.setState({
			flowerData: flowerData.data,
		});

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(text){
		let type = (text === "add a photo") ? 'photo' : 'comment';

		if(type === 'photo'){
			document.getElementById("add a comment").style.display = "none";
			document.getElementById("input-photo").style.display = "flex";
		}else{
			document.getElementById("add a photo").style.display = "none";
			document.getElementById("input-comment").style.display = "flex";
		}

	}

	render(){
		return (
			<div id="page" className="fixed">
				<AppBar position="fixed">
				              <Drawer variant="permanent" anchor="left">
						        <List sx={{marginTop: '40vh', marginBottom: '10vh', width:'30vw', textAlign:"center", justifyContents:"center"}}>
						          <ListItem id="input-comment" sx={{display:"none"}}>
							          	<ListItemText>
							          		<form>
							          			<input type="text"/>
							          			<input className="width-2px" type="submit"/>
							          		</form>
							          	</ListItemText>
						          </ListItem>				         
						          {icons.map((text, index) => (
						            <ListItem key={text} disablePadding>
						              <ListItemButton id={text} onClick={() => this.handleClick(text)} sx={{justifyContent:"center"}}>
						                <ListItemText>
						                <Badge badgeContent={text.length * index + 1} color="black">
						                  {index === 0 ? <AddAPhotoIcon/> : 
						              		index === 1 ? <AddchartIcon/> :
						              		<BubbleChartIcon/>
						              		}
						              	</Badge>
						                </ListItemText>
						                <ListItemText sx={{'& .MuiListItemText-primary': { fontSize: '1.1vw' ,float:"right", textDecoration:"underline"} }}>
						                  	{text}
						                </ListItemText>
						              </ListItemButton>
						            </ListItem>
						          ))}
						          <ListItem id="input-photo" sx={{display:"none"}}>
							          	<ListItemText>
							          		<div className="flex">
								          		<form>
								          			<input type="file" className="mr-5px"/>
								          			<input className="width-2px" type="submit"/>
								          		</form>
							          		</div>
							          	</ListItemText>
						          </ListItem>
						        </List>
						      </Drawer>
				</AppBar>
		      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - 200px)` }, marginLeft: '180px'}}>
		      	<img className="mb-[10px]" style={{borderRadius: '20px', left: `calc(45% - 200px)`, opacity: .8, position: 'absolute', width:"600px", height:"100%"}} src={this.state.flowerData.image_url}></img>
		      </Box>
		      <Box>
		      	<div style={{overflowy: 'scroll', height:"100vh", width:'300px', position: 'absolute', left: `calc(45% + 400px)`}}>
		      		{(this.state.comments.concat(this.state.photos)).map((item) => {
		      			return (
		      				<Card>
		      					<CardContent>
		      						<Typography>{item.text}</Typography>
		      					</CardContent>
		      				</Card>
		      			)
			      	})}
		      	</div>
		      </Box>
			</div>

		)
	}
}
export default Plant;
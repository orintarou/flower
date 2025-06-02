import * as readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';
import axios from 'axios';

const rl = readline.createInterface({input, output});
const APITOKEN = "<hidden>";

let getColor = async function(){
    let color = await rl.question("\nEnter the color you'd like to check out!\n");    
    rl.close();
    return color.toLowerCase();
} 

getColor().then((color: string) => {
        axios.get("https://trefle.io/api/v1/species?filter%5Bflower_color%5D=" + color + "&token=" + APITOKEN).then((result) => {
            let myPlants = result;
            console.log(myPlants.data);
        });
    });


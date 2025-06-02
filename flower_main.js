import * as readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import axios from 'axios';
const rl = readline.createInterface({ input, output });
const APITOKEN = "<hidden>";
let color = await rl.question("\nEnter the color you'd like to check out!\n");
rl.close();
let myPlants = await axios.get("https://trefle.io/api/v1/species?filter%5Bflower_color%5D=" + color + "&token=" + APITOKEN);
let myImageURLS = [];
for (var i in myPlants.data.data) {
    myImageURLS.push(myPlants.data.data[i].image_url);
}

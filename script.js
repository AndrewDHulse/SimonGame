	/*----- constants -----*/
const colors = ['red', 'yellow', 'green', 'blue']
const sounds= {
    red:,
    yellow:,
    blue:,
    green:,
	wrongAnswer:,
};

	/*----- state variables -----*/
let level= 1;
let sequence=[];
let playerInput=[];
let playerTurn=0; 

	/*----- cached elements  -----*/
const redBtn=;
const yellowBtn =;
const greenBtn =;
const blueBtn=;
const playAgainBtn=;
	/*----- event listeners -----*/
redBtn;
yellowBtn;
greenBtn;
blueBtn;
playAgainBtn;

	/*----- functions -----*/
inititialize();

function inititialize(){

}

function handleClick(){

}

function generateFlash(){

}

function playSequence(){

}

function checkInput(){

}

function render(){

}

function gameOver(){

}

// Game will start upon clicking the play button
// the game will start with one flash of a color and an associated sound
//player will click the associated color to advance, 
// next level will be 2 flashes, with the first flash being same as last level 
//third level will be 3 flashes, following the same pattern
// fourth level 4 etc.
//sequence presented slightly faster each round
//level to be displayed on board, the same place a game over is shown
//buttons should also flash and play sound when player clicks


//flashes will have values between 1-4
//flashes will be created using Math.ceil(Math.random()*4);
//and push()-ed into an array
//setTimeout will be utilized to manage flashes
//setTimeout must be tied to array to ensure proper sequence
//level value tied to how many flashes generated
//use something like for(let i = 0; i < level; i++)

//player input managed by own array
//player input array cleared at start of round 
//game over triggered by player input not matching sequence

//handleClick should call in a check input function
//updating level should call in the generateFlash
//check input calls in gameOver if wrong
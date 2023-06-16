	/*----- constants -----*/
const colors = {
1:'red', 
2:'yellow',
3:'green',
4:'blue',
}
const sounds= {
    red:,
    yellow:,
    blue:,
    green:,
	wrongAnswer:,
	theme:,
};

	/*----- state variables -----*/
let level= 1;
let sequence=[];
let playerInput=[];
let playerTurn=0; 

	/*----- cached elements  -----*/
const redBtn=document.getElementById('red');
const yellowBtn =document.getElementById('yellow');
const greenBtn =document.getElementById('green');
const blueBtn=document.getElementById('blue');
const playAgainBtn=document.getElementById('gameInfo');
	/*----- event listeners -----*/
redBtn.addEventListener('click', handleClick);
yellowBtn.addEventListener('click', handleClick);
greenBtn.addEventListener('click', handleClick);
blueBtn.addEventListener('click', handleClick);
playAgainBtn.addEventListener('click', handleClick);

	/*----- functions -----*/
inititialize();

function inititialize(){

}

function handleClick(evt){
const selectedColor=evt.target.id;
	playerInput.push(colors);
	playSound(colors);
	checkInput();
	render();
}

function generateFlash(){
	const flash = Math.floor(math.random() * 4) + 1;
	sequence.push(flash);
	playSound();


}

function playSequence(){

}

function checkInput(){

}

function playSound(color){
	const audioEl=document.getElementById(color + '-tone');
	audioEl.play();
}

function render(){

}

function gameOver(){

}
	/*----- constants -----*/
const colors = {
1:'red', 
2:'yellow',
3:'green',
4:'blue',
}
	/*----- state variables -----*/
let level= 1;
let sequence=[];
let playerInput=[];
let playerTurn=0; //0, not in play; 1, computer turn; 2 human turn

	/*----- cached elements  -----*/
const messageEl=document.getElementById('gameInfo')
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
	playerTurn=0
	render();
}

function handleClick(evt){
const selectedColor=evt.target.id;
	playerInput.push(colors[selectedColor]);
	playSound(selectedColor);
	checkInput();
	render();
}

function generateFlash(){
	const flash = Math.floor(math.random() * 4) + 1;
	sequence.push(flash);
	playSound(colors[flash]);


}

function playSequence(){

}

function checkInput(){

}

function playSound(color){
	const audioEl=document.getElementById(color + '-tone');
	audioEl.currentTime=0;
	audioEl.play();
}

function render(){
	renderBoard()
	renderMessage()
}

function renderBoard(){

}

function renderMessage(){
	if(playerTurn=== 0){
		messageEl.innerText='wanna play?';
	} else if (playerTurn === 1) { 
		messageEl.innerText= `Level ${level}`
	} else{
		messageEl.innerText='your turn!'
	}
	}


function gameOver(){

}
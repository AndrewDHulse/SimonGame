//tasks to complete
//check arrays on level 2
//fix figure out why whole sequence array isnt playinggit add 

/*----- constants -----*/
const colors = {
1:'red', 
2:'yellow',
3:'green',
4:'blue',
};
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
playAgainBtn.addEventListener('click', handlePlayBtn);

	/*----- functions -----*/
init()

function init(){
	level = 1;
	playerTurn=0;
	sequence= [];
	playerInput= [];
	render();
}

function handleClick(evt){
const selectedColor=evt.target.id;
const colorKey=getKey(colors,selectedColor);
	playerInput.push(parseInt(colorKey));
	playSound(selectedColor);
	checkInput();
	render();

function getKey(obj, value){
	return Object.keys(obj).find((key) => obj[key]===value);
	}
}

function handlePlayBtn(){
	const audioEl=document.getElementById('theme-tone');

	if (playerTurn ===0){
		audioEl.play();
		init();
		playerTurn = 1;
		setTimeout(generateFlash, 2000);
	}
}

function generateFlash(){
	const flash = Math.floor(Math.random() * 4) + 1;
	sequence.push(flash);
	playSound(colors[flash]);

	if (sequence.length === level){
		playerTurn =2;
		playerInput =[];
		render();
		playSequence();
	}
}

function playSequence() {
	let i = 0;
	const interval = setInterval(() => {
	i++;
	if (i === sequence.length) {
		playerTurn = 2;
		playerInput = [];
		render();
		clearInterval(interval);
	  }
	}, 1000);
  }
  function checkInput() {
	  function checkArr(arr1, arr2) {
		return arr1.every((value, index) => value === arr2[index]);
	  }
	if (playerInput.length === sequence.length) {
	  if (checkArr(playerInput, sequence)) {
		level++;
		playerTurn = 1;
		playerInput = [];
		setTimeout(generateFlash, 1000);
	  } else {
		gameOver();
		render();
	  }
	}
  }

function playSound(color){
	const audioEl=document.getElementById(color + '-tone');
	const cellEl=document.getElementById(color);
	const dullColor=cellEl.id
	cellEl.id= ('highlight-'+ color);
	audioEl.currentTime=0;
	audioEl.play();
	setTimeout(function(){
		cellEl.id=dullColor;
	}, 500);
}

function render(){
	renderMessage();
}

function renderMessage(){
	if(playerTurn=== 0){
		messageEl.innerText=`Wanna
		Play?`;
	} else if (playerTurn === 1) { 
		messageEl.innerText= `Level ${level}
		Listen!`;
	} else if (playerTurn===2){
	messageEl.innerText=`Level ${level}
		your turn!`;
		}
	}


function gameOver(){
	playerTurn=0
	playerInput= []
	sequence= []
}


console.log(playerInput);
console.log(sequence);
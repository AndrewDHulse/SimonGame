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
let difficulty=1000; 
let highscore=0;
let score=0;

	/*----- cached elements  -----*/
const messageEl=document.getElementById('gameInfo')
const redBtn=document.getElementById('red');
const yellowBtn =document.getElementById('yellow');
const greenBtn =document.getElementById('green');
const blueBtn=document.getElementById('blue');
const playAgainBtn=document.getElementById('gameInfo');
const volumeSlider=document.getElementById('volumeSlider');
const volumeLabel=document.getElementById('volumeLabel');
const audioEls=document.querySelectorAll('.tones audio')
const highscoreEl=document.getElementById('highscore')
	/*----- event listeners -----*/
redBtn.addEventListener('click', handleClick);
yellowBtn.addEventListener('click', handleClick);
greenBtn.addEventListener('click', handleClick);
blueBtn.addEventListener('click', handleClick);
playAgainBtn.addEventListener('click', handlePlayBtn);
volumeSlider.addEventListener('input', handleVolumeChange)

	/*----- functions -----*/
init()

function init(){
	level = 1;
	playerTurn=0;
	sequence= [];
	playerInput= [];
	score=0;
	renderMessage();
}

function handleClick(evt){
const selectedColor=evt.target.id;
const colorKey=getKey(colors,selectedColor);
	playerInput.push(parseInt(colorKey));
	playSound(selectedColor);
	checkInput();
	renderMessage();

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

	if (sequence.length === level){
		playerInput =[];
		renderMessage();
		playSequence();
		playerTurn =2;
	}
}

function playSequence() {
	let i = 0;
	const interval = setInterval(() => {
		const color=colors[sequence[i]];
		playSound(color);
	i++;
	if (i === sequence.length) {
		setTimeout(function(){
			playerTurn = 2;
			playerInput = [];
			renderMessage();
			clearInterval(interval);
		},1000);
	  }
	}, difficulty);
  }

function checkInput() {
if (playerTurn !== 0){
	function checkArr(sequence, playerInput) {
		return sequence.every((value, index) => value === playerInput[index]);
	}
	if (playerInput.length === sequence.length) {
		if (checkArr(sequence, playerInput)) {
			level++;
			score++;
			if (score > highscore){
				highscore= score;
			}
			playerTurn = 1;
			playerInput = [];
			if (difficulty > 200){
				difficulty=difficulty-100;
			}
			setTimeout(generateFlash, 500);
	} else {
	gameOver();
	renderMessage();
	}
	}
	if (playerInput.length > 0 && playerInput[playerInput.length-1] !== sequence[playerInput.length-1]){
	gameOver();
	renderMessage();
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
	highscoreEl.innerText=`Highscore: ${highscore}`;
	}


function gameOver(){
	playerTurn=0;
	playerInput= [];
	sequence= [];
	difficulty=1000;
	const audioEl= document.getElementById(`gameOver-tone`);
	setTimeout(function(){
		audioEl.play();
		},500)
	score=0;
}

function handleVolumeChange(){
	const volume = volumeSlider.value;
	volumeLabel.textContent = `Volume: ${volume}`

	const volumeValue = volume /100;
	audioEls.forEach((audio)=>{
		audio.volume = volumeValue;
	})
};

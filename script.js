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
let flashLength=1000

	/*----- cached elements  -----*/
const messageEl=document.getElementById('gameInfo')

const colorBtns={
	red: document.getElementById('red'),
	yellow: document.getElementById('yellow'),
 	green: document.getElementById('green'),
 	blue: document.getElementById('blue')
	};
const playAgainBtn=document.getElementById('gameInfo');
const volumeSlider=document.getElementById('volumeSlider');
const volumeLabel=document.getElementById('volumeLabel');
const audioEls=document.querySelectorAll('.tones audio')
const highscoreEl=document.getElementById('highscore')
const muteBtn= document.getElementById('muteBtn');
const bgm = document.getElementById('bgm');

/*----- event listeners -----*/
Object.values(colorBtns).forEach(btn =>{
	btn.addEventListener('click', handleClick);
});
playAgainBtn.addEventListener('click', handlePlayBtn);
volumeSlider.addEventListener('input', handleVolumeChange);
muteBtn.addEventListener('click', handleToggle);


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
	const colorKey=Object.keys(colors).find((key) =>
		colors[key]===selectedColor);
	playerInput.push(parseInt(colorKey));
	playSound(selectedColor);
	checkInput();
	renderMessage();
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
		renderMessage();
		playSequence();
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
		},flashLength);
	  }
	}, difficulty);
  }

function checkInput() {
if (playerTurn !== 0){
	function checkArr(sequence, playerInput) {
		return sequence.every((value, index) => 
		value === playerInput[index]);
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
			if (difficulty > 300){
				difficulty=difficulty-100;
			}
			if (flashLength > 400){
				flashLength= flashLength-50;
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
	const dullColor=cellEl.id;
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
		messageEl.classList.add('idle');
		messageEl.classList.remove('unclickable');
	} else if (playerTurn === 1) { 
		messageEl.innerText= `Level ${level}
		Listen!`;
		messageEl.classList.remove('idle');
		messageEl.classList.add('unclickable');
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
	flashLength=1000;
	const audioEl= document.getElementById(`gameOver-tone`);
	setTimeout(function(){
		audioEl.play();
		},500)
	score=0;
}

function handleVolumeChange(){
	const volume = volumeSlider.value;
	volumeLabel.textContent = `Vol: ${volume}`

	const volumeValue = volume /100;
	audioEls.forEach((audio)=>{
		audio.volume = volumeValue;
	})
};

function handleToggle(){
	bgm.volume=0.15;
	if (bgm.paused){
		bgm.play();
	}else{
		bgm.pause();
	}
}
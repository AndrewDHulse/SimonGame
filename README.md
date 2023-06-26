# Simon

This is a web based implementation of Simon, the popular memory game. A series of lights flash on screen, along with a tone, and the player attempts to mimic the pattern. Each level adds a new flash to the sequence, and the speed gradually increases.

<div style= "display: flex; justify-content: center;">
<img src="Gameboard.png">
</div>

## Technologies Used

- HTML: The structure and contents of the game were defined using HTML
- CSS: The styling is provided by CSS, with prominent use of the box-shadow: style to achieve an eerie glow from certain elements, and bright colorful flashes. Additionally, keyframes were used to animate the gameInfo element. 
```
@keyframes pulse{
    0%{
        transform: scale(1);
    }
    25%{
        transform: scale(.95);
    }
    50%{
        transform: scale(1.01)}
    75%{
        transform: scale(.95);}
        100%{
            transform: scale(1);
        }
    }
```
By this method, a dedicated "play" button is not required, as the animation signals to players the gameInfo element is clickable, allowing for a cleaner UI.
- Javascript: The game's logic is handled by Javascript. The code revolves around two arrays, one for the player, and one for the computer generated sequence. The sequences are generated by a simple function:
```
function generateFlash(){
	const flash = Math.floor(Math.random() * 4) + 1;
	sequence.push(flash);

	if (sequence.length === level){
		renderMessage();
		playSequence();
	}
}
```
This generates a number between 1&4 and pushes it into an array. This also calls on playSequence():
``` 
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
```
which iterates through the array and switches the player's turn. 

## Getting Started
Click <a href="https://andrewdhulse.github.io/SimonGame/">this link</a> and hit the "Wanna play?" button. 

A cell will light up and play a tone, simply repeat the sequence shown.

## Features
- Highscore tracker
- Sound effects and visual highlights 
- Volume control and background music toggle
- Intuitive user interface
- Responsive design

## Sound Effects and Graphics
The sound effects were created using Akai Pro's MPC Beats DAW. Each cell plays a specified note: red is Eb, yellow is Db, green is Fb(E), and blue is Gb.
<img src="MPC.png"> 
The volume image was created by using GIMP to refine and color a sketch. 

<img src="gimp.png"> 

## Future Additions
- Radio field added to pick different themes/tones
- assign a consistent melody with the sequence

## Acknowledgement
This work is based on Hasbro's Simon. 

Fonts obtained through https://fonts.google.com/


<div style="display: flex; justify-content: center;">
<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF">
<img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
</div>

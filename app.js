// JavaScript Document
"use strict";
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === "r") {return "Rock";}
	if(letter === "p") {return "Paper";}
	if(letter === "s") {return "Scissore";}
}

function win(userChoise, computerChoice){
    userScore++;
	userScore_span.innerHTML = userScore;
	//computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(userChoise) + " beats " + convertToWord(computerChoice) + ". You win!";
	document.getElementById(userChoise).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoise).classList.remove('green-glow');},300);
}

function lose(userChoise, computerChoice){
	computerScore++;
	//userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(computerChoice) + " beats " + convertToWord(userChoise) + ". You Lost...";
	document.getElementById(userChoise).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoise).classList.remove('red-glow'),300);
}

function draw(userChoise, computerChoice){
	result_p.innerHTML = "It's a draw!";
	document.getElementById(userChoise).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoise).classList.remove('gray-glow');},300);
}

function game(userChoice){
	//console.log(userChoice);
	const computerChoice = getComputerChoice();
	//console.log(computerChoice);
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			//console.log("USER WINS.");
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			//console.log("COMPUTER WINS.");
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("It's a draw.");
			draw();
			break;
									  }									  
}

function main(){
	rock_div.addEventListener('click', function(){
		//console.log("hey you clicked on rock");
		game("r");
	});

	paper_div.addEventListener('click', function(){
		//console.log("hey you clicked on paper");
		game("p");
	});

	scissors_div.addEventListener('click', function(){
		//console.log("hey you clicked on scissors");
		game("s");
	});
}

main();


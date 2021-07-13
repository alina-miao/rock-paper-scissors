
function computerPlay() {
	let gameOptions = ["rock", "paper", "scissors"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
	let roundOutcome;
  if (playerSelection === computerSelection) {
    roundOutcome = "We chose the same weapon. We tied! Play another round.";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") || 
      (playerSelection === "scissors" && computerSelection === "paper")) {
    roundOutcome = `You chose ${capitalize(playerSelection)}. I chose ${capitalize(computerSelection)}.
				You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}.
				The score is ${playerScore} - ${computerScore}.`;
		playerScore += 1;
  } else {
    roundOutcome = `You chose ${capitalize(playerSelection)}. I chose ${capitalize(computerSelection)}.
				You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. 
				The score is ${playerScore} - ${computerScore}.`;
		computerScore += 1;
  }

	//change/display the scores and message here 
	const container = document.querySelector("main");

	let scoreMessage = document.createElement("div");
	scoreMessage.id = "score-message";
	scoreMessage.textContent = roundOutcome;
	container.appendChild(scoreMessage);

	/*if (container.contains(scoreMessage)) {
		//container.removeChild(scoreMessage);
		container.appendChild(scoreMessage);
	} else {
		container.appendChild(scoreMessage);
	} */

	if (playerScore === 5){
		console.log('You won!')
		//set up div displaying final scores and restart game button
	} else if (computerScore === 5) {
		console.log('You lost!')
		//set up div displaying final scores and restart game button
	}	else {
		return;
	//create the div that contains the text we want to display per round
	}
}

const rpsButtons = document.querySelectorAll(".rps-button");
rpsButtons.forEach((button) => {
  button.addEventListener("click", function(evt) {
    playRound(evt.target.id, computerPlay());
  });
});

//helper function to capitalize the first letter of lowercase strings
function capitalize(s) {
  if (typeof s !== 'string')
    return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}


//Plays a 5 rounds of rock paper scissors
/*
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let winner;
  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt("Let's play rock paper scissors! What would you like to choose?");
    let round = playRound(playerSelection, computerPlay());
    console.log(round);
    if (round.includes("You Win!")) {
      playerScore += 1;
    } else if (round.includes("You Lose!")) {
      computerScore += 1; 
    }
  }
  if (playerScore == computerScore) {
    winner = "You tied with the computer!";
  } else if (playerScore > computerScore) {
    winner = "You won against the computer!";
  } else {
    winner = "You lost against the computer!";
  }
  return `You have played 5 rounds of rock paper scissors! The final score is ${playerScore}-${computerScore}. ${winner}`;
}

console.log(game())
*/
let gameOptions = ["rock", "paper", "scissors"]

function computerPlay() {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "You tie! Play another round!";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") || 
      (playerSelection === "scissors" && computerSelection === "paper")) {
    return `You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!`;
  } else {
    return `You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  }
}

/*helper function to capitalize the first letter of lowercase strings*/
function capitalize(s) {
  if (typeof s !== 'string')
    return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

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
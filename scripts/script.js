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

function capitalize(s) {
  if (typeof s !== 'string')
    return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function game() {
}

console.log(game())
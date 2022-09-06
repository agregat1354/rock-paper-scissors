const things = ["rock", "paper", "scissors"];

function random(lowerBound, upperBound) {
    return Math.floor((Math.random()*(upperBound - lowerBound)))+lowerBound;
}

function getComputerChoice() {
    return things[random(0, things.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You loose! Paper wraps rock!"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper wraps rock!";
    } else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        return "You loose! Rock blunts scissors!"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock blunts scissors!";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You loose! Scissors cut paper!";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors cut paper!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Your choice: [rock, paper, scissors]"), getComputerChoice()));
    }
}

game();
const things = ["rock", "paper", "scissors"];
const btnList = document.querySelectorAll('.btn');
const result = document.querySelector('.result');
const playerPoints = document.querySelector('.player-points');
const computerPoints = document.querySelector('.computer-points');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.ending-text');

function random(lowerBound, upperBound) {
    return Math.floor((Math.random()*(upperBound - lowerBound)))+lowerBound;
}

function getComputerChoice() {
    return things[random(0, things.length)];
}

function getPlayerPoints() {
    return parseInt(playerPoints.textContent);
}

function getComputerPoints() {
    return parseInt(computerPoints.textContent);
}

function updatePoints(newPlayerPoints, newComputerPoints) {
    console.log(newPlayerPoints, newComputerPoints);
    if (newPlayerPoints !== getPlayerPoints()) {
        playerPoints.textContent = newPlayerPoints.toString();
    } else {
        computerPoints.textContent = newComputerPoints.toString();
    }
    return;
}

function logResult(resultString) {
    result.textContent = resultString;
    for (let i = 0; i < result.classList.length; i++) {
        if (result.classList[i] === 'invis') {
            result.classList.remove('invis');
        }
    }
}

function showModal() {
    const container = document.querySelector('.container');
    container.classList.add('invis');
    modalContainer.classList.remove('invis');
}

function winnerScreen() {
    modal.classList.add('winner-modal');
    modalText.classList.add('winner-text');
    modalText.textContent = "You win!";
}

function looserScreen() {
    modal.classList.add('looser-modal');
    modalText.classList.add('looser-text');
    modalText.textContent = "You loose!";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let pp = getPlayerPoints();
    let cp = getComputerPoints();

    if (playerSelection === computerSelection) {
        logResult("Tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        logResult("You loose! Paper wraps rock!");
        updatePoints(pp, ++cp);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        logResult("You win! Paper wraps rock!");
        updatePoints(++pp, cp);
    } else if (playerSelection === 'scissors' && computerSelection ==='rock') {
        logResult("You loose! Rock blunts scissors!");
        updatePoints(pp, ++cp);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        logResult("You win! Rock blunts scissors!");
        updatePoints(++pp, cp);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        logResult("You loose! Scissors cut paper!");
        updatePoints(pp, ++cp);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        logResult("You win! Scissors cut paper!");
        updatePoints(++pp, cp);
    }

    if (getPlayerPoints() === 5) {
        showModal();
        winnerScreen();
    }
    else if (getComputerPoints() === 5) {
        showModal();
        looserScreen();
    }
}

btnList.forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.classList[0], getComputerChoice());      
    })
})

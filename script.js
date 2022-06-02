function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection  === "Rock") {
        if(computerSelection === "Scissors") {
            return "win";
        }
        else if(computerSelection === "Paper") {
            return "lose";
        }
        else {
            return "tie";
        }
    }
    if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            return "win";
        }
        else if(computerSelection === "Scissors") {
            return "lose";
        }
        else {
            return "tie";
        }
    }
    if(playerSelection === "Scissors") {
        if(computerSelection=== "Paper") {
            return "win";
        }
        else if(computerSelection === "Rock") {
            return "lose";
        }
        else {
            return "tie";
        }
    }
    else {
        return "invalid";
    }
}

function game() {

    if (games === 0) {
        newGame.disabled = false;
    }

    let playerSelection = this.getAttribute('id');
    let computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === "win") {
        results.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        wins.textContent = parseInt(wins.textContent) + 1;
    }
    else if (roundResult === "lose") {
        results.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        loses.textContent = parseInt(loses.textContent) + 1;
    }
    else {
        results.textContent = "It's a Tie! You both chose " + playerSelection;
        ties.textContent = parseInt(ties.textContent) + 1;
    }
    games++;

    if (games >= 5) {
        buttons.forEach(button => button.disabled = true);
        games = 0;
        if (wins.textContent > loses.textContent) {
            gameResult.textContent = "YOU WON!";
        }
        else if (wins.textContent < loses.textContent) {
            gameResult.textContent = "YOU LOSE!";
        }
        else {
            gameResult.textContent = "IT'S A TIE!";
        }
    }
}


const buttons = document.querySelectorAll('.choices button');
const results = document.querySelector('#round-result');
const wins = document.querySelector('#wins');
const loses = document.querySelector('#loses');
const ties = document.querySelector('#ties');
const gameResult = document.querySelector('#game-result');
let games = 0;

const newGame = document.querySelector('#new-game');
newGame.addEventListener('click', function (e) {
    buttons.forEach(button => button.disabled = false);
    wins.textContent = 0;
    loses.textContent = 0;
    ties.textContent = 0;
    games = 0;
    this.setAttribute('disabled', true);
    results.textContent = '\u00A0';
    gameResult.textContent = '\u00A0';
});

buttons.forEach(button => button.addEventListener('click', game));

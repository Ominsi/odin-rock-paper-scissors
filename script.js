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

let capitalize = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

function game() {
    let results = [0,0,0];
    for(let i = 0; i < 5; i++) {
        let playerSelection = capitalize(prompt("Rock, Paper, or Scissors: "));
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult === "win") {
            console.log("You Win! " + playerSelection + " beats " + computerSelection);
            results[0]++;
        }
        else if (roundResult === "lose") {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection);
            results[1]++;
        }
        else if (roundResult === "tie") {
            console.log("It's a Tie! You both chose " + playerSelection);
            results[2]++;
        }
        else {
            console.log("You Lose! " + playerSelection + " is not a choice.");
            results[1]++;
        }
    }
    console.log("Wins: " + results[0]);
    console.log("Losses: " + results[1]);
    console.log("Ties: " + results[2]);
}
game();


function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
        selection = choices[Math.floor(Math.random() * choices.length)];

        return selection;
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("It's a tie!");
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors!");
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win! Paper beats Rock!");
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper!");
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock!");
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper!");
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors!");
    }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
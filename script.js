function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
        selection = choices[Math.floor(Math.random() * choices.length)];

        return selection;
}
let userWins = 0;
let computerWins = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("It's a tie!");
        
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        userWins++;
        console.log("You Win! Rock beats Scissors!");
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        userWins++;
        console.log("You Win! Paper beats Rock!");
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        userWins++;
        console.log("You Win! Scissors beats Paper!");
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock!");
        computerWins++;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper!");
        computerWins++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors!");
        computerWins++;
    }
}


function game(){
    
    for (let i = 0; i < 5; i++){
        let playerSelection;
        do{
            playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
            if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                alert("Invalid input. Please choose rock, paper, or scissors.");
        }
    }while(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Your current score: " + userWins);
    }
    if(userWins >= 3){
        console.log("You won " + userWins + " out of 5 rounds. Congratulations, you won the game!");
    }else if(userWins === computerWins){
        console.log("You tied every single round resulting in a draw. Play again!");
    }else{
        console.log("You won " + userWins + " out of 5 rounds. Sorry, the computer beat you. Play again!");
    }
}

game();
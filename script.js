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

const buttons = document.querySelectorAll('button');
choice = buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return button.id;
        
    });
});
function game(){
        const playerSelection = choice;
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Your current score: " + userWins);
    }   
   
   

    function getPlayerChoice(){
       
    }
      



//const rock = document.querySelector('#rock').innerHTML.toLowerCase();
  
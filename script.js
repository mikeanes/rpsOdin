function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
        selection = choices[Math.floor(Math.random() * choices.length)];

        return selection;
}
let userWins = 0;
let computerWins = 0;
function playRound(playerSelection){
    const computerSelection = getComputerChoice();
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
    console.log("Your score: " + userWins);
}



    const buttons = document.querySelectorAll('button');
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            playRound(button.id);
        });
    });
    
   



//const rock = document.querySelector('#rock').innerHTML.toLowerCase();
  
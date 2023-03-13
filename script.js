//Adding click listener to buttons and use input to playRound
const buttons = document.querySelectorAll('button');
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playAudio(button.id);
        playRound(button.id);
    });
});
    
//Function to generate random computer choice
function getComputerChoice(){
    const choices = ["rock","paper","scissors"]
        selection = choices[Math.floor(Math.random() * choices.length)];
        return selection;
}
//Initialize user wins and computer wins at 0 before starting game
let userWins = 0;
let computerWins = 0;

//Function to play respective sound
let rockAudio = document.getElementById("rockAudio");
let paperAudio = document.getElementById("paperAudio");
let scissorsAudio = document.getElementById("scissorsAudio");

function playAudio(playerSelection){
    if(playerSelection == "rock"){
        rockAudio.currentTime = 0;
        rockAudio.play();
    }else if(playerSelection == "paper"){
        paperAudio.currentTime = 0;
        paperAudio.play();
    }else if(playerSelection == "scissors"){
        scissorsAudio.currentTime = 0;
        scissorsAudio.play();
    }
}

//Function to compare user choice with computer to decide winner based on every outcome
function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    if(playerSelection === computerSelection){
        document.getElementById('result').innerHTML = "It's a tie!";       
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        userWins++;
        document.getElementById('result').innerHTML = "You Win! Rock beats Scissors!";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        userWins++;
        document.getElementById('result').innerHTML = "You Win! Paper beats Rock!";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        userWins++;
        document.getElementById('result').innerHTML = "You Win! Scissors beats Paper!";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        document.getElementById('result').innerHTML = "You Lose! Paper beats Rock!";
        computerWins++;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        document.getElementById('result').innerHTML = "You Lose! Scissors beats Paper!";
        computerWins++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        document.getElementById('result').innerHTML = "You Lose! Rock beats Scissors!";
        computerWins++;
    }
    document.getElementById('score').innerHTML = "Your score: " + userWins;

    if(userWins == 5){
        document.getElementById('score').innerHTML = "Congrats! You won the game!";
        userWins = 0;
        computerWins = 0;
    }else if(computerWins == 5){
        document.getElementById('score').innerHTML = "Sorry, the computer beat you. Play again.";
        userWins = 0;
        computerWins = 0;
    }
    
}




   




  
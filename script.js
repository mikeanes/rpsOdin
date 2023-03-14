//Adds overlay on mousedown to each button
const overlay = document.querySelectorAll('img');
overlay.forEach(img =>{
    img.addEventListener("mousedown", function(){
        img.style.filter = "brightness(70%)";
    });
    img.addEventListener("mouseup", function(){
        img.style.filter = "";
    });
});

//Storing result text display in a variable to be able to revert to default
let resultText = document.getElementById('result');
let originalResultText = resultText.innerText;

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

//Function that updates scoreboard html
function updateScore(){
    document.getElementById('playerScore').innerHTML = userWins;
    document.getElementById('computerScore').innerHTML = computerWins;
}

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
        resultText.innerHTML = "It's a tie!";       
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        userWins++;
        resultText.innerHTML = "You Win! Rock beats Scissors!";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        userWins++;
        resultText.innerHTML = "You Win! Paper beats Rock!";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        userWins++;
        resultText.innerHTML = "You Win! Scissors beats Paper!";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        resultText.innerHTML = "You Lose! Paper beats Rock!";
        computerWins++;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        resultText.innerHTML = "You Lose! Scissors beats Paper!";
        computerWins++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        resultText.innerHTML = "You Lose! Rock beats Scissors!";
        computerWins++;
    }
    updateScore();

    if(userWins == 5){
        document.getElementById('gameResult').innerHTML = "You Won!";
        modal.style.display = "block";
        userWins = 0;
        computerWins = 0;
    }else if(computerWins == 5){
        document.getElementById('gameResult').innerHTML = "You Lost...";
        modal.style.display = "block";
        userWins = 0;
        computerWins = 0;
    }
    
}

// Modal Setup
let modal = document.getElementById("myModal");
let playAgain = document.getElementById("playAgain");

playAgain.onclick = function(){
    updateScore();
    resultText.innerText = originalResultText;
    modal.style.display = "none";
}




   




  
let userChoice;
let userChoiceNumber;
let userWins;
let computerValue;
let computerValueNumber;
let computerWins;
let draws;



function getUserChoice(){
    userChoice = prompt("Do you want to choose rock, paper or scissor?").toLowerCase();
    while(userChoice != "rock" && userChoice != "paper" && userChoice != "scissor"){
        userChoice = prompt("Please enter only rock, paper or scissor. Which one do you want?").toLowerCase();
    }
    return userChoice;
}

function selectComputerValue(){
    let computerValueNumber = Math.floor(Math.random()*3 +1);
    (computerValueNumber == 1) ? computerValue = "rock" : 
    (computerValueNumber == 2) ? computerValue = "paper" : 
    computerValue = "scissor";
    
    return computerValue; 
}

function getRoundWinner(getUserChoice, selectComputerValue){
    getUserChoice();
    selectComputerValue();
    if(userChoice == "rock" && computerValue == "scissor" || userChoice == "scissor" && computerValue == "paper" || userChoice == "paper" && computerValue == "rock"){
        userWins++;
        console.log(userWins);
        console.log("Player won!");
    } else if (userChoice == computerValue){
        draws++;
        console.log("It's a draw!");
    } else {
        computerWins++;
        console.log("Computer won!");
    }
}

function game(){
    let rounds = 0;
    userWins = 0;
    computerWins = 0;
    draws = 0; 
    while (rounds < 5){
        getRoundWinner(getUserChoice, selectComputerValue);
        rounds++;
    }
    if (userWins > computerWins){
        return "Player won the game!";
     } else if (userWins < computerWins) {
         return "Computer won the game!";
    }
    return "The game ended in a draw!";
}
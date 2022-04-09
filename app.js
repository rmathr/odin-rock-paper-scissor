let userChoice;
let userChoiceNumber;
let computerValue;
let computerValueNumber;


function getUserChoice(){
    userChoice = prompt("Do you want to choose rock, paper or scissor?");
    while(userChoice != "rock" && userChoice != "paper" && userChoice != "scissor"){
        userChoice = prompt("Please enter only rock, paper or scissor. Which one do you want?");
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

function getRoundWinner(){
    getUserChoice();
    selectComputerValue();
    if(userChoice == "rock" && computerValue == "scissor" || userChoice == "scissor" && computerValue == "paper" || userChoice == "paper" && computerValue == "rock"){
        return "Player won!";
    } else if (userChoice == computerValue){
        return "It's a draw!";
    } else {
        return "Computer won!";
    }
}


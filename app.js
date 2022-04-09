let userChoice;
let computerValue;

function getUserChoice(){
    userChoice = prompt("Do you want to choose rock, paper or scissor?");
    while(userChoice != "rock" && userChoice != "paper" && userChoice != "scissor"){
        userChoice = prompt("Please enter only rock, paper or scissor. Which one do you want?");
    }
    return userChoice;
}



function selectComputerValue(){
    let computerRandonValue = Math.floor(Math.random()*3 +1);
    (computerRandonValue == 1) ? computerValue = "Rock" : 
    (computerRandonValue == 2) ? computerValue = "Paper" : 
    computerValue = "Scissor";
    return computerValue; 
}
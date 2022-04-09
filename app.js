let userChoice;

function getUserChoice(){
    userChoice = prompt("Do you want to choose rock, paper or scissor?");
    while(userChoice != "rock" && userChoice != "paper" && userChoice != "scissor"){
        userChoice = prompt("Please enter only rock, paper or scissor. Which one do you want?");
    }
    return userChoice;
}

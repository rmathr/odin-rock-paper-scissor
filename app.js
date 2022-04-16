let userChoice;
let userValue;
let userChoiceNumber;
let userWins = 0;
let computerValue;
let computerValueNumber;
let computerWins = 0;
let draws;
let userCapitalizedValue;
let computerCapitalizedValue;
let winningWord;
let computerWinningWord;


const para = document.getElementById('resultText');
const paraUserWins = document.getElementById('userWins');
const paraComputerWins = document.getElementById('computerWins');
const restart = restartContainer.querySelector('button');


const selectionButtons = btnContainer.querySelectorAll('button');
selectionButtons.forEach(button => { 
    button.addEventListener('click', () => {
            userChoice = button.value;
            getRoundWinner(userChoice, selectComputerValue);       
        })        
    });

function disableButtons() {
    selectionButtons.forEach(button => {
        button.disabled = true
    })
}

restart.addEventListener('click', restartGame);

function restartGame(){
        userWins = 0;
        paraUserWins.textContent = `${userWins}`;
        computerWins = 0;
        paraComputerWins.textContent = `${computerWins}`;
        para.textContent = "Select Rock, Paper, Scissor, Lizard or Spock to start playing!";
        selectionButtons.forEach(button => {
            if(button.disabled){
                button.disabled = false;
            };
        }); 
}

para.textContent = "Select Rock, Paper, Scissor, Lizard or Spock to start playing!";
paraUserWins.textContent = 0;
paraComputerWins.textContent = 0;




function selectComputerValue(){
    let computerValueNumber = Math.floor(Math.random()*5 +1);
    (computerValueNumber == 1) ? computerValue = "rock" : 
    (computerValueNumber == 2) ? computerValue = "paper" : 
    (computerValueNumber == 3) ? computerValue = "scissor" :
    (computerValueNumber == 4) ? computerValue = "lizard" :
    computerValue = "spock";
    
    return computerValue; 
}

function getRoundWinner(userValue, selectComputerValue){
    userValue = userChoice;
    userCapitalizedValue = userValue[0].toUpperCase() + userValue.substring(1);
    selectComputerValue();
    computerCapitalizedValue = computerValue[0].toUpperCase() + computerValue.substring(1);
     if (handleGameLogic(userValue, computerValue)){
            userWins++;
            para.textContent = `Player won! ${userCapitalizedValue} ${handlePlayerWinningWord(userValue,computerValue)} ${computerCapitalizedValue}!`;
            paraUserWins.textContent = `${userWins}`;
            console.log(`Player won! ${userCapitalizedValue} beats ${computerCapitalizedValue}!`);
            if(userWins == 5){
                para.textContent = "Player won the game!";
                disableButtons();   
            }
        } else if (userValue == computerValue){
            draws++;
            para.textContent = "It's a draw!";
            console.log("It's a draw!");
            return draws;
        } else {
            computerWins++;
            para.textContent = `Computer won! ${computerCapitalizedValue} ${handleComputerWinningWord(userValue, computerValue)} ${userCapitalizedValue}!`;
            paraComputerWins.textContent = `${computerWins}`;
            console.log(`Computer won!${computerValue} beats ${userCapitalizedValue}!`);
            if (computerWins == 5){
                para.textContent = "Computer won the game!";
                disableButtons();  
            }
        }
    }  

function handleGameLogic(userValue, computerValue){
    if (userValue == "rock" && computerValue == "scissor" || userValue == "scissor" && computerValue == "paper" 
     || userValue == "paper" && computerValue == "rock" || userValue == "rock" && computerValue == "lizard" 
     || userValue == "scissor" && computerValue == "lizard" || userValue == "paper" && computerValue == "spock" 
     || userValue == "lizard" && computerValue == "paper" || userValue == "lizard" && computerValue == "spock" 
     || userValue == "spock" && computerValue == "rock" || userValue == "spock" && computerValue == "scissor"){
         return true;
     }
}    

function handlePlayerWinningWord(userValue, computerValue) {
    if (userValue == "rock" && computerValue == "scissor" || userValue == "rock" && computerValue == "lizard") {
        winningWord = "crushes";
    } else if (userValue == "scissor" && computerValue == "paper") {
        winningWord == "cuts";
    } else if (userValue == "paper" && computerValue == "rock") {
        winningWord = "covers";
    } else if (userValue == "scissor" && computerValue == "lizard") {
        winningWord = "decapitates";
    } else if (userValue == "paper" && computerValue == "spock") {
        winningWord = "disproves";
    } else if (userValue == "lizard" && computerValue == "paper") {
        winningWord = "eats";
    } else if (userValue == "lizard" && computerValue == "spock") {
        winningWord = "poisons";
    } else if (userValue == "spock" && computerValue == "rock") {
        winningWord = "vaporizes";
    } else if (userValue == "spock" && computerValue == "scissor") {
        winningWord = "smashes";
    } return winningWord;
}
     
function handleComputerWinningWord(userValue, computerValue) {
    if (computerValue == "rock" && userValue == "scissor" || computerValue == "rock" && userValue == "lizard") {
        computerWinningWord = "crushes";
    } else if (computerValue == "scissor" && userValue == "paper") {
        computerWinningWord == "cuts";
    } else if (computerValue == "paper" && userValue == "rock") {
        computerWinningWord = "covers";
    } else if (computerValue == "scissor" && userValue == "lizard") {
        computerWinningWord = "decapitates";
    } else if (computerValue == "paper" && userValue == "spock") {
        computerWinningWord = "disproves";
    } else if (computerValue == "lizard" && userValue == "paper") {
        computerWinningWord = "eats";
    } else if (computerValue == "lizard" && userValue == "spock") {
        computerWinningWord = "poisons";
    } else if (computerValue == "spock" && userValue == "rock") {
        computerWinningWord = "vaporizes";
    } else if (computerValue == "spock" && userValue == "scissor") {
        computerWinningWord = "smashes";
    } return computerWinningWord;
}   
    

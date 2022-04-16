let userChoice;
let userValue;
let userChoiceNumber;
let userWins = 0;
let computerValue;
let computerValueNumber;
let computerWins = 0;
let draws;


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
    selectComputerValue();
     if (userValue == "rock" && computerValue == "scissor" || userValue == "scissor" && computerValue == "paper" 
     || userValue == "paper" && computerValue == "rock" || userValue == "rock" && computerValue == "lizard" 
     || userValue == "scissor" && computerValue == "lizard" || userValue == "paper" && computerValue == "spock" 
     || userValue == "lizard" && computerValue == "paper" || userValue == "lizard" && computerValue == "spock" 
     || userValue == "spock" && computerValue == "rock" || userValue == "spock" && computerValue == "scissor"){
            userWins++;
            para.textContent = "Player Won!";
            paraUserWins.textContent = `${userWins}`;
            console.log(`Player won!${userValue} beats ${computerValue}!`);
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
            para.textContent = "Computer won!";
            paraComputerWins.textContent = `${computerWins}`;
            console.log(`Computer won!${computerValue} beats ${userValue}!`);
            if (computerWins == 5){
                para.textContent = "Computer won the game!";
                disableButtons();  
            }
        }
    }  

let userChoice;
let userValue;
let userChoiceNumber;
let userWins = 0;
let computerValue;
let computerValueNumber;
let computerWins = 0;
let draws;


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


const para = document.getElementById('resultText');
const paraUserWins = document.getElementById('userWins');
const paraComputerWins = document.getElementById('computerWins');


paraUserWins.textContent = 0;
paraComputerWins.textContent = 0;


function selectComputerValue(){
    let computerValueNumber = Math.floor(Math.random()*3 +1);
    (computerValueNumber == 1) ? computerValue = "rock" : 
    (computerValueNumber == 2) ? computerValue = "paper" : 
    computerValue = "scissor";
    
    return computerValue; 
}

function getRoundWinner(userValue, selectComputerValue){
    userValue = userChoice;
    selectComputerValue();
     if (userValue == "rock" && computerValue == "scissor" || userValue == "scissor" && computerValue == "paper" || userValue == "paper" && computerValue == "rock"){
            userWins++;
            para.textContent = "Player Won!";
            paraUserWins.textContent = `${userWins}`;
            console.log("Player won!");
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
            console.log("Computer won!");
            if (computerWins == 5){
                para.textContent = "Computer won the game!";
                disableButtons();  
            }
        }
    }  

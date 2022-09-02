console.log('Online');
let playerScore = 0;
let computerScore = 0;
     
function getComputerChoice (){
    let items = ['Rock', 'Paper', 'Scissors'];
    var item = items[Math.floor(Math.random()*items.length)];
    item = item.toLowerCase();
    return item;
}

function gameMechanics(computerSelection, playerSelection) {
    if (playerScore == 5) {
        resultMatch.textContent = 'Player Wins';
        computerScore = 0;
        playerScore = 0;
    }

    else if (computerScore == 5){
        resultMatch.textContent = 'Computer Wins';
        computerScore = 0;
        playerScore = 0;
    }

    else if (computerScore < 6 || playerScore < 6){
        if ((computerSelection == 'rock' && playerSelection == 'scissors')
            || (computerSelection=='paper' && playerSelection=='rock')
            || (computerSelection=='scissors' && playerSelection=='paper')) {
                computerScore+=1
            return `Computer Wins, ${computerSelection} beats ${playerSelection}`;
        }
        else if (computerSelection == playerSelection) {
            return `Draw! You both played ${playerSelection}`;
        }   
        else if (((playerSelection == 'rock' && computerSelection == 'scissors')
            || (playerSelection=='paper' && computerSelection=='rock')
            || (playerSelection=='scissors' && computerSelection=='paper'))) {
                playerScore += 1;
                return `Player Wins, ${playerSelection} beats ${computerSelection}`
        }
    }
}
let result = document.querySelector('.results');
let heading = document.createElement('h2');
heading.textContent = 'Results';
result.appendChild(heading);
let playerResults = document.createElement('p');
let computerResults = document.createElement('p');
let computerControl = document.createElement('p');

playerResults.textContent = `Score: ${playerScore}`;
let resultRound = document.createElement('h1');
resultMatch = document.createElement('h1');
result.appendChild(resultRound);
result.appendChild(computerControl);
result.appendChild(resultMatch);
result.appendChild(playerResults);
result.appendChild(computerResults);

       

function game() {
    const rockbtn = document.querySelector('.rock');
    const paperbtn = document.querySelector('.paper');
    const scissorsbtn = document.querySelector('.scissors');
    let playerSelection = '';

    rockbtn.addEventListener('click', () => {
        playerSelection = 'rock';
        let computerSelection = getComputerChoice();
        computerResults.textContent = `Score: ${computerScore}`;
        computerControl.textContent = `Computer Played ${computerSelection}`
        playerResults.textContent = `Score: ${playerScore}`;
        resultRound.textContent = gameMechanics(computerSelection, playerSelection);
  });
    paperbtn.addEventListener('click', () => {  
        playerSelection = 'paper';
        let computerSelection = getComputerChoice();
        computerResults.textContent = `Score: ${computerScore}`;
        computerControl.textContent = `Computer Played ${computerSelection}`
        playerResults.textContent = `Score: ${playerScore}`;
        resultRound.textContent = gameMechanics(computerSelection, playerSelection);
  });
    scissorsbtn.addEventListener('click', () => { 
        playerSelection = 'scissors';
        let computerSelection = getComputerChoice();
        computerResults.textContent = `Score: ${computerScore}`;
        computerControl.textContent = `Computer Played ${computerSelection}`
        playerResults.textContent = `Score: ${playerScore}`;
        resultRound.textContent = gameMechanics(computerSelection, playerSelection);
    }); 
}
game();


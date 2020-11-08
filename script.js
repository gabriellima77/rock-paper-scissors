
let options = ['Rock', 'Paper', 'Scissors'];
/*
    so begin with a function called computerPlay that will randomly return
    either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/

function computerPlay(){
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

/*
    Write a function that plays a single round of Rock Paper Scissors. The function should
    take two parameters - the playerSelection and computerSelection - and then return a
    string that declares the winner of the round like so: "You Lose! Paper beats Rock"
*/

function playRound(player, computer, score){
    if(player === computer){
        return `It's a Tie! ${player} and ${computer} are equal.`; 
    }
    else if( (player.length > computer.length) || (player === 'Rock' && computer === 'Scissors') ){
        score[0] += 1;
        return `You Win! ${player} beats ${computer}.`;
    }
    else {
        score[1] += 1;
        return `You Lose! ${computer} beats ${player}.`;
    }
}


function validMove(move){
    for(let i = 0; i < options.length; i++){
        if(move === options[i]){
            return true;
        }
    }
    return false;
}

function game(){
    let score = [0, 0];
    for(let i = 0; i < 5; i++){
        let playerSelection;
        do{
            playerSelection = prompt("--- Let's play Rock, Paper, Scissors ---\n--- Make your move: ").toLowerCase();
            playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
        }
        while(!validMove(playerSelection));
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection, score));
    }
    if(score[0] > score[1]){
        alert(`You won! Congratulations!\nPlayer: ${score[0]}\nComputer: ${score[1]}`);
    }
    else if(score[1] > score[0]){
        alert(`You Lose! But you are Awesome anyway!\nPlayer: ${score[0]}\nComputer: ${score[1]}`);
    }
    else{
        alert(`It's a Tie!\nPlayer: ${score[0]}\nComputer: ${score[1]}`);
    }
}

game();

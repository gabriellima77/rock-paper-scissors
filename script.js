
const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let score = [0, 0];
let click = false;

function computerPlay(){
    let index = Math.floor(Math.random() * 3);
    return OPTIONS[index];
}

function playRound(player, computer){
    if(!player) return;
    let para = document.querySelector('#result');
    if(player === computer){
        para.textContent = `It's a Tie! ${player} and ${computer} are equal.`; 
    }
    else if( (player.length > computer.length) || (player === 'Rock' && computer === 'Scissors') ){
        score[0] += 1;
        document.querySelector('#player').textContent = score[0];
        para.textContent = `You Won! ${player} beats ${computer}.`;
        getWinner();
    }
    else {
        score[1] += 1;
        document.querySelector('#pc').textContent = score[1];
        para.textContent = `You Lose! ${computer} beats ${player}.`;
        getWinner();
    }
}

function getWinner(){
    if(score[0] > 4 || score[1] > 4){
        let para = document.querySelector('#result');
        if(score[0] > score[1]){
            para.textContent = 'You won! Congratulations!';
        }
        else{
            para.textContent = 'You Lose! But you are Awesome anyway!';
        }
        let start = document.querySelector('#start');
        start.textContent = 'Play Again';
        start.style.display = 'block';
    }
    return;
}

function game(e){
    score[0] = 0;
    score[1] = 0;
    document.querySelector('#player').textContent = score[0];
    document.querySelector('#pc').textContent = score[1];

    e.target.style.display = 'none';
    if(!click){
        let cards = Array.from(document.querySelectorAll('.card'));
        cards.forEach(card => card.addEventListener('click', (e)=>{
            if(score[0] < 5 && score[1] < 5){ 
                let playerMove = e.target.alt;
                let computerSelection = computerPlay();
                playRound(playerMove, computerSelection, score);
            }
            return;
        }));
        click = true;
    }
}

let start = document.querySelector('#start');
start.addEventListener('click', game);

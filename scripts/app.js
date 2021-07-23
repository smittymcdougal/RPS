let playerSelection
let computerSelection
let playerScore = 0
let computerScore= 0
let games;
let buttons = document.querySelectorAll('button')
let p = document.createElement('p')
let scores = document.getElementById('scores')
let img = document.createElement('i')

let playerSection = document.getElementById('playerSection')
let computerSection = document.getElementById('computerSection')
let play1 = document.getElementById('play1')
let play2 = document.getElementById('play2')
let playerPara = document.createElement('p')
let computerPara = document.createElement('p')



const myArray = ['rock', 'paper', 'scissors']


function computerPlay(){
    randomNumber = Math.floor(Math.random()* myArray.length)
    computerSelection = myArray[randomNumber]
    computerPara.textContent= computerSelection 
    play2.append(computerPara)
    return computerSelection;
}
function playerPlay(){
    buttons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            playerSelection = button.id
            playerPara.textContent = playerSelection
            play1.append(playerPara)
            playRound(playerSelection, computerSelection)
        
        })
    })

}

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay()
    console.log(playerSelection, computerSelection)
    if(computerSelection === playerSelection){
        p.textContent = `draw`
    }else if (computerSelection === 'rock' && playerSelection ==='scissors' ||
    computerSelection ==='paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection ==='paper'){
        computerScore++
        p.textContent = `${playerScore} / ${computerScore}`
        scores.appendChild(p)
        
    }else{
        playerScore ++
        p.textContent = `${playerScore} / ${computerScore}`
        scores.appendChild(p)
    }
}


playerPlay()




let playerSelection
let computerSelection
let playerScore = 0
let computerScore= 0
let games = 0

function computerPlay(){
    let compPlay = Math.floor(Math.random() * 3)
    if(compPlay === 0){
        computerSelection = "rock"
        return computerSelection
    }else if(compPlay === 1){
        computerSelection = "paper"
        return computerSelection
    }else{
        computerSelection = "scissors"
        return computerSelection
    }
}

function playerPlay(){
    let playerPlay = prompt('rock paper or scissors')
    if(playerPlay === 'rock'){
        playerSelection = 'rock'
        return playerSelection
    }else if(playerPlay === 'paper'){
        playerSelection = 'paper'
        return playerSelection
    }else if(playerPlay === 'scissors'){
        playerSelection = 'scissors'
        return playerSelection
    }

}

function game(){
    computerPlay()
    playerPlay()
    console.log(playerSelection + " " + computerSelection)
    if(playerSelection === computerSelection){
        console.log('draw')
    }else if(playerSelection === 'rock' && computerSelection ==='paper'){
        console.log('computer + 1')
        computerScore += 1
    }else if(playerSelection === 'paper' && computerSelection ==='scissors'){
        console.log('computer + 1')
        computerScore += 1
    }else if(playerSelection ==='scissors' && computerSelection ==='rock'){
        console.log('computer + 1')
        computerScore += 1
    }else{
        console.log('player + 1')
        playerScore += 1
    }
    
        
    
}

while(games < 5){
    game()
    games +=1
    console.log(`player: ${playerScore} / computer: ${computerScore}`)
}

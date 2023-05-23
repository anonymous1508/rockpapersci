const computerchoice= document.getElementById("computer-choice");
const userchoice= document.getElementById("user-choice");
const result= document.getElementById("result");
const possiblechoices= document.querySelectorAll('button');
let userChoice
let computerChoice
possiblechoices.forEach(possiblechoice=> possiblechoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userchoice.innerHTML=userChoice
    generateComputerChoice()
}))
function generateComputerChoice(){
    const randomno= Math.floor(Math.random()*3)+1
    console.log(randomno)

    if(randomno===1){
        computerChoice='rock'
    }
    if(randomno===2){
        computerChoice='scissor'
    } if(randomno===3){
        computerChoice='paper'
    }
    computerchoice.innerHTML=computerChoice
    getresult();
}
function getresult(){
    if(computerChoice===userChoice){
        result.innerHTML='Draw!!'
    }
    if(computerChoice=== "rock" && userChoice==="paper"){
        result.innerHTML="You are the winner"
    }
    if(computerChoice=== "paper" && userChoice==="rock"){
        result.innerHTML="Aw! you lose"
    } 
    if(computerChoice=== "scissor" && userChoice==="paper"){
        result.innerHTML="Aw! you lose"
    }
    if(computerChoice=== "paper" && userChoice==="scissor"){
        result.innerHTML="You are the winner"
    }
    if(computerChoice=== "scissor" && userChoice==="rock"){
        result.innerHTML="You are the winner"
    }
    
    
}
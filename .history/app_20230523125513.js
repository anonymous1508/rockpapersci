const computerchoice= document.getElementById("computer-choice");
const userchoice= document.getElementById("user-choice");
const result= document.getElementById("result");
const possiblechoices= document.querySelectorAll('button');
let userChoice
possiblechoices.forEach(possiblechoice=> possiblechoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userchoice.innerHTML=userChoice
    generateComputerChoice()
}))
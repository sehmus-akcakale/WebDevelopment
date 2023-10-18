const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");
var yScore = document.querySelector(".yourScore");
var cScore = document.querySelector(".computerScore");
var yourChoice = document.querySelector(".yourChoice");
var computerChoice = document.querySelector(".computerChoice");
const startButton = document.querySelector(".start-game-button")
const gamePage = document.querySelector(".game-page");
const startPage = document.querySelector(".start-page");
var yourScore = 0 ; 
var computerScore = 0 ; 

function determineWinner(user, computer) {
    yourChoice.innerHTML = user;
    computerChoice.innerHTML = computer;
    if (user === computer){
        console.log("Game is Tie")
    }else{
        switch (user){
            case "rock":
                if(computer === "scissors"){
                    yourScore++;
                    yScore.innerHTML= yourScore.toString();
                }else {
                    computerScore++;
                    cScore.innerHTML= computerScore.toString();
                }
                break;
            case "paper":
                if(computer === "rock"){
                    yourScore++;
                    yScore.innerHTML= yourScore.toString();
                }else{
                    computerScore++;
                    cScore.innerHTML= computerScore.toString();
                }
                break;
            case "scissors":
                if(computer==="paper"){
                    yourScore++;
                    yScore.innerHTML = yourScore.toString();
                }else{
                    computerScore++;
                    cScore.innerHTML = computerScore.toString();
                }
                break;
        }

    }
    
}
function getComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
rock.addEventListener("click" , () =>{
    let computerChoice = getComputerChoice();
    let userChoice = "rock";
    determineWinner(userChoice, computerChoice);
})
paper.addEventListener("click" , () =>{
    let computerChoice = getComputerChoice();
    let userChoice = "paper";
    determineWinner(userChoice, computerChoice);
})

scissor.addEventListener("click" , () =>{
    let computerChoice = getComputerChoice();
    let userChoice = "scissors";
    determineWinner(userChoice, computerChoice);
})

startButton.addEventListener("click",() =>{
    gamePage.classList.remove("cannot-see");
    startPage.classList.add("cannot-see");
})


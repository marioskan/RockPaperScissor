let userScore=0;
let computerScore=0;
let userScore_span=document.getElementById("user-score");
let computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");


function getComputerChoice(){
    const choices=['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord1(userChoice) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function convertToWord2(computerChoice) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML= computerScore;
    result_p.innerHTML= "You had " + convertToWord1(userChoice) + " VS " + convertToWord2(computerChoice);
    console.log("win");
}

function lose(userChoice, computerChoice){
     computerScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML= "You had " + convertToWord1(userChoice) + " VS " + convertToWord(computerChoice);
     console.log("lose");
}

function draw(userChoice, computerChoice){
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     result_p.innerHTML= "You had " + convertToWord1(userChoice) + " VS " + convertToWord2(computerChoice);
     console.log("Draw");
}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;   
    } 
}

function main () {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissor_div.addEventListener('click', function() {
    game("s");
})
}
main();
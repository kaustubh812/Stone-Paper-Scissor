// Made two variables for open button & close button
let openRulesTab = document.querySelector("#rules_button");
let closeRulesTab = document.querySelector("#close");


openRulesTab.addEventListener("click",function(){
    document.body.classList.add("rulesTab-active");
})

closeRulesTab.addEventListener("click",function(){
    document.body.classList.remove("rulesTab-active");
})




// Here we started the logic behind the code

// Declaring the variables for your and computer score

let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

// Giving addEventListener to every action

document.getElementById("rock_option").addEventListener("click",function(){
    playRound("rock");
});

document.getElementById("paper_option").addEventListener("click",function(){
    playRound("paper");
});

document.getElementById("scissors_option").addEventListener("click",function(){
    playRound("scissors");
});

// Writing the function for playRound function

function playRound(playerChoice) {
    // Generating a random computer choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Determining the winner of round
    if (playerChoice === computerChoice) {
        // It's a tie
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        // You wins the round
        playerScore++;
    } else {
        // Computer wins the round
        computerScore++;
    }
    

    // Now here we update the scores into scorecard section
    document.querySelector(".win.you").textContent = playerScore;
    document.querySelector(".win.com").textContent = computerScore;
}
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
    updateScores(); // Calls the function to update and save the scores
});

document.getElementById("paper_option").addEventListener("click",function(){
    playRound("paper");
    updateScores();
});

document.getElementById("scissors_option").addEventListener("click",function(){
    playRound("scissors");
    updateScores(); 
});

// Writing the function for playRound function

function playRound(playerChoice) {
    // Generating a random computer choice
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Store the computer's choice in local storage
    localStorage.setItem("computerChoice", computerChoice);

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
        // Redirect to playerwin.html
        window.location.href = "playerwin.html";
    } else {
        // Computer wins the round
        computerScore++;
    }
    

    // Now here we update the scores into scorecard section
    document.querySelector(".win.you").textContent = playerScore;
    document.querySelector(".win.com").textContent = computerScore;
}

// Saves the scores to local storage
function updateScores(){

    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);

}

// Now we have to load the scores from local storage when the page loads

window.addEventListener('load', function(){
    let storedPlayerScore = localStorage.getItem('playerScore');
    let storedComputerScore = localStorage.getItem('computerScore');

    if (storedPlayerScore !== null) {
        playerScore = parseInt(storedPlayerScore);
        document.querySelector(".win.you").textContent = playerScore;
    }

    if (storedComputerScore !== null){
        computerScore = parseInt(storedComputerScore);
        document.querySelector(".win.com").textContent = computerScore
    }
});



document.getElementById("rock_option").addEventListener("click", function () {
    // Store the player's choice in local storage
    localStorage.setItem("playerChoice", "rock");
});

document.getElementById("scissors_option").addEventListener("click", function () {
    // Store the player's choice in local storage
    localStorage.setItem("playerChoice", "scissors");
});

document.getElementById("paper_option").addEventListener("click", function () {
    // Store the player's choice in local storage
    localStorage.setItem("playerChoice", "paper");
});
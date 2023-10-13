// Function to update the scorecard with values from local storage
function updateScoresFromLocalStorage() {
    // Try to get the scores from local storage
    const playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
    const computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

    // Update the scorecard elements in the HTML
    const playerScoreElement = document.querySelector(".win.you");
    const computerScoreElement = document.querySelector(".win.com");

    if (playerScoreElement && computerScoreElement) {
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }
}

// Call the updateScoresFromLocalStorage function when the page loads
window.addEventListener('load', function () {
    updateScoresFromLocalStorage();
});

// Code for the play again button

// Function to handle the "PLAY AGAIN" button click
function playAgain() {
    // Redirect to the index.html page
    window.location.href = "index.html";
}

// Find the "playbutton" element and add a click event listener
const playButton = document.getElementById("playbutton");
if (playButton) {
    playButton.addEventListener("click", playAgain);
}

function hurrayPage(){
    // Redirect to the hurray.html page
    window.location.href = "hurray.html";
}

// Find the "nextbutton" element and add a click event listener
const nextButton = document.getElementById("next_button");
if(nextButton){
    nextButton.addEventListener("click", hurrayPage);
}


// Example code in playerwin.html to retrieve and display choices
const playerChoice = localStorage.getItem("playerChoice");
const computerChoice = localStorage.getItem("computerChoice");

// Map the choice names to the corresponding image file names
const choiceImageMap = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissor.png",
};

// Get the image elements
const player = document.getElementById("player");
const computer = document.getElementById("computer");

// Set the src attribute of the image elements based on the choices
if (playerChoice && computerChoice) {
    player.src = choiceImageMap[playerChoice];
    computer.src = choiceImageMap[computerChoice];
}



if (playerChoice && computerChoice) {
    // Display the choices in the HTML
    document.querySelector("#playerChoice").textContent = `You picked: ${playerChoice}`;
    document.querySelector("#computerChoice").textContent = `Computer picked: ${computerChoice}`;
} 


// Inside the playRound function after determining the winner
const resultText = document.querySelector("h2");

if (playerChoice === computerChoice) {
    resultText.textContent = "It's a TIE";
} else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
) {
    // You win
    resultText.textContent = "YOU WON";
} else {
    // Computer wins
    resultText.textContent = "YOU LOST";
}



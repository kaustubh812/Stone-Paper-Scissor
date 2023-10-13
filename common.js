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

const choiceStyleMap = {
    rock: {
        borderColor: '#0074B6',
        backgroundColor: 'white',
    },
    paper: {
        borderColor: '#ffa943',
        backgroundColor: 'white',
    },
    scissors: {
        borderColor: '#BD00FF',
        backgroundColor: 'white',
    },
};

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
    
    function applyChoiceStyles(element, choice) {
        element.style.borderRadius = "50%";
        element.style.borderStyle = "solid";
        element.style.borderWidth = "17px";
        element.style.padding = "20px";
        element.style.height = "60px";
        element.style.width = "60px";
        element.style.backgroundColor = "white";
        element.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
    
        if (choice === "rock") {
            element.style.borderColor = "#0074B6";
        } else if (choice === "scissors") {
            element.style.borderColor = "#BD00FF";
            element.style.transform = "rotate(5.27deg)";
        } else if (choice === "paper") {
            element.style.borderColor = "#ffa943";
        }
    }
    
    if (playerChoice) {
        applyChoiceStyles(player, playerChoice);
    }
    
    if (computerChoice) {
        applyChoiceStyles(computer, computerChoice);
    }
    
    
}

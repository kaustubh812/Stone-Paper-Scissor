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

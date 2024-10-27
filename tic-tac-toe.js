document.addEventListener("DOMContentLoaded", function() {

    // Select all div elements within the game board
    const squares = document.querySelectorAll('#board div'); // Select all <div> elements inside the element with id="board"
    
    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add('square');
    });
   // Determine whose turn it is (true for X and false for O)
   let isXTurn = true;

   // Initialize an array to keep track of the game state after each square is clicked
   let gameGrid = Array(9).fill(null);

   // Flag to indicate if the game has been won
   let hasGameBeenWon = false;

   // Define winning combinations (rows, columns, and diagonals)
   const winningPatterns = [
       [0, 1, 2], // Top row
       [3, 4, 5], // Middle row
       [6, 7, 8], // Bottom row
       [0, 3, 6], // Left column
       [1, 4, 7], // Middle column
       [2, 5, 8], // Right column
       [0, 4, 8], // Diagonal from top-left to bottom-right
       [2, 4, 6]  // Diagonal from top-right to bottom-left
   ];
    // Change style on mouseover
    square.addEventListener('mouseover', function() {
        square.classList.add('hover'); // Add the hover class
    });

    // Change style back on mouseout
    square.addEventListener('mouseout', function() {
        square.classList.remove('hover'); // Remove the hover class
    });
    // Function to check for a winner
    function verifyWinner() {
        for (let pattern of winningPatterns) {
            const [a, b, c] = pattern;
            if (gameGrid[a] && gameGrid[a] === gameGrid[b] && gameGrid[a] === gameGrid[c]) {
                return gameGrid[a]; // Return 'X' or 'O' if there's a winner
            }
        }
        return null; // No winner yet
    }

    // Function to update the status when there's a winner
    function displayWinner(winner) {
        const statusDisplay = document.getElementById('status');
        statusDisplay.textContent = `Congratulations! ${winner} is the Winner!`; // Display winner message
        statusDisplay.classList.add('you-won'); // Add the 'you-won' class for styling
        hasGameBeenWon = true; // Set the hasGameBeenWon flag to true, indicating the game has ended
    }
});




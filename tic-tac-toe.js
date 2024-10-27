document.addEventListener("DOMContentLoaded", function() {

    // Select all div elements within the game board
    const squares = document.querySelectorAll('#board div'); // Select all <div> elements inside the element with id="board"
    
    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add('square');
    });

    // --------------------------------------------------------------
    // Exercise 2
    // --------------------------------------------------------------

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

    // Loop through each square to add mouseover and mouseout events
    squares.forEach(function(square, index) {
        // Change style on mouseover
        square.addEventListener('mouseover', function() {
            square.classList.add('hover'); // Add the hover class
        });

        // Change style back on mouseout
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover'); // Remove the hover class
        });

        // Click event listener for each square
        square.addEventListener('click', function() {
            // Prevent further moves if the game has already been won
            if (hasGameBeenWon) {
                alert("The game is over. Please start a new game.");
                return;
            }

            // Ensure the square has not been clicked before
            if (gameGrid[index] === null) {
                // Place 'X' or 'O' in the square based on the current turn
                if (isXTurn) {
                    square.textContent = 'X';  // Place an X
                    square.classList.add('X');  // Add class X for styling
                    gameGrid[index] = 'X';     // Update game state
                } else {
                    square.textContent = 'O';  // Place an O
                    square.classList.add('O');  // Add class O for styling
                    gameGrid[index] = 'O';     // Update game state
                }

                // Check for a winner after each move
                const winner = verifyWinner();
                if (winner) {
                    displayWinner(winner); // Update the status with the winner's message
                    return; // Stop the game once there's a winner
                }

                // Switch turns
                isXTurn = !isXTurn;
            } else {
                // If the square has already been clicked, show red background
                square.style.backgroundColor = 'red';
                alert("Square already used! Please select another square.");
                setTimeout(function() {
                    square.style.backgroundColor = ''; // Reset background color
                }, 1500); // 1.5 secs
            }
        });
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

    const newGameButton = document.querySelector('.btn');
    newGameButton.addEventListener('click', restartGame);

    function restartGame() {
        gameGrid = Array(9).fill(null); // Reset game state
        squares.forEach(function(square) {
            square.textContent = ''; // Clear X's and O's
            square.classList.remove('X', 'O'); // Remove X and O classes
            square.style.backgroundColor = ''; // Clear background color
        });
        const statusDisplay = document.getElementById('status');
        statusDisplay.textContent = 'Move your mouse over a square and click to play an X or an O.'; // Reset status message
        statusDisplay.classList.remove('you-won'); // Remove the 'you-won' class
        isXTurn = true; // Set to X's turn again
        hasGameBeenWon = false; // Reset the hasGameBeenWon flag
    }
});

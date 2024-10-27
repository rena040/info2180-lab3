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

})

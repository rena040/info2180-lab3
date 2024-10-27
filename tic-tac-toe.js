document.addEventListener("DOMContentLoaded", function() {

    // Select all div elements within the game board
    const squares = document.querySelectorAll('#board div'); // Select all <div> elements inside the element with id="board"
    
    // Loop through each div and add the 'square' class
    squares.forEach(function(square) {
        square.classList.add('square');
    });
})
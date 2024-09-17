const game = document.getElementById('game');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createGrid() {
    for (let i = 0; i < 9; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        game.appendChild(div);
    }
}

function highlightMole() {
    const items = document.querySelectorAll('.grid-item');
    const randomIndex = Math.floor(Math.random() * items.length);

    items.forEach(item => 
        item.classList.remove('mole')
    );

    items[randomIndex].classList.add('mole');
}

function whackMole(event) {
    if (event.target.classList.contains('mole')) {
        score++;
        scoreDisplay.textContent = score;
        highlightMole();
    }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    createGrid();
    highlightMole();
    game.addEventListener('click', whackMole);
});
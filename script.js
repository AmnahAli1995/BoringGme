document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    // Simple game logic
    const gameArea = document.getElementById('game-area');
    gameArea.innerHTML = '';

    const target = document.createElement('div');
    target.style.width = '50px';
    target.style.height = '50px';
    target.style.backgroundColor = 'red';
    target.style.position = 'absolute';
    target.style.left = Math.random() * 250 + 'px';
    target.style.top = Math.random() * 250 + 'px';

    gameArea.appendChild(target);

    target.addEventListener('click', () => {
        alert('You Win!');
        startGame(); // Restart game
    });
}

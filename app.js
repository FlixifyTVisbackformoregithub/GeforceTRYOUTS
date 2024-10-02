document.addEventListener('DOMContentLoaded', () => {
    const gameGrid: HTMLElement = document.getElementById('gameGrid') as HTMLElement;

    // Example of fetching game data
    const games = [
        {name: "Game 1", img: "path/to/image1.jpg"},
        {name: "Game 2", img: "path/to/image2.jpg"},
        {name: "Game 3", img: "path/to/image3.jpg"}
    ];

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `<img src="${game.img}" alt="${game.name}"><h3>${game.name}</h3>`;
        gameGrid.appendChild(gameCard);
    });

    document.getElementById('playNowButton')?.addEventListener('click', () => {
        alert("Starting the game!");
    });
});

import { startGame } from "./startGame.js";

export const createGameMenu = () => {
    const gameSection = document.querySelector('.game-section-container');
    const title = document.createElement('h2')

    gameSection.innerHTML = '';
    title.textContent = 'Выбор сложности';
    title.classList.add('game-menu-title')
    document.querySelector('.confetti').innerHTML = '';

    const createDifficultButton = (difficult) => {
        const button = document.createElement('button');

        button.classList.add('game-menu-difficult-btn');
        button.textContent = `${difficult} карт`;

        button.addEventListener('click', () => startGame(difficult));
        return button;
    }

    gameSection.append(title, createDifficultButton(10), createDifficultButton(12),createDifficultButton(14), createDifficultButton(16))
}
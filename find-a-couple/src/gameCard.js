export const createGameCard = (defaultIcon, flipped) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const notFlipped = document.createElement('i');
    const flippedCard = document.createElement('img');

    notFlipped.classList.add('fa', `fa-${defaultIcon}`);
    flippedCard.setAttribute('src', '/chase.png');

    card.append(flippedCard, notFlipped);

    return card;
}
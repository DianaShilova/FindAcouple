export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconArray = (initialCount) => {
    const cadsIcons = [
        '/ryder.webp',
        '/chase.png',
        '/marshal.png',
        '/Skye.png',
        '/rocky.webp',
        '/Rubble.webp',
        '/zuma.webp',
        '/everest.webp',
    ];

    switch(initialCount) {
        case 10:
            return cadsIcons.slice(0, 5);
        case 12:
            return cadsIcons.slice(0, 6);
        case 14:
            return cadsIcons.slice(0, 7);
        case 16:
            return cadsIcons;
        default:
            break;
    }
}
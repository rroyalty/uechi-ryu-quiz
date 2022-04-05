export function shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    };
};
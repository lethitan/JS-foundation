function Pocker(numberOfPlayer) {
    let result = [];
    let cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
    if (numberOfPlayer < 2 || numberOfPlayer > 4) {
        return null;
    }
    for(let i = 0; i < numberOfPlayer; i++) {
        result.push([]);
    }
    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < numberOfPlayer; j++) {
            let random = Math.floor(Math.random() * cards.length);
            result[j].push(cards[random]);
            cards.splice(random, 1);
        }
    }
    //console.log(result.length);
    return result;
}

const print = Pocker(2);

for (let i = 0; i < print.length; i++) {
    // for (let j = 0; j < print[i].length; j++) {
    console.log(print[i]);
    // }
}

// let cards = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13]
// let random = Math.floor(Math.random() * cards.length);
// cards.splice(cards.indexOf(random), 1);
// console.log(cards.length);
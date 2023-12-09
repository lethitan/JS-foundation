

function devideCards(numberOfPlayer) {
    if (Number.isSafeInteger(numberOfPlayer) && numberOfPlayer > 2 && numberOfPlayer < 4) {
        const players = new Array(numberOfPlayer);
        const baseCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        const fullCards = [];
        for (const card of baseCard) {
            fullCards.push(card + "♠")
            fullCards.push(card + "♥")
            fullCards.push(card + "♦")
            fullCards.push(card + "♣")
        }
        for (let i = 0; i < numberOfPlayer; i++) {
            players[i] = [];
        }
        const pickedCard = [];
        while (!isDivideCompleted(players)) {
            for (let i = 0; i < players.length; i++) {
                let j;
                do {
                    j = Math.floor(Math.random() * fullCards.length);
                }
                while (pickedCard.includes(fullCards[j]))            
                players[i].push(fullCards[j]);
                pickedCard.push(fullCards[j]);
            }
        }
        return players;
    } else {
        throw "Invalid number of players";
    }
}

function isDivideCompleted(players) {
    for (const player of players) {
        if (player.length == 13) {
            return true;
        } else {
            return false;
        }
    }
}


//=============== Test=================

console.log(JSON.stringify(devideCards(3)));
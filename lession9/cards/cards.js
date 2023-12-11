class Cards {
    #baseCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    #fullCards = [];
    numberOfPlayer;

    constructor(numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
    }
    get fullCards() {
        for (const card of this.#baseCards) {
            this.#fullCards.push(card + "♠")
            this.#fullCards.push(card + "♥")
            this.#fullCards.push(card + "♦")
            this.#fullCards.push(card + "♣")
        }
        return this.fullCards;
    }

    devideCards(numberOfPlayer, cardsPerOne, callback) {
        const players = new Array(numberOfPlayer);
        for (let i = 0; i < numberOfPlayer; i++) {
            players[i] = [];
        }
        const pickedCard = [];
        while (!callback(players, cardsPerOne)) {
            for (let i = 0; i < players.length; i++) {
                let j;
                do {
                    j = Math.floor(Math.random() * this.#fullCards.length);
                }
                while (pickedCard.includes(this.fullCards[j]))
                players[i].push(this.#fullCards[j]);
                pickedCard.push(this.#fullCards[j]);
            }
        }
        return players;
    }

}

class Tienlen extends Cards {
    #cardsPerOne = 13;
    numberOfPlayer;
    constructor(numberOfPlayer) {
        super();
        this.devide = this.devideCards(this.numberOfPlayer,this.#cardsPerOne, this.isDivideCompleted(numberOfPlayer,this.#cardsPerOne))
        this.numberOfPlayer = numberOfPlayer;
    }

    isDivideCompleted(players, cardsPerOne) {
        for (const player of players) {
            if (player.length == cardsPerOne) {
                return true;
            } else {
                return false;
            }
        }
    }

    devide() {
        if (Number.isSafeInteger(numberOfPlayer) && numberOfPlayer > 2 && numberOfPlayer < 4) { 
           // this.devideCards(numberOfPlayer,this.#cardsPerOne);
        } else {
            throw "Invalid number of players";
        }
    }
}

let tienlen = new Tienlen(3);
tienlen.devide();

class XiDach extends Cards {
    #cardsPerOne = 2;
    numberOfPlayer;
    constructor(numberOfPlayer) {
        super();
        this.devide = this.devideCards(this.numberOfPlayer,this.#cardsPerOne)
        this.isDivideCompleted = this.isDivideCompleted(this.numberOfPlayer,this.#cardsPerOne)
        this.numberOfPlayer = numberOfPlayer;
    }

    devide() {
        if (Number.isSafeInteger(numberOfPlayer) && numberOfPlayer > 2 && numberOfPlayer < 10) { 
           // this.devideCards(numberOfPlayer,this.#cardsPerOne);
        } else {
            throw "Invalid number of players";
        }
    }
}
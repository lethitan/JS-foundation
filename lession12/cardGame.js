const PLAYTYPES = {
    TIEN_LEN: "Tien Len",
    XI_DACH: "Xi Dach"
};

class CardGame {
    constructor(playType, numberOfPlayers) {
        this.playType = playType;
        this.numberOfPlayers = numberOfPlayers;
        this.maxPlayers = this.getMaxPlayers();
        this.maxCards = this.getMaxCards();
        this.fullCards = this.prepareCards();
        this.players = this.initializePlayers();
        this.pickedCards = [];
    }

    prepareCards() {
        const baseRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        return baseRanks.flatMap((v) => [v + '♠', v + '♣', v + '♥', v + '♦']);
    }

    getMaxPlayers() {
        throw new Error("getMaxPlayers should be overridden in the child class");
    }

    getMaxCards() {
        throw new Error("getMaxCards should be overridden in the child class");
    }

    initializePlayers() {
        if (this.numberOfPlayers >= 2 && this.numberOfPlayers <= this.maxPlayers) {
            const players = new Array(this.numberOfPlayers);
            for (let i = 0; i < this.numberOfPlayers; i++) {
                players[i] = [];
            }
            return players;
        } else {
            throw new Error(`Number of players must be between 2 and ${this.maxPlayers} for ${this.playType}!`);
        }
    }

    isDividedCompleted() {
        return this.players.every((player) => player.length === this.maxCards);
    }


    divideCards() {
        while (!this.isDividedCompleted()) {
            for (let i = 0; i < this.players.length; i++) {
                let j;
                do {
                    j = Math.floor(Math.random() * this.fullCards.length);
                } while (this.pickedCards.includes(this.fullCards[j]));
                this.players[i].push(this.fullCards[j]);
                this.pickedCards.push(this.fullCards[j]);
            }
        }
        return this.players;
    }

    run() {
        try {
            const result = this.divideCards();
            console.log(JSON.stringify(result));
            return result;
        } catch (error) {
            console.log(`Error in cardgame : ${error.message}`);
        }
    }
}

export class TienLen extends CardGame {
    constructor(numberOfPlayers) {
        super(PLAYTYPES.TIEN_LEN, numberOfPlayers);
    }

    getMaxPlayers() {
        return 4;
    }

    getMaxCards() {
        return 13;
    }
}

export class XiDach extends CardGame {
    constructor(numberOfPlayers) {
        super(PLAYTYPES.XI_DACH, numberOfPlayers);
    }

    getMaxPlayers() {
        return 10; //Assum maximum player of XiDach is 10
    }

    getMaxCards() {
        return 2;
    }
}

// function createGameInstance(playType, numberOfPlayers) {
//     switch (playType) {
//         case PLAYTYPES.TIEN_LEN:
//             return new TienLen(numberOfPlayers);
//         case PLAYTYPES.XI_DACH:
//             return new XiDach(numberOfPlayers);
//         default:
//             throw new Error(`Invalid playType: ${playType}`);
//     }
// }

// const gameTestSuite = [
//     { playType: PLAYTYPES.TIEN_LEN, numberOfPlayers: 2, testName: '[GAME_TEST_CASE_1] Tien Len Game with 2 players' },
//     { playType: PLAYTYPES.TIEN_LEN, numberOfPlayers: 3, testName: '[GAME_TEST_CASE_2] Tien Len Game with 3 players' },
//     { playType: PLAYTYPES.TIEN_LEN, numberOfPlayers: 4, testName: '[GAME_TEST_CASE_3] Tien Len Game with 4 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 2, testName: '[GAME_TEST_CASE_4] Xi Dach Game with 2 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 3, testName: '[GAME_TEST_CASE_5] Xi Dach Game with 3 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 4, testName: '[GAME_TEST_CASE_6] Xi Dach Game with 4 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 5, testName: '[GAME_TEST_CASE_7] Xi Dach Game with 5 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 6, testName: '[GAME_TEST_CASE_8] Xi Dach Game with 6 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 7, testName: '[GAME_TEST_CASE_9] Xi Dach Game with 7 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 8, testName: '[GAME_TEST_CASE_10] Xi Dach Game with 8 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 9, testName: '[GAME_TEST_CASE_11] Xi Dach Game with 9 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 10, testName: '[GAME_TEST_CASE_12] Xi Dach Game with 10 players' },


//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 1, testName: '[GAME_TEST_CASE_13] Xi Dach Game with 1 players' },
//     { playType: PLAYTYPES.XI_DACH, numberOfPlayers: 11, testName: '[GAME_TEST_CASE_14] Xi Dach Game with 11 players' },
//     { playType: PLAYTYPES.TIEN_LEN, numberOfPlayers: 1, testName: '[GAME_TEST_CASE_15] Tien Len Game with 1 players' },
//     { playType: PLAYTYPES.TIEN_LEN, numberOfPlayers: 5, testName: '[GAME_TEST_CASE_16] Tien Len Game with 5 players' },
//     { playType: "Poker", numberOfPlayers: 4, testName: '[GAME_TEST_CASE_17] Poker Game with 4 players' },

// ];



// function runGameTestSuite(gameTestSuite) {
//     gameTestSuite.forEach((testCase, index) => {
//         console.log(`Running Game Test Case ${index + 1}: ${testCase.testName}`);
//         try {
//             const game = createGameInstance(testCase.playType, testCase.numberOfPlayers);
//             const result = game.run();
//             console.log('Game Test Passed! Result:', result);
//         } catch (error) {
//             console.error(`Game Test Failed! Error: ${error.message}`);
//         }
//         console.log('----------------------');
//     });
// }

// runGameTestSuite(gameTestSuite);
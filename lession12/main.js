import { TienLen, XiDach } from "./cardGame.js";

const RULES = {
    tienlen: {
        min: 2,
        max: 4,
        default: 2,
        type: TienLen
    },
    xidach: {
        min: 2,
        max: 10,
        default: 2,
        type: XiDach
    }
}
document.forms.gameInfo.onsubmit = async (event) => {
    event.preventDefault();
    let submittedData = new FormData(document.forms.gameInfo);
    let data = [...submittedData.entries()];
    let dataObj = {};
    for (const entry of data) {
        let [key, value] = entry;
        dataObj[key] = value;
    }
    let game = new RULES[dataObj.gameType].type(dataObj.numberOfPlayers);
    let deck = game.divideCards();
    let playerArea = createGameArea(game.numberOfPlayers);

    for (let i = 0; i < game.maxCards; i++) {
        for (let j = 0; j < game.numberOfPlayers; j++) {
            let cardElement = document.createElement("div");
            cardElement.textContent = deck[j][i];
            cardElement.className = "italic text-white font-semibold text-xl font-serif";
            cardElement.classList.add("myCard");
            cardElement.setAttribute("id", `c${i + 1}`)
            playerArea[j].appendChild(cardElement);
            await new Promise((resolve) => { setTimeout(resolve, 300) });
            cardElement.appendChild(createCard());
        }
    }
};

function createCard() {
    const wrapper = document.createElement("div");
    wrapper.classList = "innerCard";

    const frontSide = document.createElement("div");
    const backSide = document.createElement("div");
    frontSide.classList = "frontSide";
    backSide.classList = "backSide";
    wrapper.appendChild(frontSide);
    wrapper.appendChild(backSide);

    return wrapper;
}

function createGameArea(numberOfPlayers) {
    let gameAreaElement = document.getElementById("gameArea");
    gameAreaElement.classList.add(`grid-rows-${numberOfPlayers + 1}`)
    gameAreaElement.replaceChildren([]);
    let players = [];
    for (let i = 0; i < numberOfPlayers; i++) {
        let playerNode = document.createElement("div");
        playerNode.className = "main";
        let playerName = document.createElement("div");
        let displayCards = document.createElement("div");
        playerName.textContent = `Player ${i + 1}`;
        let br = document.createElement("br");
        playerNode.appendChild(br);
        playerName.className = "italic text-pink-600/100 font-semibold text-2xl font-serif";
        playerNode.appendChild(playerName);
        playerNode.appendChild(displayCards);
        displayCards.classList.add("flex", "flex-wrap", "gap-3");
        gameAreaElement.appendChild(playerNode);
        players.push(displayCards);
    }
    return players;
}

document.getElementById("gameType").onchange = (event) => {
    let currentValue = event.target.value;
    console.log(currentValue);
    let numberOfPlayerElement = document.getElementById("numberOfPlayers")
    numberOfPlayerElement.min = RULES[currentValue].min;
    numberOfPlayerElement.max = RULES[currentValue].max;
    numberOfPlayerElement.value = 2;
}
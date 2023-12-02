function Pocker(numberOfPlayer) {
    const result = [];
    if (numberOfPlayer < 2 || numberOfPlayer > 4) {
        return null;
    }
    while (result.length < numberOfPlayer) {
        let player = [];
        for (let i = 0; i < 13; i++) {
            let randNumber = Math.floor(Math.random() * 12);
            if (checkPocker(randNumber, result, player) < 4) {
                player.push(randNumber);
            } else {
                --i;
            }
        }
        console.log(player);
        result.push(player);
        //console.log(result.length);

    }
    return result;
}

function checkPocker(num, pocker, player) {
    if (pocker.length === 0) {
        return 0;
    }
    let count = 0;
    for (let i = 0; i < pocker.length; i++) {
        for (let j = 0; j < pocker[i].length; j++) {
            if (pocker[i][j] === num) {
                count++;
                // console.log(count + " " + num);
            }
        }
    } 
    if (player.length > 0) {
        for (let j = 0; j < player.length; j++) {
            if (player[j] === num) {
                count++;
                // console.log(count + " " + num);
            }
        }
    }
    return count;
}

//=============== Test=================

console.log( Pocker(9))
console.log( Pocker(0))
const print = Pocker(4);

for (let i = 0; i < print.length; i++) {
    // for (let j = 0; j < print[i].length; j++) {
    console.log(print[i]);
    // }
}
// for (let i = 0; i < 13; i++) {
//     console.log(checkPocker(i, print))
// }



// function ranNum() {
//     return
// }
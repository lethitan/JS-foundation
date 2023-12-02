function startCount(seconds, callback) {
    callback(seconds, printer);
}

function countUp(seconds, callback) {
    let current = 0;
    const timer = setInterval(function count () {
        current++;
        if (current <= seconds) {
            callback(current);
        } else {
            clearInterval(timer);
            console.log("Done !")
        }
    }, 1000);
}

//countUp(10,printer);


function countDown(seconds, callback) {
    let current = seconds;
    const time = setInterval(function count() {
    if (current <= 0) {
        clearTimeout(time);
        console.log("Done !")
    } else {
        callback(current);
        current--;
    }
}, 1000);
}

//countDown(10,printer);

function printer(number) {
    console.log(number);
}

startCount(10, countUp);

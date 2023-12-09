function clock(second,callback){
    callback(second);
}

async function countUp(second){
    for(let i =0; i< second;i++){
        await new Promise(
            resolve => setTimeout(resolve,1000));
            console.log(i+1);
    } 
}


async function countDown(second){
    for(let i =second; i > 0;i--){
        await new Promise(
            resolve => setTimeout(resolve,1000));
            console.log(i);
    } 
}

// countDown(10)

clock(10,countDown)
clock(10,countUp)

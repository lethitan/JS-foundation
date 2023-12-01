// let map = new Map();

// map.set("name", "Abc");
// map.set("age", "23");

// let obj = { "name": "DEF" };

// console.log(map);
// console.log(obj);

// console.log(map.get("name"));
// console.log(map.has("namess"));

// // map.delete("name");
// map.clear();
// console.log(map);

// let obj = { 1: "Abc" };
// console.log(obj);

// function doSomething() {
//     console.log("hahaha");
// }
// let map = new Map();
// map.set("doSomething", doSomething);
// a.get("doSomething");

// let arr = [1, 1, 4, 5, 6, 6, 7];

// let mySet = new Set(arr);
// console.log(mySet);
// mySet.add(12341);
// console.log(mySet);

// console.log(mySet.has(1));
// console.log(mySet.has(12341));
// mySet.add(12341);
// console.log(mySet);

// let arrB = [...mySet];
// console.log(arrB);
// arrB.push(1);
// console.log(arrB);

// let arr = [1, 1, 4, 5, 6, 6, 7];
// let arrB = [...arr, 9, 10, 11];
// console.log(arrB);

// let obj = {
//     "name": "abc",
//     "age": 20
// }

// let objB = {...obj,
//     "address": "123 ba ha"
// }

// console.log(objB);

// console.log(Math.floor(Math.random() * 100));


// function random(N) {
//     const arr = [];

//     while (arr.length < N) {
//         const randNumber = Math.floor(Math.random() * N);

//         if (!arr.includes(randNumber)) {
//             arr.push(randNumber);
//         }
//     }

//     return arr;
// }

// console.log(random(3));


function random(N, min, max) {
    const arr = [];

    while (arr.length < N) {
        const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!arr.includes(randNumber)) {
            arr.push(randNumber);
        }
    }

    if (N > (max - min + 1) || max < min) {
        return null; //error case
    }

    return arr;
}

console.log(random(10, 1, 10))
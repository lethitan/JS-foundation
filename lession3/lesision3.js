// let arr = ["a","b","c"];

// console.log(arr);

// let arrNumber=[1,2,3];
// console.log(arrNumber);
// console.log(arrNumber[0]);
// console.log(arrNumber[arrNumber.length-1]);

// arrNumber[5]=5;
// console.log(arrNumber);
// console.log(arrNumber[4]);

// const arr = ["a","b","c"];
// arr[0] = "b";
// console.log(arr);


// const arr = new Array("a","b","c");
// console.log(arr);

// const arr = new Array(1,2,3);
// // console.log(arr);
// const arr2 = new Array(6);
// console.log(arr2);
// console.log(arr2.length);
// console.log(arr2[5]);


// const arr =[1,"nn",{
//     name: "ac",
//     age:12
// }, [2,3,4]];

// console.log(arr);
// console.log(typeof arr);


// const arr = new Array("a","b","c");
// arr[arr.length]="Tan";
// console.log(arr);
// arr.push("Choco");
// console.log(arr);
// arr.unshift("hehee");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);

// const arr = ["a","b","c"];
// arr.splice(1,0,"d","f");
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// const arr = ["a","b","c"];
// console.log(arr);
// console.log(arr.slice(1,3));


// const arr = ["a","b","c"];
// console.log(arr);
// console.log(arr.slice(1,3));

// const arr = ["a","b","c"];
// console.log(arr.join("_"));
// console.log(arr.join());
// console.log(arr.join(""));


// const arr = ["a","b","c","d"];
// delete arr[1];
// console.log(arr);

// const arr = ["g","f","c","d"];
// console.log(arr.sort());
// console.log(arr.sort().reverse());


// const arr = [1,7,10,13,20,29,30];
// console.log(arr.sort());
// console.log(arr.sort(function(a,b){
//     return a-b;
// }));

// const students =  [
//     {
//         studentName :"Minh",
//         age:17
//     },
//     {
//         studentName :"Choco",
//         age:10
//     },
//     {
//         studentName :"Son Cho",
//         age:15
//     },
//     {
//         studentName :"Cho Truong",
//         age:16
//     }
// ];

// var all = students.sort(function(a,b){
//     return a.studentName.localeCompare(b.studentName);
// // });
// var all = students.sort(function(a,b){
//     return a.age- b.age;
// });
// console.log(all[0].studentName + all[1].studentName + all[2].studentName + all[3].studentName)


// console.log(new Date());
// console.log(new Date().toTimeString());
// console.log(new Date().toUTCString());
//console.log(new Date("10-11-2023"));

// new Date()
// new Date(date) // string
// new Date(year,month);
// new Date(year,month,day);
// new Date(year,month,day,hour);
// new Date(year,month,day,hour,minutes);
// new Date(year,month,day,hour,minutes,seconds);
// new Date(year,month,day,hour,minutes,seconds,ms);

// function add(a,b){
//     console.log(a+b);
// }
// let a = add(1,4);
// console.log(a)


// function add(a,b){
//     return a+b;
// }
// let a = add(1,4);
// console.log(a)


// const add= function(a,b){
//     return a+b;
// }
// console.log(add(2,5))

// const add=(a,b) => {
//     return a+b;
// }
// console.log(add(2,5));

// let add=(a,b) => {
//     return a+b;
// }
// add = 1;
// console.log(add(2,5));


// console.log(add(1,4));
// function add(a,b){
//     return a+b;
// // }

function doSomething(a,b,c){
    function do2(b){
        return a+b;
    }
    function do3(c){
        return a+c;
    }
    return do2(b) + do3(c);
}
console.log(doSomething(5,2,3));


// function dodo(a){
//     return a * a;
// }
// function add(a,b){
//    return a +b(a -1);
// };
// console.log(add(2,dodo));


// function adds(a,b, ...more){
//     console.log(a);
//     console.log(b);
//     console.log(more);
// }
// adds(1,2,3,4,5,6);

// function dodo(){
// console.log(arguments);
// }

// dodo(1,2,3,4,5);

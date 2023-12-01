
// let a = 6;
// if (a == 5) {
//     console.log("equal 5");
// } else if (a == 6) {
//     console.log("equal 6");
// } else {
//     console.log("Not equal");
// }

// function getDayOfWeek(dayIndex) {
//     if (dayIndex == 0)
//         return "Monday";

//     if (dayIndex == 1)
//         return "Tuesday";

//     if (dayIndex == 2)
//         return "Wednesday";

//     if (dayIndex == 3)
//         return "Thurday";

//     if (dayIndex == 4)
//         return "Friday";

//     if (dayIndex == 5)
//         return "Saturday";

//     if (dayIndex == 6)
//         return "Sunday";
//     else
//         return "Not a day of week"

// }

// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));
// console.log(getDayOfWeek(7));

// false
// null
// undefined
// ""
// 0
// NaN

// if (Infinity) {
//         console.log("Haha");
//     } else {
//         console.log("hihi");
// }

// function add(a,b){
//     if(a != undefined && b!= undefined && a != null && b!= null && typeof a == "number" && typeof b == "number"){
//         return a+b;
//     } else 
//     return null;
// }

// console.log(add(2,5));

// let a = 0;
// function learnSwitch(a) { //sosanh tuyet doi
//     switch (a) {
//         case 0: console.log("it's 0");
//         break;
//         case 1: console.log("it's 1");
//         break;
//         case "tan": console.log("Hes looo");
//         break;
//         default: console.log("by default");
//     }
// }

// learnSwitch(a);
// learnSwitch("tan");

// function getDayOfWeek(dayIndex) {
//     switch (dayIndex) {
//         case 0:
//             return "Monday";
//         case 1:
//             return "Tuesday";
//         case 2:
//             return "Wednesday";
//         case 3:
//             return "Thurday";
//         case 4:
//             return "Friday";
//         case 5:
//             return "Saturday";
//         case 6:
//             return "Sunday";
//         default:
//             return "Not a day of week"
//     }
// // }

// function add(a,b){
//     if(typeof a != "number" || typeof b != "number"){
//         throw "Invalid input";
//     } else
//     console.log(a + b);
// }

// add(1,7);

function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw Error("Invalid data");
    }
    return a / b;
}
try {
    console.log(divide(null, 2));
} catch (error) {
    console.log("Invalid data 2");
}
finally{
    console.log("Invalid data 3");
}

//typeError
//RangeError
//EvalError
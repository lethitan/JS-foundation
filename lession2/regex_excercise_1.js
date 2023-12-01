const regex = /^(?!.*\.{2,})(?!^\.)[a-zA-Z0-9#$%&'*+\-/=?^{}]+(\.[a-zA-Z0-9#$%&'*+\-/=?^{}]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

let email = "ta/.m@gmail.com";
console.log(regex.test(email));

// let email = "ta..m@gmail.com";
// console.log(regex.test(email));

// let email = "ta.m@gmail.com.";
// console.log(regex.test(email));



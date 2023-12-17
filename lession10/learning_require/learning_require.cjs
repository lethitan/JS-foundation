// (() => {
//   const myGroup = require("./sub_modules/my_group");
//   console.log(myGroup.groupName);
//   console.log(myGroup.admin);
//   myGroup.print();
//   myGroup.admin ="Tan";
//   console.log(myGroup.admin);
//   myGroup.print();
// })();

const myGroup = require("./sub_modules/my_group.cjs");

console.log(myGroup.myGroupName);
console.log(myGroup.myAdmin);
myGroup.myPrinter();

const myClass = require("./sub_modules/my_class.cjs");
console.log(myClass);
let clazz = new myClass();
clazz.print();
const groupName = "Test With Me";
let admin = "Tho Test";

function print(){
  console.log(`Welcome to group ${groupName} - Admin ${admin}`);
}

// module.exports = {
//   groupName,
//   admin,
//   print
// }

module.exports = {
  myGroupName : groupName,
  myAdmin: admin,
  myPrinter: print
}
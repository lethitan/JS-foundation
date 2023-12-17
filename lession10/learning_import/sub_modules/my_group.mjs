// export const groupName = "Test With Me";
// export let admin = "Tho Test";

// export function print(){
//   console.log(`Welcome to group ${groupName} - Admin ${admin}`);
// }

 const groupName = "Test With Me";
 let admin = "Tho Test";

 function print(){
  console.log(`Welcome to group ${groupName} - Admin ${admin}`);
}

export{groupName as gr, admin as ad, print as pr}
// "use strict";
// import { gr, ad, pr } from "./sub_modules/my_group.mjs";
// import { MyClass } from "./sub_modules/my_class.mjs";
import * as myModule from "./sub_modules/my_export_all.mjs";

console.log(myModule.gr);
// console.log(ad);
myModule.pr();
 
let m = new myModule.MyClass();
m.print();

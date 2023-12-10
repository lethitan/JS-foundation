// class Car{
//     name;

//     constructor(name, color){
//         this.name = name
//         this.color = color
//     }

// set name(name){
//     name = this.name
// }
//      get name(){
//         return this.name
//      }
// }

// let car = new Car();
// console.log(car.name);

// car.name = "Toyota";
// console.log(car.name);


// let car = new Car("BMW","red");
// console.log(car.name);
// console.log(car.color);

// class Color{
//     constructor(r,g,b){
//         this.values = [r,g,b];
//     }

//     get red(){
//         return this.values[0];
//     }
// set red(value){
//     this.values[0] = value;
// }
// }

// const red = new Color(255,0,0);
// red.red = 0;
// console.log(red.red);

// class Car {
//     #branch
//     constructor(name, color, branch) {
//         this.name = name;
//         this.color = color;
//         this.#branch = branch;
//     }
//     set branch(branch) {
//         this.#branch = branch;
//     }

//     get branch(){
//         return this.#branch;
//     }

//     driving() {
//         return "I'm driving " + this.name +" "+ this.#hock();
//     }

//     decorate() {
//         return "I'm wearing " + this.color;
//     }
//     #hock(){
//         return "My sound so fancy !"
//     }
// }

// let car = new Car("MB", "red","Mes");
// console.log(car.driving());
// console.log(car.decorate());
// console.log(car.branch);

class Animal {
    #defaultName = "Animal";
    constructor(name) {
        this.name = name;
        this.#defaultAction
    }

    printName() {
        let na = this.name == undefined || this.name == null ? this.#defaultName : this.name;
        return "My name is " + na;
    }
    #defaultAction() {
        return "Default action";
    }
}

class Cat extends Animal{
    constructor(name,legs){
        super(name);
        this.legs = legs
    }
    sound(){
        return "Gou Gou"
    }

    printName(){
        return this.name;
    }
}

let cat = new Cat("KK");
console.log(cat.printName());
console.log(cat.sound());


let cat2 = new Cat();
console.log(cat2.printName());
console.log(cat2.defaulName);




class shapes {
    constructor(name) {
        this.name = name;
    }
    #defaultName = "Shape";
    printName() {
        let nm = this.name == undefined || this.name == null ? this.#defaultName : this.name;
        return nm;
    }
    // edges;
    acreage() {
        throw new Error("Something was wrong !");
    }

    perimeter() {
        throw new Error("Something was wrong !");
    }
}


class Rectangle extends shapes {
    #defaultPer;
    #defaultAcre;

    constructor(width, hight) {
        super("Rectangle");
        this.width = width;
        this.hight = hight;
        // this.#defaultPer = super.perimeter();
        // this.#defaultAcre = super.acreage();
    }

    perimeter() {
       // let p = this.hight == 0 || this.width == 0 || !Number.isSafeInteger(this.hight) || !Number.isSafeInteger(this.width) ? this.#defaultPer : (this.hight + this.width) * 2;
        return (this.hight + this.width) * 2;
    }

    acreage() {
       // let a = this.hight == 0 || this.width == 0 || !Number.isSafeInteger(this.hight) || !Number.isSafeInteger(this.width) ? this.#defaultAcre : this.hight * this.width;
        return this.hight * this.width;
    }
}
let rec = new Rectangle(6, 4);
console.log(rec.perimeter());
console.log(rec.acreage());
console.log(rec.name);


class Square extends shapes {
    constructor(edge) {
        super("Square");
        this.edge = edge;
    }

    acreage() {
        return Math.pow(this.edge, 2);
    }

    perimeter() {
        return 4 * this.edge;
    }
}

let square = new Square(6);
console.log(square.perimeter());
console.log(square.acreage());
console.log(square.name);


class Cycle extends shapes {
    constructor(r) {
        super("Cycle");
        this.r = r;
    }

    acreage() {
        return Math.PI * Math.pow(this.r, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.r;
    }
}

let cycle = new Cycle(6);
console.log(cycle.perimeter());
console.log(cycle.acreage());
console.log(cycle.name);


class Triangle extends shapes {
    constructor(a, b, c) {
        super("Triangle");
        this.a = a;
        this.b = b;
        this.c = c;
    }

    acreage() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    perimeter() {
        return this.a + this.b + this.c;
    }
}

let triangle = new Triangle(3,4,5);
console.log(triangle.perimeter());
console.log(triangle.acreage());
console.log(triangle.name);

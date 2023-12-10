class shapes {
    // name;
    // edges;
    acreage() {
        throw new Error("Something was wrong !");
    }

    perimeter() {
        throw new Error("Something was wrong !");
    }
    // constructor(name){
    //     this.name = name;
    // }
    // set Edges(edges) {
    //     edges = this.edges
    // }
    // get Edges() {
    //     return this.edges
    // }

    // set Name(name) {
    //     name = this.name;
    // }
    // get Name() {
    //     return this.name;
    // }
}


// let shapes = new Shapes("Triangle");
// console.log(shapes.name);

// shapes.name = "Reactangle";
// console.log(shapes.name);

class Rectangle extends shapes {
    constructor(width, hight) {
        super();
        this.width = width;
        this.hight = hight;
    }

    perimeter(){
        return (this.hight+this.width)*2;
    }

    acreage(){
        return  this.hight*this.width;
    }
}

let rec = new Rectangle("0",4);
console.log(rec.perimeter());
console.log(rec.acreage());

class Square extends shapes {
    constructor(edge) {
        super();
        this.edge = edge;
    }

    acreage() {
        return Math.pow(this.edge, 2);
    }

    perimeter() {
        return 4 * this.edge;
    }
}

class Cycle extends shapes {
    constructor(r) {
        super();
        this.r = r;
    }

    acreage() {
        return Math.PI * Math.pow(this.r, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.r;
    }
}

class Tritangle extends shapes {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    acreage() {
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    perimeter() {
        return this.canhA + this.canhB + this.canhC;
    }
}
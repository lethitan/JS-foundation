function quadraticEquation2(a, b, c) {
    if (a === 0) {
        throw console.error("Not a quadratic equation 2");
    }
    if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
        var delta = b * b - 4 * a * c;
        switch (true) {
            case delta > 0:
                var x1 = (-b + Math.sqrt(delta)) / (2 * a);
                var x2 = (-b - Math.sqrt(delta)) / (2 * a);
                return [x1, x2];
            case delta === 0:
                var x = -b / (2 * a);
                return [x];
            default:
                throw console.error("x not found !");
        }
    }
    else {
        throw console.error("Invalid data");
    }
}
try {
    console.log(quadraticEquation2(4, 2, 1));
} catch (error) {
}
function acreage(type, a) {
    if (a instanceof Array) {
        switch (type) {
            case "REC":
                if (a.length != 2) {
                    throw "it isn't a retangle";
                }
                if (typeof a[0] != "number" || typeof a[1] != "number") {
                    throw "input data is invalid";
                }
                if (a[0] == 0 || a[1] == 0) {
                    throw "Edge can't equal 0";
                }
                let acrREC = a[0] * a[1];
                console.log("acreage of rectangle: " + acrREC);
                break;
            case "TRI":
                if (a.length != 3) {
                    throw "it isn't a triangle  or input data is invalid ";
                } if (typeof a[0] != "number" || typeof a[1] != "number" || typeof a[2] != "number") {
                    throw "input data is invalid";
                }
                if (a[0] == 0 || a[1] == 0 || a[2] == 0) {
                    throw "Edge can't equal 0";
                }
                let p = (a[0] + a[1] + a[2]) / 2
                let h = 2 * (Math.sqrt(p * (p - a[0]) * (p - a[1]) * (p - a[2]))) / a[0];
                let acrTRI = 0.5 * a[0] * h;
                console.log("acreage of triangle: " + acrTRI);
                break;
            case "CY":
                if (a.length != 1) {
                    throw "it isn't a cycle";
                } if (typeof a[0] != "number") {
                    throw "input data is invalid";
                }
                if (a[0] == 0) {
                    throw "R can't equal 0";
                }
                const pi = 3.14;
                let acrCY = pi * a[0] * a[0];
                console.log("acreage of cycle: " + acrCY);
                break;
            default:
                throw "Not a rectangle or triangle or cycle";
        }
    } else
        throw "Please input a is an array";
}
try {
    acreage("REC", [6, 0]);
    // acreage("TRI",[1,3,3]);
    // acreage("CY",[3]);
} catch (error) {
    console.error(error);
}
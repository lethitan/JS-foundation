const TYPE = {
    REC : "REACTANGLE",
    TRI : "TRIANGLE",
    CY : "CYCLE",
}

function acreageRetangle(length, width){
    if (typeof length != "number" || typeof width != "number") {
        throw "input data is invalid";
    }
    if (length == 0 || width == 0) {
        throw "Edge can't equal 0";
    }
    return length*width;
}

function acreageTriangle(a,b,c){
    if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
        throw "input data is invalid";
    }
    if (a == 0 || b == 0 || c == 0) {
        throw "Edge can't equal 0";
    }
    let p = (a + b + c) / 2
    let h = 2 * (Math.sqrt(p * (p - a) * (p - b) * (p - c))) / a;
    return 0.5 * a * h;
}

function acreageCycle(r){
    if (typeof r != "number") {
        throw "input data is invalid";
    }
    if (r == 0) {
        throw "R can't equal 0";
    }
    const pi = 3.14;
    return pi * r * r;
}

function acreage(type, params) {
    let rs = 0;
    if(params instanceof Array){
        switch (type) {
            case TYPE.REC:
                if (params.length != 2) {
                    throw "it isn't a retangle";
                }
                rs = acreageRetangle(params[0],params[1]);
                break;
            case TYPE.TRI:
                if (params.length != 3) {
                    throw "it isn't a triangle";
                } 
                rs = acreageTriangle(params[0],params[1],params[2]);
                break;
            case TYPE.CY:
                if (params.length != 1) {
                    throw "it isn't a cycle";
                } 
                rs = acreageCycle(params[0]);
                break;
            default:
                throw "Not a rectangle or triangle or cycle";
        }
    } else
        throw "Please input edges in an array";
    return rs;
}
try {
    console.log(acreage(TYPE.REC, [6, 7]));
    // acreage("TRI",[1,3,3]);
    // acreage("CY",[3]);
} catch (error) {
    console.error(error);
}
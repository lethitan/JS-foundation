const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
     
let check = function(s) {
    if (s.length % 2 === 1) return false;
    if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false;
    if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false;
    
    let check = [];
    
    for(let i=0; i<s.length; i++) {
        if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
            check.push(s[i]);
        } else if (pairs[check.pop()] !== s[i]) {
            return false;
        }
        
    }
    return check.length === 0
    
};

console.log(check("()["));
console.log(check("()[]{}"));
console.log(check("(]"));
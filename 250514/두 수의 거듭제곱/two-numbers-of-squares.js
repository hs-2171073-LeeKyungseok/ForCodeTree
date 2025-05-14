const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [a, b] = input.map(Number);
// Please Write your code here. 
let n;
let m;
let sum = 0;
function Mul(n, m) {
    sum = n;
    for(let i = 1; i < m; i++) {
        sum *= n;
    }
    return sum;
}
console.log(Mul(a,b));
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
// Please write your code here.
function swap(a, b) {
    let tmp = a
    a = b
    b = tmp
    console.log(a + " " + b)
}

swap(n, m)

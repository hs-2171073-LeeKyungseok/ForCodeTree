const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]); // 첫 번째 정수 n
let m = Number(input[1]); // 두 번째 정수 m

// Please Write your code here.

function getGCD(num1, num2) {
    let a = num1;
    let b = num2;

    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}

const result = getGCD(n, m);

console.log(result);
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.
let num = 1;
let result = "";

for (let i = 0; i < N; i++) {
    let line = "";
    for (let j = 0; j < N; j++) {
        line += num + " ";
        num++;
        if (num === 10) num = 1; // 9 다음에는 다시 1
    }
    result += line.trim() + "\n";
}

console.log(result.trim());
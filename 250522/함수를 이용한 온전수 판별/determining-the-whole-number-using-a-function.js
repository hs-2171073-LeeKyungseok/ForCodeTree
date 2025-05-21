const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b] = input[0].split(" ").map(Number);

// Please Write your code here.
function isValid(num) {
    // 조건 1: 2로 나누어 떨어지면 안 됨
    if (num % 2 === 0) return false;

    // 조건 2: 일의 자리가 5이면 안 됨
    if (num % 10 === 5) return false;

    // 조건 3: 3으로 나누어 떨어지고 9로는 안 나눠지면 안 됨
    if (num % 3 === 0 && num % 9 !== 0) return false;

    // 모든 조건을 피한 수 => 온전수
    return true;
}

let count = 0;
for (let i = a; i <= b; i++) {
    if (isValid(i)) count++;
}

console.log(count);
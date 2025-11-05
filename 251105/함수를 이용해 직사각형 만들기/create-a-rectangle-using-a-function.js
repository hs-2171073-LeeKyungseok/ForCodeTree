const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

// Please Write your code here.
function printRectangle(n, m) {
    // 1. 세로(행)를 n번 반복합니다.
    for (let i = 0; i < n; i++) {
        // 2. "*" 문자를 m번 반복한 문자열을 만듭니다.
        const row = "1".repeat(m);
        // 3. 완성된 한 줄을 출력합니다.
        console.log(row);
    }
}

printRectangle(n, m);
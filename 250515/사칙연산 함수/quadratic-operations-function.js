const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

if (o === "+") {
    console.log(`${a} + ${c} = ${a + c}`);
} else if (o === "-") {
    console.log(`${a} - ${c} = ${a - c}`);
} else if (o === "*") {
    console.log(`${a} * ${c} = ${a * c}`);
} else if (o === "/") {
    console.log(`${a} / ${c} = ${Math.floor(a / c)}`);  // 정수 부분만 출력
} else {
    console.log("False");
}
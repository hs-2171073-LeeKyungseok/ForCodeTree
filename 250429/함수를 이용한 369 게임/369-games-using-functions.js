const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function isValid(num) {
    const str = num.toString();
    return num %3 ===0 || str.includes('3') || str.includes('6')
    || str.includes('9');   
}

let count = 0;
for(let i = A; i <= B; i++ ) {
    if(isValid(i)) {
        count++;
    }
}
console.log(count);
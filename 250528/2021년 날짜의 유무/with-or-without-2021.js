const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.
function isValidYM(m,d) {
    const dayIn2021 = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if( m >= 1 && m <= 20) {
        if(d >= 1 && d <=dayIn2021[m]) {
            return "Yes"
        } else {
            return "No"
        }
    } else {
        return "No"
    }
    return "Yes"
}

console.log(isValidYM(m,d))

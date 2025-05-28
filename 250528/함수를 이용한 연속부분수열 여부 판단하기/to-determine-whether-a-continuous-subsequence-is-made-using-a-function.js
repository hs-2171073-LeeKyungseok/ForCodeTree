const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
function isContinuousSub(n1, n2) {
    const len_n1 = n1.length
    const len_n2 = n2.length

    if(len_n2 > len_n1) {
        return false
    }

    for(let i = 0; i<= len_n1 - len_n2; i++) {
        let isMatch = true
        for(let j = 0; j< len_n2; j++) {
            if(n1[i+j] !== n2[j]) {
                isMatch = false
                break
            }
        }
        if(isMatch) {
            return true
        }
    }

    return false
}

const result = isContinuousSub(a, b)

console.log(result ? 'Yes' : 'No')
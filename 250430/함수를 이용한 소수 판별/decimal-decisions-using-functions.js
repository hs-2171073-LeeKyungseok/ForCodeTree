const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
var n;
var a,b;
function  isPrime(n) {
    if( n < 2)  return false;
    for(let i = 2; i*i <= n; i++) {
        if(n%i == 0) return false;
    }
    return true;
}

function findPrime(a, b) {
    let sum = 0;
    for(let i = a; i <=b; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

console.log(findPrime(A,B));

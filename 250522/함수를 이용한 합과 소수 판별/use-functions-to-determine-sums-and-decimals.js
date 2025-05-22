    const fs = require("fs");
    const input = fs.readFileSync(0).toString().trim().split('\n');

    const [A, B] = input[0].split(" ").map(Number);

    // Please Write your code here.
    let count = 0;
    function isPrime(n) {
        if(n === 1) {
            return false;
        }
        for(let i = 2; i<=Math.sqrt(n); i++) {
            if(n % i == 0) {
                return false;
            }
        }
        return true;
    }

    function isDigitSumEven(n) {
        let sum = 0;
        while( n > 0) {
            sum += n % 10;
            n = Math.floor(n/10);
        }
        return sum %2 == 0;
    }
    for(let i = A; i<=B; i++) {
        if(isPrime(i) && isDigitSumEven(i)) {
            count++;
        }
    }
    console.log(count);

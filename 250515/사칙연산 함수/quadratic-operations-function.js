const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

    if(o.toString() == "+") {
        console.log(a + " + " + c + " = " + (a+c))
    }
    else if(o.toString() == "-") {
        console.log(a + " - " + c + " = " + (a-c))
    }
    else if(o.toString() == "*") {
        console.log(a + " * " + c + " = " + (a*c))
    }
    else if(o.toString() == "/") {
        console.log(a + " / " + c + " = " + (a/c))
    }
    else {
        console.log("False")
    }
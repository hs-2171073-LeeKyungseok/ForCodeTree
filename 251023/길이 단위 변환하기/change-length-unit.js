const CM_PER_FT = 30.48;
const CM_PER_MI = 160934;

let ft = 9.2;
let mi = 1.3;

let ftToCm = ft * CM_PER_FT;
let miToCm = mi * CM_PER_MI;

console.log(ft + "ft = " + ftToCm.toFixed(1) + "cm");
console.log(mi + "mi = " + miToCm.toFixed(1) + "cm");
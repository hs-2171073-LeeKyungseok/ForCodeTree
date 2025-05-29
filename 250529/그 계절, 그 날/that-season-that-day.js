const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
function isLeapYear(y) {
    return (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
}

function isValid(y, m, d) {
    if (y < 1 || y > 3000) return false;
    if (m < 1 || m > 12) return false;

    const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (m === 2 && isLeapYear(y)) {
        return d >= 1 && d <= 29;
    }
    return d >= 1 && d <= days[m];
}

function getSeason(m) {
    if (m >= 3 && m <= 5) return "Spring";
    if (m >= 6 && m <= 8) return "Summer";
    if (m >= 9 && m <= 11) return "Fall";
    return "Winter";
}

// 본문 실행
if (!isValid(year, month, day)) {
    console.log("-1");
} else {
    console.log(getSeason(month));
}


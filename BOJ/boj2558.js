const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const a = stdin[0];
const b = stdin[1];

console.log(a+b);

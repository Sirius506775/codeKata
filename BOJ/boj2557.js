const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let stdin = fs.readFileSync(filePath).toString().split(" ");

console.log('Hello World!');
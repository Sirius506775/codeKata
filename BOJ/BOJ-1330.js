const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let stdin = fs.readFileSync(filePath).toString().split(" ");

const a = Number(stdin[0]);
const b = Number(stdin[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}

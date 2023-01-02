const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let stdin = fs.readFileSync(filePath).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while (t--) {
  const [a, b] = input().split(" ").map(Number);
  console.log(a + b);
}

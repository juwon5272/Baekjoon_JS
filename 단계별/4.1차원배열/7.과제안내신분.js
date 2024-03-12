// https://www.acmicpc.net/problem/5597

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);
let submitted = Array(30).fill(false);

for (let i = 0; i < 28; i++) {
  submitted[input[i] - 1] = true;
}
let missing = [];
for (let i = 0; i < 30; i++) {
  if (!submitted[i]) {
    missing.push(i + 1);
  }
}
console.log(missing[0]);
console.log(missing[1]);

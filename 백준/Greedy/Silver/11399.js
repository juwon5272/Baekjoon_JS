// https://www.acmicpc.net/problem/11399

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let wait = input[0]
  .split(" ")
  .map((e) => Number(e))
  .sort((a, b) => a - b);
let cnt = +n;
for (let i = 0; i < +n; i++) {
  wait[i] *= cnt--;
}
console.log(wait.reduce((a, b) => a + b));

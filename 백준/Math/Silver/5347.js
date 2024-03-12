// https://www.acmicpc.net/problem/5347

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
let answer = [];
for (x of input) {
  let a = Math.max(x[0], x[1]);
  let b = Math.min(x[0], x[1]);
  for (let i = 1; i <= b; i++) {
    if ((a * i) % b == 0) {
      answer.push(a * i);
      break;
    }
  }
}
console.log(answer.join("\n"));

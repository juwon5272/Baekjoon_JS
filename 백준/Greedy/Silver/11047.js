// https://www.acmicpc.net/problem/11047

const [first, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, total] = first.split(" ").map((e) => +e);
let money = input.map((e) => +e);
let cnt = 0;
for (let i = n - 1; i >= 0; i--) {
  if (total / money[i] >= 1) {
    cnt += Math.floor(total / money[i]);
    total %= money[i];
  }
  if (total == 0) break;
}
console.log(cnt);

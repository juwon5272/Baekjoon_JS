// https://www.acmicpc.net/problem/1541

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("-");
let arr = [];
for (x of input) {
  let sum = x
    .split("+")
    .map((e) => +e)
    .reduce((a, b) => a + b);
  arr.push(sum);
}
let answer = arr[0] * 2 - arr.reduce((a, b) => a + b);
console.log(answer);

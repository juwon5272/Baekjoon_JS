// https://www.acmicpc.net/problem/2212
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const K = +input[1];
const spot = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let arr = [];
for (let i = 0; i < N - 1; i++) {
  arr.push(spot[i + 1] - spot[i]);
}
arr.sort((a, b) => b - a);
for (let i = K - 1; i < N - 1; i++) {
  answer += arr[i];
}
console.log(answer);

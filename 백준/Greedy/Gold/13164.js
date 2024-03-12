// https://www.acmicpc.net/problem/13164

const [a, input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let [N, K] = a.split(" ").map(Number);
let children = input.split(" ").map(Number);
let arr = [];
let answer = children[N - 1] - children[0];
for (let i = 0; i < N - 1; i++) {
  arr.push(children[i + 1] - children[i]);
}
arr.sort((a, b) => b - a);
for (let i = 0; i < K - 1; i++) {
  answer -= arr[i];
}
console.log(answer);

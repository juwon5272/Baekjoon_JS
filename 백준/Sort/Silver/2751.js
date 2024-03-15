// https://www.acmicpc.net/problem/2751

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
let answer = input.sort((a, b) => a - b);

console.log(answer.join("\n"));

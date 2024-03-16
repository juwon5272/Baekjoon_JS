// https://www.acmicpc.net/problem/1427

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((a, b) => b - a)
  .join("");

console.log(input);

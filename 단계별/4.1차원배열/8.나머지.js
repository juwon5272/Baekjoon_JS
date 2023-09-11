// https://www.acmicpc.net/problem/3052

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e) % 42);

let cnt = new Set(input);
console.log(cnt.size);

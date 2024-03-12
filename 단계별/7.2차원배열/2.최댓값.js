// https://www.acmicpc.net/problem/2566

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+|\n/)
  .map(Number);

let ans = Math.max(...input);
console.log(ans);
console.log(
  Math.floor(input.indexOf(ans) / 9) + 1,
  (input.indexOf(ans) % 9) + 1
);

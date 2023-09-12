// https://www.acmicpc.net/problem/2908

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("")
  .reverse()
  .join("")
  .split(" ");

console.log(Math.max(Number(input[0]), Number(input[1])));

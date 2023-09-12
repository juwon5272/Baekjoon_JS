// https://www.acmicpc.net/problem/11720

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let sum = 0;
let arr = input[1].split("");
arr.map((e) => (sum += Number(e)));

console.log(sum);

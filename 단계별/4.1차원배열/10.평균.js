// https://www.acmicpc.net/problem/1546

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let arr = input[1].split(" ").map((e) => Number(e));
let sum = 0;

arr.forEach((num) => {
  sum += num;
});
console.log(((sum / Math.max(...arr)) * 100) / n);

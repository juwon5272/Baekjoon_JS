// https://www.acmicpc.net/problem/2869

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));

let [A, B, V] = [input[0], input[1], input[2]];
let cnt = Math.ceil((V - A) / (-B + A)) + 1;
console.log(cnt);

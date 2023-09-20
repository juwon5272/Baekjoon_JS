// https://www.acmicpc.net/problem/1978

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let cnt = Number(input[0]);
let num = input[1].map((e) => Number(e));

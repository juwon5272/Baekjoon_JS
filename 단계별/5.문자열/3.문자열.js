// https://www.acmicpc.net/problem/9086

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let t = input[0];

for (let i = 1; i <= t; i++) {
  console.log(input[i][0] + input[i][input[i].length - 1]);
}

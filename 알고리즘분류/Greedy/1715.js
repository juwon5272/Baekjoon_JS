// https://www.acmicpc.net/problem/1715
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
input.sort((a, b) => a - b);

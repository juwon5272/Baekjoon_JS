// https://www.acmicpc.net/problem/1181

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let inputArr = Array.from(new Set(input));

inputArr
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length)
  .forEach((e) => console.log(e));

// https://www.acmicpc.net/problem/20115

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const drinks = input[1].split(" ").map(Number);

const max = Math.max(...drinks);
const answer = (drinks.reduce((a, b) => a + b) + max) / 2;

console.log(answer);

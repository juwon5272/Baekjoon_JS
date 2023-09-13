// https://www.acmicpc.net/problem/10988

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("");

input.join("") === input.reverse().join("") ? console.log(1) : console.log(0);

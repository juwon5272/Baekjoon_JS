// https://www.acmicpc.net/problem/10814

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = input.shift();
let point = input.map((e) => e.split(" "));
point.sort((a, b) => {
  if (Number(a[0]) !== Number(b[0])) {
    return Number(a[0]) - Number(b[0]);
  }
});

console.log(point.map((e) => e.join(" ")).join("\n"));

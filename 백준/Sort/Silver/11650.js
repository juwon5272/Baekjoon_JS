// https://www.acmicpc.net/problem/11650

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = input.shift();
let point = input.map((e) => e.split(" ").map(Number));
point.sort((a, b) => {
  if (a[0] == b[0]) {
    return a[1] - b[1];
  } else return a[0] - b[0];
});

console.log(point.map((e) => e.join(" ")).join("\n"));

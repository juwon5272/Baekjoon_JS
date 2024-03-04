// https://www.acmicpc.net/problem/1436

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((e) => +e));

const N = input.shift();
let sortArr = input.sort((a, b) => {
  if (b[1] / b[0] == a[1] / a[0]) {
    return a[0] - b[0];
  } else {
    return b[1] / b[0] - a[1] / a[0];
  }
});

console.log(sortArr);

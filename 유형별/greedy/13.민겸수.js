// https://www.acmicpc.net/problem/21314

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("");
let maxM = [];
let max = [];
let minM = [];
let min = [];
for (let i = 0; i < input.length; i++) {
  if (i == input.length - 1 && input[i] == "M") max.push("1");
  else if (input[i] == "M") maxM.push(0);
  else {
    max.push(5, maxM.join(""));
    maxM = [];
  }
  if (input[i] == "M" && (input[i + 1] == "K" || i == input.length - 1)) {
    min.push(1, minM.join(""));
    minM = [];
  } else if (input[i] == "M" && input[i + 1] == "M") minM.push(0);
  else min.push("5");
}
console.log(max.join(""));
console.log(min.join(""));

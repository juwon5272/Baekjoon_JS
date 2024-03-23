// https://www.acmicpc.net/problem/28278

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

let arr = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (input[i][0] == 1) {
    arr.push(input[i][1]);
  } else if (input[i][0] == 2) {
    if (arr.length) {
      answer.push(arr.pop());
    } else answer.push(-1);
  } else if (input[i][0] == 3) {
    answer.push(arr.length);
  } else if (input[i][0] == 4) {
    arr.length ? answer.push(0) : answer.push(1);
  } else if (input[i][0] == 5) {
    if (arr.length) {
      answer.push(arr[arr.length - 1]);
    } else answer.push(-1);
  }
}

console.log(answer.join("\n"));

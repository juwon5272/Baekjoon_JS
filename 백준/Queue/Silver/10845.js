// https://www.acmicpc.net/problem/10845

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((e) => e.split(" "));

let arr = [];
let answer = [];
for (let i = 0; i < +N; i++) {
  if (input[i][0] == "push") {
    arr.push(input[i][1]);
  } else if (input[i][0] == "pop") {
    if (arr.length) {
      answer.push(arr.shift(input[i][1]));
    } else answer.push(-1);
  } else if (input[i][0] == "size") {
    answer.push(arr.length);
  } else if (input[i][0] == "empty") {
    answer.push(arr.length ? 0 : 1);
  } else if (input[i][0] == "front") {
    answer.push(arr.length ? arr[0] : -1);
  } else if (input[i][0] == "back") {
    answer.push(arr.length ? arr[arr.length - 1] : -1);
  }
}

console.log(answer.join("\n"));

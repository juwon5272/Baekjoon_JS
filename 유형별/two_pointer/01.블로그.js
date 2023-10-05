// https://www.acmicpc.net/problem/21921

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((e) => Number(e)));
const N = input[0][0];
const X = input[0][1];
const visitors = input[1];
let find = 0;
for (let i = 0; i < X; i++) {
  find += visitors[i];
}
let max = find;
let cnt = 1;
for (let i = X; i < N; i++) {
  find = find - visitors[i - X] + visitors[i];
  if (max < find) {
    max = find;
    cnt = 1;
  } else if (max == find) {
    cnt++;
  }
}

if (max > 0) {
  console.log(max);
  console.log(cnt);
} else {
  console.log("SAD");
}

// https://www.acmicpc.net/problem/2738

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => e.split(" ").map(Number));

let [N, M] = input[0];
let arr = new Array(N).fill().map(() => new Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = input[i + 1][j] + input[i + N + 1][j];
  }
}

console.log(arr.join(`\n`).split(",").join(" "));

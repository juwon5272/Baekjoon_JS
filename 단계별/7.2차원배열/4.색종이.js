// https://www.acmicpc.net/problem/2563

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => e.split(" ").map(Number));

let cnt = input[0];
let board = new Array(100).fill().map((e) => new Array(100).fill(0));

for (let i = 1; i <= cnt; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      board[input[i][1] + j][input[i][0] + k] = 1;
    }
  }
}
let ans = 0;
for (let j = 0; j < 100; j++) {
  for (let k = 0; k < 100; k++) {
    if (board[j][k] != 0) ans++;
  }
}

console.log(ans);

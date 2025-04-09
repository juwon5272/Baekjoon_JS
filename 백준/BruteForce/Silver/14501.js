// https://www.acmicpc.net/problem/14501

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const schedule = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array(N + 1).fill(0);

for (let i = N - 1; i >= 0; i--) {
  const [t, p] = schedule[i];
  if (i + t <= N) {
    dp[i] = Math.max(p + dp[i + t], dp[i + 1]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);

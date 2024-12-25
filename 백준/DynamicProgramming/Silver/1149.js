const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const cost = input.slice(1).map((line) => line.split(" ").map(Number));

const DP = Array.from({ length: N }, () => Array(3).fill(0));

DP[0][0] = cost[0][0];
DP[0][1] = cost[0][1];
DP[0][2] = cost[0][2];

for (let i = 1; i < N; i++) {
  DP[i][0] = Math.min(DP[i - 1][1], DP[i - 1][2]) + cost[i][0];
  DP[i][1] = Math.min(DP[i - 1][0], DP[i - 1][2]) + cost[i][1];
  DP[i][2] = Math.min(DP[i - 1][0], DP[i - 1][1]) + cost[i][2];
}

const result = Math.min(DP[N - 1][0], DP[N - 1][1], DP[N - 1][2]);
console.log(result);

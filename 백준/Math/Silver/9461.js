// https://www.acmicpc.net/problem/9461

const [count, ...arr] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const result = [];

for (let i = 0; i < count; i++) {
  const dp = [1, 1, 1];
  for (let j = 3; j < Number(arr[i]) + 1; j++) {
    dp.push(dp[j - 3] + dp[j - 2]);
  }
  result.push(dp[arr[i] - 1]);
}
console.log(result.join("\n"));

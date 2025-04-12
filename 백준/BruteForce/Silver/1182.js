// https://www.acmicpc.net/problem/1182

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let count = 0;

function dfs(index, sum) {
  if (index === N) return;
  const newSum = sum + numbers[index];
  if (newSum === S) count++;
  dfs(index + 1, newSum);
  dfs(index + 1, sum);
}

dfs(0, 0);

console.log(count);

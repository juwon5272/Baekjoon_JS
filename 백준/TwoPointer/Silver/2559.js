// https://www.acmicpc.net/problem/2559

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

let N = input.shift();
let K = input.shift();
let sum = 0;
let left = 0;

for (let i = 0; i < K; i++) sum += input[i];
let max = sum;
for (let right = K; right < N; right++) {
  sum += input[right];
  sum -= input[left];
  left++;
  if (sum > max) max = sum;
}
console.log(max);

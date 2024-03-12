// https://www.acmicpc.net/problem/2003

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

const N = input.shift();
const M = input.shift();
let sum = 0;
let cnt = 0;
let left = 0;

for (let right = 0; right < N; right++) {
  sum += input[right];
  while (sum > M) {
    sum -= input[left++];
  }
  if (sum == M) {
    cnt++;
  }
}
console.log(cnt);

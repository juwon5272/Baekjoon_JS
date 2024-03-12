// https://www.acmicpc.net/problem/22862

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map((e) => +e));

const N = input[0][0];
const K = input[0][1];
const numbers = input[1];
let left = 0;
let maxLength = 0;
let oddCnt = 0;

for (let right = 0; right < N; right++) {
  if (numbers[right] % 2) oddCnt++;
  while (oddCnt > K) {
    if (numbers[left] % 2) oddCnt--;
    left++;
  }
  if (oddCnt <= K) maxLength = Math.max(maxLength, right - left - oddCnt + 1);
}
console.log(maxLength);

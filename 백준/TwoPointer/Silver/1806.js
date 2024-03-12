// https://www.acmicpc.net/problem/1806

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let sum = (left = 0);
let minLength = Infinity;

for (let right = 0; right < N; right++) {
  sum += numbers[right];
  while (sum >= K && left <= right) {
    sum -= numbers[left];
    if (sum < K) {
      minLength = Math.min(minLength, right - left + 1);
    }
    left++;
  }
}
console.log(minLength == Infinity ? 0 : minLength);

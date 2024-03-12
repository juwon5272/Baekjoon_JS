// https://www.acmicpc.net/problem/1253
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = parseInt(input.shift());
const numbers = input[0].split(" ").map(Number);
numbers.sort((a, b) => a - b);
let cnt = 0;
for (let i = 0; i < N; i++) {
  let left = 0;
  let right = N - 1;
  let target = numbers[i];
  let found = false;

  while (left < right) {
    if (left === i) {
      left++;
      continue;
    }
    if (right === i) {
      right--;
      continue;
    }
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      found = true;
      break;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  if (found) cnt++;
}

console.log(cnt);

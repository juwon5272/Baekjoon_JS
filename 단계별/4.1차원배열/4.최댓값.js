// https://www.acmicpc.net/problem/2562

const nums = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);
let max = nums[0];
let count = 0;
for (let i = 1; i < 9; i++) {
  if (nums[i] > max) {
    max = nums[i];
    count = i;
  }
}
console.log(max);
console.log(count + 1);

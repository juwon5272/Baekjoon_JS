// https://www.acmicpc.net/problem/22945

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const numbers = input[1].split(" ").map(Number);
let right = N - 1;
let left = 0;
let max = 0;
while (left < right) {
  max = Math.max(
    max,
    Math.min(numbers[left], numbers[right]) * (right - left - 1)
  );
  if (numbers[left] < numbers[right]) left++;
  else right--;
}
console.log(max);

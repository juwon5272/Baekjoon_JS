// https://www.acmicpc.net/problem/2470

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const numbers = input[1]
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let sum = Math.abs(numbers[right] + numbers[left]);
let ans_left = 0;
let ans_right = N - 1;
let ans = Math.abs(numbers[right] + numbers[left]);

while (left !== right) {
  sum = numbers[right] + numbers[left];
  if (Math.abs(ans) >= Math.abs(sum)) {
    ans = sum;
    ans_left = left;
    ans_right = right;
  }
  if (sum > 0) {
    right--;
  } else if (sum < 0) {
    left++;
  } else {
    break;
  }
}
console.log(numbers[ans_left], numbers[ans_right]);

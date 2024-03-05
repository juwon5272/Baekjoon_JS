// https://www.acmicpc.net/problem/2467

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map((e) => +e);

const N = input.shift();
input.sort((a, b) => a - b);
let left = 0;
let right = N - 1;
let min = Infinity;
let [minLeft, minRight] = [0, N - 1];
while (left < right) {
  let sum = 0;
  sum += input[left] + input[right];
  if (Math.abs(sum) < Math.abs(min)) {
    min = sum;
    [minLeft, minRight] = [input[left], input[right]];
  }
  if (sum < 0) {
    left++;
  } else if (sum > 0) {
    right--;
  } else {
    break;
  }
}
console.log(minLeft, minRight);

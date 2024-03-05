// https://www.acmicpc.net/problem/2018

const input = +require("fs").readFileSync("./input.txt").toString().trim();

let left = 1;
let sum = 0;
let cnt = input == 1 ? 0 : 1;

for (let right = 1; right <= Math.round(input / 2); right++) {
  sum += right;
  while (sum > input) {
    sum -= left++;
  }
  if (sum == input) cnt++;
}

console.log(cnt);

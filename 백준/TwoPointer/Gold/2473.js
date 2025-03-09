// https://www.acmicpc.net/problem/2473

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solution(N, arr) {
  let closestSum = Infinity;
  let result = [];

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(sum) < Math.abs(closestSum)) {
        closestSum = sum;
        result = [arr[i], arr[left], arr[right]];
      }

      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  console.log(result.join(" "));
}

solution(N, arr);

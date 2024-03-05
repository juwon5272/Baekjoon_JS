// https://www.acmicpc.net/problem/14719

function solution(height) {
  let answer = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        answer += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        answer += maxRight - height[right];
      }
      right--;
    }
  }
  return answer;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const height = input[1].split(" ").map((x) => +x);

console.log(solution(height));

// https://www.acmicpc.net/problem/2110

const fs = require("fs");
const [NC, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, C] = NC.split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

function solution(C, arr) {
  let lt = 1;
  let rt = arr[arr.length - 1] - arr[0];
  let answer = 0;

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(arr, mid) >= C) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

function count(arr, dist) {
  let count = 1;
  let lastInstalled = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - lastInstalled >= dist) {
      count++;
      lastInstalled = arr[i];
    }
  }

  return count;
}

console.log(solution(C, arr));

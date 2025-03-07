// https://www.acmicpc.net/problem/2343

const fs = require("fs");
const [NM, input] = fs.readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = NM.split(" ").map(Number);
const arr = input.split(" ").map(Number);

function count(lectures, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of lectures) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }
  return cnt;
}

function solution(m, lectures) {
  let answer;
  let lt = Math.max(...lectures);
  let rt = lectures.reduce((a, b) => a + b);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(lectures, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else lt = mid + 1;
  }
  return answer;
}

console.log(solution(M, arr));

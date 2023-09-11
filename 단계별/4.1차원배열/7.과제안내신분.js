// https://www.acmicpc.net/problem/5597

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map(Number);

let submitted = Array(30).fill(false); // 1부터 30까지의 출석번호를 표시하는 배열

for (let i = 0; i < 28; i++) {
  submitted[input[i] - 1] = true; // 제출한 학생의 출석번호를 표시
}

// 누락된 출석번호 찾기
let missing = [];
for (let i = 0; i < 30; i++) {
  if (!submitted[i]) {
    missing.push(i + 1);
  }
}

console.log(missing[0]); // 가장 작은 누락된 출석번호 출력
console.log(missing[1]); // 그 다음 출석번호 출력

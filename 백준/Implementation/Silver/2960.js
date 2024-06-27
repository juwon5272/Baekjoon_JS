// https://www.acmicpc.net/problem/2960

const [N, K] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let arr = Array.from({ length: N + 1 }, (_, idx) => idx);
let eraseCnt = 0;
let eraseNum = 0;

for (let num = 2; num <= N; num++) {
  if (arr[num] !== 0) {
    for (let multiple = num; multiple <= N; multiple += num) {
      if (arr[multiple] !== 0) {
        eraseNum = arr[multiple];
        arr[multiple] = 0;
        eraseCnt++;
        if (eraseCnt === K) {
          console.log(eraseNum);
          return;
        }
      }
    }
  }
}

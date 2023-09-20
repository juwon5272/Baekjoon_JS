// https://www.acmicpc.net/problem/2501

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((e) => Number(e));

let [N, K] = [input[0], input[1]];
let result = 0;
let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt++;
    if (cnt === K) {
      result = i;
      break;
    }
  }
}
console.log(result);

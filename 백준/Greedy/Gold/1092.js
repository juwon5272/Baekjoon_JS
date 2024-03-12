// https://www.acmicpc.net/problem/1092

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const crane = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const M = +input[2];
const box = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let answer = 0;
if (crane[0] < box[0]) return console.log(-1);
while (box.length) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (crane[i] >= box[j]) {
        box.splice(j, 1);
        break;
      }
    }
  }
  answer++;
}
console.log(answer);

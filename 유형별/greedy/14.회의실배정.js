// https://www.acmicpc.net/problem/1931

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +n;
const time = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] == b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
let endTime = 0;
let answer = 0;
for (let x of time) {
  if (x[0] >= endTime) {
    answer++;
    endTime = x[1];
  }
}
console.log(answer);

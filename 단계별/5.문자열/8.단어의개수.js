// https://www.acmicpc.net/problem/2675

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let cnt = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") cnt++;
}
console.log(cnt);

// https://www.acmicpc.net/problem/10798

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => e.split(""));

let maxLength = Math.max(...input.map((e) => e.length));
let ans = [];
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (i <= input[j].length - 1) ans.push(input[j][i]);
  }
}
console.log(ans.join(""));

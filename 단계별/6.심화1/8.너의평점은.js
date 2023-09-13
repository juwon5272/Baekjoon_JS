// https://www.acmicpc.net/problem/25206

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => e.split(" "));

const gradeScale = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
  P: 0.0,
};
let sum = 0;
let cnt = 0;
for (let i = 0; i < input.length; i++) {
  sum += Number(input[i][1]) * gradeScale[input[i][2]];
  if (input[i][2] != "P") cnt += Number(input[i][1]);
}
console.log(sum / cnt);

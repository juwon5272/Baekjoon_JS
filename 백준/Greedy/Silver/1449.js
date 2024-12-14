// https://www.acmicpc.net/problem/1449
const [NL, input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = NL.split(" ").map(Number);
const inputArr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let nowTape = 0;
let cntTape = 0;

for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i] > nowTape) {
    cntTape++;
    nowTape = inputArr[i] + L - 1;
  }
}

console.log(cntTape);

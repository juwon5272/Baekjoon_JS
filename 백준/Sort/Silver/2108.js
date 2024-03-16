// https://www.acmicpc.net/problem/2108

let inputArr = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cnt = inputArr.shift();
inputArr = inputArr.sort((a, b) => a - b);

// 1. 산술평균
let one = parseInt(inputArr.reduce((a, b) => a + b, 0) / cnt);
// 2. 중앙값
let two = inputArr[(cnt - 1) / 2];
// 3. 최빈값
let inputMap = new Map();
for (x of inputArr) {
  if (inputMap.has(x)) inputMap.set(x, inputMap.get(x) + 1);
  else inputMap.set(x, 1);
}

// 4. 범위
let four = inputArr[inputArr.length - 1] - inputArr[0];
console.log(one, inputMap, two, four);

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
let one = Math.round(inputArr.reduce((a, b) => a + b, 0) / cnt);
one = one === -0 ? 0 : one;
// 2. 중앙값
let two = inputArr[Math.floor(cnt / 2)];

// 3. 최빈값
function getMostValue(array) {
  const map = new Map();
  for (let i = 0; i < cnt; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1);
    } else {
      map.set(array[i], map.get(array[i]) + 1);
    }
  }
  let maxValue = 0;
  let answer = [];
  map.forEach((value, key) => {
    if (maxValue < value) {
      maxValue = value;
      answer = [key];
    } else if (maxValue === value) {
      answer.push(key);
    }
  });
  answer.sort((a, b) => a - b);
  return answer.length > 1 ? answer[1] : answer[0];
}

// 4. 범위
let four = inputArr[inputArr.length - 1] - inputArr[0];

console.log(one);
console.log(two);
console.log(getMostValue(inputArr));
console.log(four);

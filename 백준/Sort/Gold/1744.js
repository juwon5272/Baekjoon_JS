// https://www.acmicpc.net/problem/1744

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let minusArr = [];
let plusArr = [];
let sum = 0;
let oneCount = 0;

input.forEach((e) => {
  if (e > 1) plusArr.push(e);
  else if (e === 1) oneCount++;
  else minusArr.push(e);
});

plusArr.sort((a, b) => b - a);
minusArr.sort((a, b) => a - b);

while (plusArr.length > 1) {
  sum += plusArr.shift() * plusArr.shift();
}
if (plusArr.length === 1) sum += plusArr[0];

while (minusArr.length > 1) {
  sum += minusArr.shift() * minusArr.shift();
}
if (minusArr.length === 1) {
  if (minusArr[0] !== 0) sum += minusArr[0];
}

sum += oneCount;

console.log(sum);

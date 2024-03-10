// https://www.acmicpc.net/problem/1002

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input.map((e) => e.split(" ").map(Number));
let answer = [];
for (let i = 0; i < n; i++) {
  let [x1, y1, r1, x2, y2, r2] = arr[i];
  let distanceSum = (r1 + r2) ** 2;
  let distanceSubtract = (r1 - r2) ** 2;
  let locationDiff = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  if (distanceSum == 0) {
    if (r1 == r2) answer.push(-1);
    else answer.push(0);
  } else {
    if (distanceSum == locationDiff || distanceSubtract == locationDiff)
      answer.push(1);
    else if (distanceSum > locationDiff && locationDiff > distanceSubtract)
      answer.push(2);
    else answer.push(0);
  }
}

console.log(answer.join("\n"));

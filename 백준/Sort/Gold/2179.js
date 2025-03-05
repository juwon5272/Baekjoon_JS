// https://www.acmicpc.net/problem/2170

const fs = require("fs");
const [N, ...input] = fs.readFileSync("./input.txt").toString().trim().split("\n");

let lineArr = input.map((e) => e.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);

let sum = 0;
let [start, end] = lineArr[0];

for (let i = 1; i < lineArr.length; i++) {
  let [x, y] = lineArr[i];

  if (x <= end) {
    end = Math.max(end, y);
  } else {
    sum += end - start;
    start = x;
    end = y;
  }
}

sum += end - start;

console.log(sum);

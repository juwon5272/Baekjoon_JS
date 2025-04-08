// https://www.acmicpc.net/problem/1436ㄴ

const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt").toString().trim());

const N = input;
let count = 0;
let num = 666;

while (true) {
  if (String(num).includes("666")) {
    count++;
    if (count === N) {
      console.log(num);
      break;
    }
  }
  num++;
}

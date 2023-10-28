// https://www.acmicpc.net/problem/20365

const [n, input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let colorlist = input.split("");
let before = "";
let redCnt = 0;
let blueCnt = 0;
for (let x of colorlist) {
  if (x !== before && x == "R") {
    redCnt++;
    before = x;
  } else if (x !== before && x == "B") {
    blueCnt++;
    before = x;
  }
}
console.log(Math.min(redCnt, blueCnt) + 1);

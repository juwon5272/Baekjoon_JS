// https://www.acmicpc.net/submit/1439
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

let nowNum = input[0];
let cnt = 0;
for (x of input) {
  if (x != nowNum) {
    nowNum = nowNum == 1 ? 0 : 1;
    cnt++;
  }
}
console.log(Math.round(cnt / 2));

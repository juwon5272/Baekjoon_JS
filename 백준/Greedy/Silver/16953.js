// https://www.acmicpc.net/problem/16953
let [s, e] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let cnt = 1;
while (1) {
  if (e == s) break;
  else if (e < s) {
    return console.log(-1);
  }
  if (e % 10 == 1) {
    e = Math.floor(e / 10);
    cnt++;
  } else if (e % 2 == 0) {
    e = e / 2;
    cnt++;
  } else {
    return console.log(-1);
  }
}
console.log(cnt);

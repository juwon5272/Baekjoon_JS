// https://www.acmicpc.net/problem/19598

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const time = input.map((e) => e.split(" ").map(Number));
let timelist = [];
for (x of time) {
  timelist.push([x[0], "s"]);
  timelist.push([x[1], "e"]);
}
timelist.sort((a, b) => {
  if (a[0] == b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
  else return a[0] - b[0];
});
let cnt = 0;
let answer = 0;
for (x of timelist) {
  if (x[1] == "s") cnt++;
  else cnt--;
  answer = Math.max(answer, cnt);
}
console.log(answer);

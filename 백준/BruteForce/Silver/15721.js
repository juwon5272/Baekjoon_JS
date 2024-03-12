// https://www.acmicpc.net/problem/15721

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => Number(e));
let [people, find, what] = [input[0], input[1], input[2]];
let i = 4;
let cnt = 0;
let sum = 0;

while (find > i) {
  cnt++;
  find -= i;
  sum += i;
  i++;
}
let arr = [0, 1, 0, 1];
for (let j = 0; j < i - 2; j++) arr.push(0);
for (let j = 0; j < i - 2; j++) arr.push(1);

let whatCnt = 0;
let ans = 0;
for (let k = 0; k < arr.length; k++) {
  if (arr[k] == what) {
    whatCnt++;
    if (whatCnt == find) {
      ans = k;
      break;
    }
  }
}
console.log((2 * sum + ans) % people);

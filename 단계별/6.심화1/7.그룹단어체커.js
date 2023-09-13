// https://www.acmicpc.net/problem/1316

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .toUpperCase()
  .split("")
  .sort();
let ans = input[0];
let cnt = 1;
let ans_cnt = 0;
for (let i = 0; i < input.length - 1; i++) {
  if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
    if (input[i] == input[i + 1]) {
      cnt++;
      if (cnt > ans_cnt) {
        ans = input[i];
        ans_cnt = cnt;
      } else if (cnt == ans_cnt) ans = "?";
    } else {
      cnt = 1;
    }
  }
}
console.log(ans);

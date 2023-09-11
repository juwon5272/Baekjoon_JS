// https://www.acmicpc.net/problem/10807

const [count, num, find] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let ans = 0;
arr = num.split(" ");
for (let i = 0; i < count; i++) {
  if (arr[i] == find) ans++;
}
console.log(ans);

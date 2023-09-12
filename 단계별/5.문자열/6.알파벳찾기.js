// https://www.acmicpc.net/problem/10809

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("");

let ans = Array(26).fill(-1);
let arr = input.map((e) => e.charCodeAt(0) - 97);
for (let i = 0; i < input.length; i++) {
  if (ans[arr[i]] == -1) ans[arr[i]] = i;
}
console.log(ans.join(" "));

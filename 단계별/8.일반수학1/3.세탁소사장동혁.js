// https://www.acmicpc.net/problem/2720

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => Number(e));

let cnt = input[0];
for (let i = 1; i <= cnt; i++) {
  let ans = [];
  ans.push(Math.floor(input[i] / 25));
  ans.push(Math.floor((input[i] % 25) / 10));
  ans.push(Math.floor(((input[i] % 25) % 10) / 5));
  ans.push(Math.floor(((input[i] % 25) % 10) % 5));
  console.log(ans.join(" "));
}

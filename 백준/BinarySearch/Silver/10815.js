// https://www.acmicpc.net/problem/10815

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let myCnt = Number(input[0]);
let cnt = Number(input[2]);

let myArr = new Set(input[1].split(" ").map((e) => Number(e)));
let arr = input[3].split(" ").map((e) => Number(e));

let ans = [];

for (let i = 0; i < cnt; i++) {
  if (myArr.has(arr[i])) ans.push(1);
  else ans.push(0);
}
console.log(ans.join(" "));

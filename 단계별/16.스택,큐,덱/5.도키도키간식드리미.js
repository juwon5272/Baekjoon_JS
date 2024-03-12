// https://www.acmicpc.net/problem/12789

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input[0];
let arr = input[1].split(" ").map(Number);
let stack = [];
let tmp = N + 1;
let out = 1;
let ans = true;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == out) {
    out++;
  } else if (tmp > arr[i]) {
    tmp = arr[i];
    stack.push(arr[i]);
  } else {
    ans = false;
    break;
  }
}
console.log(ans == true ? "Nice" : "Sad");

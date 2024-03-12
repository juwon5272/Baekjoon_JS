// https://www.acmicpc.net/problem/10799
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("");

let stack = [];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == "(") stack.push("(");
  else if (input[i] == ")" && input[i - 1] == "(") {
    stack.pop();
    cnt += stack.length;
  } else {
    stack.pop();
    cnt++;
  }
}
console.log(cnt);

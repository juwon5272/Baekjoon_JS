// https://www.acmicpc.net/problem/10773

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const K = input[0];
input.shift();
let stack = [];
for (let i of input) {
  if (i !== 0) stack.push(i);
  else stack.pop();
}
console.log(stack.reduce((a, b) => a + b, 0));

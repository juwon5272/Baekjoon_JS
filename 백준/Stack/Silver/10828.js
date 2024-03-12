// https://www.acmicpc.net/problem/10828

const [cnt, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const a = input.map((e) => e.split(" "));
let stack = [];
let ans = [];

for (i of a) {
  if (i[0] == "push") {
    stack.push(Number(i[1]));
  } else if (i[0] == "pop") {
    if (stack.length !== 0) ans.push(stack.pop());
    else ans.push(-1);
  } else if (i[0] == "size") {
    ans.push(stack.length);
  } else if (i[0] == "empty") {
    if (stack.length !== 0) ans.push(0);
    else ans.push(1);
  } else if (i[0] == "top") {
    if (stack.length !== 0) ans.push(stack[stack.length - 1]);
    else ans.push(-1);
  }
}
console.log(ans.join("\n"));

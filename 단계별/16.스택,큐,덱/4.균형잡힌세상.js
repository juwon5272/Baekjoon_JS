// https://www.acmicpc.net/problem/4949

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let line of input) {
  if (line === ".") break;

  let stack = [];
  let ans = "yes";

  for (let char of line) {
    if (char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "]" || char === ")") {
      if (stack.length === 0) {
        ans = "no";
        break;
      }
      let top = stack.pop();
      if ((char === "]" && top !== "[") || (char === ")" && top !== "(")) {
        ans = "no";
        break;
      }
    }
  }

  if (stack.length > 0) {
    ans = "no";
  }

  console.log(ans);
}

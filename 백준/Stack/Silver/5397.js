// https://www.acmicpc.net/problem/5397

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = [];

function findPassword(str) {
  let leftStack = [];
  let rightStack = [];

  for (let char of str) {
    if (char === "<") {
      if (leftStack.length > 0) {
        rightStack.push(leftStack.pop());
      }
    } else if (char === ">") {
      if (rightStack.length > 0) {
        leftStack.push(rightStack.pop());
      }
    } else if (char === "-") {
      if (leftStack.length > 0) {
        leftStack.pop();
      }
    } else {
      leftStack.push(char);
    }
  }

  while (rightStack.length > 0) {
    leftStack.push(rightStack.pop());
  }

  answer.push(leftStack.join(""));
}

input.forEach((e) => findPassword(e));
console.log(answer.join("\n"));

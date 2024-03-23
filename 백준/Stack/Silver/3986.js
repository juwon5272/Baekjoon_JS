// https://www.acmicpc.net/problem/3986

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

function isGoodWord(str) {
  str = str.split("");
  let stack = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (stack[stack.length - 1] == str[i]) stack.pop();
    else stack.push(str[i]);
  }
  return stack.length ? false : true;
}
input.map((e) => (isGoodWord(e) ? answer++ : ""));
console.log(answer);

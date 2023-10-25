// https://www.acmicpc.net/problem/1343

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let n = input[0];

function solution(n) {
  n = n.replace(/XXXX/g, "AAAA");
  n = n.replace(/XX/g, "BB");

  return n.split("").includes("X") ? -1 : n;
}
let answer = solution(n);
console.log(answer);

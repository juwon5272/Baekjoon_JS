// https://www.acmicpc.net/problem/17298

const [cnt, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let num = input[0].split(" ").map((e) => Number(e));
let stack = Array(+cnt).fill(-1);

for()
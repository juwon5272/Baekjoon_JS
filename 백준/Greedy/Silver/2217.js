// https://www.acmicpc.net/problem/2217

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
rope = input.map((e) => Number(e)).sort((a, b) => b - a);
let weight = [];
for (let i = 0; i < +n; i++) {
  weight.push(rope[i] * (i + 1));
}
console.log(Math.max(...weight));

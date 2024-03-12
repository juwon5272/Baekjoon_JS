// https://www.acmicpc.net/problem/1764

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
let Nset = new Set();
let Mset = new Set();
let include = [];
for (let i = 0; i < input.length; i++) {
  if (i < +N) Nset.add(input[i]);
  else Mset.add(input[i]);
}
for (x of Nset) {
  if (Mset.has(x)) include.push(x);
}
let answer = include.sort();
console.log(answer.length);
answer.filter((e) => console.log(e));

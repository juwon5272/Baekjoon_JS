// https://www.acmicpc.net/problem/10816

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let [Ncnt, N, Mcnt, M] = input.map((e) => e.split(" ").map(Number));
let Mmap = new Map();
let answer = [];

for (x of M) {
  Mmap.set(x, 0);
}

for (x of N) {
  if (Mmap.has(x)) {
    Mmap.set(x, Mmap.get(x) + 1);
  }
}

console.log(M.map((x) => Mmap.get(x) || 0).join(" "));

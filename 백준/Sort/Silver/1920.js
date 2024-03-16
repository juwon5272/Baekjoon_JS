// https://www.acmicpc.net/problem/1920

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let [Ncnt, N, Mcnt, M] = input.map((e) => e.split(" "));

let Nset = new Set(N);
let answer = [];
for (let i = 0; i < Mcnt; i++) {
  Nset.has(M[i]) ? answer.push(1) : answer.push(0);
}

console.log(answer.join("\n"));

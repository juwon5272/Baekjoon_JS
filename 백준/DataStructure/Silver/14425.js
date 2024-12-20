// https://www.acmicpc.net/problem/14425
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const S = new Set(input.slice(1, N + 1));
const queries = input.slice(N + 1);

let count = 0;
for (const query of queries) {
  if (S.has(query)) {
    count++;
  }
}

console.log(count);

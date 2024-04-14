// https://www.acmicpc.net/problem/1966

const [caseNum, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));

for (let i = 0; i < caseNum; i++) {
  const [N, idx] = input[2 * i];
  let arr = input[2 * i + 1];
  let point = idx;
  let sortedArr = arr.sort((a, b) => b - a);

  console.log(N, idx, arr);
}

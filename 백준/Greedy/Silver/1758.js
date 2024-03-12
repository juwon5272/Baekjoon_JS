// https://www.acmicpc.net/problem/1758

const [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let tips = input.map((e) => Number(e)).sort((a, b) => b - a);
let tip = 0;
for (let i = 0; i < tips.length; i++) {
  tips[i] -= i;
  if (tips[i] > 0) tip += tips[i];
  else break;
}
console.log(tip);

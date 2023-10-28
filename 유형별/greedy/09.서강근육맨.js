// https://www.acmicpc.net/problem/20300
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\n|\s+/);

const n = +input.shift();
let machine = input.map(BigInt);
machine.sort((a, b) => (a < b ? -1 : 1));
let max = 0;
let loss = 0;
if (machine.length % 2 == 1) max = machine.pop();
while (machine.length > 0) {
  loss = machine.pop() + machine.shift();
  if (max < loss) max = loss;
}
console.log(String(max));

// https://www.acmicpc.net/problem/20291

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
let type = input.map((e) => e.split(".")[1]);
let typeMap = new Map();
for (x of type) {
  if (typeMap.has(x)) typeMap.set(x, typeMap.get(x) + 1);
  else typeMap.set(x, 1);
}
let arr = [...typeMap];
let answer = arr.sort((a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
});
let result = [];
for (x of answer) {
  result += `${x[0]} ${x[1]}\n`;
}
console.log(result.trim());

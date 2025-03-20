// https://www.acmicpc.net/problem/11656

const input = require("fs").readFileSync("./input.txt").toString().trim();

const arr = [];
for (let i = 0; i < input.length; i++) {
  arr.push(input.slice(i));
}

console.log(arr.sort().join("\n"));

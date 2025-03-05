// https://www.acmicpc.net/problem/5052

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

let index = 0;
const T = Number(input[index++]);
const results = [];

for (let t = 0; t < T; t++) {
  const n = Number(input[index++]);
  const phoneNumbers = [];

  for (let i = 0; i < n; i++) {
    phoneNumbers.push(input[index++]);
  }

  results.push(solve(phoneNumbers));
}

console.log(results.join("\n"));

function solve(arr) {
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1].startsWith(arr[i])) return "NO";
  }
  return "YES";
}

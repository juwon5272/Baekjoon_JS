const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();

const substrings = new Set();
const len = input.length;

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j <= len; j++) {
    substrings.add(input.slice(i, j));
  }
}

console.log(substrings.size);

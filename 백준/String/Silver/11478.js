const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const s = input;
const set = new Set();

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    const substr = s.slice(i, j);
    set.add(substr);
  }
}

console.log(set.size);

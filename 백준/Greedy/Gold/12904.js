function canChange(S, T) {
  let s = S;
  let t = T;

  while (s.length < t.length) {
    if (t.endsWith("A")) {
      t = t.slice(0, -1);
    } else {
      t = t.slice(0, -1).split("").reverse().join("");
    }
  }

  return t === s ? 1 : 0;
}

const fs = require("fs");
const [S, T] = fs.readFileSync("./input.txt").toString().trim().split("\n");

console.log(canChange(S, T));

const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const alphabetObj = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,
  E: 0,
  F: 0,
  G: 0,
  H: 0,
  I: 0,
  J: 0,
  K: 0,
  L: 0,
  M: 0,
  N: 0,
  O: 0,
  P: 0,
  Q: 0,
  R: 0,
  S: 0,
  T: 0,
  U: 0,
  V: 0,
  W: 0,
  X: 0,
  Y: 0,
  Z: 0,
};

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  for (let j = 0; j < str.length; j++) {
    const char = str[str.length - 1 - j];
    alphabetObj[char] += Math.pow(10, j);
  }
}

const sortedValues = Object.entries(alphabetObj)
  .filter(([char, value]) => value > 0)
  .sort((a, b) => b[1] - a[1]);

let multiplier = 9;
let totalSum = 0;

for (const [char, value] of sortedValues) {
  totalSum += value * multiplier;
  multiplier--;
}

console.log(totalSum);

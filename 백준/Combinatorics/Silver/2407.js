const [n, m] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .split(" ")
  .map(BigInt);
const factorial = (x, y = 1n) => (x < y ? 1n : x * factorial(x - 1n, y));

const combination = factorial(n, n - m + 1n) / factorial(m);

console.log(combination.toString());

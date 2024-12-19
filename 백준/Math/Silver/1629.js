function modularExponentiation(A, B, C) {
  if (B === 0) return 1;

  let half = modularExponentiation(A, Math.floor(B / 2), C);
  half = (half * half) % C;

  if (B % 2 === 1) {
    half = (half * A) % C;
  }

  return half;
}

const [A, B, C] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(modularExponentiation(A, B, C));

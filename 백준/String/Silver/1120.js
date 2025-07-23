const [A, B] = require("fs").readFileSync("./input.txt").toString().trim().split(" ");

let minDiff = 50;

for (let i = 0; i <= B.length - A.length; i++) {
  let diff = 0;
  for (let j = 0; j < A.length; j++) {
    if (A[j] !== B[i + j]) diff++;
  }
  minDiff = Math.min(minDiff, diff);
}

console.log(minDiff);

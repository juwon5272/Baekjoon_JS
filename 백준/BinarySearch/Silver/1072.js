const [X, Y] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const Z = Math.floor((Y * 100) / X);

if (Z >= 99) {
  console.log(-1);
  return;
}

let left = 1;
let right = 1000000000;
let answer = -1;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let newZ = Math.floor(((Y + mid) * 100) / (X + mid));

  if (newZ > Z) {
    answer = mid;
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

console.log(answer);

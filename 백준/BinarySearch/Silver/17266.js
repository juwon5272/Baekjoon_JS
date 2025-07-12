const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const positions = input[2].split(" ").map(Number);

function isPossible(height) {
  let current = 0;

  for (let i = 0; i < M; i++) {
    const left = positions[i] - height;
    const right = positions[i] + height;

    if (left > current) return false;
    current = Math.max(current, right);
  }

  return current >= N;
}

let low = 0;
let high = N;
let answer = N;

while (low < high) {
  const mid = Math.floor((low + high) / 2);
  if (isPossible(mid)) {
    answer = mid;
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}
console.log(answer);

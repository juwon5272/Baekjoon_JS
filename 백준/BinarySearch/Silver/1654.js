const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const cables = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...cables);
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let count = 0;

  for (let cable of cables) {
    count += Math.floor(cable / mid);
  }
  if (count >= N) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

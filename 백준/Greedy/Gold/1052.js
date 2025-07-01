const fs = require("fs");
let [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function countBits(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}

let answer = 0;

while (countBits(N) > K) {
  let leastBit = N & -N;
  answer += leastBit;
  N += leastBit;
}

console.log(answer);

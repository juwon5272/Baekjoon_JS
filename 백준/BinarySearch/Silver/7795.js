const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

let t = Number(input[0]);
let line = 1;

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

for (let i = 0; i < t; i++) {
  const [N, M] = input[line++].split(" ").map(Number);
  const A = input[line++].split(" ").map(Number);
  const B = input[line++].split(" ").map(Number);

  B.sort((a, b) => a - b);

  let count = 0;
  for (const a of A) {
    count += binarySearch(B, a);
  }

  console.log(count);
}

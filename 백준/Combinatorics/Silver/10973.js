const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let largePoint = -1;
for (let i = N - 1; i > 0; i--) {
  if (arr[i] < arr[i - 1]) {
    largePoint = i - 1;
    break;
  }
}

if (largePoint === -1) {
  console.log(-1);
  process.exit(0);
}

let smallerPoint = -1;
for (let i = N - 1; i > largePoint; i--) {
  if (arr[i] < arr[largePoint]) {
    smallerPoint = i;
    break;
  }
}

[arr[smallerPoint], arr[largePoint]] = [arr[largePoint], arr[smallerPoint]];

let left = largePoint + 1;
let right = N - 1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}

console.log(arr.join(" "));

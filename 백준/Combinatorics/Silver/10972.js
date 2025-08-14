const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let lessPoint = -1;
for (let i = N - 2; i >= 0; i--) {
  if (arr[i] < arr[i + 1]) {
    lessPoint = i;
    break;
  }
}
if (lessPoint === -1) {
  console.log(-1);
  process.exit(0);
}

let largerPoint = -1;
for (let i = N - 1; i > lessPoint; i--) {
  if (arr[i] > arr[lessPoint]) {
    largerPoint = i;
    break;
  }
}

[arr[lessPoint], arr[largerPoint]] = [arr[largerPoint], arr[lessPoint]];

let left = lessPoint + 1;
let right = N - 1;
while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}

console.log(arr.join(" "));

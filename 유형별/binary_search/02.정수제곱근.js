// https://www.acmicpc.net/problem/2417

let input = Number(require("fs").readFileSync("./input.txt"));
let left = 0;
let right = input;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (mid ** 2 < input) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(left);

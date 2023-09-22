// https://www.acmicpc.net/problem/2581

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return;
  }
  return num;
}

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`)
  .map((e) => Number(e));

let arr = [];
let sum = 0;
for (let i = input[0]; i <= input[1]; i++) {
  if (isPrime(i)) {
    arr.push(i);
  }
}
if (arr.length == 0) {
  console.log(-1);
} else {
  arr.map((e) => (sum += e));
  console.log(sum);
  console.log(Math.min(...arr));
}

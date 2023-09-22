// https://www.acmicpc.net/problem/1978

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

let cnt = Number(input[0]);
let num = input[1].split(" ").map((e) => Number(e));
let ans = 0;

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return;
  }
  return num;
}

for (let i = 0; i < cnt; i++) {
  if (isPrime(num[i])) ans++;
}
console.log(ans);

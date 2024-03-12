// https://www.acmicpc.net/problem/1929

const [n, m] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const prime = { 1: true };

for (let i = 2; i <= Math.sqrt(m); i++) {
  if (prime[i]) continue;
  for (let j = i ** 2; j <= m; j += i) {
    prime[j] = true;
  }
}
const results = [];

for (let i = n; i <= m; i++) {
  if (!prime[i]) results.push(i);
}
console.log(results.join("\n"));
// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// const [M, N] = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);
// let primeArr = [];
// for (let i = M; i <= N; i++) {
//   isPrime(i) ? primeArr.push(i) : "";
// }
// console.log(primeArr.join("\n"));

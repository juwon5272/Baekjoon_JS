// https://www.acmicpc.net/problem/11653

let input = Number(require("fs").readFileSync("./input.txt"));
let i = 2;
let primes = [];

while (true) {
  if (input % i === 0) {
    input = input / i;
    primes.push(i);
    i--;
  }
  i++;
  if (i > input) {
    break;
  }
}
console.log(primes.join(`\n`));

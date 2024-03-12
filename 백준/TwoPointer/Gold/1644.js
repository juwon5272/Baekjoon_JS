// https://acmicpc.net/problem/1644

function isPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

const input = +require("fs").readFileSync("./input.txt").toString().trim();
let primeArr = [];
for (let i = 2; i <= input; i++) {
  if (isPrime(i)) primeArr.push(i);
}
let left = 0;
let sum = 0;
let cnt = 0;
for (let right = 0; right < primeArr.length; right++) {
  sum += primeArr[right];
  while (sum > input) {
    sum -= primeArr[left++];
  }
  if (sum == input) {
    cnt++;
  }
}
console.log(cnt);

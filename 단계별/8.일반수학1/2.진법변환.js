// https://www.acmicpc.net/problem/11005

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let [n, m] = [Number(input[0]), Number(input[1])];
let s = n;
let arr = [];

while (s > 0) {
  let remainder = s % m;
  if (remainder >= 10) {
    arr.push(String.fromCharCode(remainder + 55));
  } else {
    arr.push(remainder);
  }
  s = Math.floor(s / m);
}

let result = arr.reverse().join("");

console.log(result);

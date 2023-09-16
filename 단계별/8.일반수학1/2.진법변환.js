// https://www.acmicpc.net/problem/11005

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(" ");

let [n, m] = [Number(input[0]), Number(input[1])];
let s = n;
let arr = [];
while (1) {
  if (s % m >= 10) {
    arr.push(String.fromCharCode((s % m) + 55));
  } else {
    arr.push(s % m);
  }
  s = Math.floor(s / m);

  if (Math.floor(s / m) == 0) {
    // arr.reverse();
    if (n % m >= 10) {
      arr.push(String.fromCharCode((s % m) + 55));
    } else {
      arr.push(s % m);
    }
    arr.reverse();
    break;
  }
}
console.log(arr.join(""));

// https://www.acmicpc.net/problem/2839

const N = +require("fs").readFileSync("./input.txt");

let bag = Math.floor(N / 5);
let sugar = N % 5;

while (sugar <= N) {
  if (sugar % 3 === 0) {
    bag += sugar / 3;
    break;
  } else {
    sugar += 5;
    bag -= 1;
  }
}
console.log(bag);

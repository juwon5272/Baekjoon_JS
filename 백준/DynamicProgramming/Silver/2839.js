// https://www.acmicpc.net/problem/2839

let input = +require("fs").readFileSync("./input.txt");

let bag = Math.floor(input / 5);
sugar = input % 5;
while (sugar <= input) {
  if (sugar % 3 == 0) {
    bag += sugar / 3;
    break;
  } else {
    sugar += 5;
    bag -= 1;
  }
}
console.log(bag);

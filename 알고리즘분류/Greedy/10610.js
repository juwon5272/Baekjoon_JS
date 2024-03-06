// https://www.acmicpc.net/problem/10610

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("")
  .map((e) => +e)
  .sort((a, b) => b - a);
const sum = input.reduce((acc, cur) => acc + cur);
console.log(sum % 3 === 0 && input.includes(0) ? input.join("") : -1);

// const input = require("fs")
//   .readFileSync("./input.txt")
//   .toString()
//   .trim()
//   .split("")
//   .map((e) => +e)
//   .sort((a, b) => b - a);

// if (input.includes(0)) {
//   let sum = input.reduce((acc, cur) => acc + parseInt(cur), 0);
//   sum % 3 == 0 ? console.log(+input.join("")) : console.log(-1);
// } else {
//   console.log(-1);
// }

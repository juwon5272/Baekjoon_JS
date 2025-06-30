const [N, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0;

for (let i = input.length - 2; i >= 0; i--) {
  if (input[i] >= input[i + 1]) {
    answer += input[i] - input[i + 1] + 1;
    input[i] = input[i + 1] - 1;
  }
}

console.log(answer);

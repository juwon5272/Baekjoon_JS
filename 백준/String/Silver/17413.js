// https://www.acmicpc.net/problem/17413

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("");
let flag = 0;
let result = [];
let word = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] == "<") {
    result.push(word.reverse().join(""));
    word = [];
    result.push(input[i]);
    flag = 1;
  } else if (input[i] == ">") {
    flag = 0;
    result.push(input[i]);
  } else if (flag == 1) result.push(input[i]);
  else {
    if (input[i] == " ") {
      result.push(word.reverse().join(""));
      result.push(input[i]);
      word = [];
    } else if (i == input.length - 1) {
      word.push(input[i]);
      result.push(word.reverse().join(""));
      word = [];
    } else {
      word.push(input[i]);
    }
  }
}
console.log(result.join("").trim());

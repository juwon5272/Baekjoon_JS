// https://www.acmicpc.net/problem/9342

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const T = +input.shift();
let answer = [];
for (let i = 0; i < T; i++) {
  let wordSet = Array.from(new Set(input[i]));
  if (wordSet.length >= 3 && wordSet.length <= 5) {
    if (
      wordSet[0] == "A" &&
      wordSet[1] == "F" &&
      wordSet[2] == "C" &&
      (wordSet.length == 3 ||
        (wordSet.length == 4 &&
          wordSet[3] == ("B" || "C" || "D" || "E" || "F")))
    ) {
      answer.push("Infected!");
    } else if (
      wordSet[0] == ("B" || "C" || "D" || "E" || "F") &&
      wordSet[1] == "A" &&
      wordSet[2] == "F" &&
      wordSet[3] == "C" &&
      (wordSet.length == 4 ||
        (wordSet.length == 5 &&
          wordSet[4] == ("B" || "C" || "D" || "E" || "F")))
    ) {
      answer.push("Infected!");
    } else {
      answer.push("Good");
    }
  } else {
    answer.push("Good");
  }
}
answer.map((e) => console.log(e));

const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));
let ans_space = "";
let ans_star = "";
for (let i = 0; i < input; i++) {
  ans_space += " ";
}
console.log("<" + ans_space + ">");
for (let i = 0; i < input; i++) {
  ans_space = ans_space.slice(0, -1);
  ans_star += "*";
  console.log(ans_space + ans_star);
}

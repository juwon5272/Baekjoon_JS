const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
let answer = "";
for (let i = 1; i <= Number(input[0]); i++) {
  let AB = input[i].split(" ");
  answer += Number(AB[0]) + Number(AB[1]) + "\n";
}
console.log(answer);

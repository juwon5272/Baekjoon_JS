const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
let sum = 0;
for (let i = 2; i <= Number(input[1]) + 1; i++) {
  let AB = input[i].split(" ");
  sum += Number(AB[0]) * Number(AB[1]);
}
sum == input[0] ? console.log("Yes") : console.log("No");

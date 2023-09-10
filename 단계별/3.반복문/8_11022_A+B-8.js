const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
for (let i = 1; i <= Number(input[0]); i++) {
  let AB = input[i].split(" ");
  let ans = Number(AB[0]) + Number(AB[1]);
  console.log(`Case #${i}: ${AB[0]} + ${AB[1]} = ${ans}`);
}

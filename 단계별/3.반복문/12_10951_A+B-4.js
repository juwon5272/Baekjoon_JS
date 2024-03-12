const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  let AB = input[i].split(" ");
  console.log(Number(AB[0]) + Number(AB[1]));
}

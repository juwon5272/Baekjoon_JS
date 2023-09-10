const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
let i = 0;
while (1) {
  let AB = input[i].split(" ");
  if (Number(AB[0]) == 0 && Number(AB[1]) == 0) break;
  console.log(Number(AB[0]) + Number(AB[1]));
  i++;
}

const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));
let ans = "";
for (let i = 0; i < input; i++) {
  ans += "*";
  console.log(ans);
}

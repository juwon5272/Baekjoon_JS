const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt").toString().trim());

if (input <= 100 && 90 <= input) console.log("A");
else if (input < 90 && 80 <= input) console.log("B");
else if (input < 90 && 70 <= input) console.log("C");
else if (input < 70 && 60 <= input) console.log("D");
else console.log("F");

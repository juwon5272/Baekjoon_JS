const fs = require("fs");
const input = Number(fs.readFileSync("./input.txt"));

if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0) console.log(1);
else console.log(0);

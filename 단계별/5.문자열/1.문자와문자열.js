// https://www.acmicpc.net/problem/27866

let input = require("fs").readFileSync("./input.txt").toString().split(`\n`);
let [word, num] = [input[0].split(""), input[1]];

console.log(word[num - 1]);

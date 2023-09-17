// https://www.acmicpc.net/problem/2903

let input = Number(require("fs").readFileSync("./input.txt"));

console.log((2 ** input + 1) ** 2);

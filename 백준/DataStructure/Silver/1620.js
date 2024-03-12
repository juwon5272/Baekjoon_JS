// https://www.acmicpc.net/problem/1620

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split("");
  let isVPS = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == "(") isVPS++;
    else if (arr[j] == ")") isVPS--;
    if (isVPS < 0) {
      console.log("NO");
      break;
    }
    if (j == arr.length - 1 && isVPS == 0) {
      console.log("YES");
    } else if (j == arr.length - 1 && isVPS != 0) {
      console.log("NO");
    }
  }
}

// https://www.acmicpc.net/problem/11866

const [N, K] = require("fs").readFileSync("./input.txt").toString().split(" ");
let arr = Array.from({ length: +N }, (_, index) => index + 1);

let answer = [];
let cnt = 1;
while (arr.length) {
  let shiftNum = arr.shift();
  if (cnt % K == 0) {
    answer.push(shiftNum);
  } else {
    arr.push(shiftNum);
  }
  cnt++;
}
console.log("<" + answer.join(", ") + ">");

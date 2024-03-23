// https://www.acmicpc.net/problem/12789

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let N = +input[0];
let arr = input[1].split(" ").map(Number).reverse();
let stack = [];
let nowNum = 1;
let answer = true;
while (arr.length) {
  if (arr[arr.length - 1] == nowNum) {
    arr.pop();
    nowNum++;
  } else if (stack[stack.length - 1] == nowNum) {
    stack.pop();
    nowNum++;
  } else {
    if (stack[stack.length - 1] < arr[arr.length - 1]) {
      answer = false;
      break;
    } else {
      stack.push(arr.pop());
    }
  }
}
console.log(answer == true ? "Nice" : "Sad");

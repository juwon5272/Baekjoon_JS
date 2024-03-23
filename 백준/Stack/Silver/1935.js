// https://www.acmicpc.net/problem/1935

const [N, input, ...nums] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = nums.map(Number);
let arr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
    arr.push(numbers[input[i].charCodeAt() - 65]);
  } else {
    if (input[i] == "+") {
      let num2 = arr.pop();
      let num1 = arr.pop();
      arr.push(num1 + num2);
    } else if (input[i] == "-") {
      let num2 = arr.pop();
      let num1 = arr.pop();
      arr.push(num1 - num2);
    } else if (input[i] == "*") {
      let num2 = arr.pop();
      let num1 = arr.pop();
      arr.push(num1 * num2);
    } else if (input[i] == "/") {
      let num2 = arr.pop();
      let num1 = arr.pop();
      arr.push(num1 / num2);
    }
  }
}

console.log(arr[0].toFixed(2));

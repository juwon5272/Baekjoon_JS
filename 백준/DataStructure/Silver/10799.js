const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");

let stack = [];
let cnt = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] == "(") stack.push("(");
  else if (input[i] == ")" && input[i - 1] == "(") {
    stack.pop();
    cnt += stack.length;
  } else {
    stack.pop();
    cnt++;
  }
}
console.log(cnt);

let [n, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
let inputArr = input.map((e) => e.split(" "));
let Deque = [];
let printMsg = [];

for (let i = 0; i < n; i++) {
  if (inputArr[i][0] === "push_front") {
    Deque.unshift(inputArr[i][1]);
  } else if (inputArr[i][0] === "push_back") {
    Deque.push(inputArr[i][1]);
  } else if (inputArr[i][0] === "pop_front") {
    printMsg.push(Deque.length ? Deque.shift(inputArr[i][1]) : -1);
  } else if (inputArr[i][0] === "pop_back") {
    printMsg.push(Deque.length ? Deque.pop(inputArr[i][1]) : -1);
  } else if (inputArr[i][0] === "size") {
    printMsg.push(Deque.length);
  } else if (inputArr[i][0] === "empty") {
    printMsg.push(Deque.length ? 0 : 1);
  } else if (inputArr[i][0] === "front") {
    printMsg.push(Deque.length ? Deque[0] : -1);
  } else if (inputArr[i][0] === "back") {
    printMsg.push(Deque.length ? Deque[Deque.length - 1] : -1);
  }
}

console.log(printMsg.join("\n"));

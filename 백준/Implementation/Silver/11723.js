// https://www.acmicpc.net/problem/11723

const [M, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const inputArr = input.map((e) => e.split(" "));

let NumObj = {};

for (let i = 1; i <= 20; i++) {
  NumObj[i] = 0;
}

const Add = (number) => {
  NumObj[number] = 1;
};

const Remove = (number) => {
  NumObj[number] = 0;
};

const Check = (number) => {
  console.log(NumObj[number]);
};

const Toggle = (number) => {
  NumObj[number] = NumObj[number] ? 0 : 1;
};

const All = () => {
  for (let i = 1; i <= 20; i++) {
    NumObj[i] = 1;
  }
};

const Empty = () => {
  for (let i = 1; i <= 20; i++) {
    NumObj[i] = 0;
  }
};

for (let i = 0; i < M; i++) {
  let word = inputArr[i][0];
  let number = +inputArr[i][1];
  switch (word) {
    case "add":
      Add(number);
      break;
    case "remove":
      Remove(number);
      break;
    case "check":
      Check(number);
      break;
    case "toggle":
      Toggle(number);
      break;
    case "all":
      All();
      break;
    case "empty":
      Empty();
      break;
  }
}

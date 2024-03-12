// https://www.acmicpc.net/problem/17609

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\n");

function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

function isPseudoPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      const withoutI = str.slice(0, i) + str.slice(i + 1);
      const withoutLenI =
        str.slice(0, str.length - i - 1) + str.slice(str.length - i);
      if (isPalindrome(withoutI) || isPalindrome(withoutLenI)) {
        return true;
      } else {
        return false;
      }
    }
  }
  return true;
}

let answer = [];

for (let j = 1; j < input.length; j++) {
  const str = input[j];
  if (isPalindrome(str)) {
    answer.push(0);
  } else if (isPseudoPalindrome(str)) {
    answer.push(1);
  } else {
    answer.push(2);
  }
}

console.log(answer.join("\n"));

// https://www.acmicpc.net/problem/2164

const input = +require("fs").readFileSync("./input.txt").toString();
let arr = Array.from({ length: input }, (_, index) => index + 1);

let nowCard = 0;
let isThrowAway = true;
while (arr.length - nowCard > 1) {
  if (isThrowAway) {
    nowCard++;
    isThrowAway = false;
  } else {
    arr.push(arr[nowCard++]);
    isThrowAway = true;
  }
}

console.log(arr[left]);

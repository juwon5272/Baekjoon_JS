// https://www.acmicpc.net/problem/14916

const input = +require("fs").readFileSync("./input.txt");
let money = input % 5;
let cnt = Math.floor(input / 5);

while (money <= input) {
  if (money % 2 == 0) {
    cnt += money / 2;
    break;
  } else {
    money += 5;
    cnt--;
  }
}
console.log(cnt);

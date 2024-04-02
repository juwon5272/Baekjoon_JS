// https://www.acmicpc.net/problem/10994

const Num = +require("fs").readFileSync("./input.txt").toString().trim();

let size = 4 * Num - 3;
let newArr = Array.from({ length: size }, () => new Array(size).fill(" "));

function drawStar(num, a) {
  let mid = Math.floor(size / 2);
  if (num == 0) return;
  for (let i = a; i < size - a; i++) {
    newArr[a][i] = "*";
    newArr[size - 1 - a][i] = "*";
    newArr[i][a] = "*";
    newArr[i][size - 1 - a] = "*";
  }
  drawStar(num - 1, a + 2);
}

drawStar(Num, 0);

for (let i = 0; i < size; i++) {
  console.log(newArr[i].join(""));
}

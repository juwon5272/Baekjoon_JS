// https://www.acmicpc.net/problem/1193

let input = Number(require("fs").readFileSync("./input.txt"));
let i = 0;
while (input > 0) {
  i++;
  input -= i;
}

if (i % 2 == 1) {
  console.log(1 - input + "/" + (i + input));
} else {
  console.log(i + input + "/" + (1 - input));
}

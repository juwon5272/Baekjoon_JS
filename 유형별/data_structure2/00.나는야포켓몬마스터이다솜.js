// https://www.acmicpc.net/problem/9012

let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(`\n`);
let M = +input[0].split(" ")[0];

let list = input.slice(1, M + 1);
let quiz = input.slice(M + 1);

function solution(poketmons, questions) {
  const map = new Map(
    poketmons.map((poketmon, index) => [poketmon, index + 1])
  );
  questions.forEach((question) => {
    if (Number.isNaN(+question)) console.log(map.get(question));
    else console.log(poketmons[+question - 1]);
  });
}
solution(list, quiz);

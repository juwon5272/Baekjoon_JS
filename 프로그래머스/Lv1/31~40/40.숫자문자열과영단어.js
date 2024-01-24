// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < numbers.length; i++) {
    s = s.split(numbers[i]).join(i);
  }
  return +s;
}

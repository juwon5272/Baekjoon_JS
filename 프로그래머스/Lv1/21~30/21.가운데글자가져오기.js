// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  return s.length % 2
    ? s
        .split("")
        .splice(Math.floor(s.length / 2), 1)
        .join("")
    : s
        .split("")
        .splice(s.length / 2 - 1, 2)
        .join("");
}

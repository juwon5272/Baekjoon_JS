// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  let answer = s.split(" ");
  return [Math.min(...answer), Math.max(...answer)].join(" ");
}

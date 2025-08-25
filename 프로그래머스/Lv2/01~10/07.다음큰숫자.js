// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  let answer = n;
  while (1) {
    ++answer;
    if (answer.toString(2).split("1").length == n.toString(2).split("1").length) break;
  }
  return answer;
}

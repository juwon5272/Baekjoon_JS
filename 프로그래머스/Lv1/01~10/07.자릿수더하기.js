// https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  var answer = 0;
  String(n)
    .split("")
    .map((e) => (answer += Number(e)));
  return answer;
}

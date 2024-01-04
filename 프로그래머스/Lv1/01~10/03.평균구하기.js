// https://school.programmers.co.kr/learn/courses/30/lessons/12944?language=javascript

function solution(arr) {
  var answer = 0;
  arr.forEach((e) => (answer += e));
  return answer / arr.length;
}

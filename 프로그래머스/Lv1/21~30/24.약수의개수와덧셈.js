// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 !== 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }
  return answer;
}

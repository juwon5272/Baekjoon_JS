// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}

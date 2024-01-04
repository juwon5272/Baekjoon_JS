// https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  var answer = [];
  let arr = String(n).split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(+arr[i]);
  }
  return answer;
}

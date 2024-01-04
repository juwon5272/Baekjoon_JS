// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  var answer = 0;
  numbers.forEach((e) => (answer += e));
  return 45 - answer;
}

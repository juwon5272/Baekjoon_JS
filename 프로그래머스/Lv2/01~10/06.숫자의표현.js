// https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let answer = 0;

  for (let start = 1; start <= n; start++) {
    let sum = 0;
    for (let end = start; end <= n; end++) {
      sum += end;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}

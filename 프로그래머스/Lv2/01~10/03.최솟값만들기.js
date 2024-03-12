// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  let answer = 0;
  let A_sort = A.sort((a, b) => a - b);
  let B_sort = B.sort((a, b) => b - a);
  A_sort.map((e, idx) => {
    answer += e * B_sort[idx];
  });

  return answer;
}

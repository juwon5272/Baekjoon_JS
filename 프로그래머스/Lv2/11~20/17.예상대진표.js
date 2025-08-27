// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let aWin = a;
  let bWin = b;
  let cnt = 0;

  while (aWin !== bWin) {
    aWin = Math.ceil(aWin / 2);
    bWin = Math.ceil(bWin / 2);
    cnt++;
  }

  return cnt;
}

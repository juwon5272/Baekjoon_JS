// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  const freq = new Map();

  for (let i = 0; i < tangerine.length; i++) {
    freq.set(tangerine[i], freq.get(tangerine[i]) ? freq.get(tangerine[i]) + 1 : 1);
  }
  const val = Array.from(freq.values()).sort((a, b) => b - a);
  let cnt = 0;
  let i = 0;
  while (k > 0) {
    k -= val[i++];
    cnt++;
  }
  return cnt;
}

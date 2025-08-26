12; // https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let ans = 0;

  while (n > 0) {
    if (n % 2) {
      ans++;
      n--;
    } else n /= 2;
  }

  return ans;
}

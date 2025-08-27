// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  let used = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      used.includes(words[i])
    ) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    used.push(words[i]);
  }

  return [0, 0];
}

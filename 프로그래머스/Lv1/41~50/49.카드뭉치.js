// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  for (let x of goal) {
    if (x == cards1[0]) {
      cards1.shift();
    } else if (x == cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}

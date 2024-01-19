// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  return money < (price * (count + 1) * count) / 2
    ? (price * (count + 1) * count) / 2 - money
    : 0;
}

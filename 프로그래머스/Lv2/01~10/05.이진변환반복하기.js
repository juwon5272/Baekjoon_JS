// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let answer = s;
  let zeroCnt = 0;
  let loopCnt = 0;
  while (answer != 1) {
    let strSplit = answer.split("0");
    zeroCnt += strSplit.length - 1;
    answer = strSplit.join("").length.toString(2);
    loopCnt++;
  }
  return [loopCnt, zeroCnt];
}

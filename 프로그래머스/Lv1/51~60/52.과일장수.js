// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  // score=score.sort((a,b)=>b-a);
  // score.map((el,idx)=>{idx%m==m-1?answer+=el*m:""})
  score
    .sort((a, b) => b - a)
    .map((el, idx) => {
      idx % m == m - 1 ? (answer += el * m) : "";
    });
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let sortSize = [];
  let width = [];
  let height = [];
  for (let i = 0; i < sizes.length; i++) {
    sortSize.push(sizes[i].sort((a, b) => b - a));
    width.push(sortSize[i][0]);
    height.push(sortSize[i][1]);
  }
  return Math.max(...width) * Math.max(...height);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  let newElement = [...elements, ...elements];
  let sumSet = new Set();

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j <= newElement.length - i; j++) {
      sumSet.add(newElement.slice(j, j + i).reduce((a, b) => a + b, 0));
    }
  }

  return sumSet.size;
}

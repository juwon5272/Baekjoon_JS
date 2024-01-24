// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(arr.sort((a, b) => a - b))];
  return answer;
}

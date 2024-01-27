// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
  return Math.min([...new Set(nums)].length, Math.floor(nums.length / 2));
}

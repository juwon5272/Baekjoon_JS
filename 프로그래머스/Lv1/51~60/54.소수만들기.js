// https://school.programmers.co.kr/learn/courses/30/lessons/12977

function isDecimal(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isDecimal(sum)) answer++;
      }
    }
  }
  return answer;
}

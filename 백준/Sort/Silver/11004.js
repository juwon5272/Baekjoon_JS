// https://www.acmicpc.net/problem/11004

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);
//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   let merged = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       merged.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       merged.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   while (leftIndex < left.length) {
//     merged.push(left[leftIndex]);
//     leftIndex++;
//   }
//   while (rightIndex < right.length) {
//     merged.push(right[rightIndex]);
//     rightIndex++;
//   }
//   return merged;
// }

// const fs = require("fs");
// const input = fs.readFileSync("./input.txt").toString().split("\n");

// let [n, k] = input[0].split(" ").map(Number);
// let arr = input[1].split(" ").map(Number);

// const sortedArr = mergeSort(arr);

// console.log(sortedArr[k - 1]);

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if (i > mid) {
    for (; j <= right; j++) sorted[k++] = arr[j];
  } else {
    for (; i <= mid; i++) sorted[k++] = arr[i];
  }
  for (let x = left; x <= right; x++) {
    arr[x] = sorted[x];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

let sorted = Array.from({ length: arr.length }, () => 0);
mergeSort(arr, 0, arr.length - 1);

console.log(arr[k - 1]);

// https://www.acmicpc.net/problem/24060

const [num, A] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" ").map(Number));
const [N, K] = num;

let cnt = 0;

function merge(arr, p, q, r) {
  let i, j, k;
  let n1 = q - p + 1;
  let n2 = r - q;

  let L = new Array(n1);
  let R = new Array(n2);

  for (i = 0; i < n1; i++) L[i] = arr[p + i];
  for (j = 0; j < n2; j++) R[j] = arr[q + 1 + j];

  i = 0;
  j = 0;
  k = p;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
    cnt++;
    if (cnt === K) {
      console.log(arr[k - 1]);
      return;
    }
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
    cnt++;
    if (cnt === K) {
      console.log(arr[k - 1]);
      return;
    }
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
    cnt++;
    if (cnt === K) {
      console.log(arr[k - 1]);
      return;
    }
  }
}

function mergeSort(arr, p, r) {
  if (p < r) {
    let q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

mergeSort(A, 0, N - 1);

if (cnt < K) {
  console.log(-1);
}

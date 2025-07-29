class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;

    while (current > 1 && this.heap[Math.floor(current / 2)] < this.heap[current]) {
      [this.heap[Math.floor(current / 2)], this.heap[current]] = [
        this.heap[current],
        this.heap[Math.floor(current / 2)],
      ];
      current = Math.floor(current / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) return 0;
    if (this.heap.length === 2) return this.heap.pop();

    const max = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    while (true) {
      let left = current * 2;
      let right = current * 2 + 1;
      let largest = current;

      if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === current) break;

      [this.heap[current], this.heap[largest]] = [this.heap[largest], this.heap[current]];
      current = largest;
    }

    return max;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1).map(Number);

const heap = new MaxHeap();
const result = [];

for (let x of commands) {
  if (x === 0) {
    result.push(heap.remove());
  } else {
    heap.insert(x);
  }
}

console.log(result.join("\n"));

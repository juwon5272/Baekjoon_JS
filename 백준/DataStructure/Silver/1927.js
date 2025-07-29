class MinHeap {
  constructor() {
    this.heap = [null];
  }

  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    while (current > 1 && this.heap[Math.floor(current / 2)] > this.heap[current]) {
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

    const min = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    while (true) {
      let left = current * 2;
      let right = current * 2 + 1;
      let smallest = current;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === current) break;

      [this.heap[current], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[current],
      ];
      current = smallest;
    }

    return min;
  }
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const commands = input.slice(1).map(Number);

const heap = new MinHeap();
const result = [];

for (let x of commands) {
  if (x === 0) {
    result.push(heap.remove());
  } else {
    heap.insert(x);
  }
}

console.log(result.join("\n"));

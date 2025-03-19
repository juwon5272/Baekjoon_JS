// https://www.acmicpc.net/problem/11724

const input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
let visited = Array(N + 1).fill(false);
let graph = [...Array(N + 1)].map(() => []);
let answer = 0;

arr.map(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start) => {
  visited[start] = true;
  for (const vertax of graph[start]) {
    if (!visited[vertax]) {
      dfs(vertax);
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    answer++;
  }
}
console.log(answer);
